# Interface: HumanReadable

## Hierarchy

* HumanReadable

  ↳ **HumanReadable**

## Index

### Properties

* [complexity](humanreadable.md#complexity)
* [currency](humanreadable.md#currency)
* [data](humanreadable.md#data)
* [declarationDate](humanreadable.md#declarationdate)
* [defaultTaxWithholding](humanreadable.md#defaulttaxwithholding)
* [description](humanreadable.md#description)
* [did](humanreadable.md#did)
* [expiry](humanreadable.md#expiry)
* [expiryDate](humanreadable.md#expirydate)
* [id](humanreadable.md#id)
* [issuer](humanreadable.md#issuer)
* [maxAmount](humanreadable.md#maxamount)
* [origin](humanreadable.md#origin)
* [paymentDate](humanreadable.md#paymentdate)
* [perShare](humanreadable.md#pershare)
* [period](humanreadable.md#period)
* [start](humanreadable.md#start)
* [target](humanreadable.md#target)
* [targets](humanreadable.md#targets)
* [taxWithholdings](humanreadable.md#taxwithholdings)
* [ticker](humanreadable.md#ticker)
* [type](humanreadable.md#type)

## Properties

###  complexity

• **complexity**: *number*

*Defined in [src/api/entities/CheckpointSchedule/index.ts:26](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/CheckpointSchedule/index.ts#L26)*

___

###  currency

• **currency**: *string*

*Defined in [src/api/entities/DividendDistribution/index.ts:63](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/DividendDistribution/index.ts#L63)*

___

###  data

• **data**: *[HumanReadableType](../globals.md#humanreadabletype)‹[Authorization](../globals.md#authorization)›*

*Defined in [src/api/entities/AuthorizationRequest.ts:29](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/AuthorizationRequest.ts#L29)*

___

###  declarationDate

• **declarationDate**: *string*

*Overrides [HumanReadable](humanreadable.md).[declarationDate](humanreadable.md#declarationdate)*

*Defined in [src/api/entities/CorporateAction/index.ts:38](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/CorporateAction/index.ts#L38)*

___

###  defaultTaxWithholding

• **defaultTaxWithholding**: *string*

*Overrides [HumanReadable](humanreadable.md).[defaultTaxWithholding](humanreadable.md#defaulttaxwithholding)*

*Defined in [src/api/entities/CorporateAction/index.ts:41](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/CorporateAction/index.ts#L41)*

___

###  description

• **description**: *string*

*Overrides [HumanReadable](humanreadable.md).[description](humanreadable.md#description)*

*Defined in [src/api/entities/CorporateAction/index.ts:39](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/CorporateAction/index.ts#L39)*

___

###  did

• **did**: *string*

*Defined in [src/api/entities/Portfolio/index.ts:47](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Portfolio/index.ts#L47)*

___

###  expiry

• **expiry**: *string | null*

*Defined in [src/api/entities/AuthorizationRequest.ts:27](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/AuthorizationRequest.ts#L27)*

___

###  expiryDate

• **expiryDate**: *string | null*

*Defined in [src/api/entities/CheckpointSchedule/index.ts:25](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/CheckpointSchedule/index.ts#L25)*

*Defined in [src/api/entities/DividendDistribution/index.ts:66](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/DividendDistribution/index.ts#L66)*

___

###  id

• **id**: *BigNumber*

*Overrides void*

*Defined in [src/api/entities/AuthorizationRequest.ts:30](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/AuthorizationRequest.ts#L30)*

*Defined in [src/api/entities/Sto/index.ts:40](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Sto/index.ts#L40)*

*Defined in [src/api/entities/Portfolio/index.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Portfolio/index.ts#L48)*

*Defined in [src/api/entities/Checkpoint.ts:24](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Checkpoint.ts#L24)*

*Defined in [src/api/entities/CheckpointSchedule/index.ts:21](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/CheckpointSchedule/index.ts#L21)*

*Defined in [src/api/entities/CorporateAction/index.ts:36](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/CorporateAction/index.ts#L36)*

*Defined in [src/api/entities/CustomPermissionGroup.ts:22](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/CustomPermissionGroup.ts#L22)*

___

###  issuer

• **issuer**: *[HumanReadableType](../globals.md#humanreadabletype)‹[Identity](../classes/identity.md)›*

*Defined in [src/api/entities/AuthorizationRequest.ts:26](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/AuthorizationRequest.ts#L26)*

___

###  maxAmount

• **maxAmount**: *string*

*Defined in [src/api/entities/DividendDistribution/index.ts:65](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/DividendDistribution/index.ts#L65)*

___

###  origin

• **origin**: *[HumanReadableType](../globals.md#humanreadabletype)‹[DefaultPortfolio](../classes/defaultportfolio.md) | [NumberedPortfolio](../classes/numberedportfolio.md)›*

*Defined in [src/api/entities/DividendDistribution/index.ts:62](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/DividendDistribution/index.ts#L62)*

___

###  paymentDate

• **paymentDate**: *string*

*Defined in [src/api/entities/DividendDistribution/index.ts:67](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/DividendDistribution/index.ts#L67)*

___

###  perShare

• **perShare**: *string*

*Defined in [src/api/entities/DividendDistribution/index.ts:64](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/DividendDistribution/index.ts#L64)*

___

###  period

• **period**: *[CalendarPeriod](calendarperiod.md) | null*

*Defined in [src/api/entities/CheckpointSchedule/index.ts:23](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/CheckpointSchedule/index.ts#L23)*

___

###  start

• **start**: *string*

*Defined in [src/api/entities/CheckpointSchedule/index.ts:24](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/CheckpointSchedule/index.ts#L24)*

___

###  target

• **target**: *[SignerValue](signervalue.md)*

*Defined in [src/api/entities/AuthorizationRequest.ts:28](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/AuthorizationRequest.ts#L28)*

___

###  targets

• **targets**: *[HumanReadableType](../globals.md#humanreadabletype)‹[CorporateActionTargets](corporateactiontargets.md)›*

*Overrides [HumanReadable](humanreadable.md).[targets](humanreadable.md#targets)*

*Defined in [src/api/entities/CorporateAction/index.ts:40](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/CorporateAction/index.ts#L40)*

___

###  taxWithholdings

• **taxWithholdings**: *[HumanReadableType](../globals.md#humanreadabletype)‹[TaxWithholding](taxwithholding.md)[]›*

*Overrides [HumanReadable](humanreadable.md).[taxWithholdings](humanreadable.md#taxwithholdings)*

*Defined in [src/api/entities/CorporateAction/index.ts:42](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/CorporateAction/index.ts#L42)*

___

###  ticker

• **ticker**: *string*

*Overrides void*

*Defined in [src/api/entities/Sto/index.ts:41](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Sto/index.ts#L41)*

*Defined in [src/api/entities/Checkpoint.ts:25](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Checkpoint.ts#L25)*

*Defined in [src/api/entities/CheckpointSchedule/index.ts:22](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/CheckpointSchedule/index.ts#L22)*

*Defined in [src/api/entities/KnownPermissionGroup.ts:8](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/KnownPermissionGroup.ts#L8)*

*Defined in [src/api/entities/CorporateAction/index.ts:37](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/CorporateAction/index.ts#L37)*

*Defined in [src/api/entities/CustomPermissionGroup.ts:23](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/CustomPermissionGroup.ts#L23)*

___

###  type

• **type**: *[PermissionGroupType](../enums/permissiongrouptype.md)*

*Defined in [src/api/entities/KnownPermissionGroup.ts:7](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/KnownPermissionGroup.ts#L7)*
