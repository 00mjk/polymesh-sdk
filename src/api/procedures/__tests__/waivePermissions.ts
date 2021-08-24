import sinon from 'sinon';

import {
  getAuthorization,
  Params,
  prepareStorage,
  prepareWaivePermissions,
  Storage,
} from '~/api/procedures/waivePermissions';
import { Context } from '~/internal';
import { dsMockUtils, entityMockUtils, procedureMockUtils } from '~/testUtils/mocks';
import { Mocked } from '~/testUtils/types';
import { RoleType, TxTags } from '~/types';
import { PolymeshTx } from '~/types/internal';
import * as utilsConversionModule from '~/utils/conversion';

jest.mock(
  '~/api/entities/SecurityToken',
  require('~/testUtils/mocks/entities').mockSecurityTokenModule('~/api/entities/SecurityToken')
);
jest.mock(
  '~/api/entities/Identity',
  require('~/testUtils/mocks/entities').mockIdentityModule('~/api/entities/Identity')
);

describe('waivePermissions procedure', () => {
  const ticker = 'SOMETICKER';
  const did = 'someDid';
  const rawTicker = dsMockUtils.createMockTicker(ticker);

  let mockContext: Mocked<Context>;
  let addTransactionStub: sinon.SinonStub;
  let externalAgentsAbdicateTransaction: PolymeshTx<unknown[]>;

  beforeAll(() => {
    entityMockUtils.initMocks();
    dsMockUtils.initMocks();
    procedureMockUtils.initMocks();

    sinon.stub(utilsConversionModule, 'stringToTicker').returns(rawTicker);
  });

  beforeEach(() => {
    addTransactionStub = procedureMockUtils.getAddTransactionStub();
    externalAgentsAbdicateTransaction = dsMockUtils.createTxStub('externalAgents', 'abdicate');
    mockContext = dsMockUtils.getContextInstance();
  });

  afterEach(() => {
    entityMockUtils.reset();
    procedureMockUtils.reset();
    dsMockUtils.reset();
  });

  afterAll(() => {
    entityMockUtils.cleanup();
    procedureMockUtils.cleanup();
    dsMockUtils.cleanup();
  });

  test('should throw an error if the Identity is not part of the Agent Group', async () => {
    const token = entityMockUtils.getSecurityTokenInstance({
      ticker,
      isEqual: false,
    });

    const proc = procedureMockUtils.getInstance<Params, void, Storage>(mockContext, {
      token,
    });

    let error;

    try {
      await prepareWaivePermissions.call(proc, {
        token,
        identity: entityMockUtils.getIdentityInstance({
          did,
          getTokenPermissions: [
            {
              token,
              group: entityMockUtils.getKnownPermissionGroupInstance(),
            },
          ],
        }),
      });
    } catch (err) {
      error = err;
    }

    expect(error.message).toBe("The Identity is not part of the token's Agent Group");
  });

  test('should add a abdicate transaction to the queue', async () => {
    const token = entityMockUtils.getSecurityTokenInstance({
      ticker,
      isEqual: true,
    });

    const proc = procedureMockUtils.getInstance<Params, void, Storage>(mockContext, {
      token,
    });

    await prepareWaivePermissions.call(proc, {
      token,
      identity: entityMockUtils.getIdentityInstance({
        did,
        getTokenPermissions: [
          {
            token,
            group: entityMockUtils.getKnownPermissionGroupInstance(),
          },
        ],
      }),
    });

    sinon.assert.calledWith(addTransactionStub, externalAgentsAbdicateTransaction, {}, rawTicker);
  });

  describe('prepareStorage', () => {
    test('should return the security token', () => {
      const token = entityMockUtils.getSecurityTokenInstance({
        ticker,
      });

      const proc = procedureMockUtils.getInstance<Params, void, Storage>(mockContext);
      const boundFunc = prepareStorage.bind(proc);

      const result = boundFunc({
        identity: entityMockUtils.getIdentityInstance({
          did,
        }),
        token,
      });

      expect(result).toEqual({
        token,
      });
    });
  });

  describe('getAuthorization', () => {
    test('should return the appropriate roles and permissions', () => {
      const token = entityMockUtils.getSecurityTokenInstance({
        ticker,
      });

      const proc = procedureMockUtils.getInstance<Params, void, Storage>(mockContext, {
        token,
      });
      const boundFunc = getAuthorization.bind(proc);

      expect(
        boundFunc({
          identity: entityMockUtils.getIdentityInstance({
            did,
          }),
          token,
        })
      ).toEqual({
        permissions: {
          transactions: [TxTags.externalAgents.Abdicate],
          tokens: [token],
          portfolios: [],
        },
        roles: [{ type: RoleType.Identity, did }],
      });
    });
  });
});
