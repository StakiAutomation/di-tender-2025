import { gql } from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any
}

export type AccordionSlice = {
  __typename?: 'AccordionSlice'
  accordionItems?: Maybe<Array<OneColumnText>>
  hasBorderAbove?: Maybe<Scalars['Boolean']>
  id: Scalars['ID']
  showTitle?: Maybe<Scalars['Boolean']>
  title: Scalars['String']
  titleHeadingLevel?: Maybe<Scalars['String']>
  type: Scalars['String']
}

export type AlertBanner = {
  __typename?: 'AlertBanner'
  bannerVariant: Scalars['String']
  description?: Maybe<Scalars['String']>
  dismissedForDays: Scalars['Int']
  id: Scalars['ID']
  isDismissable: Scalars['Boolean']
  link?: Maybe<ReferenceLink>
  linkTitle?: Maybe<Scalars['String']>
  servicePortalPaths?: Maybe<Array<Scalars['String']>>
  showAlertBanner: Scalars['Boolean']
  title?: Maybe<Scalars['String']>
}

export type AnchorPage = {
  __typename?: 'AnchorPage'
  category?: Maybe<ArticleCategory>
  content: Array<Slice>
  featuredImage?: Maybe<Image>
  id: Scalars['ID']
  image?: Maybe<Image>
  intro?: Maybe<Scalars['String']>
  pageType?: Maybe<Scalars['String']>
  seeMoreText?: Maybe<Scalars['String']>
  shortIntro?: Maybe<Scalars['String']>
  shortTitle?: Maybe<Scalars['String']>
  slug: Scalars['String']
  thumbnail?: Maybe<Image>
  tinyThumbnail?: Maybe<Image>
  title: Scalars['String']
}

export type AnchorPageListSlice = {
  __typename?: 'AnchorPageListSlice'
  id: Scalars['ID']
  pages: Array<AnchorPage>
  title: Scalars['String']
}

export type Article = {
  __typename?: 'Article'
  activeTranslations?: Maybe<Scalars['JSON']>
  alertBanner?: Maybe<AlertBanner>
  body: Array<Slice>
  category?: Maybe<ArticleCategory>
  featuredImage?: Maybe<Image>
  group?: Maybe<ArticleGroup>
  id: Scalars['ID']
  importance?: Maybe<Scalars['Float']>
  intro?: Maybe<Scalars['String']>
  keywords?: Maybe<Array<Scalars['String']>>
  organization?: Maybe<Array<Organization>>
  otherCategories?: Maybe<Array<ArticleCategory>>
  otherGroups?: Maybe<Array<ArticleGroup>>
  otherSubgroups?: Maybe<Array<ArticleSubgroup>>
  processEntry?: Maybe<ProcessEntry>
  processEntryButtonText?: Maybe<Scalars['String']>
  relatedArticles?: Maybe<Array<Article>>
  relatedContent?: Maybe<Array<Link>>
  relatedOrganization?: Maybe<Array<Organization>>
  responsibleParty?: Maybe<Array<Organization>>
  shortTitle?: Maybe<Scalars['String']>
  showTableOfContents?: Maybe<Scalars['Boolean']>
  signLanguageVideo?: Maybe<EmbeddedVideo>
  slug: Scalars['String']
  stepper?: Maybe<Stepper>
  subArticles: Array<SubArticle>
  subgroup?: Maybe<ArticleSubgroup>
  title: Scalars['String']
}

export type ArticleCategory = {
  __typename?: 'ArticleCategory'
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  slug: Scalars['String']
  title: Scalars['String']
}

export type ArticleGroup = {
  __typename?: 'ArticleGroup'
  description?: Maybe<Scalars['String']>
  importance?: Maybe<Scalars['Float']>
  slug: Scalars['String']
  title: Scalars['String']
}

export type ArticleReference = {
  __typename?: 'ArticleReference'
  category?: Maybe<ArticleCategory>
  group?: Maybe<ArticleGroup>
  id: Scalars['ID']
  intro: Scalars['String']
  organization?: Maybe<Array<Organization>>
  processEntry?: Maybe<ProcessEntry>
  processEntryButtonText: Scalars['String']
  slug: Scalars['String']
  title: Scalars['String']
}

export type ArticleSubgroup = {
  __typename?: 'ArticleSubgroup'
  importance?: Maybe<Scalars['Float']>
  slug: Scalars['String']
  title: Scalars['String']
}

export type Asset = {
  __typename?: 'Asset'
  contentType: Scalars['String']
  id: Scalars['ID']
  title: Scalars['String']
  typename: Scalars['String']
  url: Scalars['String']
}

export type Auction = {
  __typename?: 'Auction'
  content?: Maybe<Array<Slice>>
  date: Scalars['String']
  id: Scalars['ID']
  organization: Organization
  title: Scalars['String']
  type: Scalars['String']
  updatedAt: Scalars['String']
}

export type BloodDonationRestrictionDetails = {
  __typename?: 'BloodDonationRestrictionDetails'
  cardText: Array<Slice>
  description: Scalars['String']
  detailedText: Array<Slice>
  hasCardText: Scalars['Boolean']
  hasDetailedText: Scalars['Boolean']
  id: Scalars['ID']
  keywordsText: Scalars['String']
  title: Scalars['String']
}

export type BloodDonationRestrictionGenericTag = {
  __typename?: 'BloodDonationRestrictionGenericTag'
  key: Scalars['ID']
  label: Scalars['String']
}

export type BloodDonationRestrictionGenericTagList = {
  __typename?: 'BloodDonationRestrictionGenericTagList'
  items: Array<BloodDonationRestrictionGenericTag>
  total: Scalars['Int']
}

export type BloodDonationRestrictionList = {
  __typename?: 'BloodDonationRestrictionList'
  input: GetBloodDonationRestrictionsInputModel
  items: Array<BloodDonationRestrictionListItem>
  total: Scalars['Int']
}

export type BloodDonationRestrictionListItem = {
  __typename?: 'BloodDonationRestrictionListItem'
  cardText: Array<Slice>
  description: Scalars['String']
  hasCardText: Scalars['Boolean']
  hasDetailedText: Scalars['Boolean']
  id: Scalars['ID']
  keywordsText: Scalars['String']
  title: Scalars['String']
}

export type BulletEntry = IconBullet | NumberBulletGroup

export type BulletListSlice = {
  __typename?: 'BulletListSlice'
  bullets: Array<BulletEntry>
  dividerOnTop?: Maybe<Scalars['Boolean']>
  id: Scalars['ID']
}

export type Case = {
  __typename?: 'Case'
  accusedAppealAnnouncement?: Maybe<Scalars['String']>
  accusedAppealDecision?: Maybe<CaseAppealDecision>
  accusedPostponedAppealDate?: Maybe<Scalars['String']>
  appealAssistant?: Maybe<User>
  appealCaseNumber?: Maybe<Scalars['String']>
  appealConclusion?: Maybe<Scalars['String']>
  /** appeal deadline in R cases */
  appealDeadline?: Maybe<Scalars['String']>
  appealIsolationToDate?: Maybe<Scalars['String']>
  appealJudge1?: Maybe<User>
  appealJudge2?: Maybe<User>
  appealJudge3?: Maybe<User>
  appealReceivedByCourtDate?: Maybe<Scalars['String']>
  appealRulingDecision?: Maybe<CaseAppealRulingDecision>
  appealRulingModifiedHistory?: Maybe<Scalars['String']>
  appealState?: Maybe<CaseAppealState>
  appealValidToDate?: Maybe<Scalars['String']>
  appealedByRole?: Maybe<UserRole>
  appealedDate?: Maybe<Scalars['String']>
  arraignmentDate?: Maybe<DateLog>
  arrestDate?: Maybe<Scalars['String']>
  canBeAppealed?: Maybe<Scalars['Boolean']>
  canDefenderAppeal?: Maybe<Scalars['Boolean']>
  canProsecutorAppeal?: Maybe<Scalars['Boolean']>
  caseFacts?: Maybe<Scalars['String']>
  caseFiles?: Maybe<Array<CaseFile>>
  caseFilesComments?: Maybe<Scalars['String']>
  caseModifiedExplanation?: Maybe<Scalars['String']>
  caseRepresentatives?: Maybe<Array<CaseRepresentative>>
  caseResentExplanation?: Maybe<Scalars['String']>
  caseSentToCourtDate?: Maybe<Scalars['String']>
  childCase?: Maybe<Case>
  civilClaimants?: Maybe<Array<CivilClaimant>>
  civilDemands?: Maybe<Scalars['String']>
  comments?: Maybe<Scalars['String']>
  conclusion?: Maybe<Scalars['String']>
  court?: Maybe<Institution>
  courtAttendees?: Maybe<Scalars['String']>
  courtCaseFacts?: Maybe<Scalars['String']>
  courtCaseNumber?: Maybe<Scalars['String']>
  courtDate?: Maybe<DateLog>
  courtDocuments?: Maybe<Array<Scalars['JSONObject']>>
  courtEndTime?: Maybe<Scalars['String']>
  courtLegalArguments?: Maybe<Scalars['String']>
  courtLocation?: Maybe<Scalars['String']>
  courtRecordSignatory?: Maybe<User>
  courtRecordSignatureDate?: Maybe<Scalars['String']>
  courtSessionType?: Maybe<CourtSessionType>
  courtStartDate?: Maybe<Scalars['String']>
  created?: Maybe<Scalars['String']>
  creatingProsecutor?: Maybe<User>
  crimeScenes?: Maybe<Scalars['JSONObject']>
  decision?: Maybe<CaseDecision>
  defendantStatementDate?: Maybe<Scalars['String']>
  defendantWaivesRightToCounsel?: Maybe<Scalars['Boolean']>
  defendants?: Maybe<Array<Defendant>>
  defenderEmail?: Maybe<Scalars['String']>
  defenderName?: Maybe<Scalars['String']>
  defenderNationalId?: Maybe<Scalars['String']>
  defenderPhoneNumber?: Maybe<Scalars['String']>
  demands?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  endOfSessionBookings?: Maybe<Scalars['String']>
  eventLogs?: Maybe<Array<EventLog>>
  hasBeenAppealed?: Maybe<Scalars['Boolean']>
  hasCivilClaims?: Maybe<Scalars['Boolean']>
  id: Scalars['ID']
  /** appeal deadline for public prosecutor */
  indictmentAppealDeadline?: Maybe<Scalars['String']>
  indictmentCounts?: Maybe<Array<IndictmentCount>>
  indictmentDecision?: Maybe<IndictmentDecision>
  indictmentDeniedExplanation?: Maybe<Scalars['String']>
  indictmentIntroduction?: Maybe<Scalars['String']>
  indictmentReturnedExplanation?: Maybe<Scalars['String']>
  indictmentReviewDecision?: Maybe<IndictmentCaseReviewDecision>
  indictmentReviewer?: Maybe<User>
  indictmentRulingDecision?: Maybe<CaseIndictmentRulingDecision>
  indictmentSubtypes?: Maybe<Scalars['JSONObject']>
  indictmentVerdictAppealDeadlineExpired?: Maybe<Scalars['Boolean']>
  indictmentVerdictViewedByAll?: Maybe<Scalars['Boolean']>
  initialRulingDate?: Maybe<Scalars['String']>
  introduction?: Maybe<Scalars['String']>
  isAppealCustodyIsolation?: Maybe<Scalars['Boolean']>
  isAppealDeadlineExpired?: Maybe<Scalars['Boolean']>
  isAppealGracePeriodExpired?: Maybe<Scalars['Boolean']>
  isClosedCourtHidden?: Maybe<Scalars['Boolean']>
  isCompletedWithoutRuling?: Maybe<Scalars['Boolean']>
  isCustodyIsolation?: Maybe<Scalars['Boolean']>
  isHeightenedSecurityLevel?: Maybe<Scalars['Boolean']>
  isStatementDeadlineExpired?: Maybe<Scalars['Boolean']>
  isValidToDateInThePast?: Maybe<Scalars['Boolean']>
  isolationToDate?: Maybe<Scalars['String']>
  judge?: Maybe<User>
  lawsBroken?: Maybe<Scalars['String']>
  leadInvestigator?: Maybe<Scalars['String']>
  legalArguments?: Maybe<Scalars['String']>
  legalBasis?: Maybe<Scalars['String']>
  legalProvisions?: Maybe<Array<CaseLegalProvisions>>
  mergeCase?: Maybe<Case>
  mergeCaseNumber?: Maybe<Scalars['String']>
  mergedCases?: Maybe<Array<Case>>
  modified?: Maybe<Scalars['String']>
  notifications?: Maybe<Array<Notification>>
  openedByDefender?: Maybe<Scalars['String']>
  origin?: Maybe<CaseOrigin>
  parentCase?: Maybe<Case>
  policeCaseNumbers?: Maybe<Array<Scalars['String']>>
  postponedIndefinitelyExplanation?: Maybe<Scalars['String']>
  prosecutor?: Maybe<User>
  prosecutorAppealAnnouncement?: Maybe<Scalars['String']>
  prosecutorAppealDecision?: Maybe<CaseAppealDecision>
  prosecutorDemands?: Maybe<Scalars['String']>
  prosecutorOnlySessionRequest?: Maybe<Scalars['String']>
  prosecutorPostponedAppealDate?: Maybe<Scalars['String']>
  prosecutorStatementDate?: Maybe<Scalars['String']>
  prosecutorsOffice?: Maybe<Institution>
  publicProsecutorIsRegisteredInPoliceSystem?: Maybe<Scalars['Boolean']>
  registrar?: Maybe<User>
  requestAppealRulingNotToBePublished?: Maybe<Array<UserRole>>
  requestDriversLicenseSuspension?: Maybe<Scalars['Boolean']>
  requestProsecutorOnlySession?: Maybe<Scalars['Boolean']>
  requestSharedWithDefender?: Maybe<RequestSharedWithDefender>
  requestedCourtDate?: Maybe<Scalars['String']>
  requestedCustodyRestrictions?: Maybe<Array<CaseCustodyRestrictions>>
  requestedOtherRestrictions?: Maybe<Scalars['String']>
  requestedValidToDate?: Maybe<Scalars['String']>
  ruling?: Maybe<Scalars['String']>
  rulingDate?: Maybe<Scalars['String']>
  rulingModifiedHistory?: Maybe<Scalars['String']>
  rulingSignatureDate?: Maybe<Scalars['String']>
  sessionArrangements?: Maybe<SessionArrangements>
  sessionBookings?: Maybe<Scalars['String']>
  sharedWithProsecutorsOffice?: Maybe<Institution>
  state?: Maybe<CaseState>
  statementDeadline?: Maybe<Scalars['String']>
  translator?: Maybe<Scalars['String']>
  type?: Maybe<CaseType>
  validToDate?: Maybe<Scalars['String']>
  victims?: Maybe<Array<Victim>>
}

export enum CaseAppealDecision {
  ACCEPT = 'ACCEPT',
  APPEAL = 'APPEAL',
  NOT_APPLICABLE = 'NOT_APPLICABLE',
  POSTPONE = 'POSTPONE',
}

export enum CaseAppealRulingDecision {
  ACCEPTING = 'ACCEPTING',
  CHANGED = 'CHANGED',
  CHANGED_SIGNIFICANTLY = 'CHANGED_SIGNIFICANTLY',
  DISCONTINUED = 'DISCONTINUED',
  DISMISSED_FROM_COURT = 'DISMISSED_FROM_COURT',
  DISMISSED_FROM_COURT_OF_APPEAL = 'DISMISSED_FROM_COURT_OF_APPEAL',
  REMAND = 'REMAND',
  REPEAL = 'REPEAL',
}

export enum CaseAppealState {
  APPEALED = 'APPEALED',
  COMPLETED = 'COMPLETED',
  RECEIVED = 'RECEIVED',
  WITHDRAWN = 'WITHDRAWN',
}

export enum CaseCustodyRestrictions {
  ALTERNATIVE_TRAVEL_BAN_REQUIRE_NOTIFICATION = 'ALTERNATIVE_TRAVEL_BAN_REQUIRE_NOTIFICATION',
  COMMUNICATION = 'COMMUNICATION',
  ISOLATION = 'ISOLATION',
  MEDIA = 'MEDIA',
  NECESSITIES = 'NECESSITIES',
  VISITAION = 'VISITAION',
  WORKBAN = 'WORKBAN',
}

export enum CaseDecision {
  ACCEPTING = 'ACCEPTING',
  ACCEPTING_ALTERNATIVE_TRAVEL_BAN = 'ACCEPTING_ALTERNATIVE_TRAVEL_BAN',
  ACCEPTING_PARTIALLY = 'ACCEPTING_PARTIALLY',
  DISMISSING = 'DISMISSING',
  REJECTING = 'REJECTING',
}

export type CaseFile = {
  __typename?: 'CaseFile'
  caseId?: Maybe<Scalars['ID']>
  category?: Maybe<CaseFileCategory>
  chapter?: Maybe<Scalars['Int']>
  created?: Maybe<Scalars['String']>
  displayDate?: Maybe<Scalars['String']>
  fileRepresentative?: Maybe<Scalars['String']>
  id: Scalars['ID']
  key?: Maybe<Scalars['String']>
  modified?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  orderWithinChapter?: Maybe<Scalars['Int']>
  policeCaseNumber?: Maybe<Scalars['String']>
  policeFileId?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['Int']>
  state?: Maybe<CaseFileState>
  submissionDate?: Maybe<Scalars['String']>
  submittedBy?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  userGeneratedFilename?: Maybe<Scalars['String']>
}

export enum CaseFileCategory {
  APPEAL_COURT_RECORD = 'APPEAL_COURT_RECORD',
  APPEAL_RULING = 'APPEAL_RULING',
  CASE_FILE = 'CASE_FILE',
  CASE_FILE_RECORD = 'CASE_FILE_RECORD',
  CIVIL_CLAIM = 'CIVIL_CLAIM',
  CIVIL_CLAIMANT_LEGAL_SPOKESPERSON_CASE_FILE = 'CIVIL_CLAIMANT_LEGAL_SPOKESPERSON_CASE_FILE',
  CIVIL_CLAIMANT_SPOKESPERSON_CASE_FILE = 'CIVIL_CLAIMANT_SPOKESPERSON_CASE_FILE',
  COST_BREAKDOWN = 'COST_BREAKDOWN',
  COURT_RECORD = 'COURT_RECORD',
  CRIMINAL_RECORD = 'CRIMINAL_RECORD',
  CRIMINAL_RECORD_UPDATE = 'CRIMINAL_RECORD_UPDATE',
  DEFENDANT_APPEAL_BRIEF = 'DEFENDANT_APPEAL_BRIEF',
  DEFENDANT_APPEAL_BRIEF_CASE_FILE = 'DEFENDANT_APPEAL_BRIEF_CASE_FILE',
  DEFENDANT_APPEAL_CASE_FILE = 'DEFENDANT_APPEAL_CASE_FILE',
  DEFENDANT_APPEAL_STATEMENT = 'DEFENDANT_APPEAL_STATEMENT',
  DEFENDANT_APPEAL_STATEMENT_CASE_FILE = 'DEFENDANT_APPEAL_STATEMENT_CASE_FILE',
  DEFENDANT_CASE_FILE = 'DEFENDANT_CASE_FILE',
  INDEPENDENT_DEFENDANT_CASE_FILE = 'INDEPENDENT_DEFENDANT_CASE_FILE',
  PROSECUTOR_APPEAL_BRIEF = 'PROSECUTOR_APPEAL_BRIEF',
  PROSECUTOR_APPEAL_BRIEF_CASE_FILE = 'PROSECUTOR_APPEAL_BRIEF_CASE_FILE',
  PROSECUTOR_APPEAL_CASE_FILE = 'PROSECUTOR_APPEAL_CASE_FILE',
  PROSECUTOR_APPEAL_STATEMENT = 'PROSECUTOR_APPEAL_STATEMENT',
  PROSECUTOR_APPEAL_STATEMENT_CASE_FILE = 'PROSECUTOR_APPEAL_STATEMENT_CASE_FILE',
  PROSECUTOR_CASE_FILE = 'PROSECUTOR_CASE_FILE',
  RULING = 'RULING',
  SENT_TO_PRISON_ADMIN_FILE = 'SENT_TO_PRISON_ADMIN_FILE',
}

