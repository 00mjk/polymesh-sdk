# Interface: FeesBreakdown

Breakdown of transaction fees for a Transaction Queue. In most cases, the entirety of the Queue's fees
  will be paid by either the current Account or a third party. In some rare cases,
  fees can be split between them (for example, if the current Account is being subsidized, but one of the
  transactions in the queue terminates the subsidy, leaving the current Account with the responsibility of
  paying for the rest of the transactions)

## Hierarchy

* **FeesBreakdown**

## Index

### Properties

* [accountBalance](feesbreakdown.md#accountbalance)
* [accountFees](feesbreakdown.md#accountfees)
* [thirdPartyFees](feesbreakdown.md#thirdpartyfees)

## Properties

###  accountBalance

• **accountBalance**: *BigNumber*

*Defined in [src/types/index.ts:660](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L660)*

free balance of the current Account

___

###  accountFees

• **accountFees**: *[Fees](fees.md)*

*Defined in [src/types/index.ts:656](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L656)*

fees that must be paid by the current Account

___

###  thirdPartyFees

• **thirdPartyFees**: *[ThirdPartyFees](thirdpartyfees.md)[]*

*Defined in [src/types/index.ts:652](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L652)*

fees that will be paid by third parties. Each element in the array represents
  a different third party Account, their corresponding fees, allowances and balance
