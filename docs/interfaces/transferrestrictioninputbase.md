# Interface: TransferRestrictionInputBase

## Hierarchy

* **TransferRestrictionInputBase**

  ↳ [CountTransferRestrictionInput](counttransferrestrictioninput.md)

  ↳ [PercentageTransferRestrictionInput](percentagetransferrestrictioninput.md)

## Index

### Properties

* [exemptedIdentities](transferrestrictioninputbase.md#optional-exemptedidentities)
* [exemptedScopeIds](transferrestrictioninputbase.md#optional-exemptedscopeids)

## Properties

### `Optional` exemptedIdentities

• **exemptedIdentities**? : *(string | [Identity](../classes/identity.md)‹›)[]*

*Defined in [src/types/index.ts:1057](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L1057)*

array of Identities (or DIDs) that are exempted from the Restriction

___

### `Optional` exemptedScopeIds

• **exemptedScopeIds**? : *string[]*

*Defined in [src/types/index.ts:1053](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L1053)*

array of Scope IDs that are exempted from the Restriction