export enum CaseFileState {
  DELETED = 'DELETED',
  STORED_IN_COURT = 'STORED_IN_COURT',
  STORED_IN_RVG = 'STORED_IN_RVG',
}

export enum CaseIndictmentRulingDecision {
  CANCELLATION = 'CANCELLATION',
  DISMISSAL = 'DISMISSAL',
  FINE = 'FINE',
  MERGE = 'MERGE',
  RULING = 'RULING',
  WITHDRAWAL = 'WITHDRAWAL',
}

export enum CaseLegalProvisions {
  _95_1_A = '_95_1_A',
  _95_1_B = '_95_1_B',
  _95_1_C = '_95_1_C',
  _95_1_D = '_95_1_D',
  _95_2 = '_95_2',
  _97_1 = '_97_1',
  _99_1_B = '_99_1_B',
  _100_1 = '_100_1',
}

export type CaseListEntry = {
  __typename?: 'CaseListEntry'
  accusedAppealDecision?: Maybe<CaseAppealDecision>
  accusedPostponedAppealDate?: Maybe<Scalars['String']>
  appealCaseNumber?: Maybe<Scalars['String']>
  appealRulingDecision?: Maybe<CaseAppealRulingDecision>
  appealState?: Maybe<CaseAppealState>
  appealedDate?: Maybe<Scalars['String']>
  caseSentToCourtDate?: Maybe<Scalars['String']>
  court?: Maybe<Institution>
  courtCaseNumber?: Maybe<Scalars['String']>
  courtDate?: Maybe<Scalars['String']>
  courtEndTime?: Maybe<Scalars['String']>
  courtSessionType?: Maybe<CourtSessionType>
  created?: Maybe<Scalars['String']>
  creatingProsecutor?: Maybe<User>
  decision?: Maybe<CaseDecision>
  defendants?: Maybe<Array<Defendant>>
  defendantsPunishmentType?: Maybe<PunishmentType>
  eventLogs?: Maybe<Array<EventLog>>
  id: Scalars['ID']
  indictmentAppealDeadline?: Maybe<Scalars['String']>
  indictmentDecision?: Maybe<IndictmentDecision>
  indictmentReviewDecision?: Maybe<IndictmentCaseReviewDecision>
  indictmentReviewer?: Maybe<User>
  indictmentRulingDecision?: Maybe<CaseIndictmentRulingDecision>
  indictmentVerdictAppealDeadlineExpired?: Maybe<Scalars['Boolean']>
  indictmentVerdictViewedByAll?: Maybe<Scalars['Boolean']>
  initialRulingDate?: Maybe<Scalars['String']>
  isCompletedWithoutRuling?: Maybe<Scalars['Boolean']>
  isValidToDateInThePast?: Maybe<Scalars['Boolean']>
  judge?: Maybe<User>
  parentCaseId?: Maybe<Scalars['ID']>
  policeCaseNumbers?: Maybe<Array<Scalars['String']>>
  postponedIndefinitelyExplanation?: Maybe<Scalars['String']>
  prosecutor?: Maybe<User>
  prosecutorAppealDecision?: Maybe<CaseAppealDecision>
  prosecutorPostponedAppealDate?: Maybe<Scalars['String']>
  prosecutorsOffice?: Maybe<Institution>
  publicProsecutorIsRegisteredInPoliceSystem?: Maybe<Scalars['Boolean']>
  registrar?: Maybe<User>
  rulingDate?: Maybe<Scalars['String']>
  rulingSignatureDate?: Maybe<Scalars['String']>
  state?: Maybe<CaseState>
  type?: Maybe<CaseType>
  validToDate?: Maybe<Scalars['String']>
}

export type CaseListQueryInput = {
  appealState?: InputMaybe<Array<CaseAppealState>>
}

export enum CaseOrigin {
  LOKE = 'LOKE',
  RVG = 'RVG',
  UNKNOWN = 'UNKNOWN',
}

export type CaseQueryInput = {
  id: Scalars['ID']
}

export type CaseRepresentative = {
  __typename?: 'CaseRepresentative'
  caseFileCategory: CaseFileCategory
  name: Scalars['String']
  nationalId?: Maybe<Scalars['String']>
}

export enum CaseState {
  ACCEPTED = 'ACCEPTED',
  COMPLETED = 'COMPLETED',
  DELETED = 'DELETED',
  DISMISSED = 'DISMISSED',
  DRAFT = 'DRAFT',
  NEW = 'NEW',
  RECEIVED = 'RECEIVED',
  REJECTED = 'REJECTED',
  SUBMITTED = 'SUBMITTED',
  WAITING_FOR_CANCELLATION = 'WAITING_FOR_CANCELLATION',
  WAITING_FOR_CONFIRMATION = 'WAITING_FOR_CONFIRMATION',
}

export type CaseStatistics = {
  __typename?: 'CaseStatistics'
  count: Scalars['Float']
  indictmentCases: IndictmentCaseStatistics
  requestCases: RequestCaseStatistics
  subpoenas: SubpoenaStatistics
}

export type CaseStatisticsInput = {
  fromDate?: InputMaybe<Scalars['DateTime']>
  institutionId?: InputMaybe<Scalars['String']>
  toDate?: InputMaybe<Scalars['DateTime']>
}

export enum CaseTransition {
  ACCEPT = 'ACCEPT',
  APPEAL = 'APPEAL',
  ASK_FOR_CANCELLATION = 'ASK_FOR_CANCELLATION',
  ASK_FOR_CONFIRMATION = 'ASK_FOR_CONFIRMATION',
  COMPLETE = 'COMPLETE',
  COMPLETE_APPEAL = 'COMPLETE_APPEAL',
  DELETE = 'DELETE',
  DENY_INDICTMENT = 'DENY_INDICTMENT',
  DISMISS = 'DISMISS',
  MOVE = 'MOVE',
  OPEN = 'OPEN',
  RECEIVE = 'RECEIVE',
  RECEIVE_APPEAL = 'RECEIVE_APPEAL',
  REJECT = 'REJECT',
  REOPEN = 'REOPEN',
  REOPEN_APPEAL = 'REOPEN_APPEAL',
  RETURN_INDICTMENT = 'RETURN_INDICTMENT',
  SUBMIT = 'SUBMIT',
  WITHDRAW_APPEAL = 'WITHDRAW_APPEAL',
}

export enum CaseType {
  ADMISSION_TO_FACILITY = 'ADMISSION_TO_FACILITY',
  AUTOPSY = 'AUTOPSY',
  BANKING_SECRECY_WAIVER = 'BANKING_SECRECY_WAIVER',
  BODY_SEARCH = 'BODY_SEARCH',
  CUSTODY = 'CUSTODY',
  ELECTRONIC_DATA_DISCOVERY_INVESTIGATION = 'ELECTRONIC_DATA_DISCOVERY_INVESTIGATION',
  EXPULSION_FROM_HOME = 'EXPULSION_FROM_HOME',
  INDICTMENT = 'INDICTMENT',
  INTERNET_USAGE = 'INTERNET_USAGE',
  OTHER = 'OTHER',
  PAROLE_REVOCATION = 'PAROLE_REVOCATION',
  PHONE_TAPPING = 'PHONE_TAPPING',
  PSYCHIATRIC_EXAMINATION = 'PSYCHIATRIC_EXAMINATION',
  RESTRAINING_ORDER = 'RESTRAINING_ORDER',
  RESTRAINING_ORDER_AND_EXPULSION_FROM_HOME = 'RESTRAINING_ORDER_AND_EXPULSION_FROM_HOME',
  SEARCH_WARRANT = 'SEARCH_WARRANT',
  SOUND_RECORDING_EQUIPMENT = 'SOUND_RECORDING_EQUIPMENT',
  STATEMENT_FROM_MINOR = 'STATEMENT_FROM_MINOR',
  STATEMENT_IN_COURT = 'STATEMENT_IN_COURT',
  TELECOMMUNICATIONS = 'TELECOMMUNICATIONS',
  TRACKING_EQUIPMENT = 'TRACKING_EQUIPMENT',
  TRAVEL_BAN = 'TRAVEL_BAN',
  VIDEO_RECORDING_EQUIPMENT = 'VIDEO_RECORDING_EQUIPMENT',
}

export type CategoryPage = Article | Manual

export type Chart = {
  __typename?: 'Chart'
  alternativeDescription: Scalars['String']
  chartDescription: Scalars['String']
  components: Array<ChartComponent>
  customStyleConfig?: Maybe<Scalars['String']>
  dateFrom?: Maybe<Scalars['String']>
  dateTo?: Maybe<Scalars['String']>
  displayAsCard: Scalars['Boolean']
  flipAxis?: Maybe<Scalars['Boolean']>
  id: Scalars['ID']
  numberOfDataPoints?: Maybe<Scalars['Float']>
  reduceAndRoundValue?: Maybe<Scalars['Boolean']>
  sourceData?: Maybe<Scalars['String']>
  startExpanded: Scalars['Boolean']
  title: Scalars['String']
  xAxisFormat?: Maybe<Scalars['String']>
  xAxisKey?: Maybe<Scalars['String']>
  xAxisValueType?: Maybe<Scalars['String']>
  yAxisLabel?: Maybe<Scalars['String']>
}

export type ChartComponent = {
  __typename?: 'ChartComponent'
  id: Scalars['ID']
  interval?: Maybe<Scalars['Float']>
  label: Scalars['String']
  sourceDataKey: Scalars['String']
  stackId?: Maybe<Scalars['String']>
  type: Scalars['String']
  values?: Maybe<Scalars['String']>
}

export type ChartNumberBox = {
  __typename?: 'ChartNumberBox'
  displayChangeMonthOverMonth: Scalars['Boolean']
  displayChangeYearOverYear: Scalars['Boolean']
  displayTimestamp?: Maybe<Scalars['Boolean']>
  id: Scalars['ID']
  numberBoxDate?: Maybe<Scalars['String']>
  numberBoxDescription: Scalars['String']
  reduceAndRoundValue?: Maybe<Scalars['Boolean']>
  sourceDataKey: Scalars['String']
  title: Scalars['String']
  valueType: Scalars['String']
}

export type CivilClaimant = {
  __typename?: 'CivilClaimant'
  caseFilesSharedWithSpokesperson?: Maybe<Scalars['Boolean']>
  caseId?: Maybe<Scalars['ID']>
  created?: Maybe<Scalars['String']>
  hasSpokesperson?: Maybe<Scalars['Boolean']>
  id: Scalars['ID']
  isSpokespersonConfirmed?: Maybe<Scalars['Boolean']>
  modified?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  nationalId?: Maybe<Scalars['String']>
  noNationalId?: Maybe<Scalars['Boolean']>
  spokespersonEmail?: Maybe<Scalars['String']>
  spokespersonIsLawyer?: Maybe<Scalars['Boolean']>
  spokespersonName?: Maybe<Scalars['String']>
  spokespersonNationalId?: Maybe<Scalars['String']>
  spokespersonPhoneNumber?: Maybe<Scalars['String']>
}

export type ConnectedComponent = {
  __typename?: 'ConnectedComponent'
  configJson?: Maybe<Scalars['JSON']>
  id: Scalars['ID']
  json?: Maybe<Scalars['JSON']>
  title: Scalars['String']
  translationStrings?: Maybe<Scalars['JSONObject']>
  type?: Maybe<Scalars['String']>
}

export type ContactUs = {
  __typename?: 'ContactUs'
  errorMessage: Scalars['String']
  id: Scalars['ID']
  invalidEmail: Scalars['String']
  invalidPhone: Scalars['String']
  labelEmail: Scalars['String']
  labelMessage: Scalars['String']
  labelName: Scalars['String']
  labelPhone: Scalars['String']
  labelSubject: Scalars['String']
  required: Scalars['String']
  submitButtonText: Scalars['String']
  successMessage: Scalars['String']
  title: Scalars['String']
}

export type ContentSlug = {
  __typename?: 'ContentSlug'
  activeTranslations?: Maybe<Scalars['JSON']>
  id: Scalars['ID']
  slug?: Maybe<TextFieldLocales>
  title?: Maybe<TextFieldLocales>
  type: Scalars['String']
  url?: Maybe<TextFieldLocales>
}

export enum CourtSessionType {
  APPRAISER_SUMMONS = 'APPRAISER_SUMMONS',
  ARRAIGNMENT = 'ARRAIGNMENT',
  HEARING = 'HEARING',
  MAIN_HEARING = 'MAIN_HEARING',
  MAIN_HEARING_CONTINUATION = 'MAIN_HEARING_CONTINUATION',
  ORAL_ARGUMENTS = 'ORAL_ARGUMENTS',
  OTHER = 'OTHER',
  RULING = 'RULING',
  VERDICT = 'VERDICT',
}

export type CreateCaseInput = {
  crimeScenes?: InputMaybe<Scalars['JSONObject']>
  defenderEmail?: InputMaybe<Scalars['String']>
  defenderName?: InputMaybe<Scalars['String']>
  defenderNationalId?: InputMaybe<Scalars['String']>
  defenderPhoneNumber?: InputMaybe<Scalars['String']>
  description?: InputMaybe<Scalars['String']>
  indictmentSubtypes?: InputMaybe<Scalars['JSONObject']>
  leadInvestigator?: InputMaybe<Scalars['String']>
  policeCaseNumbers: Array<Scalars['String']>
  prosecutorId?: InputMaybe<Scalars['ID']>
  requestSharedWithDefender?: InputMaybe<RequestSharedWithDefender>
  type: CaseType
}

export type CreateCivilClaimantFileInput = {
  caseId: Scalars['ID']
  category?: InputMaybe<CaseFileCategory>
  /** Number of chapter where file is in. 0 or greater. If provided, then order must also be provided. */
  chapter?: InputMaybe<Scalars['Int']>
  civilClaimantId: Scalars['ID']
  displayDate?: InputMaybe<Scalars['String']>
  fileRepresentative?: InputMaybe<Scalars['String']>
  key: Scalars['String']
  /** Number indicating the order within chapter. 0 or greater. If provided, then chapter must also be provided. */
  orderWithinChapter?: InputMaybe<Scalars['Int']>
  policeCaseNumber?: InputMaybe<Scalars['String']>
  policeFileId?: InputMaybe<Scalars['String']>
  size: Scalars['Int']
  submissionDate?: InputMaybe<Scalars['String']>
  type: Scalars['String']
  userGeneratedFilename?: InputMaybe<Scalars['String']>
}

export type CreateCivilClaimantInput = {
  caseId: Scalars['ID']
}

export type CreateCourtCaseInput = {
  caseId: Scalars['ID']
}

export type CreateDefendantFileInput = {
  caseId: Scalars['ID']
  category?: InputMaybe<CaseFileCategory>
  /** Number of chapter where file is in. 0 or greater. If provided, then order must also be provided. */
  chapter?: InputMaybe<Scalars['Int']>
  defendantId: Scalars['ID']
  displayDate?: InputMaybe<Scalars['String']>
  fileRepresentative?: InputMaybe<Scalars['String']>
  key: Scalars['String']
  /** Number indicating the order within chapter. 0 or greater. If provided, then chapter must also be provided. */
  orderWithinChapter?: InputMaybe<Scalars['Int']>
  policeCaseNumber?: InputMaybe<Scalars['String']>
  policeFileId?: InputMaybe<Scalars['String']>
  size: Scalars['Int']
  submissionDate?: InputMaybe<Scalars['String']>
  type: Scalars['String']
  userGeneratedFilename?: InputMaybe<Scalars['String']>
}

export type CreateDefendantInput = {
  address?: InputMaybe<Scalars['String']>
  caseId: Scalars['ID']
  citizenship?: InputMaybe<Scalars['String']>
  gender?: InputMaybe<Gender>
  name?: InputMaybe<Scalars['String']>
  nationalId?: InputMaybe<Scalars['String']>
  noNationalId?: InputMaybe<Scalars['Boolean']>
}

export type CreateEventLogInput = {
  caseId?: InputMaybe<Scalars['String']>
  eventType: EventType
}

export type CreateFileInput = {
  caseId: Scalars['ID']
  category?: InputMaybe<CaseFileCategory>
  /** Number of chapter where file is in. 0 or greater. If provided, then order must also be provided. */
  chapter?: InputMaybe<Scalars['Int']>
  displayDate?: InputMaybe<Scalars['String']>
  fileRepresentative?: InputMaybe<Scalars['String']>
  key: Scalars['String']
  /** Number indicating the order within chapter. 0 or greater. If provided, then chapter must also be provided. */
  orderWithinChapter?: InputMaybe<Scalars['Int']>
  policeCaseNumber?: InputMaybe<Scalars['String']>
  policeFileId?: InputMaybe<Scalars['String']>
  size: Scalars['Int']
  submissionDate?: InputMaybe<Scalars['String']>
  type: Scalars['String']
  userGeneratedFilename?: InputMaybe<Scalars['String']>
}

export type CreateIndictmentCountInput = {
  caseId: Scalars['ID']
}

export type CreateOffenseInput = {
  caseId: Scalars['ID']
  indictmentCountId: Scalars['ID']
  offense: IndictmentCountOffense
}

export type CreatePresignedPostInput = {
  caseId: Scalars['ID']
  fileName: Scalars['String']
  type: Scalars['String']
}

export type CreateUserInput = {
  active: Scalars['Boolean']
  canConfirmIndictment: Scalars['Boolean']
  email: Scalars['String']
  institutionId: Scalars['ID']
  mobileNumber: Scalars['String']
  name: Scalars['String']
  nationalId: Scalars['String']
  role: UserRole
  title: Scalars['String']
}

export type CreateVictimInput = {
  caseId: Scalars['ID']
}

