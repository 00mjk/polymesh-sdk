# Class: Settlements

Handles all Security Token Settlements related functionality
Handles all Settlement related functionality

## Hierarchy

* Namespace‹[SecurityToken](securitytoken.md)›

  ↳ **Settlements**

## Index

### Properties

* [context](settlements.md#protected-context)
* [parent](settlements.md#protected-parent)

### Methods

* [canSettle](settlements.md#cansettle)
* [canTransfer](settlements.md#cantransfer)
* [getInstruction](settlements.md#getinstruction)
* [getVenue](settlements.md#getvenue)

## Properties

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:11](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/Namespace.ts#L11)*

*Defined in [src/Settlements.ts:10](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/Settlements.ts#L10)*

___

### `Protected` parent

• **parent**: *[SecurityToken](securitytoken.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:9](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/Namespace.ts#L9)*

## Methods

###  canSettle

▸ **canSettle**(`args`: object): *Promise‹[TransferStatus](../enums/transferstatus.md)›*

*Defined in [src/api/entities/SecurityToken/Settlements.ts:38](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/SecurityToken/Settlements.ts#L38)*

Check whether it is possible to create a settlement instruction to transfer a certain amount of this asset between two Portfolios.

**`note`** this takes locked tokens into account. For example, if portfolio A has 1000 tokens and this function is called to check if 700 of them can be
  transferred to portfolio B (assuming everything else checks out) the result will be success. If an instruction is created and authorized to transfer those 700 tokens,
  they would become locked. From that point, further calls to this function would yield failed results because of the funds being locked, even though they haven't been
  transferred yet

**`deprecated`** in favor of [canTransfer](settlements.md#cantransfer)

**Parameters:**

▪ **args**: *object*

Name | Type | Description |
------ | ------ | ------ |
`amount` | BigNumber | amount of tokens to transfer  |
`from?` | [PortfolioLike](../globals.md#portfoliolike) | sender Portfolio (optional, defaults to the current Identity's Default Portfolio) |
`to` | [PortfolioLike](../globals.md#portfoliolike) | receiver Portfolio |

**Returns:** *Promise‹[TransferStatus](../enums/transferstatus.md)›*

___

###  canTransfer

▸ **canTransfer**(`args`: object): *Promise‹[TransferBreakdown](../interfaces/transferbreakdown.md)›*

*Defined in [src/api/entities/SecurityToken/Settlements.ts:108](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/SecurityToken/Settlements.ts#L108)*

Check whether it is possible to create a settlement instruction to transfer a certain amount of this asset between two Portfolios. Returns a breakdown of
  the transaction containing general errors (such as insufficient balance or invalid receiver), any broken transfer restrictions, and any compliance
  failures

**`note`** this takes locked tokens into account. For example, if portfolio A has 1000 tokens and this function is called to check if 700 of them can be
  transferred to portfolio B (assuming everything else checks out) the result will be success. If an instruction is created and authorized to transfer those 700 tokens,
  they would become locked. From that point, further calls to this function would yield failed results because of the funds being locked, even though they haven't been
  transferred yet

**Parameters:**

▪ **args**: *object*

Name | Type | Description |
------ | ------ | ------ |
`amount` | BigNumber | amount of tokens to transfer   |
`from?` | [PortfolioLike](../globals.md#portfoliolike) | sender Portfolio (optional, defaults to the current Identity's Default Portfolio) |
`to` | [PortfolioLike](../globals.md#portfoliolike) | receiver Portfolio |

**Returns:** *Promise‹[TransferBreakdown](../interfaces/transferbreakdown.md)›*

___

###  getInstruction

▸ **getInstruction**(`args`: object): *Promise‹[Instruction](instruction.md)›*

*Defined in [src/Settlements.ts:45](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/Settlements.ts#L45)*

Retrieve an Instruction by its ID

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`id` | BigNumber |

**Returns:** *Promise‹[Instruction](instruction.md)›*

___

###  getVenue

▸ **getVenue**(`args`: object): *Promise‹[Venue](venue.md)›*

*Defined in [src/Settlements.ts:24](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/Settlements.ts#L24)*

Retrieve a Venue by its ID

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`id` | BigNumber |

**Returns:** *Promise‹[Venue](venue.md)›*
