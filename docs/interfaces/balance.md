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

*Defined in [src/types/index.ts:575](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L575)*

balance available for transferring and paying fees

___

###  locked

• **locked**: *BigNumber*

*Defined in [src/types/index.ts:579](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L579)*

unavailable balance, either bonded for staking or locked for some other purpose

___

###  total

• **total**: *BigNumber*

*Defined in [src/types/index.ts:583](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L583)*

free + locked
