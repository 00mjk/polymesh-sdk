# Interface: AddInstructionParams

## Hierarchy

* **AddInstructionParams**

## Index

### Properties

* [endBlock](addinstructionparams.md#optional-endblock)
* [legs](addinstructionparams.md#legs)
* [tradeDate](addinstructionparams.md#optional-tradedate)
* [valueDate](addinstructionparams.md#optional-valuedate)

## Properties

### `Optional` endBlock

• **endBlock**? : *BigNumber*

*Defined in [src/api/procedures/addInstruction.ts:65](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/procedures/addInstruction.ts#L65)*

block at which the Instruction will be executed automatically (optional, the Instruction will be executed when all participants have authorized it if not supplied)

___

###  legs

• **legs**: *object[]*

*Defined in [src/api/procedures/addInstruction.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/procedures/addInstruction.ts#L48)*

array of token movements (amount, from, to, token)

___

### `Optional` tradeDate

• **tradeDate**? : *[Date](../enums/transactionargumenttype.md#date)*

*Defined in [src/api/procedures/addInstruction.ts:57](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/procedures/addInstruction.ts#L57)*

date at which the trade was agreed upon (optional, for offchain trades)

___

### `Optional` valueDate

• **valueDate**? : *[Date](../enums/transactionargumenttype.md#date)*

*Defined in [src/api/procedures/addInstruction.ts:61](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/procedures/addInstruction.ts#L61)*

date at which the trade was executed (optional, for offchain trades)
