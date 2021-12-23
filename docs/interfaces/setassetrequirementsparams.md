# Interface: SetAssetRequirementsParams

## Hierarchy

* **SetAssetRequirementsParams**

## Index

### Properties

* [requirements](setassetrequirementsparams.md#requirements)

## Properties

###  requirements

• **requirements**: *[Condition](../globals.md#condition)[][]*

*Defined in [src/api/procedures/setAssetRequirements.ts:18](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/procedures/setAssetRequirements.ts#L18)*

array of array of conditions. For a transfer to be successful, it must comply with all the conditions of at least one of the arrays. In other words, higher level arrays are *OR* between them,
while conditions inside each array are *AND* between them
