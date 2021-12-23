# Class: PolymeshTransactionBatch ‹**Args, Values**›

Wrapper class for a batch of Polymesh Transactions

## Type parameters

▪ **Args**: *unknown[]*

▪ **Values**: *unknown[]*

## Hierarchy

* [PolymeshTransactionBase](polymeshtransactionbase.md)‹Args, Values›

  ↳ **PolymeshTransactionBatch**

## Index

### Properties

* [blockHash](polymeshtransactionbatch.md#optional-blockhash)
* [blockNumber](polymeshtransactionbatch.md#optional-blocknumber)
* [context](polymeshtransactionbatch.md#protected-context)
* [error](polymeshtransactionbatch.md#optional-error)
* [isCritical](polymeshtransactionbatch.md#iscritical)
* [receipt](polymeshtransactionbatch.md#optional-receipt)
* [status](polymeshtransactionbatch.md#status)
* [tag](polymeshtransactionbatch.md#tag)
* [txHash](polymeshtransactionbatch.md#optional-txhash)

### Accessors

* [args](polymeshtransactionbatch.md#args)

### Methods

* [getFees](polymeshtransactionbatch.md#getfees)
* [getPayingAccount](polymeshtransactionbatch.md#getpayingaccount)
* [onStatusChange](polymeshtransactionbatch.md#onstatuschange)
* [run](polymeshtransactionbatch.md#run)

## Properties

### `Optional` blockHash

• **blockHash**? : *undefined | string*

*Inherited from [PolymeshTransactionBase](polymeshtransactionbase.md).[blockHash](polymeshtransactionbase.md#optional-blockhash)*

*Defined in [src/base/PolymeshTransactionBase.ts:55](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/base/PolymeshTransactionBase.ts#L55)*

hash of the block where this transaction resides (status: `Succeeded`, `Failed`)

___

### `Optional` blockNumber

• **blockNumber**? : *BigNumber*

*Inherited from [PolymeshTransactionBase](polymeshtransactionbase.md).[blockNumber](polymeshtransactionbase.md#optional-blocknumber)*

*Defined in [src/base/PolymeshTransactionBase.ts:60](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/base/PolymeshTransactionBase.ts#L60)*

number of the block where this transaction resides (status: `Succeeded`, `Failed`)

___

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from [PolymeshTransactionBase](polymeshtransactionbase.md).[context](polymeshtransactionbase.md#protected-context)*

*Defined in [src/base/PolymeshTransactionBase.ts:123](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/base/PolymeshTransactionBase.ts#L123)*

___

### `Optional` error

• **error**? : *[PolymeshError](polymesherror.md)*

*Inherited from [PolymeshTransactionBase](polymeshtransactionbase.md).[error](polymeshtransactionbase.md#optional-error)*

*Defined in [src/base/PolymeshTransactionBase.ts:40](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/base/PolymeshTransactionBase.ts#L40)*

stores errors thrown while running the transaction (status: `Failed`, `Aborted`)

___

###  isCritical

• **isCritical**: *boolean*

*Inherited from [PolymeshTransactionBase](polymeshtransactionbase.md).[isCritical](polymeshtransactionbase.md#iscritical)*

*Defined in [src/base/PolymeshTransactionBase.ts:65](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/base/PolymeshTransactionBase.ts#L65)*

whether this transaction failing makes the entire transaction queue fail or not

___

### `Optional` receipt

• **receipt**? : *ISubmittableResult*

*Inherited from [PolymeshTransactionBase](polymeshtransactionbase.md).[receipt](polymeshtransactionbase.md#optional-receipt)*

*Defined in [src/base/PolymeshTransactionBase.ts:45](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/base/PolymeshTransactionBase.ts#L45)*

stores the transaction receipt (if successful)

___

###  status

• **status**: *[TransactionStatus](../enums/transactionstatus.md)* = TransactionStatus.Idle

*Inherited from [PolymeshTransactionBase](polymeshtransactionbase.md).[status](polymeshtransactionbase.md#status)*

*Defined in [src/base/PolymeshTransactionBase.ts:35](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/base/PolymeshTransactionBase.ts#L35)*

current status of the transaction

___

###  tag

• **tag**: *TxTag*

*Inherited from [PolymeshTransactionBase](polymeshtransactionbase.md).[tag](polymeshtransactionbase.md#tag)*

*Defined in [src/base/PolymeshTransactionBase.ts:70](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/base/PolymeshTransactionBase.ts#L70)*

type of transaction represented by this instance (mostly for display purposes)

___

### `Optional` txHash

• **txHash**? : *undefined | string*

*Inherited from [PolymeshTransactionBase](polymeshtransactionbase.md).[txHash](polymeshtransactionbase.md#optional-txhash)*

*Defined in [src/base/PolymeshTransactionBase.ts:50](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/base/PolymeshTransactionBase.ts#L50)*

transaction hash (status: `Running`, `Succeeded`, `Failed`)

## Accessors

###  args

• **get args**(): *Args[]*

*Defined in [src/base/PolymeshTransactionBatch.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/base/PolymeshTransactionBatch.ts#L48)*

Arguments for each transaction in the batch

**Returns:** *Args[]*

## Methods

###  getFees

▸ **getFees**(): *Promise‹[Fees](../interfaces/fees.md) | null›*

*Inherited from [PolymeshTransactionBase](polymeshtransactionbase.md).[getFees](polymeshtransactionbase.md#getfees)*

*Defined in [src/base/PolymeshTransactionBase.ts:337](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/base/PolymeshTransactionBase.ts#L337)*

Get all (protocol and gas) fees associated with this transaction. Returns null
if the transaction is not ready yet (this can happen if it depends on the execution of a
previous transaction in the queue)

**`note`** this value might change if the transaction is run at a later time. This can be due to a governance vote

**Returns:** *Promise‹[Fees](../interfaces/fees.md) | null›*

___

###  getPayingAccount

▸ **getPayingAccount**(): *Promise‹object | null›*

*Inherited from [PolymeshTransactionBase](polymeshtransactionbase.md).[getPayingAccount](polymeshtransactionbase.md#getpayingaccount)*

*Defined in [src/base/PolymeshTransactionBase.ts:300](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/base/PolymeshTransactionBase.ts#L300)*

Retrieve the Account that would pay for the transaction fees if it was run at this moment, as well as the maximum amount that can be
  charged to it. A null allowance means that there is no limit to that amount

A null return value signifies that the current Account will pay for the fees

**`note`** this value might change if, before running the transaction, the current Account enters (or leaves)
  a subsidizer relationship

**Returns:** *Promise‹object | null›*

___

###  onStatusChange

▸ **onStatusChange**(`listener`: function): *function*

*Inherited from [PolymeshTransactionBase](polymeshtransactionbase.md).[onStatusChange](polymeshtransactionbase.md#onstatuschange)*

*Defined in [src/base/PolymeshTransactionBase.ts:283](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/base/PolymeshTransactionBase.ts#L283)*

Subscribe to status changes

**Parameters:**

▪ **listener**: *function*

callback function that will be called whenever the status changes

▸ (`transaction`: this): *void*

**Parameters:**

Name | Type |
------ | ------ |
`transaction` | this |

**Returns:** *function*

unsubscribe function

▸ (): *void*

___

###  run

▸ **run**(): *Promise‹void›*

*Inherited from [PolymeshTransactionBase](polymeshtransactionbase.md).[run](polymeshtransactionbase.md#run)*

*Defined in [src/base/PolymeshTransactionBase.ts:156](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/base/PolymeshTransactionBase.ts#L156)*

Run the transaction and update its status

**Returns:** *Promise‹void›*
