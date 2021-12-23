# Class: Checkpoint

Represents a snapshot of the Security Token's holders and their respective balances
  at a certain point in time

## Hierarchy

* [Entity](entity.md)‹UniqueIdentifiers, [HumanReadable](../interfaces/humanreadable.md)›

  ↳ **Checkpoint**

## Index

### Properties

* [context](checkpoint.md#protected-context)
* [id](checkpoint.md#id)
* [ticker](checkpoint.md#ticker)
* [uuid](checkpoint.md#uuid)

### Methods

* [allBalances](checkpoint.md#allbalances)
* [balance](checkpoint.md#balance)
* [createdAt](checkpoint.md#createdat)
* [exists](checkpoint.md#exists)
* [isEqual](checkpoint.md#isequal)
* [toJson](checkpoint.md#tojson)
* [totalSupply](checkpoint.md#totalsupply)
* [generateUuid](checkpoint.md#static-generateuuid)
* [unserialize](checkpoint.md#static-unserialize)

## Properties

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from [Entity](entity.md).[context](entity.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Entity.ts#L48)*

___

###  id

• **id**: *BigNumber*

*Defined in [src/api/entities/Checkpoint.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Checkpoint.ts#L46)*

checkpoint identifier number

___

###  ticker

• **ticker**: *string*

*Defined in [src/api/entities/Checkpoint.ts:51](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Checkpoint.ts#L51)*

ticker of the Security Token whose balances are being recorded

___

###  uuid

• **uuid**: *string*

*Inherited from [Entity](entity.md).[uuid](entity.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Entity.ts#L46)*

## Methods

###  allBalances

▸ **allBalances**(`paginationOpts?`: [PaginationOptions](../interfaces/paginationoptions.md)): *Promise‹[ResultSet](../interfaces/resultset.md)‹[IdentityBalance](../interfaces/identitybalance.md)››*

*Defined in [src/api/entities/Checkpoint.ts:98](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Checkpoint.ts#L98)*

Retrieve all Tokenholder balances at this Checkpoint

**`note`** supports pagination

**Parameters:**

Name | Type |
------ | ------ |
`paginationOpts?` | [PaginationOptions](../interfaces/paginationoptions.md) |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[IdentityBalance](../interfaces/identitybalance.md)››*

___

###  balance

▸ **balance**(`args?`: undefined | object): *Promise‹BigNumber›*

*Defined in [src/api/entities/Checkpoint.ts:182](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Checkpoint.ts#L182)*

Retrieve the balance of a specific Tokenholder Identity at this Checkpoint

**Parameters:**

Name | Type |
------ | ------ |
`args?` | undefined &#124; object |

**Returns:** *Promise‹BigNumber›*

___

###  createdAt

▸ **createdAt**(): *Promise‹Date›*

*Defined in [src/api/entities/Checkpoint.ts:82](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Checkpoint.ts#L82)*

Retrieve this Checkpoint's creation date

**Returns:** *Promise‹Date›*

___

###  exists

▸ **exists**(): *Promise‹boolean›*

*Overrides [Entity](entity.md).[exists](entity.md#abstract-exists)*

*Defined in [src/api/entities/Checkpoint.ts:222](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Checkpoint.ts#L222)*

Determine whether this Checkpoint exists on chain

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

###  toJson

▸ **toJson**(): *[HumanReadable](../interfaces/humanreadable.md)*

*Overrides [Entity](entity.md).[toJson](entity.md#abstract-tojson)*

*Defined in [src/api/entities/Checkpoint.ts:242](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Checkpoint.ts#L242)*

Return the Checkpoint's ticker and identifier

**Returns:** *[HumanReadable](../interfaces/humanreadable.md)*

___

###  totalSupply

▸ **totalSupply**(): *Promise‹BigNumber›*

*Defined in [src/api/entities/Checkpoint.ts:68](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Checkpoint.ts#L68)*

Retrieve the Security Token's total supply at this checkpoint

**Returns:** *Promise‹BigNumber›*

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
