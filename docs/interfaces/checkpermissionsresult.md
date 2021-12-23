# Interface: CheckPermissionsResult ‹**Type**›

Result of a `checkPermissions` call. If `Type` is `Account`, represents whether the Account
  has all the necessary secondary key Permissions. If `Type` is `Identity`, represents whether the
  Identity has all the necessary external agent Permissions

## Type parameters

▪ **Type**: *[SignerType](../enums/signertype.md)*

## Hierarchy

* **CheckPermissionsResult**

## Index

### Properties

* [message](checkpermissionsresult.md#optional-message)
* [missingPermissions](checkpermissionsresult.md#optional-missingpermissions)
* [result](checkpermissionsresult.md#result)

## Properties

### `Optional` message

• **message**? : *undefined | string*

*Defined in [src/types/index.ts:995](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/types/index.ts#L995)*

optional message explaining the reason for failure in special cases

___

### `Optional` missingPermissions

• **missingPermissions**? : *Type extends Account ? SimplePermissions : TxTag[] | null*

*Defined in [src/types/index.ts:987](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/types/index.ts#L987)*

required permissions which the signer *DOESN'T* have. Only present if `result` is `false`

___

###  result

• **result**: *boolean*

*Defined in [src/types/index.ts:991](https://github.com/PolymathNetwork/polymesh-sdk/blob/cfab557b/src/types/index.ts#L991)*

whether the signer complies with the required permissions or not
