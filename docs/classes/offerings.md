# Class: Offerings

Handles all Security Token Offering related functionality

## Hierarchy

* Namespace‹[SecurityToken](securitytoken.md)›

  ↳ **Offerings**

## Index

### Properties

* [context](offerings.md#protected-context)
* [parent](offerings.md#protected-parent)

### Methods

* [get](offerings.md#get)
* [getOne](offerings.md#getone)
* [launch](offerings.md#launch)

## Properties

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:11](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/Namespace.ts#L11)*

___

### `Protected` parent

• **parent**: *[SecurityToken](securitytoken.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:9](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/Namespace.ts#L9)*

## Methods

###  get

▸ **get**(`opts`: object): *Promise‹[StoWithDetails](../interfaces/stowithdetails.md)[]›*

*Defined in [src/api/entities/SecurityToken/Offerings.ts:81](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/SecurityToken/Offerings.ts#L81)*

Retrieve all of the Token's Offerings and their details. Can be filtered using parameters

**Parameters:**

▪`Default value`  **opts**: *object*= {}

Name | Type | Description |
------ | ------ | ------ |
`status?` | Partial‹[StoStatus](../interfaces/stostatus.md)› | status of the offerings to fetch. If defined, only STOs that have all passed statuses will be returned  |

**Returns:** *Promise‹[StoWithDetails](../interfaces/stowithdetails.md)[]›*

___

###  getOne

▸ **getOne**(`args`: object): *Promise‹[Sto](sto.md)›*

*Defined in [src/api/entities/SecurityToken/Offerings.ts:56](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/SecurityToken/Offerings.ts#L56)*

Retrieve a single Offering associated to this Security Token by its ID

**`throws`** if there is no Offering with the passed ID

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`id` | BigNumber |

**Returns:** *Promise‹[Sto](sto.md)›*

___

###  launch

▸ **launch**(`args`: LaunchStoParams, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[Sto](sto.md)››*

*Defined in [src/api/entities/SecurityToken/Offerings.ts:47](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/SecurityToken/Offerings.ts#L47)*

Launch a Security Token Offering

**`note`** required roles:
  - Offering Portfolio Custodian
  - Raising Portfolio Custodian

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `launch.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | LaunchStoParams |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[Sto](sto.md)››*
