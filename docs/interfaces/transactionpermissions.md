# Interface: TransactionPermissions

Permissions related to Transactions. Can include/exclude individual transactions or entire modules

## Hierarchy

* [SectionPermissions](sectionpermissions.md)‹TxTag | ModuleName›

  ↳ **TransactionPermissions**

## Index

### Properties

* [exceptions](transactionpermissions.md#optional-exceptions)
* [type](transactionpermissions.md#type)
* [values](transactionpermissions.md#values)

## Properties

### `Optional` exceptions

• **exceptions**? : *TxTag[]*

*Defined in [src/types/index.ts:908](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/types/index.ts#L908)*

Transactions to be exempted from inclusion/exclusion. This allows more granularity when
  setting permissions. For example, let's say we want to include only the `asset` and `staking` modules,
  but exclude the `asset.registerTicker` transaction. We could add both modules to `values`, and add
  `TxTags.asset.registerTicker` to `exceptions`

___

###  type

• **type**: *[PermissionType](../enums/permissiontype.md)*

*Inherited from [SectionPermissions](sectionpermissions.md).[type](sectionpermissions.md#type)*

*Defined in [src/types/index.ts:895](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/types/index.ts#L895)*

Whether the permissions are inclusive or exclusive

___

###  values

• **values**: *(TxTag | ModuleName)[]*

*Inherited from [SectionPermissions](sectionpermissions.md).[values](sectionpermissions.md#values)*

*Defined in [src/types/index.ts:891](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/types/index.ts#L891)*

Values to be included/excluded
