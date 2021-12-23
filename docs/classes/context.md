# Class: Context

Context in which the SDK is being used

- Holds the current low level API
- Holds the current keyring pair
- Holds the current Identity

## Hierarchy

* **Context**

## Index

### Properties

* [currentPair](context.md#optional-currentpair)
* [isArchiveNode](context.md#isarchivenode)
* [polymeshApi](context.md#polymeshapi)
* [ss58Format](context.md#ss58format)

### Accessors

* [middlewareApi](context.md#middlewareapi)

### Methods

* [accountBalance](context.md#accountbalance)
* [accountSubsidy](context.md#accountsubsidy)
* [addPair](context.md#addpair)
* [clone](context.md#clone)
* [disconnect](context.md#disconnect)
* [getAccounts](context.md#getaccounts)
* [getCurrentAccount](context.md#getcurrentaccount)
* [getCurrentIdentity](context.md#getcurrentidentity)
* [getCurrentPair](context.md#getcurrentpair)
* [getInvalidDids](context.md#getinvaliddids)
* [getLatestBlock](context.md#getlatestblock)
* [getNetworkVersion](context.md#getnetworkversion)
* [getSigner](context.md#getsigner)
* [getTransactionArguments](context.md#gettransactionarguments)
* [getTransactionFees](context.md#gettransactionfees)
* [isMiddlewareAvailable](context.md#ismiddlewareavailable)
* [isMiddlewareEnabled](context.md#ismiddlewareenabled)
* [issuedClaims](context.md#issuedclaims)
* [queryMiddleware](context.md#querymiddleware)
* [setPair](context.md#setpair)
* [create](context.md#static-create)

## Properties

### `Optional` currentPair

• **currentPair**? : *[KeyringPair](../interfaces/keyringpair.md)*

*Defined in [src/base/Context.ts:110](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/base/Context.ts#L110)*

___

###  isArchiveNode

• **isArchiveNode**: *boolean* = false

*Defined in [src/base/Context.ts:115](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/base/Context.ts#L115)*

Whether the current node is an archive node (contains a full history from genesis onward) or not

___

###  polymeshApi

• **polymeshApi**: *ApiPromise*

*Defined in [src/base/Context.ts:108](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/base/Context.ts#L108)*

___

###  ss58Format

• **ss58Format**: *number*

*Defined in [src/base/Context.ts:117](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/base/Context.ts#L117)*

## Accessors

###  middlewareApi

• **get middlewareApi**(): *ApolloClient‹NormalizedCacheObject›*

*Defined in [src/base/Context.ts:1005](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/base/Context.ts#L1005)*

Retrieve the middleware client

**`throws`** if the middleware is not enabled

**Returns:** *ApolloClient‹NormalizedCacheObject›*

## Methods

###  accountBalance

▸ **accountBalance**(`account?`: string | [Account](account.md)): *Promise‹[AccountBalance](../globals.md#accountbalance)›*

*Defined in [src/base/Context.ts:327](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/base/Context.ts#L327)*

Retrieve the account level POLYX balance

**`note`** can be subscribed to

**Parameters:**

Name | Type |
------ | ------ |
`account?` | string &#124; [Account](account.md) |

**Returns:** *Promise‹[AccountBalance](../globals.md#accountbalance)›*

▸ **accountBalance**(`account`: string | [Account](account.md) | undefined, `callback`: [SubCallback](../globals.md#subcallback)‹[AccountBalance](../globals.md#accountbalance)›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/base/Context.ts:328](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/base/Context.ts#L328)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | string &#124; [Account](account.md) &#124; undefined |
`callback` | [SubCallback](../globals.md#subcallback)‹[AccountBalance](../globals.md#accountbalance)› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  accountSubsidy

▸ **accountSubsidy**(`account?`: string | [Account](account.md)): *Promise‹Omit‹[Subsidy](../interfaces/subsidy.md), "beneficiary"› | null›*

*Defined in [src/base/Context.ts:386](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/base/Context.ts#L386)*

Retrieve the account level subsidizer relationship. If there is no such relationship, return null

**`note`** can be subscribed to

**Parameters:**

Name | Type |
------ | ------ |
`account?` | string &#124; [Account](account.md) |

**Returns:** *Promise‹Omit‹[Subsidy](../interfaces/subsidy.md), "beneficiary"› | null›*

▸ **accountSubsidy**(`account`: string | [Account](account.md) | undefined, `callback`: [SubCallback](../globals.md#subcallback)‹Omit‹[Subsidy](../interfaces/subsidy.md), "beneficiary"› | null›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/base/Context.ts:387](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/base/Context.ts#L387)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | string &#124; [Account](account.md) &#124; undefined |
`callback` | [SubCallback](../globals.md#subcallback)‹Omit‹[Subsidy](../interfaces/subsidy.md), "beneficiary"› &#124; null› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  addPair

▸ **addPair**(`params`: [AddPairParams](../globals.md#addpairparams)): *[KeyringPair](../interfaces/keyringpair.md)*

*Defined in [src/base/Context.ts:262](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/base/Context.ts#L262)*

Add a signing pair to the Keyring

**Parameters:**

Name | Type |
------ | ------ |
`params` | [AddPairParams](../globals.md#addpairparams) |

**Returns:** *[KeyringPair](../interfaces/keyringpair.md)*

___

###  clone

▸ **clone**(): *[Context](context.md)*

*Defined in [src/base/Context.ts:1102](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/base/Context.ts#L1102)*

Returns a (shallow) clone of this instance. Useful for providing a separate
  Context to Procedures with different signers

**Returns:** *[Context](context.md)*

___

###  disconnect

▸ **disconnect**(): *Promise‹void›*

*Defined in [src/base/Context.ts:1084](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/base/Context.ts#L1084)*

Disconnect the Polkadot API, middleware, and render this instance unusable

**`note`** after disconnecting, trying to access any property in this objecct will result
  in an error

**Returns:** *Promise‹void›*

___

###  getAccounts

▸ **getAccounts**(): *[Account](account.md)[]*

*Defined in [src/base/Context.ts:239](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/base/Context.ts#L239)*

Retrieve a list of Accounts that can act as signers. The first Account in the array is the current Account (default signer)

**Returns:** *[Account](account.md)[]*

___

###  getCurrentAccount

▸ **getCurrentAccount**(): *[Account](account.md)*

*Defined in [src/base/Context.ts:442](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/base/Context.ts#L442)*

Retrieve current Account

**`throws`** if there is no current Account associated to the SDK instance

**Returns:** *[Account](account.md)*

___

###  getCurrentIdentity

▸ **getCurrentIdentity**(): *Promise‹[Identity](identity.md)›*

*Defined in [src/base/Context.ts:453](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/base/Context.ts#L453)*

Retrieve current Identity

**`throws`** if there is no Identity associated to the current Account (or there is no current Account associated to the SDK instance)

**Returns:** *Promise‹[Identity](identity.md)›*

___

###  getCurrentPair

▸ **getCurrentPair**(): *[KeyringPair](../interfaces/keyringpair.md)*

*Defined in [src/base/Context.ts:473](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/base/Context.ts#L473)*

Retrieve current Keyring Pair

**`throws`** if there is no Account associated to the SDK instance

**Returns:** *[KeyringPair](../interfaces/keyringpair.md)*

___

###  getInvalidDids

▸ **getInvalidDids**(`identities`: (string | [Identity](identity.md)‹›)[]): *Promise‹string[]›*

*Defined in [src/base/Context.ts:502](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/base/Context.ts#L502)*

Check whether Identities exist

**Parameters:**

Name | Type |
------ | ------ |
`identities` | (string &#124; [Identity](identity.md)‹›)[] |

**Returns:** *Promise‹string[]›*

___

###  getLatestBlock

▸ **getLatestBlock**(): *Promise‹BigNumber›*

*Defined in [src/base/Context.ts:1063](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/base/Context.ts#L1063)*

Retrieve the latest block number

**Returns:** *Promise‹BigNumber›*

___

###  getNetworkVersion

▸ **getNetworkVersion**(): *Promise‹string›*

*Defined in [src/base/Context.ts:1072](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/base/Context.ts#L1072)*

Retrieve the network version

**Returns:** *Promise‹string›*

___

###  getSigner

▸ **getSigner**(): *AddressOrPair*

*Defined in [src/base/Context.ts:489](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/base/Context.ts#L489)*

Retrieve the signer address (or keyring pair)

**Returns:** *AddressOrPair*

___

###  getTransactionArguments

▸ **getTransactionArguments**(`args`: object): *[TransactionArgument](../globals.md#transactionargument)[]*

*Defined in [src/base/Context.ts:558](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/base/Context.ts#L558)*

Retrieve the types of arguments that a certain transaction requires to be run

**Parameters:**

▪ **args**: *object*

Name | Type | Description |
------ | ------ | ------ |
`tag` | TxTag | tag associated with the transaction that will be executed if the proposal passes  |

**Returns:** *[TransactionArgument](../globals.md#transactionargument)[]*

___

###  getTransactionFees

▸ **getTransactionFees**(`tag`: TxTag): *Promise‹BigNumber›*

*Defined in [src/base/Context.ts:531](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/base/Context.ts#L531)*

Retrieve the protocol fees associated with running a specific transaction

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`tag` | TxTag | transaction tag (i.e. TxTags.asset.CreateAsset or "asset.createAsset")  |

**Returns:** *Promise‹BigNumber›*

___

###  isMiddlewareAvailable

▸ **isMiddlewareAvailable**(): *Promise‹boolean›*

*Defined in [src/base/Context.ts:1050](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/base/Context.ts#L1050)*

Return whether the middleware is enabled and online

**Returns:** *Promise‹boolean›*

___

###  isMiddlewareEnabled

▸ **isMiddlewareEnabled**(): *boolean*

*Defined in [src/base/Context.ts:1043](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/base/Context.ts#L1043)*

Return whether the middleware was enabled at startup

**Returns:** *boolean*

___

###  issuedClaims

▸ **issuedClaims**(`opts`: object): *Promise‹[ResultSet](../interfaces/resultset.md)‹[ClaimData](../interfaces/claimdata.md)››*

*Defined in [src/base/Context.ts:954](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/base/Context.ts#L954)*

Retrieve a list of claims. Can be filtered using parameters

**`note`** uses the middleware (optional)

**Parameters:**

▪`Default value`  **opts**: *object*= {}

Name | Type | Description |
------ | ------ | ------ |
`claimTypes?` | [Exclude](../enums/targettreatment.md#exclude)‹[ClaimType](../enums/claimtype.md), [InvestorUniquenessV2](../enums/claimtype.md#investoruniquenessv2)›[] | types of the claims to fetch. Defaults to any type |
`includeExpired?` | undefined &#124; false &#124; true | whether to include expired claims. Defaults to true |
`size?` | undefined &#124; number | page size |
`start?` | undefined &#124; number | page offset  |
`targets?` | (string &#124; [Identity](identity.md)‹›)[] | identities (or Identity IDs) for which to fetch claims (targets). Defaults to all targets |
`trustedClaimIssuers?` | (string &#124; [Identity](identity.md)‹›)[] | identity IDs of claim issuers. Defaults to all claim issuers |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[ClaimData](../interfaces/claimdata.md)››*

___

###  queryMiddleware

▸ **queryMiddleware**‹**Result**›(`query`: GraphqlQuery‹unknown›): *Promise‹ApolloQueryResult‹Result››*

*Defined in [src/base/Context.ts:1021](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/base/Context.ts#L1021)*

Make a query to the middleware server using the apollo client

**Type parameters:**

▪ **Result**: *Partial‹Query›*

**Parameters:**

Name | Type |
------ | ------ |
`query` | GraphqlQuery‹unknown› |

**Returns:** *Promise‹ApolloQueryResult‹Result››*

___

###  setPair

▸ **setPair**(`address`: string): *void*

*Defined in [src/base/Context.ts:304](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/base/Context.ts#L304)*

Set a pair as the current Account keyring pair

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |

**Returns:** *void*

___

### `Static` create

▸ **create**(`params`: object): *Promise‹[Context](context.md)›*

*Defined in [src/base/Context.ts:164](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/base/Context.ts#L164)*

Create the Context instance

**Parameters:**

▪ **params**: *object*

Name | Type |
------ | ------ |
`accountMnemonic?` | undefined &#124; string |
`accountSeed?` | undefined &#124; string |
`accountUri?` | undefined &#124; string |
`keyring?` | [CommonKeyring](../globals.md#commonkeyring) &#124; [UiKeyring](../interfaces/uikeyring.md) |
`middlewareApi` | ApolloClient‹NormalizedCacheObject› &#124; null |
`polymeshApi` | ApiPromise |

**Returns:** *Promise‹[Context](context.md)›*
