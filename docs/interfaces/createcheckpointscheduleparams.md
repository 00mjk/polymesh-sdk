# Interface: CreateCheckpointScheduleParams

## Hierarchy

* **CreateCheckpointScheduleParams**

## Index

### Properties

* [period](createcheckpointscheduleparams.md#period)
* [repetitions](createcheckpointscheduleparams.md#repetitions)
* [start](createcheckpointscheduleparams.md#start)

## Properties

###  period

• **period**: *[CalendarPeriod](calendarperiod.md) | null*

*Defined in [src/api/procedures/createCheckpointSchedule.ts:29](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/procedures/createCheckpointSchedule.ts#L29)*

The cadence with which to make Checkpoints.

**`note`** A null value indicates to create only one Checkpoint, regardless of repetitions specified. This can be used to schedule the creation of a Checkpoint in the future

___

###  repetitions

• **repetitions**: *number | null*

*Defined in [src/api/procedures/createCheckpointSchedule.ts:33](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/procedures/createCheckpointSchedule.ts#L33)*

The number of snapshots to take. A null value indicates snapshots should be made indefinitely

___

###  start

• **start**: *Date | null*

*Defined in [src/api/procedures/createCheckpointSchedule.ts:24](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/procedures/createCheckpointSchedule.ts#L24)*

The date from which to begin creating snapshots. A null value indicates immediately
