# Interface: HistoricAgentOperation

Events triggered by transactions performed by an Agent Identity, related to the Token's configuration
  For example: changing compliance requirements, inviting/removing agent Identities, freezing/unfreezing transfers

Token transfers (settlements or movements between Portfolios) do not count as Operations

## Hierarchy

* **HistoricAgentOperation**

## Index

### Properties

* [history](historicagentoperation.md#history)
* [identity](historicagentoperation.md#identity)

## Properties

###  history

• **history**: *[EventIdentifier](eventidentifier.md)[]*

*Defined in [src/types/index.ts:1213](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L1213)*

list of Token Operation Events that were triggered by the Agent Identity

___

###  identity

• **identity**: *[Identity](../classes/identity.md)*

*Defined in [src/types/index.ts:1209](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L1209)*

Agent Identity that performed the operations
