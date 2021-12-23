# Interface: ThirdPartyFees

Breakdown of the fees that will be paid by a specific third party in a Transaction Queue

## Hierarchy

* **ThirdPartyFees**

## Index

### Properties

* [account](thirdpartyfees.md#account)
* [allowance](thirdpartyfees.md#allowance)
* [balance](thirdpartyfees.md#balance)
* [fees](thirdpartyfees.md#fees)

## Properties

###  account

• **account**: *[Account](../classes/account.md)*

*Defined in [src/types/index.ts:738](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/types/index.ts#L738)*

third party Account that will pay for the fees

___

###  allowance

• **allowance**: *BigNumber | null*

*Defined in [src/types/index.ts:747](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/types/index.ts#L747)*

maximum amount that the third party Account can pay on behalf of the current Account. A null
  value signifies no limit

___

###  balance

• **balance**: *BigNumber*

*Defined in [src/types/index.ts:751](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/types/index.ts#L751)*

free balance of the third party Account

___

###  fees

• **fees**: *[Fees](fees.md)*

*Defined in [src/types/index.ts:742](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/types/index.ts#L742)*

fees that will be paid by the third party Account
