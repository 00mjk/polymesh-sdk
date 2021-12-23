# Class: CorporateAction

Represents an action initiated by the issuer of a Security Token which may affect the positions of
  the Tokenholders

## Hierarchy

  ↳ [CorporateActionBase](corporateactionbase.md)

  ↳ **CorporateAction**

## Index

### Properties

* [context](corporateaction.md#protected-context)
* [declarationDate](corporateaction.md#declarationdate)
* [defaultTaxWithholding](corporateaction.md#defaulttaxwithholding)
* [description](corporateaction.md#description)
* [id](corporateaction.md#id)
* [kind](corporateaction.md#protected-kind)
* [targets](corporateaction.md#targets)
* [taxWithholdings](corporateaction.md#taxwithholdings)
* [token](corporateaction.md#token)
* [uuid](corporateaction.md#uuid)

### Methods

* [checkpoint](corporateaction.md#checkpoint)
* [exists](corporateaction.md#exists)
* [isEqual](corporateaction.md#isequal)
* [linkDocuments](corporateaction.md#linkdocuments)
* [modifyCheckpoint](corporateaction.md#modifycheckpoint)
* [toJson](corporateaction.md#tojson)
* [generateUuid](corporateaction.md#static-generateuuid)
* [unserialize](corporateaction.md#static-unserialize)

## Properties

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from [Entity](entity.md).[context](entity.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/Entity.ts#L48)*

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

###  id

• **id**: *BigNumber*

*Inherited from [CorporateActionBase](corporateactionbase.md).[id](corporateactionbase.md#id)*

*Defined in [src/api/entities/CorporateActionBase/index.ts:72](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/CorporateActionBase/index.ts#L72)*

internal Corporate Action ID

___

### `Protected` kind

• **kind**: *[CorporateActionKind](../enums/corporateactionkind.md)*

*Inherited from [CorporateActionBase](corporateactionbase.md).[kind](corporateactionbase.md#protected-kind)*

*Defined in [src/api/entities/CorporateActionBase/index.ts:109](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/CorporateActionBase/index.ts#L109)*

type of corporate action being represented

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

▸ **checkpoint**(): *Promise‹[Checkpoint](checkpoint.md) | [CheckpointSchedule](checkpointschedule.md) | null›*

*Inherited from [CorporateActionBase](corporateactionbase.md).[checkpoint](corporateactionbase.md#checkpoint)*

*Defined in [src/api/entities/CorporateActionBase/index.ts:183](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/CorporateActionBase/index.ts#L183)*

Retrieve the Checkpoint associated with this Corporate Action. If the Checkpoint is scheduled and has
  not been created yet, the corresponding CheckpointSchedule is returned instead. A null value means
  the Corporate Action was created without an associated Checkpoint

**Returns:** *Promise‹[Checkpoint](checkpoint.md) | [CheckpointSchedule](checkpointschedule.md) | null›*

___

###  exists

▸ **exists**(): *Promise‹boolean›*

*Inherited from [CorporateActionBase](corporateactionbase.md).[exists](corporateactionbase.md#exists)*

*Overrides [Entity](entity.md).[exists](entity.md#abstract-exists)*

*Defined in [src/api/entities/CorporateActionBase/index.ts:172](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/CorporateActionBase/index.ts#L172)*

Determine whether this Corporate Action exists on chain

**Returns:** *Promise‹boolean›*

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

▸ **modifyCheckpoint**(`args`: ModifyCaCheckpointParams, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Overrides [CorporateActionBase](corporateactionbase.md).[modifyCheckpoint](corporateactionbase.md#abstract-modifycheckpoint)*

*Defined in [src/api/entities/CorporateAction.ts:72](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/CorporateAction.ts#L72)*

Modify the Corporate Action's Checkpoint

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `modifyCheckpoint.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | ModifyCaCheckpointParams |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  toJson

▸ **toJson**(): *HumanReadable*

*Inherited from [CorporateActionBase](corporateactionbase.md).[toJson](corporateactionbase.md#tojson)*

*Overrides [Entity](entity.md).[toJson](entity.md#abstract-tojson)*

*Defined in [src/api/entities/CorporateActionBase/index.ts:262](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/CorporateActionBase/index.ts#L262)*

Return the Corporate Action's static data

**Returns:** *HumanReadable*

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
