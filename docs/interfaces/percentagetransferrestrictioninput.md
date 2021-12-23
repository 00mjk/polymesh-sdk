# Interface: PercentageTransferRestrictionInput

## Hierarchy

* [TransferRestrictionInputBase](transferrestrictioninputbase.md)

  ↳ **PercentageTransferRestrictionInput**

## Index

### Properties

* [exemptedIdentities](percentagetransferrestrictioninput.md#optional-exemptedidentities)
* [exemptedScopeIds](percentagetransferrestrictioninput.md#optional-exemptedscopeids)
* [percentage](percentagetransferrestrictioninput.md#percentage)

## Properties

### `Optional` exemptedIdentities

• **exemptedIdentities**? : *(string | [Identity](../classes/identity.md)‹›)[]*

*Inherited from [TransferRestrictionInputBase](transferrestrictioninputbase.md).[exemptedIdentities](transferrestrictioninputbase.md#optional-exemptedidentities)*

*Defined in [src/types/index.ts:1057](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L1057)*

array of Identities (or DIDs) that are exempted from the Restriction

___

### `Optional` exemptedScopeIds

• **exemptedScopeIds**? : *string[]*

*Inherited from [TransferRestrictionInputBase](transferrestrictioninputbase.md).[exemptedScopeIds](transferrestrictioninputbase.md#optional-exemptedscopeids)*

*Defined in [src/types/index.ts:1053](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L1053)*

array of Scope IDs that are exempted from the Restriction

___

###  percentage

• **percentage**: *BigNumber*

*Defined in [src/types/index.ts:1079](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L1079)*

limit on the proportion of the total supply of the Security Token that can be held by a single investor at once
