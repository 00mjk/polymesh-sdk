import { TxTags } from 'polymesh-types/types';
import sinon from 'sinon';

import {
  getAuthorization,
  Params,
  prepareModifyDistributionCheckpoint,
} from '~/api/procedures/modifyDistributionCheckpoint';
import { Context, modifyCaCheckpoint } from '~/internal';
import { dsMockUtils, entityMockUtils, procedureMockUtils } from '~/testUtils/mocks';
import { Mocked } from '~/testUtils/types';

jest.mock(
  '~/api/entities/CheckpointSchedule',
  require('~/testUtils/mocks/entities').mockCheckpointScheduleModule(
    '~/api/entities/CheckpointSchedule'
  )
);
jest.mock(
  '~/base/Procedure',
  require('~/testUtils/mocks/procedure').mockProcedureModule('~/base/Procedure')
);
jest.mock(
  '~/api/entities/SecurityToken',
  require('~/testUtils/mocks/entities').mockSecurityTokenModule('~/api/entities/SecurityToken')
);

describe('modifyDistributionCheckpoint procedure', () => {
  const ticker = 'SOMETICKER';

  let mockContext: Mocked<Context>;
  let addProcedureStub: sinon.SinonStub;

  beforeAll(() => {
    dsMockUtils.initMocks();
    procedureMockUtils.initMocks();
    entityMockUtils.initMocks();
  });

  beforeEach(() => {
    addProcedureStub = procedureMockUtils.getAddProcedureStub();
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

  test('should throw an error if the distribution has already started', async () => {
    const args = {
      distribution: entityMockUtils.getDividendDistributionInstance({
        paymentDate: new Date('10/14/1987'),
      }),
      checkpoint: new Date(),
    };

    const proc = procedureMockUtils.getInstance<Params, void>(mockContext);

    let err;

    try {
      await prepareModifyDistributionCheckpoint.call(proc, args);
    } catch (error) {
      err = error;
    }

    expect(err.message).toBe('Distribution is already in its payment period');
  });

  test('should throw an error if the payment date is earlier than the Checkpoint date', async () => {
    const checkpoint = new Date(new Date().getTime() + 1000);
    const args = {
      distribution: entityMockUtils.getDividendDistributionInstance({
        paymentDate: new Date(checkpoint.getTime() - 100),
      }),
      checkpoint,
    };

    const proc = procedureMockUtils.getInstance<Params, void>(mockContext);

    let err;

    try {
      await prepareModifyDistributionCheckpoint.call(proc, args);
    } catch (error) {
      err = error;
    }

    expect(err.message).toBe('Payment date must be after the Checkpoint date');
  });

  test('should throw an error if the checkpoint date is after the expiry date', async () => {
    const checkpoint = new Date(new Date().getTime() + 1000);
    const paymentDate = new Date(checkpoint.getTime() + 2000);
    const args = {
      distribution: entityMockUtils.getDividendDistributionInstance({
        paymentDate,
        expiryDate: new Date(checkpoint.getTime() - 1000),
      }),
      checkpoint: entityMockUtils.getCheckpointScheduleInstance({
        details: {
          nextCheckpointDate: checkpoint,
        },
      }),
    };

    const proc = procedureMockUtils.getInstance<Params, void>(mockContext);

    let err;

    try {
      await prepareModifyDistributionCheckpoint.call(proc, args);
    } catch (error) {
      err = error;
    }

    expect(err.message).toBe('Expiry date must be after the Checkpoint date');
  });

  test('should throw an error if the distribution has already expired', async () => {
    const checkpoint = new Date(new Date().getTime() - 100000);
    const expiryDate = new Date(checkpoint.getTime() + 10000);
    const paymentDate = new Date(new Date().getTime() + 20000);

    const args = {
      distribution: entityMockUtils.getDividendDistributionInstance({
        expiryDate,
        paymentDate,
      }),
      checkpoint,
    };

    const proc = procedureMockUtils.getInstance<Params, void>(mockContext);

    let err;

    try {
      await prepareModifyDistributionCheckpoint.call(proc, args);
    } catch (error) {
      err = error;
    }

    expect(err.message).toBe('Distribution has already expired');
    expect(err.data).toEqual({
      expiryDate,
    });
  });

  test('should add a modifyCaCheckpoint procedure transaction to the queue', async () => {
    const checkpoint = entityMockUtils.getCheckpointInstance();
    const distribution = entityMockUtils.getDividendDistributionInstance({
      paymentDate: new Date(new Date().getTime() + 100000),
      expiryDate: new Date(new Date().getTime() + 200000),
    });

    const args = {
      distribution,
      checkpoint,
    };

    const proc = procedureMockUtils.getInstance<Params, void>(mockContext);

    await prepareModifyDistributionCheckpoint.call(proc, args);

    sinon.assert.calledWith(addProcedureStub, modifyCaCheckpoint(), {
      checkpoint,
      corporateAction: distribution,
    });
  });

  describe('getAuthorization', () => {
    test('should return the appropriate roles and permissions', () => {
      const proc = procedureMockUtils.getInstance<Params, void>(mockContext);
      const boundFunc = getAuthorization.bind(proc);
      const args = {
        distribution: {
          ticker,
        },
      } as Params;

      expect(boundFunc(args)).toEqual({
        permissions: {
          tokens: [entityMockUtils.getSecurityTokenInstance({ ticker })],
          transactions: [TxTags.corporateAction.ChangeRecordDate],
          portfolios: [],
        },
      });
    });
  });
});
