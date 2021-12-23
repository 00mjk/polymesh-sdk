# Class: Venue

Represents a Venue through which settlements are handled

## Hierarchy

* [Entity](entity.md)‹UniqueIdentifiers, string›

  ↳ **Venue**

## Index

### Properties

* [context](venue.md#protected-context)
* [id](venue.md#id)
* [uuid](venue.md#uuid)

### Methods

* [addInstruction](venue.md#addinstruction)
* [addInstructions](venue.md#addinstructions)
* [details](venue.md#details)
* [exists](venue.md#exists)
* [getInstructions](venue.md#getinstructions)
* [getPendingInstructions](venue.md#getpendinginstructions)
* [isEqual](venue.md#isequal)
* [modify](venue.md#modify)
* [toJson](venue.md#tojson)
* [generateUuid](venue.md#static-generateuuid)
* [unserialize](venue.md#static-unserialize)

## Properties

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from [Entity](entity.md).[context](entity.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Entity.ts#L48)*

___

###  id

• **id**: *BigNumber*

*Defined in [src/api/entities/Venue/index.ts:58](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Venue/index.ts#L58)*

Identifier number of the venue

___

###  uuid

• **uuid**: *string*

*Inherited from [Entity](entity.md).[uuid](entity.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Entity.ts#L46)*

## Methods

###  addInstruction

▸ **addInstruction**(`args`: [AddInstructionParams](../interfaces/addinstructionparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[Instruction](instruction.md)[], [Instruction](instruction.md)››*

*Defined in [src/api/entities/Venue/index.ts:238](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Venue/index.ts#L238)*

Creates a settlement Instruction in this Venue

**`note`** required role:
  - Venue Owner

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `addInstruction.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [AddInstructionParams](../interfaces/addinstructionparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[Instruction](instruction.md)[], [Instruction](instruction.md)››*

___

###  addInstructions

▸ **addInstructions**(`args`: [AddInstructionsParams](../interfaces/addinstructionsparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[Instruction](instruction.md)[]››*

*Defined in [src/api/entities/Venue/index.ts:251](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Venue/index.ts#L251)*

Creates a batch of settlement Instructions in this Venue

**`note`** required role:
  - Venue Owner

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `addInstructions.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [AddInstructionsParams](../interfaces/addinstructionsparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[Instruction](instruction.md)[]››*

___

###  details

▸ **details**(): *Promise‹[VenueDetails](../interfaces/venuedetails.md)›*

*Defined in [src/api/entities/Venue/index.ts:111](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Venue/index.ts#L111)*

Retrieve information specific to this venue

**Returns:** *Promise‹[VenueDetails](../interfaces/venuedetails.md)›*

___

###  exists

▸ **exists**(): *Promise‹boolean›*

*Overrides [Entity](entity.md).[exists](entity.md#abstract-exists)*

*Defined in [src/api/entities/Venue/index.ts:92](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Venue/index.ts#L92)*

Determine whether this Venue exists on chain

**Returns:** *Promise‹boolean›*

___

###  getInstructions

▸ **getInstructions**(): *Promise‹Pick‹[GroupedInstructions](../interfaces/groupedinstructions.md), "pending" | "failed"››*

*Defined in [src/api/entities/Venue/index.ts:147](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Venue/index.ts#L147)*

Retrieve all pending and failed Instructions in this Venue

**Returns:** *Promise‹Pick‹[GroupedInstructions](../interfaces/groupedinstructions.md), "pending" | "failed"››*

___

###  getPendingInstructions

▸ **getPendingInstructions**(): *Promise‹[Instruction](instruction.md)[]›*

*Defined in [src/api/entities/Venue/index.ts:185](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Venue/index.ts#L185)*

Retrieve all pending Instructions in this Venue

**`deprecated`** in favor of `getInstructions`

**Returns:** *Promise‹[Instruction](instruction.md)[]›*

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

###  modify

▸ **modify**(`args`: [ModifyVenueParams](../globals.md#modifyvenueparams), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/Venue/index.ts:264](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Venue/index.ts#L264)*

Modify description and type

**`note`** required role:
  - Venue Owner

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `modify.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [ModifyVenueParams](../globals.md#modifyvenueparams) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  toJson

▸ **toJson**(): *string*

*Overrides [Entity](entity.md).[toJson](entity.md#abstract-tojson)*

*Defined in [src/api/entities/Venue/index.ts:271](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Venue/index.ts#L271)*

Return the Venue's ID

**Returns:** *string*

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
