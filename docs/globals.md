# @polymathnetwork/polymesh-sdk

## Index

### Enumerations

* [AffirmationStatus](enums/affirmationstatus.md)
* [AuthorizationType](enums/authorizationtype.md)
* [CalendarUnit](enums/calendarunit.md)
* [ClaimType](enums/claimtype.md)
* [ConditionTarget](enums/conditiontarget.md)
* [ConditionType](enums/conditiontype.md)
* [CorporateActionKind](enums/corporateactionkind.md)
* [CountryCode](enums/countrycode.md)
* [ErrorCode](enums/errorcode.md)
* [InstructionStatus](enums/instructionstatus.md)
* [InstructionType](enums/instructiontype.md)
* [KnownTokenType](enums/knowntokentype.md)
* [PermissionGroupType](enums/permissiongrouptype.md)
* [PermissionType](enums/permissiontype.md)
* [ProposalStage](enums/proposalstage.md)
* [RoleType](enums/roletype.md)
* [ScopeType](enums/scopetype.md)
* [SignerType](enums/signertype.md)
* [StoBalanceStatus](enums/stobalancestatus.md)
* [StoSaleStatus](enums/stosalestatus.md)
* [StoTimingStatus](enums/stotimingstatus.md)
* [TargetTreatment](enums/targettreatment.md)
* [TickerReservationStatus](enums/tickerreservationstatus.md)
* [TokenIdentifierType](enums/tokenidentifiertype.md)
* [TransactionArgumentType](enums/transactionargumenttype.md)
* [TransactionQueueStatus](enums/transactionqueuestatus.md)
* [TransactionStatus](enums/transactionstatus.md)
* [TransferError](enums/transfererror.md)
* [TransferRestrictionType](enums/transferrestrictiontype.md)
* [TransferStatus](enums/transferstatus.md)
* [TxGroup](enums/txgroup.md)
* [VenueType](enums/venuetype.md)

### Classes

* [Account](classes/account.md)
* [AuthorizationRequest](classes/authorizationrequest.md)
* [Authorizations](classes/authorizations.md)
* [Checkpoint](classes/checkpoint.md)
* [CheckpointSchedule](classes/checkpointschedule.md)
* [Checkpoints](classes/checkpoints.md)
* [Claims](classes/claims.md)
* [Compliance](classes/compliance.md)
* [Context](classes/context.md)
* [CorporateAction](classes/corporateaction.md)
* [CorporateActions](classes/corporateactions.md)
* [Count](classes/count.md)
* [CustomPermissionGroup](classes/custompermissiongroup.md)
* [DefaultPortfolio](classes/defaultportfolio.md)
* [DefaultTrustedClaimIssuer](classes/defaulttrustedclaimissuer.md)
* [Distributions](classes/distributions.md)
* [DividendDistribution](classes/dividenddistribution.md)
* [Documents](classes/documents.md)
* [Entity](classes/entity.md)
* [Identity](classes/identity.md)
* [IdentityAuthorizations](classes/identityauthorizations.md)
* [Instruction](classes/instruction.md)
* [Issuance](classes/issuance.md)
* [KnownPermissionGroup](classes/knownpermissiongroup.md)
* [Middleware](classes/middleware.md)
* [NumberedPortfolio](classes/numberedportfolio.md)
* [Offerings](classes/offerings.md)
* [Percentage](classes/percentage.md)
* [PermissionGroup](classes/permissiongroup.md)
* [Permissions](classes/permissions.md)
* [Polymesh](classes/polymesh.md)
* [PolymeshError](classes/polymesherror.md)
* [PolymeshTransaction](classes/polymeshtransaction.md)
* [PolymeshTransactionBase](classes/polymeshtransactionbase.md)
* [PolymeshTransactionBatch](classes/polymeshtransactionbatch.md)
* [Portfolio](classes/portfolio.md)
* [Portfolios](classes/portfolios.md)
* [Requirements](classes/requirements.md)
* [Schedules](classes/schedules.md)
* [SecurityToken](classes/securitytoken.md)
* [Settlements](classes/settlements.md)
* [Sto](classes/sto.md)
* [TickerReservation](classes/tickerreservation.md)
* [TokenHolders](classes/tokenholders.md)
* [TokenPermissions](classes/tokenpermissions.md)
* [TransactionQueue](classes/transactionqueue.md)
* [TransferRestrictionBase](classes/transferrestrictionbase.md)
* [TransferRestrictions](classes/transferrestrictions.md)
* [TrustedClaimIssuers](classes/trustedclaimissuers.md)
* [Venue](classes/venue.md)

### Interfaces

