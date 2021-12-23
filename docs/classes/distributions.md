# Class: Distributions

Handles all Security Token Distributions related functionality

## Hierarchy

* Namespace‹[SecurityToken](securitytoken.md)›

  ↳ **Distributions**

## Index

### Properties

* [context](distributions.md#protected-context)
* [parent](distributions.md#protected-parent)

### Methods

* [configureDividendDistribution](distributions.md#configuredividenddistribution)
* [get](distributions.md#get)
* [getOne](distributions.md#getone)

## Properties

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:11](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Namespace.ts#L11)*

___

### `Protected` parent

• **parent**: *[SecurityToken](securitytoken.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:9](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Namespace.ts#L9)*

## Methods

###  configureDividendDistribution

▸ **configureDividendDistribution**(`args`: [ConfigureDividendDistributionParams](../globals.md#configuredividenddistributionparams), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[DividendDistribution](dividenddistribution.md)››*

*Defined in [src/api/entities/SecurityToken/CorporateActions/Distributions.ts:39](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/SecurityToken/CorporateActions/Distributions.ts#L39)*

Create a Dividend Distribution for a subset of the Tokenholders at a certain (existing or future) Checkpoint

**`note`** required role:
  - Origin Portfolio Custodian

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `configureDividendDistribution.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [ConfigureDividendDistributionParams](../globals.md#configuredividenddistributionparams) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[DividendDistribution](dividenddistribution.md)››*

___

###  get

▸ **get**(): *Promise‹[DistributionWithDetails](../interfaces/distributionwithdetails.md)[]›*

*Defined in [src/api/entities/SecurityToken/CorporateActions/Distributions.ts:114](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/SecurityToken/CorporateActions/Distributions.ts#L114)*

Retrieve all Dividend Distributions associated to this Security Token, along with their details

**Returns:** *Promise‹[DistributionWithDetails](../interfaces/distributionwithdetails.md)[]›*

___

###  getOne

▸ **getOne**(`args`: object): *Promise‹[DistributionWithDetails](../interfaces/distributionwithdetails.md)›*

*Defined in [src/api/entities/SecurityToken/CorporateActions/Distributions.ts:62](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/SecurityToken/CorporateActions/Distributions.ts#L62)*

Retrieve a single Dividend Distribution associated to this Security Token by its ID

**`throws`** if there is no Distribution with the passed ID

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`id` | BigNumber |

**Returns:** *Promise‹[DistributionWithDetails](../interfaces/distributionwithdetails.md)›*
