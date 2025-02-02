import { bool, u64 } from '@polkadot/types';
import BigNumber from 'bignumber.js';
import sinon from 'sinon';

import {
  ConsumeAddMultiSigSignerAuthorizationParams,
  getAuthorization,
  prepareConsumeAddMultiSigSignerAuthorization,
} from '~/api/procedures/consumeAddMultiSigSignerAuthorization';
import { AuthorizationRequest, Context } from '~/internal';
import { dsMockUtils, entityMockUtils, procedureMockUtils } from '~/testUtils/mocks';
import { Mocked } from '~/testUtils/types';
import { Authorization, AuthorizationType, Signer, TxTags } from '~/types';
import * as utilsConversionModule from '~/utils/conversion';

jest.mock(
  '~/api/entities/Identity',
  require('~/testUtils/mocks/entities').mockIdentityModule('~/api/entities/Identity')
);

describe('consumeJoinSignerAuthorization procedure', () => {
  let mockContext: Mocked<Context>;
  let targetAddress: string;
  let numberToU64Stub: sinon.SinonStub<[number | BigNumber, Context], u64>;
  let booleanToBoolStub: sinon.SinonStub<[boolean, Context], bool>;
  let rawTrue: bool;
  let rawFalse: bool;
  let authId: BigNumber;
  let rawAuthId: u64;

  beforeAll(() => {
    targetAddress = 'someAddress';
    dsMockUtils.initMocks({
      contextOptions: {
        currentPairAddress: targetAddress,
      },
    });
    procedureMockUtils.initMocks();
    entityMockUtils.initMocks();
    numberToU64Stub = sinon.stub(utilsConversionModule, 'numberToU64');
    booleanToBoolStub = sinon.stub(utilsConversionModule, 'booleanToBool');
    authId = new BigNumber(1);
    rawAuthId = dsMockUtils.createMockU64(authId.toNumber());
    rawTrue = dsMockUtils.createMockBool(true);
    rawFalse = dsMockUtils.createMockBool(false);

    sinon.stub(utilsConversionModule, 'addressToKey');
  });

  let addTransactionStub: sinon.SinonStub;

  beforeEach(() => {
    addTransactionStub = procedureMockUtils.getAddTransactionStub();
    mockContext = dsMockUtils.getContextInstance();
    numberToU64Stub.withArgs(authId, mockContext).returns(rawAuthId);
    booleanToBoolStub.withArgs(true, mockContext).returns(rawTrue);
    booleanToBoolStub.withArgs(false, mockContext).returns(rawFalse);
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

  test('should throw an error if the Authorization Request is expired', async () => {
    const proc = procedureMockUtils.getInstance<ConsumeAddMultiSigSignerAuthorizationParams, void>(
      mockContext
    );

    const target = entityMockUtils.getAccountInstance({ address: 'someAddress' });

    expect(
      prepareConsumeAddMultiSigSignerAuthorization.call(proc, {
        authRequest: new AuthorizationRequest(
          {
            target,
            issuer: entityMockUtils.getIdentityInstance(),
            authId,
            expiry: new Date('10/14/1987'),
            data: {
              type: AuthorizationType.AddMultiSigSigner,
              value: 'someAddress',
            },
          },
          mockContext
        ),
        accept: true,
      })
    ).rejects.toThrow('The Authorization Request has expired');
  });

  test('should add a acceptMultisigSignerAsKey transaction to the queue if the target is an Account', async () => {
    const proc = procedureMockUtils.getInstance<ConsumeAddMultiSigSignerAuthorizationParams, void>(
      mockContext
    );

    const transaction = dsMockUtils.createTxStub('multiSig', 'acceptMultisigSignerAsKey');

    const issuer = entityMockUtils.getIdentityInstance();
    const target = entityMockUtils.getAccountInstance({ address: 'someAddress' });

    await prepareConsumeAddMultiSigSignerAuthorization.call(proc, {
      authRequest: new AuthorizationRequest(
        {
          target,
          issuer,
          authId,
          expiry: null,
          data: {
            type: AuthorizationType.AddMultiSigSigner,
            value: 'someAccount',
          },
        },
        mockContext
      ),
      accept: true,
    });

    sinon.assert.calledWith(addTransactionStub, transaction, { paidForBy: issuer }, rawAuthId);
  });

  test('should add a acceptMultisigSignerAsIdentity transaction to the queue if the target is an Identity', async () => {
    const proc = procedureMockUtils.getInstance<ConsumeAddMultiSigSignerAuthorizationParams, void>(
      mockContext
    );

    const transaction = dsMockUtils.createTxStub('multiSig', 'acceptMultisigSignerAsIdentity');

    const issuer = entityMockUtils.getIdentityInstance();
    const target = entityMockUtils.getIdentityInstance({ did: 'someOtherDid' });

    await prepareConsumeAddMultiSigSignerAuthorization.call(proc, {
      authRequest: new AuthorizationRequest(
        {
          target,
          issuer,
          authId,
          expiry: null,
          data: {
            type: AuthorizationType.AddMultiSigSigner,
            value: 'someAccount',
          },
        },
        mockContext
      ),
      accept: true,
    });

    sinon.assert.calledWith(addTransactionStub, transaction, { paidForBy: issuer }, rawAuthId);
  });

  test('should add a removeAuthorization transaction to the queue if accept is set to false', async () => {
    const proc = procedureMockUtils.getInstance<ConsumeAddMultiSigSignerAuthorizationParams, void>(
      mockContext
    );

    const transaction = dsMockUtils.createTxStub('identity', 'removeAuthorization');

    const issuer = entityMockUtils.getIdentityInstance();
    let target: Signer = entityMockUtils.getIdentityInstance({ did: 'someOtherDid' });

    const rawSignatory = dsMockUtils.createMockSignatory({
      Identity: dsMockUtils.createMockIdentityId(target.did),
    });

    sinon.stub(utilsConversionModule, 'signerValueToSignatory').returns(rawSignatory);

    await prepareConsumeAddMultiSigSignerAuthorization.call(proc, {
      authRequest: new AuthorizationRequest(
        {
          target,
          issuer,
          authId,
          expiry: null,
          data: {
            type: AuthorizationType.AddMultiSigSigner,
            value: 'someAddress',
          },
        },
        mockContext
      ),
      accept: false,
    });

    sinon.assert.calledWith(addTransactionStub, transaction, {}, rawSignatory, rawAuthId, rawFalse);

    target = entityMockUtils.getAccountInstance({ address: targetAddress });

    await prepareConsumeAddMultiSigSignerAuthorization.call(proc, {
      authRequest: new AuthorizationRequest(
        {
          target,
          issuer,
          authId,
          expiry: null,
          data: {
            type: AuthorizationType.AddMultiSigSigner,
            value: 'someAddress',
          },
        },
        mockContext
      ),
      accept: false,
    });

    sinon.assert.calledWith(
      addTransactionStub,
      transaction,
      { paidForBy: issuer },
      rawSignatory,
      rawAuthId,
      rawTrue
    );
  });

  describe('getAuthorization', () => {
    test('should return the appropriate roles and permissions', async () => {
      const proc = procedureMockUtils.getInstance<
        ConsumeAddMultiSigSignerAuthorizationParams,
        void
      >(mockContext);
      const { address } = mockContext.getCurrentAccount();
      const constructorParams = {
        authId,
        expiry: null,
        target: entityMockUtils.getAccountInstance({ address }),
        issuer: entityMockUtils.getIdentityInstance({ did: 'issuerDid1' }),
        data: {
          type: AuthorizationType.AddMultiSigSigner,
        } as Authorization,
      };
      const args = {
        authRequest: new AuthorizationRequest(constructorParams, mockContext),
        accept: true,
      };

      const boundFunc = getAuthorization.bind(proc);
      let result = await boundFunc(args);
      expect(result).toEqual({
        roles: true,
        permissions: {
          transactions: [TxTags.multiSig.AcceptMultisigSignerAsKey],
        },
      });

      args.authRequest.target = entityMockUtils.getIdentityInstance({
        did: 'notTheCurrentIdentity',
      });

      dsMockUtils.configureMocks({
        contextOptions: {
          currentIdentityIsEqual: false,
        },
      });

      result = await boundFunc(args);
      expect(result).toEqual({
        roles: false,
        permissions: {
          transactions: [TxTags.multiSig.AcceptMultisigSignerAsIdentity],
        },
      });

      args.accept = false;
      args.authRequest.issuer = await mockContext.getCurrentIdentity();

      dsMockUtils.configureMocks({
        contextOptions: {
          currentIdentityIsEqual: true,
        },
      });

      result = await boundFunc(args);
      expect(result).toEqual({
        roles: true,
        permissions: {
          transactions: [TxTags.identity.RemoveAuthorization],
        },
      });

      dsMockUtils.configureMocks({
        contextOptions: {
          currentIdentityIsEqual: false,
        },
      });

      result = await boundFunc(args);
      expect(result).toEqual({
        roles: false,
        permissions: {
          transactions: [TxTags.identity.RemoveAuthorization],
        },
      });

      mockContext.getCurrentAccount.returns(
        entityMockUtils.getAccountInstance({ address, getIdentity: null })
      );

      result = await boundFunc(args);
      expect(result).toEqual({
        roles: false,
        permissions: {
          transactions: [TxTags.identity.RemoveAuthorization],
        },
      });

      args.authRequest.target = entityMockUtils.getAccountInstance({ address, getIdentity: null });

      result = await boundFunc(args);
      expect(result).toEqual({
        roles: true,
      });
    });
  });
});
