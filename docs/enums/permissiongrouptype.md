# Enumeration: PermissionGroupType

## Index

### Enumeration members

* [ExceptMeta](permissiongrouptype.md#exceptmeta)
* [Full](permissiongrouptype.md#full)
* [PolymeshV1Caa](permissiongrouptype.md#polymeshv1caa)
* [PolymeshV1Pia](permissiongrouptype.md#polymeshv1pia)

## Enumeration members

###  ExceptMeta

• **ExceptMeta**: = "ExceptMeta"

*Defined in [src/types/index.ts:837](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L837)*

not authorized:
  - externalAgents

___

###  Full

• **Full**: = "Full"

*Defined in [src/types/index.ts:832](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L832)*

all transactions authorized

___

###  PolymeshV1Caa

• **PolymeshV1Caa**: = "PolymeshV1Caa"

*Defined in [src/types/index.ts:844](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L844)*

authorized:
  - corporateAction
  - corporateBallot
  - capitalDistribution

___

###  PolymeshV1Pia

• **PolymeshV1Pia**: = "PolymeshV1Pia"

*Defined in [src/types/index.ts:852](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L852)*

authorized:
  - asset.issue
  - asset.redeem
  - asset.controllerTransfer
  - sto (except for sto.invest)
