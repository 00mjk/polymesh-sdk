# Class: CustomPermissionGroup

Represents a group of custom permissions for a Security Token

## Hierarchy

  ↳ [PermissionGroup](permissiongroup.md)

  ↳ **CustomPermissionGroup**

## Index

### Properties

* [context](custompermissiongroup.md#protected-context)
* [id](custompermissiongroup.md#id)
* [ticker](custompermissiongroup.md#ticker)
* [uuid](custompermissiongroup.md#uuid)

### Methods

* [exists](custompermissiongroup.md#exists)
* [getPermissions](custompermissiongroup.md#getpermissions)
* [isEqual](custompermissiongroup.md#isequal)
* [setPermissions](custompermissiongroup.md#setpermissions)
* [toJson](custompermissiongroup.md#tojson)
* [generateUuid](custompermissiongroup.md#static-generateuuid)
* [unserialize](custompermissiongroup.md#static-unserialize)

## Properties

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from [Entity](entity.md).[context](entity.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Entity.ts#L48)*

___

###  id

• **id**: *BigNumber*

*Defined in [src/api/entities/CustomPermissionGroup.ts:45](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/CustomPermissionGroup.ts#L45)*

___

###  ticker

• **ticker**: *string*

*Inherited from [PermissionGroup](permissiongroup.md).[ticker](permissiongroup.md#ticker)*

*Defined in [src/api/entities/PermissionGroup.ts:27](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/PermissionGroup.ts#L27)*

___

###  uuid

• **uuid**: *string*

*Inherited from [Entity](entity.md).[uuid](entity.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Entity.ts#L46)*

## Methods

###  exists

▸ **exists**(): *Promise‹boolean›*

*Overrides [Entity](entity.md).[exists](entity.md#abstract-exists)*

*Defined in [src/api/entities/CustomPermissionGroup.ts:117](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/CustomPermissionGroup.ts#L117)*

Determine whether this Custom Permission Group exists on chain

**Returns:** *Promise‹boolean›*

___

###  getPermissions

▸ **getPermissions**(): *Promise‹[GroupPermissions](../globals.md#grouppermissions)›*

*Overrides [PermissionGroup](permissiongroup.md).[getPermissions](permissiongroup.md#abstract-getpermissions)*

*Defined in [src/api/entities/CustomPermissionGroup.ts:87](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/CustomPermissionGroup.ts#L87)*

Retrieve the list of permissions and transaction groups associated with this Permission Group

**Returns:** *Promise‹[GroupPermissions](../globals.md#grouppermissions)›*

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

###  setPermissions

▸ **setPermissions**(`args`: [SetGroupPermissionsParams](../interfaces/setgrouppermissionsparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/CustomPermissionGroup.ts:80](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/CustomPermissionGroup.ts#L80)*

Modify the group's permissions

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `setPermissions.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [SetGroupPermissionsParams](../interfaces/setgrouppermissionsparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  toJson

▸ **toJson**(): *HumanReadable*

*Overrides [Entity](entity.md).[toJson](entity.md#abstract-tojson)*

*Defined in [src/api/entities/CustomPermissionGroup.ts:66](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/CustomPermissionGroup.ts#L66)*

Return the Group's ID

**Returns:** *HumanReadable*

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
