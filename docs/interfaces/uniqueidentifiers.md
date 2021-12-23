# Interface: UniqueIdentifiers

Properties that uniquely identify an Identity
Properties that uniquely identify a TickerReservation
Properties that uniquely identify a Security Token

## Hierarchy

* **UniqueIdentifiers**

## Index

### Properties

* [address](uniqueidentifiers.md#address)
* [authId](uniqueidentifiers.md#authid)
* [did](uniqueidentifiers.md#did)
* [id](uniqueidentifiers.md#id)
* [ticker](uniqueidentifiers.md#ticker)
* [type](uniqueidentifiers.md#optional-type)

## Properties

###  address

• **address**: *string*

*Defined in [src/api/entities/Account.ts:44](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Account.ts#L44)*

___

###  authId

• **authId**: *BigNumber*

*Defined in [src/api/entities/AuthorizationRequest.ts:22](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/AuthorizationRequest.ts#L22)*

___

###  did

• **did**: *string*

*Defined in [src/api/entities/Identity/index.ts:86](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Identity/index.ts#L86)*

*Defined in [src/api/entities/DefaultTrustedClaimIssuer.ts:10](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/DefaultTrustedClaimIssuer.ts#L10)*

*Defined in [src/api/entities/Portfolio/index.ts:42](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Portfolio/index.ts#L42)*

*Defined in [src/api/entities/DefaultPortfolio.ts:4](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/DefaultPortfolio.ts#L4)*

*Defined in [src/api/entities/NumberedPortfolio.ts:24](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/NumberedPortfolio.ts#L24)*

___

###  id

• **id**: *BigNumber*

*Defined in [src/api/entities/Sto/index.ts:35](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Sto/index.ts#L35)*

*Defined in [src/api/entities/Venue/index.ts:31](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Venue/index.ts#L31)*

*Defined in [src/api/entities/Instruction/index.ts:54](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Instruction/index.ts#L54)*

*Defined in [src/api/entities/Portfolio/index.ts:43](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Portfolio/index.ts#L43)*

*Defined in [src/api/entities/NumberedPortfolio.ts:25](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/NumberedPortfolio.ts#L25)*

*Defined in [src/api/entities/Checkpoint.ts:19](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Checkpoint.ts#L19)*

*Defined in [src/api/entities/CheckpointSchedule/index.ts:16](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/CheckpointSchedule/index.ts#L16)*

*Defined in [src/api/entities/PermissionGroup.ts:8](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/PermissionGroup.ts#L8)*

*Defined in [src/api/entities/CorporateAction/index.ts:31](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/CorporateAction/index.ts#L31)*

*Defined in [src/api/entities/CustomPermissionGroup.ts:27](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/CustomPermissionGroup.ts#L27)*

___

###  ticker

• **ticker**: *string*

*Defined in [src/api/entities/TickerReservation/index.ts:28](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/TickerReservation/index.ts#L28)*

*Defined in [src/api/entities/SecurityToken/index.ts:79](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/SecurityToken/index.ts#L79)*

*Defined in [src/api/entities/DefaultTrustedClaimIssuer.ts:11](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/DefaultTrustedClaimIssuer.ts#L11)*

*Defined in [src/api/entities/Sto/index.ts:36](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Sto/index.ts#L36)*

*Defined in [src/api/entities/Checkpoint.ts:20](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Checkpoint.ts#L20)*

*Defined in [src/api/entities/CheckpointSchedule/index.ts:17](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/CheckpointSchedule/index.ts#L17)*

*Defined in [src/api/entities/PermissionGroup.ts:7](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/PermissionGroup.ts#L7)*

*Defined in [src/api/entities/KnownPermissionGroup.ts:13](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/KnownPermissionGroup.ts#L13)*

*Defined in [src/api/entities/CorporateAction/index.ts:32](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/CorporateAction/index.ts#L32)*

*Defined in [src/api/entities/CustomPermissionGroup.ts:28](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/CustomPermissionGroup.ts#L28)*

ticker of the security token

___

### `Optional` type

• **type**? : *[PermissionGroupType](../enums/permissiongrouptype.md)*

*Defined in [src/api/entities/PermissionGroup.ts:9](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/PermissionGroup.ts#L9)*

*Defined in [src/api/entities/KnownPermissionGroup.ts:12](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/KnownPermissionGroup.ts#L12)*