* [ActiveTransferRestrictions](interfaces/activetransferrestrictions.md)
* [AddBatchTransactionOpts](interfaces/addbatchtransactionopts.md)
* [AddClaimsParams](interfaces/addclaimsparams.md)
* [AddInstructionParams](interfaces/addinstructionparams.md)
* [AddInstructionsParams](interfaces/addinstructionsparams.md)
* [AddInvestorUniquenessClaimParams](interfaces/addinvestoruniquenessclaimparams.md)
* [AddPairBaseParams](interfaces/addpairbaseparams.md)
* [AddTransactionOpts](interfaces/addtransactionopts.md)
* [AddTransactionOptsBase](interfaces/addtransactionoptsbase.md)
* [AgentWithGroup](interfaces/agentwithgroup.md)
* [ArrayTransactionArgument](interfaces/arraytransactionargument.md)
* [Balance](interfaces/balance.md)
* [CalendarPeriod](interfaces/calendarperiod.md)
* [CddProviderRole](interfaces/cddproviderrole.md)
* [CheckpointWithData](interfaces/checkpointwithdata.md)
* [ClaimClassicTickerParams](interfaces/claimclassictickerparams.md)
* [ClaimData](interfaces/claimdata.md)
* [ClaimScope](interfaces/claimscope.md)
* [ClaimTarget](interfaces/claimtarget.md)
* [ComplexTransactionArgument](interfaces/complextransactionargument.md)
* [ConditionCompliance](interfaces/conditioncompliance.md)
* [ConnectParamsBase](interfaces/connectparamsbase.md)
* [ConstructorParams](interfaces/constructorparams.md)
* [ConsumeParams](interfaces/consumeparams.md)
* [ControllerTransferParams](interfaces/controllertransferparams.md)
* [CorporateActionDefaults](interfaces/corporateactiondefaults.md)
* [CorporateActionTargets](interfaces/corporateactiontargets.md)
* [CountTransferRestriction](interfaces/counttransferrestriction.md)
* [CountTransferRestrictionInput](interfaces/counttransferrestrictioninput.md)
* [CreateCheckpointScheduleParams](interfaces/createcheckpointscheduleparams.md)
* [CreateGroupParams](interfaces/creategroupparams.md)
* [CreateSecurityTokenParams](interfaces/createsecuritytokenparams.md)
* [CreateVenueParams](interfaces/createvenueparams.md)
* [DeletePortfolioParams](interfaces/deleteportfolioparams.md)
* [DistributionParticipant](interfaces/distributionparticipant.md)
* [DistributionPayment](interfaces/distributionpayment.md)
* [DistributionWithDetails](interfaces/distributionwithdetails.md)
* [DividendDistributionDetails](interfaces/dividenddistributiondetails.md)
* [DividendDistributionParams](interfaces/dividenddistributionparams.md)
* [EditClaimsParams](interfaces/editclaimsparams.md)
* [EventIdentifier](interfaces/eventidentifier.md)
* [ExtrinsicData](interfaces/extrinsicdata.md)
* [Fees](interfaces/fees.md)
* [FeesBreakdown](interfaces/feesbreakdown.md)
* [GroupedInstructions](interfaces/groupedinstructions.md)
* [HistoricAgentOperation](interfaces/historicagentoperation.md)
* [HistoricSettlement](interfaces/historicsettlement.md)
* [HumanReadable](interfaces/humanreadable.md)
* [IdentityBalance](interfaces/identitybalance.md)
* [IdentityRole](interfaces/identityrole.md)
* [IdentityWithClaims](interfaces/identitywithclaims.md)
* [InstructionAffirmation](interfaces/instructionaffirmation.md)
* [InvestInStoParams](interfaces/investinstoparams.md)
* [Investment](interfaces/investment.md)
* [InviteAccountParams](interfaces/inviteaccountparams.md)
* [InviteExternalAgentParams](interfaces/inviteexternalagentparams.md)
* [IssueTokensParams](interfaces/issuetokensparams.md)
* [KeyringPair](interfaces/keyringpair.md)
* [LeaveIdentityParams](interfaces/leaveidentityparams.md)
* [Leg](interfaces/leg.md)
* [LinkCaDocsParams](interfaces/linkcadocsparams.md)
* [MiddlewareConfig](interfaces/middlewareconfig.md)
* [ModifyCorporateActionsAgentParams](interfaces/modifycorporateactionsagentparams.md)
* [ModifyInstructionAffirmationParams](interfaces/modifyinstructionaffirmationparams.md)
* [ModifyPrimaryIssuanceAgentParams](interfaces/modifyprimaryissuanceagentparams.md)
* [ModifySignerPermissionsParams](interfaces/modifysignerpermissionsparams.md)
* [ModifyTokenTrustedClaimIssuersAddSetParams](interfaces/modifytokentrustedclaimissuersaddsetparams.md)
* [ModifyTokenTrustedClaimIssuersRemoveParams](interfaces/modifytokentrustedclaimissuersremoveparams.md)
* [MoveFundsParams](interfaces/movefundsparams.md)
* [NetworkProperties](interfaces/networkproperties.md)
* [PaginationOptions](interfaces/paginationoptions.md)
* [PayDividendsParams](interfaces/paydividendsparams.md)
* [PercentageTransferRestriction](interfaces/percentagetransferrestriction.md)
* [PercentageTransferRestrictionInput](interfaces/percentagetransferrestrictioninput.md)
* [PlainTransactionArgument](interfaces/plaintransactionargument.md)
* [PortfolioBalance](interfaces/portfoliobalance.md)
* [PortfolioCustodianRole](interfaces/portfoliocustodianrole.md)
* [PortfolioMovement](interfaces/portfoliomovement.md)
* [ProcedureAuthorizationStatus](interfaces/procedureauthorizationstatus.md)
* [ProcedureMethod](interfaces/proceduremethod.md)
* [ProcedureOpts](interfaces/procedureopts.md)
* [ProposalDetails](interfaces/proposaldetails.md)
* [ProposalTimeFrames](interfaces/proposaltimeframes.md)
* [ProposalVote](interfaces/proposalvote.md)
* [RedeemTokenParams](interfaces/redeemtokenparams.md)
* [RegisterIdentityParams](interfaces/registeridentityparams.md)
* [RemoveCheckpointScheduleParams](interfaces/removecheckpointscheduleparams.md)
* [RemoveCorporateActionParams](interfaces/removecorporateactionparams.md)
* [RemoveExternalAgentParams](interfaces/removeexternalagentparams.md)
* [RemoveSecondaryKeysParams](interfaces/removesecondarykeysparams.md)
* [RenamePortfolioParams](interfaces/renameportfolioparams.md)
* [Requirement](interfaces/requirement.md)
* [RequirementCompliance](interfaces/requirementcompliance.md)
* [ReserveTickerParams](interfaces/reservetickerparams.md)
* [ResultSet](interfaces/resultset.md)
* [RevokeClaimsParams](interfaces/revokeclaimsparams.md)
* [ScheduleDetails](interfaces/scheduledetails.md)
* [ScheduleWithDetails](interfaces/schedulewithdetails.md)
* [Scope](interfaces/scope.md)
* [SecondaryKey](interfaces/secondarykey.md)
* [SectionPermissions](interfaces/sectionpermissions.md)
* [SecurityTokenDetails](interfaces/securitytokendetails.md)
* [SetAssetRequirementsParams](interfaces/setassetrequirementsparams.md)
* [SetCountTransferRestrictionsParams](interfaces/setcounttransferrestrictionsparams.md)
* [SetCustodianParams](interfaces/setcustodianparams.md)
* [SetGroupPermissionsParams](interfaces/setgrouppermissionsparams.md)
* [SetPercentageTransferRestrictionsParams](interfaces/setpercentagetransferrestrictionsparams.md)
* [SetPermissionGroupParams](interfaces/setpermissiongroupparams.md)
* [SetTokenDocumentsParams](interfaces/settokendocumentsparams.md)
* [SettlementLeg](interfaces/settlementleg.md)
* [SignerValue](interfaces/signervalue.md)
* [SimpleEnumTransactionArgument](interfaces/simpleenumtransactionargument.md)
* [SimplePermissions](interfaces/simplepermissions.md)
* [StoDetails](interfaces/stodetails.md)
* [StoStatus](interfaces/stostatus.md)
* [StoTier](interfaces/stotier.md)
* [StoWithDetails](interfaces/stowithdetails.md)
* [Subsidy](interfaces/subsidy.md)
* [TaxWithholding](interfaces/taxwithholding.md)
* [ThirdPartyFees](interfaces/thirdpartyfees.md)
* [TickerOwnerRole](interfaces/tickerownerrole.md)
* [TickerReservationDetails](interfaces/tickerreservationdetails.md)
* [Tier](interfaces/tier.md)
* [ToggleFreezeSecondaryKeysParams](interfaces/togglefreezesecondarykeysparams.md)
* [ToggleFreezeStoParams](interfaces/togglefreezestoparams.md)
* [ToggleFreezeTransfersParams](interfaces/togglefreezetransfersparams.md)
* [TogglePauseRequirementsParams](interfaces/togglepauserequirementsparams.md)
* [TokenBase](interfaces/tokenbase.md)
* [TokenDocument](interfaces/tokendocument.md)
* [TokenIdentifier](interfaces/tokenidentifier.md)
* [TokenWithGroup](interfaces/tokenwithgroup.md)
* [TransactionPermissions](interfaces/transactionpermissions.md)
* [TransactionsParams](interfaces/transactionsparams.md)
* [TransferBreakdown](interfaces/transferbreakdown.md)
* [TransferPolyxParams](interfaces/transferpolyxparams.md)
* [TransferRestriction](interfaces/transferrestriction.md)
* [TransferRestrictionInputBase](interfaces/transferrestrictioninputbase.md)
* [TransferRestrictionResult](interfaces/transferrestrictionresult.md)
* [TransferTickerOwnershipParams](interfaces/transfertickerownershipparams.md)
* [TransferTokenOwnershipParams](interfaces/transfertokenownershipparams.md)
* [TrustedClaimIssuer](interfaces/trustedclaimissuer.md)
* [TxGroupParams](interfaces/txgroupparams.md)
* [UiKeyring](interfaces/uikeyring.md)
* [UniqueIdentifiers](interfaces/uniqueidentifiers.md)
* [VenueDetails](interfaces/venuedetails.md)
* [VenueOwnerRole](interfaces/venueownerrole.md)
* [WaivePermissionsParams](interfaces/waivepermissionsparams.md)

