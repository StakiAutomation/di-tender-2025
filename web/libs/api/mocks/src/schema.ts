import gql from 'graphql-tag'
import { buildASTSchema } from 'graphql'

export const schema = buildASTSchema(gql`
# ------------------------------------------------------
# THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
# ------------------------------------------------------

interface Identity {
  nationalId: ID!
  givenName: String
  familyName: String
  name: String!
  address: IdentityAddress
  type: IdentityType!
}

enum IdentityType {
  Person
  Company
}

interface AuthDelegation {
  id: ID
  from: Identity!
  to: Identity
  createdBy: Identity
  type: AuthDelegationType!
  provider: AuthDelegationProvider!
  referenceId: String
  validTo: DateTime
}

enum AuthDelegationType {
  ProcurationHolder
  LegalGuardian
  Custom
  PersonalRepresentative
  LegalGuardianMinor
  LegalRepresentative
  GeneralMandate
}

enum AuthDelegationProvider {
  thjodskra
  fyrirtaekjaskra
  talsmannagrunnur
  delegationdb
  syslumenn
}

"""
A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format.
"""
scalar DateTime

interface EducationCompulsorySchoolGradeCategory {
  label: String!
}

interface IntellectualPropertiesPatent implements IntellectualProperty {
  id: String!
  applicationNumber: String
  lifecycle: IntellectualPropertiesApplicationLifecycle
  canRenew: Boolean
  status: String
  specification: IntellectualPropertiesSpecification
  classifications: [IntellectualPropertiesClassification!]
  owners: [IntellectualPropertiesPerson!]
  designers: [IntellectualPropertiesPerson!]
  agent: IntellectualPropertiesPerson
  name: String!
  nameInOrgLanguage: String
  annualFeesInfo: IntellectualPropertiesAnnualFeesInfo
  inventors: [IntellectualPropertiesPerson!]
  priorities: [IntellectualPropertiesPriority!]
  statusText: String
  statusDate: DateTime
}

interface IntellectualProperty {
  id: String!
  applicationNumber: String
  lifecycle: IntellectualPropertiesApplicationLifecycle
  canRenew: Boolean
  status: String
  specification: IntellectualPropertiesSpecification
  classifications: [IntellectualPropertiesClassification!]
  owners: [IntellectualPropertiesPerson!]
  designers: [IntellectualPropertiesPerson!]
  agent: IntellectualPropertiesPerson
}

type AdministrationofOccupationalSafetyandHealthCourseModel {
  id: Float!
  name: String!
  dateFrom: String!
  dateTo: String!
  time: String!
  location: String!
  price: Float!
  registrationUrl: String!
  status: String!
  category: String!
  subCategory: String!
  description: String!
  alwaysOpen: Boolean
}

type AdministrationofOccupationalSafetyandHealthCoursesResponseModel {
  courses: [AdministrationofOccupationalSafetyandHealthCourseModel!]!
}

type AirDiscountSchemeFund {
  credit: Float!
  used: Float!
  total: Float!
}

type AirDiscountSchemeUserInfo {
  gender: String!
  age: Float!
  postalCode: Float!
}

type AirDiscountSchemeFlight {
  id: ID!
  bookingDate: DateTime!
  flightLegs: [AirDiscountSchemeFlightLeg!]!
  user: AirDiscountSchemeUser!
  userInfo: AirDiscountSchemeUserInfo!
}

type AirDiscountSchemeFlightLeg {
  id: ID!
  airline: String!
  cooperation: String
  financialState: String!
  travel: String!
  originalPrice: Float!
  discountPrice: Float!
  flight: AirDiscountSchemeFlight!
}

type AirDiscountSchemeUser {
  nationalId: ID!
  name: String!
  mobile: String
  role: String!
  fund: AirDiscountSchemeFund
  meetsADSRequirements: Boolean!
  flightLegs: [AirDiscountSchemeFlightLeg!]
}

type AirDiscountSchemeConnectionDiscountCode {
  code: ID!
  flightId: String!
  flightDesc: String!
  validUntil: String!
}

type AirDiscountSchemeDiscount {
  nationalId: ID!
  discountCode: String
  connectionDiscountCodes: [AirDiscountSchemeConnectionDiscountCode!]!
  expiresIn: Float!
  user: AirDiscountSchemeUser!
}

type AircraftRegistryPerson {
  address: String
  city: String
  country: String
  email: String
  name: String
  phone: String
  postcode: String
  ssn: Float
}

type AircraftRegistryAircraft {
  identifiers: String
  type: String
  maxWeight: Float
  operator: AircraftRegistryPerson
  owners: [AircraftRegistryPerson!]
  productionYear: Float
  registrationNumber: Float
  serialNumber: String
  unregistered: Boolean
  unregisteredDate: DateTime
}

type AircraftRegistryAllAircraftsResponse {
  aircrafts: [AircraftRegistryAircraft!]
  pageNumber: Float
  pageSize: Float
  totalCount: Float
}

type OpenApi {
  spec: String!
}

type PageInfo {
  nextCursor: String
}

type ExternalLinks {
  responsibleParty: String!
  documentation: String
  bugReport: String
  featureRequest: String
}

type XroadIdentifier {
  instance: String!
  memberClass: String!
  memberCode: String!
  subsystemCode: String!
  serviceCode: String!
}

type ServiceDetail {
  version: ID!
  title: String!
  summary: String!
  description: String!
  type: TypeCategory!
  pricing: [PricingCategory!]!
  data: [DataCategory!]!
  links: ExternalLinks!
  xroadIdentifier: XroadIdentifier!
}

enum TypeCategory {
  REST
  SOAP
  GRAPHQL
}

enum PricingCategory {
  FREE
  PAID
}

enum DataCategory {
  OPEN
  PUBLIC
  OFFICIAL
  PERSONAL
  HEALTH
  FINANCIAL
}

type ServiceEnvironment {
  environment: Environment!
  details: [ServiceDetail!]!
}

enum Environment {
  DEVELOPMENT
  STAGING
  PRODUCTION
}

type Service {
  id: ID!
  owner: String!
  title: String!
  summary: String!
  description: String!
  pricing: [PricingCategory!]!
  data: [DataCategory!]!
  type: [TypeCategory!]!
  access: [AccessCategory!]!
  environments: [ServiceEnvironment!]!
}

enum AccessCategory {
  XROAD
  APIGW
}

type ApiCatalogue {
  services: [Service!]!
  pageInfo: PageInfo
}

type ActionCardTag {
  label: String
  variant: String
}

type PendingAction {
  displayStatus: String
  title: String
  content: String
  button: String
}

type ApplicationHistory {
  date: DateTime!
  log: String
}

type ActionCardMetaData {
  title: String
  description: String
  tag: ActionCardTag
  deleteButton: Boolean
  pendingAction: PendingAction
  history: [ApplicationHistory!]
  draftFinishedSteps: Float
  draftTotalSteps: Float
  historyButton: String
}

type Application {
  id: ID!
  created: DateTime!
  modified: DateTime!
  applicant: String!
  assignees: [String!]!
  applicantActors: [String!]!
  state: String!
  actionCard: ActionCardMetaData
  typeId: ApplicationResponseDtoTypeIdEnum!
  answers: JSON!
  externalData: JSON!
  name: String
  institution: String
  progress: Float
  status: ApplicationResponseDtoStatusEnum!
  pruned: Boolean
}

enum ApplicationResponseDtoTypeIdEnum {
  ExampleForm
  ExampleCommonActions
  ExampleInputs
  ExampleNoInputs
  ExamplePayment
  ExampleStateTransfers
  Passport
  PassportAnnulment
  DrivingLearnersPermit
  DrivingLicense
  DrivingAssessmentApproval
  ParentalLeave
  DocumentProviderOnboarding
  HealthInsurance
  ChildrenResidenceChangeV2
  DataProtectionAuthorityComplaint
  LoginService
  InheritanceReport
  InstitutionCollaboration
  FundingGovernmentProjects
  PublicDebtPaymentPlan
  ComplaintsToAlthingiOmbudsman
  AccidentNotification
  GeneralPetitionService
  GeneralFishingLicense
  PSign
  AnnouncementOfDeath
  CriminalRecord
  FinancialAid
  DrivingInstructorRegistrations
  DrivingSchoolConfirmation
  MortgageCertificate
  MarriageConditions
  NoDebtCertificate
  FinancialStatementCemetery
  FinancialStatementsInao
  FinancialStatementIndividualElection
  FinancialStatementPoliticalParty
  OperatingLicense
  Estate
  DrivingLicenseDuplicate
  AnonymityInVehicleRegistry
  ChangeCoOwnerOfVehicle
  ChangeOperatorOfVehicle
  DigitalTachographDriversCard
  LicensePlateRenewal
  OrderVehicleLicensePlate
  OrderVehicleRegistrationCertificate
  TransferOfVehicleOwnership
  DrivingLicenseBookUpdateInstructor
  AlcoholTaxRedemption
  EuropeanHealthInsuranceCard
  OldAgePension
  HouseholdSupplement
  CarRecycling
  PresidentialListCreation
  PresidentialListSigning
  ParliamentaryListCreation
  ParliamentaryListSigning
  MunicipalListCreation
  MunicipalListSigning
  Citizenship
  AdditionalSupportForTheElderly
  EnergyFunds
  HealthcareLicenseCertificate
  HealthcareWorkPermit
  PensionSupplement
  TransferOfMachineOwnership
  DeathBenefits
  University
  HomeSupport
  ChangeMachineSupervisor
  DeregisterMachine
  GrindavikHousingBuyout
  RequestInspectionForMachine
  OfficialJournalOfIceland
  IdCard
  HealthInsuranceDeclaration
  StreetRegistration
  IncomePlan
  NewPrimarySchool
  WorkAccidentNotification
  MachineRegistration
  SeminarRegistration
  TrainingLicenseOnAWorkMachine
  SecondarySchool
}

"""
The \`JSON\` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).
"""
scalar JSON

enum ApplicationResponseDtoStatusEnum {
  notstarted
  draft
  inprogress
  completed
  rejected
  approved
}

type ApplicationStatistics {
  typeid: String!
  count: Float!
  draft: Float!
  inprogress: Float!
  completed: Float!
  rejected: Float!
  approved: Float!
  name: String!
}

type ApplicationAdmin {
  id: ID!
  created: DateTime!
  modified: DateTime!
  applicant: String!
  assignees: [String!]!
  applicantActors: [String!]!
  pruneAt: DateTime
  pruned: Boolean
  state: String!
  actionCard: ActionCardMetaData
  typeId: ApplicationListAdminResponseDtoTypeIdEnum!
  name: String
  institution: String
  progress: Float
  status: ApplicationListAdminResponseDtoStatusEnum!
  applicantName: String
  paymentStatus: String
}

enum ApplicationListAdminResponseDtoTypeIdEnum {
  ExampleForm
  ExampleCommonActions
  ExampleInputs
  ExampleNoInputs
  ExamplePayment
  ExampleStateTransfers
  Passport
  PassportAnnulment
  DrivingLearnersPermit
  DrivingLicense
  DrivingAssessmentApproval
  ParentalLeave
  DocumentProviderOnboarding
  HealthInsurance
  ChildrenResidenceChangeV2
  DataProtectionAuthorityComplaint
  LoginService
  InheritanceReport
  InstitutionCollaboration
  FundingGovernmentProjects
  PublicDebtPaymentPlan
  ComplaintsToAlthingiOmbudsman
  AccidentNotification
  GeneralPetitionService
  GeneralFishingLicense
  PSign
  AnnouncementOfDeath
  CriminalRecord
  FinancialAid
  DrivingInstructorRegistrations
  DrivingSchoolConfirmation
  MortgageCertificate
  MarriageConditions
  NoDebtCertificate
  FinancialStatementCemetery
  FinancialStatementsInao
  FinancialStatementIndividualElection
  FinancialStatementPoliticalParty
  OperatingLicense
  Estate
  DrivingLicenseDuplicate
  AnonymityInVehicleRegistry
  ChangeCoOwnerOfVehicle
  ChangeOperatorOfVehicle
  DigitalTachographDriversCard
  LicensePlateRenewal
  OrderVehicleLicensePlate
  OrderVehicleRegistrationCertificate
  TransferOfVehicleOwnership
  DrivingLicenseBookUpdateInstructor
  AlcoholTaxRedemption
  EuropeanHealthInsuranceCard
  OldAgePension
  HouseholdSupplement
  CarRecycling
  PresidentialListCreation
  PresidentialListSigning
  ParliamentaryListCreation
  ParliamentaryListSigning
  MunicipalListCreation
  MunicipalListSigning
  Citizenship
  AdditionalSupportForTheElderly
  EnergyFunds
  HealthcareLicenseCertificate
  HealthcareWorkPermit
  PensionSupplement
  TransferOfMachineOwnership
  DeathBenefits
  University
  HomeSupport
  ChangeMachineSupervisor
  DeregisterMachine
  GrindavikHousingBuyout
  RequestInspectionForMachine
  OfficialJournalOfIceland
  IdCard
  HealthInsuranceDeclaration
  StreetRegistration
  IncomePlan
  NewPrimarySchool
  WorkAccidentNotification
  MachineRegistration
  SeminarRegistration
  TrainingLicenseOnAWorkMachine
  SecondarySchool
}

enum ApplicationListAdminResponseDtoStatusEnum {
  notstarted
  draft
  inprogress
  completed
  rejected
  approved
}

type ApplicationAdminPaginatedResponse {
  rows: [ApplicationAdmin!]!
  count: Float!
}

type ApplicationPayment {
  fulfilled: Boolean!
  paymentUrl: String!
}

type PresignedUrlResponse {
  url: String!
}

type PagingData {
  page: Float
  pageSize: Float
  totalPages: Float
  offset: Float
  total: Float
  hasPreviousPage: Boolean
  hasNextPage: Boolean
}

type PropertyOwner {
  name: String
  ssn: String
  ownership: Float
  purchaseDate: DateTime
  grantDisplay: String
}

type PropertyOwnersModel {
  paging: PagingData
  registeredOwners: [PropertyOwner!]
}

type Appraisal {
  activeAppraisal: Float
  plannedAppraisal: Float
  activeStructureAppraisal: Float
  plannedStructureAppraisal: Float
  activePlotAssessment: Float
  plannedPlotAssessment: Float
  activeYear: Float
  plannedYear: Float
}

type PropertyLocation {
  locationNumber: Float
  postNumber: Float
  municipality: String
  propertyNumber: Float
  display: String
  displayShort: String
}

type UnitOfUse {
  propertyNumber: String
  unitOfUseNumber: String
  address: PropertyLocation
  marking: String
  usageDisplay: String
  displaySize: Float
  buildYearDisplay: String
  fireAssessment: Float
  explanation: String
  appraisal: Appraisal
}

type UnitsOfUseModel {
  paging: PagingData
  unitsOfUse: [UnitOfUse!]
}

type LandModel {
  landNumber: String
  landAppraisal: Float
  useDisplay: String
  area: String
  areaUnit: String
  registeredOwners: PropertyOwnersModel
}

type PropertyDetail {
  unitsOfUse: UnitsOfUseModel
  registeredOwners: PropertyOwnersModel
  appraisal: Appraisal
  defaultAddress: PropertyLocation
  land: LandModel
  propertyNumber: String
}

type SimpleProperties {
  propertyNumber: String
  defaultAddress: PropertyLocation
}

type PropertyOverview {
  properties: [SimpleProperties!]
  paging: PagingData
}

type Image {
  id: ID!
  url: String!
  title: String!
  description: String
  contentType: String!
  width: Int!
  height: Int!
}

type Link {
  id: ID!
  text: String!
  url: String!
  intro: String
  labels: [String!]
  date: String!
}

type ArticleCategory {
  id: ID!
  title: String!
  slug: String!
  description: String
}

type ArticleGroup {
  title: String!
  slug: String!
  description: String
  importance: Float
}

type ArticleSubgroup {
  title: String!
  importance: Float
  slug: String!
}

type OrganizationTag {
  id: ID!
  title: String!
}

type Asset {
  typename: String!
  id: ID!
  url: String!
  title: String!
  contentType: String!
}

type Html {
  typename: String!
  id: ID!
  document: JSON!
}

type TimelineEvent {
  id: ID!
  title: String!
  date: String!
  numerator: Int
  denominator: Int
  label: String!
  body: Html
  tags: [String!]
  link: String!
}

type Story {
  label: String!
  title: String!
  logo: Image!
  readMoreText: String!
  date: String!
  intro: String!
  link: String!
  linkedPage: String
  body: String
}

type LinkCard {
  id: ID!
  title: String!
  body: String!
  linkUrl: String!
  linkText: String
}

type LinkCardSection {
  id: ID!
  title: String!
  cards: [LinkCard!]!
}

type GenericTagGroup {
  id: ID!
  title: String!
  slug: String!
}

type GenericTag {
  id: ID!
  title: String!
  slug: String!
  genericTagGroup: GenericTagGroup
}

type EmbeddedVideo {
  id: ID!
  title: String!
  url: String!
  thumbnailImageUrl: String
}

type News {
  id: ID!
  slug: String!
  title: String!
  subtitle: String!
  intro: String
  image: Image
  featuredImage: Image
  date: String!
  content: [Slice!]
  genericTags: [GenericTag!]!
  fullWidthImageInContent: Boolean
  initialPublishDate: String
  organization: Organization
  signLanguageVideo: EmbeddedVideo
}

union Slice = TimelineSlice | HeadingSlice | LinkCard | LinkCardSection | StorySlice | LogoListSlice | LatestNewsSlice | BulletListSlice | Statistics | ProcessEntry | FaqList | ConnectedComponent | EmbeddedVideo | SectionWithImage | SectionWithVideo | TabSection | TeamList | ContactUs | TellUsAStory | Html | Image | Asset | Districts | FeaturedArticles | OneColumnText | TwoColumnText | MultipleStatistics | AccordionSlice | OverviewLinks | EventSlice | Form | Stepper | GraphCard | AnchorPageListSlice | SidebarCard | PowerBiSlice | TableSlice | EmailSignup | FeaturedSupportQNAs | SliceDropdown | Embed | LatestEventsSlice | Chart | ChartComponent | ChartNumberBox | FeaturedEvents | GenericList | LatestGenericListItems | FeaturedLinks | GrantCardsList | OrganizationParentSubpageList | IntroLinkImage

type TimelineSlice {
  id: ID!
  title: String!
  intro: String!
  events: [TimelineEvent!]!
  hasBorderAbove: Boolean
}

type HeadingSlice {
  id: ID!
  title: String!
  body: String!
}

type StorySlice {
  id: ID!
  readMoreText: String!
  stories: [Story!]!
}

type LogoListSlice {
  id: ID!
  title: String!
  body: String!
  images: [Image!]!
}

type LatestNewsSlice {
  id: ID!
  title: String!
  tag: String!
  readMoreText: String!
  news: [News!]!
  readMoreLink: Link
}

type BulletListSlice {
  id: ID!
  bullets: [BulletEntry!]!
  dividerOnTop: Boolean
}

union BulletEntry = IconBullet | NumberBulletGroup

type IconBullet {
  id: ID!
  title: String!
  body: String!
  icon: Image!
  url: String
  linkText: String
}

type NumberBulletGroup {
  id: ID!
  defaultVisible: Int!
  bullets: [NumberBullet!]!
}

type FaqList {
  id: ID!
  title: String!
  questions: [QuestionAndAnswer!]!
  showTitle: Boolean
}

type ConnectedComponent {
  id: ID!
  title: String!
  type: String
  json: JSON
  configJson: JSON
  translationStrings: JSONObject
}

"""
The \`JSONObject\` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).
"""
scalar JSONObject

type SectionWithImage {
  id: ID!
  title: String!
  image: Image
  content: [Slice!]
}

type SectionWithVideo {
  id: ID!
  title: String!
  showTitle: Boolean
  video: EmbeddedVideo
  html: Html
  locale: String!
  link: Link
  showDividerOnTop: Boolean
}

type TeamList {
  id: ID!
  teamMembers: [TeamMember!]!
  variant: String
  filterTags: [GenericTag!]
  teamMemberOrder: GetTeamMembersInputOrderBy
  showSearchInput: Boolean
}

enum GetTeamMembersInputOrderBy {
  Name
  Manual
}

type ContactUs {
  id: ID!
  title: String!
  required: String!
  invalidPhone: String!
  invalidEmail: String!
  labelName: String!
  labelPhone: String!
  labelEmail: String!
  labelSubject: String!
  labelMessage: String!
  submitButtonText: String!
  successMessage: String!
  errorMessage: String!
}

type TellUsAStory {
  id: ID!
  introTitle: String!
  introDescription: Html
  introImage: Image
  firstSectionTitle: String!
  organizationLabel: String!
  organizationPlaceholder: String!
  organizationInputErrorMessage: String!
  dateOfStoryLabel: String!
  dateOfStoryPlaceholder: String!
  dateOfStoryInputErrorMessage: String!
  secondSectionTitle: String!
  subjectLabel: String!
  subjectPlaceholder: String!
  subjectInputErrorMessage: String
  messageLabel: String!
  messagePlaceholder: String!
  messageInputErrorMessage: String!
  thirdSectionTitle: String!
  instructionsDescription: Html
  instructionsImage: Image!
  instructionsTitle: String!
  nameLabel: String!
  namePlaceholder: String!
  nameInputErrorMessage: String!
  emailLabel: String!
  emailPlaceholder: String!
  emailInputErrorMessage: String!
  publicationAllowedLabel: String!
  submitButtonTitle: String!
  SuccessMessageTitle: String!
  successMessage: Html
  errorMessageTitle: String!
  errorMessage: Html
}

type Districts {
  id: ID!
  title: String!
  description: String
  image: Image
  links: [Link!]!
  hasBorderAbove: Boolean
}

type FeaturedArticles {
  id: ID!
  title: String!
  image: Image
  articles: [ArticleReference!]!
  automaticallyFetchArticles: Boolean
  sortBy: String!
  resolvedArticles: [Article!]!
  link: Link
  hasBorderAbove: Boolean
  introText: [Slice!]
}

type TwoColumnText {
  id: ID!
  rightTitle: String
  rightContent: [Slice!]
  rightLink: Link
  leftTitle: String
  leftContent: [Slice!]
  leftLink: Link
  dividerOnTop: Boolean
  onlyUseOneTitle: Boolean
}

type MultipleStatistics {
  id: ID!
  title: String!
  statistics: [Statistics!]!
  link: Link
  hasBorderAbove: Boolean
}

type AccordionSlice {
  id: ID!
  title: String!
  type: String!
  accordionItems: [OneColumnText!]
  hasBorderAbove: Boolean
  showTitle: Boolean
  titleHeadingLevel: String
}

type OverviewLinks {
  id: ID!
  titleAbove: String
  overviewLinks: [IntroLinkImage!]!
  link: Link
  hasBorderAbove: Boolean
  linkData: OverviewLinksLinkData
}

type EventSlice {
  id: ID!
  title: String!
  subtitle: String!
  date: String!
  link: Link
  backgroundImage: Image
}

type Form {
  id: ID!
  title: String!
  intro: String!
  defaultFieldNamespace: JSON
  fields: [FormField!]!
  successText: String!
  aboutYouHeadingText: String!
  questionsHeadingText: String!
  recipientFormFieldDecider: FormField
  recipientList: [String!]
}

type AnchorPageListSlice {
  id: ID!
  title: String!
  pages: [AnchorPage!]!
}

type SidebarCard {
  id: ID!
  type: String!
  title: String!
  contentString: String!
  link: Link
  image: Image
}

type PowerBiSlice {
  id: ID!
  title: String!
  powerBiEmbedProps: JSON
  workspaceId: String
  reportId: String
  owner: String
  powerBiEmbedPropsFromServer: GetPowerBiEmbedPropsFromServerResponse
}

type TableSlice {
  id: ID!
  title: String!
  tableContent: JSON
}

type FeaturedSupportQNAs {
  id: ID!
  renderedTitle: String
  link: Link
  supportQNAs: [SupportQNA!]
  resolvedSupportQNAs: [SupportQNA!]!
  automaticallyFetchSupportQNAs: Boolean
}

type SliceDropdown {
  id: ID!
  dropdownLabel: String
  slices: [OneColumnText!]!
  alphabeticallyOrdered: Boolean
}

type Embed {
  id: ID!
  title: String!
  embedUrl: String
  altText: String
  aspectRatio: String
}

type LatestEventsSlice {
  id: ID!
  title: String!
  events: [Event!]!
}

type Chart {
  id: ID!
  title: String!
  chartDescription: String!
  alternativeDescription: String!
  displayAsCard: Boolean!
  startExpanded: Boolean!
  components: [ChartComponent!]!
  dateFrom: String
  dateTo: String
  numberOfDataPoints: Float
  sourceData: String
  flipAxis: Boolean
  xAxisKey: String
  xAxisFormat: String
  xAxisValueType: String
  customStyleConfig: String
  reduceAndRoundValue: Boolean
  yAxisLabel: String
}

type ChartNumberBox {
  id: ID!
  title: String!
  numberBoxDescription: String!
  sourceDataKey: String!
  valueType: String!
  displayChangeMonthOverMonth: Boolean!
  displayChangeYearOverYear: Boolean!
  numberBoxDate: String
  reduceAndRoundValue: Boolean
  displayTimestamp: Boolean
}

type FeaturedEvents {
  id: ID!
  organization: String
  resolvedEventList: EventList!
  namespace: JSONObject!
  noEventsFoundText: [Slice!]
}

type LatestGenericListItems {
  id: ID!
  title: String!
  genericList: GenericList
  seeMorePage: Page
  seeMoreLinkText: String!
  itemResponse: GenericListItemResponse
}

union Page = Article | SubArticle | AnchorPage | LifeEventPage | News | ArticleCategory | OrganizationPage | OrganizationSubpage | ProjectPage

type FeaturedLinks {
  id: ID!
  title: String!
  featuredLinks: [Featured!]
}

type GrantCardsList {
  id: ID!
  title: String!
  displayTitle: Boolean
  resolvedGrantsList: GrantList
  namespace: JSONObject!
  maxNumberOfCards: Int
  sorting: GrantCardsListSorting
}

enum GrantCardsListSorting {
  ALPHABETICAL
  MOST_RECENTLY_UPDATED_FIRST
}

type OrganizationParentSubpageList {
  id: ID!
  title: String!
  pageLinkVariant: OrganizationParentSubpageListVariant!
  pageLinks: [OrganizationParentSubpageListPageLink!]!
  seeMoreLink: Link
}

enum OrganizationParentSubpageListVariant {
  ServiceCard
  ProfileCardWithTitleAbove
}

type NumberBullet {
  id: ID!
  title: String!
  body: String!
}

type Statistic {
  id: ID!
  value: String!
  label: String!
}

type Statistics {
  id: ID!
  title: String!
  statistics: [Statistic!]!
}

type ProcessEntry {
  id: ID!
  processTitle: String!
  processLink: String!
  openLinkInModal: Boolean
  buttonText: String!
}

type QuestionAndAnswer {
  id: ID!
  question: String!
  answer: [Slice!]!
  publishDate: String
}

type TabContent {
  tabTitle: String!
  contentTitle: String
  image: Image
  body: [Slice!]
}

type TabSection {
  id: ID!
  title: String!
  tabs: [TabContent!]!
}

type TeamMemberTagGroup {
  groupId: String!
  groupLabel: String!
  tagLabels: [String!]!
}

type TeamMember {
  id: ID!
  name: String!
  title: String!
  email: String
  phone: String
  image: Image
  imageOnSelect: Image
  filterTags: [GenericTag!]
  intro: [Slice!]
  tagGroups: [TeamMemberTagGroup!]
  createdAt: String
}

type TeamMemberResponseInput {
  teamListId: String!
  lang: String!
  page: Int
  size: Int
  queryString: String
  tags: [String!]
  tagGroups: JSON
  orderBy: GetTeamMembersInputOrderBy
}

type ArticleReference {
  id: ID!
  title: String!
  slug: String!
  intro: String!
  group: ArticleGroup
  category: ArticleCategory
  organization: [Organization!]
  processEntry: ProcessEntry
  processEntryButtonText: String!
}

type OneColumnText {
  id: ID!
  title: String!
  link: Link
  content: [Slice!]
  dividerOnTop: Boolean
  showTitle: Boolean
}

type ReferenceLink {
  slug: String!
  type: String!
}

type IntroLinkImage {
  id: ID!
  title: String!
  intro: Html
  introHtml: Html
  image: Image
  leftImage: Boolean!
  linkTitle: String!
  link: ReferenceLink
  openLinkInNewTab: Boolean!
}

type OverviewLinksLinkDataCategoryCardItem {
  title: String!
  description: String!
  href: String!
}

type OverviewLinksLinkData {
  variant: OverviewLinksLinkDataVariant!
  categoryCardItems: [OverviewLinksLinkDataCategoryCardItem!]!
}

enum OverviewLinksLinkDataVariant {
  IntroLinkImage
  CategoryCard
}

type FormField {
  id: ID!
  title: String!
  name: String
  placeholder: String!
  type: String!
  required: Boolean!
  options: [String!]!
  emailConfig: JSON
  informationText: String
}

type Step {
  id: ID!
  title: String!
  slug: String!
  stepType: String
  subtitle: [Slice!]
  config: String
}

type Stepper {
  id: ID!
  title: String!
  steps: [Step!]
  config: String
}

type GraphCard {
  id: ID!
  graphTitle: String!
  graphDescription: String!
  organization: String
  data: String!
  datakeys: String!
  type: String!
  displayAsCard: Boolean!
  organizationLogo: Image
}

type AnchorPage {
  id: ID!
  title: String!
  shortTitle: String
  slug: String!
  intro: String
  shortIntro: String
  image: Image
  thumbnail: Image
  tinyThumbnail: Image
  content: [Slice!]!
  category: ArticleCategory
  seeMoreText: String
  pageType: String
  featuredImage: Image
}

type GetPowerBiEmbedPropsFromServerResponse {
  accessToken: String
  embedUrl: String
}

type EmailSignup {
  id: ID!
  title: String!
  description: String
  formFields: [FormField!]
  signupType: String
  configuration: JSON
  translations: JSON
}

type SupportCategory {
  id: ID!
  title: String
  description: String
  organization: Organization
  slug: String
  importance: Float!
}

type SupportSubCategory {
  title: String!
  description: String
  slug: String
  importance: Float!
}

type SupportQNA {
  id: ID!
  title: String!
  answer: [Slice!]!
  slug: String!
  organization: Organization
  category: SupportCategory
  subCategory: SupportSubCategory
  importance: Float!
  relatedLinks: [Link!]!
  contactLink: String!
}

type EventLocation {
  streetAddress: String
  floor: String
  postalCode: String
  useFreeText: Boolean
  freeText: String
}

type EventTime {
  startTime: String
  endTime: String
}

type Event {
  id: ID!
  organization: Organization
  title: String!
  slug: String!
  startDate: String!
  endDate: String!
  time: EventTime!
  location: EventLocation!
  content: [Slice!]
  video: EmbeddedVideo
  thumbnailImage: Image
  contentImage: Image
  fullWidthImageInContent: Boolean
  featuredImage: Image
  firstPublishedAt: String
}

type ChartComponent {
  id: ID!
  label: String!
  type: String!
  sourceDataKey: String!
  interval: Float
  stackId: String
  values: String
}

type EventList {
  total: Int!
  items: [Event!]!
}

type GenericListItemResponseInput {
  genericListId: String!
  lang: String!
  page: Int
  size: Int
  queryString: String
  tags: [String!]
  tagGroups: JSON
  orderBy: GetGenericListItemsInputOrderBy
}

enum GetGenericListItemsInputOrderBy {
  DATE
  TITLE
  PUBLISH_DATE
}

type GenericList {
  id: ID!
  searchInputPlaceholder: String
  itemType: GenericListItemType
  filterTags: [GenericTag!]
  defaultOrder: GetGenericListItemsInputOrderBy
  showSearchInput: Boolean
}

enum GenericListItemType {
  NonClickable
  Clickable
}

type SubArticle {
  id: ID!
  title: String!
  slug: String!
  parent: ArticleReference
  body: [Slice!]!
  showTableOfContents: Boolean
  signLanguageVideo: EmbeddedVideo
  stepper: Stepper
}

type LinkGroup {
  id: ID!
  name: String!
  primaryLink: Link
  childrenLinks: [Link!]!
}

type OrganizationTheme {
  gradientStartColor: String!
  gradientEndColor: String!
  useGradientColor: Boolean
  backgroundColor: String
  mobileBackgroundColor: String
  fullWidth: Boolean
  textColor: String
  imagePadding: String
  imageIsFullHeight: Boolean
  imageObjectFit: String
  imageObjectPosition: String
  titleSectionPaddingLeft: Int
}

type AlertBanner {
  id: ID!
  showAlertBanner: Boolean!
  bannerVariant: String!
  title: String
  description: String
  linkTitle: String
  link: ReferenceLink
  isDismissable: Boolean!
  dismissedForDays: Int!
  servicePortalPaths: [String!]
}

type OrganizationPageTopLevelNavigationLink {
  label: String!
  href: String!
}

type OrganizationPageTopLevelNavigation {
  links: [OrganizationPageTopLevelNavigationLink!]!
}

type OrganizationPage {
  id: ID!
  title: String!
  slug: String!
  description: String!
  theme: String!
  themeProperties: OrganizationTheme!
  slices: [Slice!]!
  bottomSlices: [Slice!]!
  secondaryNewsTags: [GenericTag!]
  menuLinks: [LinkGroup!]!
  secondaryMenu: LinkGroup
  organization: Organization
  featuredImage: Image
  sidebarCards: [Slice!]
  externalLinks: [Link!]
  alertBanner: AlertBanner
  defaultHeaderImage: Image
  topLevelNavigation: OrganizationPageTopLevelNavigation
  canBeFoundInSearchResults: Boolean
  showPastEventsOption: Boolean
}

type OrganizationSubpage {
  id: ID!
  title: String!
  shortTitle: String
  slug: String!
  url: [String!]!
  intro: String
  description: [Slice!]
  links: [Link!]
  slices: [Slice!]
  showTableOfContents: Boolean!
  sliceCustomRenderer: String
  sliceExtraText: String
  organizationPage: OrganizationPage!
  featuredImage: Image
  signLanguageVideo: EmbeddedVideo
  bottomSlices: [Slice!]
}

type ProjectSubpage {
  id: ID!
  title: String!
  shortTitle: String
  slug: String!
  content: [Slice!]
  renderSlicesAsTabs: Boolean!
  slices: [Slice!]!
  showTableOfContents: Boolean!
  bottomSlices: [Slice!]
}

type Namespace {
  namespace: String!
  fields: String!
}

type ProjectPageThemeProperties {
  gradientStartColor: String!
  gradientEndColor: String!
  useGradientColor: Boolean
  backgroundColor: String
  mobileBackgroundColor: String
  fullWidth: Boolean
  textColor: String
  imagePadding: String
  imageIsFullHeight: Boolean
  imageObjectFit: String
  imageObjectPosition: String
  titleSectionPaddingLeft: Int
}

type ProjectPage {
  id: ID!
  title: String!
  slug: String!
  theme: String!
  sidebar: Boolean!
  sidebarLinks: [LinkGroup!]!
  secondarySidebar: LinkGroup
  subtitle: String!
  intro: String!
  content: [Slice!]
  stepper: Stepper
  slices: [Slice!]!
  bottomSlices: [Slice!]!
  newsTag: GenericTag
  projectSubpages: [ProjectSubpage!]!
  featuredImage: Image
  defaultHeaderImage: Image
  defaultHeaderBackgroundColor: String!
  themeProperties: ProjectPageThemeProperties
  featuredDescription: String!
  footerConfig: JSON
  footerItems: [FooterItem!]
  backLink: Link
  contentIsFullWidth: Boolean
  namespace: Namespace
  alertBanner: AlertBanner
}

type Featured {
  title: String!
  attention: Boolean!
  thing: ReferenceLink
}

type LifeEventPage {
  id: ID!
  title: String!
  shortTitle: String
  slug: String!
  intro: String
  shortIntro: String
  image: Image
  thumbnail: Image
  tinyThumbnail: Image
  featuredImage: Image
  content: [Slice!]!
  featured: [Featured!]!
  organizations: [Organization!]!
  category: ArticleCategory
  relatedLifeEvents: [LifeEventPage!]!
  seeMoreText: String
}

type GenericListItem {
  id: ID!
  genericList: GenericList
  title: String!
  date: String
  cardIntro: [Slice!]!
  content: [Slice!]
  slug: String
  assetUrl: String
  externalUrl: String
  filterTags: [GenericTag!]
  image: Image
  fullWidthImageInContent: Boolean
}

type GenericListItemResponse {
  input: GenericListItemResponseInput!
  items: [GenericListItem!]!
  total: Int!
}

type OrganizationFund {
  id: ID!
  title: String!
  link: ReferenceLink
  featuredImage: Image
  parentOrganization: Organization!
}

type Grant {
  id: ID!
  name: String!
  lastUpdateTimestamp: String!
  description: String
  applicationId: String
  applicationUrl: ReferenceLink
  applicationButtonLabel: String
  specialEmphasis: [Slice!]!
  whoCanApply: [Slice!]!
  howToApply: [Slice!]!
  answeringQuestions: [Slice!]!
  applicationHints: [Slice!]!
  dateFrom: String
  dateTo: String
  status: GrantStatus
  statusText: String
  files: [Asset!]
  supportLinks: [Link!]
  categoryTags: [GenericTag!]
  typeTag: GenericTag
  fund: OrganizationFund
}

enum GrantStatus {
  CLOSED
  CLOSED_OPENING_SOON
  CLOSED_OPENING_SOON_WITH_ESTIMATION
  CLOSED_WITH_NOTE
  OPEN
  OPEN_WITH_NOTE
  ALWAYS_OPEN
  INVALID
  UNKNOWN
}

type GrantList {
  total: Int!
  items: [Grant!]!
}

type OrganizationParentSubpageListPageLink {
  id: ID!
  label: String!
  href: String!
  thumbnailImageHref: String
  tinyThumbnailImageHref: String
  pageLinkIntro: String!
}

type FooterItem {
  id: ID!
  title: String!
  link: Link
  content: [Slice!]
  serviceWebContent: [Slice!]
}

type Organization {
  id: ID!
  title: String!
  shortTitle: String!
  description: String
  slug: String!
  tag: [OrganizationTag!]!
  logo: Image
  link: String
  footerConfig: JSON
  footerItems: [FooterItem!]!
  phone: String!
  email: String!
  serviceWebTitle: String
  serviceWebEnabled: Boolean
  serviceWebPopularQuestionCount: Float
  namespace: Namespace
  serviceWebFeaturedImage: Image
  publishedMaterialSearchFilterGenericTags: [GenericTag!]!
  showsUpOnTheOrganizationsPage: Boolean
  hasALandingPage: Boolean
  trackingDomain: String
  referenceIdentifier: String
  newsBottomSlices: [EmailSignup!]
}

type Article {
  id: ID!
  title: String!
  slug: String!
  shortTitle: String
  intro: String
  importance: Float
  body: [Slice!]!
  processEntry: ProcessEntry
  category: ArticleCategory
  otherCategories: [ArticleCategory!]
  group: ArticleGroup
  otherGroups: [ArticleGroup!]
  subgroup: ArticleSubgroup
  otherSubgroups: [ArticleSubgroup!]
  organization: [Organization!]
  relatedOrganization: [Organization!]
  responsibleParty: [Organization!]
  subArticles: [SubArticle!]!
  relatedArticles: [Article!]
  relatedContent: [Link!]
  featuredImage: Image
  showTableOfContents: Boolean
  stepper: Stepper
  processEntryButtonText: String
  alertBanner: AlertBanner
  activeTranslations: JSON
  signLanguageVideo: EmbeddedVideo
  keywords: [String!]
}

type TextFieldLocales {
  is: String!
  en: String!
}

type ContentSlug {
  id: ID!
  slug: TextFieldLocales
  title: TextFieldLocales
  url: TextFieldLocales
  type: String!
  activeTranslations: JSON
}

type Organizations {
  items: [Organization!]!
}

type GenericPage {
  title: String!
  slug: String!
  intro: String
  mainContent: String
  sidebar: String
  misc: String
}

type MenuLink {
  title: String!
  link: ReferenceLink!
}

type MenuLinkWithChildren {
  title: String!
  link: ReferenceLink
  childLinks: [MenuLink!]!
}

type Menu {
  id: ID!
  title: String!
  links: [Link!]!
  menuLinks: [MenuLinkWithChildren!]!
}

type GenericOverviewPage {
  id: ID!
  title: String!
  pageIdentifier: String!
  intro: Html
  navigation: Menu!
  overviewLinks: [IntroLinkImage!]!
}

type OrganizationTags {
  items: [OrganizationTag!]!
}

type Url {
  id: ID!
  title: String
  page: ReferenceLink
  urlsList: [String!]!
  explicitRedirect: String
}

type SubpageHeader {
  subpageId: String!
  title: String!
  summary: String!
  featuredImage: Image
  body: [Slice!]
}

type ErrorPage {
  id: ID!
  errorCode: String!
  title: String!
  description: Html
}

type Auction {
  id: ID!
  title: String!
  updatedAt: String!
  date: String!
  type: String!
  content: [Slice!]
  organization: Organization!
}

type FrontpageSlider {
  title: String!
  subtitle: String!
  intro: Html
  content: String!
  link: String
  animationJsonAsset: Asset
}

type LinkList {
  title: String!
  links: [Link!]!
}

type Frontpage {
  id: ID!
  title: String
  heading: String
  imageAlternativeText: String
  image: Image
  videos: [Image!]
  imageMobile: Image
  videosMobile: [Image!]
  featured: [Featured!]!
  slides: [FrontpageSlider!]!
  namespace: Namespace
  lifeEvents: [LifeEventPage!]!
  linkList: LinkList
}

type StatisticsCard {
  title: String!
  statistic: String!
  image: Image
}

type OpenDataPage {
  id: ID!
  pageTitle: String!
  pageDescription: String!
  pageHeaderGraph: GraphCard!
  link: String!
  linkTitle: String!
  statisticsCardsSection: [StatisticsCard!]!
  chartSectionTitle: String!
  graphCards: [GraphCard!]!
  externalLinkCardSelection: LinkCardSection!
  externalLinkSectionTitle: String!
  externalLinkSectionDescription: String!
  externalLinkSectionImage: Image
}

type OpenDataSubpage {
  id: ID!
  pageTitle: String!
  fundTitle: String!
  fundDescription: String!
  statisticsCards: [StatisticsCard!]!
  graphCards: [GraphCard!]!
  organizationLogo: Image
}

type ManualPageData {
  id: ID!
  title: String!
  slug: String!
}

type ManualChapterItem {
  id: ID!
  title: String!
  content: [Slice!]
  manual: ManualPageData!
  manualChapter: ManualPageData!
}

type ManualChapterChangelog {
  items: [ManualChapterChangelogItem!]!
}

type ManualChapterChangelogItem {
  dateOfChange: String!
  textualDescription: String!
}

type ManualChapter {
  id: ID!
  title: String!
  slug: String!
  intro: String
  description: [Slice!]
  chapterItems: [ManualChapterItem!]!
  changelog: ManualChapterChangelog
}

type Manual {
  id: ID!
  organization: Organization
  title: String!
  slug: String!
  info: [Slice!]
  description: [Slice!]
  chapters: [ManualChapter!]!
  category: ArticleCategory
  otherCategories: [ArticleCategory!]
  group: ArticleGroup
  otherGroups: [ArticleGroup!]
  subgroup: ArticleSubgroup
  otherSubgroups: [ArticleSubgroup!]
  importance: Float
}

type ServiceWebPageEmailConfigItem {
  supportCategoryId: String!
  emailList: [String!]!
}

type ServiceWebPageEmailConfig {
  emails: [ServiceWebPageEmailConfigItem!]!
}

type ServiceWebPage {
  id: ID!
  title: String!
  organization: Organization
  slices: [Slice!]!
  footerItems: [FooterItem!]
  emailConfig: ServiceWebPageEmailConfig
  contactFormDisclaimer: [Slice!]
  alertBanner: AlertBanner
}

type OrganizationSubpageLink {
  id: String
  label: String!
  href: String!
}

type OrganizationParentSubpage {
  id: ID!
  title: String!
  childLinks: [OrganizationSubpageLink!]!
}

type GetBloodDonationRestrictionsInputModel {
  page: Int
  queryString: String
  tagKeys: [String!]
  lang: String!
}

type BloodDonationRestrictionListItem {
  id: ID!
  title: String!
  hasCardText: Boolean!
  cardText: [Slice!]!
  description: String!
  hasDetailedText: Boolean!
  keywordsText: String!
}

type BloodDonationRestrictionList {
  total: Int!
  items: [BloodDonationRestrictionListItem!]!
  input: GetBloodDonationRestrictionsInputModel!
}

type BloodDonationRestrictionDetails {
  id: ID!
  title: String!
  description: String!
  hasCardText: Boolean!
  cardText: [Slice!]!
  detailedText: [Slice!]!
  hasDetailedText: Boolean!
  keywordsText: String!
}

type BloodDonationRestrictionGenericTag {
  key: ID!
  label: String!
}

type BloodDonationRestrictionGenericTagList {
  total: Int!
  items: [BloodDonationRestrictionGenericTag!]!
}

type NewsList {
  total: Int!
  items: [News!]!
}

type GroupedMenu {
  id: ID!
  title: String!
  menus: [Menu!]!
}

type EnhancedAsset {
  id: ID!
  title: String!
  file: Asset
  genericTags: [GenericTag!]!
  releaseDate: String
  organization: Organization!
  description: String!
}

type EnhancedAssetSearchResult {
  items: [EnhancedAsset!]!
  total: Float!
}

type EntryTitle {
  title: String!
}

type CustomPage {
  id: ID!
  uniqueIdentifier: String!
  configJson: JSONObject
  alertBanner: AlertBanner
  translationStrings: JSONObject!
  content: [Slice!]
  ogTitle: String
  ogDescription: String
  ogImage: Image
}

type TeamMemberResponse {
  input: TeamMemberResponseInput!
  items: [TeamMember!]!
  total: Int!
}

type OrganizationPageStandaloneSitemapLink {
  label: String!
  href: String!
  description: String
}

type OrganizationPageStandaloneSitemap {
  childLinks: [OrganizationPageStandaloneSitemapLink!]!
}

type OrganizationPageStandaloneSitemapLevel2Link {
  label: String!
  href: String!
}

type OrganizationPageStandaloneSitemapLevel2Category {
  label: String!
  href: String
  childLinks: [OrganizationPageStandaloneSitemapLevel2Link!]!
}

type OrganizationPageStandaloneSitemapLevel2 {
  label: String!
  childCategories: [OrganizationPageStandaloneSitemapLevel2Category!]!
}

type AuthLoginRestriction {
  restricted: Boolean!
  until: DateTime
}

type AuthDomain {
  name: String!
  displayName: String!
  description: String!
  nationalId: String!
  organisationLogoKey: String!
  organisationLogoUrl: String
}

type AuthConsentScopeNode {
  name: ID!
  displayName: String!
  description: String
  hasConsent: Boolean
  children: [AuthConsentScopeNode!]
}

type AuthConsentTenant {
  scopes: [AuthConsentScopeNode!]
  tenant(lang: String = "is"): AuthDomain!
}

type RskCompanyAddress {
  streetAddress: String
  postalCode: String
  locality: String
  municipalityNumber: String
  country: String
}

type RskCompanyFormOfOperation {
  type: String!
  name: String!
}

type RskCompanyRelatedParty {
  type: String!
  nationalId: ID!
  name: String!
}

type RskCompanyClassification {
  type: String!
  classificationSystem: String!
  number: String!
  name: String!
}

type RskCompanyVat {
  vatNumber: String
  dateOfRegistration: DateTime
  dateOfDeregistration: DateTime
  classification: [RskCompanyClassification!]
}

type RskCompanyInfo {
  formOfOperation: [RskCompanyFormOfOperation!]!
  legalDomicile: RskCompanyAddress
  address: RskCompanyAddress
  relatedParty: [RskCompanyRelatedParty!]!
  vat: [RskCompanyVat!]!
  relationships: [RskCompanyRelatedParty!]
}

type RskCompany {
  nationalId: ID!
  name: String!
  dateOfRegistration: DateTime
  status: String!
  vatNumber: String!
  lastUpdated: DateTime
  companyInfo: RskCompanyInfo
}

type PageInfoDto {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean
  startCursor: String
  endCursor: String
}

type RskCompanySearchItems {
  data: [RskCompany!]!
  pageInfo: PageInfoDto!
}

type NationalRegistryXRoadAddress {
  streetName: String!
  postalCode: String
  city: String
  municipalityCode: String
}

type NationalRegistryXRoadBirthplace {
  location: String
  municipalityCode: String
  dateOfBirth: DateTime!
}

type NationalRegistryResidence {
  address: NationalRegistryXRoadAddress!
  houseIdentificationCode: String
  realEstateNumber: String
  country: String
  dateOfChange: DateTime
}

type NationalRegistryXRoadSpouse {
  nationalId: ID
  maritalStatus: String
  name: String
}

type NationalRegistryXRoadCitizenship {
  name: String
  code: String!
}

type NationalRegistryXRoadPerson {
  nationalId: ID!
  fullName: String!
  genderCode: String!
  address: NationalRegistryXRoadAddress
  livesWithApplicant: Boolean
  livesWithBothParents: Boolean
  children: [NationalRegistryXRoadPerson!]
  otherParent: NationalRegistryXRoadPerson
  residenceHistory: [NationalRegistryResidence!]
  spouse: NationalRegistryXRoadSpouse
  birthplace: NationalRegistryXRoadBirthplace
  citizenship: NationalRegistryXRoadCitizenship
}

type NationalRegistryXRoadChildGuardianship {
  childNationalId: ID!
  legalDomicileParent: [String!]
  residenceParent: [String!]
}

type NationalRegistryReligion {
  name: String
  code: String
}

type IdentityAddress {
  streetAddress: String
  city: String
  postalCode: String
}

type NationalRegistryAddress {
  code: ID
  lastUpdated: String
  streetAddress: String
  apartment: String
  city: String
  postalCode: String
  municipalityText: String
}

type NationalRegistryBirthplace {
  location: String
  municipalityText: String
  municipalityCode: String
  dateOfBirth: DateTime
}

type NationalRegistryChild {
  nationalId: ID!
  fullName: String!
  displayName: String
  firstName: String
  middleName: String
  surname: String
  lastName: String
  gender: String
  genderDisplay: String
  birthday: String
  parent1: String
  nameParent1: String
  parent2: String
  nameParent2: String
  custody1: String
  nameCustody1: String
  custodyText1: String
  custody2: String
  nameCustody2: String
  custodyText2: String
  birthplace: String
  religion: String
  nationality: String
  homeAddress: String
  municipality: String
  postal: String

  """Deprecated"""
  fate: String
  legalResidence: String
}

type NationalRegistryCitizenship {
  code: ID!
  name: String!
}

type NationalRegistryPersonBase {
  nationalId: ID!
  fullName: String @deprecated(reason: "This might return the display name instead of true full name. Use name object instead.")

  """Deprecated"""
  fate: String
}

type NationalRegistryCustodian {
  nationalId: ID!
  fullName: String @deprecated(reason: "This might return the display name instead of true full name. Use name object instead.")

  """Deprecated"""
  fate: String
  code: String
  text: String
  livesWithChild: Boolean
}

type NationalRegistryHousing {
  domicileId: ID!
  domicileIdLast1stOfDecember: String
  domicileIdPreviousIcelandResidence: String
  domicileInhabitants: [NationalRegistryPersonBase!]
  residence: NationalRegistryAddress
  address: NationalRegistryAddress
}

type NationalRegistrySpouse {
  nationalId: ID!
  fullName: String @deprecated(reason: "This might return the display name instead of true full name. Use name object instead.")

  """Deprecated"""
  fate: String
  maritalStatus: String
  cohabitationWithSpouse: Boolean
  cohabitant: String
  name: String @deprecated(reason: "Renaming to fullName")
}

type NationalRegistryName {
  firstName: String
  middleName: String
  lastName: String
  fullName: String
  displayName: String
}

type NationalRegistryBanMarking {
  banMarked: Boolean!
  startDate: String
}

type NationalRegistryChildCustody {
  nationalId: ID!
  fullName: String
  details: NationalRegistryPerson
}

type NationalRegistryPerson {
  nationalId: ID!
  fullName: String @deprecated(reason: "This might return the display name instead of true full name. Use name object instead.")

  """Deprecated"""
  fate: String
  name: NationalRegistryName
  gender: NationalRegistryGender
  nationalIdType: NationalRegistryNationalIdType
  exceptionFromDirectMarketing: Boolean
  religion: String
  custodians: [NationalRegistryCustodian!]
  birthParents: [NationalRegistryPersonBase!]
  childCustody(childNationalId: String): [NationalRegistryChildCustody!]
  biologicalChildren(childNationalId: String): [NationalRegistryChildCustody!]
  birthplace: NationalRegistryBirthplace
  citizenship: NationalRegistryCitizenship
  housing: NationalRegistryHousing
  maritalStatus: NationalRegistryMaritalStatus
  spouse: NationalRegistrySpouse

  """Unique string. Can be used for URLs."""
  baseId: String
  legalResidence: String @deprecated(reason: "Moving to the housing object property as a couple of object properties")
  banMarking: NationalRegistryBanMarking @deprecated(reason: "Renaming to expectionFromDirectMarketing")
  firstName: String @deprecated(reason: "Moving to name object property")
  lastName: String @deprecated(reason: "Moving to name object property")
  middleName: String @deprecated(reason: "Moving to name object property")
  birthPlace: String @deprecated(reason: "Moving to the Birthplace object property containing more information")
  familyNr: String @deprecated(reason: "Moving to housing -> domicileId since the familyNr naming is outdated")
  age: Float @deprecated(reason: "Up for removal. Easily calculated with the nationalId property")
  birthday: DateTime @deprecated(reason: "Up for removal. Easily calculated with the nationalId property")
  address: NationalRegistryAddress @deprecated(reason: "Moving into the Housing object property")
}

enum NationalRegistryGender {
  MALE
  FEMALE
  TRANSGENDER
  MALE_MINOR
  FEMALE_MINOR
  TRANSGENDER_MINOR
  UNKNOWN
}

enum NationalRegistryNationalIdType {
  NATIONAL_REGISTRY_NATIONAL_ID
  SYSTEM_NATIONAL_ID
  DECEASED
  UNKNOWN
}

enum NationalRegistryMaritalStatus {
  UNMARRIED
  MARRIED
  WIDOWED
  SEPARATED
  DIVORCED
  MARRIED_LIVING_SEPARATELY
  MARRIED_TO_FOREIGN_LAW_PERSON
  UNKNOWN
  FOREIGN_RESIDENCE_MARRIED_TO_UNREGISTERED_PERSON
  ICELANDIC_RESIDENCE_MARRIED_TO_UNREGISTERED_PERSON
}

type NationalRegistryUser {
  nationalId: ID!
  fullName: String!
  firstName: String
  lastName: String
  middleName: String
  gender: NationalRegistryGender
  legalResidence: String
  birthPlace: String
  citizenship: NationalRegistryCitizenship
  religion: String
  familyNr: String
  maritalStatus: NationalRegistryMaritalStatus
  banMarking: NationalRegistryBanMarking
  age: Float!
  birthday: DateTime!
  address: NationalRegistryAddress
  spouse: NationalRegistrySpouse
}

type IdentityPerson implements Identity {
  nationalId: ID!
  fullName: String!
  firstName: String
  lastName: String
  middleName: String
  gender: NationalRegistryGender
  legalResidence: String
  birthPlace: String
  citizenship: NationalRegistryCitizenship
  religion: String
  familyNr: String
  maritalStatus: NationalRegistryMaritalStatus
  banMarking: NationalRegistryBanMarking
  age: Float!
  birthday: DateTime!
  address: IdentityAddress
  spouse: NationalRegistrySpouse
  givenName: String
  familyName: String
  name: String!
  type: IdentityType!
}

type IdentityCompany implements Identity {
  nationalId: ID!
  givenName: String
  familyName: String
  name: String!
  address: IdentityAddress
  type: IdentityType!
}

type AuthDelegationScope {
  id: String!
  name: String!
  displayName: String!
  validTo: DateTime
  apiScope(lang: String = "is"): AuthApiScope
}

type AuthLegalGuardianDelegation implements AuthDelegation {
  id: ID
  from: Identity!
  to: Identity
  createdBy: Identity
  type: AuthDelegationType!
  provider: AuthDelegationProvider!
  referenceId: String
  validTo: DateTime
}

type AuthLegalGuardianMinorDelegation implements AuthDelegation {
  id: ID
  from: Identity!
  to: Identity
  createdBy: Identity
  type: AuthDelegationType!
  provider: AuthDelegationProvider!
  referenceId: String
  validTo: DateTime
}

type AuthProcuringHolderDelegation implements AuthDelegation {
  id: ID
  from: Identity!
  to: Identity
  createdBy: Identity
  type: AuthDelegationType!
  provider: AuthDelegationProvider!
  referenceId: String
  validTo: DateTime
}

type AuthPersonalRepresentativeDelegation implements AuthDelegation {
  id: ID
  from: Identity!
  to: Identity
  createdBy: Identity
  type: AuthDelegationType!
  provider: AuthDelegationProvider!
  referenceId: String
  validTo: DateTime
}

type AuthGeneralMandate implements AuthDelegation {
  id: ID
  from: Identity!
  to: Identity
  createdBy: Identity
  type: AuthDelegationType!
  provider: AuthDelegationProvider!
  referenceId: String
  validTo: DateTime
}

type AuthCustomDelegation implements AuthDelegation {
  id: ID
  from: Identity!
  to: Identity!
  createdBy: Identity
  type: AuthDelegationType!
  provider: AuthDelegationProvider!
  referenceId: String
  validTo: DateTime
  scopes: [AuthDelegationScope!]!
  domain(lang: String = "is"): AuthDomain!
}

type AuthLegalRepresentativeDelegation implements AuthDelegation {
  id: ID
  from: Identity!
  to: Identity
  createdBy: Identity
  type: AuthDelegationType!
  provider: AuthDelegationProvider!
  referenceId: String
  validTo: DateTime
}

type AuthMergedDelegation {
  types: [AuthDelegationType!]!
  to: Identity!
  from: Identity!
  type: AuthDelegationType! @deprecated(reason: "Use types instead")
}

type AuthApiScopeGroup {
  name: ID!
  displayName: String!
  description: String
  children: [AuthApiScope!]
}

type AuthApiScope {
  name: ID!
  displayName: String!
  group: AuthApiScopeGroup
  description: String
}

type AuthClient {
  clientId: ID!
  clientName: String
  domainName: String
  domain(lang: String = "is"): AuthDomain
}

type AuthConsent {
  client(lang: String = "is"): AuthClient!
  tenants(lang: String = "is"): [AuthConsentTenant!]!
}

type AuthConsentsPaginated {
  data: [AuthConsent!]!
  totalCount: Float!
  pageInfo: PageInfoDto!
}

type AuthRegistrationOptionsRp {
  id: String
  name: String!
}

type AuthRegistrationOptionsUser {
  id: String!
  name: String!
  displayName: String!
}

type AuthRegistrationOptionsPublicKeyCredentialOption {
  alg: Float!
  type: String!
}

type AuthRegistrationOptionsAuthenticatorSelection {
  authenticatorAttachment: String
  requireResidentKey: Boolean
  residentKey: String
  userVerification: String
}

type AuthRegistrationOptionsExtensions {
  appid: String
  credProps: Boolean
  hmacCreateSecret: Boolean
}

type AuthRegistrationOptionsPublicKeyCredentialDescriptorJSON {
  id: String!
  type: String!
  transports: [String!]!
}

type AuthPasskeyRegistrationOptions {
  challenge: String!
  rp: AuthRegistrationOptionsRp!
  user: AuthRegistrationOptionsUser!
  pubKeyCredParams: [AuthRegistrationOptionsPublicKeyCredentialOption!]!
  timeout: Float
  attestation: String
  excludeCredentials: [AuthRegistrationOptionsPublicKeyCredentialDescriptorJSON!]
  authenticatorSelection: AuthRegistrationOptionsAuthenticatorSelection
  extensions: AuthRegistrationOptionsExtensions
}

type AuthPasskeyRegistrationVerification {
  verified: Boolean!
}

type AuthPasskeyAuthenticationOptionsCredentials {
  id: String!
  type: String!
  transports: [String!]!
}

type AuthPasskeyAuthenticationOptions {
  rpId: String!
  challenge: String!
  allowCredentials: [AuthPasskeyAuthenticationOptionsCredentials!]!
  timeout: Float!
  userVerification: String!
}

type AuthAdminTranslatedValue {
  locale: String!
  value: String!
}

type AuthAdminTenantEnvironment {
  environment: AuthAdminEnvironment!
  name: String!
  displayName: [AuthAdminTranslatedValue!]!
  id: ID!
}

enum AuthAdminEnvironment {
  Development
  Staging
  Production
}

type AuthAdminTenant {
  id: ID!
  environments: [AuthAdminTenantEnvironment!]!
  defaultEnvironment: AuthAdminTenantEnvironment!
  availableEnvironments: [AuthAdminEnvironment!]!
}

type AuthAdminTenantsPayload {
  data: [AuthAdminTenant!]!
  totalCount: Float!
  pageInfo: PageInfoDto!
}

type AuthAdminClientClaim {
  type: String!
  value: String!
}

type AuthAdminClientEnvironment {
  id: ID!
  environment: AuthAdminEnvironment!
  clientId: String!
  tenantId: String!
  clientType: AuthAdminClientType!
  sso: AuthAdminClientSso!
  displayName: [AuthAdminTranslatedValue!]!
  redirectUris: [String!]!
  postLogoutRedirectUris: [String!]!
  absoluteRefreshTokenLifetime: Int!
  slidingRefreshTokenLifetime: Int!
  refreshTokenExpiration: AuthAdminRefreshTokenExpiration!
  supportedDelegationTypes: [String!]
  supportsCustomDelegation: Boolean! @deprecated(reason: "Use supportedDelegationTypes instead")
  supportsLegalGuardians: Boolean! @deprecated(reason: "Use supportedDelegationTypes instead")
  supportsProcuringHolders: Boolean! @deprecated(reason: "Use supportedDelegationTypes instead")
  supportsPersonalRepresentatives: Boolean! @deprecated(reason: "Use supportedDelegationTypes instead")
  promptDelegations: Boolean!
  requireApiScopes: Boolean!
  requireConsent: Boolean!
  allowOfflineAccess: Boolean!
  requirePkce: Boolean!
  singleSession: Boolean!
  supportTokenExchange: Boolean!
  accessTokenLifetime: Int!
  customClaims: [AuthAdminClientClaim!]
  secrets: [AuthAdminClientSecret!]!
  allowedScopes: [AuthAdminClientAllowedScope!]
}

enum AuthAdminClientType {
  native
  web
  machine
  spa
}

enum AuthAdminClientSso {
  disabled
  enabled
}

enum AuthAdminRefreshTokenExpiration {
  Sliding
  Absolute
}

type AuthAdminClient {
  clientId: ID!
  clientType: AuthAdminClientType!
  sso: AuthAdminClientSso!
  environments: [AuthAdminClientEnvironment!]!
  defaultEnvironment: AuthAdminClientEnvironment!
  availableEnvironments: [AuthAdminEnvironment!]!
}

type AuthAdminClientsPayload {
  data: [AuthAdminClient!]!
  totalCount: Float!
  pageInfo: PageInfoDto!
}

type AuthAdminCreateClientResponse {
  clientId: String!
  environment: AuthAdminEnvironment!
}

type AuthAdminClientSecret {
  secretId: ID!
  clientId: String!
  decryptedValue: String
}

type AuthAdminClientAllowedScope {
  name: ID!
  displayName: [AuthAdminTranslatedValue!]!
  description: [AuthAdminTranslatedValue!]
  domainName: String
}

type AuthAdminScopeEnvironment {
  environment: AuthAdminEnvironment!
  name: ID!
  displayName: [AuthAdminTranslatedValue!]!
  description: [AuthAdminTranslatedValue!]!
  domainName: String!
  order: Float
  groupId: String
  showInDiscoveryDocument: Boolean!
  required: Boolean!
  emphasize: Boolean!
  grantToAuthenticatedUser: Boolean!
  grantToLegalGuardians: Boolean! @deprecated(reason: "Use supportedDelegationTypes instead")
  grantToProcuringHolders: Boolean! @deprecated(reason: "Use supportedDelegationTypes instead")
  grantToPersonalRepresentatives: Boolean! @deprecated(reason: "Use supportedDelegationTypes instead")
  supportedDelegationTypes: [String!]!
  allowExplicitDelegationGrant: Boolean! @deprecated(reason: "Use supportedDelegationTypes instead")
  automaticDelegationGrant: Boolean!
  alsoForDelegatedUser: Boolean!
  isAccessControlled: Boolean!
}

type AuthAdminScope {
  scopeName: ID!
  environments: [AuthAdminScopeEnvironment!]!
  defaultEnvironment: AuthAdminScopeEnvironment!
  availableEnvironments: [AuthAdminEnvironment!]!
}

type AuthAdminCreateScopeResponse {
  scopeName: String!
  environment: AuthAdminEnvironment!
}

type AuthAdminScopesPayload {
  data: [AuthAdminScope!]!
  totalCount: Float!
  pageInfo: PageInfoDto!
}

type AuthAdminDelegationType {
  id: ID!
  name: String!
  description: String!
  providerId: String!
}

type AuthAdminDelegationProvider {
  id: ID!
  name: String!
  description: String!
  delegationTypes: [AuthAdminDelegationType!]!
}

type AuthDelegationProviderEnvironment {
  environment: AuthAdminEnvironment!
  providers: [AuthAdminDelegationProvider!]!
}

type AuthDelegationProviderPayload {
  environments: [AuthDelegationProviderEnvironment!]!
}

type DelegationAdminCustomModel {
  nationalId: String!
  name: String!
  incoming: [AuthCustomDelegation!]!
  outgoing: [AuthCustomDelegation!]!
}

type ConsultationPortalDocumentInfoResult {
  id: String
  description: String
  link: String
  fileName: String
  fileType: String
  size: Float
}

type ConsultationPortalCaseStakeholderResult {
  name: String
  email: String
}

type ConsultationPortalRelatedCaseResult {
  id: Float
  caseNumber: String
  name: String
}

type ConsultationPortalCaseResult {
  id: Float
  caseNumber: String
  name: String
  shortDescription: String
  detailedDescription: String
  contactName: String
  contactEmail: String
  statusName: String
  institutionName: String
  typeName: String
  policyAreaName: String
  processBegins: DateTime
  processEnds: DateTime
  announcementText: String
  summaryDate: DateTime
  summaryText: String
  summaryLink: String
  summaryDocumentId: String
  adviceCount: Float
  advicePublishTypeId: Float
  advicePublishTypeName: String
  allowUsersToSendPrivateAdvices: Boolean
  created: DateTime
  changed: DateTime
  oldInstitutionName: String
  extraStakeholderList: String
  publishOnWeb: DateTime
  stakeholders: [ConsultationPortalCaseStakeholderResult!]
  documents: [ConsultationPortalDocumentInfoResult!]
  additionalDocuments: [ConsultationPortalDocumentInfoResult!]
  relatedCases: [ConsultationPortalRelatedCaseResult!]
}

type ConsultationPortalAdviceResult {
  id: String
  number: Float
  participantName: String
  participantEmail: String
  content: String
  isPrivate: Boolean
  isHidden: Boolean
  created: DateTime
  adviceDocuments: [ConsultationPortalDocumentInfoResult!]
}

type ConsultationPortalCaseItemResult {
  id: Float
  caseNumber: String
  name: String
  adviceCount: Float
  shortDescription: String
  statusName: String
  institutionName: String
  typeName: String
  policyAreaName: String
  publishOnWeb: DateTime
  processBegins: DateTime
  processEnds: DateTime
  created: DateTime
}

type ConsultationPortalCasesAggregateResult {
  total: Float!
  cases: [ConsultationPortalCaseItemResult!]
  filterGroups: JSONObject
}

type ConsultationPortalAllTypesResult {
  policyAreas: JSONObject
  institutions: JSONObject
  caseStatuses: JSONObject
  caseTypes: JSONObject
}

type ConsultationPortalStatisticsResult {
  totalCases: Float
  totalAdvices: Float
  casesInReview: Float
}

type ConsultationPortalUserAdviceCaseResult {
  caseNumber: String
  name: String
  statusName: String
  institutionName: String
  typeName: String
  policyAreaName: String
  processBegins: DateTime
  processEnds: DateTime
}

type ConsultationPortalUserAdviceResult {
  id: String
  caseId: Float
  participantName: String
  participantEmail: String
  content: String
  created: DateTime
  _case: ConsultationPortalUserAdviceCaseResult
  adviceDocuments: [ConsultationPortalDocumentInfoResult!]
}

type ConsultationPortalUserAdviceAggregate {
  total: Float
  advices: [ConsultationPortalUserAdviceResult!]
}

type ConsultationPortalUserEmailResult {
  email: String
  emailVerified: Boolean
}

type ConsultationPortalUserSubscriptionResult {
  id: Float
  subscriptionType: String
}

type ConsultationPortalUserCaseSubscriptionResult {
  id: Float
  subscriptionType: String
}

type ConsultationPortalUserSubscriptionsAggregate {
  subscribedToAll: Boolean
  subscribedToAllType: SubscriptionType
  cases: [ConsultationPortalUserCaseSubscriptionResult!]
  institutions: [ConsultationPortalUserSubscriptionResult!]
  policyAreas: [ConsultationPortalUserSubscriptionResult!]
}

enum SubscriptionType {
  AllChanges
  StatusChanges
  OnlyNew
}

type ConsultationPortalCaseSubscriptionResult {
  type: CaseSubscriptionType
}

enum CaseSubscriptionType {
  AllChanges
  StatusChanges
}

type TagCount {
  key: String!
  value: String!
  count: Int!
  type: String
}

type TypeCount {
  key: String!
  count: Int!
}

type SearchResult {
  total: Int!
  items: [Items!]!
  tagCounts: [TagCount!]
  typesCount: [TypeCount!]
  processEntryCount: Int
}

union Items = Article | AnchorPage | LifeEventPage | News | SubArticle | OrganizationSubpage | OrganizationPage | SupportQNA | Link | ProjectPage | Manual | ManualChapterItem

type WebSearchAutocomplete {
  total: Int!
  completions: [String!]!
}

type Union {
  id: String!
  name: String!
}

type PensionFund {
  id: String!
  name: String!
}

type ParentalLeaveEntitlement {
  independentMonths: Float!
  transferableMonths: Float!
}

type ParentalLeavePeriod {
  from: String!
  to: String!
  ratio: String!
  approved: Boolean!
  paid: Boolean!
  rightsCodePeriod: String
}

type ParentalLeavePaymentPlan {
  estimatedAmount: Float!
  pensionAmount: Float!
  privatePensionAmount: Float!
  unionAmount: Float!
  taxAmount: Float!
  estimatePayment: Float!
  period: ParentalLeavePeriod!
}

type ApplicationInformationChildren {
  expectedDateOfBirth: String!
  dateOfBirth: String!
  nationalRegistryId: String!
  name: String!
}

type ApplicationInformationEmployer {
  employerId: String
  email: String
  nationalRegistryId: String
}

type ApplicationInformationPeriod {
  from: String!
  to: String!
  ratio: String!
  approved: Boolean!
  paid: Boolean!
  rightsCodePeriod: String!
  firstPeriodStart: String!
  days: String!
}

type ApplicationRights {
  rightsUnit: String!
  rightsDescription: String!
  months: String!
  days: String!
  daysLeft: String!
}

type ParentalLeavePensionFund {
  id: String!
  name: String!
}

type ParentalLeaveUnion {
  id: String!
  name: String!
}

type ParentalLeavePaymentInfo {
  bankAccount: String!
  personalAllowance: Float!
  personalAllowanceFromSpouse: Float!
  union: ParentalLeaveUnion!
  pensionFund: ParentalLeavePensionFund!
  privatePensionFund: ParentalLeavePensionFund!
  privatePensionFundRatio: Float!
}

type ApplicationInformation {
  result: String!
  applicationId: ID!
  applicationFundId: String!
  nationalRegisteryId: String!
  dateOfBirth: String!
  expectedDateOfBirth: String!
  applicantId: String!
  email: String!
  phoneNumber: String!
  paymentInfo: ParentalLeavePaymentInfo!
  children: [ApplicationInformationChildren!]!
  otherParentName: String
  otherParentId: String
  status: String!
  periods: [ApplicationInformationPeriod!]!
  applicationRights: [ApplicationRights!]!
  employers: [ApplicationInformationEmployer!]!
  testData: String
}

type PregnancyStatus {
  hasActivePregnancy: Boolean!
  expectedDateOfBirth: String!
}

type ParentalLeaveAttachment {
  attachmentType: String!
  attachmentBytes: String!
}

type ParentalLeaveEmployer {
  email: String
  nationalRegistryId: String!
}

type ParentalLeave {
  applicationId: ID!
  applicationFundId: String
  applicant: String!
  otherParentId: String
  expectedDateOfBirth: String
  dateOfBirth: String
  adoptionDate: String
  email: String!
  phoneNumber: String!
  paymentInfo: ParentalLeavePaymentInfo!
  periods: [ParentalLeavePeriod!]!
  employers: [ParentalLeaveEmployer!]!
  status: String!
  rightsCode: String
  attachments: [ParentalLeaveAttachment!]
  testData: String
  type: String
  noOfChildren: String
  language: String!
}

type ParentalLeavePeriodEndDate {
  periodEndDate: Float!
}

type ParentalLeavePeriodLength {
  periodLength: Int!
}

type AudienceAndScope {
  audience: String!
  scope: String!
}

type ClientCredentials {
  clientId: String!
  clientSecret: String!
  providerId: String!
}

type TestResult {
  id: String!
  isValid: Boolean!
  message: String
}

type Contact {
  id: String!
  name: String!
  email: String!
  phoneNumber: String!
  created: DateTime!
  modified: DateTime!
}

type Helpdesk {
  id: String!
  email: String!
  phoneNumber: String!
  created: DateTime!
  modified: DateTime!
}

type Provider {
  id: String!
  organisationId: String
  endpoint: String
  endpointType: String
  apiScope: String
  xroad: Boolean
  created: DateTime!
  modified: DateTime!
}

type Organisation {
  id: String!
  nationalId: String!
  name: String!
  address: String
  email: String
  phoneNumber: String
  created: DateTime!
  modified: DateTime!
  administrativeContact: Contact
  technicalContact: Contact
  helpdesk: Helpdesk
  providers: [Provider!]
}

type ProviderStatistics {
  published: Float!
  notifications: Float!
  opened: Float!
}

type DocumentProviderPaperMail {
  nationalId: String!
  origin: String!
  wantsPaper: Boolean!
  dateAdded: DateTime
  dateUpdated: DateTime
}

type DocumentProviderPaperMailResponse {
  paperMail: [DocumentProviderPaperMail!]!
  totalCount: Int!
}

type DocumentProviderType {
  name: String
  active: Boolean
  id: Int!
}

type DocumentProviderCategory {
  name: String
  active: Boolean
  id: Int!
}

type DocumentListResponse {
  totalCount: Float
  unreadCount: Float
  data: [Document!]!
}

type Document {
  id: ID!
  date: DateTime!
  subject: String!
  senderName: String!
  senderNatReg: String!
  opened: Boolean!
  fileType: String!
  url: String!
  bookmarked: Boolean
  categoryId: String
}

type DocumentV2Content {
  type: DocumentsV2FileType!

  """Either pdf base64 string, html markup string, or an url"""
  value: String
}

enum DocumentsV2FileType {
  PDF
  HTML
  URL
  UNKNOWN
}

type DocumentDetails {
  fileType: String!
  content: String!
  html: String!
  url: String!
  publicationDate: DateTime
  bookmarked: Boolean
  archived: Boolean
  senderName: String
  senderKennitala: String
  subject: String
  categoryId: String
}

type DocumentCategory {
  id: ID!
  name: String!
}

type DocumentType {
  id: ID!
  name: String!
}

type DocumentSender {
  id: ID!
  name: String!
}

type ActionMailBody {
  success: Boolean!
  messageId: String!
  action: String!
}

type BulkMailAction {
  success: Boolean!
  messageId: String!
}

type DocumentPageResponse {
  messagePage: Int!
}

type PaperMailBody {
  nationalId: String!
  wantsPaper: Boolean!
}

type DocumentsV2Category implements DocumentsV2Base {
  id: String!
  name: String
}

interface DocumentsV2Base {
  id: String!
  name: String
}

type DocumentConfirmActions {
  id: String!
  confirmed: Boolean
}

type DocumentsV2Sender {
  id: String
  name: String
}

type DocumentsV2Type implements DocumentsV2Base {
  id: String!
  name: String
}

type DocumentV2Action {
  title: String
  type: String
  data: String
  icon: String
}

type DocumentV2 {
  id: ID!
  name: String
  categoryId: String
  publicationDate: DateTime
  documentDate: DateTime
  subject: String!
  sender: DocumentsV2Sender!
  opened: Boolean
  bookmarked: Boolean
  archived: Boolean
  content: DocumentV2Content

  """URL in download service. For downloading PDFs"""
  downloadUrl: String
  alert: DocumentV2Action
  confirmation: DocumentV2Action
  actions: [DocumentV2Action!]
  isUrgent: Boolean
}

type DocumentsV2 {
  data: [DocumentV2!]!
  totalCount: Float!
  pageInfo: PageInfoDto!
  unreadCount: Float
  categories: [DocumentsV2Category!]!
  types: [DocumentsV2Type!]!
  senders: [DocumentsV2Sender!]!
}

type DocumentPageNumber {
  pageNumber: Int!
}

type DocumentMailAction {
  success: Boolean!
  messageIds: [String!]!
}

type DocumentV2MarkAllMailAsRead {
  success: Boolean!
}

type DocumentV2PaperMailPreferences {
  nationalId: String!
  wantsPaper: Boolean!
}

type DocumentPdfRenderer {
  id: String!
  success: Boolean!
}

type Disqualification {
  to: String!
}

type Eligibility {
  name: ID!
  issued: DateTime!
  expires: DateTime!
  comment: String!
}

type DrivingLicense {
  id: ID!
  name: String!
  issued: DateTime!
  expires: DateTime!
  categories: [Eligibility!]!
  remarks: [String!]!
  disqualification: Disqualification
  birthCountry: String
}

type HasTeachingRights {
  nationalId: ID!
  hasTeachingRights: Boolean!
}

type StudentInformation {
  name: String!
}

type StudentInformationResult {
  student: StudentInformation
}

type ApplicationEligibilityRequirement {
  key: RequirementKey!
  requirementMet: Boolean!
  daysOfResidency: Float
}

enum RequirementKey {
  drivingAssessmentMissing
  drivingSchoolMissing
  deniedByService
  localResidency
  currentLocalResidency
  noTempLicense
  noLicenseFound
  personNot17YearsOld
  hasNoPhoto
  hasNoSignature
  personNotFoundInNationalRegistry
  hasDeprivation
  hasPoints
  personNotAtLeast24YearsOld
  hasHadValidCategoryForFiveYearsOrMore
  beRequiresHealthCertificate
  noExtendedDrivingLicense
}

type ApplicationEligibility {
  isEligible: Boolean!
  requirements: [ApplicationEligibilityRequirement!]!
}

type TeacherV4 {
  nationalId: ID!
  name: String!
  driverLicenseId: Float
}

type DrivingLicenseQualityPhoto {
  hasQualityPhoto: Boolean!
  dataUri: String
}

type StudentAssessment {
  studentNationalId: String
  teacherNationalId: String
  teacherName: String
}

type DrivingLicenseQualitySignature {
  hasQualitySignature: Boolean!
  dataUri: String
}

type StudentCanGetPracticePermit {
  student: String
  instructor: String
  errorCode: String
  isOk: Boolean
}

type DrivingLicenseBookStudent {
  id: ID!
  nationalId: String!
  name: String!
  zipCode: Float!
  address: String!
  email: String!
  primaryPhoneNumber: String!
  secondaryPhoneNumber: String!
  active: Boolean!
  bookLicenseCategories: [String!]!
}

type PracticalDrivingLesson {
  bookId: ID!
  id: ID!
  studentNationalId: String!
  studentName: String!
  licenseCategory: String!
  teacherNationalId: String!
  teacherName: String!
  minutes: Float!
  createdOn: String!
  comments: String!
}

type DrivingBookLesson {
  id: ID!
  registerDate: String!
  lessonTime: Float!
  teacherNationalId: String!
  teacherName: String!
  comments: String!
}

type DrivingSchoolExam {
  id: ID!
  examDate: String!
  schoolNationalId: String!
  schoolName: String!
  schoolEmployeeNationalId: String!
  schoolEmployeeName: String!
  schoolTypeId: Float!
  schoolTypeName: String!
  schoolTypeCode: String!
  comments: String!
  status: Float!
  statusName: String!
}

type DrivingLicenceTestResult {
  id: ID!
  examDate: String!
  score: Float!
  scorePart1: Float!
  scorePart2: Float!
  hasPassed: Boolean!
  testCenterNationalId: String!
  testCenterName: String!
  testExaminerNationalId: String!
  testExaminerName: String!
  testTypeId: Float!
  testTypeName: String!
  testTypeCode: String!
  comments: String!
}

type DrivingLicenceTestResultId {
  id: ID!
}

type DrivingLicenseBook {
  id: String!
  licenseCategory: String!
  createdOn: String!
  teacherNationalId: String!
  teacherName: String!
  schoolNationalId: String!
  schoolName: String!
  isDigital: Boolean!
  status: Float!
  statusName: String!
  totalLessonTime: Float!
  totalLessonCount: Float!
  teachersAndLessons: [DrivingBookLesson!]!
  drivingSchoolExams: [DrivingSchoolExam!]!
  testResults: [DrivingLicenceTestResult!]!
  practiceDriving: Boolean!
}

type DrivingLicenseBookStudentOverview {
  id: ID!
  nationalId: String!
  name: String!
  zipCode: Float!
  address: String!
  email: String!
  primaryPhoneNumber: String!
  secondaryPhoneNumber: String!
  active: Boolean!
  bookLicenseCategories: [String!]!
  book: DrivingLicenseBook!
}

type DrivingLicenseBookSuccess {
  success: Boolean!
}

type DrivingLicenseBookStudentForTeacher {
  id: ID!
  nationalId: String!
  name: String!
  totalLessonCount: Float!
}

type DrivingSchoolType {
  schoolTypeId: Float!
  schoolTypeName: String!
  schoolTypeCode: String!
  licenseCategory: String!
}

type DrivingLicenseBookSchool {
  nationalId: ID!
  name: String!
  address: String!
  zipCode: String!
  phoneNumber: String!
  email: String!
  website: String!
  allowedDrivingSchoolTypes: [DrivingSchoolType!]!
}

type EducationLicense {
  id: ID!
  school: String!
  programme: String!
  date: String!
}

type EducationSignedLicense {
  url: ID!
}

type Grade {
  grade: String
  label: String!
  weight: Float
}

type GradeType {
  label: String!
  serialGrade: Grade
  elementaryGrade: Grade
}

type EducationCourseGrade {
  label: String!
  gradeSum: GradeType
  competence: String!
  competenceStatus: String!
  grades: [GradeType!]!
  wordAndNumbers: Grade
  progressText: Grade
}

type EducationGradeResult {
  studentYear: String!
  courses: [EducationCourseGrade!]!
}

type EducationExamResult {
  id: ID!
  fullName: String!
  grades: [EducationGradeResult!]!
}

type EducationExamFamilyOverview {
  nationalId: ID!
  name: String!
  isChild: Boolean!
  organizationType: String!
  organizationName: String!
  yearInterval: String!
  familyIndex: Int!
}

type PeriodsModel {
  items: [PeriodItems!]
}

type CoursesModel {
  courseName: String
  courseId: String
  finalgrade: String
  units: String
  stage: Float
  status: String
  date: String
}

type PeriodItems {
  courses: [CoursesModel!]
  division: String
  divisionShort: String
  organisation: String
  organisationShort: String
  periodFrom: String
  periodName: String
  periodShort: String
  periodTo: String
  studentId: Float
  periodId: Float
  diplomaId: Float
}

type DiplomaModel {
  items: [DiplomaItems!]
}

type DiplomaItems {
  diplomaDate: String
  diplomaId: Float
  diplomaName: String
  diplomaLongName: String
  diplomaCode: String
  diplomaCreditsTotal: Float
  diplomaCredits: Float
  organisation: String
  organisationId: Float
  organisationShort: String
}

type EducationFriggValueModel {
  content: String!
  language: String!
}

type EducationFriggOptionModel {
  id: String!
  key: String!
  value: [EducationFriggValueModel!]!
}

type EducationFriggKeyOptionModel {
  type: String!
  options: [EducationFriggOptionModel!]!
}

type EducationFriggAddressModel {
  id: String!
  address: String!
  municipality: String
  postCode: String!
  country: String
}

type EducationFriggOrganizationModel {
  id: String!
  nationalId: String!
  name: String!
  type: OrganizationModelTypeEnum!
  gradeLevels: [String!]
  children: [EducationFriggOrganizationModel!]
  unitId: String
  email: String
  phone: String
  website: String
  address: EducationFriggAddressModel
}

enum OrganizationModelTypeEnum {
  ChildCare
  Municipality
  National
  PrivateOwner
  School
}

type EducationCompulsorySchoolCourseCompetence {
  competencyGrade: String!
  competenceStatus: String
}

type EducationCompulsorySchoolGradeCategoryText implements EducationCompulsorySchoolGradeCategory {
  label: String!
  text: String!
}

type EducationCompulsorySchoolGradeDetail {
  grade: String!
  weight: Int
  label: String
}

type EducationCompulsorySchoolGrade {
  compulsorySchoolGrade: EducationCompulsorySchoolGradeDetail!

  """National standardised test grade"""
  serialGrade: EducationCompulsorySchoolGradeDetail!
}

type EducationCompulsorySchoolGradeCategoryWeighted implements EducationCompulsorySchoolGradeCategory {
  label: String!
  grade: EducationCompulsorySchoolGrade!
}

type EducationCompulsorySchoolCourse {
  label: String!
  totalGrade: EducationCompulsorySchoolGrade
  competence: EducationCompulsorySchoolCourseCompetence!
  gradeCategories: [EducationCompulsorySchoolGradeCategory!]
}

type EducationCompulsorySchoolGradeLevelExamResults {
  gradeLevel: Int!
  coursesExamResults: [EducationCompulsorySchoolCourse!]
}

type EducationCompulsorySchoolStudentCareer {
  nationalId: String!
  name: String!
  isChildOfUser: Boolean
  examDateSpan: String
  examResults: [EducationCompulsorySchoolGradeLevelExamResults!]
}

type EducationUserFamilyCompulsorySchoolCareer {
  userCareer: EducationCompulsorySchoolStudentCareer
  familyMemberCareers: [EducationCompulsorySchoolStudentCareer!]
}

type SocialInsuranceIncomePlanIncomeCategory {
  name: String!
  typeName: String!
  annualSum: Int!
  currency: String
}

type SocialInsuranceIncomePlanEligbility {
  isEligible: Boolean
  reason: String
}

type SocialInsuranceIncomePlan {
  registrationDate: DateTime!
  status: SocialInsuranceIncomePlanStatus!
  isEligibleForChange: SocialInsuranceIncomePlanEligbility!
  incomeCategories: [SocialInsuranceIncomePlanIncomeCategory!]!
}

enum SocialInsuranceIncomePlanStatus {
  ACCEPTED
  CANCELLED
  IN_PROGRESS
  UNKNOWN
}

type SocialInsurancePaymentMonth {
  monthIndex: Int!
  amount: Int!
}

type SocialInsurancePayment {
  name: String!
  totalYearCumulativeAmount: Int!
  markWithAsterisk: Boolean
  monthlyPaymentHistory: [SocialInsurancePaymentMonth!]!
}

type SocialInsurancePaymentGroup {
  type: SocialInsurancePaymentGroupType!
  name: String!
  totalYearCumulativeAmount: Int!
  payments: [SocialInsurancePayment!]!
  monthlyPaymentHistory: [SocialInsurancePaymentMonth!]!
}

enum SocialInsurancePaymentGroupType {
  SUBTRACTION
  PAYMENTS
  PAID
  DEBT
  UNKNOWN
}

type SocialInsurancePaymentPlan {
  totalPayments: Int
  totalPaymentsSubtraction: Int
  totalPaymentsReceived: Int
  paymentGroups: [SocialInsurancePaymentGroup!]
}

type SocialInsurancePayments {
  nextPayment: Int
  previousPayment: Int
}

type SocialInsuranceTemporaryCalculationRow {
  name: String
  total: Int
  months: [SocialInsuranceTemporaryCalculationMonth!]
}

type SocialInsuranceTemporaryCalculationMonth {
  month: Int!
  amount: Int
}

type SocialInsuranceTemporaryCalculationGroup {
  group: String
  groupId: Int
  total: Int
  monthTotals: [SocialInsuranceTemporaryCalculationMonth!]
  rows: [SocialInsuranceTemporaryCalculationRow!]
}

type SocialInsuranceTemporaryCalculation {
  totalPayment: Int
  subtracted: Int
  paidOut: Int
  groups: [SocialInsuranceTemporaryCalculationGroup!]
}

type SocialInsurancePensionCalculationResponseItem {
  name: String
  monthlyAmount: Float
  yearlyAmount: Float
}

type SocialInsurancePensionCalculationResponseItemGroup {
  name: String
  items: [SocialInsurancePensionCalculationResponseItem!]!
}

type SocialInsurancePensionCalculationResponse {
  highlightedItems: [SocialInsurancePensionCalculationResponseItem!]
  groups: [SocialInsurancePensionCalculationResponseItemGroup!]
}

type EmailSignupResponse {
  subscribed: Boolean!
}

type EndorsementListOpen {
  id: ID
  title: String!
  description: String
  tags: [EndorsementListOpenTagsEnum!]
  closedDate: DateTime!
  openedDate: DateTime!
  adminLock: Boolean!
}

enum EndorsementListOpenTagsEnum {
  generalPetition
}

type EndorsementMetadata {
  fullName: String
  locality: String
}

type Endorsement {
  id: ID!
  endorser: String!
  endorsementListId: String!
  endorsementList: EndorsementListOpen
  meta: EndorsementMetadata!
  created: String!
  modified: String!
}

type EndorsementList {
  id: ID!
  title: String!
  description: String
  closedDate: DateTime!
  openedDate: DateTime!
  adminLock: Boolean!
  tags: [EndorsementListTagsEnum!]!
  meta: JSON!
  created: String!
  modified: String!
  ownerName: String
  owner: String
  endorsementCounter: Float
}

enum EndorsementListTagsEnum {
  generalPetition
}

type ExistsEndorsementResponse {
  hasEndorsed: Boolean!
}

type PageInfoResponse {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type PaginatedEndorsementResponse {
  totalCount: Float!
  data: [Endorsement!]!
  pageInfo: PageInfoResponse!
}

type PaginatedEndorsementListResponse {
  totalCount: Float!
  data: [EndorsementList!]!
  pageInfo: PageInfoResponse!
}

type sendPdfEmailResponse {
  success: Boolean!
}

type ExportUrlResponse {
  url: String!
}

type EnergyFundVehicleGrant {
  vehicleGrant: Float
  vehicleGrantItemCode: String
  hasReceivedSubsidy: Boolean
}

type EnergyFundVehicleDetailsWithGrant {
  vehicleGrant: Float
  vehicleGrantItemCode: String
  hasReceivedSubsidy: Boolean
  permno: String
  make: String
  color: String
  requireMileage: Boolean
  newRegistrationDate: DateTime
  firstRegistrationDate: DateTime
  vin: String
}

type PresignedPost {
  url: String!
  fields: JSON!
}

type FinanceCustomerChargeTypeItem {
  id: String!
  name: String!
}

type FinanceCustomerChargeType {
  chargeType: [FinanceCustomerChargeTypeItem!]!
}

type FinanceDocumentData {
  type: String!
  document: String!
}

type FinanceDocumentModel {
  docment: FinanceDocumentData!
}

type FinanceCustomerTapsControlModel {
  RecordsTap: Boolean!
  employeeClaimsTap: Boolean!
  localTaxTap: Boolean!
  schedulesTap: Boolean!
}

type FinanceDocumentsListModel {
  documentsList: [FinanceDocumentsListItem!]!
  downloadServiceURL: String
}

type FinanceDocumentsListItem {
  id: String!
  date: String!
  type: String!
  note: String
  sender: String!
  dateOpen: String!
  amount: Float!
}

type FinanceCustomerRecordsItem {
  createDate: String!
  createTime: String!
  valueDate: String!
  performingOrganization: String!
  collectingOrganization: String!
  chargeType: String!
  itemCode: String!
  chargeItemSubject: String!
  periodType: String!
  period: String!
  amount: Float!
  category: String!
  subCategory: String!
  actionCategory: String
  reference: String!
  referenceToLevy: String!
  accountReference: String!
}

type FinanceCustomerRecords {
  records: [FinanceCustomerRecordsItem!]
}

type PaymentSchedule {
  approvalDate: String!
  paymentCount: String!
  scheduleName: String!
  scheduleNumber: String!
  scheduleStatus: String!
  scheduleType: String!
  totalAmount: Float!
  unpaidAmount: Float!
  unpaidWithInterest: Float!
  unpaidCount: String!
  downloadServiceURL: String!
  documentID: String
}

type PaymentScheduleData {
  nationalId: String!
  paymentSchedules: [PaymentSchedule!]!
}

type PaymentScheduleModel {
  myPaymentSchedule: PaymentScheduleData
}

type DetailedSchedule {
  paymentNumber: String!
  paidDate: String!
  paidAmount: Float!
  unpaidAmount: Float!
  payExplanation: String!
}

type PaymentScheduleDetailData {
  myDetailedSchedule: [DetailedSchedule!]!
}

type PaymentScheduleDetailModel {
  myDetailedSchedules: PaymentScheduleDetailData!
}

type FinanceDebtStatusModel {
  myDebtStatus: [FinanceDebtStatus!]!
}

type FinanceDebtStatus {
  totalAmount: Float!
  approvedSchedule: Float!
  possibleToSchedule: Float!
  notPossibleToSchedule: Float!
}

type FinanceAssessmentYears {
  year: [String!]
}

type FinanceChargeTypesByYearData {
  iD: String!
  name: String!
}

type FinanceChargeTypesByYear {
  chargeType: [FinanceChargeTypesByYearData!]
}

type FinanceChargeTypeDetailsData {
  iD: String!
  name: String!
  chargeItemSubjects: String!
  chargeItemSubjectDescription: String!
  lastMovementDate: String!
}

type FinanceChargeTypeDetails {
  chargeType: [FinanceChargeTypeDetailsData!]!
}

type FinanceChargeTypePeriodSubjectData {
  createDate: String!
  createTime: String!
  valueDate: String!
  performingOrganization: String!
  collectingOrganization: String!
  chargeType: String!
  itemCode: String!
  chargeItemSubject: String!
  periodType: String!
  period: String!
  amount: Float!
  category: String!
  subCategory: String!
  actionCategory: String!
  reference: String!
  referenceToLevy: String!
  accountReference: String!
}

type FinanceChargeTypePeriodSubject {
  message: String
  nextKey: String
  more: Boolean
  records: [FinanceChargeTypePeriodSubjectData!]!
}

type FinanceChargeItemSubjectsByYearPeriodData {
  period: String!
  description: String!
  lastMoveDate: String!
  amount: String!
}

type FinanceChargeItemSubjectsByYearData {
  chargeItemSubject: String!
  lastMoveDate: String!
  totalAmount: Float!
  periods: [FinanceChargeItemSubjectsByYearPeriodData!]!
}

type FinanceChargeItemSubjectsByYear {
  chargeItemSubjects: [FinanceChargeItemSubjectsByYearData!]!
  more: Boolean
  nextKey: String
}

type FinancialStatementsInaoElection {
  electionId: String!
  name: String!
  electionDate: DateTime!
  genitiveName: String
}

type FinancialStatementsInaoClientType {
  value: String!
  label: String!
}

type FinancialStatementsInaoConfig {
  key: String!
  value: String!
}

type FinancialStatementsInaoTaxInfo {
  key: Float!
  value: Float!
}

type FishingLicenseDeprivation {
  validFrom: DateTime
  invalidFrom: DateTime
  explanation: String!
}

type FishingLicenseInfo {
  code: FishingLicenseCodeType!
  name: String!
  chargeType: String!
}

"""Possible types of fishing license codes"""
enum FishingLicenseCodeType {
  catchMark
  fishWithDanishSeine
  greyslepp
  northIceOceanCod
  hookCatchLimit
  lumpfish
  costalFisheries
  freetime
  freetimeHook
  freetimeHookMed
  commonWhelk
  oceanQuahogin
  crustaceans
  unknown
}

type FishingLicenseSeaworthiness {
  validTo: DateTime!
}

type FishingLicenseShip {
  name: String!
  registrationNumber: Float!
  features: String!
  grossTons: Float!
  length: Float!
  homePort: String!
  seaworthiness: FishingLicenseSeaworthiness!
  deprivations: [FishingLicenseDeprivation!]!
  fishingLicenses: [FishingLicenseInfo!]!
}

type FishingLicenseDateRestriction {
  dateFrom: DateTime
  dateTo: DateTime
}

type FishingLicenseListOptions {
  key: String
  description: String
  disabled: Boolean!
  dateRestriction: FishingLicenseDateRestriction
  invalidOption: Boolean!
}

type FishingLicenseReason {
  description: String!
  directions: String!
}

type FishingLicenseLicense {
  fishingLicenseInfo: FishingLicenseInfo!
  answer: Boolean!
  reasons: [FishingLicenseReason!]!
  dateRestriction: FishingLicenseDateRestriction
  areas: [FishingLicenseListOptions!]
  attachmentInfo: String
}

type FiskistofaQuotaStatus {
  nextYearCatchQuota: Float
  nextYearQuota: Float
  nextYearFromQuota: Float
  totalCatchQuota: Float
  quotaShare: Float
  id: Float
  newStatus: Float
  unused: Float
  percentCatchQuotaFrom: Float
  percentCatchQuotaTo: Float
  excessCatch: Float
  allocatedCatchQuota: Float
}

type FiskistofaQuotaStatusResponse {
  fiskistofaShipQuotaStatus: FiskistofaQuotaStatus
}

type FiskistofaQuotaType {
  id: Float!
  name: String!
  totalCatchQuota: Float
  codEquivalent: Float
}

type FiskistofaQuotaTypeResponse {
  fiskistofaQuotaTypes: [FiskistofaQuotaType!]
}

type FiskistofaSingleShip {
  shipNumber: Float
  name: String!
  ownerName: String!
  ownerSsn: String!
  operatorName: String!
  operatorSsn: String!
  operatingCategory: String!
  grossTons: Float
}

type FiskistofaSingleShipResponse {
  fiskistofaSingleShip: FiskistofaSingleShip
}

type FiskistofaShip {
  id: String!
  shipNumber: Float
  name: String!
  timePeriod: String!
}

type FiskistofaCatchQuotaCategory {
  id: Float
  name: String!
  allocation: Float
  specialAlloction: Float
  betweenYears: Float
  betweenShips: Float
  catchQuota: Float
  catch: Float
  status: Float
  displacement: Float
  newStatus: Float
  nextYear: Float
  excessCatch: Float
  unused: Float
  codEquivalent: Float
}

type FiskistofaExtendedCatchQuotaCategory {
  id: Float
  name: String!
  allocation: Float
  specialAlloction: Float
  betweenYears: Float
  betweenShips: Float
  catchQuota: Float
  catch: Float
  status: Float
  displacement: Float
  newStatus: Float
  nextYear: Float
  excessCatch: Float
  unused: Float
  codEquivalent: Float
  totalCatchQuota: Float
  quotaShare: Float
  nextYearQuota: Float
  nextYearFromQuota: Float
  percentNextYearQuota: Float
  percentNextYearFromQuota: Float
  allocatedCatchQuota: Float
}

type FiskistofaShipStatusInformation {
  shipInformation: FiskistofaShip
  catchQuotaCategories: [FiskistofaCatchQuotaCategory!]
}

type FiskistofaShipStatusInformationResponse {
  fiskistofaShipStatus: FiskistofaShipStatusInformation
}

type FiskistofaExtendedShipStatusInformation {
  shipInformation: FiskistofaShip
  catchQuotaCategories: [FiskistofaExtendedCatchQuotaCategory!]
}

type FiskistofaExtendedShipStatusInformationResponse {
  fiskistofaShipStatus: FiskistofaExtendedShipStatusInformation
}

type FiskistofaExtendedShipStatusInformationUpdate {
  shipInformation: FiskistofaShip
  catchQuotaCategories: [FiskistofaCatchQuotaCategory!]
}

type FiskistofaExtendedShipStatusInformationUpdateResponse {
  fiskistofaShipStatus: FiskistofaExtendedShipStatusInformationUpdate
}

type FiskistofaShipBasicInfo {
  id: Float!
  name: String!
  operator: String!
  typeOfVessel: String!
  homePort: String!
}

type FiskistofaShipBasicInfoResponse {
  fiskistofaShips: [FiskistofaShipBasicInfo!]
}

type OccupationalLicensesGenericField {
  title: String!
  value: String!
}

type OccupationalLicense {
  licenseId: String!
  type: occupationalLicenseLicenseType!
  licenseNumber: String
  legalEntityId: String
  issuer: String
  issuerTitle: String
  profession: String
  permit: String
  licenseHolderName: String
  licenseHolderNationalId: String
  dateOfBirth: DateTime
  validFrom: DateTime!
  title: String
  status: OccupationalLicenseStatus!
  genericFields: [OccupationalLicensesGenericField!]
}

enum occupationalLicenseLicenseType {
  HEALTH_DIRECTORATE
  DISTRICT_COMMISSIONERS
  EDUCATION
}

enum OccupationalLicenseStatus {
  VALID
  INVALID
  LIMITED
  IN_PROGRESS
  REVOKED
  WAIVED
  UNKNOWN
}

type OccupationalLicensesLicenses {
  licenses: [OccupationalLicensesLicenseResult!]!
}

union OccupationalLicensesLicenseResult = OccupationalLicense | OccupationalLicensesError

type OccupationalLicensesError {
  type: occupationalLicenseLicenseType!

  """The error, raw"""
  error: String
}

type OccupationalLicensesLink {
  type: OccupationalLicensesLinkType!
  text: String!
  url: String!
}

enum OccupationalLicensesLinkType {
  FILE
  LINK
  DOCUMENT
}

type OccupationalLicensesLicenseResponse {
  license: OccupationalLicense!
  actions: [OccupationalLicensesLink!]
  headerText: String
  footerText: String
}

type AccidentNotificationAttachment {
  InjuryCertificate: Boolean
  ProxyDocument: Boolean
  PoliceReport: Boolean
  Unknown: Boolean
}

type AccidentNotificationConfirmation {
  InjuredOrRepresentativeParty: Boolean
  CompanyParty: Boolean
  Unknown: Boolean
}

type AccidentNotificationStatus {
  numberIHI: Float!
  status: HealthInsuranceAccidentNotificationStatusTypes!
  receivedAttachments: AccidentNotificationAttachment
  receivedConfirmations: AccidentNotificationConfirmation
}

enum HealthInsuranceAccidentNotificationStatusTypes {
  ACCEPTED
  REFUSED
  INPROGRESS
  INPROGRESSWAITINGFORDOCUMENT
}

type HmsLoansProperty {
  propertyId: String
  propertyAddress: String
  propertyMunicipality: String
  epilog: String
  municipalityNumber: String
}

type HmsLoansCoPayer {
  coPayerName: String
  coPayerNationalId: String
}

type HmsLoansHistory {
  loanId: Float
  name: String
  homeAddress: String
  postNumber: Float
  municipality: String
  firstInterestDate: DateTime
  firstPaymentDate: DateTime
  totalNumberOfPayments: Float
  numberOfPaymentPerYear: Float
  balancePayment: String
  paymentFee: String
  paymentDelayment: String
  temporaryPaymentDelayment: String
  variableInterest: String
  affiliateLoan: String
  priceIndexType: String
  baseIndex: Float
  interest: Float
  originalLoanAmount: Float
  nextPaymentDate: DateTime
  lastPaymentDate: DateTime
  lastUnpaidInvoiceDate: DateTime
  numberOfPaymentDatesRemaining: Float
  statusSettlementPayment: Float
  lastPaymentAmount: Float
  totalDueAmount: Float
  balanceWithoutInterestPriceImprovements: Float
  accruedInterestPriceImprovements: Float
  remainingBalanceWithoutDebt: Float
  repaymentFee: Float
  loanAmountWithRepayment: Float
  loanStatus: String
  nationalId: String
  propertyId: String
  propertyAddress: String
  propertyMunicipality: String
  epilog: String
  municipalityNumber: String
  loanType: String
  installments: Float
  creditor: String
  coPayerName: String
  coPayerNationalId: String
  properties: [HmsLoansProperty!]
  coPayers: [HmsLoansCoPayer!]
}

type HmsLoansPaymentHistory {
  paymentDate: DateTime
  transactionDate: DateTime
  paymentAmount: Float
  interest: Float
  priceImprovementPayment: Float
  priceImprovementInterest: Float
  costPayment: Float
  defaultInterest: Float
  totalPayment: Float
  loanId: Float
}

type HmsLoansHistoryPdf {
  mime: String
  data: String
  name: String
}

type HousingBenefitsPageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
}

type HousingBenefitsPayment {
  nr: Int
  nationalId: String
  name: String
  address: String
  noDays: Int
  dateCalculation: DateTime
  dateTransfer: DateTime
  month: String
  transactionType: TransactionType
  calculationType: CalculationType
  bankAccountMerged: String
  paymentActual: Int
  paidOfDebt: Int
  paymentBeforeDebt: Int
  benefit: Int
  reductionIncome: Int
  reductionAssets: Int
  reductionHousingCost: Int
  totalIncome: Int
  remainDebt: Int
  paymentOrigin: Int
}

enum TransactionType {
  G
  E
  M
  A
  AS
  L
  KG
  LM
  KS
  AF
  I
}

enum CalculationType {
  KG
  L
  E
  U
}

type HousingBenefitsPayments {
  data: [HousingBenefitsPayment!]!
  totalCount: Float!
  pageInfo: HousingBenefitsPageInfo!
}

type HousingBenefitCalculationModel {
  maximumHousingBenefits: Float
  reductionsDueToIncome: Float
  reductionsDueToAssets: Float
  reductionsDueToHousingCosts: Float
  estimatedHousingBenefits: Float
}

type IcelandicGovernmentInstitutionVacancyLocation {
  title: String
  postalCode: Float
}

type IcelandicGovernmentInstitutionVacancyListItem {
  id: String
  fieldOfWork: String
  title: String
  applicationDeadlineFrom: String
  applicationDeadlineTo: String
  institutionName: String
  institutionReferenceIdentifier: String
  locations: [IcelandicGovernmentInstitutionVacancyLocation!]
  logoUrl: String
  intro: String
}

type IcelandicGovernmentInstitutionVacancyContact {
  name: String
  email: String
  phone: String
}

type IcelandicGovernmentInstitutionVacancy {
  id: String
  fieldOfWork: String
  title: String
  applicationDeadlineFrom: String
  applicationDeadlineTo: String
  institutionName: String
  institutionReferenceIdentifier: String
  locations: [IcelandicGovernmentInstitutionVacancyLocation!]
  logoUrl: String
  jobPercentage: String
  contacts: [IcelandicGovernmentInstitutionVacancyContact!]
  applicationHref: String
  intro: JSON
  qualificationRequirements: JSON
  tasksAndResponsibilities: JSON
  description: JSON
  salaryTerms: JSON
  plainTextIntro: String
}

type IcelandicGovernmentInstitutionVacanciesResponse {
  vacancies: [IcelandicGovernmentInstitutionVacancyListItem!]!
  fetchErrorOccurred: Boolean
}

type IcelandicGovernmentInstitutionVacancyByIdResponse {
  vacancy: IcelandicGovernmentInstitutionVacancy
}

type IcelandicName {
  id: Float!
  icelandicName: String!
  type: String
  status: String
  visible: Boolean
  description: String
  verdict: String
  url: String
  created: DateTime!
  modified: DateTime!
}

type DeleteNameResponse {
  id: Float!
}

type CommunicationResponse {
  sent: Boolean!
}

type GenericLicenseProvider {
  """ID of license provider"""
  id: GenericLicenseProviderId!

  """Contentful entry id"""
  entryId: String

  """Contentful reference id"""
  referenceId: String
  providerName: String
  providerLogo: String
}

"""Exhaustive list of license provider IDs"""
enum GenericLicenseProviderId {
  NationalPoliceCommissioner
  EnvironmentAgency
  NatureConservationAgency
  AdministrationOfOccupationalSafetyAndHealth
  SocialInsuranceAdministration
  DistrictCommissioners
  IcelandicHealthInsurance
  RegistersIceland
}

type GenericLicenseFetch {
  """Status of license fetch"""
  status: GenericUserLicenseFetchStatus!

  """Datetime of last update of fetch status"""
  updated: String!
}

"""Possible license fetch statuses"""
enum GenericUserLicenseFetchStatus {
  Fetched
  NotFetched
  Fetching
  Error
  Stale
}

type GenericLicenseError {
  type: GenericLicenseType!

  """Info about license fetch"""
  fetch: GenericLicenseFetch!
  provider: GenericLicenseProvider
  code: Int
  message: String
  extraData: String
}

"""Exhaustive list of license types"""
enum GenericLicenseType {
  DriversLicense
  HuntingLicense
  AdrLicense
  MachineLicense
  FirearmLicense
  DisabilityLicense
  PCard
  Ehic
  Passport
  IdentityDocument
}

type GenericLicense {
  """Type of license from an exhaustive list"""
  type: GenericLicenseType!

  """Provider of the license"""
  provider: GenericLicenseProvider!

  """Does the license support pkpass?"""
  pkpass: Boolean!

  """Does the license support verification of pkpass?"""
  pkpassVerify: Boolean!

  """How long the data about the license should be treated as fresh"""
  timeout: Int @deprecated(reason: "Unclear if this is used, will revert if necessary")

  """Status of license"""
  status: GenericUserLicenseStatus!

  """Status of pkpass availablity of license"""
  pkpassStatus: GenericUserLicensePkPassStatus!
}

"""Possible license statuses for user"""
enum GenericUserLicenseStatus {
  Unknown
  HasLicense
  NotAvailable
}

"""Possible license pkpass statuses"""
enum GenericUserLicensePkPassStatus {
  Available
  NotAvailable
  Unknown
}

type GenericUserLicenseMetaLinks {
  label: String
  value: String
  name: String
  type: GenericUserLicenseMetaLinksType
}

"""Exhaustive list meta link type"""
enum GenericUserLicenseMetaLinksType {
  External
  Download
  Copy
}

type GenericUserLicenseMetaTag {
  text: String!
  color: String
  icon: GenericUserLicenseDataFieldTagType
  iconColor: GenericUserLicenseDataFieldTagColor

  """
  Defaults to the text property if icon defined but iconText left undefined
  """
  iconText: String
}

"""Exhaustive list of possible tag icons"""
enum GenericUserLicenseDataFieldTagType {
  checkmarkCircle
  closeCircle
}

"""Exhaustive list of possible tag icon color"""
enum GenericUserLicenseDataFieldTagColor {
  green
  red
  yellow
}

type GenericLicenseDataField {
  """Type of data field"""
  type: GenericLicenseDataFieldType!

  """Name of data field"""
  name: String

  """Label of data field"""
  label: String

  """Display value of data field category"""
  description: String @deprecated(reason: "Only used for cosmetic purposes, can be done better")

  """Value of data field"""
  value: String
  tag: GenericUserLicenseMetaTag

  """External meta link"""
  link: GenericUserLicenseMetaLinks

  """Hide from service portal"""
  hideFromServicePortal: Boolean

  """Name of data field"""
  fields: [GenericLicenseDataField!]
}

"""Possible types of data fields"""
enum GenericLicenseDataFieldType {
  Group
  Category
  Value
  Table
}

type GenericUserLicenseMetadataDescription {
  text: String!

  """If defined, changes text to link"""
  linkInText: String
  linkIconType: GenericUserLicenseMetaLinksType
}

type GenericUserLicenseAlert {
  title: String!
  type: GenericUserLicenseAlertType!
  message: String
}

enum GenericUserLicenseAlertType {
  WARNING
  ERROR
  INFO
}

type GenericUserLicenseMetadata {
  links: [GenericUserLicenseMetaLinks!]
  licenseNumber: String

  """Unique license identifier"""
  licenseId: String
  expired: Boolean
  expireDate: String
  expiryStatus: GenericUserLicenseExpiryStatus
  displayTag: GenericUserLicenseMetaTag

  """Display name of license for the overview"""
  name: String
  title: String

  """Display subtitle for detail view"""
  subtitle: String

  """
  Photo of the license holder as a base64 encoded data URI containing a PNG or a JPEG photo (eg \`data:image/png;base64,{data}\`).
  """
  photo: String

  """Display description for detail view"""
  description: [GenericUserLicenseMetadataDescription!]

  """CTA link, only use if necessary"""
  ctaLink: GenericUserLicenseMetaLinks

  """Display an alert on the detail view"""
  alert: GenericUserLicenseAlert
}

enum GenericUserLicenseExpiryStatus {
  EXPIRED
  EXPIRING
  ACTIVE
  UNKNOWN
}

type Payload {
  """Data parsed into a standard format"""
  data: [GenericLicenseDataField!]!

  """Raw JSON data"""
  rawData: JSON
  metadata: GenericUserLicenseMetadata!
}

type GenericUserLicense {
  """National ID of license owner"""
  nationalId: String!

  """Is license owner child of user"""
  isOwnerChildOfUser: Boolean

  """License info"""
  license: GenericLicense!

  """Info about license fetch"""
  fetch: GenericLicenseFetch!

  """Potential payload of license, both parsed and raw"""
  payload: Payload
  barcode: CreateBarcodeResult
}

type GenericLicenseCollection {
  licenses: [GenericUserLicense!]
  errors: [GenericLicenseError!]
}

type VerifyLicenseBarcodeResult {
  """Optional data related to the verify verification"""
  data: VerifyLicenseBarcodeDataUnion
  licenseType: GenericLicenseType

  """Verify result error"""
  error: VerifyLicenseBarcodeError

  """Is the verify valid?"""
  valid: Boolean!

  """Verify license barcode type"""
  barcodeType: VerifyLicenseBarcodeType!
}

union VerifyLicenseBarcodeDataUnion = LicenseDriverLicenseData

type LicenseDriverLicenseData {
  nationalId: String!
  name: String!
  picture: String
}

"""Exhaustive list of verify license barcode errors"""
enum VerifyLicenseBarcodeError {
  EXPIRED
  ERROR
}

"""Exhaustive list of verify license barcode types"""
enum VerifyLicenseBarcodeType {
  V2
  PK_PASS
  UNKNOWN
}

type GenericPkPass {
  pkpassUrl: String!
}

type GenericPkPassQrCode {
  pkpassQRCode: String!
}

type GenericPkPassVerificationError {
  """
  pkpass verification error code, depandant on origination service, "0" for unknown error
  """
  status: String

  """pkpass verification error message, depandant on origination service"""
  message: String

  """Optional data related to the error"""
  data: String
}

type GenericPkPassVerification {
  """Optional data related to the pkpass verification"""
  data: String

  """Optional error related to the pkpass verification"""
  error: GenericPkPassVerificationError

  """Is the pkpass valid?"""
  valid: Boolean!
}

type CreateBarcodeResult {
  """Barcode token"""
  token: String!

  """Barcode expire time in seconds"""
  expiresIn: Int!
}

type OfficialJournalOfIcelandAdvertMainCategory {
  id: ID!
  title: String!
  slug: String!
  description: String!
  categories: [OfficialJournalOfIcelandAdvertCategory!]!
  departmentId: String!
}

type OfficialJournalOfIcelandAdvertCategory {
  id: ID!
  title: String!
  slug: String!
  department: OfficialJournalOfIcelandAdvertEntity
  mainCategory: OfficialJournalOfIcelandAdvertMainCategory
}

type OfficialJournalOfIcelandAdvertCorrections {
  id: ID!
  title: String!
  description: String!
  advertId: String!
  documentPdfUrl: String
  isLegacy: Boolean
  legacyDate: String
  createdDate: String!
  updatedDate: String!
}

type OfficialJournalOfIcelandAdvertEntity {
  id: ID!
  title: String!
  slug: String!
}

type OfficialJournalOfIcelandAdvertDocument {
  isLegacy: Boolean!
  html: String!
  pdfUrl: String
}

type OfficialJournalOfIcelandAdvertPublicationNumber {
  number: Int!
  year: Int!
  full: String!
}

type OfficialJournalOfIcelandAdvertType {
  id: ID!
  title: String!
  slug: String!
  department: OfficialJournalOfIcelandAdvertEntity
}

type OfficialJournalOfIcelandAdvert {
  id: ID!
  department: OfficialJournalOfIcelandAdvertEntity!
  type: OfficialJournalOfIcelandAdvertType!
  subject: String!
  title: String!
  status: OfficialJournalOfIcelandAdvertStatus!
  publicationNumber: OfficialJournalOfIcelandAdvertPublicationNumber!
  createdDate: String!
  updatedDate: String!
  signatureDate: String!
  publicationDate: String!
  categories: [OfficialJournalOfIcelandAdvertEntity!]!
  involvedParty: OfficialJournalOfIcelandAdvertEntity!
  document: OfficialJournalOfIcelandAdvertDocument!
  corrections: [OfficialJournalOfIcelandAdvertCorrections!]
}

enum OfficialJournalOfIcelandAdvertStatus {
  Virk
  Afturkllu
  Drg
  EldriAuglsing
  Hafna
  Bi
  Vinnslu
  Innsend
  TilbinTilTgfu
  Tgefin
}

type OfficialJournalOfIcelandAdvertSimilar {
  id: ID!
  department: OfficialJournalOfIcelandAdvertEntity!
  subject: String!
  title: String!
  publicationNumber: OfficialJournalOfIcelandAdvertPublicationNumber!
  publicationDate: String!
  categories: [OfficialJournalOfIcelandAdvertEntity!]!
  involvedParty: OfficialJournalOfIcelandAdvertEntity!
}

type OfficialJournalOfIcelandAdvertsMainType {
  id: String!
  title: String!
  slug: String!
  department: OfficialJournalOfIcelandAdvertEntity!
  types: [OfficialJournalOfIcelandAdvertType!]!
}

type OfficialJournalOfIcelandPaging {
  page: Float!
  totalPages: Float!
  totalItems: Float!
  nextPage: Float
  previousPage: Float
  pageSize: Float!
  hasNextPage: Boolean
  hasPreviousPage: Boolean
}

type OfficialJournalOfIcelandAdvertsTypeResponse {
  type: OfficialJournalOfIcelandAdvertType!
}

type OfficialJournalOfIcelandAdvertsTypesResponse {
  types: [OfficialJournalOfIcelandAdvertType!]!
  paging: OfficialJournalOfIcelandPaging!
}

type OfficialJournalOfIcelandAdvertsMainCategoriesResponse {
  mainCategories: [OfficialJournalOfIcelandAdvertMainCategory!]!
  paging: OfficialJournalOfIcelandPaging!
}

type OfficialJournalOfIcelandAdvertsCategoryResponse {
  categories: [OfficialJournalOfIcelandAdvertCategory!]!
  paging: OfficialJournalOfIcelandPaging!
}

type OfficialJournalOfIcelandAdvertsDepartmentResponse {
  department: OfficialJournalOfIcelandAdvertEntity!
}

type OfficialJournalOfIcelandAdvertsDepartmentsResponse {
  departments: [OfficialJournalOfIcelandAdvertEntity!]!
  paging: OfficialJournalOfIcelandPaging!
}

type OfficialJournalOfIcelandAdvertsInstitutionsResponse {
  institutions: [OfficialJournalOfIcelandAdvertEntity!]!
  paging: OfficialJournalOfIcelandPaging!
}

type OfficialJournalOfIcelandAdvertsResponse {
  adverts: [OfficialJournalOfIcelandAdvert!]!
  paging: OfficialJournalOfIcelandPaging!
}

type OfficialJournalOfIcelandAdvertResponse {
  advert: OfficialJournalOfIcelandAdvert!
}

type OfficialJournalOfIcelandAdvertSimilarResponse {
  adverts: [OfficialJournalOfIcelandAdvertSimilar!]!
}

type OfficialJournalOfIcelandMainTypesResponse {
  mainTypes: [OfficialJournalOfIcelandAdvertsMainType!]!
  paging: OfficialJournalOfIcelandPaging!
}

type OfficialJournalOfIcelandCaseInProgress {
  id: ID!
  title: String!
  involvedParty: String!
  status: String!
  createdAt: String!
  requestedPublicationDate: String!
  fastTrack: Boolean!
}

type OfficialJournalOfIcelandCasesInProgressResponse {
  cases: [OfficialJournalOfIcelandCaseInProgress!]!
  paging: OfficialJournalOfIcelandPaging!
}

type officialJournalOfIcelandApplicationAdvertTemplateResponse {
  html: String!
  type: officialJournalOfIcelandApplicationAdvertTemplateTypeEnum!
}

enum officialJournalOfIcelandApplicationAdvertTemplateTypeEnum {
  AUGLYSING
  REGLUGERD
  GJALDSKRA
  UNKNOWN
}

type OJOIAComment {
  id: ID!
  age: String!
  direction: OJOICommentDirection!
  action: OJOICommentActionEnum!
  comment: String
  creator: String!
  receiver: String
}

enum OJOICommentDirection {
  SENT
  RECEIVED
}

enum OJOICommentActionEnum {
  EXTERNAL
  APPLICATION
}

type OJOIAGetCommentsResponse {
  comments: [OJOIAComment!]!
}

type OfficialJournalOfIcelandApplicationGetUserInvolvedParty {
  """The id of the involved party"""
  id: String!

  """The title of the involved party"""
  title: String!

  """The slug of the involved party"""
  slug: String!
}

type OfficialJournalOfIcelandApplicationGetUserInvolvedPartiesResponse {
  involvedParties: [OfficialJournalOfIcelandApplicationGetUserInvolvedParty!]!
}

type OfficialJournalOfIcelandApplicationGetMyUserInfoResponse {
  """The first name of the user"""
  firstName: String!

  """The last name of the user"""
  lastName: String!

  """The email of the user"""
  email: String!
}

type OfficialJournalOfIcelandApplicationSignatureMember {
  name: String!
  above: String
  before: String
  below: String
  after: String
}

type OfficialJournalOfIcelandApplicationInvolvedPartySignature {
  institution: String!
  signatureDate: String!
  chairman: OfficialJournalOfIcelandApplicationSignatureMember
  members: [OfficialJournalOfIcelandApplicationSignatureMember!]!
  additionalSignature: String
}

type OfficialJournalOfIcelandApplicationInvolvedPartySignatureResponse {
  type: OfficialJournalOfIcelandApplicationSignatureType!
  records: [OfficialJournalOfIcelandApplicationInvolvedPartySignature!]!
}

enum OfficialJournalOfIcelandApplicationSignatureType {
  Regular
  Committee
}

type OfficialJournalOfIcelandApplicationPostCommentResponse {
  success: Boolean!
}

type OfficialJournalOfIcelandApplicationGetPriceResponse {
  price: Int!
}

type OfficialJournalOfIcelandApplicationGetPdfUrlResponse {
  url: String!
}

type OfficialJournalOfIcelandApplicationGetPresignedUrlResponse {
  url: String!
  key: String
  cdn: String
}

type OfficialJournalOfIcelandApplicationAddApplicationAttachmentResponse {
  success: Boolean!
}

type OfficialJournalOfIcelandApplicationGetApplicationAttachments {
  attachments: [OfficialJournalOfIcelandApplicationGetApplicationAttachmentResponse!]!
}

type OfficialJournalOfIcelandApplicationGetApplicationAttachmentResponse {
  id: String!
  fileName: String!
  originalFileName: String!
  fileFormat: String!
  fileExtension: String!
  fileLocation: String!
  fileSize: Int!
}

type OJOIAApplicationCaseResponse {
  department: String!
  type: String!
  status: String!
  communicationStatus: String!
  categories: [String!]!
  html: String!
}

type OJOIAGetPdfResponse {
  pdf: String!
}

type officialJournalOfIcelandApplicationAdvertTemplateTypesResponse {
  types: [officialJournalOfIcelandApplicationAdvertTemplateType!]!
}

type officialJournalOfIcelandApplicationAdvertTemplateType {
  title: String!
  type: officialJournalOfIcelandApplicationAdvertTemplateTypeEnum!
}

type MortgageCertificateValidationModel {
  propertyNumber: String!
  exists: Boolean!
  hasKMarking: Boolean!
}

type RequestCorrectionOnMortgageCertificateModel {
  hasSentRequest: Boolean!
}

type MunicipalitiesFinancialAidAmountModel {
  applicationId: String!
  aidAmount: Float!
  childrenAidAmount: Float
  income: Float
  personalTaxCredit: Float!
  spousePersonalTaxCredit: Float
  tax: Float!
  finalAmount: Float!
  deductionFactors: [MunicipalitiesFinancialAidDeductionFactorsModel!]
}

type MunicipalitiesFinancialAidApplicationModel {
  id: ID!
  created: DateTime!
  modified: DateTime!
  nationalId: String!
  name: String!
  phoneNumber: String
  email: String!
  homeCircumstances: String!
  homeCircumstancesCustom: String
  student: Boolean!
  studentCustom: String
  employment: String!
  employmentCustom: String
  hasIncome: Boolean!
  usePersonalTaxCredit: Boolean!
  bankNumber: String
  ledger: String
  accountNumber: String
  interview: Boolean
  formComment: String
  spouseFormComment: String
  state: String!
  files: [MunicipalitiesFinancialAidApplicationFileModel!]
  rejection: String
  applicationEvents: [MunicipalitiesFinancialAidApplicationEventModel!]
  children: [MunicipalitiesFinancialAidApplicationChildren!]
  amount: MunicipalitiesFinancialAidAmountModel
  spouseName: String
  spouseNationalId: String
  spouseEmail: String
  spousePhoneNumber: String
  familyStatus: String!
  streetName: String
  postalCode: String
  city: String
  municipalityCode: String
  directTaxPayments: [DirectTaxPaymentModel!]!
  applicationSystemId: String
}

type MunicipalitiesFinancialAidApplicationEventModel {
  id: ID!
  created: DateTime!
  applicationId: String!
  comment: String
  eventType: String!
  staffNationalId: String
  staffName: String
}

type MunicipalitiesFinancialAidDeductionFactorsModel {
  amount: Float!
  description: String!
  amountId: String!
}

type MunicipalitiesFinancialAidApplicationFileModel {
  id: ID!
  created: DateTime!
  applicationId: String!
  name: String!
  key: String!
  size: Float!
  type: String!
}

type MunicipalitiesFinancialAidSignedUrlModel {
  url: String!
  key: String!
}

type MunicipalitiesFinancialAidCreateFilesModel {
  success: Boolean!
  files: [MunicipalitiesFinancialAidApplicationFileModel!]!
}

type DirectTaxPaymentModel {
  totalSalary: Float!
  payerNationalId: String!
  personalAllowance: Float!
  withheldAtSource: Float!
  month: Float!
  year: Float!
}

type MunicipalitiesFinancialAidApplicationChildren {
  id: ID!
  applicationId: String!
  school: String
  nationalId: String!
  name: String!
}

type NotificationMetadata {
  sent: DateTime!
  updated: DateTime
  created: DateTime
  read: Boolean
  seen: Boolean
}

type NotificationSender {
  id: String
  logoUrl: String
}

type NotificationRecipient {
  nationalId: String
}

type NotificationLink {
  url: String
}

type NotificationMessage {
  title: String!
  body: String!
  dataCopy: String

  """Displays the {dataCopy} by default, will display {body} as fallback"""
  displayBody: String!
  link: NotificationLink!
}

type Notification {
  id: Int!
  notificationId: ID!
  metadata: NotificationMetadata!
  sender: NotificationSender!
  recipient: NotificationRecipient!
  message: NotificationMessage!
}

type AdminNotification {
  id: Int!
  notificationId: ID!
  sender: NotificationSender!
  sent: DateTime!
}

type Notifications {
  data: [Notification!]!
  totalCount: Float!
  pageInfo: PageInfoDto!
  unreadCount: Int
  unseenCount: Int
}

type AdminNotifications {
  data: [AdminNotification!]!
  totalCount: Float!
  pageInfo: PageInfoDto!
}

type NotificationResponse {
  data: Notification!
}

type MarkNotificationReadResponse {
  data: Notification!
}

type NotificationsMarkAllAsSeenResponse {
  success: Boolean!
}

type NotificationsMarkAllAsReadResponse {
  success: Boolean!
}

type IdentityDocumentModel {
  number: String
  type: String
  verboseType: String
  subType: String
  status: String
  issuingDate: DateTime
  expirationDate: DateTime
  displayFirstName: String
  displayLastName: String
  mrzFirstName: String
  mrzLastName: String
  sex: String
  numberWithType: String
  expiryStatus: String
  expiresWithinNoticeTime: Boolean
}

type IdentityDocumentModelChild {
  childNationalId: String
  childName: String
  secondParent: String
  secondParentName: String
  passports: [IdentityDocumentModel!]
}

type Passport {
  userPassport: IdentityDocumentModel
  childPassports: [IdentityDocumentModelChild!]
}

type PaymentCatalogItem {
  performingOrgID: String!
  chargeType: String!
  chargeItemCode: String!
  chargeItemName: String!
  priceAmount: Float!
}

type PaymentCatalogResponse {
  items: [PaymentCatalogItem!]!
}

type PaymentsGetPaymentFlowResponse {
  id: ID!
  paymentStatus: PaymentsGetFlowPaymentStatus!
  productTitle: String!
  productPrice: Float!
  existingInvoiceId: String
  payerNationalId: String!
  payerName: String!
  availablePaymentMethods: [String!]!
  organisationId: String!

  """
  Arbitrary JSON data provided by the consuming service that will be returned on in callbacks (e.g. onSuccess, onUpdate). Example use case: the service that created the payment flow needs to pass some data that will be returned in the callback
  """
  metadata: JSON
  returnUrl: String
  redirectToReturnUrlOnSuccess: Boolean
  updatedAt: DateTime!
}

enum PaymentsGetFlowPaymentStatus {
  unpaid
  invoice_pending
  paid
}

type PaymentsCardVerificationField {
  """Field name"""
  name: String!

  """Field value"""
  value: String!
}

type PaymentsCardInformation {
  """Card scheme (for example Visa or MasterCard)"""
  cardScheme: String!

  """Issuing country of the card"""
  issuingCountry: String!

  """Card usage description"""
  cardUsage: String!

  """Card category"""
  cardCategory: String!

  """Out-of-SCA scope status"""
  outOfScaScope: String!

  """Card product category"""
  cardProductCategory: String!
}

type PaymentsVerifyCardResponse {
  """Raw response from card verification"""
  cardVerificationRawResponse: String!

  """Post URL for verification"""
  postUrl: String!

  """Verification fields"""
  verificationFields: [PaymentsCardVerificationField!]!

  """Additional fields"""
  additionalFields: [PaymentsCardVerificationField!]!

  """Indicates if the verification was successful"""
  isSuccess: Boolean!

  """Card information"""
  cardInformation: PaymentsCardInformation!

  """Script path for further actions"""
  scriptPath: String!

  """Response code from the verification"""
  responseCode: String!

  """Description of the response"""
  responseDescription: String!

  """Response time of the verification"""
  responseTime: String!
}

type PaymentsChargeCardResponse {
  """Was the payment successful?"""
  isSuccess: Boolean!

  """The response code from the payment provider"""
  responseCode: String!
}

type PaymentsGetVerificationStatus {
  isVerified: Boolean!
}

type PaymentsCreateInvoiceResponse {
  """Indicates if invoice creation was successful"""
  isSuccess: Boolean!

  """Code of what went wrong"""
  responseCode: String

  """Unique id for the event"""
  correlationId: String!
}

type PaymentsCardVerificationResponse {
  """Id of the payment flow that was verified"""
  paymentFlowId: String!
}

type PaymentScheduleConditions {
  nationalId: ID!
  maxDebtAmount: Float!
  totalDebtAmount: Float!
  minPayment: Float!
  maxPayment: Float!
  collectionActions: Boolean!
  doNotOwe: Boolean!
  maxDebt: Boolean!
  oweTaxes: Boolean!
  disposableIncome: Float!
  taxReturns: Boolean!
  vatReturns: Boolean!
  citReturns: Boolean!
  accommodationTaxReturns: Boolean!
  withholdingTaxReturns: Boolean!
  wageReturns: Boolean!
  alimony: Float!
  minWagePayment: Float!
  percent: String!
}

type PaymentScheduleCharge {
  id: String!
  name: String!
  principal: Float!
  intrest: Float!
  expenses: Float!
  total: Float!
}

type PaymentScheduleDebts {
  nationalId: ID!
  type: PaymentScheduleType!
  paymentSchedule: String!
  organization: String!
  explanation: String!
  totalAmount: Float!
  chargetypes: [PaymentScheduleCharge!]!
}

"""Possible types of schedules"""
enum PaymentScheduleType {
  FinesAndLegalCost
  OverpaidBenefits
  Wagedection
  OtherFees
}

type PaymentSchedulePayment {
  dueDate: DateTime!
  payment: Float!
  accumulated: Float!
}

type PaymentScheduleDistribution {
  nationalId: ID!
  scheduleType: PaymentScheduleType!
  payments: [PaymentSchedulePayment!]!
}

type PaymentScheduleEmployer {
  nationalId: ID!
  name: String!
}

type PaymentScheduleInitialSchedule {
  nationalId: ID!
  scheduleType: PaymentScheduleType!
  minPayment: Float!
  maxPayment: Float!
  minCountMonth: Float!
  maxCountMonth: Float!
}

type PaymentScheduleCompanyConditions {
  nationalId: ID!
  maxDebtAmount: Float!
  totalDebtAmount: Float!
  minPayment: Float!
  maxPayment: Float!
  collectionActions: Boolean!
  doNotOwe: Boolean!
  maxDebt: Boolean!
  taxReturns: Boolean!
  vatReturns: Boolean!
  citReturns: Boolean!
  accommodationTaxReturns: Boolean!
  withholdingTaxReturns: Boolean!
  financialStatement: Boolean!
}

type UpdateCurrentEmployerResponse {
  success: Boolean!
}

type Appendix {
  title: String
  text: String
}

type RegulationAuthor {
  authorId: String!
  name: String!
}

type DeleteDraftRegulationModel {
  id: String!
}

"""Info about how to download the draft regulation PDF"""
type DraftRegulationPdfDownloadModel {
  """
  Does the download go through the download service? If true needs special handling in client
  """
  downloadService: Boolean!

  """URL of the draft regulation PDF file"""
  url: String
}

type DraftRegulationCancelModel {
  type: String
  id: String
  name: String
  regTitle: String
  date: String
  dropped: Boolean
}

type ChangeAppendix {
  title: String
  text: String
  diff: String
}

type DraftRegulationChangeModel {
  type: String
  id: String
  name: String
  title: String
  regTitle: String
  date: String
  text: String
  appendixes: [ChangeAppendix!]
  comments: String
  dropped: Boolean
  diff: String
}

type RegulationSummaryAuthor {
  authorId: String!
  name: String!
}

type DraftRegulationPagingModel {
  page: Float!
  pages: Float!
}

type DraftRegulationSummary {
  id: String!
  draftingStatus: String!
  authors: [RegulationSummaryAuthor!]!
  title: String
  name: String
  idealPublishDate: String
  fastTrack: Boolean
}

type RegulationShippedAuthor {
  authorId: String!
  name: String!
}

type DraftRegulationShippedModel {
  id: String!
  draftingStatus: String!
  authors: [RegulationShippedAuthor!]!
  title: String
  name: String
  idealPublishDate: String
  fastTrack: Boolean
}

type RightsPortalAidOrNutritionRefund {
  type: String!
  value: Int!
}

type RightsPortalAidOrNutrition {
  id: ID!
  type: RightsPortalAidOrNutritionType!
  iso: String!
  name: String!
  maxUnitRefund: String
  maxMonthlyAmount: Float
  refund: RightsPortalAidOrNutritionRefund!
  available: String
  location: String
  explanation: String
  validUntil: DateTime
  allowed12MonthPeriod: Float
  nextAllowedMonth: String
  expiring: Boolean!
  renewalStatus: RightsPortalAidOrNutritionRenewalStatus
}

enum RightsPortalAidOrNutritionType {
  AID
  NUTRITION
}

enum RightsPortalAidOrNutritionRenewalStatus {
  VALID
  VALID_FOR_RENEWAL
  RENEWAL_IN_PROGRESS
  NOT_VALID_FOR_RENEWAL
}

type RightsPortalPaginatedAidsOrNutrition {
  data: [RightsPortalAidOrNutrition!]!
  totalCount: Float!
  pageInfo: PageInfoDto!
}

type RightsPortalDentistBill {
  number: Int
  amount: Int
  coveredAmount: Int
  date: DateTime
  refundDate: DateTime
}

type RightsPortalDentistStatus {
  isInsured: Boolean
  canRegister: Boolean
  contractType: String
}

type RightsPortalUserDentistInformation {
  name: String
  id: Float
  status: RightsPortalDentistStatus
}

type RightsPortalUserDentistRegistration {
  dentist: RightsPortalUserDentistInformation
  history: [RightsPortalDentistBill!]
}

type RightsPortalDentistPractice {
  practice: String
  region: String
  postalCode: String
  address: String
}

type RightsPortalDentist {
  id: Float!
  name: String
  practices: [RightsPortalDentistPractice!]
}

type RightsPortalPaginatedDentists {
  data: [RightsPortalDentist!]!
  totalCount: Float!
  pageInfo: PageInfoDto!
}

type RightsPortalDentistRegisterResponse {
  success: Boolean!
}

type RightsPortalDrugPeriod {
  id: ID
  dateFrom: DateTime
  dateTo: DateTime
  active: Boolean
  paidAmount: Float
  paymentStatus: Float
  numberOfBills: Float
  levelNumber: Float
  levelPercentage: Float
}

type RightsPortalDrugBill {
  id: ID
  date: DateTime
  description: String
  totalCopaymentAmount: Float
  totalCustomerAmount: Float
  totalInsuranceAmount: Float
  totalExcessAmount: Float
  totalCalculatedForPaymentStepAmount: Float
}

type RightsPortalDrugBillLine {
  billId: ID
  drugName: String
  strength: String
  quantity: String
  units: Float
  salesPrice: Float
  copaymentAmount: Float
  customerAmount: Float
  excessAmount: Float
  insuranceAmount: Float
  calculatedForPaymentStepAmount: Float
}

type RightsPortalDrug {
  nordicCode: String
  atcCode: String
  name: String
  form: String
  strength: String
  packaging: String
  price: Float
}

type RightsPortalPaginatedDrug {
  data: [RightsPortalDrug!]!
  totalCount: Float!
  pageInfo: PageInfoDto!
}

type RightsPortalDrugCalculation {
  lineNumber: Float
  referencePrice: Float
  customerPrice: Float
  calculatedCustomerPrice: Float
  insurancePrice: Float
  excessPrice: Float
  fullPrice: Float
  comment: String
}

type RightsPortalDrugCalculatorResponse {
  drugs: [RightsPortalDrugCalculation!]
  totalUnits: Float
  totalPrice: Float
  totalCustomerPrice: Float
}

type RightsPortalMethylDoctor {
  name: String
}

type RightsPortalDrugCertificate {
  id: Float
  atcCode: String
  atcName: String
  drugName: String
  date: DateTime
  validFrom: DateTime
  validTo: DateTime
  doctor: String
  processed: Boolean
  approved: Boolean
  rejected: Boolean
  expired: Boolean
  valid: Boolean
  comment: String
  documentId: Float
  methylDoctors: [RightsPortalMethylDoctor!]
}

type RightsPortalAddress {
  postalCode: String
  municipality: String
  streetAddress: String
}

type RightsPortalHealthCenter {
  id: ID!
  name: String
  region: String
  address: RightsPortalAddress
  waitListRegistration: Boolean
  canRegister: Boolean
}

type RightsPortalPaginatedHealthCenters {
  data: [RightsPortalHealthCenter!]!
  totalCount: Float!
  pageInfo: PageInfoDto!
}

type RightsPortalHealthCenterRecord {
  dateFrom: DateTime
  dateTo: DateTime
  healthCenterName: String
  doctor: String
}

type RightsPortalHealthCenterRegistrationHistory {
  current: RightsPortalHealthCenterRecord
  history: [RightsPortalHealthCenterRecord!]
  canRegister: Boolean
  neighborhoodCenter: String
}

type RightsPortalHealthCenterRegisterResponse {
  success: Boolean!
}

type RightsPortalHealthCenterDoctors {
  id: Float
  name: String
  availableFrom: String
  availableTo: String
}

type RightsPortalTherapySession {
  available: Int!
  used: Int!
}

type RightsPortalTherapyPeriod {
  from: DateTime
  sessions: RightsPortalTherapySession
  to: DateTime
}

type RightsPortalTherapyState {
  display: String!
  code: String!
}

type RightsPortalTherapy {
  id: ID!
  name: String!
  postStation: String
  periods: [RightsPortalTherapyPeriod!]
  state: RightsPortalTherapyState
}

type RightsPortalPaginatedTherapies {
  data: [RightsPortalTherapy!]!
  totalCount: Float!
  pageInfo: PageInfoDto!
}

type RightsPortalInsuranceConfirmation {
  fileName: String!
  contentType: String!
  data: String!
}

type RightsPortalInsuranceStatus {
  display: String
  code: RightsPortalInsuranceStatusType
}

enum RightsPortalInsuranceStatusType {
  ALM
  ATVL
  BARN
  BAUM
  EL67
  ELLI
  GRAT
  OROR
  OR
  UNGM
}

type RightsPortalInsuranceOverview {
  isInsured: Boolean!
  explanation: String
  from: DateTime
  status: RightsPortalInsuranceStatus
  maximumPayment: Int
  ehicCardExpiryDate: DateTime
}

type RightsPortalPaymentError {
  status: RightsPortalPaymentErrorStatus!
}

enum RightsPortalPaymentErrorStatus {
  NOT_FOUND
  INTERNAL_SERVICE_ERROR
}

type RightsPortalCopaymentInsuranceStatus {
  display: String
  code: String
}

type RightsPortalCopaymentPeriod {
  id: Float
  status: RightsPortalCopaymentInsuranceStatus
  month: String
  maximumPayment: Float
  monthPayment: Float
  overpaid: Float
  repaid: Float
}

type RightsPortalCopaymentPeriodResponse {
  items: [RightsPortalCopaymentPeriod!]!
  errors: [RightsPortalPaymentError!]!
}

type RightsPortalCopaymentBill {
  id: Int
  serviceType: String
  date: DateTime
  totalAmount: Int
  insuranceAmount: Int
  ownAmount: Int
  overpaid: Int
}

type RightsPortalCopaymentBillResponse {
  items: [RightsPortalCopaymentBill!]!
  errors: [RightsPortalPaymentError!]!
}

type RightsPortalPaymentOverviewServiceType {
  code: String
  name: String
}

type RightsPortalPaymentOverviewBill {
  date: DateTime
  serviceType: RightsPortalPaymentOverviewServiceType
  totalAmount: Float
  insuranceAmount: Float
  documentId: Float
  downloadUrl: String
}

type RightsPortalPaymentOverview {
  credit: Float
  debt: Float
  bills: [RightsPortalPaymentOverviewBill!]
}

type RightsPortalPaymentOverviewResponse {
  items: [RightsPortalPaymentOverview!]!
  errors: [RightsPortalPaymentError!]!
}

type RightsPortalPaymentOverviewDocument {
  contentType: String
  fileName: String
  data: String
}

type RightsPortalPaymentOverviewDocumentResponse {
  items: [RightsPortalPaymentOverviewDocument!]!
  errors: [RightsPortalPaymentError!]!
}

type RightsPortalPaymentOverviewServiceTypeResponse {
  items: [RightsPortalPaymentOverviewServiceType!]!
  errors: [RightsPortalPaymentError!]!
}

type RightsPortalCopaymentStatus {
  insuranceStatus: RightsPortalCopaymentInsuranceStatus
  maximumMonthlyPayment: Float
  maximumPayment: Float
  basePayment: Float
}

type SessionsSession {
  id: ID!
  actor: Identity!
  subject: Identity!
  client(lang: String = "is"): AuthClient!
  timestamp: DateTime!
  userAgent: String!
  device: String
  ip: String!
  ipLocation: String
}

type SessionsPaginatedSessionResponse {
  data: [SessionsSession!]!
  totalCount: Float!
  pageInfo: PageInfoDto!
}

type ShipRegistryShipOwner {
  name: String
  nationalId: String
  sharePercentage: Float
}

type ShipRegistryShip {
  shipName: String
  shipType: String
  regno: Float
  region: String
  portOfRegistry: String
  regStatus: String
  grossTonnage: Float
  length: Float
  manufactionYear: String
  manufacturer: String
  owners: [ShipRegistryShipOwner!]
}

type ShipRegistryShipSearch {
  ships: [ShipRegistryShip!]!
}

type StatisticKeyValue {
  key: String!
  value: Float
}

type StatisticsForHeader {
  header: String!
  headerType: String!
  statisticsForHeader: [StatisticKeyValue!]!
}

type StatisticsQueryResponse {
  statistics: [StatisticsForHeader!]!
}

type Homestay {
  registrationNumber: String
  name: String
  address: String
  manager: String
  year: Float
  city: String
  guests: Float
  rooms: Float
  propertyId: String
  apartmentId: String
}

type OperatingLicensesCSV {
  value: String
}

type SyslumennAuction {
  office: String
  location: String
  auctionType: String
  lotType: String
  lotName: String
  lotId: String
  lotItems: String
  auctionDate: String
  auctionTime: String
  petitioners: String
  respondent: String
  publishText: String
  auctionTakesPlaceAt: String
}

type RealEstateAgent {
  name: String
  location: String
}

type Lawyer {
  name: String
  licenceType: String
}

type Broker {
  name: String
  nationalId: String
}

type OperatingLicense {
  id: Float
  issuedBy: String
  licenseNumber: String
  location: String
  name: String
  street: String
  postalCode: String
  type: String
  type2: String
  restaurantType: String
  validFrom: DateTime
  validTo: DateTime
  licenseHolder: String
  licenseResponsible: String
  category: String
  outdoorLicense: String
  alcoholWeekdayLicense: String
  alcoholWeekendLicense: String
  alcoholWeekdayOutdoorLicense: String
  alcoholWeekendOutdoorLicense: String
  maximumNumberOfGuests: Float
  numberOfDiningGuests: Float
}

type PaginationInfo {
  pageSize: Float
  pageNumber: Float
  totalCount: Float
  totalPages: Float
  currentPage: Float
  hasNext: Boolean
  hasPrevious: Boolean
}

type PaginatedOperatingLicenses {
  paginationInfo: PaginationInfo!
  searchQuery: String
  results: [OperatingLicense!]!
}

type CertificateInfoResponse {
  nationalId: String
  expirationDate: String
  releaseDate: String
}

type DistrictCommissionerAgencies {
  name: String!
  place: String!
  address: String!
  id: String!
}

type AssetName {
  name: String!
}

type VehicleRegistration {
  modelName: String
  manufacturer: String
  licensePlate: String
  color: String
}

type EstateRelations {
  relations: [String!]!
}

type AlcoholLicence {
  licenceType: String
  licenceSubType: String
  licenseNumber: String
  issuedBy: String
  year: Float
  validFrom: DateTime
  validTo: DateTime
  licenseHolder: String
  licenseResponsible: String
  office: String
  location: String
}

type TemporaryEventLicence {
  licenceType: String
  licenceSubType: String
  licenseNumber: String
  issuedBy: String
  year: Float
  validFrom: DateTime
  validTo: DateTime
  licenseHolder: String
  licenseResponsible: String
  maximumNumberOfGuests: Float
  estimatedNumberOfGuests: Float
  location: String
}

type MasterLicence {
  name: String
  dateOfPublication: DateTime
  office: String
  profession: String
  nationalId: String
}

type MasterLicencesResponse {
  licences: [MasterLicence!]!
}

type RegistryPerson {
  name: String
  nationalId: String
  address: String
  postalCode: String
  city: String
}

type JourneymanLicence {
  name: String
  dateOfPublication: DateTime
  profession: String
  nationalId: String
}

type JourneymanLicencesResponse {
  licences: [JourneymanLicence!]!
}

type ProfessionRight {
  name: String
  profession: String
  nationalId: String
}

type ProfessionRightsResponse {
  list: [ProfessionRight!]!
}

type RealEstateDetail {
  propertyNumber: String
  usage: String
  defaultAddress: String
}

type VehicleDetail {
  licencePlate: String
  propertyNumber: String
  manufacturer: String
  manufacturerType: String
  color: String
  dateOfRegistration: DateTime
}

type ShipMeasurements {
  length: String
  bruttoWeightTons: String
}

type ShipDetail {
  shipRegistrationNumber: String
  usageType: String
  name: String
  initialRegistrationDate: DateTime
  mainMeasurements: ShipMeasurements
}

type ManyPropertyDetail {
  propertyNumber: String
  propertyType: String
  realEstate: [RealEstateDetail!]
  vehicle: VehicleDetail
  ship: ShipDetail
}

type BurningPermit {
  dateFrom: DateTime
  timeFrom: String
  dateTo: DateTime
  timeTo: String
  size: Float
  type: String
  subtype: String
  responsibleParty: String
  office: String
  licensee: String
  place: String
}

type BurningPermitsResponse {
  list: [BurningPermit!]!
}

type ReligiousOrganization {
  director: String
  name: String!
  homeAddress: String
  postalCode: String
  municipality: String
}

type ReligiousOrganizationsResponse {
  list: [ReligiousOrganization!]!
}

type OwnerChangeValidationMessage {
  errorNo: String
  defaultMessage: String
}

type OwnerChangeValidation {
  hasError: Boolean!
  errorMessages: [OwnerChangeValidationMessage!]
}

type OperatorChangeValidationMessage {
  errorNo: String
  defaultMessage: String
}

type OperatorChangeValidation {
  hasError: Boolean!
  errorMessages: [OperatorChangeValidationMessage!]
}

type CheckTachoNetExists {
  exists: Boolean!
}

type VehicleValidationErrorMessage {
  errorNo: String
  defaultMessage: String
}

type BasicVehicleInformation {
  permno: String
  make: String
  color: String
  role: String
  requireMileage: Boolean
  mileageReading: String
}

type VehicleOwnerchangeChecksByPermno {
  isDebtLess: Boolean
  validationErrorMessages: [VehicleValidationErrorMessage!]
  basicVehicleInformation: BasicVehicleInformation
}

type VehicleOperatorChangeChecksByPermno {
  isDebtLess: Boolean
  validationErrorMessages: [VehicleValidationErrorMessage!]
  basicVehicleInformation: BasicVehicleInformation
}

type VehiclePlateOrderChecksByPermno {
  validationErrorMessages: [VehicleValidationErrorMessage!]
  basicVehicleInformation: BasicVehicleInformation
}

type MyPlateOwnershipChecksByRegno {
  validationErrorMessages: [VehicleValidationErrorMessage!]
}

type PlateAvailability {
  available: Boolean!
  regno: String!
}

type PlateOrderValidationMessage {
  errorNo: String
  defaultMessage: String
}

type PlateOrderValidation {
  hasError: Boolean!
  errorMessages: [PlateOrderValidationMessage!]
}

type UniversityGatewayProgram {
  active: Boolean!
  id: String!
  externalId: String!
  nameIs: String!
  nameEn: String!
  specializationExternalId: String
  specializationNameIs: String
  specializationNameEn: String
  universityId: String!
  universityContentfulKey: String!
  departmentNameIs: String!
  departmentNameEn: String!
  startingSemesterYear: Float!
  startingSemesterSeason: String!
  applicationStartDate: DateTime!
  applicationEndDate: DateTime!
  schoolAnswerDate: DateTime
  studentAnswerDate: DateTime
  degreeType: String!
  degreeAbbreviation: String!
  credits: Float!
  descriptionIs: String!
  descriptionEn: String!
  durationInYears: Float!
  costPerYear: Float
  iscedCode: String!
  modeOfDelivery: [String!]!
  applicationPeriodOpen: Boolean!
  applicationInUniversityGateway: Boolean!
}

type UniversityGatewayProgramDetails {
  active: Boolean!
  id: String!
  externalId: String!
  nameIs: String!
  nameEn: String!
  specializationExternalId: String
  specializationNameIs: String
  specializationNameEn: String
  universityId: String!
  universityContentfulKey: String!
  departmentNameIs: String!
  departmentNameEn: String!
  startingSemesterYear: Float!
  startingSemesterSeason: String!
  applicationStartDate: DateTime!
  applicationEndDate: DateTime!
  schoolAnswerDate: DateTime
  studentAnswerDate: DateTime
  degreeType: String!
  degreeAbbreviation: String!
  credits: Float!
  descriptionIs: String!
  descriptionEn: String!
  durationInYears: Float!
  costPerYear: Float
  iscedCode: String!
  modeOfDelivery: [String!]!
  applicationPeriodOpen: Boolean!
  applicationInUniversityGateway: Boolean!
  externalUrlIs: String
  externalUrlEn: String
  admissionRequirementsIs: String
  admissionRequirementsEn: String
  studyRequirementsIs: String
  studyRequirementsEn: String
  costInformationIs: String
  costInformationEn: String
  arrangementIs: String
  arrangementEn: String
  descriptionHtmlIs: JSON
  descriptionHtmlEn: JSON
  allowException: Boolean!
  allowThirdLevelQualification: Boolean!
  extraApplicationFields: [UniversityGatewayProgramExtraApplicationField!]!
}

type UniversityGatewayProgramExtraApplicationField {
  externalKey: String!
  nameIs: String!
  nameEn: String!
  descriptionIs: String
  descriptionEn: String
  required: Boolean!
  fieldType: String!
  uploadAcceptedFileType: String
  options: String
}

type UniversityGatewayProgramsPaginated {
  data: [UniversityGatewayProgram!]!
  totalCount: Float!
  pageInfo: PageInfoDto!
}

type UniversityGatewayProgramFilter {
  field: String!
  options: [String!]!
}

type UniversityGatewayUniversity {
  id: String!
  nationalId: String!
  contentfulKey: String!
  contentfulLogoUrl: String
  contentfulTitle: String
  contentfulTitleEn: String
  contentfulLink: String
  contentfulLinkEn: String
}

type UniversityGatewayApplication {
  id: String!
  nationalId: String!
}

type DeleteTokenResponse {
  success: Boolean!
}

type UserProfileLocale {
  locale: String
  nationalId: ID!
}

type Response {
  created: Boolean!
}

type UserDeviceToken {
  id: ID!
  nationalId: String!
  deviceToken: String!
  created: DateTime!
  modified: DateTime!
}

type UserProfile {
  nationalId: ID!
  mobilePhoneNumber: String
  locale: String
  email: String
  emailVerified: Boolean!
  mobilePhoneNumberVerified: Boolean!
  documentNotifications: Boolean!
  needsNudge: Boolean
  emailStatus: String
  mobileStatus: String
  modified: DateTime @deprecated(reason: "needsNudge should be used to determine if profile needs nudge. v2 doesnt provide the modified value.")
  emailNotifications: Boolean
  canNudge: Boolean @deprecated(reason: "Deprecated due to new field EmailNotification from UserProfile V2")
  bankInfo: String
}

type UserProfileAdminProfile {
  nationalId: ID!
  mobilePhoneNumber: String
  locale: String
  email: String
  emailVerified: Boolean!
  mobilePhoneNumberVerified: Boolean!
  documentNotifications: Boolean!
  needsNudge: Boolean
  emailStatus: String
  mobileStatus: String
  modified: DateTime @deprecated(reason: "needsNudge should be used to determine if profile needs nudge. v2 doesnt provide the modified value.")
  emailNotifications: Boolean
  canNudge: Boolean @deprecated(reason: "Deprecated due to new field EmailNotification from UserProfile V2")
  bankInfo: String
  lastNudge: DateTime
  nextNudge: DateTime
  fullName: String
}

type UserProfileAdminProfilesResponse {
  data: [UserProfileAdminProfile!]!
  totalCount: Float!
  pageInfo: PageInfoDto!
}

type UserProfileActorProfile {
  fromNationalId: String!
  emailNotifications: Boolean!
  fromName: String
}

type UserProfileActorProfileResponse {
  data: [UserProfileActorProfile!]!
  totalCount: Float!
  pageInfo: PageInfoDto!
}

type VehicleMileageDetail {
  permno: String
  readDate: DateTime
  originCode: String

  """
  Deprecated. Use {mileageNumber} instead. Keeping in for backwards compatibility
  """
  mileage: String @deprecated(reason: "Third party service wants this as an integer.")
  mileageNumber: Float
  internalId: ID
}

type VehicleMileageOverview {
  data: [VehicleMileageDetail!]

  """
  Indicates that the user has already posted a reading today. So instead of posting a new reading, should be editing the reading from today
  """
  editing: Boolean
  permno: String
  canRegisterMileage: Boolean
  requiresMileageRegistration: Boolean
  canUserRegisterVehicleMileage: Boolean
}

type VehicleMileagePutModel {
  permno: String
  internalId: ID
  mileage: String
  mileageNumber: Float
}

type NextInspection {
  nextInspectionDate: DateTime
  nextInspectionDateIfPassedInspectionToday: DateTime
}

type VehiclesVehicle {
  isCurrent: Boolean
  permno: String
  regno: String
  vin: String
  type: String
  color: String
  firstRegDate: DateTime
  modelYear: String
  productYear: String
  registrationType: String
  role: String
  operatorStartDate: DateTime
  operatorEndDate: DateTime
  outOfUse: Boolean
  otherOwners: Boolean
  termination: String
  buyerPersidno: String
  ownerPersidno: String
  vehicleStatus: String
  useGroup: String
  vehGroup: String
  plateStatus: String
  nextInspection: NextInspection
  deregistrationDate: DateTime
  operatorNumber: Float
  primaryOperator: Boolean
  ownerSsid: String
  ownerName: String
  lastInspectionResult: String
  lastInspectionDate: DateTime
  lastInspectionType: String
  nextInspectionDate: DateTime
  nextAvailableMileageReadDate: DateTime
  requiresMileageRegistration: Boolean
  canRegisterMileage: Boolean
}

type VehiclePaging {
  pageNumber: Float
  pageSize: Float
  totalPages: Float
  totalRecords: Float
}

type VehiclesList {
  vehicleList: [VehiclesVehicle!] @deprecated(reason: "Too slow. Use VehiclesListV2 when possible.")
  paging: VehiclePaging
  postStation: String @deprecated(reason: "New service does not include this field")
  downloadServiceURL: String
  persidno: String @deprecated(reason: "New service does not include this field")
  name: String @deprecated(reason: "New service does not include this field")
  address: String @deprecated(reason: "New service does not include this field")
  createdTimestamp: String @deprecated(reason: "New service does not include this field")
}

type VehicleListed {
  permno: String
  regno: String
  persidno: String
  role: String
  make: String
  colorCode: String
  colorName: String
  modelYear: String
  requiresMileageRegistration: Boolean
  canRegisterMileage: Boolean
  regTypeCode: String
  regTypeName: String
  regTypeSubName: String
  nextMainInspection: DateTime
  lastMileageRegistration: VehicleMileageDetail
  mileageRegistrationHistory: [VehicleMileageDetail!]
  latestMileage: Float
}

type VehiclesListV2 {
  vehicleList: [VehicleListed!]
  paging: VehiclePaging
  downloadServiceURL: String
}

type VehiclesMainInfo {
  model: String
  subModel: String
  regno: String
  year: Float
  co2: Float
  weightedCo2: Float
  co2Wltp: Float
  weightedCo2Wltp: Float
  cubicCapacity: Float
  trailerWithBrakesWeight: Float
  trailerWithoutBrakesWeight: Float
  nextAvailableMileageReadDate: DateTime
  requiresMileageRegistration: Boolean
  canRegisterMileage: Boolean
}

type VehiclesAxle {
  axleMaxWeight: Float
  wheelAxle: String
}

type Tyres {
  axle1: String
  axle2: String
  axle3: String
  axle4: String
  axle5: String
}

type VehiclesBasicInfo {
  model: String
  regno: String
  subModel: String
  permno: String
  verno: String
  year: Float
  country: String
  preregDateYear: String
  formerCountry: String
  importStatus: String
  vehicleStatus: String
}

type VehiclesRegistrationInfo {
  firstRegistrationDate: DateTime
  preRegistrationDate: DateTime
  newRegistrationDate: DateTime
  specialName: String
  vehicleGroup: String
  color: String
  reggroup: String
  reggroupName: String
  plateLocation: String
  plateStatus: String
  passengers: Float
  useGroup: String
  driversPassengers: Float
  standingPassengers: Float
  plateTypeFront: String
  plateTypeRear: String
}

type VehiclesCurrentOwnerInfo {
  owner: String
  nationalId: String
  address: String
  postalcode: String
  city: String
  dateOfPurchase: DateTime
}

type VehiclesInspectionInfo {
  type: String
  date: DateTime
  result: String
  odometer: String
  nextInspectionDate: DateTime
  lastInspectionDate: DateTime
  insuranceStatus: Boolean
  mortages: Float
  carTax: Float
  inspectionFine: Float
}

type VehiclesTechnicalInfo {
  engine: String
  totalWeight: String
  cubicCapacity: String
  capacityWeight: Float
  length: Float
  vehicleWeight: Float
  width: Float
  trailerWithoutBrakesWeight: Float
  horsepower: Float
  trailerWithBrakesWeight: Float
  carryingCapacity: Float
  axleTotalWeight: Float
  axles: [VehiclesAxle!]
  tyres: Tyres
}

type VehiclesOwners {
  nationalId: String
  name: String
  address: String
  dateOfPurchase: DateTime!
  current: Boolean
}

type VehiclesOperator {
  nationalId: String
  name: String
  address: String
  postalcode: String
  city: String
  startDate: DateTime
  endDate: DateTime
  serial: Float
  mainOperator: Boolean

  """Deprecated. Keeping in for now for backward compatibility."""
  mainoperator: Boolean
}

type VehiclesDetail {
  mainInfo: VehiclesMainInfo
  basicInfo: VehiclesBasicInfo
  registrationInfo: VehiclesRegistrationInfo
  currentOwnerInfo: VehiclesCurrentOwnerInfo
  inspectionInfo: VehiclesInspectionInfo
  technicalInfo: VehiclesTechnicalInfo
  ownersInfo: [VehiclesOwners!]
  coOwners: [VehiclesCurrentOwnerInfo!]
  operators: [VehiclesOperator!]
  downloadServiceURL: String
  isDebtLess: Boolean
  isOutOfCommission: Boolean
  lastMileage: VehicleMileageDetail
}

type VehiclesExcel {
  name: String
  persidno: String
  vehicles: [VehiclesDetail!]
}

type VehiclesVehicleSearchNextInspection {
  nextinspectiondate: DateTime
  nextinspectiondateIfPassedInspectionToday: DateTime
}

type VehiclesVehicleSearch {
  permno: String
  regno: String
  vin: String
  type: String
  color: String
  firstregdate: DateTime
  latestregistration: String
  nextInspection: VehiclesVehicleSearchNextInspection
  currentOwner: String
  currentOwnerAddress: String
  currentOwnerIsAnonymous: Boolean
  useGroup: String
  regtype: String
  mass: Float
  massLaden: Float
  vehicleStatus: String
  co: Float
  co2Wltp: Float
  weightedco2Wltp: Float
  nextAvailableMileageReadDate: DateTime
  requiresMileageRegistration: Boolean
  canRegisterMileage: Boolean
  engine: String

  """Basic operator array, names only."""
  operatorNames: [String!]
  operatorAnonymityStatus: OperatorAnonymityStatus!
}

enum OperatorAnonymityStatus {
  ALL
  SOME
  UNKNOWN
}

type VehiclesPublicVehicleSearch {
  permno: String
  regno: String
  vin: String
  make: String
  vehicleCommercialName: String
  color: String
  newRegDate: DateTime
  firstRegDate: DateTime
  vehicleStatus: String
  nextVehicleMainInspection: DateTime
  co2: Float
  weightedCo2: Float
  co2WLTP: Float
  weightedCo2WLTP: Float
  massLaden: Float
  mass: Float
  co: Float
  typeNumber: String
}

type VehiclesMileageRegistration {
  originCode: String!
  mileage: Int!
  date: DateTime!
  internalId: Int
}

type VehiclesMileageRegistrationHistory {
  vehicleId: String!
  mileageRegistrationHistory: [VehiclesMileageRegistration!]
}

type VehiclesMileageDetails {
  canRegisterMileage: Boolean
  requiresMileageRegistration: Boolean
  lastMileageRegistration: VehiclesMileageRegistration
  mileageRegistrations: VehiclesMileageRegistrationHistory
}

type VehicleCurrentWithMileage {
  vehicleId: String!
  registrationNumber: String
  userRole: String
  type: String
  color: String
  mileageDetails: VehiclesMileageDetails
}

type VehiclesCurrentListResponse {
  pageNumber: Int!
  pageSize: Int!
  totalPages: Int!
  totalRecords: Int!
  data: [VehicleCurrentWithMileage!]
}

type VehiclesBulkMileageReadingResponse {
  """
  The GUID of the mileage registration post request. Used to fetch job status
  """
  requestId: ID
  errorCode: Int
  errorMessage: String
}

type VehiclesBulkMileageRegistrationRequestError {
  code: String
  message: String
  warningSerialCode: Int
  warningText: String
}

type VehiclesBulkMileageRegistrationRequestDetail {
  guid: ID!
  vehicleId: String!
  mileage: Int
  returnCode: String
  errors: [VehiclesBulkMileageRegistrationRequestError!]
}

type VehiclesBulkMileageRegistrationRequestOverview {
  requests: [VehiclesBulkMileageRegistrationRequestDetail!]!
}

type VehiclesBulkMileageRegistrationJob {
  guid: ID!
  reportingPersonNationalId: String
  reportingPersonName: String
  originCode: String
  originName: String

  """When was the bulk request requested?"""
  dateRequested: DateTime

  """When did the bulk request start executing?"""
  dateStarted: DateTime

  """When did the bulk request execution finish"""
  dateFinished: DateTime
}

type VehiclesBulkMileageRegistrationJobHistory {
  history: [VehiclesBulkMileageRegistrationJob!]!
}

type VehiclesBulkMileageRegistrationRequestStatus {
  requestId: ID!
  jobsSubmitted: Int
  jobsFinished: Int
  jobsRemaining: Int
  jobsValid: Int
  jobsErrored: Int
}

type WatsonAssistantChatIdentityTokenResponse {
  token: String!
}

type WatsonAssistantChatSubmitFeedbackResponse {
  success: Boolean!
}

type WorkMachine {
  id: ID
  type: String
  status: String
  category: String
  subCategory: String
  dateLastInspection: DateTime
  registrationNumber: String
  registrationDate: String
  productionNumber: String
  productionCountry: String
  productionYear: Float
  licensePlateNumber: String
  ownerName: String
  ownerNumber: String
  ownerNationalId: String
  ownerAddress: String
  ownerPostcode: String
  supervisorName: String
  supervisorNationalId: String
  supervisorAddress: String
  supervisorPostcode: String
  importer: String
  insurer: String
  links: [WorkMachinesLink!]
  labels: [WorkMachinesLabel!]
}

type WorkMachinesPaginatedCollection {
  data: [WorkMachine!]!
  totalCount: Float!
  pageInfo: PageInfoDto!
  links: [WorkMachinesCollectionLink!]
  labels: [WorkMachinesLabel!]
}

type WorkMachinesLink {
  href: String
  rel: WorkMachinesAction
  method: String
  displayTitle: String
}

enum WorkMachinesAction {
  OWNER_CHANGE
  REQUEST_INSPECTION
  REGISTER_FOR_TRAFFIC
  SUPERVISOR_CHANGE
  CHANGE_STATUS
}

type WorkMachinesCollectionLink {
  href: String
  rel: WorkMachinesExternalLink
  method: String
  displayTitle: String
}

enum WorkMachinesExternalLink {
  SELF
  NEXT_PAGE
  EXCEL
  CSV
}

type WorkMachinesLabel {
  columnName: String
  displayTitle: String
  tooltip: String
}

type WorkMachinesCollectionDocument {
  downloadUrl: String
}

type MachineDetails {
  id: String!
  regNumber: String
  type: String
  subType: String
  status: String
  category: String
  ownerNumber: String
  plate: String
  disabled: Boolean
  supervisorName: String
  paymentRequiredForOwnerChange: Boolean
}

type WorkMachinesModel {
  name: String
}

type WorkMachinesCategory {
  name: String
  nameEn: String
  subCategoryName: String
  subCategoryNameEn: String
  registrationNumberPrefix: String
}

type WorkMachinesSubCategory {
  name: String
  nameEn: String
  parentCategoryName: String
  parentCategoryNameEn: String
  registrationNumberPrefix: String
}

type WorkMachinesTechInfoItem {
  variableName: String
  label: String
  labelEn: String
  type: String
  required: Boolean
  maxLength: String
  values: [WorkMachinesTechInfoListItem!]
}

type WorkMachinesTechInfoListItem {
  name: String
  nameEn: String
}

type WorkMachinesMachineType {
  name: String
}

type SeminarsCompanyValidationItem {
  nationalId: String
  mayPayWithAnAccount: Boolean
}

type SeminarsIndividualValidationItem {
  nationalID: String
  mayTakeCourse: Boolean
  errorMessage: String
  errorMessageEn: String
  errorCode: String
}

type UniversityCareersInstitution {
  id: UniversityCareersUniversityId!
  shortId: String!
  displayName: String
  logoUrl: String
}

enum UniversityCareersUniversityId {
  UNIVERSITY_OF_AKUREYRI
  BIFROST_UNIVERSITY
  HOLAR_UNIVERSITY
  AGRICULTURAL_UNIVERSITY_OF_ICELAND
  UNIVERSITY_OF_ICELAND
  ICELAND_UNIVERSITY_OF_THE_ARTS
}

type UniversityCareersStudentTrackMetadata {
  description: String!
  footer: String!
  unconfirmedData: String
}

type UniversityCareersStudentFile {
  type: String!
  locale: String!
  displayName: String!
  fileName: String!
}

type UniversityCareersStudentTrackTranscript {
  name: String!
  nationalId: String
  graduationDate: String!
  trackNumber: Int!
  institution: UniversityCareersInstitution!
  school: String!
  faculty: String!
  studyProgram: String
  degree: String
}

type UniversityCareersStudentTrack {
  transcript: UniversityCareersStudentTrackTranscript!

  """Extra info about any available files for download"""
  files: [UniversityCareersStudentFile!]!
  metadata: UniversityCareersStudentTrackMetadata!
  downloadServiceURL: String
}

type UniversityCareersStudentTrackTranscriptError {
  institution: UniversityCareersInstitution!

  """The error, raw"""
  error: String
}

type UniversityCareersStudentTrackHistory {
  transcripts: [UniversityCareersStudentTrackTranscript!]!
  errors: [UniversityCareersStudentTrackTranscriptError!]
}

type IntellectualPropertiesCountry {
  name: String
  code: String
}

type IntellectualPropertiesPerson {
  id: String
  name: String
  addressFull: String
  address: String
  postalCode: String
  city: String
  county: String
  country: IntellectualPropertiesCountry
  email: String
  telephone: String
  mobilePhone: String
  isForeign: Boolean
  nationalId: String
}

type IntellectualPropertiesApplicationLifecycle {
  createDate: DateTime
  applicationDate: DateTime
  applicationDateAvailable: DateTime
  applicationDatePublishedAsAvailable: DateTime
  applicationDeadlineDate: DateTime
  internationalRegistrationDate: DateTime
  registrationDate: DateTime
  maxValidObjectionDate: DateTime
  maxValidDate: DateTime
  publishDate: DateTime
  lastModified: DateTime
  announcementDate: DateTime
  expiryDate: DateTime
  unregistrationDate: DateTime
  renewalDate: DateTime
}

type IntellectualPropertiesMedia {
  mediaPath: String
  mediaType: String
}

type IntellectualPropertiesCategory {
  categoryNumber: String
  categoryDescription: String
}

type IntellectualPropertiesSpecification {
  description: String
  number: String
  designIsDecoration: String
  designShouldBeProtectedInColors: String
  specificationText: String
  specificationCount: String
}

type IntellectualPropertiesClassification {
  category: String!
  creationDate: DateTime
  type: String
  publicationDate: DateTime
  sequence: Float
}

type IntellectualPropertiesDesign implements IntellectualProperty {
  id: String!
  applicationNumber: String
  lifecycle: IntellectualPropertiesApplicationLifecycle!
  canRenew: Boolean
  status: String
  specification: IntellectualPropertiesSpecification
  classifications: [IntellectualPropertiesClassification!]
  owners: [IntellectualPropertiesPerson!]
  designers: [IntellectualPropertiesPerson!]
  agent: IntellectualPropertiesPerson
  classification: [IntellectualPropertiesClassification!]
}

type IntellectualPropertiesPCT {
  number: String
  date: DateTime
}

type IntellectualPropertiesPriority {
  applicationDate: DateTime
  creationDate: DateTime
  number: String
  countryCode: String
  countryName: String
}

type IntellectualPropertiesAnnualFee {
  id: ID!
  paymentDate: DateTime
  paymentDueDate: DateTime
  amount: String
  payor: String
  surcharge: Boolean!
}

type IntellectualPropertiesAnnualFeesInfo {
  nextPaymentDate: DateTime
  history: [IntellectualPropertiesAnnualFee!]
}

type IntellectualPropertiesMarketingAuthorization {
  icelandicAuthorizationNumber: String
  icelandicAuthorizationDate: DateTime
  foreignAuthorizationNumber: String
  foreignAuthorizationDate: DateTime
}

type IntellectualPropertiesSPC implements IntellectualPropertiesPatent & IntellectualProperty {
  id: String!
  name: String!

  """Parent patent number"""
  applicationNumber: String
  nameInOrgLanguage: String
  owners: [IntellectualPropertiesPerson!]
  agent: IntellectualPropertiesPerson
  annualFeesInfo: IntellectualPropertiesAnnualFeesInfo
  inventors: [IntellectualPropertiesPerson!]
  priorities: [IntellectualPropertiesPriority!]
  classifications: [IntellectualPropertiesClassification!]
  lifecycle: IntellectualPropertiesApplicationLifecycle
  canRenew: Boolean
  status: String
  statusText: String
  statusDate: DateTime
  specification: IntellectualPropertiesSpecification
  designers: [IntellectualPropertiesPerson!]
  number: String!
  medicine: String
  medicineForChildren: Boolean
  message: String
  marketingAuthorization: IntellectualPropertiesMarketingAuthorization
  grantPublishedInGazetteDate: DateTime
  publishedInGazetteDate: DateTime
}

type IntellectualPropertiesPatentIS implements IntellectualPropertiesPatent & IntellectualProperty {
  id: String!
  name: String!
  applicationNumber: String
  nameInOrgLanguage: String
  owners: [IntellectualPropertiesPerson!]
  agent: IntellectualPropertiesPerson
  annualFeesInfo: IntellectualPropertiesAnnualFeesInfo
  inventors: [IntellectualPropertiesPerson!]
  priorities: [IntellectualPropertiesPriority!]
  classifications: [IntellectualPropertiesClassification!]
  lifecycle: IntellectualPropertiesApplicationLifecycle
  canRenew: Boolean
  status: String
  statusText: String
  statusDate: DateTime
  specification: IntellectualPropertiesSpecification
  designers: [IntellectualPropertiesPerson!]
  registrationNumber: String

  """Possible IP application error state"""
  error: String
  alive: Boolean
  pct: IntellectualPropertiesPCT
  spcNumbers: [String!]
}

type IntellectualPropertiesEPApplicationLifecycle {
  publishDate: DateTime
  applicationDate: DateTime
  provisionDatePublishedInGazette: DateTime
  translationSubmissionDate: DateTime
}

type IntellectualPropertiesPatentEP implements IntellectualPropertiesPatent & IntellectualProperty {
  id: String!
  name: String!
  applicationNumber: String
  nameInOrgLanguage: String
  owners: [IntellectualPropertiesPerson!]
  agent: IntellectualPropertiesPerson
  annualFeesInfo: IntellectualPropertiesAnnualFeesInfo
  inventors: [IntellectualPropertiesPerson!]
  priorities: [IntellectualPropertiesPriority!]
  classifications: [IntellectualPropertiesClassification!]
  lifecycle: IntellectualPropertiesApplicationLifecycle
  canRenew: Boolean
  status: String
  statusText: String
  statusDate: DateTime
  specification: IntellectualPropertiesSpecification
  designers: [IntellectualPropertiesPerson!]
  registrationNumber: String

  """Possible IP application error state"""
  error: String
  alive: Boolean
  pct: IntellectualPropertiesPCT
  spcNumbers: [String!]
  epApplicationNumber: String
  nameInIcelandic: String
  epLifecycle: IntellectualPropertiesEPApplicationLifecycle
  epoStatus: String
  classificationType: String
  language: String
}

type IntellectualPropertiesResponse {
  items: [IntellectualProperty!]
  totalCount: Int!
}

type IntellectualPropertiesTrademark implements IntellectualProperty {
  id: String!
  applicationNumber: String
  lifecycle: IntellectualPropertiesApplicationLifecycle!
  canRenew: Boolean
  status: String
  specification: IntellectualPropertiesSpecification
  classifications: [IntellectualPropertiesClassification!]
  owners: [IntellectualPropertiesPerson!]
  designers: [IntellectualPropertiesPerson!]
  agent: IntellectualPropertiesPerson
  text: String
  type: TrademarkType
  typeReadable: String
  subType: TrademarkSubType
  registrationNumber: String
  markOwners: [IntellectualPropertiesPerson!]
  markCategories: [IntellectualPropertiesCategory!]
  markAgent: IntellectualPropertiesPerson
  isColorMark: Boolean
  imageCategories: String
  deleted: Boolean
  media: IntellectualPropertiesMedia
}

enum TrademarkType {
  AUDIO
  ANIMATION
  MULTIMEDIA
  TEXT
  TEXT_AND_IMAGE
  IMAGE
  UNKNOWN
}

enum TrademarkSubType {
  TRADEMARK
  CERTIFICATION_MARK
  COLLECTIVE_MARK
}

type IntellectualPropertiesImage {
  designNumber: Int
  imageNumber: Int
  image: String
}

type IntellectualPropertiesImageList {
  count: Int!
  images: [IntellectualPropertiesImage!]!
}

type SignatureCollectionSuccess {
  success: Boolean!
  reasons: [String!]
}

type SignatureCollectionAreaBase {
  id: ID!
  name: String!
}

type SignatureCollectionArea {
  id: ID!
  name: String!
  min: Float!
  max: Float
}

type SignatureCollectionNationalIds {
  nationalId: String!
  reason: String
}

type SignatureCollectionBulk {
  success: [SignatureCollectionNationalIds!]!
  failed: [SignatureCollectionNationalIds!]!
}

type SignatureCollectionCandidate {
  id: ID!
  nationalId: String!
  name: String!
  phone: String
  email: String
  collectionId: String
  partyBallotLetter: String
}

type SignatureCollectionListStatus {
  status: ListStatus!
}

"""
Lists have different statuses to indicate actions that can be preformed on them.
"""
enum ListStatus {
  """List is active and open for digital signatures"""
  Active

  """
  List is being reviewed by processing admin. Signatures can be uploaded on list. Comparison between lists and removal of signatures possible.
  """
  InReview

  """
  List has been reviewed by admin. This is a state that can be toggled to InReview. Comparison between lists and removal of signatures possible.
  """
  Reviewed

  """
  Collection has been marked as processed and endtime on lists can be extended.
  """
  Extendable

  """List is not active."""
  Inactive
}

type SignatureCollection {
  id: ID!
  endTime: DateTime!
  startTime: DateTime!
  isActive: Boolean!
  collectionType: SignatureCollectionCollectionType!
  name: String!
  areas: [SignatureCollectionArea!]!
  candidates: [SignatureCollectionCandidate!]!
  status: CollectionStatus!
}

enum SignatureCollectionCollectionType {
  OtherUnknown
  Parliamentary
  Presidential
  Referendum
  OtherSameRulesAsParliamentary
  LocalGovernmental
  SpecialLocalGovernmental
  ResidentPoll
}

"""Collection has different statuses to represent the state of collection"""
enum CollectionStatus {
  """Collection contains active list. In intial open time."""
  InitialActive

  """Collection contains active extended list."""
  Active

  """
  Collection has no open lists. Lists are being reviewed by processing admin.
  """
  InReview
  InInitialReview

  """
  All lists for collection have been reviewed, the collection has not been marked as processed.
  """
  Processing

  """Collection has been marked as processed."""
  Processed

  """Collection is not active, has been closed or has not yet started."""
  Inactive
}

type SignatureCollectionCollector {
  nationalId: String!
  name: String!
}

type SignatureCollectionOwnedList {
  id: ID!
  title: String!
  area: SignatureCollectionArea!
}

type SignatureCollectionListBase {
  id: ID!
  title: String!
  area: SignatureCollectionArea!
  endTime: DateTime!
  startTime: DateTime!
  active: Boolean
  collectionId: String!
  slug: String!
  numberOfSignatures: Float
  maxReached: Boolean!
  reviewed: Boolean!
}

type SignatureCollectionList {
  id: ID!
  title: String!
  area: SignatureCollectionArea!
  endTime: DateTime!
  startTime: DateTime!
  active: Boolean
  collectionId: String!
  slug: String!
  numberOfSignatures: Float
  maxReached: Boolean!
  reviewed: Boolean!
  candidate: SignatureCollectionCandidate!
  collectors: [SignatureCollectionCollector!]
}

type SignatureCollectionSignedList {
  id: ID!
  title: String!
  area: SignatureCollectionArea!
  endTime: DateTime!
  startTime: DateTime!
  active: Boolean
  collectionId: String!
  slug: String!
  numberOfSignatures: Float
  maxReached: Boolean!
  reviewed: Boolean!
  signedDate: DateTime!
  isDigital: Boolean!
  canUnsign: Boolean!
  isValid: Boolean!
  pageNumber: Float
}

type SignatureCollectionSigneeBase {
  nationalId: String!
  name: String!
  address: String
}

type SignatureCollectionCandidateLookUp {
  nationalId: String!
  name: String!
  address: String
  canCreate: Boolean!
  canCreateInfo: [String!]
}

type SignatureCollectionSignee {
  nationalId: String!
  name: String!
  address: String
  canCreate: Boolean!
  canCreateInfo: [String!]
  canSign: Boolean
  canSignInfo: [String!]
  area: SignatureCollectionAreaBase
  signature: SignatureCollectionSignature
  ownedLists: [SignatureCollectionOwnedList!]
  candidate: SignatureCollectionCandidate
  isOwner: Boolean!
}

type SignatureCollectionSignature {
  id: ID!
  listId: String!
  listTitle: String
  created: DateTime!
  signee: SignatureCollectionSigneeBase!
  valid: Boolean
  isDigital: Boolean!
  pageNumber: Float
}

type SignatureCollectionSlug {
  slug: String!
}

type SignatureCollectionAreaSummaryReport {
  id: ID!
  name: String!
  min: Float!
  max: Float
  lists: [SignatureCollectionListSummary!]!
}

type SignatureCollectionListSummary {
  candidateName: String!
  listName: String!
  partyBallotLetter: String!
  nrOfSignatures: Float!
  nrOfDigitalSignatures: Float!
  nrOfPaperSignatures: Float!
}

type FormSystemLanguageType {
  is: String
  en: String
}

type FormSystemListItem {
  id: String!
  label: FormSystemLanguageType
  description: FormSystemLanguageType
  value: String
  displayOrder: Int
  isSelected: Boolean
}

type FormSystemListType {
  id: String
  name: FormSystemLanguageType
  description: FormSystemLanguageType
  type: String
  isCommon: Boolean
}

type FormSystemFieldSettings {
  minValue: Int
  maxValue: Int
  minLength: Int
  maxLength: Int
  minDate: DateTime
  maxDate: DateTime
  minAmount: Int
  maxAmount: Int
  year: Int
  hasLink: Boolean
  url: String
  buttonText: FormSystemLanguageType
  hasPropertyInput: Boolean
  hasPropertyList: Boolean
  list: [FormSystemListItem]
  listType: String
  fileTypes: String
  fileMaxSize: Int
  maxFiles: Int
  timeInterval: String
  isLarge: Boolean
}

type FormSystemMonth {
  month: Int
  amount: Int
  days: [Int!]
}

type FormSystemScreen {
  id: String!
  sectionId: String!
  name: FormSystemLanguageType
  displayOrder: Int
  isHidden: Boolean
  multiset: Int
  callRuleset: Boolean
  fields: [FormSystemField]
}

type FormSystemSection {
  id: String!
  name: FormSystemLanguageType
  sectionType: String
  displayOrder: Int
  waitingText: FormSystemLanguageType
  isHidden: Boolean
  isCompleted: Boolean
  screens: [FormSystemScreen]
}

type FormSystemApplicationEventDto {
  created: DateTime
  eventType: String
  isFileEvent: Boolean
}

type FormSystemApplication {
  id: String!
  organizationName: FormSystemLanguageType
  formId: String
  formName: FormSystemLanguageType
  isTest: Boolean
  slug: String
  created: DateTime
  modified: DateTime
  submittedAt: DateTime
  dependencies: [FormSystemDependency]
  completed: [String]
  status: String
  events: [FormSystemApplicationEventDto]
  sections: [FormSystemSection]
}

type FormSystemValue {
  text: String
  number: Int
  date: DateTime
  nationalId: String
  name: String
  address: String
  postalCode: String
  municipality: String
  jobTitle: String
  altName: String
  homestayNumber: String
  propertyNumber: String
  totalDays: Int
  totalAmount: Int
  year: Int
  isNullReport: Boolean
  months: [FormSystemMonth]
  listValue: String
  email: String
  iskNumber: String
  checkboxValue: Boolean
  phoneNumber: String
  bankAccount: String
  time: String
  s3Key: String
}

type FormSystemValueDto {
  id: String
  order: Int
  json: FormSystemValue
  events: [FormSystemApplicationEventDto]
}

type FormSystemField {
  id: String!
  screenId: String!
  name: FormSystemLanguageType!
  displayOrder: Int
  description: FormSystemLanguageType
  isPartOfMultiset: Boolean!
  fieldSettings: FormSystemFieldSettings
  fieldType: String
  list: [FormSystemListItem]
  values: [FormSystemValueDto]
  isHidden: Boolean
  isRequired: Boolean!
}

type FormSystemFormCertificationType {
  id: String
  name: FormSystemLanguageType
  description: FormSystemLanguageType
  isCommon: Boolean
  certificationTypeId: String
  organizationCertificationId: String
}

type FormSystemFormCertificationTypeDto {
  id: String
  certificationTypeId: String
}

type FormSystemFormApplicant {
  id: String!
  description: FormSystemLanguageType
  applicantTypeId: String
  name: FormSystemLanguageType
  nameSuggestions: [FormSystemLanguageType!]
}

type FormSystemFieldType {
  id: String!
  name: FormSystemLanguageType!
  description: FormSystemLanguageType!
  isCommon: Boolean!
  fieldSettings: FormSystemFieldSettings
  values: [FormSystemValue]
}

type FormSystemOption {
  value: String!
  label: String!
  isSelected: Boolean!
}

type FormSystemDependency {
  parentProp: String
  childProps: [String]
  isSelected: Boolean
}

type FormSystemFormUrl {
  id: String
  organizationUrlId: String
  url: String
  isXroad: Boolean
  isTest: Boolean
  type: String
  method: String
}

type FormSystemForm {
  id: String!
  organizationId: String
  organizationNationalId: String
  organizationTitle: String
  organizationTitleEn: String
  organizationDisplayName: FormSystemLanguageType
  invalidationDate: DateTime
  hasPayment: Boolean
  beenPublished: Boolean
  derivedFrom: Int
  name: FormSystemLanguageType!
  slug: String
  created: DateTime!
  modified: DateTime!
  isTranslated: Boolean!
  applicationDaysToRemove: Int!
  stopProgressOnValidatingScreen: Boolean!
  completedMessage: FormSystemLanguageType
  certificationTypes: [FormSystemFormCertificationTypeDto]
  applicantTypes: [FormSystemFormApplicant]
  sections: [FormSystemSection]
  screens: [FormSystemScreen]
  fields: [FormSystemField]
  dependencies: [FormSystemDependency]
  status: String!
  urls: [FormSystemFormUrl]
}

type FormSystemOrganizationUrl {
  id: String
  url: String
  isXroad: Boolean
  isTest: Boolean
  type: String
  method: String
}

type FormSystemFormResponse {
  form: FormSystemForm
  fieldTypes: [FormSystemFieldType]
  certificationTypes: [FormSystemFormCertificationType]
  applicantTypes: [FormSystemFormApplicant]
  listTypes: [FormSystemListType]
  forms: [FormSystemForm]
  urls: [FormSystemOrganizationUrl]
  organizations: [FormSystemOption]
}

type FormSystemOrganization {
  id: String!
  name: FormSystemLanguageType
  nationalId: String
  forms: [FormSystemForm]
}

type FormSystemPermissionType {
  id: String
  name: FormSystemLanguageType
  description: FormSystemLanguageType
  isCommon: Boolean
}

type FormSystemOrganizationAdmin {
  organizationId: String
  selectedCertificationTypes: [String]
  selectedListTypes: [String]
  selectedFieldTypes: [String]
  certificationTypes: [FormSystemPermissionType]
  listTypes: [FormSystemPermissionType]
  fieldTypes: [FormSystemPermissionType]
  organizations: [FormSystemOption]
}

type FormSystemTranslation {
  translations: [JSON!]!
  sourceLanguageCode: String!
  targetLanguageCode: String!
  model: String!
}

type FormSystemApplicant {
  id: String!
  description: FormSystemLanguageType
  applicantTypeId: String
  name: FormSystemLanguageType
  nameSuggestions: [FormSystemLanguageType!]
}

type FormSystemOrganizationPermissionDto {
  permission: String
}

type HealthDirectorateOrganDonationOrgan {
  id: String!
  name: String!
}

type HealthDirectorateOrganDonationLimitations {
  hasLimitations: Boolean!

  """List of organs NOT to donate"""
  limitedOrgansList: [HealthDirectorateOrganDonationOrgan!]

  """Text to display if user does not want to donate all organs"""
  comment: String
}

type HealthDirectorateOrganDonor {
  isDonor: Boolean!
  limitations: HealthDirectorateOrganDonationLimitations
  isMinor: Boolean!
  isTemporaryResident: Boolean!
}

type HealthDirectorateOrganDonation {
  donor: HealthDirectorateOrganDonor
  organList: [HealthDirectorateOrganDonationOrgan!]
  locale: String
}

type HealthDirectorateDispensedItem {
  id: ID!
  name: String
  type: String
  dosageInstructions: String
  strength: String
  amount: String
  numberOfPackages: String
  quantity: String
  isExpired: Boolean
}

type HealthDirectorateDispensation {
  id: Int!
  agentName: String
  date: DateTime!
  lastDispensationDate: DateTime
  count: Float!
  items: [HealthDirectorateDispensedItem!]!
}

type HealthDirectoratePrescription {
  id: String!
  name: String
  type: String
  form: String
  url: String
  quantity: String
  category: HealthDirectoratePrescribedItemCategory
  prescriberName: String
  issueDate: DateTime!
  expiryDate: DateTime!
  dosageInstructions: String
  indication: String
  totalPrescribedAmount: String
  isRenewable: Boolean!
  renewalBlockedReason: HealthDirectoratePrescriptionRenewalBlockedReason
  renewalStatus: HealthDirectoratePrescriptionRenewalStatus
  amountRemaining: String
  dispensations: [HealthDirectorateDispensation!]!
}

enum HealthDirectoratePrescribedItemCategory {
  Regular
  Pn
  Regimen
  Owner
}

enum HealthDirectoratePrescriptionRenewalBlockedReason {
  PendingRequest
  RejectedRequest
  NotFullyDispensed
  IsRegiment
}

enum HealthDirectoratePrescriptionRenewalStatus {
  NUMBER_0
  NUMBER_1
  NUMBER_2
}

type HealthDirectoratePrescriptions {
  prescriptions: [HealthDirectoratePrescription!]!
}

type HealthDirectorateReferralContact {
  name: String
  profession: String
  department: String
}

type HealthDirectorateReferral {
  id: ID!
  serviceName: String
  createdDate: DateTime
  validUntilDate: DateTime
  stateDisplay: String
  reason: String
  fromContactInfo: HealthDirectorateReferralContact!
  toContactInfo: HealthDirectorateReferralContact!
}

type HealthDirectorateReferrals {
  referrals: [HealthDirectorateReferral!]!
}

type HealthDirectorateVaccinationsAge {
  years: Int
  months: Int
}

type HealthDirectorateVaccinationsInfo {
  id: Int!
  name: String
  date: DateTime
  age: HealthDirectorateVaccinationsAge
  url: String
  comment: String
  rejected: Boolean
  location: String
}

type HealthDirectorateVaccination {
  id: String!
  name: String
  description: String
  isFeatured: Boolean
  status: HealthDirectorateVaccinationStatusEnum
  statusName: String
  statusColor: String
  lastVaccinationDate: DateTime
  vaccinationsInfo: [HealthDirectorateVaccinationsInfo!]
  comments: [String!]
}

enum HealthDirectorateVaccinationStatusEnum {
  valid
  expired
  complete
  incomplete
  undocumented
  unvaccinated
  rejected
  undetermined
}

type HealthDirectorateVaccinations {
  vaccinations: [HealthDirectorateVaccination!]!
}

type HealthDirectorateWaitlist {
  id: ID!
  name: String!
  waitBegan: DateTime
  lastUpdated: DateTime
  organization: String!
  status: String!
}

type HealthDirectorateWaitlists {
  waitlists: [HealthDirectorateWaitlist!]!
}

type LawAndOrderAction {
  type: LawAndOrderActionTypeEnum
  title: String
  data: String
}

enum LawAndOrderActionTypeEnum {
  file
  url
  inbox
}

type LawAndOrderSubpoenaItem {
  label: String
  value: String
  link: String
  action: LawAndOrderAction
}

type LawAndOrderGroup {
  label: String
  items: [LawAndOrderSubpoenaItem!]
}

type LawAndOrderCourtCaseText {
  intro: String
  footnote: String
}

type LawAndOrderCourtCaseData {
  id: ID!
  caseNumberTitle: String
  hasBeenServed: Boolean
  groups: [LawAndOrderGroup!]
}

type LawAndOrderCourtCase {
  texts: LawAndOrderCourtCaseText
  actions: [LawAndOrderAction!]
  data: LawAndOrderCourtCaseData
}

type LawAndOrderCourtCasesState {
  label: String
  color: LawAndOrderCourtCaseStateTagColorEnum
}

enum LawAndOrderCourtCaseStateTagColorEnum {
  blue
  darkerBlue
  purple
  white
  red
  rose
  blueberry
  dark
  mint
  yellow
  disabled
  warn
}

type LawAndOrderCourtCasesCase {
  id: ID!
  caseNumberTitle: String
  type: String
  state: LawAndOrderCourtCasesState
}

type LawAndOrderCourtCases {
  cases: [LawAndOrderCourtCasesCase!]
}

type LawAndOrderDefenseChoice {
  caseId: String!
  choice: LawAndOrderDefenseChoice
  lawyersNationalId: String
}

type LawAndOrderLawyerChoices {
  id: String
  label: String
}

type LawAndOrderLawyer {
  title: String
  nationalId: String
}

type LawAndOrderLawyers {
  lawyers: [LawAndOrderLawyer!]
  choices: [LawAndOrderLawyerChoices!]
}

type LawAndOrderSubpoenaTexts {
  confirmation: String
  description: String
  information: String
  deadline: String
}

type LawAndOrderSubpoenaData {
  id: ID!
  hasBeenServed: Boolean
  chosenDefender: String
  canEditDefenderChoice: Boolean
  courtContactInfo: String
  defaultChoice: LawAndOrderDefenseChoiceEnum!
  hasChosen: Boolean
  defenderChoice: LawAndOrderDefenseChoiceEnum
  groups: [LawAndOrderGroup!]
}

enum LawAndOrderDefenseChoiceEnum {
  WAIVE
  CHOOSE
  DELAY
  DELEGATE
}

type LawAndOrderSubpoena {
  texts: LawAndOrderSubpoenaTexts
  actions: [LawAndOrderAction!]
  data: LawAndOrderSubpoenaData
}

type CostOfLivingCalculatorModel {
  numberOf: String!
  clothes: Int!
  medicalCost: Int!
  food: Int!
  otherServices: Int!
  transport: Int!
  communication: Int!
  total: Int!
  text: String!
  hobby: Int!
}

type CostOfLivingCalculatorResponseModel {
  items: [CostOfLivingCalculatorModel!]!
}

type WebVerdictsInputResponse {
  searchTerm: String
  courtLevel: String
  caseNumber: String
  page: Int
  caseTypes: [String!]
  caseCategories: [String!]
  keywords: [String!]
  laws: [String!]
  dateFrom: String
  dateTo: String
}

type WebVerdictJudge {
  name: String
  title: String
}

type WebVerdictItem {
  id: String!
  title: String!
  court: String!
  caseNumber: String!
  verdictDate: DateTime
  presidentJudge: WebVerdictJudge
  keywords: [String!]!
  presentings: String!
}

type WebVerdictsResponse {
  items: [WebVerdictItem!]!
  input: WebVerdictsInputResponse!
  total: Int!
}

type WebVerdictByIdItem {
  pdfString: String
  richText: JSON
  title: String!
  court: String!
  caseNumber: String!
  verdictDate: DateTime
  keywords: [String!]!
  presentings: String!
}

type WebVerdictByIdResponse {
  item: WebVerdictByIdItem!
}

type WebVerdictKeyword {
  label: String!
}

type WebVerdictKeywordsResponse {
  keywords: [WebVerdictKeyword!]!
}

type WebVerdictCaseType {
  label: String!
}

type WebVerdictCaseTypesResponse {
  caseTypes: [WebVerdictCaseType!]!
}

type WebVerdictCaseCategory {
  label: String!
}

type WebVerdictCaseCategoriesResponse {
  caseCategories: [WebVerdictCaseCategory!]!
}

type SecondarySchoolProgram {
  id: String!
  nameIs: String!
  nameEn: String!
  registrationEndDate: DateTime!
  isSpecialNeedsProgram: Boolean!
}

input GetTeamMembersInput {
  teamListId: String!
  lang: String = "is"
  page: Int
  size: Int
  queryString: String
  tags: [String!]
  tagGroups: JSON
  orderBy: GetTeamMembersInputOrderBy
}

input GetGenericListItemsInput {
  genericListId: String!
  lang: String = "is"
  page: Int
  size: Int
  queryString: String
  tags: [String!]
  tagGroups: JSON
  orderBy: GetGenericListItemsInputOrderBy
}

input GetBloodDonationRestrictionsInput {
  page: Int
  queryString: String
  tagKeys: [String!]
  lang: String = "is"
}

input AuthAdminTranslatedValueInput {
  locale: String!
  value: String!
}

input AuthAdminClientClaimInput {
  type: String!
  value: String!
}

input WebVerdictsInput {
  searchTerm: String
  courtLevel: String
  caseNumber: String
  page: Int
  caseTypes: [String!]
  caseCategories: [String!]
  keywords: [String!]
  laws: [String!]
  dateFrom: String
  dateTo: String
}

type Query {
  authActorDelegations(input: AuthActorDelegationInput): [AuthMergedDelegation!]!
  authDelegations(input: AuthDelegationsInput): [AuthDelegation!]!
  authDelegation(input: AuthDelegationInput!): AuthDelegation
  authApiScopes(input: AuthApiScopesInput!): [AuthApiScope!]! @deprecated(reason: "Should use authScopeTree instead.")
  authScopeTree(input: AuthApiScopesInput!): [AuthScopeTreeNode!]!
  authDomains(input: AuthDomainsInput!): [AuthDomain!]!
  consentsList: AuthConsentsPaginated!
  authLoginRestriction: AuthLoginRestriction!
  authPasskeyRegistrationOptions: AuthPasskeyRegistrationOptions!
  authPasskeyAuthenticationOptions: AuthPasskeyAuthenticationOptions!
  searchResults(query: SearcherInput!): SearchResult!
  webSearchAutocomplete(input: WebSearchAutocompleteInput!): WebSearchAutocomplete!
  consultationPortalAdviceByCaseId(input: ConsultationPortalCaseInput!): [ConsultationPortalAdviceResult!]!
  consultationPortalCaseById(input: ConsultationPortalCaseInput!): ConsultationPortalCaseResult!
  consultationPortalGetCases(input: ConsultationPortalCasesInput!): ConsultationPortalCasesAggregateResult!
  consultationPortalSubscriptionType(input: ConsultationPortalCaseInput!): ConsultationPortalCaseSubscriptionResult!
  consultationPortalDocument(documentId: String!): [ConsultationPortalDocumentInfoResult!]!
  consultationPortalAllTypes: ConsultationPortalAllTypesResult!
  consultationPortalStatistics: ConsultationPortalStatisticsResult!
  consultationPortalAllUserAdvices(input: ConsultationPortalUserAdvicesInput!): ConsultationPortalUserAdviceAggregate!
  consultationPortalUserEmail: ConsultationPortalUserEmailResult!
  consultationPortalUserSubscriptions: ConsultationPortalUserSubscriptionsAggregate!
  formSystemForm(input: FormSystemGetFormInput!): FormSystemFormResponse!
  formSystemForms(input: FormSystemGetFormsInput!): FormSystemFormResponse!
  formSystemApplication(input: FormSystemApplicationInput!): FormSystemApplication!
  formSystemOrganization(input: FormSystemGetOrganizationInput!): FormSystemOrganization!
  formSystemOrganizationAdmin(input: FormSystemGetOrganizationAdminInput!): FormSystemOrganizationAdmin!
  getNamespace(input: GetNamespaceInput!): Namespace
  getContentSlug(input: GetContentSlugInput!): ContentSlug
  getAlertBanner(input: GetAlertBannerInput!): AlertBanner
  getServicePortalAlertBanners(input: GetServicePortalAlertBannersInput!): [AlertBanner!]
  getGenericPage(input: GetGenericPageInput!): GenericPage
  getGenericOverviewPage(input: GetGenericOverviewPageInput!): GenericOverviewPage
  getErrorPage(input: GetErrorPageInput!): ErrorPage
  getOpenDataPage(input: GetOpenDataPageInput!): OpenDataPage!
  getOpenDataSubpage(input: GetOpenDataSubpageInput!): OpenDataSubpage!
  getOrganization(input: GetOrganizationInput!): Organization
  getOrganizationByTitle(input: GetOrganizationByTitleInput!): Organization
  getOrganizationByNationalId(input: GetOrganizationByNationalIdInput!): Organization
  getOrganizationPage(input: GetOrganizationPageInput!): OrganizationPage
  getOrganizationSubpage(input: GetOrganizationSubpageInput!): OrganizationSubpage
  getOrganizationSubpageById(input: GetOrganizationSubpageByIdInput!): OrganizationSubpage
  getServiceWebPage(input: GetServiceWebPageInput!): ServiceWebPage
  getAuctions(input: GetAuctionsInput!): [Auction!]!
  getAuction(input: GetAuctionInput!): Auction!
  getProjectPage(input: GetProjectPageInput!): ProjectPage
  getOrganizations(input: GetOrganizationsInput): Organizations!
  getOrganizationTags(input: GetOrganizationTagsInput!): OrganizationTags
  getAnchorPage(input: GetAnchorPageInput!): AnchorPage
  getAnchorPages(input: GetAnchorPagesInput!): [AnchorPage!]!
  getLifeEventPage(input: GetLifeEventPageInput!): LifeEventPage
  getLifeEventsForOverview(input: GetLifeEventsInput!): [LifeEventPage!]!
  getLifeEventsInCategory(input: GetLifeEventsInCategoryInput!): [LifeEventPage!]!
  getUrl(input: GetUrlInput!): Url
  getFrontpage(input: GetFrontpageInput!): Frontpage
  getArticleCategories(input: GetArticleCategoriesInput!): [ArticleCategory!]!
  getSingleArticle(input: GetSingleArticleInput!): Article
  getArticles(input: GetArticlesInput!): [Article!]!
  getGrants(input: GetGrantsInput!): GrantList!
  getSingleGrant(input: GetSingleGrantInput!): Grant
  getSingleNews(input: GetSingleNewsInput!): News
  getSingleEvent(input: GetSingleEventInput!): Event
  getEvents(input: GetEventsInput!): EventList!
  getNewsDates(input: GetNewsDatesInput!): [String!]!
  getNews(input: GetNewsInput!): NewsList!
  getMenu(input: GetMenuInput!): Menu
  getGroupedMenu(input: GetSingleMenuInput!): GroupedMenu
  getSubpageHeader(input: GetSubpageHeaderInput!): SubpageHeader
  getSingleSupportQNA(input: GetSingleSupportQNAInput!): SupportQNA
  getFeaturedSupportQNAs(input: GetFeaturedSupportQNAsInput!): [SupportQNA!]!
  getSupportQNAs(input: GetSupportQNAsInput!): [SupportQNA!]!
  getSupportQNAsInCategory(input: GetSupportQNAsInCategoryInput!): [SupportQNA!]!
  getSupportCategory(input: GetSupportCategoryInput!): SupportCategory
  getSupportCategories(input: GetSupportCategoriesInput!): [SupportCategory!]!
  getSupportCategoriesInOrganization(input: GetSupportCategoriesInOrganizationInput!): [SupportCategory!]!
  getPublishedMaterial(input: GetPublishedMaterialInput!): EnhancedAssetSearchResult!
  getTabSection(input: GetTabSectionInput!): TabSection
  getGenericTagBySlug(input: GetGenericTagBySlugInput!): GenericTag
  getGenericTagsInTagGroups(input: GetGenericTagsInTagGroupsInput!): [GenericTag!]
  getSingleManual(input: GetSingleManualInput!): Manual
  getCategoryPages(input: GetCategoryPagesInput!): [CategoryPage!]
  getSingleEntryTitleById(input: GetSingleEntryTitleByIdInput!): EntryTitle
  getCustomPage(input: GetCustomPageInput!): CustomPage
  getCustomSubpage(input: GetCustomSubpageInput!): CustomPage
  getGenericListItems(input: GetGenericListItemsInput!): GenericListItemResponse
  getGenericListItemBySlug(input: GetGenericListItemBySlugInput!): GenericListItem
  getTeamMembers(input: GetTeamMembersInput!): TeamMemberResponse
  getOrganizationParentSubpage(input: GetOrganizationParentSubpageInput!): OrganizationParentSubpage
  getOrganizationPageStandaloneSitemapLevel1(input: GetOrganizationPageStandaloneSitemapLevel1Input!): OrganizationPageStandaloneSitemap
  getOrganizationPageStandaloneSitemapLevel2(input: GetOrganizationPageStandaloneSitemapLevel2Input!): OrganizationPageStandaloneSitemapLevel2
  getBloodDonationRestrictionGenericTags(input: GetBloodDonationRestrictionGenericTagsInput!): BloodDonationRestrictionGenericTagList!
  getBloodDonationRestrictions(input: GetBloodDonationRestrictionsInput!): BloodDonationRestrictionList!
  getBloodDonationRestrictionDetails(input: GetBloodDonationRestrictionDetailsInput!): BloodDonationRestrictionDetails
  drivingLicense: DrivingLicense
  legacyDrivingLicense: DrivingLicense
  drivingLicenseTeachersV4: [TeacherV4!]!
  drivingLicenseTeachingRights: HasTeachingRights!
  drivingLicenseStudentInformation(nationalId: String!): StudentInformationResult!
  drivingLicenseApplicationEligibility(input: ApplicationEligibilityInput!): ApplicationEligibility!
  learnerMentorEligibility: ApplicationEligibility!
  drivingLicenseStudentAssessment: StudentAssessment
  drivingLicenseStudentCanGetPracticePermit(input: StudentCanGetPracticePermitInput!): StudentCanGetPracticePermit
  drivingLicenseQualityPhoto: DrivingLicenseQualityPhoto!
  drivingLicenseQualitySignature: DrivingLicenseQualitySignature!
  nationalRegistryUserV2: NationalRegistryXRoadPerson
  nationalRegistryUserV2ChildGuardianship(input: NationalRegistryXRoadChildGuardianshipInput!): NationalRegistryXRoadChildGuardianship
  nationalRegistryReligions: [NationalRegistryReligion!]
  drivingLicenseBookFindStudent(input: DrivingLicenseBookStudentsInput!): [DrivingLicenseBookStudent!]!
  drivingLicenseBookFindStudentForTeacher(input: DrivingLicenseBookStudentsInput!): [DrivingLicenseBookStudent!]!
  drivingLicenseBookStudentsForTeacher(licenseCategory: String!): [DrivingLicenseBookStudentForTeacher!]!
  drivingLicenseBookStudentForTeacher(input: DrivingLicenseBookStudentInput!): DrivingLicenseBookStudentOverview!
  drivingLicenseBookStudent(input: DrivingLicenseBookStudentInput!): DrivingLicenseBookStudentOverview!
  drivingLicenseBookUserBook: DrivingLicenseBookStudentOverview
  drivingLicenseBookPracticalDrivingLessons(input: PracticalDrivingLessonsInput!): [PracticalDrivingLesson!]!
  drivingLicenseBookSchoolForEmployee: DrivingLicenseBookSchool!
  drivingLicenseBookSchoolTypes: [DrivingSchoolType!]!
  friggOptions(input: EducationFriggOptionsListInput!): [EducationFriggKeyOptionModel!]
  friggSchoolsByMunicipality: [EducationFriggOrganizationModel!]
  innaPeriods: PeriodsModel!
  innaDiplomas: DiplomaModel!
  educationLicense: [EducationLicense!]!
  educationExamFamilyOverviews: [EducationExamFamilyOverview!]!
  educationExamResult(familyIndex: Int!): EducationExamResult!
  userFamilyExamResults: EducationUserFamilyCompulsorySchoolCareer!
  applicationApplication(locale: String, input: ApplicationApplicationInput!): Application
  applicationPaymentStatus(locale: String, applicationId: String!): ApplicationPayment
  applicationApplications(locale: String, input: ApplicationApplicationsInput): [Application!]
  attachmentPresignedURL(input: AttachmentPresignedUrlInput!): PresignedUrlResponse
  applicationApplicationsAdmin(locale: String, input: ApplicationApplicationsAdminInput!): [ApplicationAdmin!]
  applicationApplicationsInstitutionAdmin(locale: String, input: ApplicationApplicationsInstitutionAdminInput!): ApplicationAdminPaginatedResponse
  applicationApplicationsAdminStatistics(locale: String, input: ApplicationApplicationsAdminStatisticsInput!): [ApplicationStatistics!]
  genericLicenses(locale: String, input: GetGenericLicensesInput): [GenericUserLicense!]! @deprecated(reason: "Use genericLicenseCollection instead")
  genericLicenseCollection(locale: String, input: GetGenericLicensesInput!): GenericLicenseCollection!
  genericLicense(locale: String, input: GetGenericLicenseInput!): GenericUserLicense
  getTranslations(input: GetTranslationsInput!): JSON
  getApplicationInformation(applicationId: String!, nationalId: String!): ApplicationInformation!
  getParentalLeavesEntitlements(input: GetParentalLeavesEntitlementsInput!): ParentalLeaveEntitlement
  getParentalLeaves: [ParentalLeave!]
  getParentalLeavesEstimatedPaymentPlan(input: GetParentalLeavesEstimatedPaymentPlanInput!): [ParentalLeavePaymentPlan!]
  getParentalLeavesApplicationPaymentPlan(input: GetParentalLeavesApplicationPaymentPlanInput!): [ParentalLeavePaymentPlan!]
  getParentalLeavesPeriodEndDate(input: GetParentalLeavesPeriodEndDateInput!): ParentalLeavePeriodEndDate!
  getParentalLeavesPeriodLength(input: GetParentalLeavesPeriodLengthInput!): ParentalLeavePeriodLength!
  getUnions: [Union!]
  getPensionFunds: [PensionFund!]
  getPrivatePensionFunds: [PensionFund!]
  getPregnancyStatus: PregnancyStatus
  malwareScanStatus(filename: String!): MalwareScanStatus!
  documentV2(input: DocumentInput!, locale: String): DocumentV2
  documentsV2(input: DocumentsV2DocumentsInput!): DocumentsV2
  documentV2ConfirmActions(input: DocumentConfirmActionsInput!): DocumentConfirmActions
  documentV2PdfRenderer(input: DocumentPdfRendererInput!): DocumentPdfRenderer
  documentPageNumber(input: DocumentInput!): DocumentPageNumber
  getPaperMailInfo: PaperMailBody @deprecated(reason: "Up for removal")
  getDocument(input: GetDocumentInput!): DocumentDetails @deprecated(reason: "Up for removal")
  listDocuments: [Document!] @deprecated(reason: "Up for removal")
  listDocumentsV2(input: GetDocumentListInput!): DocumentListResponse @deprecated(reason: "Up for removal")
  getDocumentCategories: [DocumentCategory!] @deprecated(reason: "Up for removal")
  getDocumentTypes: [DocumentType!] @deprecated(reason: "Up for removal")
  getDocumentSenders: [DocumentSender!] @deprecated(reason: "Up for removal")
  getDocumentPageNumber(input: GetDocumentPageInput!): DocumentPageResponse! @deprecated(reason: "Up for removal")
  getProviderOrganisations: [Organisation!]!
  getProviderOrganisation(nationalId: String!): Organisation!
  getStatisticsTotal(input: StatisticsInput): ProviderStatistics!
  documentProviderPaperMailList(input: DocumentProviderPaperMailInput): DocumentProviderPaperMailResponse!
  documentProviderProvidedTypes: [DocumentProviderType!]!
  documentProviderProvidedCategories: [DocumentProviderCategory!]!
  healthInsuranceIsHealthInsured(input: IsHealthInsuredInput): Boolean!
  HealthInsuranceAccidentStatus(input: HealthInsuranceAccidentStatusInput!): AccidentNotificationStatus
  getUserProfile: UserProfile
  getUserProfileLocale: UserProfileLocale
  userProfileActorProfiles: UserProfileActorProfileResponse!
  UserProfileAdminProfile(nationalId: String!): UserProfileAdminProfile
  UserProfileAdminProfiles(query: String!): UserProfileAdminProfilesResponse!
  getApiCatalogue(input: GetApiCatalogueInput!): ApiCatalogue!
  getApiServiceById(input: GetApiServiceInput!): Service
  getOpenApi(input: GetOpenApiInput!): OpenApi!
  identity(input: IdentityInput): Identity
  companyRegistryCompany(input: RskCompanyInfoInput): RskCompany
  companyRegistryCompanies(input: RskCompanyInfoSearchInput!): RskCompanySearchItems!
  nationalRegistryUser: NationalRegistryUser @deprecated(reason: "Moving to NationalRegistryPerson")
  nationalRegistryPerson(useFakeData: Boolean): NationalRegistryPerson
  nationalRegistryChildren: [NationalRegistryChild!] @deprecated(reason: "Up for removal. Query children/childCustody for authenticated user instead")
  getHomestays(input: GetHomestaysInput!): [Homestay!]!
  getSyslumennAuctions: [SyslumennAuction!]!
  getRealEstateAgents: [RealEstateAgent!]!
  getLawyers: [Lawyer!]!
  getBrokers: [Broker!]!
  getOperatingLicenses(input: GetOperatingLicensesInput!): PaginatedOperatingLicenses!
  getOperatingLicensesCSV: OperatingLicensesCSV!
  getAlcoholLicences: [AlcoholLicence!]!
  getTemporaryEventLicences: [TemporaryEventLicence!]!
  getSyslumennCertificateInfo: CertificateInfoResponse!
  getSyslumennDistrictCommissionersAgencies: [DistrictCommissionerAgencies!]!
  getRealEstateAddress(input: String!): [AssetName!]!
  getVehicleType(input: String!): [AssetName!]!
  syslumennGetVehicle(input: GetVehicleInput!): VehicleRegistration!
  syslumennGetRegistryPerson(input: GetRegistryPersonInput!): RegistryPerson!
  searchForProperty(input: SearchForPropertyInput!): PropertyDetail
  searchForAllProperties(input: SearchForPropertyInput!): ManyPropertyDetail
  getSyslumennEstateRelations: EstateRelations!
  getMasterLicences: MasterLicencesResponse!
  getJourneymanLicences: JourneymanLicencesResponse!
  getProfessionRights: ProfessionRightsResponse!
  getSyslumennElectronicIDStatus(input: GetElectronicIDInput!): Boolean!
  getBurningPermits: BurningPermitsResponse!
  getReligiousOrganizations: ReligiousOrganizationsResponse!
  occupationalLicenses: OccupationalLicensesLicenses
  occupationalLicense(input: OccupationalLicensesLicenseInput!): OccupationalLicensesLicenseResponse
  socialInsurancePaymentPlan: SocialInsurancePaymentPlan
  socialInsurancePayments: SocialInsurancePayments
  getTemporaryCalculations(input: SocialInsuranceTemporaryCalculationInput!): SocialInsuranceTemporaryCalculation!
  getPensionCalculation(input: SocialInsurancePensionCalculationInput!): SocialInsurancePensionCalculationResponse!
  socialInsuranceIncomePlan: SocialInsuranceIncomePlan
  hasDisabilityLicense: Boolean!
  fiskistofaGetShipStatusForTimePeriod(input: FiskistofaGetShipStatusForTimePeriodInput!): FiskistofaExtendedShipStatusInformationResponse!
  fiskistofaUpdateShipStatusForTimePeriod(input: FiskistofaUpdateShipStatusForTimePeriodInput!): FiskistofaExtendedShipStatusInformationUpdateResponse!
  fiskistofaUpdateShipQuotaStatusForTimePeriod(input: FiskistofaUpdateShipQuotaStatusForTimePeriodInput!): FiskistofaQuotaStatusResponse!
  fiskistofaGetShipStatusForCalendarYear(input: FiskistofaGetShipStatusForCalendarYearInput!): FiskistofaShipStatusInformationResponse!
  fiskistofaUpdateShipStatusForCalendarYear(input: FiskistofaUpdateShipStatusForCalendarYearInput!): FiskistofaShipStatusInformationResponse!
  fiskistofaGetQuotaTypesForTimePeriod(input: FiskistofaGetQuotaTypesForTimePeriodInput!): FiskistofaQuotaTypeResponse!
  fiskistofaGetQuotaTypesForCalendarYear(input: FiskistofaGetQuotaTypesForCalendarYearInput!): FiskistofaQuotaTypeResponse!
  fiskistofaGetShips(input: FiskistofaGetShipsInput!): FiskistofaShipBasicInfoResponse!
  fiskistofaGetSingleShip(input: FiskistofaGetSingleShipInput!): FiskistofaSingleShipResponse!
  watsonAssistantChatIdentityToken(input: WatsonAssistantChatIdentityTokenInput!): WatsonAssistantChatIdentityTokenResponse!
  icelandicGovernmentInstitutionVacancies(input: IcelandicGovernmentInstitutionVacanciesInput!): IcelandicGovernmentInstitutionVacanciesResponse!
  icelandicGovernmentInstitutionVacancyById(input: IcelandicGovernmentInstitutionVacancyByIdInput!): IcelandicGovernmentInstitutionVacancyByIdResponse!
  aircraftRegistryAllAircrafts(input: AircraftRegistryAllAircraftsInput!): AircraftRegistryAllAircraftsResponse!
  shipRegistryShipSearch(input: ShipRegistryShipSearchInput!): ShipRegistryShipSearch!
  intellectualProperties: IntellectualPropertiesResponse
  intellectualPropertiesPatent(input: IntellectualPropertiesInput!): IntellectualPropertiesPatent
  intellectualPropertiesDesign(input: IntellectualPropertiesInput!): IntellectualPropertiesDesign
  intellectualPropertiesDesignImageList(input: IntellectualPropertiesInput!): IntellectualPropertiesImageList
  intellectualPropertiesDesignImage(input: IntellectualPropertiesDesignImagesInput!): IntellectualPropertiesImage
  intellectualPropertiesTrademarks: [IntellectualPropertiesTrademark!]
  intellectualPropertiesTrademark(input: IntellectualPropertiesInput!): IntellectualPropertiesTrademark
  getStatisticsByKeys(input: StatisticsQueryInput!): StatisticsQueryResponse!
  universityCareersStudentTrack(input: UniversityCareersStudentInfoByUniversityInput!): UniversityCareersStudentTrack
  universityCareersStudentTrackHistory(input: UniversityCareersStudentInfoInput!): UniversityCareersStudentTrackHistory!
  officialJournalOfIcelandAdvert(params: OfficialJournalOfIcelandAdvertSingleParams!): OfficialJournalOfIcelandAdvertResponse!
  officialJournalOfIcelandAdverts(input: OfficialJournalOfIcelandAdvertsInput!): OfficialJournalOfIcelandAdvertsResponse!
  officialJournalOfIcelandAdvertsSimilar(params: OfficialJournalOfIcelandAdvertSimilarParams!): OfficialJournalOfIcelandAdvertSimilarResponse!
  officialJournalOfIcelandDepartment(params: OfficialJournalOfIcelandAdvertSingleParams!): OfficialJournalOfIcelandAdvertsDepartmentResponse!
  officialJournalOfIcelandDepartments(params: OfficialJournalOfIcelandQueryInput!): OfficialJournalOfIcelandAdvertsDepartmentsResponse!
  officialJournalOfIcelandType(params: OfficialJournalOfIcelandAdvertSingleParams!): OfficialJournalOfIcelandAdvertsTypeResponse!
  officialJournalOfIcelandTypes(params: OfficialJournalOfIcelandTypesInput!): OfficialJournalOfIcelandAdvertsTypesResponse!
  officialJournalOfIcelandMainTypes(params: OfficialJournalOfIcelandMainTypesInput!): OfficialJournalOfIcelandMainTypesResponse!
  officialJournalOfIcelandMainCategories(params: OfficialJournalOfIcelandQueryInput!): OfficialJournalOfIcelandAdvertsMainCategoriesResponse!
  officialJournalOfIcelandCategories(params: OfficialJournalOfIcelandQueryInput!): OfficialJournalOfIcelandAdvertsCategoryResponse!
  officialJournalOfIcelandInstitutions(params: OfficialJournalOfIcelandQueryInput!): OfficialJournalOfIcelandAdvertsInstitutionsResponse!
  officialJournalOfIcelandCasesInProgress(params: OfficialJournalOfIcelandQueryInput!): OfficialJournalOfIcelandCasesInProgressResponse!
  OJOIAGetComments(input: OJOIAGetCommentsInput!): OJOIAGetCommentsResponse!
  officialJournalOfIcelandApplicationGetPrice(id: String!): OfficialJournalOfIcelandApplicationGetPriceResponse!
  officialJournalOfIcelandApplicationGetPdfUrl(id: String!): OfficialJournalOfIcelandApplicationGetPdfUrlResponse!
  OJOIAGetPdf(input: OJOIAIdInput!): OJOIAGetPdfResponse!
  officialJournalOfIcelandApplicationGetAttachments(input: OfficialJournalOfIcelandApplicationGetApplicationAttachmentInput!): OfficialJournalOfIcelandApplicationGetApplicationAttachments!
  officialJournalOfIcelandApplicationAdvertTemplate(input: OfficialJournalOfIcelandAdvertTemplateInput!): officialJournalOfIcelandApplicationAdvertTemplateResponse!
  officialJournalOfIcelandApplicationAdvertTemplateTypes: officialJournalOfIcelandApplicationAdvertTemplateTypesResponse!
  officialJournalOfIcelandApplicationGetUserInvolvedParties(input: GetUserInvolvedPartiesInput!): OfficialJournalOfIcelandApplicationGetUserInvolvedPartiesResponse!
  officialJournalOfIcelandApplicationGetMyUserInfo: OfficialJournalOfIcelandApplicationGetMyUserInfoResponse!
  OJOIAGetApplicationCase(input: OJOIAIdInput!): OJOIAApplicationCaseResponse!
  officialJournalOfIcelandApplicationInvolvedPartySignature(input: OfficialJournalOfIcelandApplicationInvolvedPartySignaturesInput!): OfficialJournalOfIcelandApplicationInvolvedPartySignatureResponse!
  getAllIcelandicNames: [IcelandicName!]!
  getIcelandicNameById(input: GetIcelandicNameByIdInput!): IcelandicName!
  getIcelandicNameByInitialLetter(input: GetIcelandicNameByInitialLetterInput!): [IcelandicName!]!
  getIcelandicNameBySearch(input: GetIcelandicNameBySearchInput!): [IcelandicName!]!
  endorsementSystemGetSingleEndorsement(input: FindEndorsementListInput!): ExistsEndorsementResponse!
  endorsementSystemGetEndorsements(input: PaginatedEndorsementInput!): PaginatedEndorsementResponse
  endorsementSystemFindEndorsementLists(input: PaginatedEndorsementListInput!): PaginatedEndorsementListResponse!
  endorsementSystemGetGeneralPetitionLists(input: EndorsementPaginationInput!): PaginatedEndorsementListResponse!
  endorsementSystemGetGeneralPetitionList(input: FindEndorsementListInput!): EndorsementList!
  endorsementSystemGetGeneralPetitionEndorsements(input: PaginatedEndorsementInput!): PaginatedEndorsementResponse
  endorsementSystemGetSingleEndorsementList(input: FindEndorsementListInput!): EndorsementList
  endorsementSystemUserEndorsements(input: EndorsementPaginationInput!): PaginatedEndorsementResponse!
  endorsementSystemUserEndorsementLists(input: PaginatedEndorsementListInput!): PaginatedEndorsementListResponse!
  getRegulation(input: GetRegulationInput!): JSON!
  getRegulations(input: GetRegulationsInput!): JSON!
  getRegulationsSearch(input: GetRegulationsSearchInput!): JSON!
  getRegulationsOptionSearch(input: GetRegulationsSearchInput!): JSON!
  getRegulationsYears: JSON!
  getRegulationsMinistries(input: GetRegulationsMinistriesInput!): JSON!
  getRegulationsLawChapters(input: GetRegulationsLawChaptersInput!): JSON!
  getDraftRegulation(input: GetDraftRegulationInput!): JSON!
  getRegulationImpactsByName(input: GetRegulationImpactsInput!): JSON!
  getShippedRegulations: [DraftRegulationShippedModel!]!
  getDraftRegulations(input: GetDraftRegulationsInput!): JSON!
  getRegulationFromApi(input: GetRegulationFromApiInput!): JSON!
  getRegulationOptionList(input: GetRegulationOptionListInput!): JSON!
  getDraftRegulationsMinistries: JSON!
  getDraftRegulationsLawChapters: JSON!
  getDraftRegulationPdfDownload(input: GetDraftRegulationPdfDownloadInput!): DraftRegulationPdfDownloadModel!
  getFinanceStatus: JSON!
  getFinanceStatusDetails(input: GetFinancialOverviewInput!): JSON
  getCustomerChargeType: FinanceCustomerChargeType
  getCustomerRecords(input: GetCustomerRecordsInput!): FinanceCustomerRecords
  getDocumentsList(input: GetFinanceDocumentsListInput!): FinanceDocumentsListModel!
  getFinanceDocument(input: GetFinanceDocumentInput!): FinanceDocumentModel
  getAnnualStatusDocument(input: GetAnnualStatusDocumentInput!): FinanceDocumentModel
  getCustomerTapControl: FinanceCustomerTapsControlModel
  getPaymentSchedule: PaymentScheduleModel
  getDebtStatus: FinanceDebtStatusModel!
  getPaymentScheduleById(input: GetFinancePaymentScheduleInput!): PaymentScheduleDetailModel!
  getAssessmentYears: FinanceAssessmentYears!
  getChargeTypesByYear(input: GetChargeTypesByYearInput!): FinanceChargeTypesByYear
  getChargeTypesDetailsByYear(input: GetChargeTypesDetailsByYearInput!): FinanceChargeTypeDetails!
  getChargeItemSubjectsByYear(input: GetChargeItemSubjectsByYearInput!): FinanceChargeItemSubjectsByYear!
  getChargeTypePeriodSubject(input: GetChargeTypePeriodSubjectInput!): FinanceChargeTypePeriodSubject!
  financialStatementsInaoClientTypes: [FinancialStatementsInaoClientType!]
  financialStatementsInaoCurrentUserClientType: FinancialStatementsInaoClientType
  financialStatementsInaoElections: [FinancialStatementsInaoElection!]
  financialStatementsInaoClientFinancialLimit(input: InaoClientFinancialLimitInput!): Float
  financialStatementsInaoConfig: [FinancialStatementsInaoConfig!]!
  financialStatementsInaoTaxInfo(year: String!): [FinancialStatementsInaoTaxInfo!]!
  vehiclesList(input: GetVehiclesForUserInput): VehiclesList
  vehiclesListV2(input: GetVehiclesListV2Input): VehiclesListV2
  getExcelVehicles: VehiclesExcel
  vehiclesDetail(input: GetVehicleDetailInput!): VehiclesDetail
  vehiclesSearchLimit: Float
  vehiclesSearch(input: GetVehicleSearchInput!): VehiclesVehicleSearch
  getPublicVehicleSearch(input: GetPublicVehicleSearchInput!): VehiclesPublicVehicleSearch
  vehicleMileageDetails(input: GetVehicleMileageInput!): VehicleMileageOverview
  vehicleBulkMileageRegistrationJobHistory: VehiclesBulkMileageRegistrationJobHistory
  vehicleBulkMileageRegistrationRequestStatus(input: BulkVehicleMileageRequestStatusInput!): VehiclesBulkMileageRegistrationRequestStatus
  vehicleBulkMileageRegistrationRequestOverview(input: BulkVehicleMileageRequestOverviewInput!): VehiclesBulkMileageRegistrationRequestOverview
  vehiclesListV3(input: VehiclesListInputV3): VehiclesCurrentListResponse
  vehiclesMileageRegistrationHistory(input: GetVehicleMileageInput): VehiclesMileageRegistrationHistory
  rightsPortalPaginatedAidOrNutrition: RightsPortalPaginatedAidsOrNutrition
  rightsPortalUserDentistRegistration(input: RightsPortalDentistBillsInput): RightsPortalUserDentistRegistration
  rightsPortalDentistStatus: RightsPortalDentistStatus
  rightsPortalCurrentDentist: RightsPortalDentistStatus
  rightsPortalPaginatedDentists(input: RightsPortalDentistsInput!): RightsPortalPaginatedDentists
  rightsPortalDrugPeriods: [RightsPortalDrugPeriod!]!
  rightsPortalDrugBills(input: RightsPortalDrugBillInput!): [RightsPortalDrugBill!]!
  rightsPortalDrugBillLines(input: RightsPortalDrugsBillLineInput!): [RightsPortalDrugBillLine!]!
  rightsPortalDrugs(input: RightsPortalDrugInput!): RightsPortalPaginatedDrug!
  rightsPortalDrugCertificates: [RightsPortalDrugCertificate!]!
  rightsPortalGetCertificateById(input: RightsPortalDrugCertificateInput!): RightsPortalDrugCertificate!
  rightsPortalHealthCenterRegistrationHistory(input: RightsPortalHealthCenterHistoryInput): RightsPortalHealthCenterRegistrationHistory
  rightsPortalHealthCenterDoctors(input: RightsPortalHealthCenterDoctorsInput!): [RightsPortalHealthCenterDoctors!]
  rightsPortalPaginatedHealthCenters: RightsPortalPaginatedHealthCenters
  rightsPortalPaginatedTherapies: RightsPortalPaginatedTherapies
  rightsPortalInsuranceConfirmation: RightsPortalInsuranceConfirmation
  rightsPortalInsuranceOverview: RightsPortalInsuranceOverview
  rightsPortalCopaymentStatus: RightsPortalCopaymentStatus
  rightsPortalCopaymentPeriods(input: RightsPortalCopaymentPeriodInput!): RightsPortalCopaymentPeriodResponse!
  rightsPortalCopaymentBills(input: RightsPortalCopaymentBillsInput!): RightsPortalCopaymentBillResponse!
  rightsPortalPaymentOverviewServiceTypes: RightsPortalPaymentOverviewServiceTypeResponse!
  rightsPortalPaymentOverview(input: RightsPortalPaymentOverviewInput!): RightsPortalPaymentOverviewResponse!
  rightsPortalPaymentOverviewDocument(input: RightsPortalPaymentOverviewDocumentInput!): RightsPortalPaymentOverviewDocumentResponse!
  assetsOverview(input: GetMultiPropertyInput!): PropertyOverview
  assetsDetail(input: GetRealEstateInput!): PropertyDetail
  assetsPropertyOwners(input: GetPagingTypes!): PropertyOwnersModel
  assetsUnitsOfUse(input: GetPagingTypes!): UnitsOfUseModel
  hmsLoansHistory: [HmsLoansHistory!]
  hmsLoansHistoryPdf: HmsLoansHistoryPdf
  hmsLoansPaymentHistory(input: GetHmsLoansPaymentHistoryInput!): [HmsLoansPaymentHistory!]
  housingBenefitsPayments(input: HousingBenefitsPaymentsInput!): HousingBenefitsPayments
  getIdentityDocument: [IdentityDocumentModel!]
  getIdentityDocumentChildren: [IdentityDocumentModelChild!]
  getPassport: Passport!
  airDiscountSchemeDiscounts: [AirDiscountSchemeDiscount!]!
  airDiscountSchemeFlightLegs(input: AirDiscountSchemeFlightLegsInput!): [AirDiscountSchemeFlightLeg!]!
  airDiscountSchemeUserAndRelationsFlights: [AirDiscountSchemeFlightLeg!]!
  userNotification(id: Float!, locale: String): NotificationResponse
  userNotifications(input: NotificationsInput, locale: String): Notifications
  adminNotifications(nationalId: String!, input: NotificationsInput, locale: String): AdminNotifications
  paymentCatalog(input: PaymentCatalogInput!): PaymentCatalogResponse!
  paymentsGetFlow(input: GetPaymentFlowInput!): PaymentsGetPaymentFlowResponse!
  paymentsGetVerificationStatus(input: GetPaymentFlowInput!): PaymentsGetVerificationStatus!
  paymentScheduleConditions: PaymentScheduleConditions
  paymentScheduleCompanyConditions: PaymentScheduleCompanyConditions
  paymentScheduleDebts: [PaymentScheduleDebts!]
  paymentScheduleEmployer: PaymentScheduleEmployer
  paymentScheduleInitialSchedule(input: GetInitialScheduleInput!): PaymentScheduleInitialSchedule
  paymentScheduleDistribution(input: GetScheduleDistributionInput!): PaymentScheduleDistribution
  isEmployerValid(input: GetIsEmployerValidInput!): Boolean!
  municipalitiesFinancialAidApplication(input: MunicipalitiesFinancialAidApplicationInput!): MunicipalitiesFinancialAidApplicationModel
  municipalitiesFinancialAidApplicationSignedUrl(input: MunicipalitiesFinancialAidGetSignedUrlInput!): MunicipalitiesFinancialAidSignedUrlModel!
  fishingLicenseShips: [FishingLicenseShip!]
  fishingLicenses(registrationNumber: Float!): [FishingLicenseLicense!]!
  validateMortgageCertificate(input: ValidateMortgageCertificateInput!): [MortgageCertificateValidationModel!]!
  requestCorrectionOnMortgageCertificate(input: RequestCorrectionOnMortgageCertificateInput!): RequestCorrectionOnMortgageCertificateModel!
  digitalTachographTachoNetExists(input: CheckTachoNetInput!): CheckTachoNetExists!
  vehicleOwnerchangeChecksByPermno(permno: String!): VehicleOwnerchangeChecksByPermno
  vehicleOwnerChangeValidation(answers: OwnerChangeAnswers!): OwnerChangeValidation
  vehicleCoOwnerChangeValidation(answers: CoOwnerChangeAnswers!): OwnerChangeValidation
  vehicleOperatorChangeChecksByPermno(permno: String!): VehicleOperatorChangeChecksByPermno
  vehicleOperatorChangeValidation(answers: OperatorChangeAnswers!): OperatorChangeValidation
  vehiclePlateOrderChecksByPermno(permno: String!): VehiclePlateOrderChecksByPermno
  vehiclePlateOrderValidation(answers: PlateOrderAnswers!): PlateOrderValidation
  myPlateOwnershipChecksByRegno(regno: String!): MyPlateOwnershipChecksByRegno
  plateAvailable(input: PlateAvailabilityInput!): PlateAvailability!
  vehicleBasicInfoByPermno(permno: String!): BasicVehicleInformation
  energyFundVehicleGrant(vin: String!): EnergyFundVehicleGrant
  energyFundVehicleDetailsWithGrant(permno: String!): EnergyFundVehicleDetailsWithGrant
  workMachinesPaginatedCollection(input: WorkMachinesCollectionInput): WorkMachinesPaginatedCollection
  workMachinesCollectionDocument(input: WorkMachinesCollectionDocumentInput): WorkMachinesCollectionDocument
  workMachine(input: WorkMachinesInput!): WorkMachine
  getWorkerMachineDetails(id: String!, rel: String!): MachineDetails!
  getWorkerMachinePaymentRequired(regNumber: String!): Boolean!
  getWorkerMachineByRegno(regno: String!, rel: String!): MachineDetails!
  getMachineModels(type: String!): [WorkMachinesModel!]!
  getMachineParentCategoryByTypeAndModel(input: WorkMachinesParentCategoryByTypeAndModelInput!): [WorkMachinesCategory!]!
  getMachineSubCategories(parentCategory: String!): [WorkMachinesSubCategory!]!
  getTechnicalInfoInputs(parentCategory: String!, subCategory: String!): [WorkMachinesTechInfoItem!]!
  getTypeByRegistrationNumber(registrationNumber: String!, applicationId: String!): WorkMachinesMachineType!
  seminarsVerIsCompanyValid(nationalId: String!): SeminarsCompanyValidationItem!
  areIndividualsValid(input: ValidateSeminarIndividualsInput!, courseID: String!, nationalIdOfRegisterer: String): [SeminarsIndividualValidationItem!]!
  administrationOfOccupationalSafetyAndHealthCourses: AdministrationofOccupationalSafetyandHealthCoursesResponseModel!
  universityGatewayPrograms: UniversityGatewayProgramsPaginated!
  universityGatewayProgram(input: UniversityGatewayGetPogramInput!): UniversityGatewayProgramDetails!
  universityGatewayProgramFilters: [UniversityGatewayProgramFilter!]!
  universityGatewayApplicationById(id: String!): [UniversityGatewayApplication!]!
  universityGatewayUniversities: [UniversityGatewayUniversity!]!
  sessionsList(input: SessionsInput!): SessionsPaginatedSessionResponse!
  authAdminTenant(id: String!): AuthAdminTenant!
  authAdminTenants: AuthAdminTenantsPayload!
  authAdminClients(input: AuthAdminClientsInput!): AuthAdminClientsPayload!
  authAdminClient(input: AuthAdminClientInput!): AuthAdminClient
  authAdminScope(input: ScopeInput!): AuthAdminScope!
  authAdminScopes(input: ScopesInput!): AuthAdminScopesPayload!
  authDelegationProviders: AuthDelegationProviderPayload!
  authAdminDelegationAdmin(nationalId: String!): DelegationAdminCustomModel!
  housingBenefitCalculatorCalculation(input: HousingBenefitCalculatorCalculationInput!): HousingBenefitCalculationModel!
  housingBenefitCalculatorSpecificSupportCalculation(input: HousingBenefitCalculatorSpecificSupportCalculationInput!): HousingBenefitCalculationModel!
  signatureCollectionIsOwner: SignatureCollectionSuccess!
  signatureCollectionCurrent: SignatureCollection!
  signatureCollectionAllOpenLists(input: SignatureCollectionIdInput!): [SignatureCollectionListBase!]!
  signatureCollectionListsForOwner(input: SignatureCollectionIdInput!): [SignatureCollectionList!]!
  signatureCollectionListsForUser(input: SignatureCollectionIdInput!): [SignatureCollectionListBase!]!
  signatureCollectionList(input: SignatureCollectionListIdInput!): SignatureCollectionList!
  signatureCollectionSignedList: [SignatureCollectionSignedList!]
  signatureCollectionSignatures(input: SignatureCollectionListIdInput!): [SignatureCollectionSignature!]
  signatureCollectionSignee: SignatureCollectionSignee!
  signatureCollectionCanSignFromPaper(input: SignatureCollectionCanSignFromPaperInput!): Boolean!
  signatureCollectionCollectors: [SignatureCollectionCollector!]!
  signatureCollectionListOverview(input: SignatureCollectionListIdInput!): SignatureCollectionListSummary!
  signatureCollectionAdminCanSignInfo(input: SignatureCollectionCanSignFromPaperInput!): SignatureCollectionSuccess!
  signatureCollectionAdminCurrent: SignatureCollection!
  signatureCollectionAdminLists(input: SignatureCollectionIdInput!): [SignatureCollectionList!]!
  signatureCollectionAdminList(input: SignatureCollectionListIdInput!): SignatureCollectionList!
  signatureCollectionAdminSignatures(input: SignatureCollectionListIdInput!): [SignatureCollectionSignature!]
  signatureCollectionAdminCandidateLookup(input: SignatureCollectionNationalIdInput!): SignatureCollectionCandidateLookUp!
  signatureCollectionAdminListStatus(input: SignatureCollectionListIdInput!): SignatureCollectionListStatus!
  signatureCollectionSignatureLookup(input: SignatureCollectionSignatureLookupInput!): [SignatureCollectionSignature!]!
  signatureCollectionAreaSummaryReport(input: SignatureCollectionAreaSummaryReportInput!): SignatureCollectionAreaSummaryReport!
  lawAndOrderCourtCasesList(locale: String): LawAndOrderCourtCases
  lawAndOrderCourtCaseDetail(input: LawAndOrderCourtCaseInput!, locale: String): LawAndOrderCourtCase
  lawAndOrderSubpoena(input: LawAndOrderSubpoenaInput!, locale: String): LawAndOrderSubpoena
  lawAndOrderLawyers(locale: String): LawAndOrderLawyers
  costOfLivingCalculator: CostOfLivingCalculatorResponseModel
  healthDirectorateOrganDonation(locale: String): HealthDirectorateOrganDonation!
  healthDirectorateVaccinations(locale: String): HealthDirectorateVaccinations!
  healthDirectorateWaitlists(locale: String): HealthDirectorateWaitlists!
  healthDirectorateReferrals(locale: String): HealthDirectorateReferrals!
  healthDirectoratePrescriptions(locale: String): HealthDirectoratePrescriptions!
  webVerdicts(input: WebVerdictsInput!): WebVerdictsResponse!
  webVerdictById(input: WebVerdictByIdInput!): WebVerdictByIdResponse
  webVerdictCaseTypes: WebVerdictCaseTypesResponse!
  webVerdictCaseCategories: WebVerdictCaseCategoriesResponse!
  webVerdictKeywords: WebVerdictKeywordsResponse!
  secondarySchoolProgramsBySchoolId(schoolId: String!, isFreshman: Boolean!): [SecondarySchoolProgram!]!
}

input AuthActorDelegationInput {
  delegationTypes: [AuthDelegationType!]
}

input AuthDelegationsInput {
  domain: String
  direction: AuthDelegationDirection
}

enum AuthDelegationDirection {
  outgoing
  incoming
}

input AuthDelegationInput {
  delegationId: String!
}

input AuthApiScopesInput {
  lang: String = "is"
  domain: String
  direction: AuthDomainDirection
}

enum AuthDomainDirection {
  outgoing
}

union AuthScopeTreeNode = AuthApiScope | AuthApiScopeGroup

input AuthDomainsInput {
  lang: String = "is"
  direction: AuthDomainDirection
}

input SearcherInput {
  queryString: String!
  types: [SearchableContentTypes!] = [webArticle, webSubArticle, webLifeEventPage, webDigitalIcelandService, webDigitalIcelandCommunityPage, webNews, webOrganizationSubpage, webOrganizationPage, webQNA, webLink, webProjectPage, webManual, webManualChapterItem]
  language: ContentLanguage = is
  size: Int
  page: Int
  tags: [Tag!]
  excludedTags: [Tag!]
  contentfulTags: [String!]
  countTag: [SearchableTags!] = [category, processentry, organization, referencedBy]
  countTypes: Boolean = false
  countProcessEntry: Boolean = false
  highlightResults: Boolean = false
  useQuery: String = "default"
  sort: SortField
  order: SortDirection = DESC
}

enum SearchableContentTypes {
  webArticle
  webSubArticle
  webLifeEventPage
  webDigitalIcelandService
  webDigitalIcelandCommunityPage
  webNews
  webOrganizationSubpage
  webOrganizationPage
  webQNA
  webLink
  webProjectPage
  webManual
  webManualChapterItem
}

enum ContentLanguage {
  is
  en
}

input Tag {
  type: SearchableTags!
  key: String!
}

enum SearchableTags {
  category
  processentry
  organization
  referencedBy
}

enum SortField {
  TITLE
  POPULAR
  RELEASE_DATE
}

enum SortDirection {
  DESC
  ASC
}

input WebSearchAutocompleteInput {
  singleTerm: String!
  language: ContentLanguage = is
  size: Int = 10
}

input ConsultationPortalCaseInput {
  caseId: Int = 0
}

input ConsultationPortalCasesInput {
  searchQuery: String
  policyAreas: [Float!]
  institutions: [Float!]
  caseStatuses: [Float!]
  caseTypes: [Float!]
  dateFrom: DateTime
  dateTo: DateTime
  orderBy: String
  pageNumber: Float
  pageSize: Float
}

input ConsultationPortalUserAdvicesInput {
  oldestFirst: Boolean
  searchQuery: String
  pageNumber: Float
  pageSize: Float
}

input FormSystemGetFormInput {
  id: String
}

input FormSystemGetFormsInput {
  nationalId: String
}

input FormSystemApplicationInput {
  id: String
}

input FormSystemGetOrganizationInput {
  id: String
}

input FormSystemGetOrganizationAdminInput {
  nationalId: String!
}

input GetNamespaceInput {
  namespace: String
  lang: String = "is-IS"
}

input GetContentSlugInput {
  id: String!
}

input GetAlertBannerInput {
  id: String!
  lang: String = "is-IS"
}

input GetServicePortalAlertBannersInput {
  lang: String = "is-IS"
}

input GetGenericPageInput {
  slug: String!
  lang: String = "is-IS"
}

input GetGenericOverviewPageInput {
  pageIdentifier: String!
  lang: String = "is-IS"
}

input GetErrorPageInput {
  errorCode: String!
  lang: String = "is-IS"
}

input GetOpenDataPageInput {
  lang: String = "is"
}

input GetOpenDataSubpageInput {
  lang: String = "is"
}

input GetOrganizationInput {
  slug: String
  lang: String = "is-IS"
}

input GetOrganizationByTitleInput {
  title: String!
  lang: String = "is-IS"
}

input GetOrganizationByNationalIdInput {
  nationalId: String!
  lang: String = "is-IS"
}

input GetOrganizationPageInput {
  slug: String!
  lang: String = "is"
}

input GetOrganizationSubpageInput {
  organizationSlug: String!
  slug: String!
  lang: String = "is"
}

input GetOrganizationSubpageByIdInput {
  id: String!
  lang: String = "is"
}

input GetServiceWebPageInput {
  slug: String!
  lang: String = "is"
}

input GetAuctionsInput {
  lang: String = "is-IS"
  organization: String
  year: Float
  month: Float
}

input GetAuctionInput {
  id: String!
  lang: String = "is-IS"
}

input GetProjectPageInput {
  slug: String!
  lang: String = "is-IS"
}

input GetOrganizationsInput {
  lang: String
  perPage: Int
  organizationTitles: [String!]
  referenceIdentifiers: [String!]
}

input GetOrganizationTagsInput {
  lang: String
}

input GetAnchorPageInput {
  slug: String!
  lang: String = "is-IS"
}

input GetAnchorPagesInput {
  lang: String = "is-IS"
}

input GetLifeEventPageInput {
  slug: String!
  lang: String = "is-IS"
}

input GetLifeEventsInput {
  lang: String = "is-IS"
}

input GetLifeEventsInCategoryInput {
  slug: String!
  lang: String = "is-IS"
}

input GetUrlInput {
  slug: String!
  lang: String = "is-IS"
}

input GetFrontpageInput {
  pageIdentifier: String!
  lang: String = "is"
}

input GetArticleCategoriesInput {
  lang: String = "is"
  size: Int = 100
}

input GetSingleArticleInput {
  slug: String!
  lang: String = "is"
}

input GetArticlesInput {
  lang: String = "is"
  category: String
  group: String
  subgroup: String
  organization: String
  size: Int = 100
  sort: SortField = TITLE
}

input GetGrantsInput {
  search: String
  lang: String = "is"
  page: Int = 1
  size: Int = 8
  sort: GetGrantsInputSortByEnum
  status: GetGrantsInputAvailabilityStatusEnum
  categories: [String!]
  types: [String!]
  organizations: [String!]
  funds: [String!]
}

enum GetGrantsInputSortByEnum {
  ALPHABETICAL
  RECENTLY_UPDATED
}

enum GetGrantsInputAvailabilityStatusEnum {
  OPEN
  CLOSED
}

input GetSingleGrantInput {
  id: String!
  lang: String = "is"
}

input GetSingleNewsInput {
  slug: String!
  lang: String = "is"
}

input GetSingleEventInput {
  slug: String!
  lang: String = "is"
}

input GetEventsInput {
  lang: String = "is"
  order: String = "desc"
  page: Int = 1
  size: Int = 10
  organization: String
  onlyIncludePastEvents: Boolean
}

input GetNewsDatesInput {
  lang: String = "is"
  order: String = "desc"
  tags: [String!]
  organization: String
}

input GetNewsInput {
  lang: String = "is"
  year: Int
  month: Int
  order: String = "desc"
  page: Int = 1
  size: Int = 10
  tags: [String!]
  organization: String
}

input GetMenuInput {
  name: String!
  lang: String = "is"
}

input GetSingleMenuInput {
  id: String!
  lang: String = "is"
}

input GetSubpageHeaderInput {
  id: String!
  lang: String = "is-IS"
}

input GetSingleSupportQNAInput {
  slug: String!
  lang: String = "is"
}

input GetFeaturedSupportQNAsInput {
  organization: String
  lang: String = "is"
  size: Int = 10
  category: String
  subCategory: String
}

input GetSupportQNAsInput {
  lang: String = "is-IS"
}

input GetSupportQNAsInCategoryInput {
  lang: String = "is-IS"
  slug: String!
}

input GetSupportCategoryInput {
  lang: String = "is-IS"
  slug: String!
}

input GetSupportCategoriesInput {
  lang: String = "is-IS"
}

input GetSupportCategoriesInOrganizationInput {
  lang: String = "is-IS"
  slug: String!
}

input GetPublishedMaterialInput {
  lang: String = "is"
  size: Int
  page: Int
  organizationSlug: String
  searchString: String = ""
  tags: [String!]!
  tagGroups: JSON!
  sort: JSON!
}

input GetTabSectionInput {
  lang: String = "is-IS"
  id: String!
}

input GetGenericTagBySlugInput {
  slug: String!
  lang: String = "is-IS"
}

input GetGenericTagsInTagGroupsInput {
  lang: String = "is-IS"
  tagGroupSlugs: [String!]
}

input GetSingleManualInput {
  slug: String!
  lang: String = "is"
}

union CategoryPage = Article | Manual

input GetCategoryPagesInput {
  lang: String = "is"
  category: String
  group: String
  subgroup: String
  organization: String
  size: Int = 100
  sort: SortField = TITLE
}

input GetSingleEntryTitleByIdInput {
  id: String!
  lang: String = "is"
}

input GetCustomPageInput {
  uniqueIdentifier: CustomPageUniqueIdentifier!
  lang: String = "is"
}

enum CustomPageUniqueIdentifier {
  PensionCalculator
  OfficialJournalOfIceland
  OfficialJournalOfIcelandHelp
  Vacancies
  Grants
  DirectorateOfLabourMyPages
  Verdicts
  BloodDonationRestrictions
}

input GetCustomSubpageInput {
  parentPageId: String!
  lang: String = "is"
  slug: String!
}

input GetGenericListItemBySlugInput {
  slug: String!
  lang: String = "is"
}

input GetOrganizationParentSubpageInput {
  slug: String!
  organizationPageSlug: String!
  lang: String = "is"
}

input GetOrganizationPageStandaloneSitemapLevel1Input {
  organizationPageSlug: String!
  categorySlug: String!
  lang: String = "is"
}

input GetOrganizationPageStandaloneSitemapLevel2Input {
  organizationPageSlug: String!
  categorySlug: String!
  lang: String = "is"
  subcategorySlug: String!
}

input GetBloodDonationRestrictionGenericTagsInput {
  lang: String = "is"
}

input GetBloodDonationRestrictionDetailsInput {
  id: String!
  lang: String = "is-IS"
}

input ApplicationEligibilityInput {
  applicationFor: String!
}

input StudentCanGetPracticePermitInput {
  studentSSN: String!
}

input NationalRegistryXRoadChildGuardianshipInput {
  childNationalId: String!
}

input DrivingLicenseBookStudentsInput {
  key: String!
  licenseCategory: String!
  cursor: String!
  limit: Float!
}

input DrivingLicenseBookStudentInput {
  nationalId: String!
  licenseCategory: String
}

input PracticalDrivingLessonsInput {
  bookId: String!
  id: String!
}

input EducationFriggOptionsListInput {
  type: String!
}

input ApplicationApplicationInput {
  id: String!
}

input ApplicationApplicationsInput {
  typeId: [String!]
  status: [String!]
  scopeCheck: Boolean
}

input AttachmentPresignedUrlInput {
  id: String!
  attachmentKey: String!
}

input ApplicationApplicationsAdminInput {
  typeId: [String!]
  status: [String!]
  nationalId: String!
}

input ApplicationApplicationsInstitutionAdminInput {
  status: [String!]
  nationalId: String!
  page: Float!
  count: Float!
  applicantNationalId: String
  from: String
  to: String
}

input ApplicationApplicationsAdminStatisticsInput {
  startDate: String!
  endDate: String!
}

input GetGenericLicensesInput {
  includedTypes: [String!]
  excludedTypes: [String!]
  force: Boolean
  onlyList: Boolean
}

input GetGenericLicenseInput {
  licenseType: String!
  licenseId: String
}

input GetTranslationsInput {
  namespaces: [String!]!
  lang: String!
}

input GetParentalLeavesEntitlementsInput {
  dateOfBirth: String!
}

input GetParentalLeavesEstimatedPaymentPlanInput {
  dateOfBirth: String!
  period: [Period!]!
}

input Period {
  from: String!
  to: String!
  ratio: String!
  approved: Boolean!
  paid: Boolean!
}

input GetParentalLeavesApplicationPaymentPlanInput {
  dateOfBirth: String!
  applicationId: String!
}

input GetParentalLeavesPeriodEndDateInput {
  startDate: String!
  length: String!
  percentage: String!
}

input GetParentalLeavesPeriodLengthInput {
  startDate: String!
  endDate: String!
  percentage: String!
}

"""The status of a malware scan"""
enum MalwareScanStatus {
  UNKNOWN
  SAFE
  UNSAFE
}

input DocumentInput {
  id: String!

  """Optional. For logging only."""
  provider: String

  """Optional. For logging only."""
  category: String
  pageSize: Float = 10
  includeDocument: Boolean = true
}

input DocumentsV2DocumentsInput {
  senderNationalId: [String!]
  dateFrom: DateTime
  dateTo: DateTime
  categoryIds: [String!]
  typeId: String
  subjectContains: String
  bookmarked: Boolean
  archived: Boolean
  opened: Boolean
  sortBy: DocumentsV2PageSort = Publication
  order: DocumentsV2PageOrder = Descending
  page: Int
  pageSize: Int
}

enum DocumentsV2PageSort {
  Date
  Publication
  Category
  Type
  Sender
  Subject
}

enum DocumentsV2PageOrder {
  Ascending
  Descending
}

input DocumentConfirmActionsInput {
  id: String!
  confirmed: Boolean
}

input DocumentPdfRendererInput {
  id: String!
  success: Boolean!
  error: String
  isCourtCase: Boolean
  actions: [String!]
}

input GetDocumentInput {
  id: String!
}

input GetDocumentListInput {
  senderKennitala: String
  dateFrom: String
  dateTo: String
  categoryId: String
  subjectContains: String
  typeId: String
  sortBy: String
  order: String
  opened: Boolean
  archived: Boolean
  bookmarked: Boolean
  page: Float
  pageSize: Float
  isLegalGuardian: Boolean = null
}

input GetDocumentPageInput {
  pageSize: Float!
  messageId: String!
}

input StatisticsInput {
  organisationId: String

  """Date format: YYYY-MM-DD"""
  fromDate: String

  """Date format: YYYY-MM-DD"""
  toDate: String
}

input DocumentProviderPaperMailInput {
  pageSize: Int
  page: Int
}

input IsHealthInsuredInput {
  date: DateTime
}

input HealthInsuranceAccidentStatusInput {
  ihiDocumentID: Float!
}

input GetApiCatalogueInput {
  limit: Int
  cursor: String
  query: String
  pricing: [String!]
  data: [String!]
  type: [String!]
  access: [String!]
}

input GetApiServiceInput {
  id: ID!
}

input GetOpenApiInput {
  instance: String!
  memberClass: String!
  memberCode: String!
  subsystemCode: String!
  serviceCode: String!
}

input IdentityInput {
  nationalId: String!
}

input RskCompanyInfoInput {
  nationalId: String!
}

input RskCompanyInfoSearchInput {
  searchTerm: String!
  first: Float!

  """Cursor for pagination as base64 encoded number"""
  after: String
}

input GetHomestaysInput {
  year: Float
}

input GetOperatingLicensesInput {
  searchBy: String
  pageNumber: Float
  pageSize: Float
}

input GetVehicleInput {
  vehicleId: String!
}

input GetRegistryPersonInput {
  nationalId: String
}

input SearchForPropertyInput {
  propertyNumber: String!
  propertyType: String
}

input GetElectronicIDInput {
  nationalId: String!
  phoneNumber: String!
}

input OccupationalLicensesLicenseInput {
  id: String!
  locale: String!
}

input SocialInsuranceTemporaryCalculationInput {
  incomeYear: Int!
  incomeTypes: [SocialInsuranceIncomeType!]
}

input SocialInsuranceIncomeType {
  incomeTypeNumber: Int
  incomeTypeCode: String
  incomeTypeName: String
  currencyCode: String
  incomeCategoryNumber: Int
  incomeCategoryCode: String
  incomeCategoryName: String
  amountJan: Int
  amountFeb: Int
  amountMar: Int
  amountApr: Int
  amountMay: Int
  amountJun: Int
  amountJul: Int
  amountAug: Int
  amountSep: Int
  amountOct: Int
  amountNov: Int
  amountDec: Int
}

input SocialInsurancePensionCalculationInput {
  typeOfBasePension: SocialInsurancePensionCalculationBasePensionType
  hasSpouse: Boolean
  livingCondition: SocialInsurancePensionCalculationLivingCondition
  startMonth: Int
  startYear: Int
  childCount: Int
  childSupportCount: Int
  ageOfFirst75DisabilityAssessment: Int
  livingConditionRatio: Int
  livingConditionAbroadInYears: Int
  taxCard: Int
  typeOfPeriodIncome: SocialInsurancePensionCalculationPeriodIncomeType
  income: Int
  pensionPayments: Int
  privatePensionPayments: Int
  otherIncome: Int
  capitalIncome: Int
  benefitsFromMunicipality: Int
  premium: Int
  installmentClaims: Int
  foreignBasicPension: Int
  birthMonth: Int
  birthYear: Int
  dateOfCalculations: String
}

enum SocialInsurancePensionCalculationBasePensionType {
  Retirement
  FishermanRetirement
  Disability
  Rehabilitation
  HalfRetirement
  NewSystem
  NewSystemDisability
  NewSystemPartialDisability
  NewSystemMedicalAndRehabilitation
}

enum SocialInsurancePensionCalculationLivingCondition {
  LivesAlone
  DoesNotLiveAlone
}

enum SocialInsurancePensionCalculationPeriodIncomeType {
  Month
  Year
}

input FiskistofaGetShipStatusForTimePeriodInput {
  shipNumber: Float!
  timePeriod: String!
}

input FiskistofaUpdateShipStatusForTimePeriodInput {
  shipNumber: Float!
  timePeriod: String!
  changes: [FiskistofaCategoryChange!]!
}

input FiskistofaCategoryChange {
  id: Float!
  catchChange: Float!
  catchQuotaChange: Float!
}

input FiskistofaUpdateShipQuotaStatusForTimePeriodInput {
  shipNumber: Float!
  timePeriod: String!
  change: FiskistofaQuotaCategoryChange!
}

input FiskistofaQuotaCategoryChange {
  id: Float!
  nextYearFromQuota: Float
  nextYearQuota: Float
  quotaShare: Float
  allocatedCatchQuota: Float
}

input FiskistofaGetShipStatusForCalendarYearInput {
  shipNumber: Float!
  year: String!
}

input FiskistofaUpdateShipStatusForCalendarYearInput {
  shipNumber: Float!
  year: String!
  changes: [FiskistofaCategoryChange!]!
}

input FiskistofaGetQuotaTypesForTimePeriodInput {
  timePeriod: String!
}

input FiskistofaGetQuotaTypesForCalendarYearInput {
  year: String!
}

input FiskistofaGetShipsInput {
  shipName: String!
}

input FiskistofaGetSingleShipInput {
  shipNumber: Float!
}

input WatsonAssistantChatIdentityTokenInput {
  email: String!
  name: String!
  userID: String!
}

input IcelandicGovernmentInstitutionVacanciesInput {
  language: VacanciesGetLanguageEnum
  institution: String
}

enum VacanciesGetLanguageEnum {
  IS
  EN
  ONLYEN
  ONLYIS
}

input IcelandicGovernmentInstitutionVacancyByIdInput {
  id: String!
  language: VacanciesVacancyIdGetLanguageEnum
}

enum VacanciesVacancyIdGetLanguageEnum {
  IS
  EN
  ONLYEN
  ONLYIS
}

input AircraftRegistryAllAircraftsInput {
  pageNumber: Float!
  pageSize: Float!
  searchTerm: String
}

input ShipRegistryShipSearchInput {
  qs: String!
}

input IntellectualPropertiesInput {
  key: String!
}

input IntellectualPropertiesDesignImagesInput {
  designId: String!
  designNumber: String!
  imageNumber: String!
  size: String
}

input StatisticsQueryInput {
  sourceDataKeys: [String!]!
  dateFrom: DateTime
  dateTo: DateTime
  numberOfDataPoints: Float
  interval: Float
}

input UniversityCareersStudentInfoByUniversityInput {
  universityId: UniversityCareersUniversityId!
  trackNumber: Float!
  locale: String!
}

input UniversityCareersStudentInfoInput {
  locale: String!
}

input OfficialJournalOfIcelandAdvertSingleParams {
  id: String!
}

input OfficialJournalOfIcelandAdvertsInput {
  search: String
  page: Int
  pageSize: Int
  department: [String!]
  type: [String!]
  category: [String!]
  involvedParty: [String!]
  dateFrom: String
  dateTo: String
}

input OfficialJournalOfIcelandAdvertSimilarParams {
  id: String!
}

input OfficialJournalOfIcelandQueryInput {
  search: String
  page: Int
  pageSize: Int
}

input OfficialJournalOfIcelandTypesInput {
  search: String
  department: String
  page: Int
  pageSize: Int
}

input OfficialJournalOfIcelandMainTypesInput {
  department: String
  page: Int
  pageSize: Int
}

input OJOIAGetCommentsInput {
  id: ID!
}

"""Input dto that represents the id of the application"""
input OJOIAIdInput {
  id: ID!
  showDate: Boolean = true
}

input OfficialJournalOfIcelandApplicationGetApplicationAttachmentInput {
  applicationId: String!
  attachmentType: String!
}

input OfficialJournalOfIcelandAdvertTemplateInput {
  type: officialJournalOfIcelandApplicationAdvertTemplateTypeEnum!
}

input GetUserInvolvedPartiesInput {
  applicationId: ID!
}

input OfficialJournalOfIcelandApplicationInvolvedPartySignaturesInput {
  involvedPartyId: String!
}

input GetIcelandicNameByIdInput {
  id: Float!
}

input GetIcelandicNameByInitialLetterInput {
  initialLetter: String!
}

input GetIcelandicNameBySearchInput {
  q: String!
}

input FindEndorsementListInput {
  listId: String!
}

input PaginatedEndorsementInput {
  listId: String!
  limit: Float
  before: String
  after: String
}

input PaginatedEndorsementListInput {
  tags: [EndorsementListControllerFindByTagsTagsEnum!]!
  limit: Float
  before: String
  after: String
}

enum EndorsementListControllerFindByTagsTagsEnum {
  generalPetition
}

input EndorsementPaginationInput {
  tags: [EndorsementListControllerFindByTagsTagsEnum!]!
  limit: Float
  before: String
  after: String
}

input GetRegulationInput {
  viewType: RegulationViewTypes!
  name: String!
  date: String
  isCustomDiff: Boolean
  earlierDate: String
}

enum RegulationViewTypes {
  current
  diff
  original
  d
}

input GetRegulationsInput {
  type: String!
  page: Float
}

input GetRegulationsSearchInput {
  q: String
  rn: String
  ch: String
  year: Int
  yearTo: Int
  iA: Boolean
  iR: Boolean
  page: Int
}

input GetRegulationsMinistriesInput {
  slugs: [String!]
}

input GetRegulationsLawChaptersInput {
  tree: Boolean
  slugs: [String!]
}

input GetDraftRegulationInput {
  draftId: String!
}

input GetRegulationImpactsInput {
  regulation: String!
}

input GetDraftRegulationsInput {
  page: Float!
}

input GetRegulationFromApiInput {
  regulation: String!
  date: String
}

input GetRegulationOptionListInput {
  names: [String!]
}

"""Get a download URL for a draft regulation"""
input GetDraftRegulationPdfDownloadInput {
  """Id of the draft regulation"""
  draftId: String!
}

input GetFinancialOverviewInput {
  orgID: String!
  chargeTypeID: String!
}

input GetCustomerRecordsInput {
  chargeTypeID: [String!]
  dayFrom: String!
  dayTo: String!
}

input GetFinanceDocumentsListInput {
  dayFrom: String!
  dayTo: String!
  listPath: String!
}

input GetFinanceDocumentInput {
  documentID: String!
}

input GetAnnualStatusDocumentInput {
  year: String!
}

input GetFinancePaymentScheduleInput {
  scheduleNumber: String!
}

input GetChargeTypesByYearInput {
  year: String!
}

input GetChargeTypesDetailsByYearInput {
  year: String!
  typeId: String!
}

input GetChargeItemSubjectsByYearInput {
  year: String!
  typeId: String!
  nextKey: String!
}

input GetChargeTypePeriodSubjectInput {
  year: String!
  typeId: String!
  subject: String!
  period: String!
}

input InaoClientFinancialLimitInput {
  clientType: String!
  year: String!
}

input GetVehiclesForUserInput {
  pageSize: Float!
  page: Float!
  type: VehicleUserTypeEnum
  showDeregeristered: Boolean!
  showHistory: Boolean!
  dateFrom: DateTime
  dateTo: DateTime
  permno: String
}

enum VehicleUserTypeEnum {
  eigandi
  medeigandi
  umradamadur
}

input GetVehiclesListV2Input {
  pageSize: Float!
  page: Float!

  """Filter to only show vehicles requiring mileage registration"""
  onlyMileage: Boolean
  showOwned: Boolean = true
  showCoowned: Boolean = true
  showOperated: Boolean = true
  permno: String
}

input GetVehicleDetailInput {
  permno: String!
  regno: String
  vin: String
}

input GetVehicleSearchInput {
  search: String!
}

input GetPublicVehicleSearchInput {
  search: String!
}

input GetVehicleMileageInput {
  permno: String!
}

input BulkVehicleMileageRequestStatusInput {
  requestId: ID!
}

input BulkVehicleMileageRequestOverviewInput {
  locale: String!
  guid: ID!
}

input VehiclesListInputV3 {
  pageSize: Float!
  page: Float!
  filterOnlyRequiredMileageRegistration: Boolean
  query: String
}

input RightsPortalDentistBillsInput {
  dateFrom: DateTime
  dateTo: DateTime
}

input RightsPortalDentistsInput {
  contractType: String!
  limit: Float
  before: String
  after: String
  pageNumber: Float
  nameStartsWith: String
}

input RightsPortalDrugBillInput {
  paymentPeriodId: ID!
}

input RightsPortalDrugsBillLineInput {
  billId: ID!
  paymentPeriodId: ID!
}

input RightsPortalDrugInput {
  nameStartsWith: String
  limit: Float
  pageNumber: Float
  before: String
  after: String
}

input RightsPortalDrugCertificateInput {
  id: Float!
}

input RightsPortalHealthCenterHistoryInput {
  dateFrom: DateTime
  dateTo: DateTime
}

input RightsPortalHealthCenterDoctorsInput {
  id: String!
}

input RightsPortalCopaymentPeriodInput {
  dateFrom: DateTime!
  dateTo: DateTime!
}

input RightsPortalCopaymentBillsInput {
  periodId: Int!
}

input RightsPortalPaymentOverviewInput {
  dateFrom: DateTime!
  dateTo: DateTime!
  serviceTypeCode: String!
}

input RightsPortalPaymentOverviewDocumentInput {
  documentId: Int!
}

input GetMultiPropertyInput {
  cursor: String
  limit: Float
}

input GetRealEstateInput {
  assetId: String!
}

input GetPagingTypes {
  assetId: String!
  cursor: String
  limit: Float
}

input GetHmsLoansPaymentHistoryInput {
  loanId: Float!
}

input HousingBenefitsPaymentsInput {
  dateFrom: DateTime
  dateTo: DateTime
  pageNumber: Int
  pageSize: Int
  paymentOrigin: Int
  month: String

  """False display's all. True display payments only"""
  payments: Boolean = false
}

input AirDiscountSchemeFlightLegsInput {
  airline: String
  flightLeg: AirDiscountSchemeTravelInput
  period: AirDiscountSchemePeriodInput!
  state: [AirDiscountSchemeFlightLegState!]
  age: AirDiscountSchemeRangeInput!
  gender: AirDiscountSchemeFlightLegGender
  postalCode: Int
  nationalId: String
  isExplicit: Boolean
}

input AirDiscountSchemeTravelInput {
  from: String
  to: String
}

input AirDiscountSchemePeriodInput {
  from: DateTime!
  to: DateTime!
}

enum AirDiscountSchemeFlightLegState {
  AWAITING_DEBIT
  SENT_DEBIT
  AWAITING_CREDIT
  SENT_CREDIT
  CANCELLED
}

input AirDiscountSchemeRangeInput {
  from: Int!
  to: Int!
}

enum AirDiscountSchemeFlightLegGender {
  kk
  kvk
  x
  manneskja
}

input NotificationsInput {
  limit: Int
  before: String
  after: String
}

input PaymentCatalogInput {
  performingOrganizationID: String
}

input GetPaymentFlowInput {
  id: String!
}

input GetInitialScheduleInput {
  totalAmount: Float!
  disposableIncome: Float!
  type: PaymentScheduleType!
}

input GetScheduleDistributionInput {
  monthAmount: Float
  monthCount: Float
  scheduleType: PaymentScheduleType!
  totalAmount: Float!
}

input GetIsEmployerValidInput {
  companyId: String!
}

input MunicipalitiesFinancialAidApplicationInput {
  id: String!
}

input MunicipalitiesFinancialAidGetSignedUrlInput {
  id: String!
}

input ValidateMortgageCertificateInput {
  properties: [Properties!]!
}

input Properties {
  propertyNumber: String!
  propertyType: String!
}

input RequestCorrectionOnMortgageCertificateInput {
  propertyNumber: String!
  identityData: IdentityData!
  userProfileData: UserProfileData!
}

input IdentityData {
  nationalId: String!
  name: String!
  address: Address!
}

input Address {
  streetAddress: String!
  city: String!
  postalCode: String!
}

input UserProfileData {
  email: String!
  mobilePhoneNumber: String!
}

input CheckTachoNetInput {
  firstName: String!
  lastName: String!
  birthDate: DateTime!
  birthPlace: String!
  drivingLicenceNumber: String!
  drivingLicenceIssuingCountry: String!
}

input OwnerChangeAnswers {
  pickVehicle: OwnerChangeAnswersPickVehicle!
  vehicle: OwnerChangeAnswersVehicle!
  vehicleMileage: OwnerChangeAnswersVehicleMileage!
  seller: OwnerChangeAnswersUser!
  buyer: OwnerChangeAnswersUser!
  buyerCoOwnerAndOperator: [OwnerChangeAnswersBuyerOrCoOwner!]
  buyerMainOperator: OwnerChangeAnswersMainOperator
  insurance: OwnerChangeAnswersInsurance
}

input OwnerChangeAnswersPickVehicle {
  plate: String!
}

input OwnerChangeAnswersVehicle {
  salePrice: String
  date: String!
}

input OwnerChangeAnswersVehicleMileage {
  value: String
}

input OwnerChangeAnswersUser {
  nationalId: String!
  email: String!
}

input OwnerChangeAnswersBuyerOrCoOwner {
  nationalId: String!
  email: String!
  type: String!
  wasRemoved: String
}

input OwnerChangeAnswersMainOperator {
  nationalId: String!
}

input OwnerChangeAnswersInsurance {
  value: String!
}

input CoOwnerChangeAnswers {
  pickVehicle: CoOwnerChangeAnswersPickVehicle!
  vehicleMileage: CoOwnerChangeAnswersVehicleMileage!
  owner: CoOwnerChangeAnswersUser!
  ownerCoOwners: [CoOwnerChangeAnswersOwnerCoOwners!]
  coOwners: [CoOwnerChangeAnswersCoOwners!]
}

input CoOwnerChangeAnswersPickVehicle {
  plate: String!
}

input CoOwnerChangeAnswersVehicleMileage {
  value: String
}

input CoOwnerChangeAnswersUser {
  nationalId: String!
  email: String!
}

input CoOwnerChangeAnswersOwnerCoOwners {
  nationalId: String!
  email: String!
  wasRemoved: String
}

input CoOwnerChangeAnswersCoOwners {
  nationalId: String!
  email: String!
  wasRemoved: String
}

input OperatorChangeAnswers {
  pickVehicle: OperatorChangeAnswersPickVehicle!
  vehicleMileage: OperatorChangeAnswersVehicleMileage!
  owner: OperatorChangeAnswersUser!
  oldOperators: [OperatorChangeAnswersOperators!]
  operators: [OperatorChangeAnswersOperators!]
  mainOperator: OperatorChangeAnswersMainOperator
}

input OperatorChangeAnswersPickVehicle {
  plate: String!
}

input OperatorChangeAnswersVehicleMileage {
  value: String
}

input OperatorChangeAnswersUser {
  nationalId: String!
}

input OperatorChangeAnswersOperators {
  nationalId: String!
  wasRemoved: String
}

input OperatorChangeAnswersMainOperator {
  nationalId: String!
}

input PlateOrderAnswers {
  pickVehicle: PlateOrderAnswersPickVehicle!
  plateSize: PlateOrderAnswersPlateSize!
  plateDelivery: OperatorChangeAnswersPlateDelivery!
}

input PlateOrderAnswersPickVehicle {
  plate: String!
}

input PlateOrderAnswersPlateSize {
  frontPlateSize: [String!]
  rearPlateSize: [String!]
}

input OperatorChangeAnswersPlateDelivery {
  deliveryMethodIsDeliveryStation: String
  deliveryStationTypeCode: String
  includeRushFee: [String!]
}

input PlateAvailabilityInput {
  regno: String!
}

input WorkMachinesCollectionInput {
  searchQuery: String
  pageNumber: Float
  pageSize: Float
  orderBy: String
  showDeregisteredMachines: Boolean
  supervisorRegistered: Boolean
  onlyInOwnerChangeProcess: Boolean
  locale: String
}

input WorkMachinesCollectionDocumentInput {
  fileType: WorkMachinesFileType
}

enum WorkMachinesFileType {
  CSV
  EXCEL
}

input WorkMachinesInput {
  id: String!
  locale: String!
}

input WorkMachinesParentCategoryByTypeAndModelInput {
  type: String!
  model: String!
}

input ValidateSeminarIndividualsInput {
  individuals: [SeminarIndividual!]!
}

input SeminarIndividual {
  nationalId: String
  email: String
}

input UniversityGatewayGetPogramInput {
  id: String!
}

input SessionsInput {
  limit: Int
  before: String
  after: String
  nationalId: String
  order: Order
  toDate: DateTime
  fromDate: DateTime
}

enum Order {
  ASC
  DESC
}

input AuthAdminClientsInput {
  tenantId: String!
}

input AuthAdminClientInput {
  tenantId: String!
  clientId: String!
  includeArchived: Boolean
}

input ScopeInput {
  tenantId: String!
  scopeName: String!
}

input ScopesInput {
  tenantId: String!
}

input HousingBenefitCalculatorCalculationInput {
  numberOfHouseholdMembers: Float!
  totalMonthlyIncome: Float!
  totalAssets: Float!
  housingCostsPerMonth: Float!
}

input HousingBenefitCalculatorSpecificSupportCalculationInput {
  numberOfHouseholdMembers: Float!
  housingCostsPerMonth: Float!
}

input SignatureCollectionIdInput {
  collectionId: String!
}

input SignatureCollectionListIdInput {
  listId: String!
}

input SignatureCollectionCanSignFromPaperInput {
  signeeNationalId: String!
  listId: String!
}

input SignatureCollectionNationalIdInput {
  nationalId: String!
}

input SignatureCollectionSignatureLookupInput {
  collectionId: String!
  nationalId: String!
}

input SignatureCollectionAreaSummaryReportInput {
  areaId: String!
  collectionId: String!
}

input LawAndOrderCourtCaseInput {
  id: String!
}

input LawAndOrderSubpoenaInput {
  id: String!
}

input WebVerdictByIdInput {
  id: String!
}

type Mutation {
  createAuthDelegation(input: CreateAuthDelegationInput!): AuthDelegation!
  updateAuthDelegation(input: UpdateAuthDelegationInput!): AuthDelegation! @deprecated(reason: "Use patchAuthDelegation instead for increased consistency.")
  patchAuthDelegation(input: PatchAuthDelegationInput!): AuthDelegation!
  deleteAuthDelegation(input: DeleteAuthDelegationInput!): Boolean!
  patchAuthConsent(input: PatchAuthConsentInput!): Boolean!
  createAuthLoginRestriction(input: CreateAuthLoginRestrictionInput!): AuthLoginRestriction!
  removeAuthLoginRestriction: Boolean!
  authPasskeyVerifyRegistration(input: AuthPasskeyRegistrationObject!): AuthPasskeyRegistrationVerification!
  authDeletePasskey: Boolean!
  consultationPortalPostAdvice(input: ConsultationPortalPostAdviceInput!): Boolean
  consultationPortalDeleteSubscriptionType(input: ConsultationPortalCaseInput!): Boolean
  consultationPortalPostSubscriptionType(input: ConsultationPortalPostCaseSubscriptionTypeInput!): Boolean
  consultationPortalPostUserEmail(input: ConsultationPortalPostEmailCommandInput!): Boolean
  consultationPortalPostSubscriptions(input: ConsultationPortalUserSubscriptionsCommandInput!): Boolean
  createFormSystemForm(input: FormSystemCreateFormInput!): FormSystemFormResponse!
  deleteFormSystemForm(input: FormSystemDeleteFormInput!): Boolean
  updateFormSystemForm(input: FormSystemUpdateFormInput!): Boolean
  createFormSystemApplication(input: CreateFormSystemApplicationInput!): Boolean!
  updateFormSystemApplicationDependencies(input: UpdateFormSystemApplicationDependenciesInput!): Boolean!
  submitFormSystemApplication(input: FormSystemApplicationInput!): Boolean!
  submitFormSystemScreen(input: SubmitFormSystemScreenInput!): Boolean!
  createFormSystemField(input: FormSystemCreateFieldInput!): FormSystemField!
  updateFormSystemField(input: FormSystemUpdateFieldInput!): Boolean
  deleteFormSystemField(input: FormSystemDeleteFieldInput!): Boolean
  updateFormSystemFieldsDisplayOrder(input: FormSystemUpdateFieldsDisplayOrderInput!): Boolean
  createFormSystemListItem(input: FormSystemCreateListItemInput!): FormSystemListItem!
  deleteFormSystemListItem(input: FormSystemDeleteListItemInput!): Boolean
  updateFormSystemListItem(input: FormSystemUpdateListItemInput!): Boolean
  updateFormSystemListItemsDisplayOrder(input: FormSystemUpdateListItemsDisplayOrderInput!): Boolean
  createFormSystemOrganization(input: FormSystemGetOrganizationInput!): FormSystemOrganization!
  createFormSystemScreen(input: FormSystemCreateScreenInput!): FormSystemScreen!
  deleteFormSystemScreen(input: FormSystemDeleteScreenInput!): Boolean
  updateFormSystemScreen(input: FormSystemUpdateScreenInput!): FormSystemScreen
  updateFormSystemScreensDisplayOrder(input: FormSystemUpdateScreensDisplayOrderInput!): Boolean
  createFormSystemSection(input: FormSystemCreateSectionInput!): FormSystemSection!
  deleteFormSystemSection(input: FormSystemDeleteSectionInput!): Boolean
  updateFormSystemSection(input: FormSystemUpdateSectionInput!): FormSystemSection
  updateFormSystemSectionsDisplayOrder(input: FormSystemUpdateSectionsDisplayOrderInput!): Boolean
  formSystemTranslation(input: FormSystemTranslationInput!): FormSystemTranslation!
  createFormSystemApplicant(input: CreateFormSystemApplicantInput!): FormSystemApplicant!
  deleteFormSystemApplicant(input: DeleteFormSystemApplicantInput!): Boolean
  updateFormSystemApplicant(input: UpdateFormSystemApplicantInput!): Boolean
  createFormSystemCertification(input: CreateFormSystemCertificationInput!): FormSystemFormCertificationTypeDto!
  deleteFormSystemCertification(input: DeleteFormSystemCertificationInput!): Boolean
  createFormSystemOrganizationPermission(input: FormSystemUpdateOrganizationPermissionInput!): FormSystemOrganizationPermissionDto!
  deleteFormSystemOrganizationPermission(input: FormSystemUpdateOrganizationPermissionInput!): Boolean
  drivingLicenseBookCreatePracticalDrivingLesson(input: CreatePracticalDrivingLessonInput!): PracticalDrivingLesson!
  drivingLicenseBookUpdatePracticalDrivingLesson(input: UpdatePracticalDrivingLessonInput!): DrivingLicenseBookSuccess!
  drivingLicenseBookDeletePracticalDrivingLesson(input: DeletePracticalDrivingLessonInput!): DrivingLicenseBookSuccess!
  drivingLicenseBookCreateDrivingSchoolTestResult(input: CreateDrivingSchoolTestResultInput!): DrivingLicenceTestResultId!
  drivingLicenseBookAllowPracticeDriving(input: DrivingLicenseBookStudentInput!): DrivingLicenseBookSuccess!
  fetchEducationSignedLicenseUrl(input: FetchEducationSignedLicenseUrlInput!): EducationSignedLicense
  createApplication(locale: String, input: CreateApplicationInput!): Application
  updateApplication(locale: String, input: UpdateApplicationInput!): Application
  updateApplicationExternalData(locale: String, input: UpdateApplicationExternalDataInput!): Application
  addAttachment(input: AddAttachmentInput!): Application
  deleteAttachment(input: DeleteAttachmentInput!): Application
  submitApplication(input: SubmitApplicationInput!): Application
  assignApplication(input: AssignApplicationInput!): Application
  deleteApplication(input: DeleteApplicationInput!): Application
  generatePkPass(input: GeneratePkPassInput!): GenericPkPass!
  generatePkPassQrCode(input: GeneratePkPassInput!): GenericPkPassQrCode!
  verifyLicenseBarcode(input: VerifyLicenseBarcodeInput!): VerifyLicenseBarcodeResult!
  verifyPkPass(input: VerifyPkPassInput!): GenericPkPassVerification! @deprecated(reason: "Should use verifyLicenseBarcode instead of verifyPkPass")
  createUploadUrl(filename: String!): PresignedPost!
  postPaperMailInfo(input: PostRequestPaperInput!): PaperMailBody @deprecated(reason: "Up for removal")
  documentsV2MarkAllAsRead: DocumentV2MarkAllMailAsRead
  postMailActionV2(input: DocumentsV2MailActionInput!): DocumentMailAction
  postMailAction(input: PostMailActionResolverInput!): ActionMailBody @deprecated(reason: "Up for removal")
  postBulkMailAction(input: PostBulkMailActionResolverInput!): BulkMailAction @deprecated(reason: "Up for removal")
  updateOrganisation(id: String!, input: UpdateOrganisationInput!): Organisation!
  createAdministrativeContact(organisationId: String!, input: CreateContactInput!): Contact
  updateAdministrativeContact(organisationId: String!, administrativeContactId: String!, contact: UpdateContactInput!): Contact!
  createTechnicalContact(organisationId: String!, input: CreateContactInput!): Contact
  updateTechnicalContact(organisationId: String!, technicalContactId: String!, contact: UpdateContactInput!): Contact!
  createHelpdesk(organisationId: String!, input: CreateHelpdeskInput!): Helpdesk
  updateHelpdesk(organisationId: String!, helpdeskId: String!, helpdesk: UpdateHelpdeskInput!): Helpdesk!
  documentProviderPostProvidedType(input: DocumentProviderCategoriesAndTypesPostInput!): DocumentProviderType!
  documentProviderPutProvidedType(input: DocumentProviderCategoriesAndTypesPutInput!): DocumentProviderType!
  documentProviderPostProvidedCategory(input: DocumentProviderCategoriesAndTypesPostInput!): DocumentProviderCategory!
  documentProviderPutProvidedCategory(input: DocumentProviderCategoriesAndTypesPutInput!): DocumentProviderCategory!
  createTestProvider(input: CreateProviderInput!): ClientCredentials!
  updateTestEndpoint(input: UpdateEndpointInput!): AudienceAndScope!
  runEndpointTests(input: RunEndpointTestsInput!): [TestResult!]!
  createProvider(input: CreateProviderInput!): ClientCredentials!
  updateEndpoint(input: UpdateEndpointInput!): AudienceAndScope!
  createProfile(input: CreateUserProfileInput!): UserProfile
  updateProfile(input: UpdateUserProfileInput!): UserProfile
  deleteIslykillValue(input: DeleteIslykillValueInput!): UserProfile
  createSmsVerification(input: CreateSmsVerificationInput!): Response
  createEmailVerification(input: CreateEmailVerificationInput!): Response
  addUserProfileDeviceToken(input: UserDeviceTokenInput!): UserDeviceToken!
  deleteUserProfileDeviceToken(input: UserDeviceTokenInput!): DeleteTokenResponse!
  userProfileConfirmNudge: Boolean!
  userProfileUpdateActorProfile(input: UserProfileUpdateActorProfileInput!): UserProfileActorProfile!
  UserProfileAdminUpdateProfile(nationalId: String!, input: UpdateUserProfileInput!): UserProfileAdminProfile!
  contactUs(input: ContactUsInput!): CommunicationResponse!
  tellUsAStory(input: TellUsAStoryInput!): CommunicationResponse!
  genericForm(input: GenericFormInput!): CommunicationResponse!
  serviceWebForms(input: ServiceWebFormsInput!): CommunicationResponse!
  contactUsZendeskTicket(input: ContactUsInput!): CommunicationResponse!
  emailSignupSubscription(input: EmailSignupInput!): EmailSignupResponse!
  watsonAssistantChatSubmitFeedback(input: WatsonAssistantChatSubmitFeedbackInput!): WatsonAssistantChatSubmitFeedbackResponse!
  OJOIAPostComment(input: OJOIAPostCommentInput!): OfficialJournalOfIcelandApplicationPostCommentResponse!
  officialJournalOfIcelandApplicationGetPresignedUrl(input: OfficialJournalOfIcelandApplicationGetPresignedUrlInput!): OfficialJournalOfIcelandApplicationGetPresignedUrlResponse!
  officialJournalOfIcelandApplicationAddAttachment(input: OfficialJournalOfIcelandApplicationAddApplicationAttachmentInput!): OfficialJournalOfIcelandApplicationAddApplicationAttachmentResponse!
  officialJournalOfIcelandApplicationDeleteAttachment(input: OfficialJournalOfIcelandApplicationDeleteApplicationAttachmentInput!): OfficialJournalOfIcelandApplicationAddApplicationAttachmentResponse!
  OJOIAPostApplication(input: OJOIAIdInput!): Boolean!
  updateIcelandicNameById(input: UpdateIcelandicNameInput!): IcelandicName!
  createIcelandicName(input: CreateIcelandicNameInput!): IcelandicName!
  deleteIcelandicNameById(input: DeleteIcelandicNameByIdInput!): DeleteNameResponse!
  endorsementSystemEndorseList(input: CreateEndorsementInput!): Endorsement!
  endorsementSystemUnendorseList(input: FindEndorsementListInput!): Boolean!
  endorsementSystemCreateEndorsementList(input: CreateEndorsementListDto!): EndorsementList!
  endorsementSystemUpdateEndorsementList(input: UpdateEndorsementListInput!): EndorsementList!
  endorsementSystemCloseEndorsementList(input: FindEndorsementListInput!): EndorsementList!
  endorsementSystemOpenEndorsementList(input: OpenListInput!): EndorsementList!
  endorsementSystemLockEndorsementList(input: FindEndorsementListInput!): EndorsementList!
  endorsementSystemUnlockEndorsementList(input: FindEndorsementListInput!): EndorsementList!
  endorsementSystemsendPdfEmail(input: sendPdfEmailInput!): sendPdfEmailResponse!
  endorsementSystemExportList(input: ExportEndorsementListInput!): ExportUrlResponse!
  regulationCreatePresignedPost(input: CreateRegulationPresignedPostInput!): JSON!
  createDraftRegulation(input: CreateDraftRegulationInput!): JSON!
  updateDraftRegulationById(input: EditDraftRegulationInput!): JSON!
  deleteDraftRegulation(input: DeleteDraftRegulationInput!): DeleteDraftRegulationModel!
  createDraftRegulationCancel(input: CreateDraftRegulationCancelInput!): DraftRegulationCancelModel!
  updateDraftRegulationCancel(input: UpdateDraftRegulationCancelInput!): DraftRegulationCancelModel!
  deleteDraftRegulationCancel(input: DeleteDraftRegulationCancelInput!): DeleteDraftRegulationModel!
  createDraftRegulationChange(input: CreateDraftRegulationChangeInput!): DraftRegulationChangeModel!
  updateDraftRegulationChange(input: UpdateDraftRegulationChangeInput!): DraftRegulationChangeModel!
  deleteDraftRegulationChange(input: DeleteDraftRegulationChangeInput!): DeleteDraftRegulationModel!
  vehicleMileagePost(input: PostVehicleMileageInput!): VehicleMileageDetail
  vehicleMileagePut(input: PutVehicleMileageInput!): VehicleMileagePutModel
  vehicleMileagePostV2(input: PostVehicleMileageInput!): VehicleMileagePostResponse
  vehicleMileagePutV2(input: PutVehicleMileageInput!): VehicleMileagePutResponse
  vehicleBulkMileagePost(input: PostVehicleBulkMileageInput!): VehiclesBulkMileageReadingResponse
  rightsPortalRegisterDentist(input: RightsPortalDentistRegisterInput!): RightsPortalDentistRegisterResponse!
  rightsPortalDrugsCalculator(input: RightsPortalDrugCalculatorInput!): RightsPortalDrugCalculatorResponse!
  rightsPortalRegisterHealthCenter(input: RightsPortalHealthCenterRegisterInput!): RightsPortalHealthCenterRegisterResponse!
  confirmAirDiscountSchemeInvoice(input: AirDiscountSchemeConfirmInvoiceInput!): [AirDiscountSchemeFlightLeg!]!
  createAirDiscountSchemeExplicitDiscountCode(input: AirDiscountSchemeCreateExplicitDiscountCodeInput!): [AirDiscountSchemeDiscount!]
  createAirDiscountSchemeSuperExplicitDiscountCode(input: AirDiscountSchemeCreateExplicitDiscountCodeInput!): [AirDiscountSchemeDiscount!]
  markAllNotificationsSeen: NotificationsMarkAllAsSeenResponse
  markAllNotificationsRead: NotificationsMarkAllAsReadResponse
  markNotificationAsRead(id: Float!, locale: String): MarkNotificationReadResponse
  paymentsVerifyCard(input: PaymentsVerifyCardInput!): PaymentsVerifyCardResponse!
  paymentsVerificationCallback(input: PaymentsCardVerificationCallbackInput!): PaymentsCardVerificationResponse!
  paymentsChargeCard(input: PaymentsChargeCardInput!): PaymentsChargeCardResponse!
  paymentsCreateInvoice(input: PaymentsCreateInvoiceInput!): PaymentsCreateInvoiceResponse!
  updateCurrentEmployer(input: UpdateCurrentEmployerInput!): UpdateCurrentEmployerResponse!
  createMunicipalitiesFinancialAidSignedUrl(input: MunicipalitiesFinancialAidCreateSignedUrlInput!): MunicipalitiesFinancialAidSignedUrlModel!
  createMunicipalitiesFinancialAidApplicationFiles(input: MunicipalitiesFinancialAidApplicationFilesInput!): MunicipalitiesFinancialAidCreateFilesModel!
  updateMunicipalitiesFinancialAidApplication(input: MunicipalitiesFinancialAidUpdateApplicationInput!): MunicipalitiesFinancialAidApplicationModel
  createAuthAdminClient(input: CreateAuthAdminClientInput!): [AuthAdminCreateClientResponse!]!
  publishAuthAdminClient(input: AuthAdminPublishClientInput!): AuthAdminClientEnvironment!
  patchAuthAdminClient(input: AuthAdminPatchClientInput!): [AuthAdminClientEnvironment!]!
  rotateAuthAdminClientSecret(input: AuthAdminRotateSecretInput!): AuthAdminClientSecret!
  deleteAuthAdminClient(input: AuthAdminDeleteClientInput!): Boolean!
  revokeAuthAdminClientSecrets(input: AuthAdminRevokeSecretsInput!): Boolean!
  createAuthAdminScope(input: CreateScopeInput!): [AuthAdminCreateScopeResponse!]!
  patchAuthAdminScope(input: AuthAdminPatchScopeInput!): [AuthAdminScopeEnvironment!]!
  publishAuthAdminScope(input: AuthAdminPublishScopeInput!): AuthAdminScopeEnvironment!
  authDeleteAdminDelegation(id: String!): Boolean!
  authCreateDelegation(input: CreateDelegationInput!): AuthCustomDelegation!
  signatureCollectionUnsign(input: SignatureCollectionListIdInput!): SignatureCollectionSuccess!
  signatureCollectionCancel(input: SignatureCollectionCancelListsInput!): SignatureCollectionSuccess!
  signatureCollectionAddAreas(input: SignatureCollectionAddListsInput!): SignatureCollectionSuccess!
  signatureCollectionUploadPaperSignature(input: SignatureCollectionUploadPaperSignatureInput!): SignatureCollectionSuccess!
  signatureCollectionUpdatePaperSignaturePageNumber(input: SignatureCollectionSignatureUpdateInput!): SignatureCollectionSuccess!
  signatureCollectionAdminToggleListReview(input: SignatureCollectionListIdInput!): SignatureCollectionSuccess!
  signatureCollectionAdminProcess(input: SignatureCollectionIdInput!): SignatureCollectionSuccess!
  signatureCollectionAdminCreate(input: SignatureCollectionListInput!): SignatureCollectionSlug!
  signatureCollectionAdminRemoveCandidate(input: SignatureCollectionCandidateIdInput!): SignatureCollectionSuccess!
  signatureCollectionAdminRemoveList(input: SignatureCollectionListIdInput!): SignatureCollectionSuccess!
  signatureCollectionAdminUnsign(input: SignatureCollectionSignatureIdInput!): SignatureCollectionSuccess!
  signatureCollectionAdminExtendDeadline(input: SignatureCollectionExtendDeadlineInput!): SignatureCollectionSuccess!
  signatureCollectionAdminBulkUploadSignatures(input: SignatureCollectionListBulkUploadInput!): SignatureCollectionBulk!
  signatureCollectionAdminBulkCompareSignaturesAllLists(input: SignatureCollectionNationalIdsInput!): [SignatureCollectionSignature!]!
  signatureCollectionAdminCompareList(input: SignatureCollectionListNationalIdsInput!): [SignatureCollectionSignature!]!
  signatureCollectionAdminUpdatePaperSignaturePageNumber(input: SignatureCollectionSignatureUpdateInput!): SignatureCollectionSuccess!
  signatureCollectionLockList(input: SignatureCollectionListIdInput!): SignatureCollectionSuccess!
  signatureCollectionAdminUploadPaperSignature(input: SignatureCollectionUploadPaperSignatureInput!): SignatureCollectionSuccess!
  lawAndOrderDefenseChoicePost(input: LawAndOrderDefenseChoiceInput!, locale: String): LawAndOrderDefenseChoice
  healthDirectorateOrganDonationUpdateDonorStatus(input: HealthDirectorateOrganDonorInput!, locale: String): Boolean
}

input CreateAuthDelegationInput {
  toNationalId: String!
  scopes: [AuthDelegationScopeInput!]
  domainName: String
}

input AuthDelegationScopeInput {
  name: String!
  validTo: DateTime!
}

input UpdateAuthDelegationInput {
  delegationId: String!
  scopes: [AuthDelegationScopeInput!]!
}

input PatchAuthDelegationInput {
  delegationId: String!
  updateScopes: [AuthDelegationScopeInput!]
  deleteScopes: [String!]
}

input DeleteAuthDelegationInput {
  delegationId: String!
}

input PatchAuthConsentInput {
  clientId: String!
  consentedScope: String
  rejectedScope: String
}

input CreateAuthLoginRestrictionInput {
  until: DateTime!
}

input AuthPasskeyRegistrationObject {
  id: String!
  rawId: String!
  response: AuthPasskeyRegistrationObjectResponse!
  type: String!
  clientExtensionResults: AuthPasskeyRegistrationObjectClientExtensionResults!
  authenticatorAttachment: String
}

input AuthPasskeyRegistrationObjectResponse {
  attestationObject: String!
  clientDataJSON: String!
  transports: [String!]
  publicKeyAlgorithm: Float
  publicKey: String
  authenticatorData: String
}

input AuthPasskeyRegistrationObjectClientExtensionResults {
  appid: Boolean
  credProps: AuthExtensionCredProps
  hmacCreateSecret: Boolean
}

input AuthExtensionCredProps {
  rk: Boolean
}

input ConsultationPortalPostAdviceInput {
  caseId: Int = 0
  postCaseAdviceCommand: ConsultationPortalCasePostAdviceCommandInput
}

input ConsultationPortalCasePostAdviceCommandInput {
  content: String
  privateAdvice: Boolean
  fileUrls: [String!]
}

input ConsultationPortalPostCaseSubscriptionTypeInput {
  caseId: Int = 0
  postCaseSubscriptionCommand: ConsultationPortalPostCaseSubscriptionCommandInput
}

input ConsultationPortalPostCaseSubscriptionCommandInput {
  subscriptionType: CaseSubscriptionType
}

input ConsultationPortalPostEmailCommandInput {
  email: String
}

input ConsultationPortalUserSubscriptionsCommandInput {
  subscribeToAll: Boolean
  subscribeToAllType: SubscriptionType
  caseIds: [ConsultationPortalCaseSubscriptionCommandInput!]
  institutionIds: [ConsultationPortalSubscriptionCommandInput!]
  policyAreaIds: [ConsultationPortalSubscriptionCommandInput!]
}

input ConsultationPortalCaseSubscriptionCommandInput {
  id: Float
  subscriptionType: CaseSubscriptionType
}

input ConsultationPortalSubscriptionCommandInput {
  id: Float
  subscriptionType: SubscriptionType
}

input FormSystemCreateFormInput {
  organizationNationalId: String
}

input FormSystemDeleteFormInput {
  id: String
}

input FormSystemUpdateFormInput {
  id: String
  updateFormDto: FormSystemUpdateFormDtoInput
}

input FormSystemUpdateFormDtoInput {
  organizationId: String
  name: FormSystemLanguageTypeInput
  slug: String
  organizationDisplayName: FormSystemLanguageTypeInput
  invalidationDate: DateTime
  hasPayment: Boolean
  isTranslated: Boolean
  applicationDaysToRemove: Int
  stopProgressOnValidatingScreen: Boolean
  completedMessage: FormSystemLanguageTypeInput
  dependencies: [FormSystemDependencyInput]
  status: String
  urls: [FormSystemFormUrlInput!]
}

input FormSystemLanguageTypeInput {
  is: String
  en: String
}

input FormSystemDependencyInput {
  parentProp: String
  childProps: [String]
  isSelected: Boolean
}

input FormSystemFormUrlInput {
  id: String
  organizationUrlId: String
  url: String
  isXroad: Boolean
  isTest: Boolean
  type: String
  method: String
}

input CreateFormSystemApplicationInput {
  slug: String
}

input UpdateFormSystemApplicationDependenciesInput {
  dependencies: [FormSystemDependencyInput]
  completed: [String]
}

input SubmitFormSystemScreenInput {
  screenId: String
}

input FormSystemCreateFieldInput {
  createFieldDto: CreateFormSystemFieldDtoInput
}

input CreateFormSystemFieldDtoInput {
  screenId: String
  fieldType: String
  displayOrder: Int
}

input FormSystemUpdateFieldInput {
  id: String
  updateFieldDto: FormSystemUpdateFieldDtoInput
}

input FormSystemUpdateFieldDtoInput {
  name: FormSystemLanguageTypeInput
  description: FormSystemLanguageTypeInput
  isPartOfMultiset: Boolean
  isRequired: Boolean
  isHidden: Boolean
  fieldSettings: FormSystemFieldSettingsInput
  fieldType: String
}

input FormSystemFieldSettingsInput {
  minValue: Int
  maxValue: Int
  minLength: Int
  maxLength: Int
  minDate: DateTime
  maxDate: DateTime
  minAmount: Int
  maxAmount: Int
  year: Int
  hasLink: Boolean
  url: String
  buttonText: FormSystemLanguageTypeInput
  hasPropertyInput: Boolean
  hasPropertyList: Boolean
  list: [FormSystemListItemInput]
  listType: String
  fileTypes: String
  fileMaxSize: Int
  maxFiles: Int
  timeInterval: String
  isLarge: Boolean
}

input FormSystemListItemInput {
  id: String
  label: FormSystemLanguageTypeInput
  description: FormSystemLanguageTypeInput
  value: String
  displayOrder: Int
  isSelected: Boolean
}

input FormSystemDeleteFieldInput {
  id: String
}

input FormSystemUpdateFieldsDisplayOrderInput {
  updateFieldsDisplayOrderDto: [FormSystemFieldDisplayOrderInput]
}

input FormSystemFieldDisplayOrderInput {
  id: String
  screenId: String
}

input FormSystemCreateListItemInput {
  createListItemDto: FormSystemCreateListItemDtoInput
}

input FormSystemCreateListItemDtoInput {
  fieldId: String
  displayOrder: Int
}

input FormSystemDeleteListItemInput {
  id: String
}

input FormSystemUpdateListItemInput {
  id: String
  updateListItemDto: FormSystemUpdateListItemDtoInput
}

input FormSystemUpdateListItemDtoInput {
  label: FormSystemLanguageTypeInput
  description: FormSystemLanguageTypeInput
  value: String
  isSelected: Boolean
}

input FormSystemUpdateListItemsDisplayOrderInput {
  updateListItemsDisplayOrderDto: FormSystemUpdateListItemsDisplayOrderDtoInput
}

input FormSystemUpdateListItemsDisplayOrderDtoInput {
  listItemsDisplayOrderDto: [FormSystemListItemDisplayOrderInput]
}

input FormSystemListItemDisplayOrderInput {
  id: String
}

input FormSystemCreateScreenInput {
  createScreenDto: FormSystemCreateScreenDtoInput
}

input FormSystemCreateScreenDtoInput {
  sectionId: String
  displayOrder: Int
}

input FormSystemDeleteScreenInput {
  id: String!
}

input FormSystemUpdateScreenInput {
  id: String
  updateScreenDto: FormSystemUpdateScreenDtoInput
}

input FormSystemUpdateScreenDtoInput {
  name: FormSystemLanguageTypeInput
  multiset: Int
  callRuleset: Boolean
}

input FormSystemUpdateScreensDisplayOrderInput {
  updateScreensDisplayOrderDto: FormSystemUpdateScreenDisplayOrderDtoInput
}

input FormSystemUpdateScreenDisplayOrderDtoInput {
  screensDisplayOrderDto: [FormSystemScreenDisplayOrderInput]
}

input FormSystemScreenDisplayOrderInput {
  id: String
  sectionId: String
}

input FormSystemCreateSectionInput {
  createSectionDto: FormSystemCreateSectionDtoInput
}

input FormSystemCreateSectionDtoInput {
  formId: String
  displayOrder: Int
}

input FormSystemDeleteSectionInput {
  id: String
}

input FormSystemUpdateSectionInput {
  id: String
  updateSectionDto: FormSystemUpdateSectionDtoInput
}

input FormSystemUpdateSectionDtoInput {
  name: FormSystemLanguageTypeInput
  waitingText: FormSystemLanguageTypeInput
}

input FormSystemUpdateSectionsDisplayOrderInput {
  updateSectionsDisplayOrderDto: FormSystemUpdateSectionsDisplayOrderDtoInput
}

input FormSystemUpdateSectionsDisplayOrderDtoInput {
  sectionsDisplayOrderDto: [FormSystemSectionDisplayOrderInput]
}

input FormSystemSectionDisplayOrderInput {
  id: String
}

input FormSystemTranslationInput {
  textToTranslate: String
}

input CreateFormSystemApplicantInput {
  createFormApplicantTypeDto: CreateFormSystemApplicantDtoInput
}

input CreateFormSystemApplicantDtoInput {
  formId: String!
  applicantTypeId: String!
}

input DeleteFormSystemApplicantInput {
  id: String
}

input UpdateFormSystemApplicantInput {
  id: String
  updateFormApplicantTypeDto: UpdateFormSystemApplicantDtoInput
}

input UpdateFormSystemApplicantDtoInput {
  name: FormSystemLanguageTypeInput
}

input CreateFormSystemCertificationInput {
  createFormCertificationTypeDto: CreateFormSystemCertificationDtoInput
}

input CreateFormSystemCertificationDtoInput {
  formId: String
  certificationTypeId: String
}

input DeleteFormSystemCertificationInput {
  id: String!
}

input FormSystemUpdateOrganizationPermissionInput {
  updateOrganizationPermissionDto: FormSystemOrganizationPermissionDtoInput
}

input FormSystemOrganizationPermissionDtoInput {
  organizationId: String
  permission: String
}

input CreatePracticalDrivingLessonInput {
  bookId: String!
  minutes: Float!
  createdOn: String!
  comments: String!
}

input UpdatePracticalDrivingLessonInput {
  id: String!
  bookId: String!
  minutes: Float!
  createdOn: String!
  comments: String!
}

input DeletePracticalDrivingLessonInput {
  id: String!
  bookId: String!
  reason: String!
}

input CreateDrivingSchoolTestResultInput {
  bookId: String!
  schoolTypeId: Float!
  schoolNationalId: String!
  schoolEmployeeNationalId: String!
  createdOn: String!
  comments: String!
}

input FetchEducationSignedLicenseUrlInput {
  licenseId: String!
}

input CreateApplicationInput {
  typeId: CreateApplicationDtoTypeIdEnum!
  initialQuery: String
}

enum CreateApplicationDtoTypeIdEnum {
  ExampleForm
  ExampleCommonActions
  ExampleInputs
  ExampleNoInputs
  ExamplePayment
  ExampleStateTransfers
  Passport
  PassportAnnulment
  DrivingLearnersPermit
  DrivingLicense
  DrivingAssessmentApproval
  ParentalLeave
  DocumentProviderOnboarding
  HealthInsurance
  ChildrenResidenceChangeV2
  DataProtectionAuthorityComplaint
  LoginService
  InheritanceReport
  InstitutionCollaboration
  FundingGovernmentProjects
  PublicDebtPaymentPlan
  ComplaintsToAlthingiOmbudsman
  AccidentNotification
  GeneralPetitionService
  GeneralFishingLicense
  PSign
  AnnouncementOfDeath
  CriminalRecord
  FinancialAid
  DrivingInstructorRegistrations
  DrivingSchoolConfirmation
  MortgageCertificate
  MarriageConditions
  NoDebtCertificate
  FinancialStatementCemetery
  FinancialStatementsInao
  FinancialStatementIndividualElection
  FinancialStatementPoliticalParty
  OperatingLicense
  Estate
  DrivingLicenseDuplicate
  AnonymityInVehicleRegistry
  ChangeCoOwnerOfVehicle
  ChangeOperatorOfVehicle
  DigitalTachographDriversCard
  LicensePlateRenewal
  OrderVehicleLicensePlate
  OrderVehicleRegistrationCertificate
  TransferOfVehicleOwnership
  DrivingLicenseBookUpdateInstructor
  AlcoholTaxRedemption
  EuropeanHealthInsuranceCard
  OldAgePension
  HouseholdSupplement
  CarRecycling
  PresidentialListCreation
  PresidentialListSigning
  ParliamentaryListCreation
  ParliamentaryListSigning
  MunicipalListCreation
  MunicipalListSigning
  Citizenship
  AdditionalSupportForTheElderly
  EnergyFunds
  HealthcareLicenseCertificate
  HealthcareWorkPermit
  PensionSupplement
  TransferOfMachineOwnership
  DeathBenefits
  University
  HomeSupport
  ChangeMachineSupervisor
  DeregisterMachine
  GrindavikHousingBuyout
  RequestInspectionForMachine
  OfficialJournalOfIceland
  IdCard
  HealthInsuranceDeclaration
  StreetRegistration
  IncomePlan
  NewPrimarySchool
  WorkAccidentNotification
  MachineRegistration
  SeminarRegistration
  TrainingLicenseOnAWorkMachine
  SecondarySchool
}

input UpdateApplicationInput {
  id: String!
  draftProgress: DraftProgressInput
  answers: JSON
  skipValidation: Boolean
}

input DraftProgressInput {
  stepsFinished: Float!
  totalSteps: Float!
}

input UpdateApplicationExternalDataInput {
  id: String!
  dataProviders: [DataProvider!]!
}

input DataProvider {
  actionId: String!
  order: Float!
}

input AddAttachmentInput {
  id: String!
  key: String!
  url: String!
}

input DeleteAttachmentInput {
  id: String!
  key: String!
}

input SubmitApplicationInput {
  id: String!
  event: String!
  answers: JSON
}

input AssignApplicationInput {
  token: String!
}

input DeleteApplicationInput {
  id: String!
}

input GeneratePkPassInput {
  licenseType: String!
}

input VerifyLicenseBarcodeInput {
  data: String!
}

input VerifyPkPassInput {
  data: String!
}

input PostRequestPaperInput {
  wantsPaper: Boolean!
}

input DocumentsV2MailActionInput {
  documentIds: [String!]!
  action: String!
}

input PostMailActionResolverInput {
  messageId: String!
  action: String!
}

input PostBulkMailActionResolverInput {
  messageIds: [String!]!
  action: String!

  """
  This status represents the nature of the request. True = adding item status. False = removing item status.
  """
  status: Boolean!
}

input UpdateOrganisationInput {
  nationalId: String
  name: String
  address: String
  email: String
  phoneNumber: String
}

input CreateContactInput {
  name: String!
  email: String!
  phoneNumber: String!
}

input UpdateContactInput {
  name: String
  address: String
  email: String
  phoneNumber: String
}

input CreateHelpdeskInput {
  email: String!
  phoneNumber: String!
}

input UpdateHelpdeskInput {
  email: String
  phoneNumber: String
}

input DocumentProviderCategoriesAndTypesPostInput {
  name: String
  active: Boolean
}

input DocumentProviderCategoriesAndTypesPutInput {
  name: String
  active: Boolean
  id: Int!
}

input CreateProviderInput {
  nationalId: String!
  clientName: String!
}

input UpdateEndpointInput {
  nationalId: String!
  endpoint: String!
  providerId: String!
  xroad: Boolean
}

input RunEndpointTestsInput {
  nationalId: String!
  recipient: String!
  documentId: String!
  providerId: String!
}

input CreateUserProfileInput {
  mobilePhoneNumber: String
  locale: String
  email: String
  documentNotifications: Boolean
  emailStatus: String
  mobileStatus: String
  emailCode: String
  smsCode: String
  canNudge: Boolean
}

input UpdateUserProfileInput {
  mobilePhoneNumber: String
  locale: String
  email: String
  documentNotifications: Boolean
  emailStatus: String
  mobileStatus: String
  emailCode: String
  smsCode: String
  canNudge: Boolean
  bankInfo: String
}

input DeleteIslykillValueInput {
  mobilePhoneNumber: Boolean
  email: Boolean
}

input CreateSmsVerificationInput {
  mobilePhoneNumber: String!
}

input CreateEmailVerificationInput {
  email: String!
}

input UserDeviceTokenInput {
  deviceToken: String!
}

input UserProfileUpdateActorProfileInput {
  fromNationalId: String!
  emailNotifications: Boolean!
}

input ContactUsInput {
  name: String!
  phone: String = "N/A"
  email: String!
  subject: String = "N/A"
  message: String!
}

input TellUsAStoryInput {
  organization: String!
  dateOfStory: String!
  subject: String = "N/A"
  message: String!
  name: String!
  email: String!
  publicationAllowed: Boolean = false
}

input GenericFormInput {
  id: String!
  name: String!
  email: String!
  message: String!
  files: [String!]
  recipientFormFieldDeciderValue: String
  lang: String
}

input ServiceWebFormsInput {
  name: String!
  email: String!
  subject: String = "N/A"
  syslumadur: String!
  category: String!
  message: String!
  institutionSlug: String!
  lang: String = "is-IS"
}

input EmailSignupInput {
  signupID: String!
  inputFields: [EmailSignupInputField!]!
}

input EmailSignupInputField {
  id: String!
  name: String!
  value: String!
  type: String!
}

input WatsonAssistantChatSubmitFeedbackInput {
  thumbStatus: WatsonAssistantChatSubmitFeedbackThumbStatus!
  feedback: String
  assistantChatLog: [JSONObject!]!
  url: String
}

enum WatsonAssistantChatSubmitFeedbackThumbStatus {
  Up
  NoChoice
  Down
}

input OJOIAPostCommentInput {
  id: ID!
  comment: String!
}

input OfficialJournalOfIcelandApplicationGetPresignedUrlInput {
  applicationId: String!
  fileName: String!
  fileType: String!
  attachmentType: String!
}

input OfficialJournalOfIcelandApplicationAddApplicationAttachmentInput {
  applicationId: String!
  attachmentType: String!
  fileName: String!
  originalFileName: String!
  fileFormat: String!
  fileExtension: String!
  fileLocation: String!
  fileSize: Int!
}

input OfficialJournalOfIcelandApplicationDeleteApplicationAttachmentInput {
  applicationId: String!
  key: String!
}

input UpdateIcelandicNameInput {
  id: Float!
  body: CreateIcelandicNameInput!
}

input CreateIcelandicNameInput {
  icelandicName: String!
  type: String!
  status: String!
  verdict: String
  description: String
  visible: Boolean!
  url: String
}

input DeleteIcelandicNameByIdInput {
  id: Float!
}

input CreateEndorsementInput {
  listId: String!
  endorsementDto: EndorsementInput!
}

input EndorsementInput {
  showName: Boolean!
}

input CreateEndorsementListDto {
  title: String!
  description: String
  endorsementMetadata: [MetadataInput!]!
  tags: [EndorsementListDtoTagsEnum!]!
  meta: JSON
  closedDate: DateTime!
  openedDate: DateTime!
  adminLock: Boolean!
}

input MetadataInput {
  field: EndorsementMetadataDtoFieldEnum!
}

enum EndorsementMetadataDtoFieldEnum {
  fullName
  showName
}

enum EndorsementListDtoTagsEnum {
  generalPetition
}

input UpdateEndorsementListInput {
  listId: String!
  endorsementList: UpdateEndorsementListDto!
}

input UpdateEndorsementListDto {
  title: String!
  description: String
  closedDate: DateTime!
  openedDate: DateTime!
}

input OpenListInput {
  listId: String!
  changeEndorsmentListClosedDateDto: changeEndorsmentListClosedDateDto!
}

input changeEndorsmentListClosedDateDto {
  closedDate: DateTime!
}

input sendPdfEmailInput {
  listId: String!
  emailAddress: String!
}

input ExportEndorsementListInput {
  listId: String!
  fileType: String!
}

input CreateRegulationPresignedPostInput {
  fileName: String!
  regId: String!
  hash: String!
}

input CreateDraftRegulationInput {
  type: String
}

input EditDraftRegulationInput {
  id: String!
  body: EditDraftBody!
}

input EditDraftBody {
  draftingStatus: String
  text: String
  comments: String
  appendixes: [AppendixInput!]
  name: String
  title: String
  draftingNotes: String
  ministry: String
  idealPublishDate: String
  signatureDate: String
  signatureText: String
  effectiveDate: String
  type: String
  fastTrack: Boolean!
  signedDocumentUrl: String
  lawChapters: [String!]
}

input AppendixInput {
  title: String
  text: String
}

input DeleteDraftRegulationInput {
  draftId: String!
}

input CreateDraftRegulationCancelInput {
  changingId: String!
  regulation: String!
  date: String!
}

input UpdateDraftRegulationCancelInput {
  id: String!
  date: String
}

input DeleteDraftRegulationCancelInput {
  id: String!
}

input CreateDraftRegulationChangeInput {
  changingId: String!
  regulation: String!
  title: String
  text: String
  appendixes: [CreateChangeAppendixInput!]
  date: String
  comments: String
  diff: String
}

input CreateChangeAppendixInput {
  title: String
  text: String
  diff: String
}

input UpdateDraftRegulationChangeInput {
  id: String!
  text: String
  appendixes: [UpdateChangeAppendixInput!]
  title: String
  date: String
  comments: String
  diff: String
}

input UpdateChangeAppendixInput {
  title: String
  text: String
  diff: String
}

input DeleteDraftRegulationChangeInput {
  id: String!
}

input PostVehicleMileageInput {
  permno: String!

  """
  Example: "ISLAND.IS"
  """
  originCode: String!

  """
  Deprecated. Use {mileageNumber} instead. Keeping in for backwards compatibility
  """
  mileage: String
  mileageNumber: Float
}

input PutVehicleMileageInput {
  permno: String!
  internalId: Float!

  """
  Deprecated. Use {mileageNumber} instead. Keeping in for backwards compatibility
  """
  mileage: String
  mileageNumber: Float
}

union VehicleMileagePostResponse = VehicleMileageDetail | VehiclesMileageUpdateError

type VehiclesMileageUpdateError {
  message: String!
  code: Int
  error: JSON
}

union VehicleMileagePutResponse = VehicleMileagePutModel | VehiclesMileageUpdateError

input PostVehicleBulkMileageInput {
  """
  Example: "ISLAND.IS"
  """
  originCode: String!
  mileageData: [PostVehicleBulkMileageSingleInput!]!
}

input PostVehicleBulkMileageSingleInput {
  vehicleId: String!
  mileageNumber: Float!
}

input RightsPortalDentistRegisterInput {
  id: ID!
}

input RightsPortalDrugCalculatorInput {
  drugCalculatorRequestDTO: RightsPortalCalculatorRequest!
}

input RightsPortalCalculatorRequest {
  drugs: [RightsPortalCalculatorRequestInput!]
}

input RightsPortalCalculatorRequestInput {
  lineNumber: Float
  nordicCode: String
  units: Float
  price: Float
}

input RightsPortalHealthCenterRegisterInput {
  id: String!
  doctorId: Float
}

input AirDiscountSchemeConfirmInvoiceInput {
  airline: String
  flightLeg: AirDiscountSchemeTravelInput
  period: AirDiscountSchemePeriodInput!
  state: [AirDiscountSchemeFlightLegState!]
  age: AirDiscountSchemeRangeInput!
  gender: AirDiscountSchemeFlightLegGender
  postalCode: Int
  nationalId: String
  isExplicit: Boolean
}

input AirDiscountSchemeCreateExplicitDiscountCodeInput {
  nationalId: String!
  postalcode: Int!
  comment: String!
  numberOfDaysUntilExpiration: Int!
  needsConnectionFlight: Boolean!
  isExplicit: Boolean!
}

input PaymentsVerifyCardInput {
  cardNumber: String!
  expiryMonth: Float!
  expiryYear: Float!
  amount: Float!
  paymentFlowId: String!
}

input PaymentsCardVerificationCallbackInput {
  """Signed JWT token containing the verification result"""
  verificationToken: String!
}

input PaymentsChargeCardInput {
  cardNumber: String!
  expiryMonth: Float!
  expiryYear: Float!
  amount: Float!
  paymentFlowId: String!
  cvc: String!
}

input PaymentsCreateInvoiceInput {
  paymentFlowId: String!
}

input UpdateCurrentEmployerInput {
  employerNationalId: String!
}

input MunicipalitiesFinancialAidCreateSignedUrlInput {
  fileName: String!
  folder: String!
}

input MunicipalitiesFinancialAidApplicationFilesInput {
  files: [ApplicationFileInput!]!
}

input ApplicationFileInput {
  name: String!
  key: String!
  size: Float!
  type: String!
  applicationId: String!
}

input MunicipalitiesFinancialAidUpdateApplicationInput {
  id: String!
  state: String!
  event: String!
  comment: String
}

input CreateAuthAdminClientInput {
  clientId: ID!
  clientType: AuthAdminCreateClientType!
  sso: AuthAdminClientSso = disabled
  environments: [AuthAdminEnvironment!]!
  displayName: String!
  tenantId: ID!
  supportedDelegationTypes: [String!]
}

enum AuthAdminCreateClientType {
  machine
  native
  web
}

input AuthAdminPublishClientInput {
  targetEnvironment: AuthAdminEnvironment!
  sourceEnvironment: AuthAdminEnvironment!
  clientId: String!
  tenantId: String!
}

input AuthAdminPatchClientInput {
  environments: [AuthAdminEnvironment!]!
  clientId: String!
  tenantId: String!
  displayName: [AuthAdminTranslatedValueInput!]
  redirectUris: [String!]
  postLogoutRedirectUris: [String!]
  absoluteRefreshTokenLifetime: Int
  slidingRefreshTokenLifetime: Int
  refreshTokenExpiration: AuthAdminRefreshTokenExpiration
  addedDelegationTypes: [String!]
  removedDelegationTypes: [String!]
  supportsCustomDelegation: Boolean
  supportsLegalGuardians: Boolean
  supportsProcuringHolders: Boolean
  supportsPersonalRepresentatives: Boolean
  promptDelegations: Boolean
  requireApiScopes: Boolean
  requireConsent: Boolean
  allowOfflineAccess: Boolean
  requirePkce: Boolean
  singleSession: Boolean
  supportTokenExchange: Boolean
  accessTokenLifetime: Int
  customClaims: [AuthAdminClientClaimInput!]
  addedScopes: [String!]
  removedScopes: [String!]
  sso: AuthAdminClientSso
}

input AuthAdminRotateSecretInput {
  tenantId: String!
  clientId: String!
  environment: AuthAdminEnvironment!
  revokeOldSecrets: Boolean
}

input AuthAdminDeleteClientInput {
  tenantId: String!
  clientId: String!
}

input AuthAdminRevokeSecretsInput {
  tenantId: String!
  clientId: String!
  environment: AuthAdminEnvironment!
}

input CreateScopeInput {
  tenantId: String!
  environments: [AuthAdminEnvironment!]!
  name: String!
  displayName: String!
  description: String!
}

input AuthAdminPatchScopeInput {
  environments: [AuthAdminEnvironment!]!
  scopeName: String!
  tenantId: String!
  displayName: [AuthAdminTranslatedValueInput!]
  description: [AuthAdminTranslatedValueInput!]
  grantToAuthenticatedUser: Boolean
  grantToLegalGuardians: Boolean
  grantToProcuringHolders: Boolean
  allowExplicitDelegationGrant: Boolean
  isAccessControlled: Boolean
  automaticDelegationGrant: Boolean
  grantToPersonalRepresentatives: Boolean
  addedDelegationTypes: [String!]
  removedDelegationTypes: [String!]
}

input AuthAdminPublishScopeInput {
  targetEnvironment: AuthAdminEnvironment!
  sourceEnvironment: AuthAdminEnvironment!
  scopeName: String!
  tenantId: String!
}

input CreateDelegationInput {
  fromNationalId: String!
  toNationalId: String!
  validTo: DateTime
  type: String!
  referenceId: String!
}

input SignatureCollectionCancelListsInput {
  collectionId: String!
  listIds: [String!] = []
}

input SignatureCollectionAddListsInput {
  collectionId: String!
  candidateId: String!
  areaIds: [String!] = []
}

input SignatureCollectionUploadPaperSignatureInput {
  listId: String!
  pageNumber: Float!
  nationalId: String!
}

input SignatureCollectionSignatureUpdateInput {
  signatureId: String!
  pageNumber: Float!
}

input SignatureCollectionListInput {
  collectionId: String!
  owner: SignatureCollectionOwnerInput!

  """If not provided, the list will be available in all areas"""
  areas: [SignatureCollectionAreaInput!]
}

input SignatureCollectionOwnerInput {
  nationalId: String!
  name: String!
  phone: String!
  email: String!
}

input SignatureCollectionAreaInput {
  areaId: String!
}

input SignatureCollectionCandidateIdInput {
  candidateId: String!
}

input SignatureCollectionSignatureIdInput {
  signatureId: String!
}

input SignatureCollectionExtendDeadlineInput {
  listId: String!
  newEndDate: DateTime!
}

input SignatureCollectionListBulkUploadInput {
  listId: String!
  upload: [BulkUploadUser!]!
}

input BulkUploadUser {
  pageNumber: Float!
  nationalId: String!
}

input SignatureCollectionNationalIdsInput {
  collectionId: String!
  nationalIds: [String!]!
}

input SignatureCollectionListNationalIdsInput {
  listId: String!
  nationalIds: [String!]!
}

input LawAndOrderDefenseChoiceInput {
  caseId: ID!
  choice: LawAndOrderDefenseChoiceEnum!
  lawyersNationalId: String
}

input HealthDirectorateOrganDonorInput {
  isDonor: Boolean!
  organLimitations: [String!]
  comment: String
}
`)

export default schema
