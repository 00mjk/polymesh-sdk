# Interface: SectionPermissions ‹**T**›

Signer/agent permissions for a specific type

## Type parameters

▪ **T**

type of Permissions (Security Token, Transaction, Portfolio, etc)

## Hierarchy

* **SectionPermissions**

  ↳ [TransactionPermissions](transactionpermissions.md)

## Index

### Properties

* [type](sectionpermissions.md#type)
* [values](sectionpermissions.md#values)

## Properties

###  type

• **type**: *[PermissionType](../enums/permissiontype.md)*

*Defined in [src/types/index.ts:763](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L763)*

Whether the permissions are inclusive or exclusive

___

###  values

• **values**: *T[]*

*Defined in [src/types/index.ts:759](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L759)*

Values to be included/excluded
