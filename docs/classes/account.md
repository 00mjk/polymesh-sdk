# Class: Account

Represents an account in the Polymesh blockchain. Accounts can hold POLYX, control Identities and vote on proposals (among other things)

## Hierarchy

* [Entity](entity.md)‹UniqueIdentifiers, string›

  ↳ **Account**

## Index

### Properties

* [address](account.md#address)
* [authorizations](account.md#authorizations)
* [context](account.md#protected-context)
* [key](account.md#key)
* [uuid](account.md#uuid)

### Methods

* [exists](account.md#exists)
* [getBalance](account.md#getbalance)
* [getIdentity](account.md#getidentity)
* [getPermissions](account.md#getpermissions)
* [getSubsidy](account.md#getsubsidy)
* [getTransactionHistory](account.md#gettransactionhistory)
* [hasPermissions](account.md#haspermissions)
* [isEqual](account.md#isequal)
* [isFrozen](account.md#isfrozen)
* [leaveIdentity](account.md#leaveidentity)
* [toJson](account.md#tojson)
* [generateUuid](account.md#static-generateuuid)
* [unserialize](account.md#static-unserialize)

## Properties

###  address

• **address**: *string*

*Defined in [src/api/entities/Account.ts:64](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Account.ts#L64)*

Polymesh-specific address of the account. Serves as an identifier

___

###  authorizations

• **authorizations**: *[Authorizations](authorizations.md)‹[Account](account.md)›*

*Defined in [src/api/entities/Account.ts:72](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Account.ts#L72)*

___

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from [Entity](entity.md).[context](entity.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Entity.ts#L48)*

___

###  key

• **key**: *string*

*Defined in [src/api/entities/Account.ts:69](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Account.ts#L69)*

public key of the account. This is a hex representation of the address that is transversal to any Substrate chain

___

###  uuid

• **uuid**: *string*

*Inherited from [Entity](entity.md).[uuid](entity.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Entity.ts#L46)*

## Methods

###  exists

▸ **exists**(): *Promise‹boolean›*

*Overrides [Entity](entity.md).[exists](entity.md#abstract-exists)*

*Defined in [src/api/entities/Account.ts:446](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Account.ts#L446)*

Determine whether this Account exists on chain

**Returns:** *Promise‹boolean›*

___

###  getBalance

▸ **getBalance**(): *Promise‹[AccountBalance](../globals.md#accountbalance)›*

*Defined in [src/api/entities/Account.ts:109](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Account.ts#L109)*

Get the free/locked POLYX balance of the account

**`note`** can be subscribed to

**Returns:** *Promise‹[AccountBalance](../globals.md#accountbalance)›*

▸ **getBalance**(`callback`: [SubCallback](../globals.md#subcallback)‹[AccountBalance](../globals.md#accountbalance)›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/Account.ts:110](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Account.ts#L110)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[AccountBalance](../globals.md#accountbalance)› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  getIdentity

▸ **getIdentity**(): *Promise‹[Identity](identity.md) | null›*

*Defined in [src/api/entities/Account.ts:152](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Account.ts#L152)*

Retrieve the Identity associated to this Account (null if there is none)

**Returns:** *Promise‹[Identity](identity.md) | null›*

___

###  getPermissions

▸ **getPermissions**(): *Promise‹Permissions›*

*Defined in [src/api/entities/Account.ts:290](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Account.ts#L290)*

Retrieve the Permissions this Signer has as a Signing Key for its corresponding Identity

**Returns:** *Promise‹Permissions›*

___

###  getSubsidy

▸ **getSubsidy**(): *Promise‹Omit‹[Subsidy](../interfaces/subsidy.md), "beneficiary"› | null›*

*Defined in [src/api/entities/Account.ts:131](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Account.ts#L131)*

Get the subsidized balance of this Account and the subsidizer Account. If
  this Account isn't being subsidized, return null

**`note`** can be subscribed to

**Returns:** *Promise‹Omit‹[Subsidy](../interfaces/subsidy.md), "beneficiary"› | null›*

▸ **getSubsidy**(`callback`: [SubCallback](../globals.md#subcallback)‹Omit‹[Subsidy](../interfaces/subsidy.md), "beneficiary"› | null›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/Account.ts:132](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Account.ts#L132)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹Omit‹[Subsidy](../interfaces/subsidy.md), "beneficiary"› &#124; null› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  getTransactionHistory

▸ **getTransactionHistory**(`filters`: object): *Promise‹[ResultSet](../interfaces/resultset.md)‹[ExtrinsicData](../interfaces/extrinsicdata.md)››*

*Defined in [src/api/entities/Account.ts:184](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Account.ts#L184)*

Retrieve a list of transactions signed by this account. Can be filtered using parameters

**`note`** uses the middleware

**Parameters:**

▪`Default value`  **filters**: *object*= {}

Name | Type | Description |
------ | ------ | ------ |
`blockNumber?` | BigNumber | - |
`orderBy?` | TransactionOrderByInput | - |
`size?` | undefined &#124; number | page size |
`start?` | undefined &#124; number | page offset  |
`success?` | undefined &#124; false &#124; true | whether the transaction was successful or not |
`tag?` | TxTag | tag associated with the transaction |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[ExtrinsicData](../interfaces/extrinsicdata.md)››*

___

###  hasPermissions

▸ **hasPermissions**(`permissions`: [SimplePermissions](../interfaces/simplepermissions.md)): *Promise‹boolean›*

*Defined in [src/api/entities/Account.ts:318](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Account.ts#L318)*

Check if this Account possesses certain Permissions for its corresponding Identity

**Parameters:**

Name | Type |
------ | ------ |
`permissions` | [SimplePermissions](../interfaces/simplepermissions.md) |

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

###  isFrozen

▸ **isFrozen**(): *Promise‹boolean›*

*Defined in [src/api/entities/Account.ts:269](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Account.ts#L269)*

Check whether this Account is frozen. If frozen, it cannot perform any action until the primary key of the Identity unfreezes all secondary keys

**Returns:** *Promise‹boolean›*

___

###  leaveIdentity

▸ **leaveIdentity**(`args`: void, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/Account.ts:100](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Account.ts#L100)*

Leave the Account's Identity. This operation can only be done if the Account is a secondary key for the Identity

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `leaveIdentity.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | void |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  toJson

▸ **toJson**(): *string*

*Overrides [Entity](entity.md).[toJson](entity.md#abstract-tojson)*

*Defined in [src/api/entities/Account.ts:453](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Account.ts#L453)*

Return the Account's address

**Returns:** *string*

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