export type CurrentUserResponse = {
  __typename?: 'CurrentUserResponse'
  eligibleUsers: Array<User>
  user?: Maybe<User>
}

export type CustomPage = {
  __typename?: 'CustomPage'
  alertBanner?: Maybe<AlertBanner>
  configJson?: Maybe<Scalars['JSONObject']>
  content?: Maybe<Array<Slice>>
  id: Scalars['ID']
  ogDescription?: Maybe<Scalars['String']>
  ogImage?: Maybe<Image>
  ogTitle?: Maybe<Scalars['String']>
  translationStrings: Scalars['JSONObject']
  uniqueIdentifier: Scalars['String']
}

export enum CustomPageUniqueIdentifier {
  BLOODDONATIONRESTRICTIONS = 'BloodDonationRestrictions',
  DIRECTORATEOFLABOURMYPAGES = 'DirectorateOfLabourMyPages',
  GRANTS = 'Grants',
  OFFICIALJOURNALOFICELAND = 'OfficialJournalOfIceland',
  OFFICIALJOURNALOFICELANDHELP = 'OfficialJournalOfIcelandHelp',
  PENSIONCALCULATOR = 'PensionCalculator',
  VACANCIES = 'Vacancies',
  VERDICTS = 'Verdicts',
}

export type DateLog = {
  __typename?: 'DateLog'
  date?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
}

export type Defendant = {
  __typename?: 'Defendant'
  address?: Maybe<Scalars['String']>
  alternativeServiceDescription?: Maybe<Scalars['String']>
  caseFilesSharedWithDefender?: Maybe<Scalars['Boolean']>
  caseId?: Maybe<Scalars['ID']>
  citizenship?: Maybe<Scalars['String']>
  created?: Maybe<Scalars['String']>
  defendantPlea?: Maybe<DefendantPlea>
  defenderChoice?: Maybe<DefenderChoice>
  defenderEmail?: Maybe<Scalars['String']>
  defenderName?: Maybe<Scalars['String']>
  defenderNationalId?: Maybe<Scalars['String']>
  defenderPhoneNumber?: Maybe<Scalars['String']>
  gender?: Maybe<Gender>
  id: Scalars['ID']
  isAlternativeService?: Maybe<Scalars['Boolean']>
  isDefenderChoiceConfirmed?: Maybe<Scalars['Boolean']>
  isSentToPrisonAdmin?: Maybe<Scalars['Boolean']>
  isVerdictAppealDeadlineExpired?: Maybe<Scalars['Boolean']>
  modified?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  nationalId?: Maybe<Scalars['String']>
  noNationalId?: Maybe<Scalars['Boolean']>
  openedByPrisonAdminDate?: Maybe<Scalars['String']>
  punishmentType?: Maybe<PunishmentType>
  requestedDefenderChoice?: Maybe<DefenderChoice>
  requestedDefenderName?: Maybe<Scalars['String']>
  requestedDefenderNationalId?: Maybe<Scalars['String']>
  sentToPrisonAdminDate?: Maybe<Scalars['String']>
  serviceRequirement?: Maybe<ServiceRequirement>
  subpoenaType?: Maybe<SubpoenaType>
  subpoenas?: Maybe<Array<Subpoena>>
  verdictAppealDate?: Maybe<Scalars['String']>
  verdictAppealDeadline?: Maybe<Scalars['String']>
  verdictAppealDecision?: Maybe<VerdictAppealDecision>
  verdictViewDate?: Maybe<Scalars['String']>
}

export enum DefendantPlea {
  GUILTY = 'GUILTY',
  NOT_GUILTY = 'NOT_GUILTY',
  NO_PLEA = 'NO_PLEA',
}

export enum DefenderChoice {
  CHOOSE = 'CHOOSE',
  DELAY = 'DELAY',
  DELEGATE = 'DELEGATE',
  WAIVE = 'WAIVE',
}

export type DeleteCivilClaimantInput = {
  caseId: Scalars['ID']
  civilClaimantId: Scalars['ID']
}

export type DeleteCivilClaimantResponse = {
  __typename?: 'DeleteCivilClaimantResponse'
  deleted: Scalars['Boolean']
}

export type DeleteDefendantInput = {
  caseId: Scalars['ID']
  defendantId: Scalars['ID']
}

export type DeleteDefendantResponse = {
  __typename?: 'DeleteDefendantResponse'
  deleted: Scalars['Boolean']
}

export type DeleteFileInput = {
  caseId: Scalars['ID']
  id: Scalars['ID']
}

export type DeleteFileResponse = {
  __typename?: 'DeleteFileResponse'
  success: Scalars['Boolean']
}

export type DeleteIndictmentCountInput = {
  caseId: Scalars['ID']
  indictmentCountId: Scalars['ID']
}

export type DeleteOffenseInput = {
  caseId: Scalars['ID']
  indictmentCountId: Scalars['ID']
  offenseId: Scalars['ID']
}

export type DeleteResponse = {
  __typename?: 'DeleteResponse'
  deleted: Scalars['Boolean']
}

export type DeleteVictimInput = {
  caseId: Scalars['ID']
  victimId: Scalars['ID']
}

export type DeleteVictimResponse = {
  __typename?: 'DeleteVictimResponse'
  deleted: Scalars['Boolean']
}

export type Districts = {
  __typename?: 'Districts'
  description?: Maybe<Scalars['String']>
  hasBorderAbove?: Maybe<Scalars['Boolean']>
  id: Scalars['ID']
  image?: Maybe<Image>
  links: Array<Link>
  title: Scalars['String']
}

export type EmailSignup = {
  __typename?: 'EmailSignup'
  configuration?: Maybe<Scalars['JSON']>
  description?: Maybe<Scalars['String']>
  formFields?: Maybe<Array<FormField>>
  id: Scalars['ID']
  signupType?: Maybe<Scalars['String']>
  title: Scalars['String']
  translations?: Maybe<Scalars['JSON']>
}

export type Embed = {
  __typename?: 'Embed'
  altText?: Maybe<Scalars['String']>
  aspectRatio?: Maybe<Scalars['String']>
  embedUrl?: Maybe<Scalars['String']>
  id: Scalars['ID']
  title: Scalars['String']
}

export type EmbeddedVideo = {
  __typename?: 'EmbeddedVideo'
  id: Scalars['ID']
  thumbnailImageUrl?: Maybe<Scalars['String']>
  title: Scalars['String']
  url: Scalars['String']
}

export type EnhancedAsset = {
  __typename?: 'EnhancedAsset'
  description: Scalars['String']
  file?: Maybe<Asset>
  genericTags: Array<GenericTag>
  id: Scalars['ID']
  organization: Organization
  releaseDate?: Maybe<Scalars['String']>
  title: Scalars['String']
}

export type EnhancedAssetSearchResult = {
  __typename?: 'EnhancedAssetSearchResult'
  items: Array<EnhancedAsset>
  total: Scalars['Float']
}

export type EntryTitle = {
  __typename?: 'EntryTitle'
  title: Scalars['String']
}

export type ErrorPage = {
  __typename?: 'ErrorPage'
  description?: Maybe<Html>
  errorCode: Scalars['String']
  id: Scalars['ID']
  title: Scalars['String']
}

export type Event = {
  __typename?: 'Event'
  content?: Maybe<Array<Slice>>
  contentImage?: Maybe<Image>
  endDate: Scalars['String']
  featuredImage?: Maybe<Image>
  firstPublishedAt?: Maybe<Scalars['String']>
  fullWidthImageInContent?: Maybe<Scalars['Boolean']>
  id: Scalars['ID']
  location: EventLocation
  organization?: Maybe<Organization>
  slug: Scalars['String']
  startDate: Scalars['String']
  thumbnailImage?: Maybe<Image>
  time: EventTime
  title: Scalars['String']
  video?: Maybe<EmbeddedVideo>
}

export type EventList = {
  __typename?: 'EventList'
  items: Array<Event>
  total: Scalars['Int']
}

export type EventLocation = {
  __typename?: 'EventLocation'
  floor?: Maybe<Scalars['String']>
  freeText?: Maybe<Scalars['String']>
  postalCode?: Maybe<Scalars['String']>
  streetAddress?: Maybe<Scalars['String']>
  useFreeText?: Maybe<Scalars['Boolean']>
}

export type EventLog = {
  __typename?: 'EventLog'
  caseId?: Maybe<Scalars['ID']>
  created?: Maybe<Scalars['String']>
  eventType?: Maybe<EventType>
  id: Scalars['ID']
  nationalId?: Maybe<Scalars['String']>
  userRole?: Maybe<UserRole>
}

export type EventSlice = {
  __typename?: 'EventSlice'
  backgroundImage?: Maybe<Image>
  date: Scalars['String']
  id: Scalars['ID']
  link?: Maybe<Link>
  subtitle: Scalars['String']
  title: Scalars['String']
}

export type EventTime = {
  __typename?: 'EventTime'
  endTime?: Maybe<Scalars['String']>
  startTime?: Maybe<Scalars['String']>
}

export enum EventType {
  APPEAL_RESULT_ACCESSED = 'APPEAL_RESULT_ACCESSED',
  CASE_RECEIVED_BY_COURT = 'CASE_RECEIVED_BY_COURT',
  CASE_SENT_TO_COURT = 'CASE_SENT_TO_COURT',
  INDICTMENT_COMPLETED = 'INDICTMENT_COMPLETED',
  INDICTMENT_CONFIRMED = 'INDICTMENT_CONFIRMED',
  INDICTMENT_REVIEWED = 'INDICTMENT_REVIEWED',
  INDICTMENT_SENT_TO_PUBLIC_PROSECUTOR = 'INDICTMENT_SENT_TO_PUBLIC_PROSECUTOR',
  LOGIN = 'LOGIN',
  LOGIN_BYPASS = 'LOGIN_BYPASS',
  LOGIN_BYPASS_UNAUTHORIZED = 'LOGIN_BYPASS_UNAUTHORIZED',
  LOGIN_UNAUTHORIZED = 'LOGIN_UNAUTHORIZED',
}

export type ExtendCaseInput = {
  id: Scalars['ID']
}

export type FaqList = {
  __typename?: 'FaqList'
  id: Scalars['ID']
  questions: Array<QuestionAndAnswer>
  showTitle?: Maybe<Scalars['Boolean']>
  title: Scalars['String']
}

export type Featured = {
  __typename?: 'Featured'
  attention: Scalars['Boolean']
  thing?: Maybe<ReferenceLink>
  title: Scalars['String']
}

export type FeaturedArticles = {
  __typename?: 'FeaturedArticles'
  articles: Array<ArticleReference>
  automaticallyFetchArticles?: Maybe<Scalars['Boolean']>
  hasBorderAbove?: Maybe<Scalars['Boolean']>
  id: Scalars['ID']
  image?: Maybe<Image>
  introText?: Maybe<Array<Slice>>
  link?: Maybe<Link>
  resolvedArticles: Array<Article>
  sortBy: Scalars['String']
  title: Scalars['String']
}

export type FeaturedEvents = {
  __typename?: 'FeaturedEvents'
  id: Scalars['ID']
  namespace: Scalars['JSONObject']
  noEventsFoundText?: Maybe<Array<Slice>>
  organization?: Maybe<Scalars['String']>
  resolvedEventList: EventList
}

export type FeaturedLinks = {
  __typename?: 'FeaturedLinks'
  featuredLinks?: Maybe<Array<Featured>>
  id: Scalars['ID']
  title: Scalars['String']
}

export type FeaturedSupportQnAs = {
  __typename?: 'FeaturedSupportQNAs'
  automaticallyFetchSupportQNAs?: Maybe<Scalars['Boolean']>
  id: Scalars['ID']
  link?: Maybe<Link>
  renderedTitle?: Maybe<Scalars['String']>
  resolvedSupportQNAs: Array<SupportQna>
  supportQNAs?: Maybe<Array<SupportQna>>
}

export type FooterItem = {
  __typename?: 'FooterItem'
  content?: Maybe<Array<Slice>>
  id: Scalars['ID']
  link?: Maybe<Link>
  serviceWebContent?: Maybe<Array<Slice>>
  title: Scalars['String']
}

export type Form = {
  __typename?: 'Form'
  aboutYouHeadingText: Scalars['String']
  defaultFieldNamespace?: Maybe<Scalars['JSON']>
  fields: Array<FormField>
  id: Scalars['ID']
  intro: Scalars['String']
  questionsHeadingText: Scalars['String']
  recipientFormFieldDecider?: Maybe<FormField>
  recipientList?: Maybe<Array<Scalars['String']>>
  successText: Scalars['String']
  title: Scalars['String']
}

export type FormField = {
  __typename?: 'FormField'
  emailConfig?: Maybe<Scalars['JSON']>
  id: Scalars['ID']
  informationText?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  options: Array<Scalars['String']>
  placeholder: Scalars['String']
  required: Scalars['Boolean']
  title: Scalars['String']
  type: Scalars['String']
}

export type Frontpage = {
  __typename?: 'Frontpage'
  featured: Array<Featured>
  heading?: Maybe<Scalars['String']>
  id: Scalars['ID']
  image?: Maybe<Image>
  imageAlternativeText?: Maybe<Scalars['String']>
  imageMobile?: Maybe<Image>
  lifeEvents: Array<LifeEventPage>
  linkList?: Maybe<LinkList>
  namespace?: Maybe<Namespace>
  slides: Array<FrontpageSlider>
  title?: Maybe<Scalars['String']>
  videos?: Maybe<Array<Image>>
  videosMobile?: Maybe<Array<Image>>
}

export type FrontpageSlider = {
  __typename?: 'FrontpageSlider'
  animationJsonAsset?: Maybe<Asset>
  content: Scalars['String']
  intro?: Maybe<Html>
  link?: Maybe<Scalars['String']>
  subtitle: Scalars['String']
  title: Scalars['String']
}

export enum Gender {
  FEMALE = 'FEMALE',
  MALE = 'MALE',
  OTHER = 'OTHER',
}

export type GenericList = {
  __typename?: 'GenericList'
  defaultOrder?: Maybe<GetGenericListItemsInputOrderBy>
  filterTags?: Maybe<Array<GenericTag>>
  id: Scalars['ID']
  itemType?: Maybe<GenericListItemType>
  searchInputPlaceholder?: Maybe<Scalars['String']>
  showSearchInput?: Maybe<Scalars['Boolean']>
}

export type GenericListItem = {
  __typename?: 'GenericListItem'
  assetUrl?: Maybe<Scalars['String']>
  cardIntro: Array<Slice>
  content?: Maybe<Array<Slice>>
  date?: Maybe<Scalars['String']>
  externalUrl?: Maybe<Scalars['String']>
  filterTags?: Maybe<Array<GenericTag>>
  fullWidthImageInContent?: Maybe<Scalars['Boolean']>
  genericList?: Maybe<GenericList>
  id: Scalars['ID']
  image?: Maybe<Image>
  slug?: Maybe<Scalars['String']>
  title: Scalars['String']
}

export type GenericListItemResponse = {
  __typename?: 'GenericListItemResponse'
  input: GenericListItemResponseInput
  items: Array<GenericListItem>
  total: Scalars['Int']
}

export type GenericListItemResponseInput = {
  __typename?: 'GenericListItemResponseInput'
  genericListId: Scalars['String']
  lang: Scalars['String']
  orderBy?: Maybe<GetGenericListItemsInputOrderBy>
  page?: Maybe<Scalars['Int']>
  queryString?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['Int']>
  tagGroups?: Maybe<Scalars['JSON']>
  tags?: Maybe<Array<Scalars['String']>>
}

export enum GenericListItemType {
  CLICKABLE = 'Clickable',
  NONCLICKABLE = 'NonClickable',
}

export type GenericOverviewPage = {
  __typename?: 'GenericOverviewPage'
  id: Scalars['ID']
  intro?: Maybe<Html>
  navigation: Menu
  overviewLinks: Array<IntroLinkImage>
  pageIdentifier: Scalars['String']
  title: Scalars['String']
}

export type GenericPage = {
  __typename?: 'GenericPage'
  intro?: Maybe<Scalars['String']>
  mainContent?: Maybe<Scalars['String']>
  misc?: Maybe<Scalars['String']>
  sidebar?: Maybe<Scalars['String']>
  slug: Scalars['String']
  title: Scalars['String']
}

export type GenericTag = {
  __typename?: 'GenericTag'
  genericTagGroup?: Maybe<GenericTagGroup>
  id: Scalars['ID']
  slug: Scalars['String']
  title: Scalars['String']
}

export type GenericTagGroup = {
  __typename?: 'GenericTagGroup'
  id: Scalars['ID']
  slug: Scalars['String']
  title: Scalars['String']
}

export type GetAlertBannerInput = {
  id: Scalars['String']
  lang?: InputMaybe<Scalars['String']>
}

export type GetAnchorPageInput = {
  lang?: InputMaybe<Scalars['String']>
  slug: Scalars['String']
}

export type GetAnchorPagesInput = {
  lang?: InputMaybe<Scalars['String']>
}

export type GetArticleCategoriesInput = {
  lang?: InputMaybe<Scalars['String']>
  size?: InputMaybe<Scalars['Int']>
}

export type GetArticlesInput = {
  category?: InputMaybe<Scalars['String']>
  group?: InputMaybe<Scalars['String']>
  lang?: InputMaybe<Scalars['String']>
  organization?: InputMaybe<Scalars['String']>
  size?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<SortField>
  subgroup?: InputMaybe<Scalars['String']>
}

export type GetAuctionInput = {
  id: Scalars['String']
  lang?: InputMaybe<Scalars['String']>
}

export type GetAuctionsInput = {
  lang?: InputMaybe<Scalars['String']>
  month?: InputMaybe<Scalars['Float']>
  organization?: InputMaybe<Scalars['String']>
  year?: InputMaybe<Scalars['Float']>
}

export type GetBloodDonationRestrictionDetailsInput = {
  id: Scalars['String']
  lang?: InputMaybe<Scalars['String']>
}

export type GetBloodDonationRestrictionGenericTagsInput = {
  lang?: InputMaybe<Scalars['String']>
}

export type GetBloodDonationRestrictionsInput = {
  lang?: InputMaybe<Scalars['String']>
  page?: InputMaybe<Scalars['Int']>
  queryString?: InputMaybe<Scalars['String']>
  tagKeys?: InputMaybe<Array<Scalars['String']>>
}

export type GetBloodDonationRestrictionsInputModel = {
  __typename?: 'GetBloodDonationRestrictionsInputModel'
  lang: Scalars['String']
  page?: Maybe<Scalars['Int']>
  queryString?: Maybe<Scalars['String']>
  tagKeys?: Maybe<Array<Scalars['String']>>
}

export type GetCategoryPagesInput = {
  category?: InputMaybe<Scalars['String']>
  group?: InputMaybe<Scalars['String']>
  lang?: InputMaybe<Scalars['String']>
  organization?: InputMaybe<Scalars['String']>
  size?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<SortField>
  subgroup?: InputMaybe<Scalars['String']>
}

export type GetContentSlugInput = {
  id: Scalars['String']
}

