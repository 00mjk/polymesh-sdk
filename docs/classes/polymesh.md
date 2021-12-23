# Class: Polymesh

Main entry point of the Polymesh SDK

## Hierarchy

* **Polymesh**

## Index

### Properties

* [claims](polymesh.md#claims)
* [currentIdentity](polymesh.md#currentidentity)
* [middleware](polymesh.md#middleware)
* [settlements](polymesh.md#settlements)

### Accessors

* [_middlewareApi](polymesh.md#_middlewareapi)
* [_polkadotApi](polymesh.md#_polkadotapi)

### Methods

* [addSigner](polymesh.md#addsigner)
* [claimClassicTicker](polymesh.md#claimclassicticker)
* [disconnect](polymesh.md#disconnect)
* [getAccount](polymesh.md#getaccount)
* [getAccountBalance](polymesh.md#getaccountbalance)
* [getAccounts](polymesh.md#getaccounts)
* [getCurrentIdentity](polymesh.md#getcurrentidentity)
* [getIdentity](polymesh.md#getidentity)
* [getLatestBlock](polymesh.md#getlatestblock)
* [getNetworkProperties](polymesh.md#getnetworkproperties)
* [getNetworkVersion](polymesh.md#getnetworkversion)
* [getSecurityToken](polymesh.md#getsecuritytoken)
* [getSecurityTokens](polymesh.md#getsecuritytokens)
* [getTickerReservation](polymesh.md#gettickerreservation)
* [getTickerReservations](polymesh.md#gettickerreservations)
* [getTransactionFees](polymesh.md#gettransactionfees)
* [getTreasuryAccount](polymesh.md#gettreasuryaccount)
* [getTreasuryBalance](polymesh.md#gettreasurybalance)
* [isIdentityValid](polymesh.md#isidentityvalid)
* [isTickerAvailable](polymesh.md#istickeravailable)
* [onConnectionError](polymesh.md#onconnectionerror)
* [onDisconnect](polymesh.md#ondisconnect)
* [registerIdentity](polymesh.md#registeridentity)
* [setSigner](polymesh.md#setsigner)
* [transferPolyx](polymesh.md#transferpolyx)
* [connect](polymesh.md#static-connect)

## Properties

###  claims

• **claims**: *[Claims](claims.md)*

*Defined in [src/Polymesh.ts:83](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/Polymesh.ts#L83)*

___

###  currentIdentity

• **currentIdentity**: *[CurrentIdentity](currentidentity.md)*

*Defined in [src/Polymesh.ts:86](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/Polymesh.ts#L86)*

___

###  middleware

• **middleware**: *[Middleware](middleware.md)*

*Defined in [src/Polymesh.ts:84](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/Polymesh.ts#L84)*

___

###  settlements

• **settlements**: *Settlements*

*Defined in [src/Polymesh.ts:85](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/Polymesh.ts#L85)*

## Accessors

###  _middlewareApi

• **get _middlewareApi**(): *ApolloClient‹NormalizedCacheObject›*

*Defined in [src/Polymesh.ts:788](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/Polymesh.ts#L788)*

Middleware client

**Returns:** *ApolloClient‹NormalizedCacheObject›*

___

###  _polkadotApi

• **get _polkadotApi**(): *ApiPromise*

*Defined in [src/Polymesh.ts:780](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/Polymesh.ts#L780)*

Polkadot client

**Returns:** *ApiPromise*

## Methods

###  addSigner

▸ **addSigner**(`params`: object): *[Account](account.md)*

*Defined in [src/Polymesh.ts:728](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/Polymesh.ts#L728)*

Adds a new signing key to the SDK instance. This will not change the current signer. For that,
  you must explicitly call `setSigner`

**Parameters:**

▪ **params**: *object*

Name | Type | Description |
------ | ------ | ------ |
`accountSeed` | string | hex seed of the account  |

**Returns:** *[Account](account.md)*

▸ **addSigner**(`params`: object): *[Account](account.md)*

*Defined in [src/Polymesh.ts:736](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/Polymesh.ts#L736)*

Adds a new signing key to the SDK instance. This will not change the current signer. For that,
  you must explicitly call `setSigner`

**Parameters:**

▪ **params**: *object*

Name | Type | Description |
------ | ------ | ------ |
`accountMnemonic` | string | account mnemonic  |

**Returns:** *[Account](account.md)*

▸ **addSigner**(`params`: object): *[Account](account.md)*

*Defined in [src/Polymesh.ts:744](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/Polymesh.ts#L744)*

Adds a new signing key to the SDK instance. This will not change the current signer. For that,
  you must explicitly call [setSigner](polymesh.md#setsigner)

**Parameters:**

▪ **params**: *object*

Name | Type | Description |
------ | ------ | ------ |
`accountUri` | string | account URI  |

**Returns:** *[Account](account.md)*

___

###  claimClassicTicker

▸ **claimClassicTicker**(`args`: [ClaimClassicTickerParams](../interfaces/claimclassictickerparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[TickerReservation](tickerreservation.md)››*

*Defined in [src/Polymesh.ts:367](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/Polymesh.ts#L367)*

Claim a ticker symbol that was reserved in Polymath Classic (Ethereum). The Ethereum account
  that owns the ticker must sign a special message that contains the DID of the Identity that will own the ticker
  in Polymesh, and provide the signed data to this call

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `claimClassicTicker.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [ClaimClassicTickerParams](../interfaces/claimclassictickerparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[TickerReservation](tickerreservation.md)››*

___

###  disconnect

▸ **disconnect**(): *Promise‹void›*

*Defined in [src/Polymesh.ts:718](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/Polymesh.ts#L718)*

Disconnect the client and close all open connections and subscriptions

**`note`** the SDK will become unusable after this operation. It will throw an error when attempting to
  access any chain or middleware data. If you wish to continue using the SDK, you must
  create a new instance by calling [connect](polymesh.md#static-connect)

**Returns:** *Promise‹void›*

___

###  getAccount

▸ **getAccount**(`args?`: undefined | object): *[Account](account.md)*

*Defined in [src/Polymesh.ts:502](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/Polymesh.ts#L502)*

Create an Account instance from an address. If no address is passed, the current Account is returned

**Parameters:**

Name | Type |
------ | ------ |
`args?` | undefined &#124; object |

**Returns:** *[Account](account.md)*

___

###  getAccountBalance

▸ **getAccountBalance**(`args?`: undefined | object): *Promise‹[AccountBalance](../globals.md#accountbalance)›*

*Defined in [src/Polymesh.ts:316](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/Polymesh.ts#L316)*

Get the free/locked POLYX balance of an Account

**`note`** can be subscribed to

**Parameters:**

Name | Type |
------ | ------ |
`args?` | undefined &#124; object |

**Returns:** *Promise‹[AccountBalance](../globals.md#accountbalance)›*

▸ **getAccountBalance**(`callback`: [SubCallback](../globals.md#subcallback)‹[AccountBalance](../globals.md#accountbalance)›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/Polymesh.ts:317](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/Polymesh.ts#L317)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[AccountBalance](../globals.md#accountbalance)› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

▸ **getAccountBalance**(`args`: object, `callback`: [SubCallback](../globals.md#subcallback)‹[AccountBalance](../globals.md#accountbalance)›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/Polymesh.ts:318](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/Polymesh.ts#L318)*

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`account` | string &#124; [Account](account.md) |

▪ **callback**: *[SubCallback](../globals.md#subcallback)‹[AccountBalance](../globals.md#accountbalance)›*

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  getAccounts

▸ **getAccounts**(): *[Account](account.md)[]*

*Defined in [src/Polymesh.ts:517](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/Polymesh.ts#L517)*

Return a list that contains all the signing Accounts associated to the SDK instance

**`throws`** — if there is no current Account associated to the SDK instance

**Returns:** *[Account](account.md)[]*

___

###  getCurrentIdentity

▸ **getCurrentIdentity**(): *Promise‹[Identity](identity.md) | null›*

*Defined in [src/Polymesh.ts:495](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/Polymesh.ts#L495)*

Retrieve the Identity associated to the current Account (null if there is none)

**Returns:** *Promise‹[Identity](identity.md) | null›*

___

###  getIdentity

▸ **getIdentity**(`args`: object): *Promise‹[Identity](identity.md)›*

*Defined in [src/Polymesh.ts:477](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/Polymesh.ts#L477)*

Create an Identity instance from a DID

**`throws`** if there is no Identity with the passed DID

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`did` | string |

**Returns:** *Promise‹[Identity](identity.md)›*

___

###  getLatestBlock

▸ **getLatestBlock**(): *Promise‹BigNumber›*

*Defined in [src/Polymesh.ts:707](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/Polymesh.ts#L707)*

Retrieve the number of the latest block in the chain

**Returns:** *Promise‹BigNumber›*

___

###  getNetworkProperties

▸ **getNetworkProperties**(): *Promise‹[NetworkProperties](../interfaces/networkproperties.md)›*

*Defined in [src/Polymesh.ts:643](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/Polymesh.ts#L643)*

Retrieve information for the current network

**Returns:** *Promise‹[NetworkProperties](../interfaces/networkproperties.md)›*

___

###  getNetworkVersion

▸ **getNetworkVersion**(): *Promise‹string›*

*Defined in [src/Polymesh.ts:770](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/Polymesh.ts#L770)*

Fetch the current network version (i.e. 3.1.0)

**Returns:** *Promise‹string›*

___

###  getSecurityToken

▸ **getSecurityToken**(`args`: object): *Promise‹[SecurityToken](securitytoken.md)›*

*Defined in [src/Polymesh.ts:624](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/Polymesh.ts#L624)*

Retrieve a Security Token

**Parameters:**

▪ **args**: *object*

Name | Type | Description |
------ | ------ | ------ |
`ticker` | string | Security Token ticker  |

**Returns:** *Promise‹[SecurityToken](securitytoken.md)›*

___

###  getSecurityTokens

▸ **getSecurityTokens**(`args?`: undefined | object): *Promise‹[SecurityToken](securitytoken.md)[]›*

*Defined in [src/Polymesh.ts:592](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/Polymesh.ts#L592)*

Retrieve all the Security Tokens owned by an Identity

**`note`** tokens with unreadable characters in their tickers will be left out

**Parameters:**

Name | Type |
------ | ------ |
`args?` | undefined &#124; object |

**Returns:** *Promise‹[SecurityToken](securitytoken.md)[]›*

___

###  getTickerReservation

▸ **getTickerReservation**(`args`: object): *Promise‹[TickerReservation](tickerreservation.md)›*

*Defined in [src/Polymesh.ts:442](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/Polymesh.ts#L442)*

Retrieve a Ticker Reservation

**Parameters:**

▪ **args**: *object*

Name | Type | Description |
------ | ------ | ------ |
`ticker` | string | Security Token ticker  |

**Returns:** *Promise‹[TickerReservation](tickerreservation.md)›*

___

###  getTickerReservations

▸ **getTickerReservations**(`args?`: undefined | object): *Promise‹[TickerReservation](tickerreservation.md)[]›*

*Defined in [src/Polymesh.ts:408](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/Polymesh.ts#L408)*

Retrieve all the ticker reservations currently owned by an Identity. This doesn't include tokens that
  have already been launched

**`note`** reservations with unreadable characters in their tickers will be left out

**Parameters:**

Name | Type |
------ | ------ |
`args?` | undefined &#124; object |

**Returns:** *Promise‹[TickerReservation](tickerreservation.md)[]›*

___

###  getTransactionFees

▸ **getTransactionFees**(`args`: object): *Promise‹BigNumber›*

*Defined in [src/Polymesh.ts:536](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/Polymesh.ts#L536)*

Retrieve the protocol fees associated with running a specific transaction

**Parameters:**

▪ **args**: *object*

Name | Type | Description |
------ | ------ | ------ |
`tag` | TxTag | transaction tag (i.e. TxTags.asset.CreateAsset or "asset.createAsset")  |

**Returns:** *Promise‹BigNumber›*

___

###  getTreasuryAccount

▸ **getTreasuryAccount**(): *[Account](account.md)*

*Defined in [src/Polymesh.ts:543](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/Polymesh.ts#L543)*

Get the treasury wallet address

**Returns:** *[Account](account.md)*

___

###  getTreasuryBalance

▸ **getTreasuryBalance**(): *Promise‹BigNumber›*

*Defined in [src/Polymesh.ts:667](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/Polymesh.ts#L667)*

Get the Treasury POLYX balance

**`note`** can be subscribed to

**Returns:** *Promise‹BigNumber›*

▸ **getTreasuryBalance**(`callback`: [SubCallback](../globals.md#subcallback)‹BigNumber›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/Polymesh.ts:668](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/Polymesh.ts#L668)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹BigNumber› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  isIdentityValid

▸ **isIdentityValid**(`args`: object): *Promise‹boolean›*

*Defined in [src/Polymesh.ts:524](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/Polymesh.ts#L524)*

Return whether the supplied Identity/DID exists

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`identity` | [Identity](identity.md) &#124; string |

**Returns:** *Promise‹boolean›*

___

###  isTickerAvailable

▸ **isTickerAvailable**(`args`: object): *Promise‹boolean›*

*Defined in [src/Polymesh.ts:376](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/Polymesh.ts#L376)*

Check if a ticker hasn't been reserved

**`note`** can be subscribed to

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`ticker` | string |

**Returns:** *Promise‹boolean›*

▸ **isTickerAvailable**(`args`: object, `callback`: [SubCallback](../globals.md#subcallback)‹boolean›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/Polymesh.ts:377](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/Polymesh.ts#L377)*

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`ticker` | string |

▪ **callback**: *[SubCallback](../globals.md#subcallback)‹boolean›*

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  onConnectionError

▸ **onConnectionError**(`callback`: function): *function*

*Defined in [src/Polymesh.ts:556](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/Polymesh.ts#L556)*

Handle connection errors

**Parameters:**

▪ **callback**: *function*

▸ (...`args`: unknown[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | unknown[] |

**Returns:** *function*

an unsubscribe callback

▸ (): *void*

___

###  onDisconnect

▸ **onDisconnect**(`callback`: function): *function*

*Defined in [src/Polymesh.ts:573](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/Polymesh.ts#L573)*

Handle disconnection

**Parameters:**

▪ **callback**: *function*

▸ (...`args`: unknown[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | unknown[] |

**Returns:** *function*

an unsubscribe callback

▸ (): *void*

___

###  registerIdentity

▸ **registerIdentity**(`args`: [RegisterIdentityParams](../interfaces/registeridentityparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[Identity](identity.md)››*

*Defined in [src/Polymesh.ts:700](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/Polymesh.ts#L700)*

Register an Identity

**`note`** must be a CDD provider

**`note`** this may create [Authorization Requests](authorizationrequest.md) which have to be accepted by
  the corresponding [Accounts](account.md) and/or [Identities](identity.md). An Account or Identity can
  fetch its pending Authorization Requests by calling `authorizations.getReceived`

**`note`** required role:
  - Customer Due Diligence Provider

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `registerIdentity.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [RegisterIdentityParams](../interfaces/registeridentityparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[Identity](identity.md)››*

___

###  setSigner

▸ **setSigner**(`signer`: string | [Account](account.md)): *void*

*Defined in [src/Polymesh.ts:763](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/Polymesh.ts#L763)*

Set the SDK's current signing key to the provided address

**`note`** the key must have been previously added via [addSigner](polymesh.md#addsigner)

**Parameters:**

Name | Type |
------ | ------ |
`signer` | string &#124; [Account](account.md) |

**Returns:** *void*

___

###  transferPolyx

▸ **transferPolyx**(`args`: [TransferPolyxParams](../interfaces/transferpolyxparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/Polymesh.ts:305](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/Polymesh.ts#L305)*

Transfer an amount of POLYX to a specified Account

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `transferPolyx.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [TransferPolyxParams](../interfaces/transferpolyxparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

### `Static` connect

▸ **connect**(`params`: [ConnectParamsBase](../interfaces/connectparamsbase.md) & object): *Promise‹[Polymesh](polymesh.md)›*

*Defined in [src/Polymesh.ts:127](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/Polymesh.ts#L127)*

Create the instance and connect to the Polymesh node using an account seed

**Parameters:**

Name | Type |
------ | ------ |
`params` | [ConnectParamsBase](../interfaces/connectparamsbase.md) & object |

**Returns:** *Promise‹[Polymesh](polymesh.md)›*

▸ **connect**(`params`: [ConnectParamsBase](../interfaces/connectparamsbase.md) & object): *Promise‹[Polymesh](polymesh.md)›*

*Defined in [src/Polymesh.ts:137](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/Polymesh.ts#L137)*

Create the instance and connect to the Polymesh node using a keyring

**Parameters:**

Name | Type |
------ | ------ |
`params` | [ConnectParamsBase](../interfaces/connectparamsbase.md) & object |

**Returns:** *Promise‹[Polymesh](polymesh.md)›*

▸ **connect**(`params`: [ConnectParamsBase](../interfaces/connectparamsbase.md) & object): *Promise‹[Polymesh](polymesh.md)›*

*Defined in [src/Polymesh.ts:150](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/Polymesh.ts#L150)*

Create the instance and connect to the Polymesh node using an account URI

**Parameters:**

Name | Type |
------ | ------ |
`params` | [ConnectParamsBase](../interfaces/connectparamsbase.md) & object |

**Returns:** *Promise‹[Polymesh](polymesh.md)›*

▸ **connect**(`params`: [ConnectParamsBase](../interfaces/connectparamsbase.md) & object): *Promise‹[Polymesh](polymesh.md)›*

*Defined in [src/Polymesh.ts:160](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/Polymesh.ts#L160)*

Create the instance and connect to the Polymesh node using an account mnemonic

**Parameters:**

Name | Type |
------ | ------ |
`params` | [ConnectParamsBase](../interfaces/connectparamsbase.md) & object |

**Returns:** *Promise‹[Polymesh](polymesh.md)›*

▸ **connect**(`params`: [ConnectParamsBase](../interfaces/connectparamsbase.md)): *Promise‹[Polymesh](polymesh.md)›*

*Defined in [src/Polymesh.ts:169](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/Polymesh.ts#L169)*

Create the instance and connect to the Polymesh node without an account

**Parameters:**

Name | Type |
------ | ------ |
`params` | [ConnectParamsBase](../interfaces/connectparamsbase.md) |

**Returns:** *Promise‹[Polymesh](polymesh.md)›*
