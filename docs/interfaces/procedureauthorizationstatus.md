# Interface: ProcedureAuthorizationStatus

## Hierarchy

* **ProcedureAuthorizationStatus**

## Index

### Properties

* [accountFrozen](procedureauthorizationstatus.md#accountfrozen)
* [agentPermissions](procedureauthorizationstatus.md#agentpermissions)
* [noIdentity](procedureauthorizationstatus.md#noidentity)
* [roles](procedureauthorizationstatus.md#roles)
* [signerPermissions](procedureauthorizationstatus.md#signerpermissions)

## Properties

###  accountFrozen

• **accountFrozen**: *boolean*

*Defined in [src/types/index.ts:1034](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L1034)*

whether the Account is frozen (i.e. can't perform any transactions)

___

###  agentPermissions

• **agentPermissions**: *boolean*

*Defined in [src/types/index.ts:1022](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L1022)*

whether the Identity complies with all required Agent permissions

___

###  noIdentity

• **noIdentity**: *boolean*

*Defined in [src/types/index.ts:1039](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L1039)*

true only if the Procedure requires an Identity but the current Account
  doesn't have one associated

___

###  roles

• **roles**: *boolean*

*Defined in [src/types/index.ts:1030](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L1030)*

whether the Identity complies with all required Roles

___

###  signerPermissions

• **signerPermissions**: *boolean*

*Defined in [src/types/index.ts:1026](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L1026)*

whether the Account complies with all required Signer permissions
