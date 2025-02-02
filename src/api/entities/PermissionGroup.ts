import BigNumber from 'bignumber.js';

import { Context, Entity } from '~/internal';
import { GroupPermissions, PermissionGroupType } from '~/types';

export interface UniqueIdentifiers {
  ticker: string;
  id?: BigNumber;
  type?: PermissionGroupType;
}

/**
 * Represents a group of permissions for a Security Token
 */
export abstract class PermissionGroup extends Entity<UniqueIdentifiers, unknown> {
  /**
   * @hidden
   */
  public constructor(identifiers: UniqueIdentifiers, context: Context) {
    super(identifiers, context);

    const { ticker } = identifiers;

    this.ticker = ticker;
  }

  public ticker: string;

  /**
   * Retrieve the Permissions associated with this Permission Group
   */
  public abstract getPermissions(): Promise<GroupPermissions>;
}
