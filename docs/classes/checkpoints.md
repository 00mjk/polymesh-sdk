# Class: Checkpoints

Handles all Security Token Checkpoints related functionality

## Hierarchy

* Namespace‹[SecurityToken](securitytoken.md)›

  ↳ **Checkpoints**

## Index

### Properties

* [context](checkpoints.md#protected-context)
* [parent](checkpoints.md#protected-parent)
* [schedules](checkpoints.md#schedules)

### Methods

* [create](checkpoints.md#create)
* [get](checkpoints.md#get)
* [getOne](checkpoints.md#getone)

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

___

###  schedules

• **schedules**: *[Schedules](schedules.md)*

*Defined in [src/api/entities/SecurityToken/Checkpoints/index.ts:36](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/SecurityToken/Checkpoints/index.ts#L36)*

## Methods

###  create

▸ **create**(`opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[Checkpoint](checkpoint.md)››*

*Defined in [src/api/entities/SecurityToken/Checkpoints/index.ts:60](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/SecurityToken/Checkpoints/index.ts#L60)*

Create a snapshot of Security Token holders and their respective balances at this moment

**`note`** this method is of type [NoArgsProcedureMethod](../interfaces/noargsproceduremethod.md), which means you can call `create.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[Checkpoint](checkpoint.md)››*

___

###  get

▸ **get**(`paginationOpts?`: [PaginationOptions](../interfaces/paginationoptions.md)): *Promise‹[ResultSet](../interfaces/resultset.md)‹[CheckpointWithData](../interfaces/checkpointwithdata.md)››*

*Defined in [src/api/entities/SecurityToken/Checkpoints/index.ts:94](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/SecurityToken/Checkpoints/index.ts#L94)*

Retrieve all Checkpoints created on this Security Token, together with their corresponding creation Date and Total Supply

**`note`** supports pagination

**Parameters:**

Name | Type |
------ | ------ |
`paginationOpts?` | [PaginationOptions](../interfaces/paginationoptions.md) |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[CheckpointWithData](../interfaces/checkpointwithdata.md)››*

___

###  getOne

▸ **getOne**(`args`: object): *Promise‹[Checkpoint](checkpoint.md)›*

*Defined in [src/api/entities/SecurityToken/Checkpoints/index.ts:69](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/SecurityToken/Checkpoints/index.ts#L69)*

Retrieve a single Checkpoint for this Security Token by its ID

**`throws`** if there is no Checkpoint with the passed ID

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`id` | BigNumber |

**Returns:** *Promise‹[Checkpoint](checkpoint.md)›*
