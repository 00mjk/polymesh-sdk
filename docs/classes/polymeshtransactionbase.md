# Class: PolymeshTransactionBase ‹**Args, Values**›

Wrapper class for a Polymesh Transaction

## Type parameters

▪ **Args**: *unknown[]*

▪ **Values**: *unknown[]*

## Hierarchy

* **PolymeshTransactionBase**

  ↳ [PolymeshTransaction](polymeshtransaction.md)

  ↳ [PolymeshTransactionBatch](polymeshtransactionbatch.md)

## Index

### Properties

* [blockHash](polymeshtransactionbase.md#optional-blockhash)
* [context](polymeshtransactionbase.md#protected-context)
* [error](polymeshtransactionbase.md#optional-error)
* [isCritical](polymeshtransactionbase.md#iscritical)
* [receipt](polymeshtransactionbase.md#optional-receipt)
* [status](polymeshtransactionbase.md#status)
* [tag](polymeshtransactionbase.md#tag)
* [txHash](polymeshtransactionbase.md#optional-txhash)

### Methods

* [getFees](polymeshtransactionbase.md#getfees)
* [getPayingAccount](polymeshtransactionbase.md#getpayingaccount)
* [onStatusChange](polymeshtransactionbase.md#onstatuschange)
* [run](polymeshtransactionbase.md#run)

## Properties

### `Optional` blockHash

• **blockHash**? : *undefined | string*

*Defined in [src/base/PolymeshTransactionBase.ts:50](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/base/PolymeshTransactionBase.ts#L50)*

hash of the block where this transaction resides (status: `Succeeded`, `Failed`)

___

### `Protected` context

• **context**: *[Context](context.md)*

*Defined in [src/base/PolymeshTransactionBase.ts:113](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/base/PolymeshTransactionBase.ts#L113)*

___

### `Optional` error

• **error**? : *[PolymeshError](polymesherror.md)*

*Defined in [src/base/PolymeshTransactionBase.ts:35](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/base/PolymeshTransactionBase.ts#L35)*

stores errors thrown while running the transaction (status: `Failed`, `Aborted`)

___

###  isCritical

• **isCritical**: *boolean*

*Defined in [src/base/PolymeshTransactionBase.ts:55](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/base/PolymeshTransactionBase.ts#L55)*

whether this transaction failing makes the entire transaction queue fail or not

___

### `Optional` receipt

• **receipt**? : *ISubmittableResult*

*Defined in [src/base/PolymeshTransactionBase.ts:40](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/base/PolymeshTransactionBase.ts#L40)*

stores the transaction receipt (if successful)

___

###  status

• **status**: *[TransactionStatus](../enums/transactionstatus.md)* = TransactionStatus.Idle

*Defined in [src/base/PolymeshTransactionBase.ts:30](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/base/PolymeshTransactionBase.ts#L30)*

current status of the transaction

___

###  tag

• **tag**: *TxTag*

*Defined in [src/base/PolymeshTransactionBase.ts:60](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/base/PolymeshTransactionBase.ts#L60)*

type of transaction represented by this instance (mostly for display purposes)

___

### `Optional` txHash

• **txHash**? : *undefined | string*

*Defined in [src/base/PolymeshTransactionBase.ts:45](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/base/PolymeshTransactionBase.ts#L45)*

transaction hash (status: `Running`, `Succeeded`, `Failed`)

## Methods

###  getFees

▸ **getFees**(): *Promise‹[Fees](../interfaces/fees.md) | null›*

*Defined in [src/base/PolymeshTransactionBase.ts:306](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/base/PolymeshTransactionBase.ts#L306)*

Get all (protocol and gas) fees associated with this transaction. Returns null
if the transaction is not ready yet (this can happen if it depends on the execution of a
previous transaction in the queue)

**`note`** this value might change if the transaction is run at a later time. This can be due to a governance vote

**Returns:** *Promise‹[Fees](../interfaces/fees.md) | null›*

___

###  getPayingAccount

▸ **getPayingAccount**(): *Promise‹object | null›*

*Defined in [src/base/PolymeshTransactionBase.ts:269](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/base/PolymeshTransactionBase.ts#L269)*

Retrieve the Account that would pay for the transaction fees if it was run at this moment, as well as the maximum amount that can be
  charged to it. A null allowance means that there is no limit to that amount

A null return value signifies that the current Account will pay for the fees

**`note`** this value might change if, before running the transaction, the current Account enters (or leaves)
  a subsidizer relationship

**Returns:** *Promise‹object | null›*

___

###  onStatusChange

▸ **onStatusChange**(`listener`: function): *function*

*Defined in [src/base/PolymeshTransactionBase.ts:252](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/base/PolymeshTransactionBase.ts#L252)*

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

*Defined in [src/base/PolymeshTransactionBase.ts:139](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/base/PolymeshTransactionBase.ts#L139)*

Run the transaction and update its status

**Returns:** *Promise‹void›*