export type GetCustomPageInput = {
  lang?: InputMaybe<Scalars['String']>
  uniqueIdentifier: CustomPageUniqueIdentifier
}

export type GetCustomSubpageInput = {
  lang?: InputMaybe<Scalars['String']>
  parentPageId: Scalars['String']
  slug: Scalars['String']
}

export type GetErrorPageInput = {
  errorCode: Scalars['String']
  lang?: InputMaybe<Scalars['String']>
}

export type GetEventsInput = {
  lang?: InputMaybe<Scalars['String']>
  onlyIncludePastEvents?: InputMaybe<Scalars['Boolean']>
  order?: InputMaybe<Scalars['String']>
  organization?: InputMaybe<Scalars['String']>
  page?: InputMaybe<Scalars['Int']>
  size?: InputMaybe<Scalars['Int']>
}

export type GetFeaturedSupportQnAsInput = {
  category?: InputMaybe<Scalars['String']>
  lang?: InputMaybe<Scalars['String']>
  organization?: InputMaybe<Scalars['String']>
  size?: InputMaybe<Scalars['Int']>
  subCategory?: InputMaybe<Scalars['String']>
}

export type GetFrontpageInput = {
  lang?: InputMaybe<Scalars['String']>
  pageIdentifier: Scalars['String']
}

export type GetGenericListItemBySlugInput = {
  lang?: InputMaybe<Scalars['String']>
  slug: Scalars['String']
}

export type GetGenericListItemsInput = {
  genericListId: Scalars['String']
  lang?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<GetGenericListItemsInputOrderBy>
  page?: InputMaybe<Scalars['Int']>
  queryString?: InputMaybe<Scalars['String']>
  size?: InputMaybe<Scalars['Int']>
  tagGroups?: InputMaybe<Scalars['JSON']>
  tags?: InputMaybe<Array<Scalars['String']>>
}

export enum GetGenericListItemsInputOrderBy {
  DATE = 'DATE',
  PUBLISH_DATE = 'PUBLISH_DATE',
  TITLE = 'TITLE',
}

export type GetGenericOverviewPageInput = {
  lang?: InputMaybe<Scalars['String']>
  pageIdentifier: Scalars['String']
}

export type GetGenericPageInput = {
  lang?: InputMaybe<Scalars['String']>
  slug: Scalars['String']
}

export type GetGenericTagBySlugInput = {
  lang?: InputMaybe<Scalars['String']>
  slug: Scalars['String']
}

export type GetGenericTagsInTagGroupsInput = {
  lang?: InputMaybe<Scalars['String']>
  tagGroupSlugs?: InputMaybe<Array<Scalars['String']>>
}

export type GetGrantsInput = {
  categories?: InputMaybe<Array<Scalars['String']>>
  funds?: InputMaybe<Array<Scalars['String']>>
  lang?: InputMaybe<Scalars['String']>
  organizations?: InputMaybe<Array<Scalars['String']>>
  page?: InputMaybe<Scalars['Int']>
  search?: InputMaybe<Scalars['String']>
  size?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<GetGrantsInputSortByEnum>
  status?: InputMaybe<GetGrantsInputAvailabilityStatusEnum>
  types?: InputMaybe<Array<Scalars['String']>>
}

export enum GetGrantsInputAvailabilityStatusEnum {
  CLOSED = 'CLOSED',
  OPEN = 'OPEN',
}

export enum GetGrantsInputSortByEnum {
  ALPHABETICAL = 'ALPHABETICAL',
  RECENTLY_UPDATED = 'RECENTLY_UPDATED',
}

export type GetLifeEventPageInput = {
  lang?: InputMaybe<Scalars['String']>
  slug: Scalars['String']
}

export type GetLifeEventsInCategoryInput = {
  lang?: InputMaybe<Scalars['String']>
  slug: Scalars['String']
}

export type GetLifeEventsInput = {
  lang?: InputMaybe<Scalars['String']>
}

export type GetMenuInput = {
  lang?: InputMaybe<Scalars['String']>
  name: Scalars['String']
}

export type GetNamespaceInput = {
  lang?: InputMaybe<Scalars['String']>
  namespace?: InputMaybe<Scalars['String']>
}

export type GetNewsDatesInput = {
  lang?: InputMaybe<Scalars['String']>
  order?: InputMaybe<Scalars['String']>
  organization?: InputMaybe<Scalars['String']>
  tags?: InputMaybe<Array<Scalars['String']>>
}

export type GetNewsInput = {
  lang?: InputMaybe<Scalars['String']>
  month?: InputMaybe<Scalars['Int']>
  order?: InputMaybe<Scalars['String']>
  organization?: InputMaybe<Scalars['String']>
  page?: InputMaybe<Scalars['Int']>
  size?: InputMaybe<Scalars['Int']>
  tags?: InputMaybe<Array<Scalars['String']>>
  year?: InputMaybe<Scalars['Int']>
}

export type GetOpenDataPageInput = {
  lang?: InputMaybe<Scalars['String']>
}

export type GetOpenDataSubpageInput = {
  lang?: InputMaybe<Scalars['String']>
}

export type GetOrganizationByNationalIdInput = {
  lang?: InputMaybe<Scalars['String']>
  nationalId: Scalars['String']
}

export type GetOrganizationByTitleInput = {
  lang?: InputMaybe<Scalars['String']>
  title: Scalars['String']
}

export type GetOrganizationInput = {
  lang?: InputMaybe<Scalars['String']>
  slug?: InputMaybe<Scalars['String']>
}

export type GetOrganizationPageInput = {
  lang?: InputMaybe<Scalars['String']>
  slug: Scalars['String']
}

export type GetOrganizationPageStandaloneSitemapLevel1Input = {
  categorySlug: Scalars['String']
  lang?: InputMaybe<Scalars['String']>
  organizationPageSlug: Scalars['String']
}

export type GetOrganizationPageStandaloneSitemapLevel2Input = {
  categorySlug: Scalars['String']
  lang?: InputMaybe<Scalars['String']>
  organizationPageSlug: Scalars['String']
  subcategorySlug: Scalars['String']
}

export type GetOrganizationParentSubpageInput = {
  lang?: InputMaybe<Scalars['String']>
  organizationPageSlug: Scalars['String']
  slug: Scalars['String']
}

export type GetOrganizationSubpageByIdInput = {
  id: Scalars['String']
  lang?: InputMaybe<Scalars['String']>
}

export type GetOrganizationSubpageInput = {
  lang?: InputMaybe<Scalars['String']>
  organizationSlug: Scalars['String']
  slug: Scalars['String']
}

export type GetOrganizationTagsInput = {
  lang?: InputMaybe<Scalars['String']>
}

export type GetOrganizationsInput = {
  lang?: InputMaybe<Scalars['String']>
  organizationTitles?: InputMaybe<Array<Scalars['String']>>
  perPage?: InputMaybe<Scalars['Int']>
  referenceIdentifiers?: InputMaybe<Array<Scalars['String']>>
}

export type GetPowerBiEmbedPropsFromServerResponse = {
  __typename?: 'GetPowerBiEmbedPropsFromServerResponse'
  accessToken?: Maybe<Scalars['String']>
  embedUrl?: Maybe<Scalars['String']>
}

export type GetProjectPageInput = {
  lang?: InputMaybe<Scalars['String']>
  slug: Scalars['String']
}

export type GetPublishedMaterialInput = {
  lang?: InputMaybe<Scalars['String']>
  organizationSlug?: InputMaybe<Scalars['String']>
  page?: InputMaybe<Scalars['Int']>
  searchString?: InputMaybe<Scalars['String']>
  size?: InputMaybe<Scalars['Int']>
  sort: Scalars['JSON']
  tagGroups: Scalars['JSON']
  tags: Array<Scalars['String']>
}

export type GetServicePortalAlertBannersInput = {
  lang?: InputMaybe<Scalars['String']>
}

export type GetServiceWebPageInput = {
  lang?: InputMaybe<Scalars['String']>
  slug: Scalars['String']
}

export type GetSignedUrlInput = {
  caseId: Scalars['ID']
  id: Scalars['ID']
  mergedCaseId?: InputMaybe<Scalars['ID']>
}

export type GetSingleArticleInput = {
  lang?: InputMaybe<Scalars['String']>
  slug: Scalars['String']
}

export type GetSingleEntryTitleByIdInput = {
  id: Scalars['String']
  lang?: InputMaybe<Scalars['String']>
}

export type GetSingleEventInput = {
  lang?: InputMaybe<Scalars['String']>
  slug: Scalars['String']
}

export type GetSingleGrantInput = {
  id: Scalars['String']
  lang?: InputMaybe<Scalars['String']>
}

export type GetSingleManualInput = {
  lang?: InputMaybe<Scalars['String']>
  slug: Scalars['String']
}

export type GetSingleMenuInput = {
  id: Scalars['String']
  lang?: InputMaybe<Scalars['String']>
}

export type GetSingleNewsInput = {
  lang?: InputMaybe<Scalars['String']>
  slug: Scalars['String']
}

export type GetSingleSupportQnaInput = {
  lang?: InputMaybe<Scalars['String']>
  slug: Scalars['String']
}

export type GetSubpageHeaderInput = {
  id: Scalars['String']
  lang?: InputMaybe<Scalars['String']>
}

export type GetSupportCategoriesInOrganizationInput = {
  lang?: InputMaybe<Scalars['String']>
  slug: Scalars['String']
}

export type GetSupportCategoriesInput = {
  lang?: InputMaybe<Scalars['String']>
}

export type GetSupportCategoryInput = {
  lang?: InputMaybe<Scalars['String']>
  slug: Scalars['String']
}

export type GetSupportQnAsInCategoryInput = {
  lang?: InputMaybe<Scalars['String']>
  slug: Scalars['String']
}

export type GetSupportQnAsInput = {
  lang?: InputMaybe<Scalars['String']>
}

export type GetTabSectionInput = {
  id: Scalars['String']
  lang?: InputMaybe<Scalars['String']>
}

export type GetTeamMembersInput = {
  lang?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<GetTeamMembersInputOrderBy>
  page?: InputMaybe<Scalars['Int']>
  queryString?: InputMaybe<Scalars['String']>
  size?: InputMaybe<Scalars['Int']>
  tagGroups?: InputMaybe<Scalars['JSON']>
  tags?: InputMaybe<Array<Scalars['String']>>
  teamListId: Scalars['String']
}

export enum GetTeamMembersInputOrderBy {
  MANUAL = 'Manual',
  NAME = 'Name',
}

export type GetTranslationsInput = {
  lang: Scalars['String']
  namespaces: Array<Scalars['String']>
}

export type GetUrlInput = {
  lang?: InputMaybe<Scalars['String']>
  slug: Scalars['String']
}

export type Grant = {
  __typename?: 'Grant'
  answeringQuestions: Array<Slice>
  applicationButtonLabel?: Maybe<Scalars['String']>
  applicationHints: Array<Slice>
  applicationId?: Maybe<Scalars['String']>
  applicationUrl?: Maybe<ReferenceLink>
  categoryTags?: Maybe<Array<GenericTag>>
  dateFrom?: Maybe<Scalars['String']>
  dateTo?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  files?: Maybe<Array<Asset>>
  fund?: Maybe<OrganizationFund>
  howToApply: Array<Slice>
  id: Scalars['ID']
  lastUpdateTimestamp: Scalars['String']
  name: Scalars['String']
  specialEmphasis: Array<Slice>
  status?: Maybe<GrantStatus>
  statusText?: Maybe<Scalars['String']>
  supportLinks?: Maybe<Array<Link>>
  typeTag?: Maybe<GenericTag>
  whoCanApply: Array<Slice>
}

export type GrantCardsList = {
  __typename?: 'GrantCardsList'
  displayTitle?: Maybe<Scalars['Boolean']>
  id: Scalars['ID']
  maxNumberOfCards?: Maybe<Scalars['Int']>
  namespace: Scalars['JSONObject']
  resolvedGrantsList?: Maybe<GrantList>
  sorting?: Maybe<GrantCardsListSorting>
  title: Scalars['String']
}

export enum GrantCardsListSorting {
  ALPHABETICAL = 'ALPHABETICAL',
  MOST_RECENTLY_UPDATED_FIRST = 'MOST_RECENTLY_UPDATED_FIRST',
}

export type GrantList = {
  __typename?: 'GrantList'
  items: Array<Grant>
  total: Scalars['Int']
}

export enum GrantStatus {
  ALWAYS_OPEN = 'ALWAYS_OPEN',
  CLOSED = 'CLOSED',
  CLOSED_OPENING_SOON = 'CLOSED_OPENING_SOON',
  CLOSED_OPENING_SOON_WITH_ESTIMATION = 'CLOSED_OPENING_SOON_WITH_ESTIMATION',
  CLOSED_WITH_NOTE = 'CLOSED_WITH_NOTE',
  INVALID = 'INVALID',
  OPEN = 'OPEN',
  OPEN_WITH_NOTE = 'OPEN_WITH_NOTE',
  UNKNOWN = 'UNKNOWN',
}

export type GraphCard = {
  __typename?: 'GraphCard'
  data: Scalars['String']
  datakeys: Scalars['String']
  displayAsCard: Scalars['Boolean']
  graphDescription: Scalars['String']
  graphTitle: Scalars['String']
  id: Scalars['ID']
  organization?: Maybe<Scalars['String']>
  organizationLogo?: Maybe<Image>
  type: Scalars['String']
}

export type GroupedMenu = {
  __typename?: 'GroupedMenu'
  id: Scalars['ID']
  menus: Array<Menu>
  title: Scalars['String']
}

export type HeadingSlice = {
  __typename?: 'HeadingSlice'
  body: Scalars['String']
  id: Scalars['ID']
  title: Scalars['String']
}

export type Html = {
  __typename?: 'Html'
  document: Scalars['JSON']
  id: Scalars['ID']
  typename: Scalars['String']
}

export type IconBullet = {
  __typename?: 'IconBullet'
  body: Scalars['String']
  icon: Image
  id: Scalars['ID']
  linkText?: Maybe<Scalars['String']>
  title: Scalars['String']
  url?: Maybe<Scalars['String']>
}

export type Image = {
  __typename?: 'Image'
  contentType: Scalars['String']
  description?: Maybe<Scalars['String']>
  height: Scalars['Int']
  id: Scalars['ID']
  title: Scalars['String']
  url: Scalars['String']
  width: Scalars['Int']
}

export enum IndictmentCaseReviewDecision {
  ACCEPT = 'ACCEPT',
  APPEAL = 'APPEAL',
}

export type IndictmentCaseStatistics = {
  __typename?: 'IndictmentCaseStatistics'
  averageRulingTimeDays: Scalars['Float']
  averageRulingTimeMs: Scalars['Float']
  count: Scalars['Float']
  inProgressCount: Scalars['Float']
  rulingCount: Scalars['Float']
}

export type IndictmentCount = {
  __typename?: 'IndictmentCount'
  caseId?: Maybe<Scalars['ID']>
  created?: Maybe<Scalars['String']>
  id: Scalars['ID']
  incidentDescription?: Maybe<Scalars['String']>
  indictmentCountSubtypes?: Maybe<Array<IndictmentSubtype>>
  lawsBroken?: Maybe<Array<Array<Scalars['Float']>>>
  legalArguments?: Maybe<Scalars['String']>
  modified?: Maybe<Scalars['String']>
  offenses?: Maybe<Array<Offense>>
  policeCaseNumber?: Maybe<Scalars['String']>
  recordedSpeed?: Maybe<Scalars['Int']>
  speedLimit?: Maybe<Scalars['Int']>
  vehicleRegistrationNumber?: Maybe<Scalars['String']>
}

export enum IndictmentCountOffense {
  DRIVING_WITHOUT_EVER_HAVING_LICENSE = 'DRIVING_WITHOUT_EVER_HAVING_LICENSE',
  DRIVING_WITHOUT_LICENCE = 'DRIVING_WITHOUT_LICENCE',
  DRIVING_WITHOUT_VALID_LICENSE = 'DRIVING_WITHOUT_VALID_LICENSE',
  DRUNK_DRIVING = 'DRUNK_DRIVING',
  ILLEGAL_DRUGS_DRIVING = 'ILLEGAL_DRUGS_DRIVING',
  OTHER = 'OTHER',
  PRESCRIPTION_DRUGS_DRIVING = 'PRESCRIPTION_DRUGS_DRIVING',
  SPEEDING = 'SPEEDING',
}

export enum IndictmentDecision {
  COMPLETING = 'COMPLETING',
  POSTPONING = 'POSTPONING',
  POSTPONING_UNTIL_VERDICT = 'POSTPONING_UNTIL_VERDICT',
  REDISTRIBUTING = 'REDISTRIBUTING',
  SCHEDULING = 'SCHEDULING',
}

export enum IndictmentSubtype {
  AGGRAVATED_ASSAULT = 'AGGRAVATED_ASSAULT',
  ALCOHOL_LAWS = 'ALCOHOL_LAWS',
  ANIMAL_PROTECTION = 'ANIMAL_PROTECTION',
  ASSAULT_LEADING_TO_DEATH = 'ASSAULT_LEADING_TO_DEATH',
  ATTEMPTED_MURDER = 'ATTEMPTED_MURDER',
  BODILY_INJURY = 'BODILY_INJURY',
  BREAKING_AND_ENTERING = 'BREAKING_AND_ENTERING',
  CHILD_PROTECTION_LAWS = 'CHILD_PROTECTION_LAWS',
  COVER_UP = 'COVER_UP',
  CUSTOMS_VIOLATION = 'CUSTOMS_VIOLATION',
  DOMESTIC_VIOLENCE = 'DOMESTIC_VIOLENCE',
  EMBEZZLEMENT = 'EMBEZZLEMENT',
  FOREIGN_NATIONALS = 'FOREIGN_NATIONALS',
  FRAUD = 'FRAUD',
  INDECENT_EXPOSURE = 'INDECENT_EXPOSURE',
  INTIMATE_RELATIONS = 'INTIMATE_RELATIONS',
  LEGAL_ENFORCEMENT_LAWS = 'LEGAL_ENFORCEMENT_LAWS',
  LOOTING = 'LOOTING',
  MAJOR_ASSAULT = 'MAJOR_ASSAULT',
  MEDICINES_OFFENSE = 'MEDICINES_OFFENSE',
  MINOR_ASSAULT = 'MINOR_ASSAULT',
  MONEY_LAUNDERING = 'MONEY_LAUNDERING',
  MURDER = 'MURDER',
  NARCOTICS_OFFENSE = 'NARCOTICS_OFFENSE',
  NAVAL_LAW_VIOLATION = 'NAVAL_LAW_VIOLATION',
  OTHER_CRIMINAL_OFFENSES = 'OTHER_CRIMINAL_OFFENSES',
  OTHER_OFFENSES = 'OTHER_OFFENSES',
  POLICE_REGULATIONS = 'POLICE_REGULATIONS',
  PROPERTY_DAMAGE = 'PROPERTY_DAMAGE',
  PUBLIC_SERVICE_VIOLATION = 'PUBLIC_SERVICE_VIOLATION',
  RAPE = 'RAPE',
  SEXUAL_OFFENSES_OTHER_THAN_RAPE = 'SEXUAL_OFFENSES_OTHER_THAN_RAPE',
  TAX_VIOLATION = 'TAX_VIOLATION',
  THEFT = 'THEFT',
  THREAT = 'THREAT',
  TRAFFIC_VIOLATION = 'TRAFFIC_VIOLATION',
  UTILITY_THEFT = 'UTILITY_THEFT',
  WEPONS_VIOLATION = 'WEPONS_VIOLATION',
}

