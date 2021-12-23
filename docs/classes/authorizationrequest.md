# Class: AuthorizationRequest

Represents a request made by an Identity to another Identity (or account) for some sort of authorization. This has multiple uses. For example, if Alice
  wants to transfer ownership of her asset ALICETOKEN to Bob, an authorization request gets emitted to Bob,
  who then has to accept it in order for the ownership transfer to be complete

## Hierarchy

* [Entity](entity.md)‹UniqueIdentifiers, [HumanReadable](../interfaces/humanreadable.md)›

  ↳ **AuthorizationRequest**

## Index

### Properties

* [authId](authorizationrequest.md#authid)
* [context](authorizationrequest.md#protected-context)
* [data](authorizationrequest.md#data)
* [expiry](authorizationrequest.md#expiry)
* [issuer](authorizationrequest.md#issuer)
* [target](authorizationrequest.md#target)
* [uuid](authorizationrequest.md#uuid)

### Methods

* [accept](authorizationrequest.md#accept)
* [exists](authorizationrequest.md#exists)
* [isEqual](authorizationrequest.md#isequal)
* [isExpired](authorizationrequest.md#isexpired)
* [remove](authorizationrequest.md#remove)
* [toJson](authorizationrequest.md#tojson)
* [generateUuid](authorizationrequest.md#static-generateuuid)
* [unserialize](authorizationrequest.md#static-unserialize)

## Properties

###  authId

• **authId**: *BigNumber*

*Defined in [src/api/entities/AuthorizationRequest.ts:92](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/AuthorizationRequest.ts#L92)*

internal identifier for the request (used to accept/reject/cancel)

___

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from [Entity](entity.md).[context](entity.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Entity.ts#L48)*

___

###  data

• **data**: *[Authorization](../globals.md#authorization)*

*Defined in [src/api/entities/AuthorizationRequest.ts:81](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/AuthorizationRequest.ts#L81)*

authorization request data corresponding to type of authorization

| Type                        | Data                            |
|-----------------------------|---------------------------------|
| Add Relayer Paying Key      | Beneficiary, Relayer, Allowance |
| Become Agent                | Permission Group
| Attest Primary Key Rotation | DID                             |
| Rotate Primary Key          | DID                             |
| Transfer Ticker             | Ticker                          |
| Add MultiSig Signer         | Account                         |
| Transfer Token Ownership    | Ticker                          |
| Join Identity               | DID                             |
| Portfolio Custody           | Portfolio                       |

___

###  expiry

• **expiry**: *Date | null*

*Defined in [src/api/entities/AuthorizationRequest.ts:87](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/AuthorizationRequest.ts#L87)*

date at which the authorization request expires and can no longer be accepted.
  At this point, a new authorization request must be emitted. Null if the request never expires

___

###  issuer

• **issuer**: *[Identity](identity.md)*

*Defined in [src/api/entities/AuthorizationRequest.ts:64](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/AuthorizationRequest.ts#L64)*

Identity that emitted the request

___

###  target

• **target**: *[Signer](../globals.md#signer)*

*Defined in [src/api/entities/AuthorizationRequest.ts:59](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/AuthorizationRequest.ts#L59)*

Identity or Account to which the request was emitted

___

###  uuid

• **uuid**: *string*

*Inherited from [Entity](entity.md).[uuid](entity.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Entity.ts#L46)*

## Methods

###  accept

▸ **accept**(`args`: void, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/AuthorizationRequest.ts:171](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/AuthorizationRequest.ts#L171)*

Accept the authorization request. You must be the target of the request to be able to accept it

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `accept.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | void |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  exists

▸ **exists**(): *Promise‹boolean›*

*Overrides [Entity](entity.md).[exists](entity.md#abstract-exists)*

*Defined in [src/api/entities/AuthorizationRequest.ts:200](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/AuthorizationRequest.ts#L200)*

Determine whether this Authorization Request exists on chain

**Returns:** *Promise‹boolean›*

___

###  isEqual

▸ **isEqual**(`entity`: [Entity](entity.md)‹unknown, unknown›): *boolean*

*Inherited from [Entity](entity.md).[isEqual](entity.md#isequal)*

*Defined in [src/api/entities/Entity.ts:61](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Entity.ts#L61)*

Determine whether this Entity is the same as another one

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [Entity](entity.md)‹unknown, unknown› |

**Returns:** *boolean*

___

###  isExpired

▸ **isExpired**(): *boolean*

*Defined in [src/api/entities/AuthorizationRequest.ts:191](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/AuthorizationRequest.ts#L191)*

Returns whether the Authorization Request has expired

**Returns:** *boolean*

___

###  remove

▸ **remove**(`args`: void, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/AuthorizationRequest.ts:184](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/AuthorizationRequest.ts#L184)*

Remove the authorization request

- If you are the request issuer, this will cancel the authorization
- If you are the request target, this will reject the authorization

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `remove.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | void |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  toJson

▸ **toJson**(): *[HumanReadable](../interfaces/humanreadable.md)*

*Overrides [Entity](entity.md).[toJson](entity.md#abstract-tojson)*

*Defined in [src/api/entities/AuthorizationRequest.ts:214](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/AuthorizationRequest.ts#L214)*

Return the Authorization's static data

**Returns:** *[HumanReadable](../interfaces/humanreadable.md)*

___

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›(`identifiers`: Identifiers): *string*

*Inherited from [Entity](entity.md).[generateUuid](entity.md#static-generateuuid)*

*Defined in [src/api/entities/Entity.ts:14](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Entity.ts#L14)*

Generate the Entity's UUID from its identifying properties

**Type parameters:**

▪ **Identifiers**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`identifiers` | Identifiers |   |

**Returns:** *string*

___

### `Static` unserialize

▸ **unserialize**‹**Identifiers**›(`serialized`: string): *Identifiers*

*Inherited from [Entity](entity.md).[unserialize](entity.md#static-unserialize)*

*Defined in [src/api/entities/Entity.ts:23](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Entity.ts#L23)*

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`serialized` | string | UUID to unserialize  |

**Returns:** *Identifiers*
