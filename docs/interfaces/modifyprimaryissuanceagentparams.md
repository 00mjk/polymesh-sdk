# Interface: ModifyPrimaryIssuanceAgentParams

## Hierarchy

* **ModifyPrimaryIssuanceAgentParams**

## Index

### Properties

* [requestExpiry](modifyprimaryissuanceagentparams.md#optional-requestexpiry)
* [target](modifyprimaryissuanceagentparams.md#target)

## Properties

### `Optional` requestExpiry

• **requestExpiry**? : *[Date](../enums/transactionargumenttype.md#date)*

*Defined in [src/api/procedures/modifyPrimaryIssuanceAgent.ts:25](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/procedures/modifyPrimaryIssuanceAgent.ts#L25)*

date at which the authorization request to modify the primary issuance agent expires (optional, never expires if a date is not provided)

___

###  target

• **target**: *string | [Identity](../classes/identity.md)*

*Defined in [src/api/procedures/modifyPrimaryIssuanceAgent.ts:21](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/procedures/modifyPrimaryIssuanceAgent.ts#L21)*

identity to be set as primary issuance agent
