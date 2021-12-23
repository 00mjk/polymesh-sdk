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

*Defined in [src/types/index.ts:60](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/types/index.ts#L60)*

the transaction couldn't be broadcast. It was either dropped, usurped or invalidated
see https://github.com/paritytech/substrate/blob/master/primitives/transaction-pool/src/pool.rs#L58-L110

___

###  Failed

• **Failed**: = "Failed"

*Defined in [src/types/index.ts:55](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/types/index.ts#L55)*

the transaction's execution failed due to a revert

___

###  Idle

• **Idle**: = "Idle"

*Defined in [src/types/index.ts:35](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/types/index.ts#L35)*

the transaction is prepped to run

___

###  Rejected

• **Rejected**: = "Rejected"

*Defined in [src/types/index.ts:47](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/types/index.ts#L47)*

the transaction was rejected by the signer

___

###  Running

• **Running**: = "Running"

*Defined in [src/types/index.ts:43](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/types/index.ts#L43)*

the transaction is being executed

___

###  Succeeded

• **Succeeded**: = "Succeeded"

*Defined in [src/types/index.ts:51](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/types/index.ts#L51)*

the transaction was run successfully

___

###  Unapproved

• **Unapproved**: = "Unapproved"

*Defined in [src/types/index.ts:39](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/types/index.ts#L39)*

the transaction is waiting for the user's signature
