# Class: TransferRestrictionBase ‹**T**›

Base class for managing Transfer Restrictions

## Type parameters

▪ **T**: *[TransferRestrictionType](../enums/transferrestrictiontype.md)*

## Hierarchy

* Namespace‹[SecurityToken](securitytoken.md)›

  ↳ **TransferRestrictionBase**

  ↳ [Count](count.md)

  ↳ [Percentage](percentage.md)

## Index

### Properties

* [context](transferrestrictionbase.md#protected-context)
* [exemptedScopeIds](transferrestrictionbase.md#optional-exemptedscopeids)
* [parent](transferrestrictionbase.md#protected-parent)
* [type](transferrestrictionbase.md#protected-abstract-type)

### Methods

* [addRestriction](transferrestrictionbase.md#addrestriction)
* [get](transferrestrictionbase.md#get)
* [removeRestrictions](transferrestrictionbase.md#removerestrictions)
* [setRestrictions](transferrestrictionbase.md#setrestrictions)

## Properties

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:11](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Namespace.ts#L11)*

___

### `Optional` exemptedScopeIds

• **exemptedScopeIds**? : *string[]*

*Defined in [src/types/index.ts:1046](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L1046)*

array of Scope IDs that are exempted from the Restriction

___

### `Protected` parent

• **parent**: *[SecurityToken](securitytoken.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:9](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Namespace.ts#L9)*

___

### `Protected` `Abstract` type

• **type**: *T*

*Defined in [src/api/entities/SecurityToken/TransferRestrictions/TransferRestrictionBase.ts:56](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/SecurityToken/TransferRestrictions/TransferRestrictionBase.ts#L56)*

## Methods

###  addRestriction

▸ **addRestriction**(`args`: [AddRestrictionParams](../globals.md#addrestrictionparams)‹T›, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹number››*

*Defined in [src/api/entities/SecurityToken/TransferRestrictions/TransferRestrictionBase.ts:123](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/SecurityToken/TransferRestrictions/TransferRestrictionBase.ts#L123)*

Add a Transfer Restriction of the corresponding type to this Security Token

**`note`** the result is the total amount of restrictions after the procedure has run

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `addRestriction.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [AddRestrictionParams](../globals.md#addrestrictionparams)‹T› |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹number››*

___

###  get

▸ **get**(): *Promise‹[GetReturnType](../globals.md#getreturntype)‹T››*

*Defined in [src/api/entities/SecurityToken/TransferRestrictions/TransferRestrictionBase.ts:158](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/SecurityToken/TransferRestrictions/TransferRestrictionBase.ts#L158)*

Retrieve all active Transfer Restrictions of the corresponding type

**`note`** there is a maximum number of restrictions allowed accross all types.
  The `availableSlots` property of the result represents how many more restrictions can be added
  before reaching that limit

**Returns:** *Promise‹[GetReturnType](../globals.md#getreturntype)‹T››*

___

###  removeRestrictions

▸ **removeRestrictions**(`args`: void, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹number››*

*Defined in [src/api/entities/SecurityToken/TransferRestrictions/TransferRestrictionBase.ts:147](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/SecurityToken/TransferRestrictions/TransferRestrictionBase.ts#L147)*

Removes all Transfer Restrictions of the corresponding type from this Security Token

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

▸ **setRestrictions**(`args`: [SetRestrictionsParams](../globals.md#setrestrictionsparams)‹T›, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹number››*

*Defined in [src/api/entities/SecurityToken/TransferRestrictions/TransferRestrictionBase.ts:135](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/SecurityToken/TransferRestrictions/TransferRestrictionBase.ts#L135)*

Sets all Transfer Restrictions of the corresponding type on this Security Token

**`note`** the result is the total amount of restrictions after the procedure has run

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `setRestrictions.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [SetRestrictionsParams](../globals.md#setrestrictionsparams)‹T› |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹number››*
