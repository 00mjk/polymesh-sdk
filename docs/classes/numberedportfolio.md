# Class: NumberedPortfolio

Represents a numbered (non-default) Portfolio for an Identity

## Hierarchy

  ↳ [Portfolio](portfolio.md)

  ↳ **NumberedPortfolio**

## Index

### Properties

* [_id](numberedportfolio.md#protected-optional-_id)
* [context](numberedportfolio.md#protected-context)
* [id](numberedportfolio.md#id)
* [owner](numberedportfolio.md#owner)
* [uuid](numberedportfolio.md#uuid)

### Methods

* [createdAt](numberedportfolio.md#createdat)
* [delete](numberedportfolio.md#delete)
* [exists](numberedportfolio.md#exists)
* [getCustodian](numberedportfolio.md#getcustodian)
* [getName](numberedportfolio.md#getname)
* [getTokenBalances](numberedportfolio.md#gettokenbalances)
* [getTransactionHistory](numberedportfolio.md#gettransactionhistory)
* [isCustodiedBy](numberedportfolio.md#iscustodiedby)
* [isEqual](numberedportfolio.md#isequal)
* [isOwnedBy](numberedportfolio.md#isownedby)
* [modifyName](numberedportfolio.md#modifyname)
* [moveFunds](numberedportfolio.md#movefunds)
* [quitCustody](numberedportfolio.md#quitcustody)
* [setCustodian](numberedportfolio.md#setcustodian)
* [toJson](numberedportfolio.md#tojson)
* [generateUuid](numberedportfolio.md#static-generateuuid)
* [unserialize](numberedportfolio.md#static-unserialize)

## Properties

### `Protected` `Optional` _id

• **_id**? : *BigNumber*

*Inherited from [Portfolio](portfolio.md).[_id](portfolio.md#protected-optional-_id)*

*Defined in [src/api/entities/Portfolio/index.ts:79](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/Portfolio/index.ts#L79)*

internal Portfolio identifier (unused for default Portfolio)

___

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from [Entity](entity.md).[context](entity.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/Entity.ts#L48)*

___

###  id

• **id**: *BigNumber*

*Defined in [src/api/entities/NumberedPortfolio.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/NumberedPortfolio.ts#L46)*

Portfolio identifier number

___

###  owner

• **owner**: *[Identity](identity.md)*

*Inherited from [Portfolio](portfolio.md).[owner](portfolio.md#owner)*

*Defined in [src/api/entities/Portfolio/index.ts:74](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/Portfolio/index.ts#L74)*

identity of the Portfolio's owner

___

###  uuid

• **uuid**: *string*

*Inherited from [Entity](entity.md).[uuid](entity.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/Entity.ts#L46)*

## Methods

###  createdAt

▸ **createdAt**(): *Promise‹[EventIdentifier](../interfaces/eventidentifier.md) | null›*

*Defined in [src/api/entities/NumberedPortfolio.ts:120](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/NumberedPortfolio.ts#L120)*

Retrieve the identifier data (block number, date and event index) of the event that was emitted when this Portfolio was created

**`note`** uses the middleware

**`note`** there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

**Returns:** *Promise‹[EventIdentifier](../interfaces/eventidentifier.md) | null›*

___

###  delete

▸ **delete**(`opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/NumberedPortfolio.ts:77](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/NumberedPortfolio.ts#L77)*

Delete this Portfolio

**`note`** required role:
  - Portfolio Custodian

**`note`** this method is of type [NoArgsProcedureMethod](../interfaces/noargsproceduremethod.md), which means you can call `delete.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  exists

▸ **exists**(): *Promise‹boolean›*

*Overrides [Entity](entity.md).[exists](entity.md#abstract-exists)*

*Defined in [src/api/entities/NumberedPortfolio.ts:144](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/NumberedPortfolio.ts#L144)*

Return whether this Portfolio exists

**Returns:** *Promise‹boolean›*

___

###  getCustodian

▸ **getCustodian**(): *Promise‹[Identity](identity.md)›*

*Inherited from [Portfolio](portfolio.md).[getCustodian](portfolio.md#getcustodian)*

*Defined in [src/api/entities/Portfolio/index.ts:261](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/Portfolio/index.ts#L261)*

Retrieve the custodian Identity of this Portfolio

**`note`** if no custodian is set, the owner Identity is returned

**Returns:** *Promise‹[Identity](identity.md)›*

___

###  getName

▸ **getName**(): *Promise‹string›*

*Defined in [src/api/entities/NumberedPortfolio.ts:97](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/NumberedPortfolio.ts#L97)*

Return the Portfolio name

**Returns:** *Promise‹string›*

___

###  getTokenBalances

▸ **getTokenBalances**(`args?`: undefined | object): *Promise‹[PortfolioBalance](../interfaces/portfoliobalance.md)[]›*

*Inherited from [Portfolio](portfolio.md).[getTokenBalances](portfolio.md#gettokenbalances)*

*Defined in [src/api/entities/Portfolio/index.ts:143](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/Portfolio/index.ts#L143)*

Retrieve the balances of all assets in this Portfolio

**Parameters:**

Name | Type |
------ | ------ |
`args?` | undefined &#124; object |

**Returns:** *Promise‹[PortfolioBalance](../interfaces/portfoliobalance.md)[]›*

___

###  getTransactionHistory

▸ **getTransactionHistory**(`filters`: object): *Promise‹[ResultSet](../interfaces/resultset.md)‹[HistoricSettlement](../interfaces/historicsettlement.md)››*

*Inherited from [Portfolio](portfolio.md).[getTransactionHistory](portfolio.md#gettransactionhistory)*

*Defined in [src/api/entities/Portfolio/index.ts:306](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/Portfolio/index.ts#L306)*

Retrieve a list of transactions where this portfolio was involved. Can be filtered using parameters

**`note`** supports pagination

**`note`** uses the middleware

**Parameters:**

▪`Default value`  **filters**: *object*= {}

Name | Type | Description |
------ | ------ | ------ |
`account?` | undefined &#124; string | account involved in the settlement |
`size?` | undefined &#124; number | page size |
`start?` | undefined &#124; number | page offset  |
`ticker?` | undefined &#124; string | ticker involved in the transaction |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[HistoricSettlement](../interfaces/historicsettlement.md)››*

___

###  isCustodiedBy

▸ **isCustodiedBy**(`args?`: undefined | object): *Promise‹boolean›*

*Inherited from [Portfolio](portfolio.md).[isCustodiedBy](portfolio.md#iscustodiedby)*

*Defined in [src/api/entities/Portfolio/index.ts:127](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/Portfolio/index.ts#L127)*

Return whether an Identity is the Portfolio custodian

**Parameters:**

Name | Type |
------ | ------ |
`args?` | undefined &#124; object |

**Returns:** *Promise‹boolean›*

___

###  isEqual

▸ **isEqual**(`entity`: [Entity](entity.md)‹unknown, unknown›): *boolean*

*Inherited from [Entity](entity.md).[isEqual](entity.md#isequal)*

*Defined in [src/api/entities/Entity.ts:61](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/Entity.ts#L61)*

Determine whether this Entity is the same as another one

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [Entity](entity.md)‹unknown, unknown› |

**Returns:** *boolean*

___

###  isOwnedBy

▸ **isOwnedBy**(`args?`: undefined | object): *Promise‹boolean›*

*Inherited from [Portfolio](portfolio.md).[isOwnedBy](portfolio.md#isownedby)*

*Defined in [src/api/entities/Portfolio/index.ts:111](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/Portfolio/index.ts#L111)*

Return whether an Identity is the Portfolio owner

**Parameters:**

Name | Type |
------ | ------ |
`args?` | undefined &#124; object |

**Returns:** *Promise‹boolean›*

___

###  modifyName

▸ **modifyName**(`args`: [RenamePortfolioParams](../interfaces/renameportfolioparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[NumberedPortfolio](numberedportfolio.md)››*

*Defined in [src/api/entities/NumberedPortfolio.ts:90](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/NumberedPortfolio.ts#L90)*

Rename portfolio

**`note`** required role:
  - Portfolio Custodian

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `modifyName.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [RenamePortfolioParams](../interfaces/renameportfolioparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[NumberedPortfolio](numberedportfolio.md)››*

___

###  moveFunds

▸ **moveFunds**(`args`: [MoveFundsParams](../interfaces/movefundsparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Inherited from [Portfolio](portfolio.md).[moveFunds](portfolio.md#movefunds)*

*Defined in [src/api/entities/Portfolio/index.ts:239](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/Portfolio/index.ts#L239)*

Moves funds from this Portfolio to another one owned by the same Identity

**`note`** required role:
  - Portfolio Custodian

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `moveFunds.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [MoveFundsParams](../interfaces/movefundsparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  quitCustody

▸ **quitCustody**(`opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Inherited from [Portfolio](portfolio.md).[quitCustody](portfolio.md#quitcustody)*

*Defined in [src/api/entities/Portfolio/index.ts:252](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/Portfolio/index.ts#L252)*

Returns the custody of the portfolio to the portfolio owner unilaterally

**`note`** required role:
  - Portfolio Custodian

**`note`** this method is of type [NoArgsProcedureMethod](../interfaces/noargsproceduremethod.md), which means you can call `quitCustody.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  setCustodian

▸ **setCustodian**(`args`: [SetCustodianParams](../interfaces/setcustodianparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Inherited from [Portfolio](portfolio.md).[setCustodian](portfolio.md#setcustodian)*

*Defined in [src/api/entities/Portfolio/index.ts:226](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/Portfolio/index.ts#L226)*

Send an invitation to an Identity to assign it as custodian for this Portfolio

**`note`** this may create an AuthorizationRequest which has to be accepted by
  the corresponding Identity. An Account or Identity can
  fetch its pending Authorization Requests by calling `authorizations.getReceived`

**`note`** required role:
  - Portfolio Custodian

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `setCustodian.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [SetCustodianParams](../interfaces/setcustodianparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  toJson

▸ **toJson**(): *[HumanReadable](../interfaces/humanreadable.md)*

*Inherited from [Portfolio](portfolio.md).[toJson](portfolio.md#tojson)*

*Overrides [Entity](entity.md).[toJson](entity.md#abstract-tojson)*

*Defined in [src/api/entities/Portfolio/index.ts:401](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/Portfolio/index.ts#L401)*

Return the Portfolio ID and owner DID

**Returns:** *[HumanReadable](../interfaces/humanreadable.md)*

___

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›(`identifiers`: Identifiers): *string*

*Inherited from [Entity](entity.md).[generateUuid](entity.md#static-generateuuid)*

*Defined in [src/api/entities/Entity.ts:14](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/Entity.ts#L14)*

Generate the Entity's UUID from its identifying properties

**Type parameters:**

▪ **Identifiers**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`identifiers` | Identifiers |   |

**Returns:** *string*

___

### `Static` unserialize

▸ **unserialize**‹**Identifiers**›(`serialized`: string): *Identifiers*

*Inherited from [Entity](entity.md).[unserialize](entity.md#static-unserialize)*

*Defined in [src/api/entities/Entity.ts:23](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/Entity.ts#L23)*

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`serialized` | string | UUID to unserialize  |

**Returns:** *Identifiers*