### Type aliases

* [AccountBalance](globals.md#accountbalance)
* [AddCountTransferRestrictionParams](globals.md#addcounttransferrestrictionparams)
* [AddPairParams](globals.md#addpairparams)
* [AddPercentageTransferRestrictionParams](globals.md#addpercentagetransferrestrictionparams)
* [AddRestrictionParams](globals.md#addrestrictionparams)
* [ArgsType](globals.md#argstype)
* [Authorization](globals.md#authorization)
* [CddClaim](globals.md#cddclaim)
* [CheckpointScheduleParams](globals.md#checkpointscheduleparams)
* [Claim](globals.md#claim)
* [CommonKeyring](globals.md#commonkeyring)
* [Condition](globals.md#condition)
* [ConditionBase](globals.md#conditionbase)
* [ConfigureDividendDistributionParams](globals.md#configuredividenddistributionparams)
* [Ensured](globals.md#ensured)
* [ExternalAgentCondition](globals.md#externalagentcondition)
* [GetReturnType](globals.md#getreturntype)
* [GroupPermissions](globals.md#grouppermissions)
* [HumanReadableType](globals.md#humanreadabletype)
* [IdentityCondition](globals.md#identitycondition)
* [InputTargets](globals.md#inputtargets)
* [InputTaxWithholding](globals.md#inputtaxwithholding)
* [InstructionDetails](globals.md#instructiondetails)
* [InstructionStatusResult](globals.md#instructionstatusresult)
* [InvestorUniquenessClaim](globals.md#investoruniquenessclaim)
* [InvestorUniquenessV2Claim](globals.md#investoruniquenessv2claim)
* [ModifyCaDefaultsParams](globals.md#modifycadefaultsparams)
* [ModifyClaimsParams](globals.md#modifyclaimsparams)
* [ModifyStoTimesParams](globals.md#modifystotimesparams)
* [ModifyTokenParams](globals.md#modifytokenparams)
* [ModifyVenueParams](globals.md#modifyvenueparams)
* [MultiClaimCondition](globals.md#multiclaimcondition)
* [Mutable](globals.md#mutable)
* [NextKey](globals.md#nextkey)
* [PermissionsLike](globals.md#permissionslike)
* [PortfolioLike](globals.md#portfoliolike)
* [ProcedureFunc](globals.md#procedurefunc)
* [QueryReturnType](globals.md#queryreturntype)
* [Role](globals.md#role)
* [ScopedClaim](globals.md#scopedclaim)
* [SetRestrictionsParams](globals.md#setrestrictionsparams)
* [SetTransferRestrictionsParams](globals.md#settransferrestrictionsparams)
* [Signer](globals.md#signer)
* [SingleClaimCondition](globals.md#singleclaimcondition)
* [SubCallback](globals.md#subcallback)
* [TransactionArgument](globals.md#transactionargument)
* [UnionOfProcedureFuncs](globals.md#unionofprocedurefuncs)
* [UnscopedClaim](globals.md#unscopedclaim)
* [UnsubCallback](globals.md#unsubcallback)

### Variables

* [executedMessage](globals.md#const-executedmessage)
* [notExistsMessage](globals.md#const-notexistsmessage)

### Functions

* [areSameClaimIssuers](globals.md#const-aresameclaimissuers)
* [areSameClaims](globals.md#const-aresameclaims)
* [areSameTargets](globals.md#const-aresametargets)
* [convertArgsToRaw](globals.md#const-convertargstoraw)
* [createProcedureMethod](globals.md#createproceduremethod)
* [findClaimsByOtherIssuers](globals.md#const-findclaimsbyotherissuers)
* [findPositiveBalanceIuClaims](globals.md#const-findpositivebalanceiuclaims)
* [tickerToDid](globals.md#tickertodid)
* [toHumanReadable](globals.md#tohumanreadable)
* [tuple](globals.md#const-tuple)
* [txGroupToTxTags](globals.md#txgrouptotxtags)

### Object literals

* [defaultMessages](globals.md#const-defaultmessages)

## Type aliases

###  AccountBalance

Ƭ **AccountBalance**: *[Balance](interfaces/balance.md)*

*Defined in [src/types/index.ts:586](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L586)*

___

###  AddCountTransferRestrictionParams

Ƭ **AddCountTransferRestrictionParams**: *[CountTransferRestrictionInput](interfaces/counttransferrestrictioninput.md) & object*

*Defined in [src/api/procedures/addTransferRestriction.ts:23](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/procedures/addTransferRestriction.ts#L23)*

___

###  AddPairParams

Ƭ **AddPairParams**: *object*

*Defined in [src/base/Context.ts:91](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/base/Context.ts#L91)*

#### Type declaration:

* **accountMnemonic**? : *undefined | string*

* **accountSeed**? : *undefined | string*

* **accountUri**? : *undefined | string*

* **pair**? : *[KeyringPair](interfaces/keyringpair.md)*

___

###  AddPercentageTransferRestrictionParams

Ƭ **AddPercentageTransferRestrictionParams**: *[PercentageTransferRestrictionInput](interfaces/percentagetransferrestrictioninput.md) & object*

*Defined in [src/api/procedures/addTransferRestriction.ts:27](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/procedures/addTransferRestriction.ts#L27)*

___

###  AddRestrictionParams

Ƭ **AddRestrictionParams**: *Omit‹T extends Count ? AddCountTransferRestrictionParams : AddPercentageTransferRestrictionParams, "type"›*

*Defined in [src/api/entities/SecurityToken/TransferRestrictions/TransferRestrictionBase.ts:32](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/SecurityToken/TransferRestrictions/TransferRestrictionBase.ts#L32)*

___

###  ArgsType

Ƭ **ArgsType**: *T extends function ? A : never*

*Defined in [src/types/utils/index.ts:24](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/utils/index.ts#L24)*

Less strict version of Parameters<T>

___

###  Authorization

Ƭ **Authorization**: *object | object | object | object | object | object*

*Defined in [src/types/index.ts:873](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L873)*

Authorization request data corresponding to type

___

###  CddClaim

Ƭ **CddClaim**: *object*

*Defined in [src/types/index.ts:255](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L255)*

#### Type declaration:

* **id**: *string*

* **type**: *[CustomerDueDiligence](enums/claimtype.md#customerduediligence)*

___

###  CheckpointScheduleParams

Ƭ **CheckpointScheduleParams**: *Omit‹UniqueIdentifiers & Params, "ticker"›*

*Defined in [src/api/entities/CheckpointSchedule/types.ts:8](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/CheckpointSchedule/types.ts#L8)*

___

###  Claim

Ƭ **Claim**: *[ScopedClaim](globals.md#scopedclaim) | [UnscopedClaim](globals.md#unscopedclaim)*

*Defined in [src/types/index.ts:286](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L286)*

___

###  CommonKeyring

Ƭ **CommonKeyring**: *Pick‹Keyring, "getPair" | "getPairs" | "addFromSeed" | "addFromUri" | "addFromMnemonic" | "addPair" | "encodeAddress"›*

*Defined in [src/types/index.ts:546](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L546)*

___

###  Condition

Ƭ **Condition**: *[SingleClaimCondition](globals.md#singleclaimcondition) | [MultiClaimCondition](globals.md#multiclaimcondition) | [IdentityCondition](globals.md#identitycondition) | [ExternalAgentCondition](globals.md#externalagentcondition)*

*Defined in [src/types/index.ts:376](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L376)*

___

###  ConditionBase

Ƭ **ConditionBase**: *object*

*Defined in [src/types/index.ts:355](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L355)*

#### Type declaration:

* **target**: *[ConditionTarget](enums/conditiontarget.md)*

* **trustedClaimIssuers**? : *[TrustedClaimIssuer](interfaces/trustedclaimissuer.md)[]*

___

###  ConfigureDividendDistributionParams

Ƭ **ConfigureDividendDistributionParams**: *Omit‹InitiateCorporateActionParams, "kind" | "checkpoint"› & object*

*Defined in [src/api/procedures/configureDividendDistribution.ts:62](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/procedures/configureDividendDistribution.ts#L62)*

___

###  Ensured

Ƭ **Ensured**: *Required‹Pick‹T, K››*

*Defined in [src/types/index.ts:539](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L539)*

___

###  ExternalAgentCondition

Ƭ **ExternalAgentCondition**: *[ConditionBase](globals.md#conditionbase) & object*

*Defined in [src/types/index.ts:372](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L372)*

___

###  GetReturnType

Ƭ **GetReturnType**: *[ActiveTransferRestrictions](interfaces/activetransferrestrictions.md)‹T extends Count ? CountTransferRestriction : PercentageTransferRestriction›*

*Defined in [src/api/entities/SecurityToken/TransferRestrictions/TransferRestrictionBase.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/SecurityToken/TransferRestrictions/TransferRestrictionBase.ts#L46)*

___

###  GroupPermissions

Ƭ **GroupPermissions**: *Pick‹Permissions, "transactions" | "transactionGroups"›*

*Defined in [src/types/index.ts:808](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L808)*

Security Token permissions shared by agents in a group

___

###  HumanReadableType

Ƭ **HumanReadableType**: *T extends Entity‹unknown, infer H› ? HumanReadableType‹H› : T extends BigNumber ? string : T extends Date ? string : T extends object ? object : T*

*Defined in [src/types/utils/index.ts:30](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/utils/index.ts#L30)*

Recursively traverse a type and transform its Entity properties into their
  human readable version (as if `.toJson` had been called on all of them)

___

###  IdentityCondition

Ƭ **IdentityCondition**: *[ConditionBase](globals.md#conditionbase) & object*

*Defined in [src/types/index.ts:367](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L367)*

___

###  InputTargets

Ƭ **InputTargets**: *Omit‹[CorporateActionTargets](interfaces/corporateactiontargets.md), "identities"› & object*

*Defined in [src/api/entities/CorporateAction/types.ts:20](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/CorporateAction/types.ts#L20)*

___

###  InputTaxWithholding

Ƭ **InputTaxWithholding**: *Omit‹[TaxWithholding](interfaces/taxwithholding.md), "identity"› & object*

*Defined in [src/api/entities/CorporateAction/types.ts:24](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/CorporateAction/types.ts#L24)*

___

###  InstructionDetails

Ƭ **InstructionDetails**: *object & object | object*

*Defined in [src/api/entities/Instruction/types.ts:17](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Instruction/types.ts#L17)*

___

###  InstructionStatusResult

Ƭ **InstructionStatusResult**: *object | object*

*Defined in [src/api/entities/Instruction/types.ts:57](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Instruction/types.ts#L57)*

___

###  InvestorUniquenessClaim

Ƭ **InvestorUniquenessClaim**: *object*

*Defined in [src/types/index.ts:257](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L257)*

#### Type declaration:

* **cddId**: *string*

* **scope**: *[Scope](interfaces/scope.md)*

* **scopeId**: *string*

* **type**: *[InvestorUniqueness](enums/claimtype.md#investoruniqueness)*

___

###  InvestorUniquenessV2Claim

Ƭ **InvestorUniquenessV2Claim**: *object*

*Defined in [src/types/index.ts:264](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L264)*

#### Type declaration:

* **cddId**: *string*

* **type**: *[InvestorUniquenessV2](enums/claimtype.md#investoruniquenessv2)*

___

###  ModifyCaDefaultsParams

Ƭ **ModifyCaDefaultsParams**: *object | object | object*

*Defined in [src/api/procedures/modifyCaDefaults.ts:23](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/procedures/modifyCaDefaults.ts#L23)*

___

###  ModifyClaimsParams

Ƭ **ModifyClaimsParams**: *[AddClaimsParams](interfaces/addclaimsparams.md) | [EditClaimsParams](interfaces/editclaimsparams.md) | [RevokeClaimsParams](interfaces/revokeclaimsparams.md)*

*Defined in [src/api/procedures/modifyClaims.ts:63](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/procedures/modifyClaims.ts#L63)*

___

###  ModifyStoTimesParams

Ƭ **ModifyStoTimesParams**: *object | object | object*

*Defined in [src/api/procedures/modifyStoTimes.ts:9](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/procedures/modifyStoTimes.ts#L9)*

___

###  ModifyTokenParams

Ƭ **ModifyTokenParams**: *object | object | object | object*

*Defined in [src/api/procedures/modifyToken.ts:13](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/procedures/modifyToken.ts#L13)*

___

###  ModifyVenueParams

Ƭ **ModifyVenueParams**: *object | object | object*

*Defined in [src/api/procedures/modifyVenue.ts:8](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/procedures/modifyVenue.ts#L8)*

___

###  MultiClaimCondition

Ƭ **MultiClaimCondition**: *[ConditionBase](globals.md#conditionbase) & object*

*Defined in [src/types/index.ts:362](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L362)*

___

###  Mutable

Ƭ **Mutable**: *object*

*Defined in [src/types/utils/index.ts:7](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/utils/index.ts#L7)*

#### Type declaration:

___

###  NextKey

Ƭ **NextKey**: *string | number | null*

*Defined in [src/types/index.ts:593](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L593)*

___

###  PermissionsLike

Ƭ **PermissionsLike**: *object & object | object*

*Defined in [src/types/index.ts:988](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L988)*

Permissions to grant to a Signer over an Identity

**`link`** [Permissions](classes/permissions.md)

**`note`** TxGroups in the `transactionGroups` array will be transformed into their corresponding `TxTag`s

___

###  PortfolioLike

Ƭ **PortfolioLike**: *string | [Identity](classes/identity.md) | [NumberedPortfolio](classes/numberedportfolio.md) | [DefaultPortfolio](classes/defaultportfolio.md) | object*

*Defined in [src/types/index.ts:974](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L974)*

___

###  ProcedureFunc

Ƭ **ProcedureFunc**: *function*

*Defined in [src/types/utils/index.ts:11](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/utils/index.ts#L11)*

#### Type declaration:

▸ (): *Procedure‹Args, ReturnValue, Storage›*

___

###  QueryReturnType

Ƭ **QueryReturnType**: *T extends AugmentedQuery‹"promise", infer Fun› ? ReturnType‹Fun› extends Observable‹infer R› ? R : never : never*

*Defined in [src/types/utils/index.ts:50](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/utils/index.ts#L50)*

Extract the return type of a polkadot.js query function

**`example`** `QueryReturnType<typeof identity.authorizations>` returns `Option<Authorization>`

___

###  Role

Ƭ **Role**: *[TickerOwnerRole](interfaces/tickerownerrole.md) | [CddProviderRole](interfaces/cddproviderrole.md) | [VenueOwnerRole](interfaces/venueownerrole.md) | [PortfolioCustodianRole](interfaces/portfoliocustodianrole.md) | [IdentityRole](interfaces/identityrole.md)*

*Defined in [src/types/index.ts:120](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L120)*

___

###  ScopedClaim

Ƭ **ScopedClaim**: *object | [InvestorUniquenessClaim](globals.md#investoruniquenessclaim) | object*

*Defined in [src/types/index.ts:269](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L269)*

___

###  SetRestrictionsParams

Ƭ **SetRestrictionsParams**: *Omit‹T extends Count ? SetCountTransferRestrictionsParams : SetPercentageTransferRestrictionsParams, "type"›*

*Defined in [src/api/entities/SecurityToken/TransferRestrictions/TransferRestrictionBase.ts:39](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/SecurityToken/TransferRestrictions/TransferRestrictionBase.ts#L39)*

___

###  SetTransferRestrictionsParams

Ƭ **SetTransferRestrictionsParams**: *object & [SetCountTransferRestrictionsParams](interfaces/setcounttransferrestrictionsparams.md) | [SetPercentageTransferRestrictionsParams](interfaces/setpercentagetransferrestrictionsparams.md)*

*Defined in [src/api/procedures/setTransferRestrictions.ts:39](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/procedures/setTransferRestrictions.ts#L39)*

___

###  Signer

Ƭ **Signer**: *[Identity](classes/identity.md) | [Account](classes/account.md)*

*Defined in [src/types/index.ts:950](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L950)*

___

###  SingleClaimCondition

Ƭ **SingleClaimCondition**: *[ConditionBase](globals.md#conditionbase) & object*

*Defined in [src/types/index.ts:357](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L357)*

___

###  SubCallback

Ƭ **SubCallback**: *function*

*Defined in [src/types/index.ts:535](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L535)*

#### Type declaration:

▸ (`result`: T): *void | Promise‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`result` | T |

___

###  TransactionArgument

Ƭ **TransactionArgument**: *object & [PlainTransactionArgument](interfaces/plaintransactionargument.md) | [ArrayTransactionArgument](interfaces/arraytransactionargument.md) | [SimpleEnumTransactionArgument](interfaces/simpleenumtransactionargument.md) | [ComplexTransactionArgument](interfaces/complextransactionargument.md)*

*Defined in [src/types/index.ts:939](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L939)*

___

###  UnionOfProcedureFuncs

Ƭ **UnionOfProcedureFuncs**: *Args extends unknown ? ProcedureFunc‹Args, ReturnValue, Storage› : never*

*Defined in [src/types/utils/index.ts:17](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/utils/index.ts#L17)*

___

###  UnscopedClaim

Ƭ **UnscopedClaim**: *object | [CddClaim](globals.md#cddclaim) | [InvestorUniquenessV2Claim](globals.md#investoruniquenessv2claim)*

*Defined in [src/types/index.ts:284](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L284)*

___

###  UnsubCallback

Ƭ **UnsubCallback**: *function*

*Defined in [src/types/index.ts:537](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/index.ts#L537)*

#### Type declaration:

▸ (): *void*

## Variables

### `Const` executedMessage

• **executedMessage**: *"Instruction has already been executed/rejected and it was purged from chain"* = "Instruction has already been executed/rejected and it was purged from chain"

*Defined in [src/api/entities/Instruction/index.ts:57](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Instruction/index.ts#L57)*

___

### `Const` notExistsMessage

• **notExistsMessage**: *"The Dividend Distribution no longer exists"* = "The Dividend Distribution no longer exists"

*Defined in [src/api/entities/Portfolio/index.ts:51](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/Portfolio/index.ts#L51)*

*Defined in [src/api/entities/CheckpointSchedule/index.ts:36](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/CheckpointSchedule/index.ts#L36)*

*Defined in [src/api/entities/DividendDistribution/index.ts:81](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/entities/DividendDistribution/index.ts#L81)*

## Functions

### `Const` areSameClaimIssuers

▸ **areSameClaimIssuers**(`currentClaimIssuers`: [TrustedClaimIssuer](interfaces/trustedclaimissuer.md)[], `claimIssuers`: ModifyTokenTrustedClaimIssuersAddSetParams["claimIssuers"]): *boolean*

*Defined in [src/api/procedures/modifyTokenTrustedClaimIssuers.ts:71](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/procedures/modifyTokenTrustedClaimIssuers.ts#L71)*

**Parameters:**

Name | Type |
------ | ------ |
`currentClaimIssuers` | [TrustedClaimIssuer](interfaces/trustedclaimissuer.md)[] |
`claimIssuers` | ModifyTokenTrustedClaimIssuersAddSetParams["claimIssuers"] |

**Returns:** *boolean*

___

### `Const` areSameClaims

▸ **areSameClaims**(`claim`: [Claim](globals.md#claim), `__namedParameters`: object): *boolean*

*Defined in [src/api/procedures/modifyClaims.ts:74](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/procedures/modifyClaims.ts#L74)*

**Parameters:**

▪ **claim**: *[Claim](globals.md#claim)*

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`scope` | undefined &#124; null &#124; [Scope](interfaces/scope.md) |
`type` | ClaimTypeEnum |

**Returns:** *boolean*

___

### `Const` areSameTargets

▸ **areSameTargets**(`targets`: [CorporateActionTargets](interfaces/corporateactiontargets.md), `newTargets`: [InputTargets](globals.md#inputtargets)): *boolean*

*Defined in [src/api/procedures/modifyCaDefaults.ts:45](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/procedures/modifyCaDefaults.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`targets` | [CorporateActionTargets](interfaces/corporateactiontargets.md) |
`newTargets` | [InputTargets](globals.md#inputtargets) |

**Returns:** *boolean*

___

### `Const` convertArgsToRaw

▸ **convertArgsToRaw**(`claimIssuers`: ModifyTokenTrustedClaimIssuersAddSetParams["claimIssuers"], `rawTicker`: Ticker, `context`: [Context](classes/context.md)): *object*

*Defined in [src/api/procedures/modifyTokenTrustedClaimIssuers.ts:42](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/procedures/modifyTokenTrustedClaimIssuers.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`claimIssuers` | ModifyTokenTrustedClaimIssuersAddSetParams["claimIssuers"] |
`rawTicker` | Ticker |
`context` | [Context](classes/context.md) |

**Returns:** *object*

* **claimIssuersToAdd**: *[][]*

* **inputDids**: *string[]*

___

###  createProcedureMethod

▸ **createProcedureMethod**‹**MethodArgs**, **ProcedureArgs**, **ProcedureReturnValue**, **Storage**›(`args`: object, `context`: [Context](classes/context.md)): *[ProcedureMethod](interfaces/proceduremethod.md)‹MethodArgs, ProcedureReturnValue, ProcedureReturnValue›*

*Defined in [src/utils/internal.ts:411](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/utils/internal.ts#L411)*

Create a method that prepares a procedure

**Type parameters:**

▪ **MethodArgs**

▪ **ProcedureArgs**: *unknown*

▪ **ProcedureReturnValue**

▪ **Storage**

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`getProcedureAndArgs` | function |

▪ **context**: *[Context](classes/context.md)*

**Returns:** *[ProcedureMethod](interfaces/proceduremethod.md)‹MethodArgs, ProcedureReturnValue, ProcedureReturnValue›*

▸ **createProcedureMethod**‹**MethodArgs**, **ProcedureArgs**, **ProcedureReturnValue**, **ReturnValue**, **Storage**›(`args`: object, `context`: [Context](classes/context.md)): *[ProcedureMethod](interfaces/proceduremethod.md)‹MethodArgs, ProcedureReturnValue, ReturnValue›*

*Defined in [src/utils/internal.ts:430](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/utils/internal.ts#L430)*

**Type parameters:**

▪ **MethodArgs**

▪ **ProcedureArgs**: *unknown*

▪ **ProcedureReturnValue**

▪ **ReturnValue**

▪ **Storage**

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`getProcedureAndArgs` | function |
`transformer` | function |

▪ **context**: *[Context](classes/context.md)*

**Returns:** *[ProcedureMethod](interfaces/proceduremethod.md)‹MethodArgs, ProcedureReturnValue, ReturnValue›*

___

### `Const` findClaimsByOtherIssuers

▸ **findClaimsByOtherIssuers**(`claims`: [ClaimTarget](interfaces/claimtarget.md)[], `claimsByDid`: Record‹string, MiddlewareClaim[]›): *[Claim](globals.md#claim)[]*

*Defined in [src/api/procedures/modifyClaims.ts:84](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/procedures/modifyClaims.ts#L84)*

**Parameters:**

Name | Type |
------ | ------ |
`claims` | [ClaimTarget](interfaces/claimtarget.md)[] |
`claimsByDid` | Record‹string, MiddlewareClaim[]› |

**Returns:** *[Claim](globals.md#claim)[]*

___

### `Const` findPositiveBalanceIuClaims

▸ **findPositiveBalanceIuClaims**(`claims`: [ClaimTarget](interfaces/claimtarget.md)[], `context`: [Context](classes/context.md)): *Promise‹[Claim](globals.md#claim)[]›*

*Defined in [src/api/procedures/modifyClaims.ts:100](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/api/procedures/modifyClaims.ts#L100)*

**Parameters:**

Name | Type |
------ | ------ |
`claims` | [ClaimTarget](interfaces/claimtarget.md)[] |
`context` | [Context](classes/context.md) |

**Returns:** *Promise‹[Claim](globals.md#claim)[]›*

___

###  tickerToDid

▸ **tickerToDid**(`ticker`: string): *string*

*Defined in [src/utils/conversion.ts:230](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/utils/conversion.ts#L230)*

Generate a Security Token's DID from a ticker

**Parameters:**

Name | Type |
------ | ------ |
`ticker` | string |

**Returns:** *string*

___

###  toHumanReadable

▸ **toHumanReadable**‹**T**›(`obj`: T): *[HumanReadableType](globals.md#humanreadabletype)‹T›*

*Defined in [src/utils/internal.ts:689](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/utils/internal.ts#L689)*

Recursively convert a value into a human readable (JSON compliant) version:
  - Entities are converted via their `.toJson` method
  - Dates are converted to ISO strings
  - BigNumbers are converted to numerical strings

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`obj` | T |

**Returns:** *[HumanReadableType](globals.md#humanreadabletype)‹T›*

___

### `Const` tuple

▸ **tuple**‹**T**›(...`args`: T): *T*

*Defined in [src/types/utils/index.ts:61](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/types/utils/index.ts#L61)*

Create a literal tuple type from a list of arguments

**Type parameters:**

▪ **T**: *unknown[]*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...args` | T | values to turn into a tuple  |

**Returns:** *T*

___

###  txGroupToTxTags

▸ **txGroupToTxTags**(`group`: [TxGroup](enums/txgroup.md)): *TxTag[]*

*Defined in [src/utils/conversion.ts:595](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/utils/conversion.ts#L595)*

Retrieve every Transaction Tag associated to a Transaction Group

**Parameters:**

Name | Type |
------ | ------ |
`group` | [TxGroup](enums/txgroup.md) |

**Returns:** *TxTag[]*

## Object literals

### `Const` defaultMessages

### ▪ **defaultMessages**: *object*

*Defined in [src/base/PolymeshError.ts:3](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/base/PolymeshError.ts#L3)*

###  [ErrorCode.TransactionAborted]

• **[ErrorCode.TransactionAborted]**: *string* = "The transaction was removed from the transaction pool. This might mean that it was malformed (nonce too large/nonce too small/duplicated or invalid transaction)"

*Defined in [src/base/PolymeshError.ts:7](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/base/PolymeshError.ts#L7)*

###  [ErrorCode.TransactionRejectedByUser]

• **[ErrorCode.TransactionRejectedByUser]**: *string* = "The user canceled the transaction signature"

*Defined in [src/base/PolymeshError.ts:9](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/base/PolymeshError.ts#L9)*

###  [ErrorCode.TransactionReverted]

• **[ErrorCode.TransactionReverted]**: *string* = "The transaction execution reverted due to an error"

*Defined in [src/base/PolymeshError.ts:6](https://github.com/PolymathNetwork/polymesh-sdk/blob/2a4e4111/src/base/PolymeshError.ts#L6)*