export type Institution = {
  __typename?: 'Institution'
  active?: Maybe<Scalars['Boolean']>
  created?: Maybe<Scalars['String']>
  defaultCourtId?: Maybe<Scalars['ID']>
  id: Scalars['ID']
  modified?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  nationalId?: Maybe<Scalars['String']>
  policeCaseNumberPrefix?: Maybe<Scalars['String']>
  type?: Maybe<InstitutionType>
}

export enum InstitutionType {
  COURT_ADMINISTRATION_OFFICE = 'COURT_ADMINISTRATION_OFFICE',
  COURT_OF_APPEALS = 'COURT_OF_APPEALS',
  DISTRICT_COURT = 'DISTRICT_COURT',
  DISTRICT_PROSECUTORS_OFFICE = 'DISTRICT_PROSECUTORS_OFFICE',
  NATIONAL_COMMISSIONERS_OFFICE = 'NATIONAL_COMMISSIONERS_OFFICE',
  POLICE_PROSECUTORS_OFFICE = 'POLICE_PROSECUTORS_OFFICE',
  PRISON = 'PRISON',
  PRISON_ADMIN = 'PRISON_ADMIN',
  PUBLIC_PROSECUTORS_OFFICE = 'PUBLIC_PROSECUTORS_OFFICE',
}

export type IntroLinkImage = {
  __typename?: 'IntroLinkImage'
  id: Scalars['ID']
  image?: Maybe<Image>
  intro?: Maybe<Html>
  introHtml?: Maybe<Html>
  leftImage: Scalars['Boolean']
  link?: Maybe<ReferenceLink>
  linkTitle: Scalars['String']
  openLinkInNewTab: Scalars['Boolean']
  title: Scalars['String']
}

export type LatestEventsSlice = {
  __typename?: 'LatestEventsSlice'
  events: Array<Event>
  id: Scalars['ID']
  title: Scalars['String']
}

export type LatestGenericListItems = {
  __typename?: 'LatestGenericListItems'
  genericList?: Maybe<GenericList>
  id: Scalars['ID']
  itemResponse?: Maybe<GenericListItemResponse>
  seeMoreLinkText: Scalars['String']
  seeMorePage?: Maybe<Page>
  title: Scalars['String']
}

export type LatestNewsSlice = {
  __typename?: 'LatestNewsSlice'
  id: Scalars['ID']
  news: Array<News>
  readMoreLink?: Maybe<Link>
  readMoreText: Scalars['String']
  tag: Scalars['String']
  title: Scalars['String']
}

export type LifeEventPage = {
  __typename?: 'LifeEventPage'
  category?: Maybe<ArticleCategory>
  content: Array<Slice>
  featured: Array<Featured>
  featuredImage?: Maybe<Image>
  id: Scalars['ID']
  image?: Maybe<Image>
  intro?: Maybe<Scalars['String']>
  organizations: Array<Organization>
  relatedLifeEvents: Array<LifeEventPage>
  seeMoreText?: Maybe<Scalars['String']>
  shortIntro?: Maybe<Scalars['String']>
  shortTitle?: Maybe<Scalars['String']>
  slug: Scalars['String']
  thumbnail?: Maybe<Image>
  tinyThumbnail?: Maybe<Image>
  title: Scalars['String']
}

export type Link = {
  __typename?: 'Link'
  date: Scalars['String']
  id: Scalars['ID']
  intro?: Maybe<Scalars['String']>
  labels?: Maybe<Array<Scalars['String']>>
  text: Scalars['String']
  url: Scalars['String']
}

export type LinkCard = {
  __typename?: 'LinkCard'
  body: Scalars['String']
  id: Scalars['ID']
  linkText?: Maybe<Scalars['String']>
  linkUrl: Scalars['String']
  title: Scalars['String']
}

export type LinkCardSection = {
  __typename?: 'LinkCardSection'
  cards: Array<LinkCard>
  id: Scalars['ID']
  title: Scalars['String']
}

export type LinkGroup = {
  __typename?: 'LinkGroup'
  childrenLinks: Array<Link>
  id: Scalars['ID']
  name: Scalars['String']
  primaryLink?: Maybe<Link>
}

export type LinkList = {
  __typename?: 'LinkList'
  links: Array<Link>
  title: Scalars['String']
}

export type LogoListSlice = {
  __typename?: 'LogoListSlice'
  body: Scalars['String']
  id: Scalars['ID']
  images: Array<Image>
  title: Scalars['String']
}

export type Manual = {
  __typename?: 'Manual'
  category?: Maybe<ArticleCategory>
  chapters: Array<ManualChapter>
  description?: Maybe<Array<Slice>>
  group?: Maybe<ArticleGroup>
  id: Scalars['ID']
  importance?: Maybe<Scalars['Float']>
  info?: Maybe<Array<Slice>>
  organization?: Maybe<Organization>
  otherCategories?: Maybe<Array<ArticleCategory>>
  otherGroups?: Maybe<Array<ArticleGroup>>
  otherSubgroups?: Maybe<Array<ArticleSubgroup>>
  slug: Scalars['String']
  subgroup?: Maybe<ArticleSubgroup>
  title: Scalars['String']
}

export type ManualChapter = {
  __typename?: 'ManualChapter'
  changelog?: Maybe<ManualChapterChangelog>
  chapterItems: Array<ManualChapterItem>
  description?: Maybe<Array<Slice>>
  id: Scalars['ID']
  intro?: Maybe<Scalars['String']>
  slug: Scalars['String']
  title: Scalars['String']
}

export type ManualChapterChangelog = {
  __typename?: 'ManualChapterChangelog'
  items: Array<ManualChapterChangelogItem>
}

export type ManualChapterChangelogItem = {
  __typename?: 'ManualChapterChangelogItem'
  dateOfChange: Scalars['String']
  textualDescription: Scalars['String']
}

export type ManualChapterItem = {
  __typename?: 'ManualChapterItem'
  content?: Maybe<Array<Slice>>
  id: Scalars['ID']
  manual: ManualPageData
  manualChapter: ManualPageData
  title: Scalars['String']
}

export type ManualPageData = {
  __typename?: 'ManualPageData'
  id: Scalars['ID']
  slug: Scalars['String']
  title: Scalars['String']
}

export type Menu = {
  __typename?: 'Menu'
  id: Scalars['ID']
  links: Array<Link>
  menuLinks: Array<MenuLinkWithChildren>
  title: Scalars['String']
}

export type MenuLink = {
  __typename?: 'MenuLink'
  link: ReferenceLink
  title: Scalars['String']
}

export type MenuLinkWithChildren = {
  __typename?: 'MenuLinkWithChildren'
  childLinks: Array<MenuLink>
  link?: Maybe<ReferenceLink>
  title: Scalars['String']
}

export type MultipleStatistics = {
  __typename?: 'MultipleStatistics'
  hasBorderAbove?: Maybe<Scalars['Boolean']>
  id: Scalars['ID']
  link?: Maybe<Link>
  statistics: Array<Statistics>
  title: Scalars['String']
}

export type Mutation = {
  __typename?: 'Mutation'
  createCase?: Maybe<Case>
  createCivilClaimant: CivilClaimant
  createCivilClaimantFile: CaseFile
  createCourtCase?: Maybe<Case>
  createDefendant?: Maybe<Defendant>
  createDefendantFile: CaseFile
  createEventLog?: Maybe<Scalars['Boolean']>
  createFile: CaseFile
  createIndictmentCount?: Maybe<IndictmentCount>
  createOffense?: Maybe<Offense>
  createPresignedPost: PresignedPost
  createUser?: Maybe<User>
  createVictim: Victim
  deleteCivilClaimant: DeleteCivilClaimantResponse
  deleteDefendant?: Maybe<DeleteDefendantResponse>
  deleteFile: DeleteFileResponse
  deleteIndictmentCount?: Maybe<DeleteResponse>
  deleteOffense?: Maybe<DeleteResponse>
  deleteVictim: DeleteVictimResponse
  extendCase?: Maybe<Case>
  limitedAccessCreateCivilClaimantFile: CaseFile
  limitedAccessCreateDefendantFile: CaseFile
  limitedAccessCreateFile: CaseFile
  limitedAccessCreatePresignedPost: PresignedPost
  limitedAccessDeleteFile: DeleteFileResponse
  limitedAccessTransitionCase?: Maybe<Case>
  limitedAccessUpdateCase?: Maybe<Case>
  limitedAccessUpdateDefendant?: Maybe<Defendant>
  requestCourtRecordSignature?: Maybe<RequestSignatureResponse>
  requestRulingSignature?: Maybe<RequestSignatureResponse>
  sendNotification?: Maybe<SendNotificationResponse>
  transitionCase?: Maybe<Case>
  updateCase?: Maybe<Case>
  updateCivilClaimant: CivilClaimant
  updateDefendant?: Maybe<Defendant>
  updateFiles: UpdateFilesResponse
  updateIndictmentCount?: Maybe<IndictmentCount>
  updateOffense?: Maybe<Offense>
  updateUser?: Maybe<User>
  updateVictim: Victim
  uploadFileToCourt: UploadFileToCourtResponse
  uploadPoliceCaseFile?: Maybe<UploadPoliceCaseFileResponse>
}

export type MutationCreateCaseArgs = {
  input: CreateCaseInput
}

export type MutationCreateCivilClaimantArgs = {
  input: CreateCivilClaimantInput
}

export type MutationCreateCivilClaimantFileArgs = {
  input: CreateCivilClaimantFileInput
}

export type MutationCreateCourtCaseArgs = {
  input: CreateCourtCaseInput
}

export type MutationCreateDefendantArgs = {
  input: CreateDefendantInput
}

export type MutationCreateDefendantFileArgs = {
  input: CreateDefendantFileInput
}

export type MutationCreateEventLogArgs = {
  input: CreateEventLogInput
}

export type MutationCreateFileArgs = {
  input: CreateFileInput
}

export type MutationCreateIndictmentCountArgs = {
  input: CreateIndictmentCountInput
}

export type MutationCreateOffenseArgs = {
  input: CreateOffenseInput
}

export type MutationCreatePresignedPostArgs = {
  input: CreatePresignedPostInput
}

export type MutationCreateUserArgs = {
  input: CreateUserInput
}

export type MutationCreateVictimArgs = {
  input: CreateVictimInput
}

export type MutationDeleteCivilClaimantArgs = {
  input: DeleteCivilClaimantInput
}

export type MutationDeleteDefendantArgs = {
  input: DeleteDefendantInput
}

export type MutationDeleteFileArgs = {
  input: DeleteFileInput
}

export type MutationDeleteIndictmentCountArgs = {
  input: DeleteIndictmentCountInput
}

export type MutationDeleteOffenseArgs = {
  input: DeleteOffenseInput
}

export type MutationDeleteVictimArgs = {
  input: DeleteVictimInput
}

export type MutationExtendCaseArgs = {
  input: ExtendCaseInput
}

export type MutationLimitedAccessCreateCivilClaimantFileArgs = {
  input: CreateCivilClaimantFileInput
}

export type MutationLimitedAccessCreateDefendantFileArgs = {
  input: CreateDefendantFileInput
}

export type MutationLimitedAccessCreateFileArgs = {
  input: CreateFileInput
}

export type MutationLimitedAccessCreatePresignedPostArgs = {
  input: CreatePresignedPostInput
}

export type MutationLimitedAccessDeleteFileArgs = {
  input: DeleteFileInput
}

export type MutationLimitedAccessTransitionCaseArgs = {
  input: TransitionCaseInput
}

export type MutationLimitedAccessUpdateCaseArgs = {
  input: UpdateCaseInput
}

export type MutationLimitedAccessUpdateDefendantArgs = {
  input: UpdateDefendantInput
}

export type MutationRequestCourtRecordSignatureArgs = {
  input: RequestSignatureInput
}

export type MutationRequestRulingSignatureArgs = {
  input: RequestSignatureInput
}

export type MutationSendNotificationArgs = {
  input: SendNotificationInput
}

export type MutationTransitionCaseArgs = {
  input: TransitionCaseInput
}

export type MutationUpdateCaseArgs = {
  input: UpdateCaseInput
}

export type MutationUpdateCivilClaimantArgs = {
  input: UpdateCivilClaimantInput
}

export type MutationUpdateDefendantArgs = {
  input: UpdateDefendantInput
}

export type MutationUpdateFilesArgs = {
  input: UpdateFilesInput
}

export type MutationUpdateIndictmentCountArgs = {
  input: UpdateIndictmentCountInput
}

export type MutationUpdateOffenseArgs = {
  input: UpdateOffenseInput
}

export type MutationUpdateUserArgs = {
  input: UpdateUserInput
}

export type MutationUpdateVictimArgs = {
  input: UpdateVictimInput
}

export type MutationUploadFileToCourtArgs = {
  input: UploadFileToCourtInput
}

export type MutationUploadPoliceCaseFileArgs = {
  input: UploadPoliceCaseFileInput
}

export type Namespace = {
  __typename?: 'Namespace'
  fields: Scalars['String']
  namespace: Scalars['String']
}

export type News = {
  __typename?: 'News'
  content?: Maybe<Array<Slice>>
  date: Scalars['String']
  featuredImage?: Maybe<Image>
  fullWidthImageInContent?: Maybe<Scalars['Boolean']>
  genericTags: Array<GenericTag>
  id: Scalars['ID']
  image?: Maybe<Image>
  initialPublishDate?: Maybe<Scalars['String']>
  intro?: Maybe<Scalars['String']>
  organization?: Maybe<Organization>
  signLanguageVideo?: Maybe<EmbeddedVideo>
  slug: Scalars['String']
  subtitle: Scalars['String']
  title: Scalars['String']
}

export type NewsList = {
  __typename?: 'NewsList'
  items: Array<News>
  total: Scalars['Int']
}

export type Notification = {
  __typename?: 'Notification'
  caseId?: Maybe<Scalars['ID']>
  created?: Maybe<Scalars['String']>
  id: Scalars['ID']
  recipients?: Maybe<Array<Recipient>>
  type?: Maybe<NotificationType>
}

export enum NotificationType {
  ADVOCATE_ASSIGNED = 'ADVOCATE_ASSIGNED',
  APPEAL_CASE_FILES_UPDATED = 'APPEAL_CASE_FILES_UPDATED',
  APPEAL_COMPLETED = 'APPEAL_COMPLETED',
  APPEAL_JUDGES_ASSIGNED = 'APPEAL_JUDGES_ASSIGNED',
  APPEAL_RECEIVED_BY_COURT = 'APPEAL_RECEIVED_BY_COURT',
  APPEAL_STATEMENT = 'APPEAL_STATEMENT',
  APPEAL_TO_COURT_OF_APPEALS = 'APPEAL_TO_COURT_OF_APPEALS',
  APPEAL_WITHDRAWN = 'APPEAL_WITHDRAWN',
  CASE_FILES_UPDATED = 'CASE_FILES_UPDATED',
  COURT_DATE = 'COURT_DATE',
  DEFENDANTS_NOT_UPDATED_AT_COURT = 'DEFENDANTS_NOT_UPDATED_AT_COURT',
  DEFENDANT_SELECTED_DEFENDER = 'DEFENDANT_SELECTED_DEFENDER',
  DEFENDER_ASSIGNED = 'DEFENDER_ASSIGNED',
  HEADS_UP = 'HEADS_UP',
  INDICTMENTS_WAITING_FOR_CONFIRMATION = 'INDICTMENTS_WAITING_FOR_CONFIRMATION',
  INDICTMENT_DENIED = 'INDICTMENT_DENIED',
  INDICTMENT_RETURNED = 'INDICTMENT_RETURNED',
  INDICTMENT_SENT_TO_PRISON_ADMIN = 'INDICTMENT_SENT_TO_PRISON_ADMIN',
  INDICTMENT_SENT_TO_PUBLIC_PROSECUTOR = 'INDICTMENT_SENT_TO_PUBLIC_PROSECUTOR',
  INDICTMENT_VERDICT_INFO = 'INDICTMENT_VERDICT_INFO',
  INDICTMENT_WITHDRAWN_FROM_PRISON_ADMIN = 'INDICTMENT_WITHDRAWN_FROM_PRISON_ADMIN',
  MODIFIED = 'MODIFIED',
  READY_FOR_COURT = 'READY_FOR_COURT',
  RECEIVED_BY_COURT = 'RECEIVED_BY_COURT',
  REVOKED = 'REVOKED',
  RULING = 'RULING',
  SERVICE_FAILED = 'SERVICE_FAILED',
  SERVICE_SUCCESSFUL = 'SERVICE_SUCCESSFUL',
  SPOKESPERSON_ASSIGNED = 'SPOKESPERSON_ASSIGNED',
}

export type NumberBullet = {
  __typename?: 'NumberBullet'
  body: Scalars['String']
  id: Scalars['ID']
  title: Scalars['String']
}

export type NumberBulletGroup = {
  __typename?: 'NumberBulletGroup'
  bullets: Array<NumberBullet>
  defaultVisible: Scalars['Int']
  id: Scalars['ID']
}

export type Offense = {
  __typename?: 'Offense'
  created?: Maybe<Scalars['String']>
  id: Scalars['ID']
  indictmentCountId?: Maybe<Scalars['ID']>
  modified?: Maybe<Scalars['String']>
  offense: IndictmentCountOffense
  substances?: Maybe<Scalars['JSONObject']>
}

export type OneColumnText = {
  __typename?: 'OneColumnText'
  content?: Maybe<Array<Slice>>
  dividerOnTop?: Maybe<Scalars['Boolean']>
  id: Scalars['ID']
  link?: Maybe<Link>
  showTitle?: Maybe<Scalars['Boolean']>
  title: Scalars['String']
}

export type OpenDataPage = {
  __typename?: 'OpenDataPage'
  chartSectionTitle: Scalars['String']
  externalLinkCardSelection: LinkCardSection
  externalLinkSectionDescription: Scalars['String']
  externalLinkSectionImage?: Maybe<Image>
  externalLinkSectionTitle: Scalars['String']
  graphCards: Array<GraphCard>
  id: Scalars['ID']
  link: Scalars['String']
  linkTitle: Scalars['String']
  pageDescription: Scalars['String']
  pageHeaderGraph: GraphCard
  pageTitle: Scalars['String']
  statisticsCardsSection: Array<StatisticsCard>
}

