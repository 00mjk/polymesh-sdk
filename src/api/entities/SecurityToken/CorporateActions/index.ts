import { QueryableStorageEntry } from '@polkadot/api/types';
import { Vec } from '@polkadot/types/codec';
import type { ITuple } from '@polkadot/types/types';
import { IdentityId, TargetIdentities, Tax } from 'polymesh-types/types';

import {
  Context,
  Identity,
  modifyCorporateActionsAgent,
  ModifyCorporateActionsAgentParams,
  Namespace,
  removeCorporateActionsAgent,
  SecurityToken,
} from '~/internal';
import { ProcedureMethod } from '~/types/internal';
import {
  identityIdToString,
  permillToBigNumber,
  stringToTicker,
  targetIdentitiesToCorporateActionTargets,
} from '~/utils/conversion';
import { createProcedureMethod } from '~/utils/internal';

import { Distributions } from './Distributions';
import { CorporateActionDefaults } from './types';

/**
 * Handles all Security Token Corporate Actions related functionality
 */
export class CorporateActions extends Namespace<SecurityToken> {
  public distributions: Distributions;

  /**
   * @hidden
   */
  constructor(parent: SecurityToken, context: Context) {
    super(parent, context);

    const { ticker } = parent;

    this.distributions = new Distributions(parent, context);

    this.setAgent = createProcedureMethod(
      { getProcedureAndArgs: args => [modifyCorporateActionsAgent, { ticker, ...args }] },
      context
    );

    this.removeAgent = createProcedureMethod(
      { getProcedureAndArgs: () => [removeCorporateActionsAgent, { ticker }] },
      context
    );
  }

  /**
   * Assign a new Corporate Actions Agent for the Security Token
   *
   * @param args.target - identity to be set as Corporate Actions Agent
   * @param args.requestExpiry - date at which the authorization request to modify the Corporate Actions Agent expires (optional, never expires if a date is not provided)
   *
   * @note this may create AuthorizationRequests which have to be accepted by
   *   the corresponding Account. An Account or Identity can
   *   fetch its pending Authorization Requests by calling `authorizations.getReceived`
   *
   * @note required role:
   *   - Security Token Owner
   */
  public setAgent: ProcedureMethod<ModifyCorporateActionsAgentParams, void>;

  /**
   * Remove the Corporate Actions Agent of the Security Token
   *
   * @note this action will leave the Security Token owner as the Corporate Actions Agent
   *
   * @note required role:
   *   - Security Token Owner
   */
  public removeAgent: ProcedureMethod<void, void>;

  /**
   * Retrieve the Security Token's Corporate Actions agent
   */
  public async getAgent(): Promise<Identity> {
    const {
      context: {
        polymeshApi: {
          query: { corporateAction },
        },
      },
      parent: { ticker },
      context,
    } = this;

    const rawTicker = stringToTicker(ticker, context);

    const agent = await corporateAction.agent(rawTicker);

    if (agent.isNone) {
      const token = new SecurityToken({ ticker }, context);
      const { owner } = await token.details();
      return owner;
    }

    return new Identity({ did: identityIdToString(agent.unwrap()) }, context);
  }

  /**
   * Retrieve default values for targets, global tax withholding percentage and per-identity tax withholding perecentages.
   *
   *
   * @note These values are applied to every Corporate Action that is created while they are set.
   *   They can be overriden by passing them explicitly when creating a Corporate Action
   */
  public async getDefaults(): Promise<CorporateActionDefaults> {
    const {
      parent: { ticker },
      context: {
        polymeshApi: {
          query: { corporateAction },
        },
        polymeshApi,
      },
      context,
    } = this;

    const rawTicker = stringToTicker(ticker, context);

    const [targets, defaultTaxWithholding, taxWithholdings] = await polymeshApi.queryMulti<
      [TargetIdentities, Tax, Vec<ITuple<[IdentityId, Tax]>>]
    >([
      [
        (corporateAction.defaultTargetIdentities as unknown) as QueryableStorageEntry<'promise'>,
        rawTicker,
      ],
      [
        (corporateAction.defaultWithholdingTax as unknown) as QueryableStorageEntry<'promise'>,
        rawTicker,
      ],
      [
        (corporateAction.didWithholdingTax as unknown) as QueryableStorageEntry<'promise'>,
        rawTicker,
      ],
    ]);

    return {
      targets: targetIdentitiesToCorporateActionTargets(targets, context),
      defaultTaxWithholding: permillToBigNumber(defaultTaxWithholding),
      taxWithholdings: taxWithholdings.map(([identity, tax]) => ({
        identity: new Identity({ did: identityIdToString(identity) }, context),
        percentage: permillToBigNumber(tax),
      })),
    };
  }
}
