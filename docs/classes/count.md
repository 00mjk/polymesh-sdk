# Class: Count

Handles all Count Transfer Restriction related functionality

## Hierarchy

  ↳ [TransferRestrictionBase](transferrestrictionbase.md)‹[Count](../enums/transferrestrictiontype.md#count)›

  ↳ **Count**

## Index

### Properties

* [context](count.md#protected-context)
* [get](count.md#get)
* [parent](count.md#protected-parent)
* [type](count.md#protected-type)

### Methods

* [addRestriction](count.md#addrestriction)
* [removeRestrictions](count.md#removerestrictions)
* [setRestrictions](count.md#setrestrictions)

## Properties

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:11](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Namespace.ts#L11)*

___

###  get

• **get**: *function*

*Overrides [TransferRestrictionBase](transferrestrictionbase.md).[get](transferrestrictionbase.md#get)*

*Defined in [src/api/entities/SecurityToken/TransferRestrictions/Count.ts:61](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/SecurityToken/TransferRestrictions/Count.ts#L61)*

Retrieve all active Count Transfer Restrictions

**`note`** there is a maximum number of restrictions allowed accross all types.
  The `availableSlots` property of the result represents how many more restrictions can be added
  before reaching that limit

#### Type declaration:

▸ (): *Promise‹[ActiveTransferRestrictions](../interfaces/activetransferrestrictions.md)‹[CountTransferRestriction](../interfaces/counttransferrestriction.md)››*

___

### `Protected` parent

• **parent**: *[SecurityToken](securitytoken.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:9](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Namespace.ts#L9)*

___

### `Protected` type

• **type**: *[Count](../enums/transferrestrictiontype.md#count)* = TransferRestrictionType.Count as const

*Overrides [TransferRestrictionBase](transferrestrictionbase.md).[type](transferrestrictionbase.md#protected-abstract-type)*

*Defined in [src/api/entities/SecurityToken/TransferRestrictions/Count.ts:16](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/SecurityToken/TransferRestrictions/Count.ts#L16)*

## Methods

###  addRestriction

▸ **addRestriction**(`args`: Omit‹[AddCountTransferRestrictionParams](../globals.md#addcounttransferrestrictionparams), "type"›, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹number››*

*Overrides [TransferRestrictionBase](transferrestrictionbase.md).[addRestriction](transferrestrictionbase.md#addrestriction)*

*Defined in [src/api/entities/SecurityToken/TransferRestrictions/Count.ts:26](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/SecurityToken/TransferRestrictions/Count.ts#L26)*

Add a Count Transfer Restriction to this Security Token

**`note`** the result is the total amount of restrictions after the procedure has run

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `addRestriction.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | Omit‹[AddCountTransferRestrictionParams](../globals.md#addcounttransferrestrictionparams), "type"› |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹number››*

___

###  removeRestrictions

▸ **removeRestrictions**(`args`: void, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹number››*

*Overrides [TransferRestrictionBase](transferrestrictionbase.md).[removeRestrictions](transferrestrictionbase.md#removerestrictions)*

*Defined in [src/api/entities/SecurityToken/TransferRestrictions/Count.ts:50](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/SecurityToken/TransferRestrictions/Count.ts#L50)*

Removes all Count Transfer Restrictions from this Security Token

**`note`** the result is the total amount of restrictions after the procedure has run

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `removeRestrictions.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | void |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹number››*

___

###  setRestrictions

▸ **setRestrictions**(`args`: Omit‹[SetCountTransferRestrictionsParams](../interfaces/setcounttransferrestrictionsparams.md), "type"›, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹number››*

*Overrides [TransferRestrictionBase](transferrestrictionbase.md).[setRestrictions](transferrestrictionbase.md#setrestrictions)*

*Defined in [src/api/entities/SecurityToken/TransferRestrictions/Count.ts:38](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/SecurityToken/TransferRestrictions/Count.ts#L38)*

Sets all Count Transfer Restrictions on this Security Token

**`note`** the result is the total amount of restrictions after the procedure has run

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `setRestrictions.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | Omit‹[SetCountTransferRestrictionsParams](../interfaces/setcounttransferrestrictionsparams.md), "type"› |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹number››*