export type OpenDataSubpage = {
  __typename?: 'OpenDataSubpage'
  fundDescription: Scalars['String']
  fundTitle: Scalars['String']
  graphCards: Array<GraphCard>
  id: Scalars['ID']
  organizationLogo?: Maybe<Image>
  pageTitle: Scalars['String']
  statisticsCards: Array<StatisticsCard>
}

export type Organization = {
  __typename?: 'Organization'
  description?: Maybe<Scalars['String']>
  email: Scalars['String']
  footerConfig?: Maybe<Scalars['JSON']>
  footerItems: Array<FooterItem>
  hasALandingPage?: Maybe<Scalars['Boolean']>
  id: Scalars['ID']
  link?: Maybe<Scalars['String']>
  logo?: Maybe<Image>
  namespace?: Maybe<Namespace>
  newsBottomSlices?: Maybe<Array<EmailSignup>>
  phone: Scalars['String']
  publishedMaterialSearchFilterGenericTags: Array<GenericTag>
  referenceIdentifier?: Maybe<Scalars['String']>
  serviceWebEnabled?: Maybe<Scalars['Boolean']>
  serviceWebFeaturedImage?: Maybe<Image>
  serviceWebPopularQuestionCount?: Maybe<Scalars['Float']>
  serviceWebTitle?: Maybe<Scalars['String']>
  shortTitle: Scalars['String']
  showsUpOnTheOrganizationsPage?: Maybe<Scalars['Boolean']>
  slug: Scalars['String']
  tag: Array<OrganizationTag>
  title: Scalars['String']
  trackingDomain?: Maybe<Scalars['String']>
}

export type OrganizationFund = {
  __typename?: 'OrganizationFund'
  featuredImage?: Maybe<Image>
  id: Scalars['ID']
  link?: Maybe<ReferenceLink>
  parentOrganization: Organization
  title: Scalars['String']
}

export type OrganizationPage = {
  __typename?: 'OrganizationPage'
  alertBanner?: Maybe<AlertBanner>
  bottomSlices: Array<Slice>
  canBeFoundInSearchResults?: Maybe<Scalars['Boolean']>
  defaultHeaderImage?: Maybe<Image>
  description: Scalars['String']
  externalLinks?: Maybe<Array<Link>>
  featuredImage?: Maybe<Image>
  id: Scalars['ID']
  menuLinks: Array<LinkGroup>
  organization?: Maybe<Organization>
  secondaryMenu?: Maybe<LinkGroup>
  secondaryNewsTags?: Maybe<Array<GenericTag>>
  showPastEventsOption?: Maybe<Scalars['Boolean']>
  sidebarCards?: Maybe<Array<Slice>>
  slices: Array<Slice>
  slug: Scalars['String']
  theme: Scalars['String']
  themeProperties: OrganizationTheme
  title: Scalars['String']
  topLevelNavigation?: Maybe<OrganizationPageTopLevelNavigation>
}

export type OrganizationPageStandaloneSitemap = {
  __typename?: 'OrganizationPageStandaloneSitemap'
  childLinks: Array<OrganizationPageStandaloneSitemapLink>
}

export type OrganizationPageStandaloneSitemapLevel2 = {
  __typename?: 'OrganizationPageStandaloneSitemapLevel2'
  childCategories: Array<OrganizationPageStandaloneSitemapLevel2Category>
  label: Scalars['String']
}

export type OrganizationPageStandaloneSitemapLevel2Category = {
  __typename?: 'OrganizationPageStandaloneSitemapLevel2Category'
  childLinks: Array<OrganizationPageStandaloneSitemapLevel2Link>
  href?: Maybe<Scalars['String']>
  label: Scalars['String']
}

export type OrganizationPageStandaloneSitemapLevel2Link = {
  __typename?: 'OrganizationPageStandaloneSitemapLevel2Link'
  href: Scalars['String']
  label: Scalars['String']
}

export type OrganizationPageStandaloneSitemapLink = {
  __typename?: 'OrganizationPageStandaloneSitemapLink'
  description?: Maybe<Scalars['String']>
  href: Scalars['String']
  label: Scalars['String']
}

export type OrganizationPageTopLevelNavigation = {
  __typename?: 'OrganizationPageTopLevelNavigation'
  links: Array<OrganizationPageTopLevelNavigationLink>
}

export type OrganizationPageTopLevelNavigationLink = {
  __typename?: 'OrganizationPageTopLevelNavigationLink'
  href: Scalars['String']
  label: Scalars['String']
}

export type OrganizationParentSubpage = {
  __typename?: 'OrganizationParentSubpage'
  childLinks: Array<OrganizationSubpageLink>
  id: Scalars['ID']
  title: Scalars['String']
}

export type OrganizationParentSubpageList = {
  __typename?: 'OrganizationParentSubpageList'
  id: Scalars['ID']
  pageLinkVariant: OrganizationParentSubpageListVariant
  pageLinks: Array<OrganizationParentSubpageListPageLink>
  seeMoreLink?: Maybe<Link>
  title: Scalars['String']
}

export type OrganizationParentSubpageListPageLink = {
  __typename?: 'OrganizationParentSubpageListPageLink'
  href: Scalars['String']
  id: Scalars['ID']
  label: Scalars['String']
  pageLinkIntro: Scalars['String']
  thumbnailImageHref?: Maybe<Scalars['String']>
  tinyThumbnailImageHref?: Maybe<Scalars['String']>
}

export enum OrganizationParentSubpageListVariant {
  PROFILECARDWITHTITLEABOVE = 'ProfileCardWithTitleAbove',
  SERVICECARD = 'ServiceCard',
}

export type OrganizationSubpage = {
  __typename?: 'OrganizationSubpage'
  bottomSlices?: Maybe<Array<Slice>>
  description?: Maybe<Array<Slice>>
  featuredImage?: Maybe<Image>
  id: Scalars['ID']
  intro?: Maybe<Scalars['String']>
  links?: Maybe<Array<Link>>
  organizationPage: OrganizationPage
  shortTitle?: Maybe<Scalars['String']>
  showTableOfContents: Scalars['Boolean']
  signLanguageVideo?: Maybe<EmbeddedVideo>
  sliceCustomRenderer?: Maybe<Scalars['String']>
  sliceExtraText?: Maybe<Scalars['String']>
  slices?: Maybe<Array<Slice>>
  slug: Scalars['String']
  title: Scalars['String']
  url: Array<Scalars['String']>
}

export type OrganizationSubpageLink = {
  __typename?: 'OrganizationSubpageLink'
  href: Scalars['String']
  id?: Maybe<Scalars['String']>
  label: Scalars['String']
}

export type OrganizationTag = {
  __typename?: 'OrganizationTag'
  id: Scalars['ID']
  title: Scalars['String']
}

export type OrganizationTags = {
  __typename?: 'OrganizationTags'
  items: Array<OrganizationTag>
}

export type OrganizationTheme = {
  __typename?: 'OrganizationTheme'
  backgroundColor?: Maybe<Scalars['String']>
  fullWidth?: Maybe<Scalars['Boolean']>
  gradientEndColor: Scalars['String']
  gradientStartColor: Scalars['String']
  imageIsFullHeight?: Maybe<Scalars['Boolean']>
  imageObjectFit?: Maybe<Scalars['String']>
  imageObjectPosition?: Maybe<Scalars['String']>
  imagePadding?: Maybe<Scalars['String']>
  mobileBackgroundColor?: Maybe<Scalars['String']>
  textColor?: Maybe<Scalars['String']>
  titleSectionPaddingLeft?: Maybe<Scalars['Int']>
  useGradientColor?: Maybe<Scalars['Boolean']>
}

export type Organizations = {
  __typename?: 'Organizations'
  items: Array<Organization>
}

export type OverviewLinks = {
  __typename?: 'OverviewLinks'
  hasBorderAbove?: Maybe<Scalars['Boolean']>
  id: Scalars['ID']
  link?: Maybe<Link>
  linkData?: Maybe<OverviewLinksLinkData>
  overviewLinks: Array<IntroLinkImage>
  titleAbove?: Maybe<Scalars['String']>
}

export type OverviewLinksLinkData = {
  __typename?: 'OverviewLinksLinkData'
  categoryCardItems: Array<OverviewLinksLinkDataCategoryCardItem>
  variant: OverviewLinksLinkDataVariant
}

export type OverviewLinksLinkDataCategoryCardItem = {
  __typename?: 'OverviewLinksLinkDataCategoryCardItem'
  description: Scalars['String']
  href: Scalars['String']
  title: Scalars['String']
}

export enum OverviewLinksLinkDataVariant {
  CATEGORYCARD = 'CategoryCard',
  INTROLINKIMAGE = 'IntroLinkImage',
}

export type Page =
  | AnchorPage
  | Article
  | ArticleCategory
  | LifeEventPage
  | News
  | OrganizationPage
  | OrganizationSubpage
  | ProjectPage
  | SubArticle

export type PoliceCaseFile = {
  __typename?: 'PoliceCaseFile'
  chapter?: Maybe<Scalars['Int']>
  displayDate?: Maybe<Scalars['String']>
  id: Scalars['ID']
  name: Scalars['String']
  policeCaseNumber: Scalars['String']
  type?: Maybe<Scalars['String']>
}

export type PoliceCaseFilesQueryInput = {
  caseId: Scalars['ID']
}

export type PoliceCaseInfo = {
  __typename?: 'PoliceCaseInfo'
  date?: Maybe<Scalars['String']>
  licencePlate?: Maybe<Scalars['String']>
  place?: Maybe<Scalars['String']>
  policeCaseNumber: Scalars['ID']
}

export type PoliceCaseInfoQueryInput = {
  caseId: Scalars['ID']
}

export type PowerBiSlice = {
  __typename?: 'PowerBiSlice'
  id: Scalars['ID']
  owner?: Maybe<Scalars['String']>
  powerBiEmbedProps?: Maybe<Scalars['JSON']>
  powerBiEmbedPropsFromServer?: Maybe<GetPowerBiEmbedPropsFromServerResponse>
  reportId?: Maybe<Scalars['String']>
  title: Scalars['String']
  workspaceId?: Maybe<Scalars['String']>
}

export type PresignedPost = {
  __typename?: 'PresignedPost'
  fields: Scalars['JSON']
  key: Scalars['String']
  url: Scalars['String']
}

export type ProcessEntry = {
  __typename?: 'ProcessEntry'
  buttonText: Scalars['String']
  id: Scalars['ID']
  openLinkInModal?: Maybe<Scalars['Boolean']>
  processLink: Scalars['String']
  processTitle: Scalars['String']
}

export type ProjectPage = {
  __typename?: 'ProjectPage'
  alertBanner?: Maybe<AlertBanner>
  backLink?: Maybe<Link>
  bottomSlices: Array<Slice>
  content?: Maybe<Array<Slice>>
  contentIsFullWidth?: Maybe<Scalars['Boolean']>
  defaultHeaderBackgroundColor: Scalars['String']
  defaultHeaderImage?: Maybe<Image>
  featuredDescription: Scalars['String']
  featuredImage?: Maybe<Image>
  footerConfig?: Maybe<Scalars['JSON']>
  footerItems?: Maybe<Array<FooterItem>>
  id: Scalars['ID']
  intro: Scalars['String']
  namespace?: Maybe<Namespace>
  newsTag?: Maybe<GenericTag>
  projectSubpages: Array<ProjectSubpage>
  secondarySidebar?: Maybe<LinkGroup>
  sidebar: Scalars['Boolean']
  sidebarLinks: Array<LinkGroup>
  slices: Array<Slice>
  slug: Scalars['String']
  stepper?: Maybe<Stepper>
  subtitle: Scalars['String']
  theme: Scalars['String']
  themeProperties?: Maybe<ProjectPageThemeProperties>
  title: Scalars['String']
}

export type ProjectPageThemeProperties = {
  __typename?: 'ProjectPageThemeProperties'
  backgroundColor?: Maybe<Scalars['String']>
  fullWidth?: Maybe<Scalars['Boolean']>
  gradientEndColor: Scalars['String']
  gradientStartColor: Scalars['String']
  imageIsFullHeight?: Maybe<Scalars['Boolean']>
  imageObjectFit?: Maybe<Scalars['String']>
  imageObjectPosition?: Maybe<Scalars['String']>
  imagePadding?: Maybe<Scalars['String']>
  mobileBackgroundColor?: Maybe<Scalars['String']>
  textColor?: Maybe<Scalars['String']>
  titleSectionPaddingLeft?: Maybe<Scalars['Int']>
  useGradientColor?: Maybe<Scalars['Boolean']>
}

export type ProjectSubpage = {
  __typename?: 'ProjectSubpage'
  bottomSlices?: Maybe<Array<Slice>>
  content?: Maybe<Array<Slice>>
  id: Scalars['ID']
  renderSlicesAsTabs: Scalars['Boolean']
  shortTitle?: Maybe<Scalars['String']>
  showTableOfContents: Scalars['Boolean']
  slices: Array<Slice>
  slug: Scalars['String']
  title: Scalars['String']
}

export enum PunishmentType {
  FINE = 'FINE',
  IMPRISONMENT = 'IMPRISONMENT',
  INDICTMENT_RULING_DECISION_FINE = 'INDICTMENT_RULING_DECISION_FINE',
  OTHER = 'OTHER',
  PROBATION = 'PROBATION',
  SIGNED_FINE_INVITATION = 'SIGNED_FINE_INVITATION',
}

export type Query = {
  __typename?: 'Query'
  case?: Maybe<Case>
  caseStatistics?: Maybe<CaseStatistics>
  cases?: Maybe<Array<CaseListEntry>>
  connectedCases?: Maybe<Array<Case>>
  courtRecordSignatureConfirmation?: Maybe<SignatureConfirmationResponse>
  currentUser?: Maybe<CurrentUserResponse>
  getAlertBanner?: Maybe<AlertBanner>
  getAnchorPage?: Maybe<AnchorPage>
  getAnchorPages: Array<AnchorPage>
  getArticleCategories: Array<ArticleCategory>
  getArticles: Array<Article>
  getAuction: Auction
  getAuctions: Array<Auction>
  getBloodDonationRestrictionDetails?: Maybe<BloodDonationRestrictionDetails>
  getBloodDonationRestrictionGenericTags: BloodDonationRestrictionGenericTagList
  getBloodDonationRestrictions: BloodDonationRestrictionList
  getCategoryPages?: Maybe<Array<CategoryPage>>
  getContentSlug?: Maybe<ContentSlug>
  getCustomPage?: Maybe<CustomPage>
  getCustomSubpage?: Maybe<CustomPage>
  getErrorPage?: Maybe<ErrorPage>
  getEvents: EventList
  getFeaturedSupportQNAs: Array<SupportQna>
  getFrontpage?: Maybe<Frontpage>
  getGenericListItemBySlug?: Maybe<GenericListItem>
  getGenericListItems?: Maybe<GenericListItemResponse>
  getGenericOverviewPage?: Maybe<GenericOverviewPage>
  getGenericPage?: Maybe<GenericPage>
  getGenericTagBySlug?: Maybe<GenericTag>
  getGenericTagsInTagGroups?: Maybe<Array<GenericTag>>
  getGrants: GrantList
  getGroupedMenu?: Maybe<GroupedMenu>
  getLifeEventPage?: Maybe<LifeEventPage>
  getLifeEventsForOverview: Array<LifeEventPage>
  getLifeEventsInCategory: Array<LifeEventPage>
  getMenu?: Maybe<Menu>
  getNamespace?: Maybe<Namespace>
  getNews: NewsList
  getNewsDates: Array<Scalars['String']>
  getOpenDataPage: OpenDataPage
  getOpenDataSubpage: OpenDataSubpage
  getOrganization?: Maybe<Organization>
  getOrganizationByNationalId?: Maybe<Organization>
  getOrganizationByTitle?: Maybe<Organization>
  getOrganizationPage?: Maybe<OrganizationPage>
  getOrganizationPageStandaloneSitemapLevel1?: Maybe<OrganizationPageStandaloneSitemap>
  getOrganizationPageStandaloneSitemapLevel2?: Maybe<OrganizationPageStandaloneSitemapLevel2>
  getOrganizationParentSubpage?: Maybe<OrganizationParentSubpage>
  getOrganizationSubpage?: Maybe<OrganizationSubpage>
  getOrganizationSubpageById?: Maybe<OrganizationSubpage>
  getOrganizationTags?: Maybe<OrganizationTags>
  getOrganizations: Organizations
  getProjectPage?: Maybe<ProjectPage>
  getPublishedMaterial: EnhancedAssetSearchResult
  getServicePortalAlertBanners?: Maybe<Array<AlertBanner>>
  getServiceWebPage?: Maybe<ServiceWebPage>
  getSignedUrl?: Maybe<SignedUrl>
  getSingleArticle?: Maybe<Article>
  getSingleEntryTitleById?: Maybe<EntryTitle>
  getSingleEvent?: Maybe<Event>
  getSingleGrant?: Maybe<Grant>
  getSingleManual?: Maybe<Manual>
  getSingleNews?: Maybe<News>
  getSingleSupportQNA?: Maybe<SupportQna>
  getSubpageHeader?: Maybe<SubpageHeader>
  getSupportCategories: Array<SupportCategory>
  getSupportCategoriesInOrganization: Array<SupportCategory>
  getSupportCategory?: Maybe<SupportCategory>
  getSupportQNAs: Array<SupportQna>
  getSupportQNAsInCategory: Array<SupportQna>
  getTabSection?: Maybe<TabSection>
  getTeamMembers?: Maybe<TeamMemberResponse>
  getTranslations?: Maybe<Scalars['JSON']>
  getUrl?: Maybe<Url>
  institutions?: Maybe<Array<Institution>>
  limitedAccessCase?: Maybe<Case>
  limitedAccessGetSignedUrl?: Maybe<SignedUrl>
  policeCaseFiles?: Maybe<Array<PoliceCaseFile>>
  policeCaseInfo?: Maybe<Array<PoliceCaseInfo>>
  rulingSignatureConfirmation?: Maybe<SignatureConfirmationResponse>
  subpoena?: Maybe<Subpoena>
  user?: Maybe<User>
  users?: Maybe<Array<User>>
}

export type QueryCaseArgs = {
  input: CaseQueryInput
}

export type QueryCaseStatisticsArgs = {
  input: InputMaybe<CaseStatisticsInput>
}

export type QueryCasesArgs = {
  input: InputMaybe<CaseListQueryInput>
}

export type QueryConnectedCasesArgs = {
  input: CaseQueryInput
}

export type QueryCourtRecordSignatureConfirmationArgs = {
  input: SignatureConfirmationQueryInput
}

export type QueryGetAlertBannerArgs = {
  input: GetAlertBannerInput
}

export type QueryGetAnchorPageArgs = {
  input: GetAnchorPageInput
}

export type QueryGetAnchorPagesArgs = {
  input: GetAnchorPagesInput
}

export type QueryGetArticleCategoriesArgs = {
  input: GetArticleCategoriesInput
}

export type QueryGetArticlesArgs = {
  input: GetArticlesInput
}

