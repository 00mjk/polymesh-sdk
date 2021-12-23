# Interface: InvestInStoParams

## Hierarchy

* **InvestInStoParams**

## Index

### Properties

* [fundingPortfolio](investinstoparams.md#fundingportfolio)
* [maxPrice](investinstoparams.md#optional-maxprice)
* [purchaseAmount](investinstoparams.md#purchaseamount)
* [purchasePortfolio](investinstoparams.md#purchaseportfolio)

## Properties

###  fundingPortfolio

• **fundingPortfolio**: *[PortfolioLike](../globals.md#portfoliolike)*

*Defined in [src/api/procedures/investInSto.ts:31](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/procedures/investInSto.ts#L31)*

portfolio from which funds will be withdrawn to pay for the Tokens

___

### `Optional` maxPrice

• **maxPrice**? : *BigNumber*

*Defined in [src/api/procedures/investInSto.ts:39](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/procedures/investInSto.ts#L39)*

maximum average price to pay per Token (optional)

___

###  purchaseAmount

• **purchaseAmount**: *BigNumber*

*Defined in [src/api/procedures/investInSto.ts:35](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/procedures/investInSto.ts#L35)*

amount of tokens to purchase

___

###  purchasePortfolio

• **purchasePortfolio**: *[PortfolioLike](../globals.md#portfoliolike)*

*Defined in [src/api/procedures/investInSto.ts:27](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/procedures/investInSto.ts#L27)*

portfolio in which the purchased Tokens will be stored
