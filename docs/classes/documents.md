# Class: Documents

Handles all Security Token Document related functionality

## Hierarchy

* Namespace‹[SecurityToken](securitytoken.md)›

  ↳ **Documents**

## Index

### Properties

* [context](documents.md#protected-context)
* [parent](documents.md#protected-parent)

### Methods

* [get](documents.md#get)
* [set](documents.md#set)

## Properties

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:11](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Namespace.ts#L11)*

___

### `Protected` parent

• **parent**: *[SecurityToken](securitytoken.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:9](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Namespace.ts#L9)*

## Methods

###  get

▸ **get**(`paginationOpts?`: [PaginationOptions](../interfaces/paginationoptions.md)): *Promise‹[ResultSet](../interfaces/resultset.md)‹[TokenDocument](../interfaces/tokendocument.md)››*

*Defined in [src/api/entities/SecurityToken/Documents.ts:49](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/SecurityToken/Documents.ts#L49)*

Retrieve all documents linked to the Security Token

**`note`** supports pagination

**Parameters:**

Name | Type |
------ | ------ |
`paginationOpts?` | [PaginationOptions](../interfaces/paginationoptions.md) |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[TokenDocument](../interfaces/tokendocument.md)››*

___

###  set

▸ **set**(`args`: [SetTokenDocumentsParams](../interfaces/settokendocumentsparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

*Defined in [src/api/entities/SecurityToken/Documents.ts:40](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/SecurityToken/Documents.ts#L40)*

Assign a new list of documents to the Security Token by replacing the existing list of documents with the one passed in the parameters

This requires two transactions

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `set.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [SetTokenDocumentsParams](../interfaces/settokendocumentsparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*
