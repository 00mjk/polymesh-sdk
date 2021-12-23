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

*Defined in [src/types/index.ts:1204](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/types/index.ts#L1204)*

whether the Account is frozen (i.e. can't perform any transactions)

___

###  agentPermissions

• **agentPermissions**: *[CheckPermissionsResult](checkpermissionsresult.md)‹[Identity](../enums/signertype.md#identity)›*

*Defined in [src/types/index.ts:1192](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/types/index.ts#L1192)*

whether the Identity complies with all required Agent permissions

___

###  noIdentity

• **noIdentity**: *boolean*

*Defined in [src/types/index.ts:1209](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/types/index.ts#L1209)*

true only if the Procedure requires an Identity but the current Account
  doesn't have one associated

___

###  roles

• **roles**: *[CheckRolesResult](checkrolesresult.md)*

*Defined in [src/types/index.ts:1200](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/types/index.ts#L1200)*

whether the Identity complies with all required Roles

___

###  signerPermissions

• **signerPermissions**: *[CheckPermissionsResult](checkpermissionsresult.md)‹[Account](../enums/signertype.md#account)›*

*Defined in [src/types/index.ts:1196](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/types/index.ts#L1196)*

whether the Account complies with all required Signer permissions
