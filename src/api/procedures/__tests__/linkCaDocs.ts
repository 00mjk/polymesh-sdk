import { Vec } from '@polkadot/types';
import BigNumber from 'bignumber.js';
import { Document, DocumentId, Ticker, TxTags } from 'polymesh-types/types';
import sinon from 'sinon';

import { getAuthorization, Params, prepareLinkCaDocs } from '~/api/procedures/linkCaDocs';
import { Context } from '~/internal';
import { dsMockUtils, entityMockUtils, procedureMockUtils } from '~/testUtils/mocks';
import { Mocked } from '~/testUtils/types';
import { RoleType, TokenDocument } from '~/types';
import { PolymeshTx } from '~/types/internal';
import { tuple } from '~/types/utils';
import * as utilsConversionModule from '~/utils/conversion';

jest.mock(
  '~/api/entities/SecurityToken',
  require('~/testUtils/mocks/entities').mockSecurityTokenModule('~/api/entities/SecurityToken')
);

describe('linkCaDocs procedure', () => {
  let mockContext: Mocked<Context>;
  let stringToTickerStub: sinon.SinonStub<[string, Context], Ticker>;
  let ticker: string;
  let id: BigNumber;
  let documents: TokenDocument[];
  let rawTicker: Ticker;
  let rawDocuments: Document[];
  let rawDocumentIds: DocumentId[];
  let documentEntries: [[Ticker, DocumentId], Document][];
  let args: Params;

  beforeAll(() => {
    dsMockUtils.initMocks();
    procedureMockUtils.initMocks();
    entityMockUtils.initMocks();
    stringToTickerStub = sinon.stub(utilsConversionModule, 'stringToTicker');
    ticker = 'someTicker';
    id = new BigNumber(1);
    documents = [
      {
        name: 'someDocument',
        uri: 'someUri',
        contentHash: 'someHash',
      },
      {
        name: 'otherDocument',
        uri: 'otherUri',
        contentHash: 'otherHash',
      },
    ];
    rawTicker = dsMockUtils.createMockTicker(ticker);
    rawDocuments = documents.map(({ name, uri, contentHash, type, filedAt }) =>
      dsMockUtils.createMockDocument({
        name: dsMockUtils.createMockDocumentName(name),
        uri: dsMockUtils.createMockDocumentUri(uri),
        /* eslint-disable @typescript-eslint/camelcase */
        content_hash: dsMockUtils.createMockDocumentHash(contentHash),
        doc_type: dsMockUtils.createMockOption(
          type ? dsMockUtils.createMockDocumentType(type) : null
        ),
        filing_date: dsMockUtils.createMockOption(
          filedAt ? dsMockUtils.createMockMoment(filedAt.getTime()) : null
        ),
        /* eslint-enabled @typescript-eslint/camelcase */
      })
    );
    documentEntries = [];
    rawDocumentIds = [];
    rawDocuments.forEach((doc, index) => {
      const rawId = dsMockUtils.createMockU32(index);
      documentEntries.push(tuple([rawTicker, rawId], doc));
      rawDocumentIds.push(rawId);
    });
    args = {
      id,
      ticker,
      documents,
    };
  });

  let addTransactionStub: sinon.SinonStub;
  let linkCaDocTransaction: PolymeshTx<[Vec<Document>, Ticker]>;

  beforeEach(() => {
    addTransactionStub = procedureMockUtils.getAddTransactionStub();

    dsMockUtils.createQueryStub('asset', 'assetDocuments', {
      entries: [documentEntries[0], documentEntries[1]],
    });

    linkCaDocTransaction = dsMockUtils.createTxStub('corporateAction', 'linkCaDoc');

    mockContext = dsMockUtils.getContextInstance();

    stringToTickerStub.withArgs(ticker, mockContext).returns(rawTicker);
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

  test('should throw an error if some of the provided documents are not from the same asset', () => {
    const proc = procedureMockUtils.getInstance<Params, void>(mockContext);

    return expect(
      prepareLinkCaDocs.call(proc, {
        id,
        ticker,
        documents: [
          {
            name: 'someName',
            uri: 'someUri',
            contentHash: 'someHash',
          },
        ],
      })
    ).rejects.toThrow('Some of the provided documents are not from the same asset');
  });

  test('should add a link ca doc transaction to the queue', async () => {
    const proc = procedureMockUtils.getInstance<Params, void>(mockContext);

    await prepareLinkCaDocs.call(proc, args);

    sinon.assert.calledWith(
      addTransactionStub,
      linkCaDocTransaction,
      {},
      { ticker, local_id: id },
      rawDocumentIds
    );
  });

  describe('getAuthorization', () => {
    test('should return the appropriate roles and permissions', () => {
      const proc = procedureMockUtils.getInstance<Params, void>(mockContext);
      const boundFunc = getAuthorization.bind(proc);

      expect(boundFunc(args)).toEqual({
        identityRoles: [{ type: RoleType.CorporateActionsAgent, ticker }],
        signerPermissions: {
          tokens: [entityMockUtils.getSecurityTokenInstance({ ticker })],
          transactions: [TxTags.corporateAction.LinkCaDoc],
          portfolios: [],
        },
      });
    });
  });
});