export type QueryGetAuctionArgs = {
  input: GetAuctionInput
}

export type QueryGetAuctionsArgs = {
  input: GetAuctionsInput
}

export type QueryGetBloodDonationRestrictionDetailsArgs = {
  input: GetBloodDonationRestrictionDetailsInput
}

export type QueryGetBloodDonationRestrictionGenericTagsArgs = {
  input: GetBloodDonationRestrictionGenericTagsInput
}

export type QueryGetBloodDonationRestrictionsArgs = {
  input: GetBloodDonationRestrictionsInput
}

export type QueryGetCategoryPagesArgs = {
  input: GetCategoryPagesInput
}

export type QueryGetContentSlugArgs = {
  input: GetContentSlugInput
}

export type QueryGetCustomPageArgs = {
  input: GetCustomPageInput
}

export type QueryGetCustomSubpageArgs = {
  input: GetCustomSubpageInput
}

export type QueryGetErrorPageArgs = {
  input: GetErrorPageInput
}

export type QueryGetEventsArgs = {
  input: GetEventsInput
}

export type QueryGetFeaturedSupportQnAsArgs = {
  input: GetFeaturedSupportQnAsInput
}

export type QueryGetFrontpageArgs = {
  input: GetFrontpageInput
}

export type QueryGetGenericListItemBySlugArgs = {
  input: GetGenericListItemBySlugInput
}

export type QueryGetGenericListItemsArgs = {
  input: GetGenericListItemsInput
}

export type QueryGetGenericOverviewPageArgs = {
  input: GetGenericOverviewPageInput
}

export type QueryGetGenericPageArgs = {
  input: GetGenericPageInput
}

export type QueryGetGenericTagBySlugArgs = {
  input: GetGenericTagBySlugInput
}

export type QueryGetGenericTagsInTagGroupsArgs = {
  input: GetGenericTagsInTagGroupsInput
}

export type QueryGetGrantsArgs = {
  input: GetGrantsInput
}

export type QueryGetGroupedMenuArgs = {
  input: GetSingleMenuInput
}

export type QueryGetLifeEventPageArgs = {
  input: GetLifeEventPageInput
}

export type QueryGetLifeEventsForOverviewArgs = {
  input: GetLifeEventsInput
}

export type QueryGetLifeEventsInCategoryArgs = {
  input: GetLifeEventsInCategoryInput
}

export type QueryGetMenuArgs = {
  input: GetMenuInput
}

export type QueryGetNamespaceArgs = {
  input: GetNamespaceInput
}

export type QueryGetNewsArgs = {
  input: GetNewsInput
}

export type QueryGetNewsDatesArgs = {
  input: GetNewsDatesInput
}

export type QueryGetOpenDataPageArgs = {
  input: GetOpenDataPageInput
}

export type QueryGetOpenDataSubpageArgs = {
  input: GetOpenDataSubpageInput
}

export type QueryGetOrganizationArgs = {
  input: GetOrganizationInput
}

export type QueryGetOrganizationByNationalIdArgs = {
  input: GetOrganizationByNationalIdInput
}

export type QueryGetOrganizationByTitleArgs = {
  input: GetOrganizationByTitleInput
}

export type QueryGetOrganizationPageArgs = {
  input: GetOrganizationPageInput
}

export type QueryGetOrganizationPageStandaloneSitemapLevel1Args = {
  input: GetOrganizationPageStandaloneSitemapLevel1Input
}

export type QueryGetOrganizationPageStandaloneSitemapLevel2Args = {
  input: GetOrganizationPageStandaloneSitemapLevel2Input
}

export type QueryGetOrganizationParentSubpageArgs = {
  input: GetOrganizationParentSubpageInput
}

export type QueryGetOrganizationSubpageArgs = {
  input: GetOrganizationSubpageInput
}

export type QueryGetOrganizationSubpageByIdArgs = {
  input: GetOrganizationSubpageByIdInput
}

export type QueryGetOrganizationTagsArgs = {
  input: GetOrganizationTagsInput
}

export type QueryGetOrganizationsArgs = {
  input: InputMaybe<GetOrganizationsInput>
}

export type QueryGetProjectPageArgs = {
  input: GetProjectPageInput
}

export type QueryGetPublishedMaterialArgs = {
  input: GetPublishedMaterialInput
}

export type QueryGetServicePortalAlertBannersArgs = {
  input: GetServicePortalAlertBannersInput
}

export type QueryGetServiceWebPageArgs = {
  input: GetServiceWebPageInput
}

export type QueryGetSignedUrlArgs = {
  input: GetSignedUrlInput
}

export type QueryGetSingleArticleArgs = {
  input: GetSingleArticleInput
}

export type QueryGetSingleEntryTitleByIdArgs = {
  input: GetSingleEntryTitleByIdInput
}

export type QueryGetSingleEventArgs = {
  input: GetSingleEventInput
}

export type QueryGetSingleGrantArgs = {
  input: GetSingleGrantInput
}

export type QueryGetSingleManualArgs = {
  input: GetSingleManualInput
}

export type QueryGetSingleNewsArgs = {
  input: GetSingleNewsInput
}

export type QueryGetSingleSupportQnaArgs = {
  input: GetSingleSupportQnaInput
}

export type QueryGetSubpageHeaderArgs = {
  input: GetSubpageHeaderInput
}

export type QueryGetSupportCategoriesArgs = {
  input: GetSupportCategoriesInput
}

export type QueryGetSupportCategoriesInOrganizationArgs = {
  input: GetSupportCategoriesInOrganizationInput
}

export type QueryGetSupportCategoryArgs = {
  input: GetSupportCategoryInput
}

export type QueryGetSupportQnAsArgs = {
  input: GetSupportQnAsInput
}

export type QueryGetSupportQnAsInCategoryArgs = {
  input: GetSupportQnAsInCategoryInput
}

export type QueryGetTabSectionArgs = {
  input: GetTabSectionInput
}

export type QueryGetTeamMembersArgs = {
  input: GetTeamMembersInput
}

export type QueryGetTranslationsArgs = {
  input: GetTranslationsInput
}

export type QueryGetUrlArgs = {
  input: GetUrlInput
}

export type QueryLimitedAccessCaseArgs = {
  input: CaseQueryInput
}

export type QueryLimitedAccessGetSignedUrlArgs = {
  input: GetSignedUrlInput
}

export type QueryPoliceCaseFilesArgs = {
  input: PoliceCaseFilesQueryInput
}

export type QueryPoliceCaseInfoArgs = {
  input: PoliceCaseInfoQueryInput
}

export type QueryRulingSignatureConfirmationArgs = {
  input: SignatureConfirmationQueryInput
}

export type QuerySubpoenaArgs = {
  input: SubpoenaQueryInput
}

export type QueryUserArgs = {
  input: UserQueryInput
}

export type QueryUsersArgs = {
  input: InputMaybe<UsersQueryInput>
}

export type QuestionAndAnswer = {
  __typename?: 'QuestionAndAnswer'
  answer: Array<Slice>
  id: Scalars['ID']
  publishDate?: Maybe<Scalars['String']>
  question: Scalars['String']
}

export type Recipient = {
  __typename?: 'Recipient'
  address?: Maybe<Scalars['String']>
  success?: Maybe<Scalars['Boolean']>
}

export type ReferenceLink = {
  __typename?: 'ReferenceLink'
  slug: Scalars['String']
  type: Scalars['String']
}

export type RequestCaseStatistics = {
  __typename?: 'RequestCaseStatistics'
  completedCount: Scalars['Float']
  count: Scalars['Float']
  inProgressCount: Scalars['Float']
}

export enum RequestSharedWhen {
  ARRAIGNMENT_DATE_ASSIGNED = 'ARRAIGNMENT_DATE_ASSIGNED',
  OBLIGATED = 'OBLIGATED',
  READY_FOR_COURT = 'READY_FOR_COURT',
}

export enum RequestSharedWithDefender {
  COURT_DATE = 'COURT_DATE',
  NOT_SHARED = 'NOT_SHARED',
  READY_FOR_COURT = 'READY_FOR_COURT',
}

export type RequestSignatureInput = {
  caseId: Scalars['ID']
}

export type RequestSignatureResponse = {
  __typename?: 'RequestSignatureResponse'
  controlCode: Scalars['String']
  documentToken: Scalars['String']
}

export type SectionWithImage = {
  __typename?: 'SectionWithImage'
  content?: Maybe<Array<Slice>>
  id: Scalars['ID']
  image?: Maybe<Image>
  title: Scalars['String']
}

export type SectionWithVideo = {
  __typename?: 'SectionWithVideo'
  html?: Maybe<Html>
  id: Scalars['ID']
  link?: Maybe<Link>
  locale: Scalars['String']
  showDividerOnTop?: Maybe<Scalars['Boolean']>
  showTitle?: Maybe<Scalars['Boolean']>
  title: Scalars['String']
  video?: Maybe<EmbeddedVideo>
}

export type SendNotificationInput = {
  caseId: Scalars['ID']
  eventOnly?: InputMaybe<Scalars['Boolean']>
  type: NotificationType
}

export type SendNotificationResponse = {
  __typename?: 'SendNotificationResponse'
  notificationSent: Scalars['Boolean']
}

export enum ServiceRequirement {
  NOT_APPLICABLE = 'NOT_APPLICABLE',
  NOT_REQUIRED = 'NOT_REQUIRED',
  REQUIRED = 'REQUIRED',
}

export enum ServiceStatus {
  DEFENDER = 'DEFENDER',
  ELECTRONICALLY = 'ELECTRONICALLY',
  EXPIRED = 'EXPIRED',
  FAILED = 'FAILED',
  IN_PERSON = 'IN_PERSON',
}

export type ServiceStatusStatistics = {
  __typename?: 'ServiceStatusStatistics'
  averageServiceTimeDays: Scalars['Float']
  averageServiceTimeMs: Scalars['Float']
  count: Scalars['Float']
  serviceStatus?: Maybe<ServiceStatus>
}

export type ServiceWebPage = {
  __typename?: 'ServiceWebPage'
  alertBanner?: Maybe<AlertBanner>
  contactFormDisclaimer?: Maybe<Array<Slice>>
  emailConfig?: Maybe<ServiceWebPageEmailConfig>
  footerItems?: Maybe<Array<FooterItem>>
  id: Scalars['ID']
  organization?: Maybe<Organization>
  slices: Array<Slice>
  title: Scalars['String']
}

export type ServiceWebPageEmailConfig = {
  __typename?: 'ServiceWebPageEmailConfig'
  emails: Array<ServiceWebPageEmailConfigItem>
}

export type ServiceWebPageEmailConfigItem = {
  __typename?: 'ServiceWebPageEmailConfigItem'
  emailList: Array<Scalars['String']>
  supportCategoryId: Scalars['String']
}

export enum SessionArrangements {
  ALL_PRESENT = 'ALL_PRESENT',
  ALL_PRESENT_SPOKESPERSON = 'ALL_PRESENT_SPOKESPERSON',
  NONE_PRESENT = 'NONE_PRESENT',
  PROSECUTOR_PRESENT = 'PROSECUTOR_PRESENT',
}

export type SidebarCard = {
  __typename?: 'SidebarCard'
  contentString: Scalars['String']
  id: Scalars['ID']
  image?: Maybe<Image>
  link?: Maybe<Link>
  title: Scalars['String']
  type: Scalars['String']
}

export type SignatureConfirmationQueryInput = {
  caseId: Scalars['ID']
  documentToken: Scalars['String']
}

export type SignatureConfirmationResponse = {
  __typename?: 'SignatureConfirmationResponse'
  code?: Maybe<Scalars['Int']>
  documentSigned: Scalars['Boolean']
  message?: Maybe<Scalars['String']>
}

export type SignedUrl = {
  __typename?: 'SignedUrl'
  url: Scalars['String']
}

export type Slice =
  | AccordionSlice
  | AnchorPageListSlice
  | Asset
  | BulletListSlice
  | Chart
  | ChartComponent
  | ChartNumberBox
  | ConnectedComponent
  | ContactUs
  | Districts
  | EmailSignup
  | Embed
  | EmbeddedVideo
  | EventSlice
  | FaqList
  | FeaturedArticles
  | FeaturedEvents
  | FeaturedLinks
  | FeaturedSupportQnAs
  | Form
  | GenericList
  | GrantCardsList
  | GraphCard
  | HeadingSlice
  | Html
  | Image
  | IntroLinkImage
  | LatestEventsSlice
  | LatestGenericListItems
  | LatestNewsSlice
  | LinkCard
  | LinkCardSection
  | LogoListSlice
  | MultipleStatistics
  | OneColumnText
  | OrganizationParentSubpageList
  | OverviewLinks
  | PowerBiSlice
  | ProcessEntry
  | SectionWithImage
  | SectionWithVideo
  | SidebarCard
  | SliceDropdown
  | Statistics
  | Stepper
  | StorySlice
  | TabSection
  | TableSlice
  | TeamList
  | TellUsAStory
  | TimelineSlice
  | TwoColumnText

export type SliceDropdown = {
  __typename?: 'SliceDropdown'
  alphabeticallyOrdered?: Maybe<Scalars['Boolean']>
  dropdownLabel?: Maybe<Scalars['String']>
  id: Scalars['ID']
  slices: Array<OneColumnText>
}

export enum SortField {
  POPULAR = 'POPULAR',
  RELEASE_DATE = 'RELEASE_DATE',
  TITLE = 'TITLE',
}

export type Statistic = {
  __typename?: 'Statistic'
  id: Scalars['ID']
  label: Scalars['String']
  value: Scalars['String']
}

export type Statistics = {
  __typename?: 'Statistics'
  id: Scalars['ID']
  statistics: Array<Statistic>
  title: Scalars['String']
}

export type StatisticsCard = {
  __typename?: 'StatisticsCard'
  image?: Maybe<Image>
  statistic: Scalars['String']
  title: Scalars['String']
}

export type Step = {
  __typename?: 'Step'
  config?: Maybe<Scalars['String']>
  id: Scalars['ID']
  slug: Scalars['String']
  stepType?: Maybe<Scalars['String']>
  subtitle?: Maybe<Array<Slice>>
  title: Scalars['String']
}

export type Stepper = {
  __typename?: 'Stepper'
  config?: Maybe<Scalars['String']>
  id: Scalars['ID']
  steps?: Maybe<Array<Step>>
  title: Scalars['String']
}

export type Story = {
  __typename?: 'Story'
  body?: Maybe<Scalars['String']>
  date: Scalars['String']
  intro: Scalars['String']
  label: Scalars['String']
  link: Scalars['String']
  linkedPage?: Maybe<Scalars['String']>
  logo: Image
  readMoreText: Scalars['String']
  title: Scalars['String']
}

export type StorySlice = {
  __typename?: 'StorySlice'
  id: Scalars['ID']
  readMoreText: Scalars['String']
  stories: Array<Story>
}

export type SubArticle = {
  __typename?: 'SubArticle'
  body: Array<Slice>
  id: Scalars['ID']
  parent?: Maybe<ArticleReference>
  showTableOfContents?: Maybe<Scalars['Boolean']>
  signLanguageVideo?: Maybe<EmbeddedVideo>
  slug: Scalars['String']
  stepper?: Maybe<Stepper>
  title: Scalars['String']
}

export type SubpageHeader = {
  __typename?: 'SubpageHeader'
  body?: Maybe<Array<Slice>>
  featuredImage?: Maybe<Image>
  subpageId: Scalars['String']
  summary: Scalars['String']
  title: Scalars['String']
}

export type Subpoena = {
  __typename?: 'Subpoena'
  arraignmentDate?: Maybe<Scalars['String']>
  caseId?: Maybe<Scalars['String']>
  comment?: Maybe<Scalars['String']>
  created?: Maybe<Scalars['String']>
  defendantId?: Maybe<Scalars['String']>
  defenderNationalId?: Maybe<Scalars['String']>
  id: Scalars['ID']
  location?: Maybe<Scalars['String']>
  modified?: Maybe<Scalars['String']>
  policeSubpoenaId?: Maybe<Scalars['String']>
  servedBy?: Maybe<Scalars['String']>
  serviceDate?: Maybe<Scalars['String']>
  serviceStatus?: Maybe<ServiceStatus>
}

export type SubpoenaQueryInput = {
  caseId: Scalars['ID']
  defendantId: Scalars['ID']
  subpoenaId: Scalars['ID']
}

export type SubpoenaStatistics = {
  __typename?: 'SubpoenaStatistics'
  count: Scalars['Float']
  serviceStatusStatistics: Array<ServiceStatusStatistics>
}

export enum SubpoenaType {
  ABSENCE = 'ABSENCE',
  ARREST = 'ARREST',
}

