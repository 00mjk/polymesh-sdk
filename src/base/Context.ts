import stringToU8a from '@polkadot/util/string/toU8a';
import { ApiPromise, Keyring } from '@polymathnetwork/polkadot/api';
import { IdentityId } from '@polymathnetwork/polkadot/types/interfaces';
import { IKeyringPair } from '@polymathnetwork/polkadot/types/types';
import BigNumber from 'bignumber.js';

import { Identity } from '~/api/entities';
import { PolymeshError } from '~/base';
import { ErrorCode } from '~/types';
import { balanceToBigNumber } from '~/utils';

interface SignerData {
  currentPair: IKeyringPair;
  did: IdentityId;
}

interface ConstructorParams {
  polymeshApi: ApiPromise;
  keyring: Keyring;
  pair?: SignerData;
}

interface AccountData {
  address: string;
  name?: string;
}

/**
 * Context in which the SDK is being used
 *
 * - Holds the current low level API
 * - Holds the current keyring pair
 * - Holds the current Identity
 */
export class Context {
  private keyring: Keyring;

  public polymeshApi: ApiPromise;

  public currentPair?: IKeyringPair;

  public currentIdentity?: Identity;

  /**
   * @hidden
   */
  private constructor(params: ConstructorParams) {
    const { polymeshApi, keyring, pair } = params;

    this.polymeshApi = polymeshApi;
    this.keyring = keyring;

    if (pair) {
      this.currentPair = pair.currentPair;
      this.currentIdentity = new Identity({ did: pair.did.toString() }, this);
    }
  }

  static async create(params: { polymeshApi: ApiPromise; seed: string }): Promise<Context>;

  static async create(params: { polymeshApi: ApiPromise; keyring: Keyring }): Promise<Context>;

  static async create(params: { polymeshApi: ApiPromise; uri: string }): Promise<Context>;

  static async create(params: { polymeshApi: ApiPromise }): Promise<Context>;

  /**
   * Create the Context instance
   */
  static async create(params: {
    polymeshApi: ApiPromise;
    seed?: string;
    keyring?: Keyring;
    uri?: string;
  }): Promise<Context> {
    const { polymeshApi, seed, keyring: passedKeyring, uri } = params;

    let keyring = new Keyring({ type: 'sr25519' });
    let currentPair: IKeyringPair | undefined;

    if (passedKeyring) {
      keyring = passedKeyring;
      currentPair = keyring.getPairs()[0];
    } else if (seed) {
      if (seed.length !== 32) {
        throw new PolymeshError({
          code: ErrorCode.ValidationError,
          message: 'Seed must be 32 characters in length',
        });
      }

      currentPair = keyring.addFromSeed(stringToU8a(seed));
    } else if (uri) {
      currentPair = keyring.addFromUri(uri);
    }

    if (currentPair) {
      try {
        const identityIds = await polymeshApi.query.identity.keyToIdentityIds(
          currentPair.publicKey
        );
        const did = identityIds.unwrap().asUnique;

        return new Context({ polymeshApi, keyring, pair: { currentPair, did } });
      } catch (err) {
        throw new PolymeshError({
          code: ErrorCode.FatalError,
          message: 'There is no Identity associated to this account',
        });
      }
    } else {
      return new Context({ polymeshApi, keyring });
    }
  }

  /**
   * Retrieve a list of addresses associated with the account
   */
  public getAccounts = (): Array<AccountData> => {
    const { keyring } = this;
    return keyring.getPairs().map(({ address, meta }) => {
      return { address, name: meta.name };
    });
  };

  /**
   * Set a pair as the current account keyring pair
   */
  public setPair = (address: string): void => {
    const { keyring } = this;
    try {
      this.currentPair = keyring.getPair(address);
    } catch (e) {
      throw new PolymeshError({
        code: ErrorCode.FatalError,
        message: 'The address is not present in the keyring set',
      });
    }
  };

  /**
   * Retrieve the account level POLY balance
   */
  public accountBalance = async (accountId?: string): Promise<BigNumber> => {
    const { currentPair } = this;
    if (accountId || currentPair) {
      let address = '';
      if (accountId) {
        address = accountId;
      } else {
        address = (currentPair as IKeyringPair).address;
      }
      const balance = await this.polymeshApi.query.balances.freeBalance(address);
      return balanceToBigNumber(balance);
    } else {
      throw new PolymeshError({
        code: ErrorCode.FatalError,
        message: 'There is no account associated with the SDK',
      });
    }
  };
}
