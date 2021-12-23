# Interface: TickerReservationDetails

## Hierarchy

* **TickerReservationDetails**

## Index

### Properties

* [expiryDate](tickerreservationdetails.md#expirydate)
* [owner](tickerreservationdetails.md#owner)
* [status](tickerreservationdetails.md#status)

## Properties

###  expiryDate

• **expiryDate**: *Date | null*

*Defined in [src/api/entities/TickerReservation/types.ts:26](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/TickerReservation/types.ts#L26)*

date at which the reservation expires, null if it never expires (permanent reservation or token already launched)

___

###  owner

• **owner**: *[Identity](../classes/identity.md) | null*

*Defined in [src/api/entities/TickerReservation/types.ts:22](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/TickerReservation/types.ts#L22)*

identity ID of the owner of the ticker, null if it hasn't been reserved

___

###  status

• **status**: *[TickerReservationStatus](../enums/tickerreservationstatus.md)*

*Defined in [src/api/entities/TickerReservation/types.ts:27](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/TickerReservation/types.ts#L27)*
