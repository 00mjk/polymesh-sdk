# Class: DividendDistribution

Represents a Corporate Action via which a Security Token issuer wishes to distribute dividends
  between a subset of the Tokenholders (targets)

## Hierarchy

  ↳ [CorporateActionBase](corporateactionbase.md)

  ↳ **DividendDistribution**

## Index

### Properties

* [context](dividenddistribution.md#protected-context)
* [currency](dividenddistribution.md#currency)
* [declarationDate](dividenddistribution.md#declarationdate)
* [defaultTaxWithholding](dividenddistribution.md#defaulttaxwithholding)
* [description](dividenddistribution.md#description)
* [expiryDate](dividenddistribution.md#expirydate)
* [id](dividenddistribution.md#id)
* [kind](dividenddistribution.md#protected-kind)
* [maxAmount](dividenddistribution.md#maxamount)
* [origin](dividenddistribution.md#origin)
* [paymentDate](dividenddistribution.md#paymentdate)
* [perShare](dividenddistribution.md#pershare)
* [targets](dividenddistribution.md#targets)
* [taxWithholdings](dividenddistribution.md#taxwithholdings)
* [token](dividenddistribution.md#token)
* [uuid](dividenddistribution.md#uuid)

### Methods

* [checkpoint](dividenddistribution.md#checkpoint)
* [claim](dividenddistribution.md#claim)
* [details](dividenddistribution.md#details)
* [exists](dividenddistribution.md#exists)
* [getParticipant](dividenddistribution.md#getparticipant)
* [getParticipants](dividenddistribution.md#getparticipants)
* [getPaymentHistory](dividenddistribution.md#getpaymenthistory)
* [getWithheldTax](dividenddistribution.md#getwithheldtax)
* [isEqual](dividenddistribution.md#isequal)
* [linkDocuments](dividenddistribution.md#linkdocuments)
* [modifyCheckpoint](dividenddistribution.md#modifycheckpoint)
* [pay](dividenddistribution.md#pay)
* [reclaimFunds](dividenddistribution.md#reclaimfunds)
* [toJson](dividenddistribution.md#tojson)
* [generateUuid](dividenddistribution.md#static-generateuuid)
* [unserialize](dividenddistribution.md#static-unserialize)

## Properties

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from [Entity](entity.md).[context](entity.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/Entity.ts#L48)*

___

###  currency

• **currency**: *string*

*Defined in [src/api/entities/DividendDistribution/index.ts:100](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/DividendDistribution/index.ts#L100)*

ticker of the currency in which dividends are being distributed

___

###  declarationDate

• **declarationDate**: *Date*

*Inherited from [CorporateActionBase](corporateactionbase.md).[declarationDate](corporateactionbase.md#declarationdate)*

*Defined in [src/api/entities/CorporateActionBase/index.ts:82](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/CorporateActionBase/index.ts#L82)*

date at which the Corporate Action was created

___

###  defaultTaxWithholding

• **defaultTaxWithholding**: *BigNumber*

*Inherited from [CorporateActionBase](corporateactionbase.md).[defaultTaxWithholding](corporateactionbase.md#defaulttaxwithholding)*

*Defined in [src/api/entities/CorporateActionBase/index.ts:98](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/CorporateActionBase/index.ts#L98)*

default percentage (0-100) of tax withholding for this Corporate Action

___

###  description

• **description**: *string*

*Inherited from [CorporateActionBase](corporateactionbase.md).[description](corporateactionbase.md#description)*

*Defined in [src/api/entities/CorporateActionBase/index.ts:87](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/CorporateActionBase/index.ts#L87)*

brief text description of the Corporate Action

___

###  expiryDate

• **expiryDate**: *null | Date*

*Defined in [src/api/entities/DividendDistribution/index.ts:116](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/DividendDistribution/index.ts#L116)*

date after which dividends can no longer be paid/reclaimed. A null value means the distribution never expires

___

###  id

• **id**: *BigNumber*

*Inherited from [CorporateActionBase](corporateactionbase.md).[id](corporateactionbase.md#id)*

*Defined in [src/api/entities/CorporateActionBase/index.ts:72](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/CorporateActionBase/index.ts#L72)*

internal Corporate Action ID

___

### `Protected` kind

• **kind**: *[UnpredictableBenefit](../enums/corporateactionkind.md#unpredictablebenefit) | [PredictableBenefit](../enums/corporateactionkind.md#predictablebenefit)*

*Overrides [CorporateActionBase](corporateactionbase.md).[kind](corporateactionbase.md#protected-kind)*

*Defined in [src/api/entities/DividendDistribution/index.ts:126](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/DividendDistribution/index.ts#L126)*

type of dividend distribution being represented. The chain enforces it to be either PredictableBenefit or UnpredictableBenefit

___

###  maxAmount

• **maxAmount**: *BigNumber*

*Defined in [src/api/entities/DividendDistribution/index.ts:111](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/DividendDistribution/index.ts#L111)*

maximum amount of `currency` to be distributed. Distributions are "first come, first served", so funds can be depleted before
  every Tokenholder receives their corresponding amount

___

###  origin

• **origin**: *[DefaultPortfolio](defaultportfolio.md) | [NumberedPortfolio](numberedportfolio.md)*

*Defined in [src/api/entities/DividendDistribution/index.ts:95](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/DividendDistribution/index.ts#L95)*

Portfolio from which the dividends will be distributed

___

###  paymentDate

• **paymentDate**: *Date*

*Defined in [src/api/entities/DividendDistribution/index.ts:121](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/DividendDistribution/index.ts#L121)*

date starting from which dividends can be paid/reclaimed

___

###  perShare

• **perShare**: *BigNumber*

*Defined in [src/api/entities/DividendDistribution/index.ts:105](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/DividendDistribution/index.ts#L105)*

amount of `currency` to pay for each share the Tokenholder holds

___

###  targets

• **targets**: *[CorporateActionTargets](../interfaces/corporateactiontargets.md)*

*Inherited from [CorporateActionBase](corporateactionbase.md).[targets](corporateactionbase.md#targets)*

*Defined in [src/api/entities/CorporateActionBase/index.ts:93](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/CorporateActionBase/index.ts#L93)*

tokenholder identities related to this Corporate action. If the treatment is `Exclude`, the Identities
  are not targeted by the Action, and any identities left out of the array will be targeted, and vice versa

___

###  taxWithholdings

• **taxWithholdings**: *[TaxWithholding](../interfaces/taxwithholding.md)[]*

*Inherited from [CorporateActionBase](corporateactionbase.md).[taxWithholdings](corporateactionbase.md#taxwithholdings)*

*Defined in [src/api/entities/CorporateActionBase/index.ts:104](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/CorporateActionBase/index.ts#L104)*

percentage (0-100) of tax withholding per Identity. Any Identity not present
  in this array uses the default tax withholding percentage

___

###  token

• **token**: *[SecurityToken](securitytoken.md)*

*Inherited from [CorporateActionBase](corporateactionbase.md).[token](corporateactionbase.md#token)*

*Defined in [src/api/entities/CorporateActionBase/index.ts:77](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/CorporateActionBase/index.ts#L77)*

Security Token affected by this Corporate Action

___

###  uuid

• **uuid**: *string*

*Inherited from [Entity](entity.md).[uuid](entity.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/Entity.ts#L46)*

## Methods

###  checkpoint

▸ **checkpoint**(): *Promise‹[Checkpoint](checkpoint.md) | [CheckpointSchedule](checkpointschedule.md)›*

*Overrides [CorporateActionBase](corporateactionbase.md).[checkpoint](corporateactionbase.md#checkpoint)*

*Defined in [src/api/entities/DividendDistribution/index.ts:246](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/DividendDistribution/index.ts#L246)*

Retrieve the Checkpoint associated with this Dividend Distribution. If the Checkpoint is scheduled and has not been created yet,
  the corresponding CheckpointSchedule is returned instead

**Returns:** *Promise‹[Checkpoint](checkpoint.md) | [CheckpointSchedule](checkpointschedule.md)›*

___

###  claim

▸ **claim**(`opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/DividendDistribution/index.ts:195](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/DividendDistribution/index.ts#L195)*

Claim the Dividends corresponding to the current Identity

**`note`** if `currency` is indivisible, the Identity's share will be rounded down to the nearest integer (after taxes are withheld)

**`note`** this method is of type [NoArgsProcedureMethod](../interfaces/noargsproceduremethod.md), which means you can call `claim.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  details

▸ **details**(): *Promise‹[DividendDistributionDetails](../interfaces/dividenddistributiondetails.md)›*

*Defined in [src/api/entities/DividendDistribution/index.ts:274](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/DividendDistribution/index.ts#L274)*

Retrieve details associated with this Dividend Distribution

**Returns:** *Promise‹[DividendDistributionDetails](../interfaces/dividenddistributiondetails.md)›*

___

###  exists

▸ **exists**(): *Promise‹boolean›*

*Overrides [CorporateActionBase](corporateactionbase.md).[exists](corporateactionbase.md#exists)*

*Defined in [src/api/entities/DividendDistribution/index.ts:265](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/DividendDistribution/index.ts#L265)*

Retrieve whether the Distribution exists

**Returns:** *Promise‹boolean›*

___

###  getParticipant

▸ **getParticipant**(`args?`: undefined | object): *Promise‹[DistributionParticipant](../interfaces/distributionparticipant.md) | null›*

*Defined in [src/api/entities/DividendDistribution/index.ts:360](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/DividendDistribution/index.ts#L360)*

Retrieve an Identity that is entitled to dividends in this Distribution (participant),
  the amount it is entitled to and whether it has been paid or not

**`note`** if the Distribution Checkpoint hasn't been created yet, the result will be null.
  This is because the Distribution participant's corresponding payment cannot be determined without a Checkpoint

**Parameters:**

Name | Type |
------ | ------ |
`args?` | undefined &#124; object |

**Returns:** *Promise‹[DistributionParticipant](../interfaces/distributionparticipant.md) | null›*

___

###  getParticipants

▸ **getParticipants**(): *Promise‹[DistributionParticipant](../interfaces/distributionparticipant.md)[]›*

*Defined in [src/api/entities/DividendDistribution/index.ts:300](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/DividendDistribution/index.ts#L300)*

Retrieve a comprehensive list of all Identities that are entitled to dividends in this Distribution (participants),
  the amount they are entitled to and whether they have been paid or not

**`note`** this request can take a lot of time with large amounts of Tokenholders

**`note`** if the Distribution Checkpoint hasn't been created yet, the result will be an empty array.
  This is because the Distribution participants cannot be determined without a Checkpoint

**Returns:** *Promise‹[DistributionParticipant](../interfaces/distributionparticipant.md)[]›*

___

###  getPaymentHistory

▸ **getPaymentHistory**(`opts`: object): *Promise‹[ResultSet](../interfaces/resultset.md)‹[DistributionPayment](../interfaces/distributionpayment.md)››*

*Defined in [src/api/entities/DividendDistribution/index.ts:472](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/DividendDistribution/index.ts#L472)*

Retrieve the payment history for this Distribution

**`note`** uses the middleware

**`note`** supports pagination

**Parameters:**

▪`Default value`  **opts**: *object*= {}

Name | Type |
------ | ------ |
`size?` | undefined &#124; number |
`start?` | undefined &#124; number |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[DistributionPayment](../interfaces/distributionpayment.md)››*

___

###  getWithheldTax

▸ **getWithheldTax**(): *Promise‹BigNumber›*

*Defined in [src/api/entities/DividendDistribution/index.ts:437](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/DividendDistribution/index.ts#L437)*

Retrieve the amount of taxes that have been withheld up to this point in this Distribution

**`note`** uses the middleware

**Returns:** *Promise‹BigNumber›*

___

###  isEqual

▸ **isEqual**(`entity`: [Entity](entity.md)‹unknown, unknown›): *boolean*

*Inherited from [Entity](entity.md).[isEqual](entity.md#isequal)*

*Defined in [src/api/entities/Entity.ts:61](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/Entity.ts#L61)*

Determine whether this Entity is the same as another one

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [Entity](entity.md)‹unknown, unknown› |

**Returns:** *boolean*

___

###  linkDocuments

▸ **linkDocuments**(`args`: [LinkCaDocsParams](../interfaces/linkcadocsparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Inherited from [CorporateActionBase](corporateactionbase.md).[linkDocuments](corporateactionbase.md#linkdocuments)*

*Defined in [src/api/entities/CorporateActionBase/index.ts:152](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/CorporateActionBase/index.ts#L152)*

Link a list of documents to this corporate action

**`note`** any previous links are removed in favor of the new list

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `linkDocuments.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [LinkCaDocsParams](../interfaces/linkcadocsparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  modifyCheckpoint

▸ **modifyCheckpoint**(`args`: [Modify](../globals.md#modify)‹ModifyCaCheckpointParams, object›, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Overrides [CorporateActionBase](corporateactionbase.md).[modifyCheckpoint](corporateactionbase.md#abstract-modifycheckpoint)*

*Defined in [src/api/entities/DividendDistribution/index.ts:205](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/DividendDistribution/index.ts#L205)*

Modify the Distribution's Checkpoint

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `modifyCheckpoint.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [Modify](../globals.md#modify)‹ModifyCaCheckpointParams, object› |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  pay

▸ **pay**(`args`: [PayDividendsParams](../interfaces/paydividendsparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/DividendDistribution/index.ts:223](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/DividendDistribution/index.ts#L223)*

Transfer the corresponding share of the dividends to a list of Identities

**`note`** due to performance issues, we do not validate that the distribution has enough remaining funds to pay the corresponding amount to the supplied Identities

**`note`** if `currency` is indivisible, the Identity's share will be rounded down to the nearest integer (after taxes are withheld)

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `pay.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [PayDividendsParams](../interfaces/paydividendsparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  reclaimFunds

▸ **reclaimFunds**(`opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/DividendDistribution/index.ts:238](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/DividendDistribution/index.ts#L238)*

Reclaim any remaining funds back to the origin Portfolio. This can only be done after the Distribution has expired

**`note`** withheld taxes are also reclaimed in the same transaction

**`note`** required roles:
  - Origin Portfolio Custodian

**`note`** this method is of type [NoArgsProcedureMethod](../interfaces/noargsproceduremethod.md), which means you can call `reclaimFunds.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  toJson

▸ **toJson**(): *[HumanReadable](../interfaces/humanreadable.md)*

*Overrides [CorporateActionBase](corporateactionbase.md).[toJson](corporateactionbase.md#tojson)*

*Defined in [src/api/entities/DividendDistribution/index.ts:600](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/DividendDistribution/index.ts#L600)*

Return the Dividend Distribution's static data

**Returns:** *[HumanReadable](../interfaces/humanreadable.md)*

___

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›(`identifiers`: Identifiers): *string*

*Inherited from [Entity](entity.md).[generateUuid](entity.md#static-generateuuid)*

*Defined in [src/api/entities/Entity.ts:14](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/Entity.ts#L14)*

Generate the Entity's UUID from its identifying properties

**Type parameters:**

▪ **Identifiers**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`identifiers` | Identifiers |   |

**Returns:** *string*

___

### `Static` unserialize

▸ **unserialize**‹**Identifiers**›(`serialized`: string): *Identifiers*

*Inherited from [Entity](entity.md).[unserialize](entity.md#static-unserialize)*

*Defined in [src/api/entities/Entity.ts:23](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/Entity.ts#L23)*

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`serialized` | string | UUID to unserialize  |

**Returns:** *Identifiers*
