# Class: Authorizations ‹**Parent**›

Handles all Authorization related functionality

## Type parameters

▪ **Parent**: *[Signer](../globals.md#signer)*

## Hierarchy

* Namespace‹Parent›

  ↳ **Authorizations**

  ↳ [IdentityAuthorizations](identityauthorizations.md)

## Index

### Properties

* [context](authorizations.md#protected-context)
* [parent](authorizations.md#protected-parent)

### Methods

* [getOne](authorizations.md#getone)
* [getReceived](authorizations.md#getreceived)

## Properties

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:11](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Namespace.ts#L11)*

___

### `Protected` parent

• **parent**: *Parent*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:9](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Namespace.ts#L9)*

## Methods

###  getOne

▸ **getOne**(`args`: object): *Promise‹[AuthorizationRequest](authorizationrequest.md)›*

*Defined in [src/api/entities/common/namespaces/Authorizations.ts:65](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/common/namespaces/Authorizations.ts#L65)*

Retrieve a single Authorization Request targeting this Signer by its ID

**`throws`** if there is no Authorization Request with the passed ID targeting this Signer

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`id` | BigNumber |

**Returns:** *Promise‹[AuthorizationRequest](authorizationrequest.md)›*

___

###  getReceived

▸ **getReceived**(`opts?`: undefined | object): *Promise‹[AuthorizationRequest](authorizationrequest.md)[]›*

*Defined in [src/api/entities/common/namespaces/Authorizations.ts:29](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/common/namespaces/Authorizations.ts#L29)*

Fetch all pending Authorization Requests for which this Signer is the target

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | undefined &#124; object |

**Returns:** *Promise‹[AuthorizationRequest](authorizationrequest.md)[]›*
