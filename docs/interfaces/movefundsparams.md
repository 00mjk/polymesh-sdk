# Interface: MoveFundsParams

## Hierarchy

* **MoveFundsParams**

## Index

### Properties

* [items](movefundsparams.md#items)
* [to](movefundsparams.md#optional-to)

## Properties

###  items

• **items**: *[PortfolioMovement](portfoliomovement.md)[]*

*Defined in [src/api/procedures/moveFunds.ts:21](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/procedures/moveFunds.ts#L21)*

list of tokens (and their corresponding amounts) that will be moved

___

### `Optional` to

• **to**? : *BigNumber | [DefaultPortfolio](../classes/defaultportfolio.md) | [NumberedPortfolio](../classes/numberedportfolio.md)*

*Defined in [src/api/procedures/moveFunds.ts:17](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/procedures/moveFunds.ts#L17)*

portfolio (or portfolio ID) that will receive the funds. Optional, if no value is passed, the funds will be moved to the default Portfolio of this Portfolio's owner
