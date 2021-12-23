# Class: IdentityAuthorizations

Handles all Identity Authorization related functionality

## Hierarchy

  ↳ [Authorizations](authorizations.md)‹[Identity](identity.md)›

  ↳ **IdentityAuthorizations**

## Index

### Properties

* [context](identityauthorizations.md#protected-context)
* [parent](identityauthorizations.md#protected-parent)

### Methods

* [getOne](identityauthorizations.md#getone)
* [getReceived](identityauthorizations.md#getreceived)
* [getSent](identityauthorizations.md#getsent)

## Properties

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:11](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Namespace.ts#L11)*

___

### `Protected` parent

• **parent**: *[Identity](identity.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:9](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Namespace.ts#L9)*

## Methods

###  getOne

▸ **getOne**(`args`: object): *Promise‹[AuthorizationRequest](authorizationrequest.md)›*

*Inherited from [Authorizations](authorizations.md).[getOne](authorizations.md#getone)*

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

*Inherited from [Authorizations](authorizations.md).[getReceived](authorizations.md#getreceived)*

*Defined in [src/api/entities/common/namespaces/Authorizations.ts:29](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/common/namespaces/Authorizations.ts#L29)*

Fetch all pending Authorization Requests for which this Signer is the target

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | undefined &#124; object |

**Returns:** *Promise‹[AuthorizationRequest](authorizationrequest.md)[]›*

___

###  getSent

▸ **getSent**(`paginationOpts?`: [PaginationOptions](../interfaces/paginationoptions.md)): *Promise‹[ResultSet](../interfaces/resultset.md)‹[AuthorizationRequest](authorizationrequest.md)››*

*Defined in [src/api/entities/Identity/IdentityAuthorizations.ts:16](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Identity/IdentityAuthorizations.ts#L16)*

Fetch all pending authorization requests issued by this Identity

**`note`** supports pagination

**Parameters:**

Name | Type |
------ | ------ |
`paginationOpts?` | [PaginationOptions](../interfaces/paginationoptions.md) |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[AuthorizationRequest](authorizationrequest.md)››*
