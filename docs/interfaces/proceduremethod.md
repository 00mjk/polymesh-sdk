# Interface: ProcedureMethod ‹**MethodArgs, ProcedureReturnValue, ReturnValue**›

## Type parameters

▪ **MethodArgs**

▪ **ProcedureReturnValue**

▪ **ReturnValue**

## Hierarchy

* **ProcedureMethod**

## Callable

▸ (`args`: MethodArgs, `opts?`: [ProcedureOpts](procedureopts.md)): *Promise‹[TransactionQueue](../classes/transactionqueue.md)‹ProcedureReturnValue, ReturnValue››*

*Defined in [src/types/index.ts:1323](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/types/index.ts#L1323)*

**Parameters:**

Name | Type |
------ | ------ |
`args` | MethodArgs |
`opts?` | [ProcedureOpts](procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](../classes/transactionqueue.md)‹ProcedureReturnValue, ReturnValue››*

## Index

### Properties

* [checkAuthorization](proceduremethod.md#checkauthorization)

## Properties

###  checkAuthorization

• **checkAuthorization**: *function*

*Defined in [src/types/index.ts:1327](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/types/index.ts#L1327)*

#### Type declaration:

▸ (`args`: MethodArgs, `opts?`: [ProcedureOpts](procedureopts.md)): *Promise‹[ProcedureAuthorizationStatus](procedureauthorizationstatus.md)›*

**Parameters:**

Name | Type |
------ | ------ |
`args` | MethodArgs |
`opts?` | [ProcedureOpts](procedureopts.md) |
