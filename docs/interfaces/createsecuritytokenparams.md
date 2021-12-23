# Interface: CreateSecurityTokenParams

## Hierarchy

* **CreateSecurityTokenParams**

## Index

### Properties

* [documents](createsecuritytokenparams.md#optional-documents)
* [fundingRound](createsecuritytokenparams.md#optional-fundinground)
* [initialSupply](createsecuritytokenparams.md#optional-initialsupply)
* [isDivisible](createsecuritytokenparams.md#isdivisible)
* [name](createsecuritytokenparams.md#name)
* [requireInvestorUniqueness](createsecuritytokenparams.md#requireinvestoruniqueness)
* [tokenIdentifiers](createsecuritytokenparams.md#optional-tokenidentifiers)
* [tokenType](createsecuritytokenparams.md#tokentype)

## Properties

### `Optional` documents

• **documents**? : *[TokenDocument](tokendocument.md)[]*

*Defined in [src/api/procedures/createSecurityToken.ts:66](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/procedures/createSecurityToken.ts#L66)*

___

### `Optional` fundingRound

• **fundingRound**? : *undefined | string*

*Defined in [src/api/procedures/createSecurityToken.ts:65](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/procedures/createSecurityToken.ts#L65)*

(optional) funding round in which the token currently is (Series A, Series B, etc)

___

### `Optional` initialSupply

• **initialSupply**? : *BigNumber*

*Defined in [src/api/procedures/createSecurityToken.ts:47](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/procedures/createSecurityToken.ts#L47)*

amount of tokens that will be minted on creation (optional, default doesn't mint)

___

###  isDivisible

• **isDivisible**: *boolean*

*Defined in [src/api/procedures/createSecurityToken.ts:51](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/procedures/createSecurityToken.ts#L51)*

whether a single token can be divided into decimal parts

___

###  name

• **name**: *string*

*Defined in [src/api/procedures/createSecurityToken.ts:43](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/procedures/createSecurityToken.ts#L43)*

___

###  requireInvestorUniqueness

• **requireInvestorUniqueness**: *boolean*

*Defined in [src/api/procedures/createSecurityToken.ts:71](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/procedures/createSecurityToken.ts#L71)*

whether this asset requires investors to have a Investor Uniqueness Claim in order
  to hold it. More information about Investor Uniqueness and PUIS [here](https://developers.polymesh.live/introduction/identity#polymesh-unique-identity-system-puis)

___

### `Optional` tokenIdentifiers

• **tokenIdentifiers**? : *[TokenIdentifier](tokenidentifier.md)[]*

*Defined in [src/api/procedures/createSecurityToken.ts:61](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/procedures/createSecurityToken.ts#L61)*

array of domestic or international alphanumeric security identifiers for the token (ISIN, CUSIP, etc)

___

###  tokenType

• **tokenType**: *string*

*Defined in [src/api/procedures/createSecurityToken.ts:57](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/procedures/createSecurityToken.ts#L57)*

type of security that the token represents (i.e. Equity, Debt, Commodity, etc). Common values are included in the
  [KnownTokenType](../enums/knowntokentype.md) enum, but custom values can be used as well. Custom values must be registered on-chain the first time
  they're used, requiring an additional transaction. They aren't tied to a specific Security Token
