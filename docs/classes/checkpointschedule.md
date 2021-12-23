# Class: CheckpointSchedule

Represents a Schedule in which Checkpoints are created for a specific
 Security Token. Schedules can be set up to create checkpoints

## Hierarchy

* [Entity](entity.md)‹UniqueIdentifiers, [HumanReadable](../interfaces/humanreadable.md)›

  ↳ **CheckpointSchedule**

## Index

### Properties

* [complexity](checkpointschedule.md#complexity)
* [context](checkpointschedule.md#protected-context)
* [expiryDate](checkpointschedule.md#expirydate)
* [id](checkpointschedule.md#id)
* [period](checkpointschedule.md#period)
* [start](checkpointschedule.md#start)
* [ticker](checkpointschedule.md#ticker)
* [uuid](checkpointschedule.md#uuid)

### Methods

* [details](checkpointschedule.md#details)
* [exists](checkpointschedule.md#exists)
* [getCheckpoints](checkpointschedule.md#getcheckpoints)
* [isEqual](checkpointschedule.md#isequal)
* [toJson](checkpointschedule.md#tojson)
* [generateUuid](checkpointschedule.md#static-generateuuid)
* [unserialize](checkpointschedule.md#static-unserialize)

## Properties

###  complexity

• **complexity**: *number*

*Defined in [src/api/entities/CheckpointSchedule/index.ts:83](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/CheckpointSchedule/index.ts#L83)*

abstract measure of the complexity of this Schedule. Shorter periods translate into more complexity

___

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from [Entity](entity.md).[context](entity.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Entity.ts#L48)*

___

###  expiryDate

• **expiryDate**: *Date | null*

*Defined in [src/api/entities/CheckpointSchedule/index.ts:78](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/CheckpointSchedule/index.ts#L78)*

date at which the last Checkpoint will be created with this Schedule.
  A null value means that this Schedule never expires

___

###  id

• **id**: *BigNumber*

*Defined in [src/api/entities/CheckpointSchedule/index.ts:56](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/CheckpointSchedule/index.ts#L56)*

schedule identifier number

___

###  period

• **period**: *[CalendarPeriod](../interfaces/calendarperiod.md) | null*

*Defined in [src/api/entities/CheckpointSchedule/index.ts:67](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/CheckpointSchedule/index.ts#L67)*

how often this Schedule creates a Checkpoint. A null value means this Schedule
  creates a single Checkpoint and then expires

___

###  start

• **start**: *Date*

*Defined in [src/api/entities/CheckpointSchedule/index.ts:72](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/CheckpointSchedule/index.ts#L72)*

first Checkpoint creation date

___

###  ticker

• **ticker**: *string*

*Defined in [src/api/entities/CheckpointSchedule/index.ts:61](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/CheckpointSchedule/index.ts#L61)*

ticker of the Security Token for which Checkpoints are scheduled

___

###  uuid

• **uuid**: *string*

*Inherited from [Entity](entity.md).[uuid](entity.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Entity.ts#L46)*

## Methods

###  details

▸ **details**(): *Promise‹[ScheduleDetails](../interfaces/scheduledetails.md)›*

*Defined in [src/api/entities/CheckpointSchedule/index.ts:119](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/CheckpointSchedule/index.ts#L119)*

Retrieve information specific to this Schedule

**Returns:** *Promise‹[ScheduleDetails](../interfaces/scheduledetails.md)›*

___

###  exists

▸ **exists**(): *Promise‹boolean›*

*Overrides [Entity](entity.md).[exists](entity.md#abstract-exists)*

*Defined in [src/api/entities/CheckpointSchedule/index.ts:185](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/CheckpointSchedule/index.ts#L185)*

Determine whether this Checkpoint Schedule exists on chain

**Returns:** *Promise‹boolean›*

___

###  getCheckpoints

▸ **getCheckpoints**(): *Promise‹[Checkpoint](checkpoint.md)[]›*

*Defined in [src/api/entities/CheckpointSchedule/index.ts:153](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/CheckpointSchedule/index.ts#L153)*

Retrieve all Checkpoints created by this Schedule

**Returns:** *Promise‹[Checkpoint](checkpoint.md)[]›*

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

###  toJson

▸ **toJson**(): *[HumanReadable](../interfaces/humanreadable.md)*

*Overrides [Entity](entity.md).[toJson](entity.md#abstract-tojson)*

*Defined in [src/api/entities/CheckpointSchedule/index.ts:207](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/CheckpointSchedule/index.ts#L207)*

Return the Schedule's ID and Token ticker

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
