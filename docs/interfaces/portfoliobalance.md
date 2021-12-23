# Interface: PortfolioBalance

## Hierarchy

* [Balance](balance.md)

  ↳ **PortfolioBalance**

## Index

### Properties

* [free](portfoliobalance.md#free)
* [locked](portfoliobalance.md#locked)
* [token](portfoliobalance.md#token)
* [total](portfoliobalance.md#total)

## Properties

###  free

• **free**: *BigNumber*

*Inherited from [PortfolioBalance](portfoliobalance.md).[free](portfoliobalance.md#free)*

*Defined in [src/types/index.ts:689](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/types/index.ts#L689)*

balance available for transferring and paying fees

___

###  locked

• **locked**: *BigNumber*

*Inherited from [PortfolioBalance](portfoliobalance.md).[locked](portfoliobalance.md#locked)*

*Defined in [src/types/index.ts:693](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/types/index.ts#L693)*

unavailable balance, either bonded for staking or locked for some other purpose

___

###  token

• **token**: *[SecurityToken](../classes/securitytoken.md)*

*Defined in [src/api/entities/Portfolio/types.ts:11](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/Portfolio/types.ts#L11)*

___

###  total

• **total**: *BigNumber*

*Inherited from [PortfolioBalance](portfoliobalance.md).[total](portfoliobalance.md#total)*

*Defined in [src/types/index.ts:697](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/types/index.ts#L697)*

free + locked
