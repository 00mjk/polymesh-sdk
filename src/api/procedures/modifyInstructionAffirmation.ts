import { u32, u64 } from '@polkadot/types';
import BigNumber from 'bignumber.js';
import P from 'bluebird';
import {
  AffirmationStatus as MeshAffirmationStatus,
  PortfolioId,
  TxTag,
  TxTags,
} from 'polymesh-types/types';

import { assertInstructionValid } from '~/api/procedures/utils';
import { Instruction, PolymeshError, Procedure } from '~/internal';
import { AffirmationStatus, DefaultPortfolio, ErrorCode, Leg, NumberedPortfolio } from '~/types';
import {
  InstructionAffirmationOperation,
  PolymeshTx,
  ProcedureAuthorization,
} from '~/types/internal';
import { tuple } from '~/types/utils';
import {
  meshAffirmationStatusToAffirmationStatus,
  numberToU32,
  numberToU64,
  portfolioIdToMeshPortfolioId,
  portfolioLikeToPortfolioId,
} from '~/utils/conversion';

export interface ModifyInstructionAffirmationParams {
  id: BigNumber;
  operation: InstructionAffirmationOperation;
}

export interface Storage {
  portfolios: (DefaultPortfolio | NumberedPortfolio)[];
  senderLegAmount: number;
  totalLegAmount: number;
}

/**
 * @hidden
 */
export async function prepareModifyInstructionAffirmation(
  this: Procedure<ModifyInstructionAffirmationParams, Instruction, Storage>,
  args: ModifyInstructionAffirmationParams
): Promise<Instruction> {
  const {
    context: {
      polymeshApi: {
        tx: { settlement: settlementTx },
        query: { settlement },
      },
    },
    context,
    storage: { portfolios, senderLegAmount, totalLegAmount },
  } = this;

  const { operation, id } = args;

  const instruction = new Instruction({ id }, context);

  await assertInstructionValid(instruction, context);

  if (!portfolios.length) {
    throw new PolymeshError({
      code: ErrorCode.UnmetPrerequisite,
      message: 'Current Identity is not involved in this Instruction',
    });
  }

  const rawInstructionId = numberToU64(id, context);
  const rawPortfolioIds: PortfolioId[] = portfolios.map(portfolio =>
    portfolioIdToMeshPortfolioId(portfolioLikeToPortfolioId(portfolio), context)
  );

  const excludeCriteria: AffirmationStatus[] = [];
  let errorMessage: string;
  let transaction: PolymeshTx<[u64, PortfolioId[], u32]> | null = null;

  switch (operation) {
    case InstructionAffirmationOperation.Affirm: {
      excludeCriteria.push(AffirmationStatus.Affirmed);
      errorMessage = 'The Instruction is already affirmed';
      transaction = settlementTx.affirmInstruction;

      break;
    }
    case InstructionAffirmationOperation.Withdraw: {
      excludeCriteria.push(AffirmationStatus.Pending, AffirmationStatus.Rejected);
      errorMessage = 'The instruction is not affirmed';
      transaction = settlementTx.withdrawAffirmation;

      break;
    }
    case InstructionAffirmationOperation.Reject: {
      excludeCriteria.push(AffirmationStatus.Rejected);
      errorMessage = 'The Instruction cannot be rejected';

      break;
    }
  }

  const multiArgs = rawPortfolioIds.map(portfolioId => tuple(portfolioId, rawInstructionId));

  const rawAffirmationStatuses = await settlement.userAffirmations.multi<MeshAffirmationStatus>(
    multiArgs
  );

  const affirmationStatuses = rawAffirmationStatuses.map(meshAffirmationStatusToAffirmationStatus);

  const validPortfolioIds = rawPortfolioIds.filter(
    (_, index) => !excludeCriteria.includes(affirmationStatuses[index])
  );

  if (!validPortfolioIds.length) {
    throw new PolymeshError({
      code: ErrorCode.NoDataChange,
      message: errorMessage,
    });
  }

  // rejection works a bit different
  if (transaction) {
    this.addTransaction(
      transaction,
      { batchSize: senderLegAmount },
      rawInstructionId,
      validPortfolioIds,
      numberToU32(senderLegAmount, context)
    );
  } else {
    this.addTransaction(
      settlementTx.rejectInstruction,
      { batchSize: totalLegAmount },
      rawInstructionId,
      validPortfolioIds[0],
      numberToU32(totalLegAmount, context)
    );
  }

  return instruction;
}

/**
 * @hidden
 */
export async function getAuthorization(
  this: Procedure<ModifyInstructionAffirmationParams, Instruction, Storage>,
  { operation }: ModifyInstructionAffirmationParams
): Promise<ProcedureAuthorization> {
  const {
    storage: { portfolios },
  } = this;

  let transactions: TxTag[];

  switch (operation) {
    case InstructionAffirmationOperation.Affirm: {
      transactions = [TxTags.settlement.AffirmInstruction];

      break;
    }
    case InstructionAffirmationOperation.Withdraw: {
      transactions = [TxTags.settlement.WithdrawAffirmation];

      break;
    }
    case InstructionAffirmationOperation.Reject: {
      transactions = [TxTags.settlement.RejectInstruction];

      break;
    }
  }

  return {
    permissions: {
      portfolios,
      transactions,
      tokens: [],
    },
  };
}

/**
 * @hidden
 */
export async function prepareStorage(
  this: Procedure<ModifyInstructionAffirmationParams, Instruction, Storage>,
  { id }: ModifyInstructionAffirmationParams
): Promise<Storage> {
  const { context } = this;
  const instruction = new Instruction({ id }, context);
  const [{ data: legs }, { did }] = await Promise.all([
    instruction.getLegs(),
    context.getCurrentIdentity(),
  ]);

  const [portfolios, senderLegAmount] = await P.reduce<
    Leg,
    [(DefaultPortfolio | NumberedPortfolio)[], number]
  >(
    legs,
    async (result, { from, to }) => {
      const [fromIsCustodied, toIsCustodied] = await Promise.all([
        from.isCustodiedBy({ identity: did }),
        to.isCustodiedBy({ identity: did }),
      ]);

      const [custodiedPortfolios, amount] = result;

      let res = [...custodiedPortfolios];
      let legAmount = amount;

      if (fromIsCustodied) {
        res = [...res, from];
        legAmount += 1;
      }

      if (toIsCustodied) {
        res = [...res, to];
      }

      return tuple(res, legAmount);
    },
    [[], 0]
  );

  return { portfolios, senderLegAmount, totalLegAmount: legs.length };
}

/**
 * @hidden
 */
export const modifyInstructionAffirmation = (): Procedure<
  ModifyInstructionAffirmationParams,
  Instruction,
  Storage
> => new Procedure(prepareModifyInstructionAffirmation, getAuthorization, prepareStorage);
