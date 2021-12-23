# Class: DividendDistribution

Represents a Corporate Action via which a Security Token issuer wishes to distribute dividends
  between a subset of the Tokenholders (targets)

## Hierarchy

  ↳ [CorporateAction](corporateaction.md)

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
* [ticker](dividenddistribution.md#ticker)
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

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Entity.ts#L48)*

___

###  currency

• **currency**: *string*

*Defined in [src/api/entities/DividendDistribution/index.ts:96](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/DividendDistribution/index.ts#L96)*

ticker of the currency in which dividends are being distibuted

___

###  declarationDate

• **declarationDate**: *Date*

*Inherited from [CorporateAction](corporateaction.md).[declarationDate](corporateaction.md#declarationdate)*

*Defined in [src/api/entities/CorporateAction/index.ts:82](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/CorporateAction/index.ts#L82)*

date at which the Corporate Action was created

___

###  defaultTaxWithholding

• **defaultTaxWithholding**: *BigNumber*

*Inherited from [CorporateAction](corporateaction.md).[defaultTaxWithholding](corporateaction.md#defaulttaxwithholding)*

*Defined in [src/api/entities/CorporateAction/index.ts:98](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/CorporateAction/index.ts#L98)*

default percentage of tax withholding for this Corporate Action

___

###  description

• **description**: *string*

*Inherited from [CorporateAction](corporateaction.md).[description](corporateaction.md#description)*

*Defined in [src/api/entities/CorporateAction/index.ts:87](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/CorporateAction/index.ts#L87)*

brief text description of the Corporate Action

___

###  expiryDate

• **expiryDate**: *null | Date*

*Defined in [src/api/entities/DividendDistribution/index.ts:112](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/DividendDistribution/index.ts#L112)*

date after which dividends can no longer be paid/reclaimed. A null value means the distribution never expires

___

###  id

• **id**: *BigNumber*

*Inherited from [CorporateAction](corporateaction.md).[id](corporateaction.md#id)*

*Defined in [src/api/entities/CorporateAction/index.ts:72](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/CorporateAction/index.ts#L72)*

internal Corporate Action ID

___

### `Protected` kind

• **kind**: *[UnpredictableBenefit](../enums/corporateactionkind.md#unpredictablebenefit) | [PredictableBenefit](../enums/corporateactionkind.md#predictablebenefit)*

*Overrides [CorporateAction](corporateaction.md).[kind](corporateaction.md#protected-kind)*

*Defined in [src/api/entities/DividendDistribution/index.ts:122](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/DividendDistribution/index.ts#L122)*

type of dividend distribution being represented. The chain enforces it to be either PredictableBenefit or UnpredictableBenefit

___

###  maxAmount

• **maxAmount**: *BigNumber*

*Defined in [src/api/entities/DividendDistribution/index.ts:107](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/DividendDistribution/index.ts#L107)*

maximum amount of `currency` to be distributed. Distributions are "first come, first served", so funds can be depleted before
  every Tokenholder receives their corresponding amount

___

###  origin

• **origin**: *[DefaultPortfolio](defaultportfolio.md) | [NumberedPortfolio](numberedportfolio.md)*

*Defined in [src/api/entities/DividendDistribution/index.ts:91](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/DividendDistribution/index.ts#L91)*

Portfolio from which the dividends will be distributed

___

###  paymentDate

• **paymentDate**: *Date*

*Defined in [src/api/entities/DividendDistribution/index.ts:117](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/DividendDistribution/index.ts#L117)*

date starting from which dividends can be paid/reclaimed

___

###  perShare

• **perShare**: *BigNumber*

*Defined in [src/api/entities/DividendDistribution/index.ts:101](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/DividendDistribution/index.ts#L101)*

amount of `currency` to pay for each share the Tokenholder holds

___

###  targets

• **targets**: *[CorporateActionTargets](../interfaces/corporateactiontargets.md)*

*Inherited from [CorporateAction](corporateaction.md).[targets](corporateaction.md#targets)*

*Defined in [src/api/entities/CorporateAction/index.ts:93](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/CorporateAction/index.ts#L93)*

tokenholder identities related to this Corporate action. If the treatment is `Exclude`, the identities
  are not targeted by the Action, and any identities left out of the array will be targeted, and vice versa

___

###  taxWithholdings

• **taxWithholdings**: *[TaxWithholding](../interfaces/taxwithholding.md)[]*

*Inherited from [CorporateAction](corporateaction.md).[taxWithholdings](corporateaction.md#taxwithholdings)*

*Defined in [src/api/entities/CorporateAction/index.ts:104](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/CorporateAction/index.ts#L104)*

percentage of tax withholding per Identity. Any Identity not present
  in this array uses the default tax withholding percentage

___

###  ticker

• **ticker**: *string*

*Inherited from [CorporateAction](corporateaction.md).[ticker](corporateaction.md#ticker)*

*Defined in [src/api/entities/CorporateAction/index.ts:77](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/CorporateAction/index.ts#L77)*

ticker of the Security Token

___

###  uuid

• **uuid**: *string*

*Inherited from [Entity](entity.md).[uuid](entity.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Entity.ts#L46)*

## Methods

###  checkpoint

▸ **checkpoint**(): *Promise‹[Checkpoint](checkpoint.md) | [CheckpointSchedule](checkpointschedule.md)›*

*Overrides [CorporateAction](corporateaction.md).[checkpoint](corporateaction.md#checkpoint)*

*Defined in [src/api/entities/DividendDistribution/index.ts:236](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/DividendDistribution/index.ts#L236)*

Retrieve the Checkpoint associated with this Dividend Distribution. If the Checkpoint is scheduled and has not been created yet,
  the corresponding CheckpointSchedule is returned instead

**Returns:** *Promise‹[Checkpoint](checkpoint.md) | [CheckpointSchedule](checkpointschedule.md)›*

___

###  claim

▸ **claim**(`args`: void, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/DividendDistribution/index.ts:190](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/DividendDistribution/index.ts#L190)*

Claim the Dividends corresponding to the current Identity

**`note`** if `currency` is indivisible, the Identity's share will be rounded down to the nearest integer (after taxes are withheld)

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `claim.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | void |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  details

▸ **details**(): *Promise‹[DividendDistributionDetails](../interfaces/dividenddistributiondetails.md)›*

*Defined in [src/api/entities/DividendDistribution/index.ts:264](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/DividendDistribution/index.ts#L264)*

Retrieve details associated with this Dividend Distribution

**Returns:** *Promise‹[DividendDistributionDetails](../interfaces/dividenddistributiondetails.md)›*

___

###  exists

▸ **exists**(): *Promise‹boolean›*

*Overrides [CorporateAction](corporateaction.md).[exists](corporateaction.md#exists)*

*Defined in [src/api/entities/DividendDistribution/index.ts:255](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/DividendDistribution/index.ts#L255)*

Retrieve whether the Distribution exists

**Returns:** *Promise‹boolean›*

___

###  getParticipant

▸ **getParticipant**(`args?`: undefined | object): *Promise‹[DistributionParticipant](../interfaces/distributionparticipant.md) | null›*

*Defined in [src/api/entities/DividendDistribution/index.ts:350](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/DividendDistribution/index.ts#L350)*

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

*Defined in [src/api/entities/DividendDistribution/index.ts:290](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/DividendDistribution/index.ts#L290)*

Retrieve a comprehensive list of all Identities that are entitled to dividends in this Distribution (participants),
  the amount they are entitled to and whether they have been paid or not

**`note`** this request can take a lot of time with large amounts of Tokenholders

**`note`** if the Distribution Checkpoint hasn't been created yet, the result will be an empty array.
  This is because the Distribution participants cannot be determined without a Checkpoint

**Returns:** *Promise‹[DistributionParticipant](../interfaces/distributionparticipant.md)[]›*

___

###  getPaymentHistory

▸ **getPaymentHistory**(`opts`: object): *Promise‹[ResultSet](../interfaces/resultset.md)‹[DistributionPayment](../interfaces/distributionpayment.md)››*

*Defined in [src/api/entities/DividendDistribution/index.ts:454](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/DividendDistribution/index.ts#L454)*

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

*Defined in [src/api/entities/DividendDistribution/index.ts:423](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/DividendDistribution/index.ts#L423)*

Retrieve the amount of taxes that have been withheld up to this point in this Distribution

**`note`** uses the middleware

**Returns:** *Promise‹BigNumber›*

___

###  isEqual

▸ **isEqual**(`entity`: [Entity](entity.md)‹unknown, unknown›): *boolean*

*Inherited from [Entity](entity.md).[isEqual](entity.md#isequal)*

*Defined in [src/api/entities/Entity.ts:61](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Entity.ts#L61)*

Determine whether this Entity is the same as another one

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [Entity](entity.md)‹unknown, unknown› |

**Returns:** *boolean*

___

###  linkDocuments

▸ **linkDocuments**(`args`: [LinkCaDocsParams](../interfaces/linkcadocsparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Inherited from [CorporateAction](corporateaction.md).[linkDocuments](corporateaction.md#linkdocuments)*

*Defined in [src/api/entities/CorporateAction/index.ts:162](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/CorporateAction/index.ts#L162)*

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

▸ **modifyCheckpoint**(`args`: ModifyDistributionCheckpointParams, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Overrides [CorporateAction](corporateaction.md).[modifyCheckpoint](corporateaction.md#modifycheckpoint)*

*Defined in [src/api/entities/DividendDistribution/index.ts:200](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/DividendDistribution/index.ts#L200)*

Modify the Distribution's checkpoint

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `modifyCheckpoint.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | ModifyDistributionCheckpointParams |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  pay

▸ **pay**(`args`: [PayDividendsParams](../interfaces/paydividendsparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/DividendDistribution/index.ts:213](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/DividendDistribution/index.ts#L213)*

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

▸ **reclaimFunds**(`args`: void, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/DividendDistribution/index.ts:228](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/DividendDistribution/index.ts#L228)*

Reclaim any remaining funds back to the origin Portfolio. This can only be done after the Distribution has expired

**`note`** withheld taxes are also reclaimed in the same transaction

**`note`** required roles:
  - Origin Portfolio Custodian

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `reclaimFunds.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | void |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  toJson

▸ **toJson**(): *[HumanReadable](../interfaces/humanreadable.md)*

*Overrides [CorporateAction](corporateaction.md).[toJson](corporateaction.md#tojson)*

*Defined in [src/api/entities/DividendDistribution/index.ts:564](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/DividendDistribution/index.ts#L564)*

Return the Dividend Distribution's static data

**Returns:** *[HumanReadable](../interfaces/humanreadable.md)*

___

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›(`identifiers`: Identifiers): *string*

*Inherited from [Entity](entity.md).[generateUuid](entity.md#static-generateuuid)*

*Defined in [src/api/entities/Entity.ts:14](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Entity.ts#L14)*

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

*Defined in [src/api/entities/Entity.ts:23](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Entity.ts#L23)*

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`serialized` | string | UUID to unserialize  |

**Returns:** *Identifiers*
