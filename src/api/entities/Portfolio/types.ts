import BigNumber from 'bignumber.js';

import { Account, SecurityToken } from '~/internal';
import {
  SettlementDirectionEnum as SettlementDirection,
  SettlementResultEnum as SettlementResult,
} from '~/middleware/types';
import { Balance, Leg } from '~/types';

export interface PortfolioBalance extends Balance {
  token: SecurityToken;
}

export interface SettlementLeg extends Leg {
  direction: SettlementDirection;
}

export interface HistoricSettlement {
  blockNumber: BigNumber;
  status: SettlementResult;
  /**
   * Array of accounts that participated by affirming the settlement
   */
  accounts: Account[];
  legs: SettlementLeg[];
}