export type SupportCategory = {
  __typename?: 'SupportCategory'
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  importance: Scalars['Float']
  organization?: Maybe<Organization>
  slug?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

export type SupportQna = {
  __typename?: 'SupportQNA'
  answer: Array<Slice>
  category?: Maybe<SupportCategory>
  contactLink: Scalars['String']
  id: Scalars['ID']
  importance: Scalars['Float']
  organization?: Maybe<Organization>
  relatedLinks: Array<Link>
  slug: Scalars['String']
  subCategory?: Maybe<SupportSubCategory>
  title: Scalars['String']
}

export type SupportSubCategory = {
  __typename?: 'SupportSubCategory'
  description?: Maybe<Scalars['String']>
  importance: Scalars['Float']
  slug?: Maybe<Scalars['String']>
  title: Scalars['String']
}

export type TabContent = {
  __typename?: 'TabContent'
  body?: Maybe<Array<Slice>>
  contentTitle?: Maybe<Scalars['String']>
  image?: Maybe<Image>
  tabTitle: Scalars['String']
}

export type TabSection = {
  __typename?: 'TabSection'
  id: Scalars['ID']
  tabs: Array<TabContent>
  title: Scalars['String']
}

export type TableSlice = {
  __typename?: 'TableSlice'
  id: Scalars['ID']
  tableContent?: Maybe<Scalars['JSON']>
  title: Scalars['String']
}

export type TeamList = {
  __typename?: 'TeamList'
  filterTags?: Maybe<Array<GenericTag>>
  id: Scalars['ID']
  showSearchInput?: Maybe<Scalars['Boolean']>
  teamMemberOrder?: Maybe<GetTeamMembersInputOrderBy>
  teamMembers: Array<TeamMember>
  variant?: Maybe<Scalars['String']>
}

export type TeamMember = {
  __typename?: 'TeamMember'
  createdAt?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  filterTags?: Maybe<Array<GenericTag>>
  id: Scalars['ID']
  image?: Maybe<Image>
  imageOnSelect?: Maybe<Image>
  intro?: Maybe<Array<Slice>>
  name: Scalars['String']
  phone?: Maybe<Scalars['String']>
  tagGroups?: Maybe<Array<TeamMemberTagGroup>>
  title: Scalars['String']
}

export type TeamMemberResponse = {
  __typename?: 'TeamMemberResponse'
  input: TeamMemberResponseInput
  items: Array<TeamMember>
  total: Scalars['Int']
}

export type TeamMemberResponseInput = {
  __typename?: 'TeamMemberResponseInput'
  lang: Scalars['String']
  orderBy?: Maybe<GetTeamMembersInputOrderBy>
  page?: Maybe<Scalars['Int']>
  queryString?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['Int']>
  tagGroups?: Maybe<Scalars['JSON']>
  tags?: Maybe<Array<Scalars['String']>>
  teamListId: Scalars['String']
}

export type TeamMemberTagGroup = {
  __typename?: 'TeamMemberTagGroup'
  groupId: Scalars['String']
  groupLabel: Scalars['String']
  tagLabels: Array<Scalars['String']>
}

export type TellUsAStory = {
  __typename?: 'TellUsAStory'
  SuccessMessageTitle: Scalars['String']
  dateOfStoryInputErrorMessage: Scalars['String']
  dateOfStoryLabel: Scalars['String']
  dateOfStoryPlaceholder: Scalars['String']
  emailInputErrorMessage: Scalars['String']
  emailLabel: Scalars['String']
  emailPlaceholder: Scalars['String']
  errorMessage?: Maybe<Html>
  errorMessageTitle: Scalars['String']
  firstSectionTitle: Scalars['String']
  id: Scalars['ID']
  instructionsDescription?: Maybe<Html>
  instructionsImage: Image
  instructionsTitle: Scalars['String']
  introDescription?: Maybe<Html>
  introImage?: Maybe<Image>
  introTitle: Scalars['String']
  messageInputErrorMessage: Scalars['String']
  messageLabel: Scalars['String']
  messagePlaceholder: Scalars['String']
  nameInputErrorMessage: Scalars['String']
  nameLabel: Scalars['String']
  namePlaceholder: Scalars['String']
  organizationInputErrorMessage: Scalars['String']
  organizationLabel: Scalars['String']
  organizationPlaceholder: Scalars['String']
  publicationAllowedLabel: Scalars['String']
  secondSectionTitle: Scalars['String']
  subjectInputErrorMessage?: Maybe<Scalars['String']>
  subjectLabel: Scalars['String']
  subjectPlaceholder: Scalars['String']
  submitButtonTitle: Scalars['String']
  successMessage?: Maybe<Html>
  thirdSectionTitle: Scalars['String']
}

export type TextFieldLocales = {
  __typename?: 'TextFieldLocales'
  en: Scalars['String']
  is: Scalars['String']
}

export type TimelineEvent = {
  __typename?: 'TimelineEvent'
  body?: Maybe<Html>
  date: Scalars['String']
  denominator?: Maybe<Scalars['Int']>
  id: Scalars['ID']
  label: Scalars['String']
  link: Scalars['String']
  numerator?: Maybe<Scalars['Int']>
  tags?: Maybe<Array<Scalars['String']>>
  title: Scalars['String']
}

export type TimelineSlice = {
  __typename?: 'TimelineSlice'
  events: Array<TimelineEvent>
  hasBorderAbove?: Maybe<Scalars['Boolean']>
  id: Scalars['ID']
  intro: Scalars['String']
  title: Scalars['String']
}

export type TransitionCaseInput = {
  id: Scalars['ID']
  transition: CaseTransition
}

export type TwoColumnText = {
  __typename?: 'TwoColumnText'
  dividerOnTop?: Maybe<Scalars['Boolean']>
  id: Scalars['ID']
  leftContent?: Maybe<Array<Slice>>
  leftLink?: Maybe<Link>
  leftTitle?: Maybe<Scalars['String']>
  onlyUseOneTitle?: Maybe<Scalars['Boolean']>
  rightContent?: Maybe<Array<Slice>>
  rightLink?: Maybe<Link>
  rightTitle?: Maybe<Scalars['String']>
}

export type UpdateCaseInput = {
  accusedAppealAnnouncement?: InputMaybe<Scalars['String']>
  accusedAppealDecision?: InputMaybe<CaseAppealDecision>
  appealAssistantId?: InputMaybe<Scalars['ID']>
  appealCaseNumber?: InputMaybe<Scalars['String']>
  appealConclusion?: InputMaybe<Scalars['String']>
  appealIsolationToDate?: InputMaybe<Scalars['String']>
  appealJudge1Id?: InputMaybe<Scalars['ID']>
  appealJudge2Id?: InputMaybe<Scalars['ID']>
  appealJudge3Id?: InputMaybe<Scalars['ID']>
  appealRulingDecision?: InputMaybe<CaseAppealRulingDecision>
  appealRulingModifiedHistory?: InputMaybe<Scalars['String']>
  appealValidToDate?: InputMaybe<Scalars['String']>
  arraignmentDate?: InputMaybe<UpdateDateLog>
  arrestDate?: InputMaybe<Scalars['String']>
  caseFacts?: InputMaybe<Scalars['String']>
  caseFilesComments?: InputMaybe<Scalars['String']>
  caseModifiedExplanation?: InputMaybe<Scalars['String']>
  caseResentExplanation?: InputMaybe<Scalars['String']>
  civilDemands?: InputMaybe<Scalars['String']>
  comments?: InputMaybe<Scalars['String']>
  conclusion?: InputMaybe<Scalars['String']>
  courtAttendees?: InputMaybe<Scalars['String']>
  courtCaseFacts?: InputMaybe<Scalars['String']>
  courtCaseNumber?: InputMaybe<Scalars['String']>
  courtDate?: InputMaybe<UpdateDateLog>
  courtDocuments?: InputMaybe<Array<Scalars['JSONObject']>>
  courtEndTime?: InputMaybe<Scalars['String']>
  courtId?: InputMaybe<Scalars['ID']>
  courtLegalArguments?: InputMaybe<Scalars['String']>
  courtLocation?: InputMaybe<Scalars['String']>
  courtSessionType?: InputMaybe<CourtSessionType>
  courtStartDate?: InputMaybe<Scalars['String']>
  crimeScenes?: InputMaybe<Scalars['JSONObject']>
  decision?: InputMaybe<CaseDecision>
  defendantStatementDate?: InputMaybe<Scalars['String']>
  defendantWaivesRightToCounsel?: InputMaybe<Scalars['Boolean']>
  defenderEmail?: InputMaybe<Scalars['String']>
  defenderName?: InputMaybe<Scalars['String']>
  defenderNationalId?: InputMaybe<Scalars['String']>
  defenderPhoneNumber?: InputMaybe<Scalars['String']>
  demands?: InputMaybe<Scalars['String']>
  description?: InputMaybe<Scalars['String']>
  endOfSessionBookings?: InputMaybe<Scalars['String']>
  hasCivilClaims?: InputMaybe<Scalars['Boolean']>
  id: Scalars['ID']
  indictmentDecision?: InputMaybe<IndictmentDecision>
  indictmentDeniedExplanation?: InputMaybe<Scalars['String']>
  indictmentIntroduction?: InputMaybe<Scalars['String']>
  indictmentReturnedExplanation?: InputMaybe<Scalars['String']>
  indictmentReviewDecision?: InputMaybe<IndictmentCaseReviewDecision>
  indictmentReviewerId?: InputMaybe<Scalars['ID']>
  indictmentRulingDecision?: InputMaybe<CaseIndictmentRulingDecision>
  indictmentSubtypes?: InputMaybe<Scalars['JSONObject']>
  introduction?: InputMaybe<Scalars['String']>
  isAppealCustodyIsolation?: InputMaybe<Scalars['Boolean']>
  isClosedCourtHidden?: InputMaybe<Scalars['Boolean']>
  isCompletedWithoutRuling?: InputMaybe<Scalars['Boolean']>
  isCustodyIsolation?: InputMaybe<Scalars['Boolean']>
  isHeightenedSecurityLevel?: InputMaybe<Scalars['Boolean']>
  isolationToDate?: InputMaybe<Scalars['String']>
  judgeId?: InputMaybe<Scalars['ID']>
  lawsBroken?: InputMaybe<Scalars['String']>
  leadInvestigator?: InputMaybe<Scalars['String']>
  legalArguments?: InputMaybe<Scalars['String']>
  legalBasis?: InputMaybe<Scalars['String']>
  legalProvisions?: InputMaybe<Array<CaseLegalProvisions>>
  mergeCaseId?: InputMaybe<Scalars['ID']>
  mergeCaseNumber?: InputMaybe<Scalars['String']>
  policeCaseNumbers?: InputMaybe<Array<Scalars['String']>>
  postponedIndefinitelyExplanation?: InputMaybe<Scalars['String']>
  prosecutorAppealAnnouncement?: InputMaybe<Scalars['String']>
  prosecutorAppealDecision?: InputMaybe<CaseAppealDecision>
  prosecutorDemands?: InputMaybe<Scalars['String']>
  prosecutorId?: InputMaybe<Scalars['ID']>
  prosecutorOnlySessionRequest?: InputMaybe<Scalars['String']>
  prosecutorStatementDate?: InputMaybe<Scalars['String']>
  publicProsecutorIsRegisteredInPoliceSystem?: InputMaybe<Scalars['Boolean']>
  registrarId?: InputMaybe<Scalars['ID']>
  requestAppealRulingNotToBePublished?: InputMaybe<Array<UserRole>>
  requestDriversLicenseSuspension?: InputMaybe<Scalars['Boolean']>
  requestProsecutorOnlySession?: InputMaybe<Scalars['Boolean']>
  requestSharedWithDefender?: InputMaybe<RequestSharedWithDefender>
  requestedCourtDate?: InputMaybe<Scalars['String']>
  requestedCustodyRestrictions?: InputMaybe<Array<CaseCustodyRestrictions>>
  requestedOtherRestrictions?: InputMaybe<Scalars['String']>
  requestedValidToDate?: InputMaybe<Scalars['String']>
  ruling?: InputMaybe<Scalars['String']>
  rulingModifiedHistory?: InputMaybe<Scalars['String']>
  rulingSignatureDate?: InputMaybe<Scalars['String']>
  sessionArrangements?: InputMaybe<SessionArrangements>
  sessionBookings?: InputMaybe<Scalars['String']>
  sharedWithProsecutorsOfficeId?: InputMaybe<Scalars['ID']>
  translator?: InputMaybe<Scalars['String']>
  type?: InputMaybe<CaseType>
  validToDate?: InputMaybe<Scalars['String']>
}

export type UpdateCivilClaimantInput = {
  caseFilesSharedWithSpokesperson?: InputMaybe<Scalars['Boolean']>
  caseId: Scalars['ID']
  civilClaimantId: Scalars['ID']
  hasSpokesperson?: InputMaybe<Scalars['Boolean']>
  isSpokespersonConfirmed?: InputMaybe<Scalars['Boolean']>
  name?: InputMaybe<Scalars['String']>
  nationalId?: InputMaybe<Scalars['String']>
  noNationalId?: InputMaybe<Scalars['Boolean']>
  spokespersonEmail?: InputMaybe<Scalars['String']>
  spokespersonIsLawyer?: InputMaybe<Scalars['Boolean']>
  spokespersonName?: InputMaybe<Scalars['String']>
  spokespersonNationalId?: InputMaybe<Scalars['String']>
  spokespersonPhoneNumber?: InputMaybe<Scalars['String']>
}

export type UpdateDateLog = {
  date?: InputMaybe<Scalars['String']>
  location?: InputMaybe<Scalars['String']>
}

export type UpdateDefendantInput = {
  address?: InputMaybe<Scalars['String']>
  alternativeServiceDescription?: InputMaybe<Scalars['String']>
  caseFilesSharedWithDefender?: InputMaybe<Scalars['Boolean']>
  caseId: Scalars['ID']
  citizenship?: InputMaybe<Scalars['String']>
  defendantId: Scalars['ID']
  defendantPlea?: InputMaybe<DefendantPlea>
  defenderChoice?: InputMaybe<DefenderChoice>
  defenderEmail?: InputMaybe<Scalars['String']>
  defenderName?: InputMaybe<Scalars['String']>
  defenderNationalId?: InputMaybe<Scalars['String']>
  defenderPhoneNumber?: InputMaybe<Scalars['String']>
  gender?: InputMaybe<Gender>
  isAlternativeService?: InputMaybe<Scalars['Boolean']>
  isDefenderChoiceConfirmed?: InputMaybe<Scalars['Boolean']>
  isSentToPrisonAdmin?: InputMaybe<Scalars['Boolean']>
  name?: InputMaybe<Scalars['String']>
  nationalId?: InputMaybe<Scalars['String']>
  noNationalId?: InputMaybe<Scalars['Boolean']>
  punishmentType?: InputMaybe<PunishmentType>
  serviceRequirement?: InputMaybe<ServiceRequirement>
  subpoenaType?: InputMaybe<SubpoenaType>
  verdictAppealDate?: InputMaybe<Scalars['String']>
  verdictAppealDecision?: InputMaybe<VerdictAppealDecision>
  verdictViewDate?: InputMaybe<Scalars['String']>
}

export type UpdateFile = {
  /** Number of chapter where file is in. 0 or greater. If provided, then order must also be provided. */
  chapter?: InputMaybe<Scalars['Int']>
  displayDate?: InputMaybe<Scalars['String']>
  id: Scalars['ID']
  /** Number indicating the order within chapter. 0 or greater. If provided, then chapter must also be provided. */
  orderWithinChapter?: InputMaybe<Scalars['Int']>
  userGeneratedFilename?: InputMaybe<Scalars['String']>
}

export type UpdateFilesInput = {
  caseId: Scalars['ID']
  files: Array<UpdateFile>
}

export type UpdateFilesResponse = {
  __typename?: 'UpdateFilesResponse'
  caseFiles: Array<CaseFile>
}

export type UpdateIndictmentCountInput = {
  caseId: Scalars['ID']
  incidentDescription?: InputMaybe<Scalars['String']>
  indictmentCountId: Scalars['ID']
  indictmentCountSubtypes?: InputMaybe<Array<IndictmentSubtype>>
  lawsBroken?: InputMaybe<Array<Array<Scalars['Float']>>>
  legalArguments?: InputMaybe<Scalars['String']>
  policeCaseNumber?: InputMaybe<Scalars['String']>
  policeCaseNumberSubtypes?: InputMaybe<Array<IndictmentSubtype>>
  recordedSpeed?: InputMaybe<Scalars['Int']>
  speedLimit?: InputMaybe<Scalars['Int']>
  vehicleRegistrationNumber?: InputMaybe<Scalars['String']>
}

export type UpdateOffenseInput = {
  caseId: Scalars['ID']
  indictmentCountId: Scalars['ID']
  offenseId: Scalars['ID']
  substances?: InputMaybe<Scalars['JSONObject']>
}

export type UpdateUserInput = {
  active?: InputMaybe<Scalars['Boolean']>
  canConfirmIndictment?: InputMaybe<Scalars['Boolean']>
  email?: InputMaybe<Scalars['String']>
  id: Scalars['ID']
  mobileNumber?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
}

export type UpdateVictimInput = {
  caseId: Scalars['ID']
  hasLawyer?: InputMaybe<Scalars['Boolean']>
  hasNationalId?: InputMaybe<Scalars['Boolean']>
  lawyerAccessToRequest?: InputMaybe<RequestSharedWhen>
  lawyerEmail?: InputMaybe<Scalars['String']>
  lawyerName?: InputMaybe<Scalars['String']>
  lawyerNationalId?: InputMaybe<Scalars['String']>
  lawyerPhoneNumber?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  nationalId?: InputMaybe<Scalars['String']>
  victimId: Scalars['ID']
}

export type UploadFileToCourtInput = {
  caseId: Scalars['ID']
  id: Scalars['ID']
}

export type UploadFileToCourtResponse = {
  __typename?: 'UploadFileToCourtResponse'
  success: Scalars['Boolean']
}

export type UploadPoliceCaseFileInput = {
  caseId: Scalars['ID']
  id: Scalars['ID']
  name: Scalars['String']
}

export type UploadPoliceCaseFileResponse = {
  __typename?: 'UploadPoliceCaseFileResponse'
  key: Scalars['String']
  size: Scalars['Int']
}

export type Url = {
  __typename?: 'Url'
  explicitRedirect?: Maybe<Scalars['String']>
  id: Scalars['ID']
  page?: Maybe<ReferenceLink>
  title?: Maybe<Scalars['String']>
  urlsList: Array<Scalars['String']>
}

export type User = {
  __typename?: 'User'
  active?: Maybe<Scalars['Boolean']>
  canConfirmIndictment?: Maybe<Scalars['Boolean']>
  created?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  id: Scalars['ID']
  institution?: Maybe<Institution>
  latestLogin?: Maybe<Scalars['String']>
  loginCount?: Maybe<Scalars['Int']>
  mobileNumber?: Maybe<Scalars['String']>
  modified?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  nationalId?: Maybe<Scalars['String']>
  role?: Maybe<UserRole>
  title?: Maybe<Scalars['String']>
}

export type UserQueryInput = {
  id: Scalars['ID']
}

export enum UserRole {
  ADMIN = 'ADMIN',
  COURT_OF_APPEALS_ASSISTANT = 'COURT_OF_APPEALS_ASSISTANT',
  COURT_OF_APPEALS_JUDGE = 'COURT_OF_APPEALS_JUDGE',
  COURT_OF_APPEALS_REGISTRAR = 'COURT_OF_APPEALS_REGISTRAR',
  DEFENDER = 'DEFENDER',
  DISTRICT_COURT_ASSISTANT = 'DISTRICT_COURT_ASSISTANT',
  DISTRICT_COURT_JUDGE = 'DISTRICT_COURT_JUDGE',
  DISTRICT_COURT_REGISTRAR = 'DISTRICT_COURT_REGISTRAR',
  LOCAL_ADMIN = 'LOCAL_ADMIN',
  PRISON_SYSTEM_STAFF = 'PRISON_SYSTEM_STAFF',
  PROSECUTOR = 'PROSECUTOR',
  PROSECUTOR_REPRESENTATIVE = 'PROSECUTOR_REPRESENTATIVE',
  PUBLIC_PROSECUTOR_STAFF = 'PUBLIC_PROSECUTOR_STAFF',
}

export type UsersQueryInput = {
  role?: InputMaybe<Array<UserRole>>
}

export enum VerdictAppealDecision {
  ACCEPT = 'ACCEPT',
  POSTPONE = 'POSTPONE',
}

export type Victim = {
  __typename?: 'Victim'
  caseId?: Maybe<Scalars['ID']>
  created?: Maybe<Scalars['String']>
  hasLawyer?: Maybe<Scalars['Boolean']>
  hasNationalId?: Maybe<Scalars['Boolean']>
  id: Scalars['ID']
  lawyerAccessToRequest?: Maybe<RequestSharedWhen>
  lawyerEmail?: Maybe<Scalars['String']>
  lawyerName?: Maybe<Scalars['String']>
  lawyerNationalId?: Maybe<Scalars['String']>
  lawyerPhoneNumber?: Maybe<Scalars['String']>
  modified?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  nationalId?: Maybe<Scalars['String']>
}
