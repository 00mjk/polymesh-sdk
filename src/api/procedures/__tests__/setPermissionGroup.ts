import BigNumber from 'bignumber.js';
import { AgentGroup } from 'polymesh-types/types';
import sinon from 'sinon';

import {
  getAuthorization,
  Params,
  prepareSetPermissionGroup,
  prepareStorage,
  Storage,
} from '~/api/procedures/setPermissionGroup';
import { Context, CustomPermissionGroup, KnownPermissionGroup } from '~/internal';
import { dsMockUtils, entityMockUtils, procedureMockUtils } from '~/testUtils/mocks';
import { Mocked } from '~/testUtils/types';
import { PermissionGroupType, PermissionType, TxTags } from '~/types';
import { PolymeshTx } from '~/types/internal';
import * as utilsConversionModule from '~/utils/conversion';

jest.mock(
  '~/api/entities/SecurityToken',
  require('~/testUtils/mocks/entities').mockSecurityTokenModule('~/api/entities/SecurityToken')
);

describe('setPermissionGroup procedure', () => {
  const ticker = 'SOME_TICKER';
  const did = 'someDid';
  const rawTicker = dsMockUtils.createMockTicker(ticker);
  const rawIdentityId = dsMockUtils.createMockIdentityId(did);
  const rawExtrinsicPermissions = dsMockUtils.createMockExtrinsicPermissions({
    These: [
      /* eslint-disable @typescript-eslint/naming-convention */
      dsMockUtils.createMockPalletPermissions({
        pallet_name: dsMockUtils.createMockPalletName('Sto'),
        dispatchable_names: dsMockUtils.createMockDispatchableNames({
          These: [dsMockUtils.createMockDispatchableName('invest')],
        }),
      }),
      /* eslint-enable @typescript-eslint/naming-convention */
    ],
  });

  let mockContext: Mocked<Context>;
  let addTransactionStub: sinon.SinonStub;
  let externalAgentsChangeGroupTransaction: PolymeshTx<unknown[]>;
  let permissionGroupIdentifierToAgentGroupStub: sinon.SinonStub;
  let stringToTickerStub: sinon.SinonStub;
  let stringToIdentityIdStub: sinon.SinonStub;

  beforeAll(() => {
    entityMockUtils.initMocks();
    dsMockUtils.initMocks();
    procedureMockUtils.initMocks();

    sinon
      .stub(utilsConversionModule, 'transactionPermissionsToExtrinsicPermissions')
      .returns(rawExtrinsicPermissions);

    permissionGroupIdentifierToAgentGroupStub = sinon.stub(
      utilsConversionModule,
      'permissionGroupIdentifierToAgentGroup'
    );
    stringToTickerStub = sinon.stub(utilsConversionModule, 'stringToTicker');
    stringToIdentityIdStub = sinon.stub(utilsConversionModule, 'stringToIdentityId');
  });

  beforeEach(() => {
    addTransactionStub = procedureMockUtils.getAddTransactionStub();
    externalAgentsChangeGroupTransaction = dsMockUtils.createTxStub(
      'externalAgents',
      'changeGroup'
    );
    mockContext = dsMockUtils.getContextInstance();
    stringToTickerStub.returns(rawTicker);
    stringToIdentityIdStub.returns(rawIdentityId);
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

  test('should throw an error if the target is the last agent with full permissions', async () => {
    const group = entityMockUtils.getKnownPermissionGroupInstance({
      ticker,
      type: PermissionGroupType.Full,
    });

    const proc = procedureMockUtils.getInstance<
      Params,
      CustomPermissionGroup | KnownPermissionGroup,
      Storage
    >(mockContext, {
      token: entityMockUtils.getSecurityTokenInstance({
        ticker,
        permissionsGetAgents: [
          {
            agent: entityMockUtils.getAgentInstance(),
            group,
          },
        ],
      }),
    });

    let error;

    try {
      await prepareSetPermissionGroup.call(proc, {
        agent: entityMockUtils.getAgentInstance({
          getPermissionGroup: group,
        }),
        group: {
          transactions: {
            type: PermissionType.Include,
            values: [],
          },
        },
      });
    } catch (err) {
      error = err;
    }

    expect(error.message).toBe(
      'The target is the last Agent with full permissions for this Security Token. There should always be at least one agent with full permissions'
    );
  });

  test('should throw an error if the Agent is already part of the permission group', async () => {
    const proc = procedureMockUtils.getInstance<
      Params,
      CustomPermissionGroup | KnownPermissionGroup,
      Storage
    >(mockContext, {
      token: entityMockUtils.getSecurityTokenInstance({
        ticker,
      }),
    });

    let error;

    try {
      await prepareSetPermissionGroup.call(proc, {
        agent: entityMockUtils.getAgentInstance({
          getPermissionGroup: entityMockUtils.getKnownPermissionGroupInstance({
            ticker,
            type: PermissionGroupType.PolymeshV1Caa,
          }),
        }),
        group: entityMockUtils.getKnownPermissionGroupInstance({
          ticker,
          type: PermissionGroupType.PolymeshV1Caa,
        }),
      });
    } catch (err) {
      error = err;
    }

    expect(error.message).toBe('The Agent is already part of this permission group');

    const id = new BigNumber(1);

    try {
      await prepareSetPermissionGroup.call(proc, {
        agent: entityMockUtils.getAgentInstance({
          getPermissionGroup: entityMockUtils.getCustomPermissionGroupInstance({
            ticker,
            id,
          }),
        }),
        group: entityMockUtils.getCustomPermissionGroupInstance({
          ticker,
          id,
        }),
      });
    } catch (err) {
      error = err;
    }

    expect(error.message).toBe('The Agent is already part of this permission group');
  });

  test('should add a change group transaction to the queue', async () => {
    const id = new BigNumber(1);

    const proc = procedureMockUtils.getInstance<
      Params,
      CustomPermissionGroup | KnownPermissionGroup,
      Storage
    >(mockContext, {
      token: entityMockUtils.getSecurityTokenInstance({
        ticker,
      }),
    });

    let rawAgentGroup = dsMockUtils.createMockAgentGroup('Full');

    procedureMockUtils.getAddProcedureStub().resolves({
      transform: sinon.stub().returns(rawAgentGroup),
    });

    permissionGroupIdentifierToAgentGroupStub.returns(dsMockUtils.createMockAgentGroup());

    await prepareSetPermissionGroup.call(proc, {
      agent: entityMockUtils.getAgentInstance({
        getPermissionGroup: entityMockUtils.getKnownPermissionGroupInstance({
          ticker,
          type: PermissionGroupType.Full,
        }),
      }),
      group: {
        transactions: {
          type: PermissionType.Include,
          values: [],
        },
      },
    });

    sinon.assert.calledWith(
      addTransactionStub,
      externalAgentsChangeGroupTransaction,
      {},
      rawTicker,
      rawIdentityId,
      rawAgentGroup
    );

    rawAgentGroup = dsMockUtils.createMockAgentGroup({
      Custom: dsMockUtils.createMockU32(id.toNumber()),
    });

    procedureMockUtils.getAddProcedureStub().resolves({
      transform: sinon.stub().returns(rawAgentGroup),
    });

    permissionGroupIdentifierToAgentGroupStub.returns(dsMockUtils.createMockAgentGroup());

    await prepareSetPermissionGroup.call(proc, {
      agent: entityMockUtils.getAgentInstance({
        getPermissionGroup: entityMockUtils.getCustomPermissionGroupInstance({
          ticker,
          id,
        }),
      }),
      group: {
        transactions: {
          type: PermissionType.Include,
          values: [],
        },
      },
    });

    sinon.assert.calledWith(
      addTransactionStub,
      externalAgentsChangeGroupTransaction,
      {},
      rawTicker,
      rawIdentityId,
      rawAgentGroup
    );

    await prepareSetPermissionGroup.call(proc, {
      agent: entityMockUtils.getAgentInstance({
        getPermissionGroup: entityMockUtils.getKnownPermissionGroupInstance({
          ticker,
          type: PermissionGroupType.PolymeshV1Caa,
        }),
      }),
      group: entityMockUtils.getKnownPermissionGroupInstance({
        ticker,
        type: PermissionGroupType.PolymeshV1Pia,
        isEqual: false,
      }),
    });

    sinon.assert.calledWith(
      addTransactionStub,
      externalAgentsChangeGroupTransaction,
      {},
      rawTicker,
      rawIdentityId,
      rawAgentGroup
    );

    const fakeCustomPermissionGroup = entityMockUtils.getCustomPermissionGroupInstance({
      ticker,
      id: new BigNumber(2),
    });

    const result = await prepareSetPermissionGroup.call(proc, {
      agent: entityMockUtils.getAgentInstance({
        getPermissionGroup: entityMockUtils.getCustomPermissionGroupInstance({
          ticker,
          id,
          isEqual: false,
        }),
      }),
      group: fakeCustomPermissionGroup,
    });

    sinon.assert.calledWith(
      addTransactionStub,
      externalAgentsChangeGroupTransaction,
      {},
      rawTicker,
      rawIdentityId,
      rawAgentGroup
    );

    expect(result).toEqual(fakeCustomPermissionGroup);
  });

  describe('prepareStorage', () => {
    test('should return the security token', () => {
      const proc = procedureMockUtils.getInstance<
        Params,
        CustomPermissionGroup | KnownPermissionGroup,
        Storage
      >(mockContext);
      const boundFunc = prepareStorage.bind(proc);

      const result = boundFunc({
        agent: entityMockUtils.getAgentInstance(),
        group: { transactionGroups: [] },
      } as Params);

      expect(result).toEqual({
        token: entityMockUtils.getSecurityTokenInstance({ ticker }),
      });
    });
  });

  describe('getAuthorization', () => {
    test('should return the appropriate roles and permissions', () => {
      const proc = procedureMockUtils.getInstance<
        Params,
        CustomPermissionGroup | KnownPermissionGroup,
        Storage
      >(mockContext, {
        token: entityMockUtils.getSecurityTokenInstance({
          ticker,
        }),
      });
      const boundFunc = getAuthorization.bind(proc);

      expect(boundFunc()).toEqual({
        permissions: {
          transactions: [TxTags.externalAgents.ChangeGroup],
          tokens: [entityMockUtils.getSecurityTokenInstance({ ticker })],
          portfolios: [],
        },
      });
    });
  });
});
