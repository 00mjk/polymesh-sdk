# Interface: InviteExternalAgentParams

## Hierarchy

* **InviteExternalAgentParams**

## Index

### Properties

* [expiry](inviteexternalagentparams.md#optional-expiry)
* [permissions](inviteexternalagentparams.md#permissions)
* [target](inviteexternalagentparams.md#target)

## Properties

### `Optional` expiry

• **expiry**? : *[Date](../enums/transactionargumenttype.md#date)*

*Defined in [src/api/procedures/inviteExternalAgent.ts:40](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/procedures/inviteExternalAgent.ts#L40)*

date at which the authorization request for invitation expires (optional)

**`note`** if expiry date is not set, the invitation will never expire

___

###  permissions

• **permissions**: *[KnownPermissionGroup](../classes/knownpermissiongroup.md) | [CustomPermissionGroup](../classes/custompermissiongroup.md) | object | object*

*Defined in [src/api/procedures/inviteExternalAgent.ts:26](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/procedures/inviteExternalAgent.ts#L26)*

___

###  target

• **target**: *string | [Identity](../classes/identity.md)*

*Defined in [src/api/procedures/inviteExternalAgent.ts:25](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/procedures/inviteExternalAgent.ts#L25)*
