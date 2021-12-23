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

*Defined in [src/types/index.ts:624](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L624)*

third party Account that will pay for the fees

___

###  allowance

• **allowance**: *BigNumber | null*

*Defined in [src/types/index.ts:633](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L633)*

maximum amount that the third party Account can pay on behalf of the current Account. A null
  value signifies no limit

___

###  balance

• **balance**: *BigNumber*

*Defined in [src/types/index.ts:637](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L637)*

free balance of the third party Account

___

###  fees

• **fees**: *[Fees](fees.md)*

*Defined in [src/types/index.ts:628](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L628)*

fees that will be paid by the third party Account
