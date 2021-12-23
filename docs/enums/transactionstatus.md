# Enumeration: TransactionStatus

## Index

### Enumeration members

* [Aborted](transactionstatus.md#aborted)
* [Failed](transactionstatus.md#failed)
* [Idle](transactionstatus.md#idle)
* [Rejected](transactionstatus.md#rejected)
* [Running](transactionstatus.md#running)
* [Succeeded](transactionstatus.md#succeeded)
* [Unapproved](transactionstatus.md#unapproved)

## Enumeration members

###  Aborted

• **Aborted**: = "Aborted"

*Defined in [src/types/index.ts:59](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L59)*

the transaction couldn't be broadcast. It was either dropped, usurped or invalidated
see https://github.com/paritytech/substrate/blob/master/primitives/transaction-pool/src/pool.rs#L58-L110

___

###  Failed

• **Failed**: = "Failed"

*Defined in [src/types/index.ts:54](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L54)*

the transaction's execution failed due to a revert

___

###  Idle

• **Idle**: = "Idle"

*Defined in [src/types/index.ts:34](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L34)*

the transaction is prepped to run

___

###  Rejected

• **Rejected**: = "Rejected"

*Defined in [src/types/index.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L46)*

the transaction was rejected by the signer

___

###  Running

• **Running**: = "Running"

*Defined in [src/types/index.ts:42](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L42)*

the transaction is being executed

___

###  Succeeded

• **Succeeded**: = "Succeeded"

*Defined in [src/types/index.ts:50](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L50)*

the transaction was run successfully

___

###  Unapproved

• **Unapproved**: = "Unapproved"

*Defined in [src/types/index.ts:38](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L38)*

the transaction is waiting for the user's signature
