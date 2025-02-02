import BigNumber from 'bignumber.js';
import sinon from 'sinon';

import { Context, CustomPermissionGroup, PermissionGroup, TransactionQueue } from '~/internal';
import { dsMockUtils, entityMockUtils, procedureMockUtils } from '~/testUtils/mocks';
import * as utilsConversionModule from '~/utils/conversion';

jest.mock(
  '~/base/Procedure',
  require('~/testUtils/mocks/procedure').mockProcedureModule('~/base/Procedure')
);

describe('CustomPermissionGroup class', () => {
  const ticker = 'TOKENNAME';
  const id = new BigNumber(1);

  let context: Context;

  beforeAll(() => {
    dsMockUtils.initMocks();
    entityMockUtils.initMocks();
    procedureMockUtils.initMocks();

    sinon.stub(utilsConversionModule, 'stringToTicker');
  });

  beforeEach(() => {
    context = dsMockUtils.getContextInstance();
  });

  afterEach(() => {
    dsMockUtils.reset();
    entityMockUtils.reset();
    procedureMockUtils.reset();
  });

  afterAll(() => {
    dsMockUtils.cleanup();
    entityMockUtils.cleanup();
    procedureMockUtils.cleanup();
  });

  test('should extend PermissionGroup', () => {
    expect(CustomPermissionGroup.prototype instanceof PermissionGroup).toBe(true);
  });

  describe('constructor', () => {
    test('should assign id to instance', () => {
      const customPermissionGroup = new CustomPermissionGroup({ id, ticker }, context);

      expect(customPermissionGroup.id).toBe(id);
      expect(customPermissionGroup.ticker).toBe(ticker);
    });
  });

  describe('method: isUniqueIdentifiers', () => {
    test('should return true if the object conforms to the interface', () => {
      expect(CustomPermissionGroup.isUniqueIdentifiers({ id: new BigNumber(1), ticker })).toBe(
        true
      );
      expect(CustomPermissionGroup.isUniqueIdentifiers({})).toBe(false);
      expect(CustomPermissionGroup.isUniqueIdentifiers({ id: 1 })).toBe(false);
    });
  });

  describe('method: toJson', () => {
    test('should return a human readable version of the entity', () => {
      const customPermissionGroup = new CustomPermissionGroup({ id, ticker }, context);
      expect(customPermissionGroup.toJson()).toEqual({
        id,
        ticker,
      });
    });
  });

  describe('method: setPermissions', () => {
    test('should prepare the procedure with the correct arguments and context, and return the resulting transaction queue', async () => {
      const customPermissionGroup = new CustomPermissionGroup({ id, ticker }, context);

      const args = {
        permissions: {
          transactionGroups: [],
        },
      };

      const expectedQueue = ('someQueue' as unknown) as TransactionQueue<void>;

      procedureMockUtils
        .getPrepareStub()
        .withArgs(
          { args: { ...args, group: customPermissionGroup }, transformer: undefined },
          context
        )
        .resolves(expectedQueue);

      const queue = await customPermissionGroup.setPermissions(args);

      expect(queue).toBe(expectedQueue);
    });
  });

  describe('method: getPermissions', () => {
    test('should return a list of permissions and transaction groups', async () => {
      const customPermissionGroup = new CustomPermissionGroup({ id, ticker }, context);

      sinon.stub(utilsConversionModule, 'numberToU32');

      dsMockUtils.createQueryStub('externalAgents', 'groupPermissions', {
        returnValue: dsMockUtils.createMockOption(
          dsMockUtils.createMockExtrinsicPermissions({
            These: [
              /* eslint-disable @typescript-eslint/naming-convention */
              dsMockUtils.createMockPalletPermissions({
                pallet_name: dsMockUtils.createMockPalletName('Sto'),
                dispatchable_names: dsMockUtils.createMockDispatchableNames({
                  These: [dsMockUtils.createMockDispatchableName('invest')],
                }),
              }),
              dsMockUtils.createMockPalletPermissions({
                pallet_name: dsMockUtils.createMockPalletName('Identity'),
                dispatchable_names: dsMockUtils.createMockDispatchableNames({
                  These: [dsMockUtils.createMockDispatchableName('add_claim')],
                }),
              }),
              /* eslint-enable @typescript-eslint/naming-convention */
            ],
          })
        ),
      });

      const result = await customPermissionGroup.getPermissions();

      expect(result).toEqual({
        transactions: { type: 'Include', values: ['sto.invest', 'identity.addClaim'] },
        transactionGroups: [],
      });
    });
  });

  describe('method: exists', () => {
    test('should return whether the Custom Permission Group exists', async () => {
      const customPermissionGroup = new CustomPermissionGroup({ id, ticker }, context);

      dsMockUtils.createQueryStub('externalAgents', 'aGIdSequence', {
        returnValue: dsMockUtils.createMockU32(0),
      });

      await expect(customPermissionGroup.exists()).resolves.toBe(false);

      dsMockUtils.createQueryStub('externalAgents', 'aGIdSequence', {
        returnValue: dsMockUtils.createMockU32(10),
      });

      await expect(customPermissionGroup.exists()).resolves.toBe(true);

      customPermissionGroup.id = new BigNumber(0);

      return expect(customPermissionGroup.exists()).resolves.toBe(false);
    });
  });
});
