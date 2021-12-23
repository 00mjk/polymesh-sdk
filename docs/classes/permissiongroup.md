# Class: PermissionGroup

Represents a group of permissions for a Security Token

## Hierarchy

* [Entity](entity.md)‹UniqueIdentifiers, unknown›

  ↳ **PermissionGroup**

  ↳ [KnownPermissionGroup](knownpermissiongroup.md)

  ↳ [CustomPermissionGroup](custompermissiongroup.md)

## Index

### Properties

* [context](permissiongroup.md#protected-context)
* [token](permissiongroup.md#token)
* [uuid](permissiongroup.md#uuid)

### Methods

* [exists](permissiongroup.md#abstract-exists)
* [getPermissions](permissiongroup.md#abstract-getpermissions)
* [isEqual](permissiongroup.md#isequal)
* [toJson](permissiongroup.md#abstract-tojson)
* [generateUuid](permissiongroup.md#static-generateuuid)
* [isUniqueIdentifiers](permissiongroup.md#static-isuniqueidentifiers)
* [unserialize](permissiongroup.md#static-unserialize)

## Properties

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from [Entity](entity.md).[context](entity.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/Entity.ts#L48)*

___

###  token

• **token**: *[SecurityToken](securitytoken.md)*

*Defined in [src/api/entities/PermissionGroup.ts:19](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/PermissionGroup.ts#L19)*

Security Token for which this group specifies permissions

___

###  uuid

• **uuid**: *string*

*Inherited from [Entity](entity.md).[uuid](entity.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/Entity.ts#L46)*

## Methods

### `Abstract` exists

▸ **exists**(): *Promise‹boolean›*

*Inherited from [Entity](entity.md).[exists](entity.md#abstract-exists)*

*Defined in [src/api/entities/Entity.ts:68](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/Entity.ts#L68)*

Determine whether this Entity exists on chain

**Returns:** *Promise‹boolean›*

___

### `Abstract` getPermissions

▸ **getPermissions**(): *Promise‹[GroupPermissions](../globals.md#grouppermissions)›*

*Defined in [src/api/entities/PermissionGroup.ts:35](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/PermissionGroup.ts#L35)*

Retrieve the Permissions associated with this Permission Group

**Returns:** *Promise‹[GroupPermissions](../globals.md#grouppermissions)›*

___

###  isEqual

▸ **isEqual**(`entity`: [Entity](entity.md)‹unknown, unknown›): *boolean*

*Inherited from [Entity](entity.md).[isEqual](entity.md#isequal)*

*Defined in [src/api/entities/Entity.ts:61](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/Entity.ts#L61)*

Determine whether this Entity is the same as another one

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [Entity](entity.md)‹unknown, unknown› |

**Returns:** *boolean*

___

### `Abstract` toJson

▸ **toJson**(): *unknown*

*Inherited from [Entity](entity.md).[toJson](entity.md#abstract-tojson)*

*Defined in [src/api/entities/Entity.ts:73](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/Entity.ts#L73)*

Returns Entity data in a human readable (JSON) format

**Returns:** *unknown*

___

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›(`identifiers`: Identifiers): *string*

*Inherited from [Entity](entity.md).[generateUuid](entity.md#static-generateuuid)*

*Defined in [src/api/entities/Entity.ts:14](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/Entity.ts#L14)*

Generate the Entity's UUID from its identifying properties

**Type parameters:**

▪ **Identifiers**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`identifiers` | Identifiers |   |

**Returns:** *string*

___

### `Static` isUniqueIdentifiers

▸ **isUniqueIdentifiers**(`identifiers`: unknown): *boolean*

*Inherited from [Entity](entity.md).[isUniqueIdentifiers](entity.md#static-isuniqueidentifiers)*

*Defined in [src/api/entities/Entity.ts:42](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/Entity.ts#L42)*

Typeguard that checks whether the object passed corresponds to the unique identifiers of the class. Must be overridden

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`identifiers` | unknown | object to type check  |

**Returns:** *boolean*

___

### `Static` unserialize

▸ **unserialize**‹**Identifiers**›(`serialized`: string): *Identifiers*

*Inherited from [Entity](entity.md).[unserialize](entity.md#static-unserialize)*

*Defined in [src/api/entities/Entity.ts:23](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/Entity.ts#L23)*

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`serialized` | string | UUID to unserialize  |

**Returns:** *Identifiers*
