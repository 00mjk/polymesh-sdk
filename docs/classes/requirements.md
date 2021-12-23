# Class: Requirements

Handles all Security Token Compliance Requirements related functionality

## Hierarchy

* Namespace‹[SecurityToken](securitytoken.md)›

  ↳ **Requirements**

## Index

### Properties

* [context](requirements.md#protected-context)
* [parent](requirements.md#protected-parent)

### Methods

* [add](requirements.md#add)
* [arePaused](requirements.md#arepaused)
* [checkSettle](requirements.md#checksettle)
* [get](requirements.md#get)
* [pause](requirements.md#pause)
* [remove](requirements.md#remove)
* [reset](requirements.md#reset)
* [set](requirements.md#set)
* [unpause](requirements.md#unpause)

## Properties

### `Protected` context

• **context**: *[Context](context.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:11](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/Namespace.ts#L11)*

___

### `Protected` parent

• **parent**: *[SecurityToken](securitytoken.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:9](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/Namespace.ts#L9)*

## Methods

###  add

▸ **add**(`args`: [AddAssetRequirementParams](../interfaces/addassetrequirementparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

*Defined in [src/api/entities/SecurityToken/Compliance/Requirements.ts:93](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/SecurityToken/Compliance/Requirements.ts#L93)*

Add a new compliance requirement to the the Security Token. This doesn't modify existing requirements

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `add.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [AddAssetRequirementParams](../interfaces/addassetrequirementparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

___

###  arePaused

▸ **arePaused**(): *Promise‹boolean›*

*Defined in [src/api/entities/SecurityToken/Compliance/Requirements.ts:271](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/SecurityToken/Compliance/Requirements.ts#L271)*

Check whether asset compliance requirements are paused or not

**Returns:** *Promise‹boolean›*

___

###  checkSettle

▸ **checkSettle**(`args`: object): *Promise‹Compliance›*

*Defined in [src/api/entities/SecurityToken/Compliance/Requirements.ts:242](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/SecurityToken/Compliance/Requirements.ts#L242)*

Check whether the sender and receiver Identities in a transfer comply with all the requirements of this asset

**`note`** this does not take balances into account

**`deprecated`** in favor of `settlements.canTransfer`

**Parameters:**

▪ **args**: *object*

Name | Type | Description |
------ | ------ | ------ |
`from?` | string &#124; [Identity](identity.md) | sender Identity (optional, defaults to the current Identity) |
`to` | string &#124; [Identity](identity.md) | receiver Identity  |

**Returns:** *Promise‹Compliance›*

___

###  get

▸ **get**(): *Promise‹[ComplianceRequirements](../interfaces/compliancerequirements.md)›*

*Defined in [src/api/entities/SecurityToken/Compliance/Requirements.ts:125](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/SecurityToken/Compliance/Requirements.ts#L125)*

Retrieve all of the Security Token's compliance requirements, together with the Default Trusted Claim Issuers

**`note`** can be subscribed to

**Returns:** *Promise‹[ComplianceRequirements](../interfaces/compliancerequirements.md)›*

▸ **get**(`callback`: [SubCallback](../globals.md#subcallback)‹[ComplianceRequirements](../interfaces/compliancerequirements.md)›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/SecurityToken/Compliance/Requirements.ts:126](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/SecurityToken/Compliance/Requirements.ts#L126)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[ComplianceRequirements](../interfaces/compliancerequirements.md)› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  pause

▸ **pause**(`opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

*Defined in [src/api/entities/SecurityToken/Compliance/Requirements.ts:218](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/SecurityToken/Compliance/Requirements.ts#L218)*

Pause all the Security Token's requirements. This means that all transfers will be allowed until requirements are unpaused

**`note`** this method is of type [NoArgsProcedureMethod](../interfaces/noargsproceduremethod.md), which means you can call `pause.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

___

###  remove

▸ **remove**(`args`: [RemoveAssetRequirementParams](../interfaces/removeassetrequirementparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

*Defined in [src/api/entities/SecurityToken/Compliance/Requirements.ts:103](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/SecurityToken/Compliance/Requirements.ts#L103)*

Remove an existing compliance requirement from the Security Token

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `remove.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [RemoveAssetRequirementParams](../interfaces/removeassetrequirementparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

___

###  reset

▸ **reset**(`opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

*Defined in [src/api/entities/SecurityToken/Compliance/Requirements.ts:208](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/SecurityToken/Compliance/Requirements.ts#L208)*

Detele all the current requirements for the Security Token.

**`note`** this method is of type [NoArgsProcedureMethod](../interfaces/noargsproceduremethod.md), which means you can call `reset.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

___

###  set

▸ **set**(`args`: [SetAssetRequirementsParams](../interfaces/setassetrequirementsparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

*Defined in [src/api/entities/SecurityToken/Compliance/Requirements.ts:116](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/SecurityToken/Compliance/Requirements.ts#L116)*

Configure asset compliance requirements for the Security Token. This operation will replace all existing requirements with a new requirement set

**`example`** Say A, B, C, D and E are requirements and we arrange them as `[[A, B], [C, D], [E]]`.
For a transfer to succeed, it must either comply with A AND B, C AND D, OR E.

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call `set.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [SetAssetRequirementsParams](../interfaces/setassetrequirementsparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

___

###  unpause

▸ **unpause**(`opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*

*Defined in [src/api/entities/SecurityToken/Compliance/Requirements.ts:228](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/api/entities/SecurityToken/Compliance/Requirements.ts#L228)*

Un-pause all the Security Token's current requirements

**`note`** this method is of type [NoArgsProcedureMethod](../interfaces/noargsproceduremethod.md), which means you can call `unpause.checkAuthorization`
  on it to see whether the Current Account has the required permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[SecurityToken](securitytoken.md)››*
