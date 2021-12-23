# Interface: KeyringPair

## Hierarchy

* IKeyringPair

  ↳ **KeyringPair**

## Index

### Properties

* [address](keyringpair.md#address)
* [addressRaw](keyringpair.md#addressraw)
* [isLocked](keyringpair.md#islocked)
* [publicKey](keyringpair.md#publickey)
* [sign](keyringpair.md#sign)

## Properties

###  address

• **address**: *string*

*Inherited from [KeyringPair](keyringpair.md).[address](keyringpair.md#address)*

Defined in node_modules/@polkadot/types/types/interfaces.d.ts:14

___

###  addressRaw

• **addressRaw**: *Uint8Array*

*Inherited from [KeyringPair](keyringpair.md).[addressRaw](keyringpair.md#addressraw)*

Defined in node_modules/@polkadot/types/types/interfaces.d.ts:15

___

###  isLocked

• **isLocked**: *boolean*

*Defined in [src/types/index.ts:568](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L568)*

___

###  publicKey

• **publicKey**: *Uint8Array*

*Inherited from [KeyringPair](keyringpair.md).[publicKey](keyringpair.md#publickey)*

Defined in node_modules/@polkadot/types/types/interfaces.d.ts:16

___

###  sign

• **sign**: *function*

*Inherited from [KeyringPair](keyringpair.md).[sign](keyringpair.md#sign)*

Defined in node_modules/@polkadot/types/types/interfaces.d.ts:17

#### Type declaration:

▸ (`data`: Uint8Array, `options?`: SignOptions): *Uint8Array*

**Parameters:**

Name | Type |
------ | ------ |
`data` | Uint8Array |
`options?` | SignOptions |
