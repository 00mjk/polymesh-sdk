# Interface: SetAssetRequirementsParams

## Hierarchy

* **SetAssetRequirementsParams**

## Index

### Properties

* [requirements](setassetrequirementsparams.md#requirements)

## Properties

###  requirements

• **requirements**: *[InputCondition](../globals.md#inputcondition)[][]*

*Defined in [src/api/procedures/setAssetRequirements.ts:15](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/procedures/setAssetRequirements.ts#L15)*

array of array of conditions. For a transfer to be successful, it must comply with all the conditions of at least one of the arrays.
  In other words, higher level arrays are *OR* between them, while conditions inside each array are *AND* between them
