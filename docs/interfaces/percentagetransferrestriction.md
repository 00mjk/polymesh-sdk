# Interface: PercentageTransferRestriction

## Hierarchy

* TransferRestrictionBase

  ↳ **PercentageTransferRestriction**

## Index

### Properties

* [exemptedScopeIds](percentagetransferrestriction.md#optional-exemptedscopeids)
* [percentage](percentagetransferrestriction.md#percentage)

## Properties

### `Optional` exemptedScopeIds

• **exemptedScopeIds**? : *string[]*

*Inherited from [TransferRestrictionBase](../classes/transferrestrictionbase.md).[exemptedScopeIds](../classes/transferrestrictionbase.md#optional-exemptedscopeids)*

*Defined in [src/types/index.ts:1216](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/types/index.ts#L1216)*

array of Scope IDs that are exempted from the Restriction

___

###  percentage

• **percentage**: *BigNumber*

*Defined in [src/types/index.ts:1238](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/types/index.ts#L1238)*

maximum percentage (0-100) of the total supply of the Security Token that can be held by a single investor at once
