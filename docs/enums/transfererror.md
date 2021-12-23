# Enumeration: TransferError

Akin to TransferStatus, these are a bit more granular and specific. Every TransferError translates to
  a [TransferStatus](transferstatus.md), but two or more TransferErrors can represent the same TransferStatus, and
  not all Transfer Statuses are represented by a TransferError

## Index

### Enumeration members

* [InsufficientBalance](transfererror.md#insufficientbalance)
* [InsufficientPortfolioBalance](transfererror.md#insufficientportfoliobalance)
* [InvalidGranularity](transfererror.md#invalidgranularity)
* [InvalidReceiverCdd](transfererror.md#invalidreceivercdd)
* [InvalidReceiverPortfolio](transfererror.md#invalidreceiverportfolio)
* [InvalidSenderCdd](transfererror.md#invalidsendercdd)
* [InvalidSenderPortfolio](transfererror.md#invalidsenderportfolio)
* [ScopeClaimMissing](transfererror.md#scopeclaimmissing)
* [SelfTransfer](transfererror.md#selftransfer)
* [TransfersFrozen](transfererror.md#transfersfrozen)

## Enumeration members

###  InsufficientBalance

• **InsufficientBalance**: = "InsufficientBalance"

*Defined in [src/types/index.ts:502](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L502)*

translates to TransferStatus.InsufficientBalance

occurs if the sender Identity does not have enough balance to cover the amount

___

###  InsufficientPortfolioBalance

• **InsufficientPortfolioBalance**: = "InsufficientPortfolioBalance"

*Defined in [src/types/index.ts:526](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L526)*

translates to TransferStatus.PortfolioFailure

occurs if the sender Portfolio does not have enough balance to cover the amount

___

###  InvalidGranularity

• **InvalidGranularity**: = "InvalidGranularity"

*Defined in [src/types/index.ts:471](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L471)*

translates to TransferStatus.InvalidGranularity

occurs if attempting to transfer decimal amounts of a non-divisible token

___

###  InvalidReceiverCdd

• **InvalidReceiverCdd**: = "InvalidReceiverCdd"

*Defined in [src/types/index.ts:483](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L483)*

translates to TransferStatus.InvalidReceiverIdentity

occurs if the receiver Identity doesn't have a valid CDD claim

___

###  InvalidReceiverPortfolio

• **InvalidReceiverPortfolio**: = "InvalidReceiverPortfolio"

*Defined in [src/types/index.ts:520](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L520)*

translates to TransferStatus.PortfolioFailure

occurs if the receiver Portfolio doesn't exist

___

###  InvalidSenderCdd

• **InvalidSenderCdd**: = "InvalidSenderCdd"

*Defined in [src/types/index.ts:489](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L489)*

translates to TransferStatus.InvalidSenderIdentity

occurs if the receiver Identity doesn't have a valid CDD claim

___

###  InvalidSenderPortfolio

• **InvalidSenderPortfolio**: = "InvalidSenderPortfolio"

*Defined in [src/types/index.ts:514](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L514)*

translates to TransferStatus.PortfolioFailure

occurs if the sender Portfolio doesn't exist

___

###  ScopeClaimMissing

• **ScopeClaimMissing**: = "ScopeClaimMissing"

*Defined in [src/types/index.ts:496](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L496)*

translates to TransferStatus.ScopeClaimMissing

occurs if one of the participants doesn't have a valid Investor Uniqueness Claim for
  the Security Token

___

###  SelfTransfer

• **SelfTransfer**: = "SelfTransfer"

*Defined in [src/types/index.ts:477](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L477)*

translates to TransferStatus.InvalidReceiverIdentity

occurs if the origin and destination Identities are the same

___

###  TransfersFrozen

• **TransfersFrozen**: = "TransfersFrozen"

*Defined in [src/types/index.ts:508](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L508)*

translates to TransferStatus.TransfersHalted

occurs if the Security Token's transfers are frozen
