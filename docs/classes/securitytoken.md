# Class: SecurityToken

Class used to manage all the Security Token functionality

## Hierarchy

* [Entity](entity.md)‹UniqueIdentifiers, string›

  ↳ **SecurityToken**

## Index

### Properties

* [checkpoints](securitytoken.md#checkpoints)
* [compliance](securitytoken.md#compliance)
* [context](securitytoken.md#protected-context)
* [corporateActions](securitytoken.md#corporateactions)
* [did](securitytoken.md#did)
* [documents](securitytoken.md#documents)
* [issuance](securitytoken.md#issuance)
* [offerings](securitytoken.md#offerings)
* [permissions](securitytoken.md#permissions)
* [settlements](securitytoken.md#settlements)
* [ticker](securitytoken.md#ticker)
* [tokenHolders](securitytoken.md#tokenholders)
* [transferRestrictions](securitytoken.md#transferrestrictions)
* [uuid](securitytoken.md#uuid)

### Methods

* [controllerTransfer](securitytoken.md#controllertransfer)
* [createdAt](securitytoken.md#createdat)
* [currentFundingRound](securitytoken.md#currentfundinground)
* [details](securitytoken.md#details)
* [exists](securitytoken.md#exists)
* [freeze](securitytoken.md#freeze)
* [getIdentifiers](securitytoken.md#getidentifiers)
* [getOperationHistory](securitytoken.md#getoperationhistory)
* [investorCount](securitytoken.md#investorcount)
* [isEqual](securitytoken.md#isequal)
* [isFrozen](securitytoken.md#isfrozen)
* [modify](securitytoken.md#modify)
* [modifyPrimaryIssuanceAgent](securitytoken.md#modifyprimaryissuanceagent)
* [redeem](securitytoken.md#redeem)
* [removePrimaryIssuanceAgent](securitytoken.md#removeprimaryissuanceagent)
* [toJson](securitytoken.md#tojson)
* [transferOwnership](securitytoken.md#transferownership)
* [unfreeze](securitytoken.md#unfreeze)
* [generateUuid](securitytoken.md#static-generateuuid)
* [unserialize](securitytoken.md#static-unserialize)

## Properties

###  checkpoints

• **checkpoints**: *[Checkpoints](checkpoints.md)*

*Defined in [src/api/entities/SecurityToken/index.ts:114](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/SecurityToken/index.ts#L114)*

___

###  compliance

• **compliance**: *[Compliance](compliance.md)*

*Defined in [src/api/entities/SecurityToken/index.ts:111](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/SecurityToken/index.ts#L111)*

___

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from [Entity](entity.md).[context](entity.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Entity.ts#L48)*

___

###  corporateActions

• **corporateActions**: *[CorporateActions](corporateactions.md)*

*Defined in [src/api/entities/SecurityToken/index.ts:115](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/SecurityToken/index.ts#L115)*

___

###  did

• **did**: *string*

*Defined in [src/api/entities/SecurityToken/index.ts:99](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/SecurityToken/index.ts#L99)*

identity id of the Security Token

___

###  documents

• **documents**: *[Documents](documents.md)*

*Defined in [src/api/entities/SecurityToken/index.ts:107](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/SecurityToken/index.ts#L107)*

___

###  issuance

• **issuance**: *[Issuance](issuance.md)*

*Defined in [src/api/entities/SecurityToken/index.ts:110](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/SecurityToken/index.ts#L110)*

___

###  offerings

• **offerings**: *[Offerings](offerings.md)*

*Defined in [src/api/entities/SecurityToken/index.ts:113](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/SecurityToken/index.ts#L113)*

___

###  permissions

• **permissions**: *[Permissions](permissions.md)*

*Defined in [src/api/entities/SecurityToken/index.ts:116](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/SecurityToken/index.ts#L116)*

___

###  settlements

• **settlements**: *[Settlements](settlements.md)*

*Defined in [src/api/entities/SecurityToken/index.ts:108](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/SecurityToken/index.ts#L108)*

___

###  ticker

• **ticker**: *string*

*Defined in [src/api/entities/SecurityToken/index.ts:104](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/SecurityToken/index.ts#L104)*

ticker of the Security Token

___

###  tokenHolders

• **tokenHolders**: *[TokenHolders](tokenholders.md)*

*Defined in [src/api/entities/SecurityToken/index.ts:109](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/SecurityToken/index.ts#L109)*

___

###  transferRestrictions

• **transferRestrictions**: *[TransferRestrictions](transferrestrictions.md)*

*Defined in [src/api/entities/SecurityToken/index.ts:112](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/SecurityToken/index.ts#L112)*

___

###  uuid

• **uuid**: *string*

*Inherited from [Entity](entity.md).[uuid](entity.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Entity.ts#L46)*

## Methods

###  controllerTransfer

▸ **controllerTransfer**(`args`: [ControllerTransferParams](../interfaces/controllertransferparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/SecurityToken/index.ts:531](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/SecurityToken/index.ts#L531)*

Force a transfer from a given Portfolio to the caller’s default Portfolio

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `controllerTransfer.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [ControllerTransferParams](../interfaces/controllertransferparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  createdAt

▸ **createdAt**(): *Promise‹[EventIdentifier](../interfaces/eventidentifier.md) | null›*

*Defined in [src/api/entities/SecurityToken/index.ts:375](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/SecurityToken/index.ts#L375)*

Retrieve the identifier data (block number, date and event index) of the event that was emitted when the token was created

**`note`** uses the middleware

**`note`** there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

**Returns:** *Promise‹[EventIdentifier](../interfaces/eventidentifier.md) | null›*

___

###  currentFundingRound

▸ **currentFundingRound**(): *Promise‹string›*

*Defined in [src/api/entities/SecurityToken/index.ts:305](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/SecurityToken/index.ts#L305)*

Retrieve the Security Token's funding round

**`note`** can be subscribed to

**Returns:** *Promise‹string›*

▸ **currentFundingRound**(`callback`: [SubCallback](../globals.md#subcallback)‹string›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/SecurityToken/index.ts:306](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/SecurityToken/index.ts#L306)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹string› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  details

▸ **details**(): *Promise‹[SecurityTokenDetails](../interfaces/securitytokendetails.md)›*

*Defined in [src/api/entities/SecurityToken/index.ts:206](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/SecurityToken/index.ts#L206)*

Retrieve the Security Token's data

**`note`** can be subscribed to

**Returns:** *Promise‹[SecurityTokenDetails](../interfaces/securitytokendetails.md)›*

▸ **details**(`callback`: [SubCallback](../globals.md#subcallback)‹[SecurityTokenDetails](../interfaces/securitytokendetails.md)›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/SecurityToken/index.ts:207](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/SecurityToken/index.ts#L207)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[SecurityTokenDetails](../interfaces/securitytokendetails.md)› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  exists

▸ **exists**(): *Promise‹boolean›*

*Overrides [Entity](entity.md).[exists](entity.md#abstract-exists)*

*Defined in [src/api/entities/SecurityToken/index.ts:568](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/SecurityToken/index.ts#L568)*

Determine whether this Security Token exists on chain

**Returns:** *Promise‹boolean›*

___

###  freeze

▸ **freeze**(`args`: void, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

*Defined in [src/api/entities/SecurityToken/index.ts:397](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/SecurityToken/index.ts#L397)*

Freezes transfers and minting of the Security Token

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `freeze.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | void |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

___

###  getIdentifiers

▸ **getIdentifiers**(): *Promise‹[TokenIdentifier](../interfaces/tokenidentifier.md)[]›*

*Defined in [src/api/entities/SecurityToken/index.ts:339](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/SecurityToken/index.ts#L339)*

Retrieve the Security Token's asset identifiers list

**`note`** can be subscribed to

**Returns:** *Promise‹[TokenIdentifier](../interfaces/tokenidentifier.md)[]›*

▸ **getIdentifiers**(`callback?`: [SubCallback](../globals.md#subcallback)‹[TokenIdentifier](../interfaces/tokenidentifier.md)[]›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/SecurityToken/index.ts:340](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/SecurityToken/index.ts#L340)*

**Parameters:**

Name | Type |
------ | ------ |
`callback?` | [SubCallback](../globals.md#subcallback)‹[TokenIdentifier](../interfaces/tokenidentifier.md)[]› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  getOperationHistory

▸ **getOperationHistory**(): *Promise‹[HistoricAgentOperation](../interfaces/historicagentoperation.md)[]›*

*Defined in [src/api/entities/SecurityToken/index.ts:542](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/SecurityToken/index.ts#L542)*

Retrieve this Security Token's Operation History

**`note`** Operations are grouped by the Agent Identity who performed them

**`note`** uses the middleware

**Returns:** *Promise‹[HistoricAgentOperation](../interfaces/historicagentoperation.md)[]›*

___

###  investorCount

▸ **investorCount**(): *Promise‹number›*

*Defined in [src/api/entities/SecurityToken/index.ts:495](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/SecurityToken/index.ts#L495)*

Retrieve the amount of unique investors that hold this Security Token

**`note`** this takes into account the Scope ID of Investor Uniqueness Claims. If an investor holds balances
  of this token in two or more different Identities, but they all have Investor Uniqueness Claims with the same
  Scope ID, then they will only be counted once for the purposes of this result

**`note`** can be subscribed to

**Returns:** *Promise‹number›*

▸ **investorCount**(`callback`: [SubCallback](../globals.md#subcallback)‹number›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/SecurityToken/index.ts:496](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/SecurityToken/index.ts#L496)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹number› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

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

###  isFrozen

▸ **isFrozen**(): *Promise‹boolean›*

*Defined in [src/api/entities/SecurityToken/index.ts:416](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/SecurityToken/index.ts#L416)*

Check whether transfers are frozen for the Security Token

**`note`** can be subscribed to

**Returns:** *Promise‹boolean›*

▸ **isFrozen**(`callback`: [SubCallback](../globals.md#subcallback)‹boolean›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/SecurityToken/index.ts:417](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/SecurityToken/index.ts#L417)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹boolean› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  modify

▸ **modify**(`args`: [ModifyTokenParams](../globals.md#modifytokenparams), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

*Defined in [src/api/entities/SecurityToken/index.ts:197](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/SecurityToken/index.ts#L197)*

Modify some properties of the Security Token

**`throws`** if the passed values result in no changes being made to the token

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `modify.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [ModifyTokenParams](../globals.md#modifytokenparams) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

___

###  modifyPrimaryIssuanceAgent

▸ **modifyPrimaryIssuanceAgent**(`args`: [ModifyPrimaryIssuanceAgentParams](../interfaces/modifyprimaryissuanceagentparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/SecurityToken/index.ts:456](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/SecurityToken/index.ts#L456)*

Assign a new primary issuance agent for the Security Token

**`note`** this may create AuthorizationRequest which have to be accepted by
  the corresponding Account. An Account or Identity can
  fetch its pending Authorization Requests by calling `authorizations.getReceived`

**`deprecated`** in favor of `inviteAgent`

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `modifyPrimaryIssuanceAgent.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [ModifyPrimaryIssuanceAgentParams](../interfaces/modifyprimaryissuanceagentparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  redeem

▸ **redeem**(`args`: [RedeemTokenParams](../interfaces/redeemtokenparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/SecurityToken/index.ts:482](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/SecurityToken/index.ts#L482)*

Redeem (burn) an amount of this Security Token

**`note`** Tokens are removed from the caller's Default Portfolio.

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `redeem.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [RedeemTokenParams](../interfaces/redeemtokenparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  removePrimaryIssuanceAgent

▸ **removePrimaryIssuanceAgent**(`args`: void, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/SecurityToken/index.ts:470](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/SecurityToken/index.ts#L470)*

Remove the primary issuance agent of the Security Token

**`note`** if primary issuance agent is not set, Security Token owner would be used by default

**`deprecated`** 

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `removePrimaryIssuanceAgent.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | void |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  toJson

▸ **toJson**(): *string*

*Overrides [Entity](entity.md).[toJson](entity.md#abstract-tojson)*

*Defined in [src/api/entities/SecurityToken/index.ts:581](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/SecurityToken/index.ts#L581)*

Return the Token's ticker

**Returns:** *string*

___

###  transferOwnership

▸ **transferOwnership**(`args`: [TransferTokenOwnershipParams](../interfaces/transfertokenownershipparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

*Defined in [src/api/entities/SecurityToken/index.ts:185](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/SecurityToken/index.ts#L185)*

Transfer ownership of the Security Token to another Identity. This generates an authorization request that must be accepted
  by the destinatary

**`note`** this will create [Authorization Requests](authorizationrequest.md) which have to be accepted by
  the corresponding [Accounts](account.md) and/or [Identities](identity.md). An Account or Identity can
  fetch its pending Authorization Requests by calling `authorizations.getReceived`

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `transferOwnership.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [TransferTokenOwnershipParams](../interfaces/transfertokenownershipparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

___

###  unfreeze

▸ **unfreeze**(`args`: void, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

*Defined in [src/api/entities/SecurityToken/index.ts:407](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/SecurityToken/index.ts#L407)*

Unfreeze transfers and minting of the Security Token

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `unfreeze.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | void |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

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
