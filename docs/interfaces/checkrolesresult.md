# Interface: CheckRolesResult

Result of a `checkRoles` call

## Hierarchy

* **CheckRolesResult**

## Index

### Properties

* [message](checkrolesresult.md#optional-message)
* [missingRoles](checkrolesresult.md#optional-missingroles)
* [result](checkrolesresult.md#result)

## Properties

### `Optional` message

• **message**? : *undefined | string*

*Defined in [src/types/index.ts:975](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/types/index.ts#L975)*

optional message explaining the reason for failure in special cases

___

### `Optional` missingRoles

• **missingRoles**? : *[Role](../globals.md#role)[]*

*Defined in [src/types/index.ts:967](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/types/index.ts#L967)*

required roles which the Identity *DOESN'T* have. Only present if `result` is `false`

___

###  result

• **result**: *boolean*

*Defined in [src/types/index.ts:971](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/types/index.ts#L971)*

whether the signer posseses all the required roles or not
