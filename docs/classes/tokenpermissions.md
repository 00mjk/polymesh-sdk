# Class: TokenPermissions

Handles all Token Permissions (External Agents) related functionality on the Identity side

## Hierarchy

* Namespace‹[Identity](identity.md)›

  ↳ **TokenPermissions**

## Index

### Properties

* [context](tokenpermissions.md#protected-context)
* [parent](tokenpermissions.md#protected-parent)

### Methods

* [enabledAt](tokenpermissions.md#enabledat)
* [get](tokenpermissions.md#get)
* [getGroup](tokenpermissions.md#getgroup)
* [getOperationHistory](tokenpermissions.md#getoperationhistory)
* [hasPermissions](tokenpermissions.md#haspermissions)
* [setGroup](tokenpermissions.md#setgroup)
* [waive](tokenpermissions.md#waive)

## Properties

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:11](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Namespace.ts#L11)*

___

### `Protected` parent

• **parent**: *[Identity](identity.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:9](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Namespace.ts#L9)*

## Methods

###  enabledAt

▸ **enabledAt**(`__namedParameters`: object): *Promise‹[EventIdentifier](../interfaces/eventidentifier.md) | null›*

*Defined in [src/api/entities/Identity/TokenPermissions.ts:263](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Identity/TokenPermissions.ts#L263)*

Retrieve the identifier data (block number, date and event index) of the event that was emitted when this Identity was enabled/added as
  an Agent with permissions over a specific Security Token

**`note`** uses the middleware

**`note`** there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`token` | string &#124; [SecurityToken](securitytoken.md)‹› |

**Returns:** *Promise‹[EventIdentifier](../interfaces/eventidentifier.md) | null›*

___

###  get

▸ **get**(): *Promise‹[TokenWithGroup](../interfaces/tokenwithgroup.md)[]›*

*Defined in [src/api/entities/Identity/TokenPermissions.ts:75](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Identity/TokenPermissions.ts#L75)*

Retrieve all the Security Tokens over which this Identity has permissions, with the corresponding Permission Group

**Returns:** *Promise‹[TokenWithGroup](../interfaces/tokenwithgroup.md)[]›*

___

###  getGroup

▸ **getGroup**(`__namedParameters`: object): *Promise‹[CustomPermissionGroup](custompermissiongroup.md) | [KnownPermissionGroup](knownpermissiongroup.md)›*

*Defined in [src/api/entities/Identity/TokenPermissions.ts:223](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Identity/TokenPermissions.ts#L223)*

Retrieve this Identity's Permission Group for a specific Security Token

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`token` | string &#124; [SecurityToken](securitytoken.md)‹› |

**Returns:** *Promise‹[CustomPermissionGroup](custompermissiongroup.md) | [KnownPermissionGroup](knownpermissiongroup.md)›*

___

###  getOperationHistory

▸ **getOperationHistory**(`opts`: object): *Promise‹[ResultSet](../interfaces/resultset.md)‹[EventIdentifier](../interfaces/eventidentifier.md)››*

*Defined in [src/api/entities/Identity/TokenPermissions.ts:315](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Identity/TokenPermissions.ts#L315)*

Retrieve all Events triggered by Operations this Identity has performed on a specific Security Token

**`note`** uses the middleware

**`note`** supports pagination

**Parameters:**

▪ **opts**: *object*

Name | Type | Description |
------ | ------ | ------ |
`eventId?` | EventId | filters results by event |
`moduleId?` | ModuleId | filters results by module |
`size?` | undefined &#124; number | page size |
`start?` | undefined &#124; number | page offset  |
`token` | string &#124; [SecurityToken](securitytoken.md) | - |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[EventIdentifier](../interfaces/eventidentifier.md)››*

___

###  hasPermissions

▸ **hasPermissions**(`args`: object): *Promise‹boolean›*

*Defined in [src/api/entities/Identity/TokenPermissions.ts:104](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Identity/TokenPermissions.ts#L104)*

Check whether this Identity has specific transaction Permissions over a Security Token

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`token` | [SecurityToken](securitytoken.md) &#124; string |
`transactions` | TxTag[] &#124; null |

**Returns:** *Promise‹boolean›*

___

###  setGroup

▸ **setGroup**(`args`: [SetPermissionGroupParams](../interfaces/setpermissiongroupparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[CustomPermissionGroup](custompermissiongroup.md) | [KnownPermissionGroup](knownpermissiongroup.md)››*

*Defined in [src/api/entities/Identity/TokenPermissions.ts:300](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Identity/TokenPermissions.ts#L300)*

Assign this Identity to a different Permission Group for a given Security Token

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `setGroup.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [SetPermissionGroupParams](../interfaces/setpermissiongroupparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[CustomPermissionGroup](custompermissiongroup.md) | [KnownPermissionGroup](knownpermissiongroup.md)››*

___

###  waive

▸ **waive**(`args`: [WaivePermissionsParams](../interfaces/waivepermissionsparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/Identity/TokenPermissions.ts:290](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Identity/TokenPermissions.ts#L290)*

Abdicate from the current Permissions Group for a given Security Token. This means that this Identity will no longer have any permissions over said Token

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `waive.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [WaivePermissionsParams](../interfaces/waivepermissionsparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*
