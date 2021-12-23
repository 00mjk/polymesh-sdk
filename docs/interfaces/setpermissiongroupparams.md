# Interface: SetPermissionGroupParams

This procedure can be called with:
  - A Security Token's existing Custom Permission Group. The Identity will be assigned as an Agent of that Group for that Token
  - A Known Permission Group and a Security Token. The Identity will be assigned as an Agent of that Group for that Token
  - A set of Transaction Permissions and a Security Token. A Custom Permission Group will be created for that Token with those permissions, and
    the Identity will be assigned as an Agent of that Group for that Token
  - An array of [TxGroup](../enums/txgroup.md)s that represent a set of permissions. A Custom Permission Group will be created with those permissions, and
    the Identity will be assigned as an Agent of that Group for that Token

## Hierarchy

* **SetPermissionGroupParams**

## Index

### Properties

* [group](setpermissiongroupparams.md#group)

## Properties

###  group

• **group**: *[KnownPermissionGroup](../classes/knownpermissiongroup.md) | [CustomPermissionGroup](../classes/custompermissiongroup.md) | [TransactionsParams](transactionsparams.md) | [TxGroupParams](txgroupparams.md)*

*Defined in [src/api/procedures/setPermissionGroup.ts:49](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/procedures/setPermissionGroup.ts#L49)*
