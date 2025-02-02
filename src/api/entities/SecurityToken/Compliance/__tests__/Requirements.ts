import { Vec } from '@polkadot/types/codec';
import { AssetCompliance, AssetComplianceResult, IdentityId, Ticker } from 'polymesh-types/types';
import sinon from 'sinon';

import { Params } from '~/api/procedures/setAssetRequirements';
import { Context, Namespace, SecurityToken, TransactionQueue } from '~/internal';
import { dsMockUtils, entityMockUtils, procedureMockUtils } from '~/testUtils/mocks';
import { Mocked } from '~/testUtils/types';
import {
  ClaimType,
  ConditionTarget,
  ConditionType,
  Requirement,
  ScopeType,
  TrustedClaimIssuer,
} from '~/types';
import * as utilsConversionModule from '~/utils/conversion';

import { Requirements } from '../Requirements';

jest.mock(
  '~/api/entities/Identity',
  require('~/testUtils/mocks/entities').mockIdentityModule('~/api/entities/Identity')
);
jest.mock(
  '~/base/Procedure',
  require('~/testUtils/mocks/procedure').mockProcedureModule('~/base/Procedure')
);

describe('Requirements class', () => {
  beforeAll(() => {
    entityMockUtils.initMocks();
    dsMockUtils.initMocks();
    procedureMockUtils.initMocks();
  });

  afterEach(() => {
    entityMockUtils.reset();
    dsMockUtils.reset();
    procedureMockUtils.reset();
  });

  afterAll(() => {
    entityMockUtils.cleanup();
    dsMockUtils.cleanup();
    procedureMockUtils.cleanup();
  });

  test('should extend namespace', () => {
    expect(Requirements.prototype instanceof Namespace).toBe(true);
  });

  describe('method: set', () => {
    afterAll(() => {
      sinon.restore();
    });

    test('should prepare the procedure with the correct arguments and context, and return the resulting transaction queue', async () => {
      const context = dsMockUtils.getContextInstance();
      const token = entityMockUtils.getSecurityTokenInstance();
      const requirements = new Requirements(token, context);

      const args: Omit<Params, 'ticker'> = {
        requirements: [
          [
            {
              type: ConditionType.IsPresent,
              claim: {
                type: ClaimType.Exempted,
                scope: { type: ScopeType.Ticker, value: 'someTicker' },
              },
              target: ConditionTarget.Both,
            },
            {
              type: ConditionType.IsAbsent,
              claim: {
                type: ClaimType.Blocked,
                scope: { type: ScopeType.Ticker, value: 'someTicker' },
              },
              target: ConditionTarget.Both,
            },
          ],
        ],
      };

      const expectedQueue = ('someQueue' as unknown) as TransactionQueue<SecurityToken>;

      procedureMockUtils
        .getPrepareStub()
        .withArgs({ args: { ticker: token.ticker, ...args }, transformer: undefined }, context)
        .resolves(expectedQueue);

      const queue = await requirements.set(args);

      expect(queue).toBe(expectedQueue);
    });
  });

  describe('method: reset', () => {
    afterAll(() => {
      sinon.restore();
    });

    test('should prepare the procedure with the correct arguments and context, and return the resulting transaction queue', async () => {
      const context = dsMockUtils.getContextInstance();
      const token = entityMockUtils.getSecurityTokenInstance();
      const requirements = new Requirements(token, context);

      const expectedQueue = ('someQueue' as unknown) as TransactionQueue<SecurityToken>;

      procedureMockUtils
        .getPrepareStub()
        .withArgs(
          { args: { ticker: token.ticker, requirements: [] }, transformer: undefined },
          context
        )
        .resolves(expectedQueue);

      const queue = await requirements.reset();

      expect(queue).toBe(expectedQueue);
    });
  });

  describe('method: get', () => {
    let ticker: string;
    let context: Context;
    let token: SecurityToken;
    let requirements: Requirements;
    let defaultClaimIssuers: TrustedClaimIssuer[];
    let notDefaultClaimIssuer: TrustedClaimIssuer;
    let tokenDid: string;
    let cddId: string;
    let trustedIssuerToTrustedClaimIssuerStub: sinon.SinonStub;

    let expected: Requirement[];

    let queryMultiStub: sinon.SinonStub;
    let queryMultiResult: [AssetCompliance, Vec<IdentityId>];

    beforeAll(() => {
      trustedIssuerToTrustedClaimIssuerStub = sinon.stub(
        utilsConversionModule,
        'trustedIssuerToTrustedClaimIssuer'
      );
    });

    beforeEach(() => {
      ticker = 'FAKETICKER';
      context = dsMockUtils.getContextInstance();
      token = entityMockUtils.getSecurityTokenInstance({ ticker });
      requirements = new Requirements(token, context);
      defaultClaimIssuers = [
        { identity: entityMockUtils.getIdentityInstance({ did: 'defaultissuer' }) },
      ];
      notDefaultClaimIssuer = {
        identity: entityMockUtils.getIdentityInstance({ did: 'notDefaultClaimIssuer' }),
        trustedFor: undefined,
      };
      tokenDid = 'someTokenDid';
      cddId = 'someCddId';
      dsMockUtils.createQueryStub('complianceManager', 'assetCompliances');
      dsMockUtils.createQueryStub('complianceManager', 'trustedClaimIssuer');

      queryMultiStub = dsMockUtils.getQueryMultiStub();

      trustedIssuerToTrustedClaimIssuerStub.returns({
        identity: defaultClaimIssuers[0].identity,
      });

      const scope = dsMockUtils.createMockScope({
        Identity: dsMockUtils.createMockIdentityId(tokenDid),
      });
      const conditionForBoth = dsMockUtils.createMockCondition({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        condition_type: dsMockUtils.createMockConditionType({
          IsAnyOf: [
            dsMockUtils.createMockClaim({
              KnowYourCustomer: scope,
            }),
            dsMockUtils.createMockClaim({
              CustomerDueDiligence: dsMockUtils.createMockCddId(cddId),
            }),
          ],
        }),
        issuers: [],
      });

      queryMultiResult = [
        {
          requirements: [
            dsMockUtils.createMockComplianceRequirement({
              /* eslint-disable @typescript-eslint/naming-convention */
              sender_conditions: [
                dsMockUtils.createMockCondition({
                  condition_type: dsMockUtils.createMockConditionType({
                    IsPresent: dsMockUtils.createMockClaim({
                      Exempted: scope,
                    }),
                  }),
                  issuers: [
                    dsMockUtils.createMockTrustedIssuer({
                      issuer: dsMockUtils.createMockIdentityId(notDefaultClaimIssuer.identity.did),
                      trusted_for: dsMockUtils.createMockTrustedFor('Any'),
                    }),
                  ],
                }),
              ],
              receiver_conditions: [],
              id: dsMockUtils.createMockU32(1),
            }),
            dsMockUtils.createMockComplianceRequirement({
              sender_conditions: [conditionForBoth],
              receiver_conditions: [
                conditionForBoth,
                dsMockUtils.createMockCondition({
                  condition_type: dsMockUtils.createMockConditionType({
                    IsAbsent: dsMockUtils.createMockClaim({
                      Blocked: scope,
                    }),
                  }),
                  issuers: [],
                }),
              ],
              id: dsMockUtils.createMockU32(2),
              /* eslint-enable @typescript-eslint/naming-convention */
            }),
          ],
        } as AssetCompliance,
        (defaultClaimIssuers as unknown) as Vec<IdentityId>,
      ];

      expected = [
        {
          id: 1,
          conditions: [
            {
              target: ConditionTarget.Sender,
              type: ConditionType.IsPresent,
              claim: {
                type: ClaimType.Exempted,
                scope: { type: ScopeType.Identity, value: tokenDid },
              },
              trustedClaimIssuers: [notDefaultClaimIssuer],
            },
          ],
        },
        {
          id: 2,
          conditions: [
            {
              target: ConditionTarget.Both,
              type: ConditionType.IsAnyOf,
              claims: [
                {
                  type: ClaimType.KnowYourCustomer,
                  scope: { type: ScopeType.Identity, value: tokenDid },
                },
                { type: ClaimType.CustomerDueDiligence, id: cddId },
              ],
              trustedClaimIssuers: defaultClaimIssuers,
            },
            {
              target: ConditionTarget.Receiver,
              type: ConditionType.IsAbsent,
              claim: {
                type: ClaimType.Blocked,
                scope: { type: ScopeType.Identity, value: tokenDid },
              },
              trustedClaimIssuers: defaultClaimIssuers,
            },
          ],
        },
      ];
    });

    afterAll(() => {
      sinon.restore();
    });

    test('should return all requirements attached to the Security Token, using the default trusted claim issuers where none are set', async () => {
      queryMultiStub.resolves(queryMultiResult);
      const result = await requirements.get();

      expect(result).toEqual(expected);
    });

    test('should allow subscription', async () => {
      const unsubCallback = 'unsubCallback';
      queryMultiStub.callsFake((_, cbFunc) => {
        cbFunc(queryMultiResult);
        return unsubCallback;
      });

      const callback = sinon.stub();

      const result = await requirements.get(callback);

      expect(result).toBe(unsubCallback);

      sinon.assert.calledWithExactly(callback, expected);
    });
  });

  describe('method: pause', () => {
    afterAll(() => {
      sinon.restore();
    });

    test('should prepare the procedure with the correct arguments and context, and return the resulting transaction queue', async () => {
      const context = dsMockUtils.getContextInstance();
      const token = entityMockUtils.getSecurityTokenInstance();
      const requirements = new Requirements(token, context);

      const expectedQueue = ('someQueue' as unknown) as TransactionQueue<SecurityToken>;

      procedureMockUtils
        .getPrepareStub()
        .withArgs({ args: { ticker: token.ticker, pause: true }, transformer: undefined }, context)
        .resolves(expectedQueue);

      const queue = await requirements.pause();

      expect(queue).toBe(expectedQueue);
    });
  });

  describe('method: unpause', () => {
    afterAll(() => {
      sinon.restore();
    });

    test('should prepare the procedure with the correct arguments and context, and return the resulting transaction queue', async () => {
      const context = dsMockUtils.getContextInstance();
      const token = entityMockUtils.getSecurityTokenInstance();
      const requirements = new Requirements(token, context);

      const expectedQueue = ('someQueue' as unknown) as TransactionQueue<SecurityToken>;

      procedureMockUtils
        .getPrepareStub()
        .withArgs({ args: { ticker: token.ticker, pause: false }, transformer: undefined }, context)
        .resolves(expectedQueue);

      const queue = await requirements.unpause();

      expect(queue).toBe(expectedQueue);
    });
  });

  describe('method: arePaused', () => {
    afterAll(() => {
      sinon.restore();
    });

    test('should return whether compliance conditions are paused or not', async () => {
      const fakeResult = false;
      const context = dsMockUtils.getContextInstance();
      const token = entityMockUtils.getSecurityTokenInstance();
      const rawTicker = dsMockUtils.createMockTicker(token.ticker);
      const mockBool = dsMockUtils.createMockBool(fakeResult);

      const requeriments = new Requirements(token, context);

      sinon
        .stub(utilsConversionModule, 'stringToTicker')
        .withArgs(token.ticker, context)
        .returns(rawTicker);

      sinon.stub(utilsConversionModule, 'boolToBoolean').withArgs(mockBool).returns(fakeResult);

      dsMockUtils
        .createQueryStub('complianceManager', 'assetCompliances')
        .withArgs(rawTicker)
        // eslint-disable-next-line @typescript-eslint/naming-convention
        .resolves({ paused: mockBool });

      const result = await requeriments.arePaused();

      expect(result).toEqual(fakeResult);
    });
  });

  describe('method: checkSettle', () => {
    let context: Mocked<Context>;
    let token: SecurityToken;
    let requirements: Requirements;
    let currentDid: string;
    let fromDid: string;
    let toDid: string;
    let rawFromDid: IdentityId;
    let rawToDid: IdentityId;
    let rawCurrentDid: IdentityId;
    let rawTicker: Ticker;

    let stringToIdentityIdStub: sinon.SinonStub;
    let assetComplianceResultToRequirementComplianceStub: sinon.SinonStub;
    let stringToTickerStub: sinon.SinonStub;

    beforeAll(() => {
      fromDid = 'fromDid';
      toDid = 'toDid';

      stringToIdentityIdStub = sinon.stub(utilsConversionModule, 'stringToIdentityId');
      assetComplianceResultToRequirementComplianceStub = sinon.stub(
        utilsConversionModule,
        'assetComplianceResultToCompliance'
      );
      stringToTickerStub = sinon.stub(utilsConversionModule, 'stringToTicker');
    });

    beforeEach(async () => {
      context = dsMockUtils.getContextInstance();
      token = entityMockUtils.getSecurityTokenInstance();
      requirements = new Requirements(token, context);
      ({ did: currentDid } = await context.getCurrentIdentity());

      rawFromDid = dsMockUtils.createMockIdentityId(fromDid);
      rawToDid = dsMockUtils.createMockIdentityId(toDid);
      rawCurrentDid = dsMockUtils.createMockIdentityId(currentDid);
      rawTicker = dsMockUtils.createMockTicker(token.ticker);

      stringToIdentityIdStub.withArgs(currentDid, context).returns(rawCurrentDid);
      stringToIdentityIdStub.withArgs(fromDid, context).returns(rawFromDid);
      stringToIdentityIdStub.withArgs(toDid, context).returns(rawToDid);
      stringToTickerStub.withArgs(token.ticker, context).returns(rawTicker);
    });

    afterAll(() => {
      sinon.restore();
    });

    test('checkSettle should return the current requirement compliance and whether the transfer complies', async () => {
      const rawResponse = ('response' as unknown) as AssetComplianceResult;

      dsMockUtils
        .createRpcStub('compliance', 'canTransfer')
        .withArgs(rawTicker, rawCurrentDid, rawToDid)
        .resolves(rawResponse);

      const fakeResult = 'result';

      assetComplianceResultToRequirementComplianceStub.withArgs(rawResponse).returns(fakeResult);

      const result = await requirements.checkSettle({ to: toDid });

      expect(result).toEqual(fakeResult);
    });

    test('checkSettle should return the current requirement compliance and whether the transfer complies with another Identity', async () => {
      const rawResponse = ('response' as unknown) as AssetComplianceResult;

      dsMockUtils
        .createRpcStub('compliance', 'canTransfer')
        .withArgs(rawTicker, rawFromDid, rawToDid)
        .resolves(rawResponse);

      const fakeResult = 'result';

      assetComplianceResultToRequirementComplianceStub.withArgs(rawResponse).returns(fakeResult);

      const result = await requirements.checkSettle({ from: fromDid, to: toDid });

      expect(result).toBe(fakeResult);
    });
  });
});
