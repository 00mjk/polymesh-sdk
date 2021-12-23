# Class: Portfolio

Represents a base Portfolio for a specific Identity in the Polymesh blockchain

## Hierarchy

* [Entity](entity.md)‹UniqueIdentifiers, [HumanReadable](../interfaces/humanreadable.md)›

  ↳ **Portfolio**

  ↳ [DefaultPortfolio](defaultportfolio.md)

  ↳ [NumberedPortfolio](numberedportfolio.md)

## Index

### Properties

* [_id](portfolio.md#protected-optional-_id)
* [context](portfolio.md#protected-context)
* [owner](portfolio.md#owner)
* [uuid](portfolio.md#uuid)

### Methods

* [exists](portfolio.md#abstract-exists)
* [getCustodian](portfolio.md#getcustodian)
* [getTokenBalances](portfolio.md#gettokenbalances)
* [getTransactionHistory](portfolio.md#gettransactionhistory)
* [isCustodiedBy](portfolio.md#iscustodiedby)
* [isEqual](portfolio.md#isequal)
* [isOwnedBy](portfolio.md#isownedby)
* [moveFunds](portfolio.md#movefunds)
* [quitCustody](portfolio.md#quitcustody)
* [setCustodian](portfolio.md#setcustodian)
* [toJson](portfolio.md#tojson)
* [generateUuid](portfolio.md#static-generateuuid)
* [unserialize](portfolio.md#static-unserialize)

## Properties

### `Protected` `Optional` _id

• **_id**? : *BigNumber*

*Defined in [src/api/entities/Portfolio/index.ts:75](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Portfolio/index.ts#L75)*

internal Portfolio identifier (unused for default Portfolio)

___

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from [Entity](entity.md).[context](entity.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Entity.ts#L48)*

___

###  owner

• **owner**: *[Identity](identity.md)*

*Defined in [src/api/entities/Portfolio/index.ts:70](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Portfolio/index.ts#L70)*

identity of the Portfolio's owner

___

###  uuid

• **uuid**: *string*

*Inherited from [Entity](entity.md).[uuid](entity.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Entity.ts#L46)*

## Methods

### `Abstract` exists

▸ **exists**(): *Promise‹boolean›*

*Inherited from [Entity](entity.md).[exists](entity.md#abstract-exists)*

*Defined in [src/api/entities/Entity.ts:68](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Entity.ts#L68)*

Determine whether this Entity exists on chain

**Returns:** *Promise‹boolean›*

___

###  getCustodian

▸ **getCustodian**(): *Promise‹[Identity](identity.md)›*

*Defined in [src/api/entities/Portfolio/index.ts:257](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Portfolio/index.ts#L257)*

Retrieve the custodian Identity of this Portfolio

**`note`** if no custodian is set, the owner Identity is returned

**Returns:** *Promise‹[Identity](identity.md)›*

___

###  getTokenBalances

▸ **getTokenBalances**(`args?`: undefined | object): *Promise‹[PortfolioBalance](../interfaces/portfoliobalance.md)[]›*

*Defined in [src/api/entities/Portfolio/index.ts:139](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Portfolio/index.ts#L139)*

Retrieve the balances of all assets in this Portfolio

**Parameters:**

Name | Type |
------ | ------ |
`args?` | undefined &#124; object |

**Returns:** *Promise‹[PortfolioBalance](../interfaces/portfoliobalance.md)[]›*

___

###  getTransactionHistory

▸ **getTransactionHistory**(`filters`: object): *Promise‹[ResultSet](../interfaces/resultset.md)‹[HistoricSettlement](../interfaces/historicsettlement.md)››*

*Defined in [src/api/entities/Portfolio/index.ts:302](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Portfolio/index.ts#L302)*

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

*Defined in [src/api/entities/Portfolio/index.ts:123](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Portfolio/index.ts#L123)*

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

*Defined in [src/api/entities/Entity.ts:61](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Entity.ts#L61)*

Determine whether this Entity is the same as another one

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [Entity](entity.md)‹unknown, unknown› |

**Returns:** *boolean*

___

###  isOwnedBy

▸ **isOwnedBy**(`args?`: undefined | object): *Promise‹boolean›*

*Defined in [src/api/entities/Portfolio/index.ts:107](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Portfolio/index.ts#L107)*

Return whether an Identity is the Portfolio owner

**Parameters:**

Name | Type |
------ | ------ |
`args?` | undefined &#124; object |

**Returns:** *Promise‹boolean›*

___

###  moveFunds

▸ **moveFunds**(`args`: [MoveFundsParams](../interfaces/movefundsparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/Portfolio/index.ts:235](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Portfolio/index.ts#L235)*

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

▸ **quitCustody**(`args`: void, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/Portfolio/index.ts:248](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Portfolio/index.ts#L248)*

Returns the custody of the portfolio to the portfolio owner unilaterally

**`note`** required role:
  - Portfolio Custodian

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `quitCustody.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | void |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  setCustodian

▸ **setCustodian**(`args`: [SetCustodianParams](../interfaces/setcustodianparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/Portfolio/index.ts:222](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Portfolio/index.ts#L222)*

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

*Overrides [Entity](entity.md).[toJson](entity.md#abstract-tojson)*

*Defined in [src/api/entities/Portfolio/index.ts:385](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Portfolio/index.ts#L385)*

Return the Portfolio ID and owner DID

**Returns:** *[HumanReadable](../interfaces/humanreadable.md)*

___

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›(`identifiers`: Identifiers): *string*

*Inherited from [Entity](entity.md).[generateUuid](entity.md#static-generateuuid)*

*Defined in [src/api/entities/Entity.ts:14](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Entity.ts#L14)*

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

*Defined in [src/api/entities/Entity.ts:23](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Entity.ts#L23)*

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`serialized` | string | UUID to unserialize  |

**Returns:** *Identifiers*
