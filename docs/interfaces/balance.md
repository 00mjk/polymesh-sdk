# Interface: Balance

## Hierarchy

* **Balance**

  ↳ [PortfolioBalance](portfoliobalance.md)

## Index

### Properties

* [free](balance.md#free)
* [locked](balance.md#locked)
* [total](balance.md#total)

## Properties

###  free

• **free**: *BigNumber*

*Defined in [src/types/index.ts:689](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/types/index.ts#L689)*

balance available for transferring and paying fees

___

###  locked

• **locked**: *BigNumber*

*Defined in [src/types/index.ts:693](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/types/index.ts#L693)*

unavailable balance, either bonded for staking or locked for some other purpose

___

###  total

• **total**: *BigNumber*

*Defined in [src/types/index.ts:697](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/types/index.ts#L697)*

free + locked
