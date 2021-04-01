import BigNumber from 'bignumber.js';

import { Checkpoint } from '~/api/entities/Checkpoint';
import { CheckpointSchedule } from '~/api/entities/CheckpointSchedule';
import { Params as CorporateActionParams, UniqueIdentifiers } from '~/api/entities/CorporateAction';
import {
  Context,
  CorporateAction,
  DefaultPortfolio,
  NumberedPortfolio,
  PolymeshError,
} from '~/internal';
import { CorporateActionKind, DividendDistributionDetails, ErrorCode } from '~/types';
import {
  balanceToBigNumber,
  boolToBoolean,
  corporateActionIdentifierToCaId,
} from '~/utils/conversion';

export interface DividendDistributionParams {
  origin: DefaultPortfolio | NumberedPortfolio;
  currency: string;
  perShare: BigNumber;
  maxAmount: BigNumber;
  expiryDate: null | Date;
  paymentDate: Date;
}

export type Params = Omit<CorporateActionParams, 'kind'> & DividendDistributionParams;

/**
 * Represents a Corporate Action via which a Security Token issuer wishes to distribute dividends
 *   between a subset of the Tokenholders (targets)
 */
export class DividendDistribution extends CorporateAction {
  /**
   * Portfolio from which the dividends will be distributed
   */
  public origin: DefaultPortfolio | NumberedPortfolio;

  /**
   * ticker of the currency in which dividends are being distibuted
   */
  public currency: string;

  /**
   * amount of `currency` to pay for each share the Tokenholder holds
   */
  public perShare: BigNumber;

  /**
   * maximum amount of `currency` to be distributed. Distributions are "first come, first served", so funds can be depleted before
   *   every Tokenholder receives their corresponding amount
   */
  public maxAmount: BigNumber;

  /**
   * date after which dividends can no longer be paid/reclaimed. A null value means the distribution never expires
   */
  public expiryDate: null | Date;

  /**
   * date starting from which dividends can be paid/reclaimed
   */
  public paymentDate: Date;

  protected kind!: CorporateActionKind.UnpredictableBenefit;

  /**
   * @hidden
   */
  public constructor(args: UniqueIdentifiers & Params, context: Context) {
    const {
      origin,
      currency,
      perShare,
      maxAmount,
      expiryDate,
      paymentDate,
      ...corporateActionArgs
    } = args;

    super({ ...corporateActionArgs, kind: CorporateActionKind.UnpredictableBenefit }, context);

    this.origin = origin;
    this.currency = currency;
    this.perShare = perShare;
    this.maxAmount = maxAmount;
    this.expiryDate = expiryDate;
    this.paymentDate = paymentDate;
  }

  /**
   * Retrieve the Checkpoint associated with this Dividend Distribution. If the Checkpoint is scheduled and has not been created yet,
   *   the corresponding CheckpointSchedule is returned instead
   */
  public async checkpoint(): Promise<Checkpoint | CheckpointSchedule> {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const checkpoint = (await super.checkpoint())!;

    return checkpoint;
  }

  /**
   * Retrieve whether the Distribution exists
   */
  public async exists(): Promise<boolean> {
    const { ticker, id, context } = this;

    const distribution = await context.polymeshApi.query.capitalDistribution.distributions(
      corporateActionIdentifierToCaId({ ticker, localId: id }, context)
    );

    return distribution.isSome;
  }

  /**
   * Retrieve details associated with this Dividend Distribution
   */
  public async details(): Promise<DividendDistributionDetails> {
    const { ticker, id, context } = this;

    const distribution = await context.polymeshApi.query.capitalDistribution.distributions(
      corporateActionIdentifierToCaId({ ticker, localId: id }, context)
    );

    if (distribution.isNone) {
      throw new PolymeshError({
        code: ErrorCode.DataUnavailable,
        message: 'The Dividend Distribution no longer exists',
      });
    }

    const { reclaimed, remaining } = distribution.unwrap();

    return {
      remainingFunds: balanceToBigNumber(remaining),
      fundsReclaimed: boolToBoolean(reclaimed),
    };
  }
}
