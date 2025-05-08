import gql from 'graphql-tag'
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
  /** A type representing a formatted java.util.Instant */
  Instant: number
  /** A type representing a formatted java.util.ZonedDateTime */
  LocalDate: Date
  /** A type representing a formatted Kotlin.Long */
  Long: number
  /** A type representing a formatted java.util.UUID */
  UUID: string
}

export type AddOnPassTemplate = {
  __typename?: 'AddOnPassTemplate'
  addOnpassTemplate: Scalars['UUID']
  id: Scalars['UUID']
  label?: Maybe<Scalars['String']>
}

export type AddOnPassTemplateDataInput = {
  addOnPassTemplateId: Scalars['String']
  id?: InputMaybe<Scalars['String']>
  label?: InputMaybe<Scalars['String']>
}

export type ApiKey = BaseModel & {
  __typename?: 'ApiKey'
  id: Scalars['UUID']
  key: Scalars['UUID']
  name: Scalars['String']
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type ApiKeyDataInput = {
  id?: InputMaybe<Scalars['String']>
  name: Scalars['String']
}

export type ApiKeyPageInfo = PaginationInfo & {
  __typename?: 'ApiKeyPageInfo'
  data: Array<ApiKey>
  hasNext: Scalars['Boolean']
  hasPrev: Scalars['Boolean']
  pageSize: Scalars['Int']
  totalCount: Scalars['Int']
  totalPageCount: Scalars['Int']
}

export type AppPassInstance = BaseModel & {
  __typename?: 'AppPassInstance'
  appUser: User
  id: Scalars['UUID']
  inputFieldValues: Array<PassInputFieldValue>
  passId: Scalars['UUID']
  passInstanceId: Scalars['UUID']
  passTemplate: PassTemplate
  thumbnail?: Maybe<Image>
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type AppPassInstanceDataInput = {
  passId?: InputMaybe<Scalars['String']>
  verifyToken?: InputMaybe<Scalars['String']>
}

export type AppUserDataInput = {
  androidDeviceId?: InputMaybe<Scalars['String']>
  language?: InputMaybe<Scalars['String']>
  phoneNumber?: InputMaybe<Scalars['String']>
  verifyToken?: InputMaybe<Scalars['String']>
}

export type Automation = {
  __typename?: 'Automation'
  enabled?: Maybe<Scalars['Boolean']>
  id: Scalars['UUID']
  issuer?: Maybe<Issuer>
  name?: Maybe<Scalars['String']>
  nodes: Array<Node>
}

export type AutomationDataInput = {
  enabled?: InputMaybe<Scalars['Boolean']>
  id?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
}

export type AutomationEditor = {
  __typename?: 'AutomationEditor'
  automation: Automation
  nodes: Array<Node>
}

export type AutomationEditorDataInput = {
  enabled?: InputMaybe<Scalars['Boolean']>
  id?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  nodes?: InputMaybe<Array<NodeEditorDataInput>>
}

export type AutomationLog = {
  __typename?: 'AutomationLog'
  actionTime: Scalars['Long']
  automation: Automation
  dataTime: Scalars['Long']
  endedAt: Scalars['Instant']
  failureReason?: Maybe<Scalars['String']>
  id: Scalars['UUID']
  startedAt: Scalars['Instant']
  status: AutomationLogStatusType
  triggerTime: Scalars['Long']
}

export type AutomationLogFilterInput = {
  endDate?: InputMaybe<Scalars['String']>
  startDate?: InputMaybe<Scalars['String']>
  status?: InputMaybe<Array<AutomationLogStatusType>>
}

export type AutomationLogPageInfo = PaginationInfo & {
  __typename?: 'AutomationLogPageInfo'
  data: Array<AutomationLog>
  hasNext: Scalars['Boolean']
  hasPrev: Scalars['Boolean']
  pageSize: Scalars['Int']
  totalCount: Scalars['Int']
  totalPageCount: Scalars['Int']
}

export enum AutomationLogStatusType {
  Cancelled = 'CANCELLED',
  Failed = 'FAILED',
  Running = 'RUNNING',
  Success = 'SUCCESS',
}

export enum BarcodeType {
  Code_128 = 'CODE_128',
  Pdf_417 = 'PDF_417',
  Qr = 'QR',
}

export type BaseModel = {
  id: Scalars['UUID']
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type BillingInfo = BaseModel & {
  __typename?: 'BillingInfo'
  cancelDate?: Maybe<Scalars['LocalDate']>
  id: Scalars['UUID']
  issuerDiscounts?: Maybe<Array<IssuerDiscount>>
  issuerStatus?: Maybe<IssuerStatus>
  passTemplatesPrice: Array<PassTemplatePrice>
  trialEndDate: Scalars['LocalDate']
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export enum CountryType {
  Is = 'IS',
}

export enum CurrencyType {
  Isk = 'ISK',
}

export type DAddOnPassInput = {
  addOnPass: Scalars['UUID']
  addOnPassTemplate: DAddOnPassTemplatesInput
  deleted: Scalars['Boolean']
  id: Scalars['UUID']
  pass: DPassInput
  passDeliveryPageUrl?: InputMaybe<Scalars['String']>
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type DAddOnPassTemplatesInput = {
  addOnPassTemplateId: Scalars['UUID']
  deleted: Scalars['Boolean']
  id: Scalars['UUID']
  label?: InputMaybe<Scalars['String']>
  passTemplate: DPassTemplateInput
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type DApiKeyInput = {
  deleted: Scalars['Boolean']
  id: Scalars['UUID']
  key: Scalars['UUID']
  name: Scalars['String']
  user: DUserInput
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type DAppPassInstanceInput = {
  app_user: DUserInput
  deleted: Scalars['Boolean']
  id: Scalars['UUID']
  pass: DPassInput
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type DApplePassTypeIdentifierInput = {
  deleted: Scalars['Boolean']
  expirationDate: Scalars['Instant']
  id: Scalars['UUID']
  identifier: Scalars['String']
  isDefault: Scalars['Boolean']
  issuer?: InputMaybe<DIssuerInput>
  name: Scalars['String']
  organizationName: Scalars['String']
  passTemplates: Array<DPassTemplateInput>
  teamIdentifier: Scalars['String']
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type DAutomationInput = {
  deleted: Scalars['Boolean']
  enabled?: InputMaybe<Scalars['Boolean']>
  id: Scalars['UUID']
  issuer?: InputMaybe<DIssuerInput>
  log: Array<DAutomationLogInput>
  name?: InputMaybe<Scalars['String']>
  nodes: Array<DNodeInput>
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type DAutomationLogInput = {
  actionTime: Scalars['Long']
  automation: DAutomationInput
  dataTime: Scalars['Long']
  deleted: Scalars['Boolean']
  failureReason?: InputMaybe<Scalars['String']>
  id: Scalars['UUID']
  memoryUsed: Scalars['Long']
  status: AutomationLogStatusType
  triggerTime: Scalars['Long']
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type DDemoEmailInput = {
  dateSent: Scalars['Instant']
  deleted: Scalars['Boolean']
  demoEmailType: DemoEmailsType
  id: Scalars['UUID']
  issuer: DIssuerInput
  toEmail: Scalars['String']
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type DDeviceInput = {
  deleted: Scalars['Boolean']
  deviceLibraryIdentifier?: InputMaybe<Scalars['String']>
  devicePassInstances: Array<DDevicePassInstanceInput>
  deviceType: DeviceType
  id: Scalars['UUID']
  pushToken?: InputMaybe<Scalars['String']>
  userAgent?: InputMaybe<Scalars['String']>
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type DDevicePassInstanceInput = {
  deleted: Scalars['Boolean']
  device: DDeviceInput
  id: Scalars['UUID']
  pass: DPassInput
  passAuthenticationToken: DPassAuthenticationTokenInput
  status: DevicePassInstanceStatus
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type DDiscountInput = {
  deleted: Scalars['Boolean']
  discount?: InputMaybe<Scalars['Float']>
  endDate?: InputMaybe<Scalars['Instant']>
  id: Scalars['UUID']
  passTemplate: DPassTemplateInput
  startDate?: InputMaybe<Scalars['Instant']>
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type DDistributionInput = {
  expirationDate?: InputMaybe<Scalars['Instant']>
  token: Scalars['UUID']
}

export type DEmailDistributionTransactionInput = {
  body: Scalars['String']
  deleted: Scalars['Boolean']
  emails: Array<DEmailInput>
  failedAmount?: InputMaybe<Scalars['Int']>
  hasBeenLoggedToSentry: Scalars['Boolean']
  id: Scalars['UUID']
  issuer: DIssuerInput
  passTemplate?: InputMaybe<DPassTemplateInput>
  sentAmount?: InputMaybe<Scalars['Int']>
  sentBy: DUserInput
  statuses: Array<DEmailDistributionTransactionStatusInput>
  subject: Scalars['String']
  totalAmount: Scalars['Int']
  type: EmailDistributionTransactionType
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type DEmailDistributionTransactionStatusInput = {
  status: EmailDistributionTransactionStatus
  whenCreated: Scalars['Instant']
}

export type DEmailInput = {
  content?: InputMaybe<Scalars['String']>
  contentType?: InputMaybe<Scalars['String']>
  deleted: Scalars['Boolean']
  distributionTransaction?: InputMaybe<DEmailDistributionTransactionInput>
  fromEmail?: InputMaybe<Scalars['String']>
  id: Scalars['UUID']
  idempotent_id?: InputMaybe<Scalars['String']>
  pass?: InputMaybe<DPassInput>
  sendGridId?: InputMaybe<Scalars['String']>
  sendGridStatus?: InputMaybe<SendGridStatus>
  statuses?: InputMaybe<Array<DSendGridStatusInput>>
  subject: Scalars['String']
  toEmail: Scalars['String']
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
  whenSent?: InputMaybe<Scalars['Instant']>
}

export type DExternalApiInput = {
  deleted: Scalars['Boolean']
  externalAPIType: ExternalApiType
  id: Scalars['UUID']
  name?: InputMaybe<Scalars['String']>
  outputs: Array<DExternalApiOutputInput>
  parameters: Array<DExternalApiParameterInput>
  passTemplate: DPassTemplateInput
  queryType: ExternalApiQueryType
  url: Scalars['String']
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type DExternalApiOutputInput = {
  deleted: Scalars['Boolean']
  description?: InputMaybe<Scalars['String']>
  externalAPI: DExternalApiInput
  id: Scalars['UUID']
  innerPath?: InputMaybe<Scalars['String']>
  label: Scalars['String']
  matchType: ExternalApiArrayMatchType
  passInputField: DPassInputFieldInput
  path: Scalars['String']
  searchMatch?: InputMaybe<Scalars['String']>
  searchPath?: InputMaybe<Scalars['String']>
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type DExternalApiParameterInput = {
  deleted: Scalars['Boolean']
  externalAPI: DExternalApiInput
  id: Scalars['UUID']
  name: Scalars['String']
  parameterType: ExternalApiParameterType
  passInputField?: InputMaybe<DPassInputFieldInput>
  secret?: InputMaybe<DIssuerSecretInput>
  userSecret?: InputMaybe<DIssuerUserSecretInput>
  value?: InputMaybe<Scalars['String']>
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type DFileInput = {
  bucketName: Scalars['String']
  deleted: Scalars['Boolean']
  filename?: InputMaybe<Scalars['String']>
  id: Scalars['UUID']
  issuer?: InputMaybe<DIssuerInput>
  originalFilename?: InputMaybe<Scalars['String']>
  originalUrl?: InputMaybe<Scalars['String']>
  url?: InputMaybe<Scalars['String']>
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type DFixedMonthlyFeeInput = {
  deleted: Scalars['Boolean']
  id: Scalars['UUID']
  monthlyFeeType: MonthlyFeeType
  monthlyPrice: DMoneyInput
  plan?: InputMaybe<DPlanInput>
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type DImageInput = {
  bucketName: Scalars['String']
  deleted: Scalars['Boolean']
  description?: InputMaybe<Scalars['String']>
  filename: Scalars['String']
  height: Scalars['Int']
  id: Scalars['UUID']
  issuer?: InputMaybe<DIssuerInput>
  orderIndex: Scalars['Int']
  originalFilename?: InputMaybe<Scalars['String']>
  originalUrl?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
  user?: InputMaybe<DUserInput>
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
  width: Scalars['Int']
}

export type DIssuerDiscountInput = {
  deleted: Scalars['Boolean']
  discount: Scalars['Float']
  endDate?: InputMaybe<Scalars['Instant']>
  id: Scalars['UUID']
  issuer: DIssuerInput
  startDate?: InputMaybe<Scalars['Instant']>
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type DIssuerInput = {
  address?: InputMaybe<Scalars['String']>
  automations: Array<DAutomationInput>
  cancelDate?: InputMaybe<Scalars['Instant']>
  confirmDate?: InputMaybe<Scalars['Instant']>
  contactEmail?: InputMaybe<Scalars['String']>
  contactName?: InputMaybe<Scalars['String']>
  contactPhone?: InputMaybe<Scalars['String']>
  deleted: Scalars['Boolean']
  demoEmails?: InputMaybe<Array<DDemoEmailInput>>
  discounts?: InputMaybe<Array<DIssuerDiscountInput>>
  id: Scalars['UUID']
  idNumber?: InputMaybe<Scalars['String']>
  images: Array<DImageInput>
  invoiceEmail?: InputMaybe<Scalars['String']>
  issuerUsers: Array<DIssuerUserInput>
  logoIcon?: InputMaybe<DImageInput>
  name?: InputMaybe<Scalars['String']>
  orderInfos: Array<DOrderInfoInput>
  passTemplates: Array<DPassTemplateInput>
  paymentInfo?: InputMaybe<DPaymentInfoInput>
  planSubscription?: InputMaybe<DPlanSubscriptionInput>
  roles: Array<DRoleInput>
  scanners: Array<DScannerInput>
  secrets?: InputMaybe<Array<DIssuerSecretInput>>
  serviceContactEmail?: InputMaybe<Scalars['String']>
  skipFooter: Scalars['Boolean']
  status?: InputMaybe<IssuerStatus>
  termsAndConditions: Array<DTermsAndConditionsInput>
  town?: InputMaybe<Scalars['String']>
  userSecrets?: InputMaybe<Array<DIssuerUserSecretInput>>
  users: Array<DUserInput>
  version: Scalars['Long']
  whenAccepted?: InputMaybe<Scalars['Instant']>
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
  zipcode?: InputMaybe<Scalars['String']>
}

export type DIssuerSecretInput = {
  deleted: Scalars['Boolean']
  id: Scalars['UUID']
  issuer: DIssuerInput
  name: Scalars['String']
  value: Scalars['String']
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type DIssuerTermsInput = {
  deleted: Scalars['Boolean']
  id: Scalars['UUID']
  paymentTerms?: InputMaybe<DFileInput>
  paymentTermsUrl?: InputMaybe<Scalars['String']>
  privacyPolicy?: InputMaybe<DFileInput>
  privacyPolicyUrl?: InputMaybe<Scalars['String']>
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type DIssuerUserInput = {
  active: Scalars['Boolean']
  confirmed: Scalars['Boolean']
  deleted: Scalars['Boolean']
  id: Scalars['UUID']
  inviteEmail?: InputMaybe<Scalars['String']>
  invitedBy?: InputMaybe<DUserInput>
  issuer: DIssuerInput
  role?: InputMaybe<DRoleInput>
  user?: InputMaybe<DUserInput>
  version: Scalars['Long']
  whenConfirmed?: InputMaybe<Scalars['Instant']>
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type DIssuerUserSecretInput = {
  deleted: Scalars['Boolean']
  id: Scalars['UUID']
  issuer: DIssuerInput
  name: Scalars['String']
  values: Array<DIssuerUserSecretValueInput>
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type DIssuerUserSecretValueInput = {
  deleted: Scalars['Boolean']
  id: Scalars['UUID']
  secret: DIssuerUserSecretInput
  user: DUserInput
  value: Scalars['String']
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type DkPlusCompanyType = {
  __typename?: 'DKPlusCompanyType'
  ID: Scalars['String']
  Name: Scalars['String']
}

export type DLocationInput = {
  deleted: Scalars['Boolean']
  id: Scalars['UUID']
  passTemplates: DPassTemplateInput
  relevantText: Scalars['String']
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type DMoney = {
  __typename?: 'DMoney'
  amount: Scalars['Float']
  currency: Scalars['String']
}

export type DMoneyInput = {
  amount: Scalars['Float']
  currency: Scalars['String']
}

export type DNodeInput = {
  automation?: InputMaybe<DAutomationInput>
  category?: InputMaybe<NodeCategories>
  children: Array<DNodeInput>
  config: Array<DNodeOptionInput>
  deleted: Scalars['Boolean']
  id: Scalars['UUID']
  node: Scalars['String']
  parent?: InputMaybe<DNodeInput>
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type DNodeOptionInput = {
  children: Array<DNodeOptionInput>
  deleted: Scalars['Boolean']
  id: Scalars['UUID']
  key: Scalars['String']
  node: DNodeInput
  parent?: InputMaybe<DNodeOptionInput>
  value?: InputMaybe<Scalars['String']>
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type DOrderInfoInput = {
  amount: Scalars['String']
  confirmed?: InputMaybe<Scalars['Boolean']>
  currency: CurrencyType
  deleted: Scalars['Boolean']
  id: Scalars['UUID']
  issuer: DIssuerInput
  orderId: Scalars['String']
  pass?: InputMaybe<DPassInput>
  passTemplate?: InputMaybe<DPassTemplateInput>
  payed?: InputMaybe<Scalars['Boolean']>
  paymentProvider: PaymentProvider
  productDescription?: InputMaybe<Scalars['String']>
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type DPassAuthenticationTokenInput = {
  authenticationToken: Scalars['UUID']
  deleted: Scalars['Boolean']
  devicePassInstances: Array<DDevicePassInstanceInput>
  id: Scalars['UUID']
  pass: DPassInput
  status: PassAuthenticationTokenStatus
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
  whenUsed?: InputMaybe<Scalars['Instant']>
}

export type DPassBackSideInput = {
  deleted: Scalars['Boolean']
  expirationDate?: InputMaybe<Scalars['Instant']>
  id: Scalars['UUID']
  label?: InputMaybe<Scalars['String']>
  orderIndex: Scalars['Int']
  pass: DPassInput
  value?: InputMaybe<Scalars['String']>
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type DPassBeaconInput = {
  deleted: Scalars['Boolean']
  id: Scalars['UUID']
  major: Scalars['Int']
  minor: Scalars['Int']
  name: Scalars['String']
  passTemplate: DPassTemplateInput
  proximityUUID: Scalars['String']
  relevantText: Scalars['String']
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type DPassFieldInput = {
  deleted: Scalars['Boolean']
  deletedText?: InputMaybe<Scalars['String']>
  expiredText?: InputMaybe<Scalars['String']>
  hideOnDeleted: Scalars['Boolean']
  hideOnExpired: Scalars['Boolean']
  hideOnVoided: Scalars['Boolean']
  id: Scalars['UUID']
  label: Scalars['String']
  orderIndex: Scalars['Int']
  passInputField?: InputMaybe<DPassInputFieldInput>
  passTemplate: DPassTemplateInput
  textAlignment?: InputMaybe<TextAlignment>
  type: PassFieldType
  value?: InputMaybe<Scalars['String']>
  version: Scalars['Long']
  voidedText?: InputMaybe<Scalars['String']>
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type DPassInput = {
  addOnPass: Array<DAddOnPassInput>
  alreadyPaid: Scalars['Boolean']
  appPassInstance: Array<DAppPassInstanceInput>
  comment?: InputMaybe<Scalars['String']>
  deleteInProcess: Scalars['Boolean']
  deleted: Scalars['Boolean']
  devicePassInstances: Array<DDevicePassInstanceInput>
  distribution: DDistributionInput
  emails: Array<DEmailInput>
  expirationDate?: InputMaybe<Scalars['Instant']>
  externalIdentifier?: InputMaybe<Scalars['String']>
  id: Scalars['UUID']
  inputFieldValues: Array<DPassInputFieldValueInput>
  isLegacy: Scalars['Boolean']
  isReward?: InputMaybe<Scalars['Boolean']>
  isVoided: Scalars['Boolean']
  issuedBy?: InputMaybe<DUserInput>
  passAuthenticationTokens: Array<DPassAuthenticationTokenInput>
  passBackSide: Array<DPassBackSideInput>
  passTemplate: DPassTemplateInput
  posDistributionCode?: InputMaybe<Scalars['String']>
  savedByCustomer: Scalars['Boolean']
  scanTransactions: Array<DScanTransactionInput>
  stampsLeft?: InputMaybe<Scalars['Int']>
  stampsStripImage?: InputMaybe<DStampStripImageInput>
  thumbnailImage?: InputMaybe<DImageInput>
  validFrom?: InputMaybe<Scalars['Instant']>
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenDeactivated?: InputMaybe<Scalars['Instant']>
  whenModified: Scalars['Instant']
}

export type DPassInputFieldInput = {
  deleted: Scalars['Boolean']
  description?: InputMaybe<Scalars['String']>
  format: PassInputFieldFormat
  id: Scalars['UUID']
  identifier: Scalars['String']
  isMandatory: Scalars['Boolean']
  isUnique: Scalars['Boolean']
  label: Scalars['String']
  orderIndex: Scalars['Int']
  passFields: Array<DPassFieldInput>
  passTemplate: DPassTemplateInput
  type: PassInputFieldType
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type DPassInputFieldValueInput = {
  deleted: Scalars['Boolean']
  id: Scalars['UUID']
  pass: DPassInput
  passInputField: DPassInputFieldInput
  value?: InputMaybe<Scalars['String']>
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type DPassIntegrationInput = {
  additionalRate?: InputMaybe<Scalars['Float']>
  deleted: Scalars['Boolean']
  id: Scalars['UUID']
  passIntegrationType: PassIntegrationType
  plan?: InputMaybe<DPlanInput>
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type DPassPricingInput = {
  deleted: Scalars['Boolean']
  id: Scalars['UUID']
  passPrice: DMoneyInput
  passType: PassType
  plan?: InputMaybe<DPlanInput>
  range: PassesRange
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type DPassTemplateInput = {
  addOnPassTemplates: Array<DAddOnPassTemplatesInput>
  allowReward: Scalars['Boolean']
  applePassTypeIdentifier: DApplePassTypeIdentifierInput
  backgroundColor?: InputMaybe<Scalars['String']>
  backgroundImage?: InputMaybe<DImageInput>
  barcodeFormat?: InputMaybe<Scalars['String']>
  barcodeTextFormat?: InputMaybe<Scalars['String']>
  barcodeType: BarcodeType
  beacons: Array<DPassBeaconInput>
  dateFormat?: InputMaybe<DateFormat>
  dateNumber?: InputMaybe<Scalars['Int']>
  deleted: Scalars['Boolean']
  deletedPassTemplateId?: InputMaybe<Scalars['UUID']>
  description?: InputMaybe<Scalars['String']>
  disableCsvDownload: Scalars['Boolean']
  disableDeleteUnclaimedPasses: Scalars['Boolean']
  disableIssue: Scalars['Boolean']
  discount?: InputMaybe<DDiscountInput>
  distributionToken?: InputMaybe<Scalars['UUID']>
  dynamicBarcodeExpirationTimeSeconds?: InputMaybe<Scalars['Long']>
  dynamicBarcodeType: DynamicBarcodeType
  expirationDate?: InputMaybe<Scalars['Instant']>
  expirationType?: InputMaybe<ExpirationType>
  externalAPIs: Array<DExternalApiInput>
  externalAuthAgeVerification?: InputMaybe<Scalars['Int']>
  externalAuthEnablePOS: Scalars['Boolean']
  externalAuthIdField?: InputMaybe<DPassInputFieldInput>
  externalAuthNameField?: InputMaybe<DPassInputFieldInput>
  externalAuthUseIdentifiers: Scalars['Boolean']
  fields: Array<DPassFieldInput>
  firstDeviceOnly: Scalars['Boolean']
  footerImage?: InputMaybe<DImageInput>
  foregroundColor?: InputMaybe<Scalars['String']>
  grayOnExpired: Scalars['Boolean']
  hasDynamicBarcode: Scalars['Boolean']
  icon?: InputMaybe<DImageInput>
  id: Scalars['UUID']
  inputFields: Array<DPassInputFieldInput>
  isDeletedPassTemplate: Scalars['Boolean']
  isLegacy: Scalars['Boolean']
  isNFC: Scalars['Boolean']
  isSharingProhibited: Scalars['Boolean']
  issuer?: InputMaybe<DIssuerInput>
  labelColor?: InputMaybe<Scalars['String']>
  locations?: InputMaybe<Array<DLocationInput>>
  lockInputFields: Scalars['Boolean']
  logScansOnBack: Scalars['Boolean']
  logo?: InputMaybe<DImageInput>
  logoText?: InputMaybe<Scalars['String']>
  mandatoryThumbnail: Scalars['Boolean']
  memberThumbnailImage: Scalars['Boolean']
  minAmount?: InputMaybe<Scalars['Int']>
  name?: InputMaybe<Scalars['String']>
  nfcValue?: InputMaybe<Scalars['String']>
  notificationOnScan: Scalars['Boolean']
  oncePerDevice: Scalars['Boolean']
  oneDeviceAtATime: Scalars['Boolean']
  oneDevicePerToken: Scalars['Boolean']
  onePassOfTemplateTypePerDevice: Scalars['Boolean']
  passPrice?: InputMaybe<Scalars['Int']>
  passTemplateType: PassTemplateType
  posDistributionOnly: Scalars['Boolean']
  publicKey?: InputMaybe<Scalars['String']>
  qrCodeImage?: InputMaybe<DImageInput>
  quantityRestriction?: InputMaybe<Scalars['Int']>
  refillRenewal: Scalars['Boolean']
  rewardPassTemplate?: InputMaybe<DRewardPassTemplateInput>
  sendBackUpPass: Scalars['Boolean']
  serviceEmail?: InputMaybe<Scalars['String']>
  serviceEmailType: ServiceEmailType
  singleDeviceOnly: Scalars['Boolean']
  stampBackgroundColor?: InputMaybe<Scalars['String']>
  stampStripImage: Array<DStampStripImageInput>
  stampedImage?: InputMaybe<DImageInput>
  stamps?: InputMaybe<Scalars['Int']>
  status: PassTemplateStatus
  statusFields: Scalars['Boolean']
  stripBackgroundColor?: InputMaybe<Scalars['String']>
  stripImage?: InputMaybe<DImageInput>
  thumbnailImage?: InputMaybe<DImageInput>
  triggers: Array<DPassTemplateTriggerInput>
  unstampedImage?: InputMaybe<DImageInput>
  useExternalAuth: Scalars['Boolean']
  userDistributionTokens: Array<DUserDistributionTokenInput>
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type DPassTemplateTriggerInput = {
  active: Scalars['Boolean']
  deleted: Scalars['Boolean']
  id: Scalars['UUID']
  passTemplate: DPassTemplateInput
  type: Scalars['String']
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type DPaymentInfoInput = {
  accessKey?: InputMaybe<Scalars['String']>
  country?: InputMaybe<CountryType>
  currency?: InputMaybe<CurrencyType>
  customerInfo?: InputMaybe<Scalars['Boolean']>
  deleted: Scalars['Boolean']
  errorUrl?: InputMaybe<Scalars['String']>
  id: Scalars['UUID']
  issuer: DIssuerInput
  language?: InputMaybe<LanguageType>
  merchantEmail?: InputMaybe<Scalars['String']>
  merchantId?: InputMaybe<Scalars['String']>
  merchantLogo?: InputMaybe<DImageInput>
  paymentGatewayId?: InputMaybe<Scalars['String']>
  paymentProvider?: InputMaybe<PaymentProvider>
  secretKey?: InputMaybe<Scalars['String']>
  successUrl?: InputMaybe<Scalars['String']>
  terms?: InputMaybe<DIssuerTermsInput>
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type DPermissionInput = {
  id: Scalars['UUID']
  permission?: InputMaybe<UserPermission>
  user: DUserInput
}

export type DPlanInput = {
  deleted: Scalars['Boolean']
  fixedMonthlyFees: Array<DFixedMonthlyFeeInput>
  id: Scalars['UUID']
  monthlyPrice?: InputMaybe<DMoneyInput>
  name: Scalars['String']
  passIntegrations: Array<DPassIntegrationInput>
  passPricings: Array<DPassPricingInput>
  passTemplatesLimit?: InputMaybe<Scalars['Int']>
  passesLimit?: InputMaybe<Scalars['Int']>
  planSubscriptions: Array<DPlanSubscriptionInput>
  planType?: InputMaybe<PlanType>
  scannerUsersLimit?: InputMaybe<Scalars['Int']>
  statisticsLimit?: InputMaybe<Scalars['String']>
  supportLimit?: InputMaybe<Scalars['String']>
  usersLimit?: InputMaybe<Scalars['Int']>
  version: Scalars['Long']
  visible: Scalars['Boolean']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type DPlanSubscriptionInput = {
  deleted: Scalars['Boolean']
  id: Scalars['UUID']
  issuer: DIssuerInput
  nextBillingDate?: InputMaybe<Scalars['Instant']>
  plan: DPlanInput
  status: PlanSubscriptionStatus
  trialEndDate?: InputMaybe<Scalars['Instant']>
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type DRewardPassFieldInput = {
  deleted: Scalars['Boolean']
  id: Scalars['UUID']
  label: Scalars['String']
  orderIndex: Scalars['Int']
  passInputField?: InputMaybe<DPassInputFieldInput>
  rewardPassTemplate: DRewardPassTemplateInput
  textAlignment?: InputMaybe<TextAlignment>
  type: PassFieldType
  value?: InputMaybe<Scalars['String']>
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type DRewardPassTemplateInput = {
  backgroundColor?: InputMaybe<Scalars['String']>
  dateFormat?: InputMaybe<DateFormat>
  dateNumber?: InputMaybe<Scalars['Int']>
  deleted: Scalars['Boolean']
  description?: InputMaybe<Scalars['String']>
  expirationDate?: InputMaybe<Scalars['Instant']>
  expirationType?: InputMaybe<ExpirationType>
  fields: Array<DRewardPassFieldInput>
  foregroundColor?: InputMaybe<Scalars['String']>
  id: Scalars['UUID']
  isSharingProhibited: Scalars['Boolean']
  labelColor?: InputMaybe<Scalars['String']>
  logo?: InputMaybe<DImageInput>
  logoText?: InputMaybe<Scalars['String']>
  singleDeviceOnly: Scalars['Boolean']
  stripImage?: InputMaybe<DImageInput>
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type DRoleInput = {
  deleted: Scalars['Boolean']
  id: Scalars['UUID']
  issuer: DIssuerInput
  name: Scalars['String']
  ownerRole?: InputMaybe<Scalars['Boolean']>
  users: Array<DIssuerUserInput>
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type DScanTransactionInput = {
  actions?: InputMaybe<Array<DScanTransactionInput>>
  amountUsed?: InputMaybe<Scalars['Int']>
  dateScanned: Scalars['Instant']
  id: Scalars['UUID']
  issuer?: InputMaybe<DIssuerInput>
  pass?: InputMaybe<DPassInput>
  scan?: InputMaybe<DScanTransactionInput>
  scanType?: InputMaybe<ScanType>
  scanner?: InputMaybe<DScannerInput>
  scannerGroup?: InputMaybe<DScannerGroupInput>
  stampsUsed?: InputMaybe<Scalars['Int']>
  user?: InputMaybe<DUserInput>
}

export type DScannerGroupInput = {
  deleted: Scalars['Boolean']
  id: Scalars['UUID']
  issuer: DIssuerInput
  loginCode?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  passTemplates: Array<DPassTemplateInput>
  scanners: Array<DScannerInput>
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type DScannerInput = {
  active: Scalars['Boolean']
  authenticationToken: Scalars['String']
  currentUser?: InputMaybe<DUserInput>
  deleted: Scalars['Boolean']
  deviceId?: InputMaybe<Scalars['String']>
  disabled: Scalars['Boolean']
  externalId?: InputMaybe<Scalars['String']>
  id: Scalars['UUID']
  issuer: DIssuerInput
  name?: InputMaybe<Scalars['String']>
  scannerGroup?: InputMaybe<DScannerGroupInput>
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type DSendGridStatusInput = {
  email: DEmailInput
  id: Scalars['UUID']
  reason?: InputMaybe<Scalars['String']>
  status: SendGridStatus
  whenCompleted: Scalars['Instant']
  whenCreated: Scalars['Instant']
}

export type DSessionInput = {
  accessToken: Scalars['UUID']
  deleted: Scalars['Boolean']
  expires: Scalars['Instant']
  id: Scalars['UUID']
  sessionToken: Scalars['UUID']
  user: DUserInput
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type DStampStripImageInput = {
  bucketName: Scalars['String']
  deleted: Scalars['Boolean']
  description?: InputMaybe<Scalars['String']>
  filename: Scalars['String']
  height: Scalars['Int']
  id: Scalars['UUID']
  orderIndex: Scalars['Int']
  passTemplate?: InputMaybe<DPassTemplateInput>
  stampsLeft?: InputMaybe<Scalars['Int']>
  title?: InputMaybe<Scalars['String']>
  user?: InputMaybe<DUserInput>
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
  width: Scalars['Int']
}

export type DTermsAndConditionsInput = {
  dateAccepted: Scalars['Instant']
  id: Scalars['UUID']
  issuer: DIssuerInput
}

export type DUserDistributionTokenInput = {
  deleted: Scalars['Boolean']
  expirationDate?: InputMaybe<Scalars['Instant']>
  id: Scalars['UUID']
  passTemplate: DPassTemplateInput
  token: Scalars['UUID']
  user: DUserInput
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type DUserInput = {
  androidDeviceId?: InputMaybe<Scalars['String']>
  apiKeys: Array<DApiKeyInput>
  appPassInstance: Array<DAppPassInstanceInput>
  deleted: Scalars['Boolean']
  displayName?: InputMaybe<Scalars['String']>
  email: Scalars['String']
  id: Scalars['UUID']
  issuer?: InputMaybe<DIssuerInput>
  issuers: Array<DIssuerUserInput>
  language?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  password?: InputMaybe<Scalars['String']>
  permissions: Array<DPermissionInput>
  phoneNumber?: InputMaybe<Scalars['String']>
  photo?: InputMaybe<DImageInput>
  role: UserRole
  secretValues: Array<DIssuerUserSecretValueInput>
  sessions: Array<DSessionInput>
  smartWalletUser?: InputMaybe<Scalars['Boolean']>
  status?: InputMaybe<UserStatus>
  token?: InputMaybe<Scalars['UUID']>
  tokenExpiry?: InputMaybe<Scalars['Instant']>
  userDistributionTokens: Array<DUserDistributionTokenInput>
  verifyToken?: InputMaybe<Scalars['String']>
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export enum DateFormat {
  Day = 'DAY',
  Hour = 'HOUR',
  Month = 'MONTH',
  Year = 'YEAR',
}

export enum DemoEmailsType {
  OneDayLeft = 'ONE_DAY_LEFT',
  ThreeDaysLeft = 'THREE_DAYS_LEFT',
  TwoDaysLeft = 'TWO_DAYS_LEFT',
  ZeroDaysLeft = 'ZERO_DAYS_LEFT',
}

export type DemoInfo = BaseModel & {
  __typename?: 'DemoInfo'
  id: Scalars['UUID']
  issuerStatus?: Maybe<IssuerStatus>
  trialEndDate: Scalars['LocalDate']
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type Device = BaseModel & {
  __typename?: 'Device'
  deviceType: DeviceType
  id: Scalars['UUID']
  userAgent?: Maybe<Scalars['String']>
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type DeviceHistoryPageInfo = PaginationInfo & {
  __typename?: 'DeviceHistoryPageInfo'
  data: Array<DevicePassInstance>
  hasNext: Scalars['Boolean']
  hasPrev: Scalars['Boolean']
  pageSize: Scalars['Int']
  totalCount: Scalars['Int']
  totalPageCount: Scalars['Int']
}

export type DevicePassInstance = BaseModel & {
  __typename?: 'DevicePassInstance'
  deleted: Scalars['Boolean']
  device: Device
  id: Scalars['UUID']
  passAuthenticationToken: PassAuthenticationToken
  status: DevicePassInstanceStatus
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export enum DevicePassInstanceStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
}

export enum DeviceType {
  Android = 'ANDROID',
  Apple = 'APPLE',
  Other = 'OTHER',
  SmartWallet = 'SMART_WALLET',
  WalletPass = 'WALLET_PASS',
}

export type DeviceTypeCount = {
  __typename?: 'DeviceTypeCount'
  count: Scalars['Int']
  deviceType: DeviceType
}

export type Discount = {
  __typename?: 'Discount'
  discount?: Maybe<Scalars['Float']>
  endDate?: Maybe<Scalars['Instant']>
}

export type DiscountDataInput = {
  discount: Scalars['Float']
  endDate: Scalars['String']
  passTemplateId: Scalars['String']
}

export type DynamicBarcodeDataInput = {
  code: Scalars['String']
  date: Scalars['String']
}

export enum DynamicBarcodeType {
  Basic = 'BASIC',
  IncludeTemplateId = 'INCLUDE_TEMPLATE_ID',
}

export type Email = BaseModel & {
  __typename?: 'Email'
  content?: Maybe<Scalars['String']>
  contentType?: Maybe<Scalars['String']>
  fromEmail?: Maybe<Scalars['String']>
  id: Scalars['UUID']
  passId?: Maybe<Scalars['UUID']>
  sendGridId?: Maybe<Scalars['String']>
  sendGridStatus?: Maybe<SendGridStatus>
  status?: Maybe<EmailStatus>
  statuses: Array<EmailStatus>
  subject: Scalars['String']
  toEmail: Scalars['String']
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
  whenSent?: Maybe<Scalars['Instant']>
}

export type EmailDataInput = {
  /** Emails body, accepts HTML and {{handlebar}} format. */
  body: Scalars['String']
  /** Emails subject, accepts {{handlebar}} format. */
  subject: Scalars['String']
}

export type EmailDistributionTransaction = {
  __typename?: 'EmailDistributionTransaction'
  emails: Array<Email>
  id: Scalars['UUID']
  status?: Maybe<EmailDistributionTransactionStatus>
  subject: Scalars['String']
  totalAmount: Scalars['Int']
}

export type EmailDistributionTransactionStatistics = {
  __typename?: 'EmailDistributionTransactionStatistics'
  delivered: Scalars['Int']
  failed: Scalars['Int']
  opened: Scalars['Int']
  processed: Scalars['Int']
  sent: Scalars['Int']
  status: EmailDistributionTransactionStatus
  time: Scalars['Instant']
}

export enum EmailDistributionTransactionStatus {
  Cancelled = 'CANCELLED',
  Done = 'DONE',
  NotStarted = 'NOT_STARTED',
  Processing = 'PROCESSING',
  Queued = 'QUEUED',
}

export enum EmailDistributionTransactionType {
  List = 'LIST',
  ResendUnclaimed = 'RESEND_UNCLAIMED',
}

export type EmailPage = PaginationInfo & {
  __typename?: 'EmailPage'
  data: Array<Email>
  hasNext: Scalars['Boolean']
  hasPrev: Scalars['Boolean']
  pageSize: Scalars['Int']
  totalCount: Scalars['Int']
  totalPageCount: Scalars['Int']
}

export type EmailStatus = {
  __typename?: 'EmailStatus'
  email: Email
  id: Scalars['UUID']
  reason?: Maybe<Scalars['String']>
  status: SendGridStatus
  whenCompleted: Scalars['Instant']
}

export type ExpenceDataInput = {
  expenseType: MonthlyFeeType
  monthlyPrice: Scalars['Int']
  quantity: Scalars['Int']
}

export type Expense = BaseModel & {
  __typename?: 'Expense'
  discount: Scalars['Float']
  expenseType: MonthlyFeeType
  id: Scalars['UUID']
  monthlyPrice: Scalars['Float']
  quantity: Scalars['Int']
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenDeleted?: Maybe<Scalars['LocalDate']>
  whenModified: Scalars['Instant']
}

export enum ExpirationType {
  ExpirationDate = 'EXPIRATION_DATE',
  SelectedTime = 'SELECTED_TIME',
}

export type ExternalApi = BaseModel & {
  __typename?: 'ExternalAPI'
  externalAPIType: ExternalApiType
  id: Scalars['UUID']
  name?: Maybe<Scalars['String']>
  outputs: Array<ExternalApiOutput>
  parameters: Array<ExternalApiParameter>
  queryType: ExternalApiQueryType
  url: Scalars['String']
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export enum ExternalApiArrayMatchType {
  FirstItem = 'FIRST_ITEM',
  LastItem = 'LAST_ITEM',
}

export type ExternalApiDataInput = {
  externalAPIType: ExternalApiType
  id?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  outputs?: InputMaybe<Array<ExternalApiOutputDataInput>>
  parameters?: InputMaybe<Array<ExternalApiParameterDataInput>>
  queryType: ExternalApiQueryType
  url?: InputMaybe<Scalars['String']>
}

export type ExternalApiOutput = BaseModel & {
  __typename?: 'ExternalAPIOutput'
  description?: Maybe<Scalars['String']>
  id: Scalars['UUID']
  innerPath?: Maybe<Scalars['String']>
  label: Scalars['String']
  matchType: ExternalApiArrayMatchType
  passInputField: PassInputField
  path: Scalars['String']
  searchMatch?: Maybe<Scalars['String']>
  searchPath?: Maybe<Scalars['String']>
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type ExternalApiOutputDataInput = {
  description?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['String']>
  innerPath?: InputMaybe<Scalars['String']>
  label?: InputMaybe<Scalars['String']>
  matchType: ExternalApiArrayMatchType
  passInputFieldId: Scalars['String']
  path: Scalars['String']
  searchMatch?: InputMaybe<Scalars['String']>
  searchPath?: InputMaybe<Scalars['String']>
}

export type ExternalApiParameter = BaseModel & {
  __typename?: 'ExternalAPIParameter'
  id: Scalars['UUID']
  name: Scalars['String']
  parameterType: ExternalApiParameterType
  passInputField?: Maybe<PassInputField>
  secret?: Maybe<IssuerSecret>
  userSecret?: Maybe<IssuerUserSecret>
  value?: Maybe<Scalars['String']>
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type ExternalApiParameterDataInput = {
  id?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  parameterType: ExternalApiParameterType
  passInputFieldId?: InputMaybe<Scalars['String']>
  secretId?: InputMaybe<Scalars['String']>
  userSecretId?: InputMaybe<Scalars['String']>
  value?: InputMaybe<Scalars['String']>
}

export enum ExternalApiParameterType {
  Get = 'GET',
  Header = 'HEADER',
  Post = 'POST',
  UrlAppend = 'URL_APPEND',
}

export enum ExternalApiQueryType {
  OnCreateAndUpdate = 'ON_CREATE_AND_UPDATE',
  OnCreateOnly = 'ON_CREATE_ONLY',
}

export enum ExternalApiType {
  Json = 'JSON',
}

export type ExternalIdentifier = {
  __typename?: 'ExternalIdentifier'
  externalIdentifier: Scalars['String']
}

export type ExternalIdentifierDataInput = {
  externalIdentifier: Scalars['String']
  id: Scalars['UUID']
}

export type ExternalIdentifierPageInfo = PaginationInfo & {
  __typename?: 'ExternalIdentifierPageInfo'
  data: Array<ExternalIdentifier>
  hasNext: Scalars['Boolean']
  hasPrev: Scalars['Boolean']
  pageSize: Scalars['Int']
  totalCount: Scalars['Int']
  totalPageCount: Scalars['Int']
}

export type FeatureFlag = {
  __typename?: 'FeatureFlag'
  active: Scalars['Boolean']
  activeWhen?: Maybe<Scalars['Instant']>
  issuerExemptions: Array<FeatureFlagIssuerExemption>
  key: Scalars['String']
  whenActivated?: Maybe<Scalars['Instant']>
  whenCreated: Scalars['Instant']
}

export type FeatureFlagIssuerExemption = {
  __typename?: 'FeatureFlagIssuerExemption'
  active: Scalars['Boolean']
  issuer: Issuer
  whenActivated?: Maybe<Scalars['Instant']>
}

export type File = {
  __typename?: 'File'
  displayUrl: Scalars['String']
  filename?: Maybe<Scalars['String']>
  id: Scalars['UUID']
  originalFilename?: Maybe<Scalars['String']>
  originalUrl?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
}

export type FileDataInput = {
  displayUrl?: InputMaybe<Scalars['String']>
  filename?: InputMaybe<Scalars['String']>
  id: Scalars['String']
  originalFilename?: InputMaybe<Scalars['String']>
  originalUrl?: InputMaybe<Scalars['String']>
  url?: InputMaybe<Scalars['String']>
}

export type FixedMonthlyFee = BaseModel & {
  __typename?: 'FixedMonthlyFee'
  id: Scalars['UUID']
  monthlyFeeType: MonthlyFeeType
  monthlyPrice: Money
  plan?: Maybe<Plan>
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type FixedMonthlyFeeDataInput = {
  monthlyFeeType: MonthlyFeeType
  monthlyPrice: MoneyDataNullableInput
}

export enum GenericOrderByColumn {
  Version = 'VERSION',
  WhenCreated = 'WHEN_CREATED',
  WhenModified = 'WHEN_MODIFIED',
}

export type GenericOrderInput = {
  column?: InputMaybe<GenericOrderByColumn>
  columnAsString?: InputMaybe<Scalars['String']>
  dir?: InputMaybe<OrderByDirection>
}

export type GenericOrderMultiInput = {
  column: Scalars['String']
  dir?: InputMaybe<OrderByDirection>
}

export type HideByStatusTypeInput = {
  deleted?: InputMaybe<Scalars['Boolean']>
  expired?: InputMaybe<Scalars['Boolean']>
  voided?: InputMaybe<Scalars['Boolean']>
}

export type Image = {
  __typename?: 'Image'
  description?: Maybe<Scalars['String']>
  filename: Scalars['String']
  height: Scalars['Int']
  id: Scalars['UUID']
  originalUrl?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  url: Scalars['String']
  width: Scalars['Int']
}

export type ImageDataInput = {
  description?: InputMaybe<Scalars['String']>
  filename?: InputMaybe<Scalars['String']>
  height?: InputMaybe<Scalars['Int']>
  id?: InputMaybe<Scalars['String']>
  imageBase64String?: InputMaybe<Scalars['String']>
  originalUrl?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
  url?: InputMaybe<Scalars['String']>
  width?: InputMaybe<Scalars['Int']>
}

export type IntRangeInfo = {
  __typename?: 'IntRangeInfo'
  first: Scalars['Int']
  last: Scalars['Int']
  step: Scalars['Int']
}

export type Invite = {
  __typename?: 'Invite'
  companyId: Scalars['UUID']
  companyName?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  hasAccount: Scalars['Boolean']
  id: Scalars['UUID']
  isAccepted: Scalars['Boolean']
  role?: Maybe<Scalars['String']>
}

export type Issuer = BaseModel & {
  __typename?: 'Issuer'
  address?: Maybe<Scalars['String']>
  contactEmail?: Maybe<Scalars['String']>
  contactName?: Maybe<Scalars['String']>
  contactPhone?: Maybe<Scalars['String']>
  currentPlanSubscription?: Maybe<PlanSubscription>
  discounts?: Maybe<Array<IssuerDiscount>>
  id: Scalars['UUID']
  idNumber?: Maybe<Scalars['String']>
  invoiceEmail?: Maybe<Scalars['String']>
  logoIcon?: Maybe<Image>
  name?: Maybe<Scalars['String']>
  paymentInfo?: Maybe<PaymentInfo>
  planSubscriptions: Array<PlanSubscriptionVersion>
  secrets?: Maybe<Array<IssuerSecret>>
  serviceContactEmail?: Maybe<Scalars['String']>
  skipFooter: Scalars['Boolean']
  status?: Maybe<IssuerStatus>
  termsAndConditionsChecked: Scalars['Boolean']
  town?: Maybe<Scalars['String']>
  userSecrets?: Maybe<Array<IssuerUserSecret>>
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
  zipcode?: Maybe<Scalars['String']>
}

export type IssuerDataInput = {
  address?: InputMaybe<Scalars['String']>
  contactEmail?: InputMaybe<Scalars['String']>
  contactName?: InputMaybe<Scalars['String']>
  contactPhone?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Scalars['String']>
  idNumber?: InputMaybe<Scalars['String']>
  invoiceEmail?: InputMaybe<Scalars['String']>
  logoIcon?: InputMaybe<ImageDataInput>
  name?: InputMaybe<Scalars['String']>
  password?: InputMaybe<Scalars['String']>
  paymentInfo?: InputMaybe<PaymentInfoDataInput>
  planType?: InputMaybe<PlanType>
  serviceContactEmail?: InputMaybe<Scalars['String']>
  skipFooter?: InputMaybe<Scalars['Boolean']>
  termsAndConditions?: InputMaybe<Scalars['Boolean']>
  town?: InputMaybe<Scalars['String']>
  zipcode?: InputMaybe<Scalars['String']>
}

export type IssuerDiscount = BaseModel & {
  __typename?: 'IssuerDiscount'
  discount: Scalars['Float']
  endDate?: Maybe<Scalars['Instant']>
  id: Scalars['UUID']
  startDate?: Maybe<Scalars['Instant']>
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type IssuerDiscountDataInput = {
  discount: Scalars['Float']
  endDate?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['String']>
  issuerId: Scalars['String']
  startDate?: InputMaybe<Scalars['String']>
}

export type IssuerPageInfo = PaginationInfo & {
  __typename?: 'IssuerPageInfo'
  data: Array<Issuer>
  hasNext: Scalars['Boolean']
  hasPrev: Scalars['Boolean']
  pageSize: Scalars['Int']
  totalCount: Scalars['Int']
  totalPageCount: Scalars['Int']
}

export type IssuerSecret = BaseModel & {
  __typename?: 'IssuerSecret'
  id: Scalars['UUID']
  name: Scalars['String']
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type IssuerSecretDataInput = {
  id?: InputMaybe<Scalars['String']>
  name: Scalars['String']
  value?: InputMaybe<Scalars['String']>
}

export enum IssuerStatus {
  Accepted = 'ACCEPTED',
  Active = 'ACTIVE',
  Cancelled = 'CANCELLED',
  DemoExpired = 'DEMO_EXPIRED',
  InReview = 'IN_REVIEW',
}

export type IssuerTerms = BaseModel & {
  __typename?: 'IssuerTerms'
  id: Scalars['UUID']
  paymentTerms?: Maybe<File>
  paymentTermsUrl?: Maybe<Scalars['String']>
  privacyPolicy?: Maybe<File>
  privacyPolicyUrl?: Maybe<Scalars['String']>
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type IssuerTermsDataInput = {
  id?: InputMaybe<Scalars['String']>
  paymentTerms?: InputMaybe<FileDataInput>
  paymentTermsUrl?: InputMaybe<Scalars['String']>
  privacyPolicy?: InputMaybe<FileDataInput>
  privacyPolicyUrl?: InputMaybe<Scalars['String']>
}

export type IssuerUser = {
  __typename?: 'IssuerUser'
  issuer: Issuer
  role?: Maybe<Role>
}

export type IssuerUserSecret = BaseModel & {
  __typename?: 'IssuerUserSecret'
  id: Scalars['UUID']
  name: Scalars['String']
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type IssuerUserSecretDataInput = {
  id?: InputMaybe<Scalars['String']>
  name: Scalars['String']
}

export type IssuerUserSecretValue = BaseModel & {
  __typename?: 'IssuerUserSecretValue'
  id: Scalars['UUID']
  secret: IssuerUserSecret
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type IssuerUserSecretValueDataInput = {
  id?: InputMaybe<Scalars['String']>
  secretId: Scalars['String']
  value?: InputMaybe<Scalars['String']>
}

export type KeyValuePair = {
  __typename?: 'KeyValuePair'
  key: Scalars['String']
  value: Scalars['String']
}

export enum LanguageType {
  Is = 'IS',
}

export type LastRedeemed = {
  __typename?: 'LastRedeemed'
  date: Scalars['String']
}

export type Location = {
  __typename?: 'Location'
  id: Scalars['UUID']
  latitude: Scalars['Float']
  longitude: Scalars['Float']
  relevantText: Scalars['String']
}

export type LocationDataInput = {
  id?: InputMaybe<Scalars['String']>
  latitude?: InputMaybe<Scalars['Float']>
  longitude?: InputMaybe<Scalars['Float']>
  name?: InputMaybe<Scalars['String']>
  relevantText?: InputMaybe<Scalars['String']>
}

export type Money = {
  __typename?: 'Money'
  amount: Scalars['Float']
  currency: Scalars['String']
}

export type MoneyDataInput = {
  amount: Scalars['Float']
  currency: Scalars['String']
}

export type MoneyDataNullableInput = {
  amount?: InputMaybe<Scalars['Float']>
  currency: Scalars['String']
}

export enum MonthlyFeeType {
  ApiConnection = 'API_CONNECTION',
  Dkplus = 'DKPLUS',
  ExternalApi = 'EXTERNAL_API',
  ExternalAuthentication = 'EXTERNAL_AUTHENTICATION',
  GeneralWork = 'GENERAL_WORK',
  PassTemplateWork = 'PASS_TEMPLATE_WORK',
  ScannerLicense = 'SCANNER_LICENSE',
  ServiceFee = 'SERVICE_FEE',
  Specialist = 'SPECIALIST',
  StarterAdvice = 'STARTER_ADVICE',
}

export type Mutation = {
  __typename?: 'Mutation'
  addEmailToInputFields: PassTemplate
  addIssuerExemptionToFeatureFlag: FeatureFlag
  addUserToIssuer: Scalars['Boolean']
  batchUpdateScanner: Scalars['Boolean']
  bulkUpsertThumbnails: Scalars['Boolean']
  cancelSubscription: Scalars['Boolean']
  changeIssuerExemptionStatusOfFeatureFlag: FeatureFlag
  changePassword: Scalars['Boolean']
  changeUserRole: Scalars['Boolean']
  changeUserStatus: Scalars['Boolean']
  clearExternalIdentifiers: Scalars['Int']
  confirmEmail: Scalars['Boolean']
  confirmOrDenyIssuerInvite: Scalars['Boolean']
  confirmSubscription: Scalars['Boolean']
  createFeatureFlag: FeatureFlag
  deactivateAllDevicePassInstances: Scalars['Boolean']
  deactivateDevicePassInstance: Scalars['Boolean']
  deleteAllUnclaimedPasses: Scalars['Boolean']
  deleteAndReturnPass: Pass
  deleteApiKey: Scalars['Boolean']
  deleteAppPassInstance: Scalars['Boolean']
  deleteExternalIdentifier: PassTemplate
  deleteFeatureFlag: Scalars['Boolean']
  deleteIssuer: Scalars['Boolean']
  deleteIssuerDiscount: Scalars['Boolean']
  deleteIssuerExemptionOfFeatureFlag: Scalars['Boolean']
  deleteIssuerSecret: Scalars['Boolean']
  deleteIssuerUserSecret: Scalars['Boolean']
  deleteIssuerUserSecretValue: Scalars['Boolean']
  deletePass: Scalars['Boolean']
  deletePassTemplate: Scalars['Boolean']
  deletePlan: Scalars['Boolean']
  deleteRole: Scalars['Boolean']
  deleteScanner: Scalars['Boolean']
  deleteScannerGroup: Scalars['Boolean']
  deleteStoragePass: Scalars['Boolean']
  deleteUniquePass: Scalars['Boolean']
  deleteUser: Scalars['Boolean']
  disguiseAs?: Maybe<Issuer>
  distributePassesByEmail: Scalars['UUID']
  dkPlusLoginStep1: Array<DkPlusCompanyType>
  dkPlusLoginStep2: Scalars['Boolean']
  duplicatePassTemplate: PassTemplate
  executeAutomation: Scalars['String']
  expireIssuer: Scalars['Boolean']
  forgotPassword: Scalars['Boolean']
  gaman: Scalars['Boolean']
  generateNewPassTemplateDistributionToken: Scalars['String']
  generateNewPosCode: Pass
  inviteUserToIssuer: Scalars['Boolean']
  login?: Maybe<User>
  loginSmartScanner?: Maybe<UserOld>
  loginSmartScannerQR: Scanner
  loginSmartScannerV3: Scanner
  logout: Scalars['Boolean']
  posDistributionPass: Pass
  reactivateDevicePassInstance: Scalars['Boolean']
  redeemPassbuilderPass: Scalars['Boolean']
  redeemPassbuilderPunchPass: PassbuilderPass
  refreshScannerGroupCode: Scalars['Boolean']
  register: Scalars['Boolean']
  registerFromInvite: Scalars['Boolean']
  registerUser: Scalars['Boolean']
  removeNode: Scalars['Boolean']
  removeUser: Scalars['Boolean']
  removeUserOption: Scalars['Boolean']
  resendEmail: Email
  resendUnclaimedPasses: Scalars['String']
  resendUserInvite: Scalars['Boolean']
  resetPassword: Scalars['Boolean']
  restoreUser: Scalars['Boolean']
  scanAction: Scalars['Boolean']
  sendDaysLeftOfDemo: Scalars['Boolean']
  sendPassEmails: SendPassEmailsResponse
  sendWelcomeEmail: Scalars['Boolean']
  setActivePlanForIssuer: PlanSubscription
  setActivePlanSubscription: PlanSubscription
  setDaysLeftOfDemo: Scalars['Boolean']
  setDiscountOnTemplate: Scalars['Boolean']
  setInTrial: Scalars['Boolean']
  setIssuerExpired: Scalars['Boolean']
  subtractAmountOnGiftPass: Pass
  switchIssuer: Scalars['Boolean']
  unvoidAndReturnPass: Pass
  unvoidPass: Scalars['Boolean']
  unvoidPassTemplate: Scalars['Boolean']
  updateCount: Pass
  updateFeatureFlagStatus: Scalars['Boolean']
  updateIssuer: Issuer
  updateIssuerInfo: Issuer
  updatePass: Pass
  updatePassAuthenticationTokenStatus: PassAuthenticationToken
  updatePassByScannerAction: Scalars['Boolean']
  updateQrCodeImage: PassTemplate
  updateStamps: Pass
  updateStatusOnPass: Pass
  updateStatusOnPassWithDynamicBarcode: Pass
  updateTrialEndDate: Scalars['Boolean']
  upsertApiKey: ApiKey
  upsertAppPassInstance: AppPassInstance
  upsertAppUser: User
  upsertAutomation: Automation
  upsertAutomationFromEditor: AutomationEditor
  upsertDistributionPass: Pass
  upsertFixedMonthlyFee: FixedMonthlyFee
  upsertFixedMonthlyFees: Array<FixedMonthlyFee>
  upsertIntegration: Scalars['Boolean']
  upsertIssuerDiscount: IssuerDiscount
  upsertIssuerSecret: IssuerSecret
  upsertIssuerUserSecret: IssuerUserSecret
  upsertIssuerUserSecretValue: IssuerUserSecretValue
  /** @deprecated Not used, replace with Use inside pass template */
  upsertLocation?: Maybe<Location>
  upsertNode: Node
  upsertNodes: Array<Node>
  upsertNodesFromEditor: Array<Node>
  upsertNumberOfPasses: Scalars['Int']
  upsertOption: NodeOption
  upsertOrderInfo: OrderInfo
  upsertOtherExpenses: PlatformSubscription
  upsertPass: Pass
  upsertPassIntegration: PassIntegration
  upsertPassIntegrations: Array<PassIntegration>
  upsertPassPricing: PassPricing
  upsertPassPricings: Array<PassPricing>
  upsertPassTemplate: PassTemplate
  upsertPassTemplateExternalIdentifiers: Scalars['Int']
  upsertPasses: Array<Pass>
  upsertPaymentInfo: PaymentInfo
  upsertPlan: Plan
  upsertPrices: Prices
  upsertRole: Role
  upsertScanner: Scanner
  upsertScannerGroup: ScannerGroup
  upsertUser: User
  upsertUserAsAdmin: User
  upsertUserOption: Array<UserOptionData>
  voidAndReturnPass: Pass
  voidPass: Scalars['Boolean']
  voidPassTemplate: Scalars['Boolean']
  voidUniquePass: Scalars['Boolean']
}

export type MutationAddEmailToInputFieldsArgs = {
  passTemplateId: Scalars['String']
}

export type MutationAddIssuerExemptionToFeatureFlagArgs = {
  issuerId: Scalars['String']
  key: Scalars['String']
}

export type MutationAddUserToIssuerArgs = {
  issuerId?: InputMaybe<Scalars['String']>
  userId: Scalars['String']
}

export type MutationBatchUpdateScannerArgs = {
  data: ScannerDataInput
  scannerIds: Array<Scalars['String']>
}

export type MutationBulkUpsertThumbnailsArgs = {
  data: Array<ThumbnailDataInput>
}

export type MutationChangeIssuerExemptionStatusOfFeatureFlagArgs = {
  issuerId: Scalars['String']
  key: Scalars['String']
  status: Scalars['Boolean']
}

export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']
  newPassword: Scalars['String']
}

export type MutationChangeUserRoleArgs = {
  issuerId?: InputMaybe<Scalars['String']>
  roleId: Scalars['String']
  userId?: InputMaybe<Scalars['String']>
}

export type MutationChangeUserStatusArgs = {
  userId: Scalars['String']
}

export type MutationClearExternalIdentifiersArgs = {
  passTemplateId: Scalars['String']
}

export type MutationConfirmEmailArgs = {
  token: Scalars['String']
}

export type MutationConfirmOrDenyIssuerInviteArgs = {
  accepted: Scalars['Boolean']
  issuerId: Scalars['String']
  switchIssuer?: InputMaybe<Scalars['Boolean']>
}

export type MutationCreateFeatureFlagArgs = {
  key: Scalars['String']
}

export type MutationDeactivateAllDevicePassInstancesArgs = {
  passId: Scalars['String']
}

export type MutationDeactivateDevicePassInstanceArgs = {
  id: Scalars['String']
}

export type MutationDeleteAllUnclaimedPassesArgs = {
  before?: InputMaybe<Scalars['String']>
  passTemplateId: Scalars['String']
}

export type MutationDeleteAndReturnPassArgs = {
  id: Scalars['String']
}

export type MutationDeleteApiKeyArgs = {
  id: Scalars['String']
}

export type MutationDeleteAppPassInstanceArgs = {
  id: Scalars['String']
}

export type MutationDeleteExternalIdentifierArgs = {
  externalIdentifier: Scalars['String']
  passTemplateId: Scalars['String']
}

export type MutationDeleteFeatureFlagArgs = {
  key: Scalars['String']
}

export type MutationDeleteIssuerArgs = {
  id: Scalars['String']
}

export type MutationDeleteIssuerDiscountArgs = {
  id: Scalars['String']
}

export type MutationDeleteIssuerExemptionOfFeatureFlagArgs = {
  issuerId: Scalars['String']
  key: Scalars['String']
}

export type MutationDeleteIssuerSecretArgs = {
  id: Scalars['String']
}

export type MutationDeleteIssuerUserSecretArgs = {
  id: Scalars['String']
}

export type MutationDeleteIssuerUserSecretValueArgs = {
  id: Scalars['String']
}

export type MutationDeletePassArgs = {
  id: Scalars['String']
}

export type MutationDeletePassTemplateArgs = {
  id: Scalars['String']
}

export type MutationDeletePlanArgs = {
  planId: Scalars['String']
}

export type MutationDeleteRoleArgs = {
  id: Scalars['String']
}

export type MutationDeleteScannerArgs = {
  id: Scalars['String']
}

export type MutationDeleteScannerGroupArgs = {
  id: Scalars['String']
}

export type MutationDeleteStoragePassArgs = {
  passId: Scalars['String']
}

export type MutationDeleteUniquePassArgs = {
  passTemplateId: Scalars['String']
  values: Array<PassInputFieldValueDataInput>
}

export type MutationDeleteUserArgs = {
  id: Scalars['String']
  shouldPermanentlyDelete?: InputMaybe<Scalars['Boolean']>
}

export type MutationDisguiseAsArgs = {
  id: Scalars['String']
}

export type MutationDistributePassesByEmailArgs = {
  emailData: EmailDataInput
  passData: Array<PassEmailDataInput>
  passTemplateId: Scalars['String']
}

export type MutationDkPlusLoginStep1Args = {
  password: Scalars['String']
  username: Scalars['String']
}

export type MutationDkPlusLoginStep2Args = {
  companyId: Scalars['String']
  password: Scalars['String']
  username: Scalars['String']
}

export type MutationDuplicatePassTemplateArgs = {
  passTemplateId: Scalars['String']
}

export type MutationExecuteAutomationArgs = {
  id: Scalars['String']
  nodeId: Scalars['String']
}

export type MutationExpireIssuerArgs = {
  id: Scalars['String']
}

export type MutationForgotPasswordArgs = {
  email: Scalars['String']
}

export type MutationGenerateNewPassTemplateDistributionTokenArgs = {
  id: Scalars['String']
}

export type MutationGenerateNewPosCodeArgs = {
  passId: Scalars['String']
}

export type MutationInviteUserToIssuerArgs = {
  email: Scalars['String']
  roleId: Scalars['String']
}

export type MutationLoginArgs = {
  email: Scalars['String']
  password: Scalars['String']
}

export type MutationLoginSmartScannerArgs = {
  email: Scalars['String']
  password: Scalars['String']
}

export type MutationLoginSmartScannerQrArgs = {
  code: Scalars['String']
  deviceId: Scalars['String']
  deviceName?: InputMaybe<Scalars['String']>
}

export type MutationLoginSmartScannerV3Args = {
  deviceId: Scalars['String']
  deviceName?: InputMaybe<Scalars['String']>
  email: Scalars['String']
  password: Scalars['String']
}

export type MutationPosDistributionPassArgs = {
  code: Scalars['String']
  distributionToken: Scalars['String']
  passTemplateId: Scalars['String']
}

export type MutationReactivateDevicePassInstanceArgs = {
  id: Scalars['String']
}

export type MutationRedeemPassbuilderPassArgs = {
  passId: Scalars['String']
}

export type MutationRedeemPassbuilderPunchPassArgs = {
  passId: Scalars['String']
  punches: Scalars['Int']
}

export type MutationRefreshScannerGroupCodeArgs = {
  id: Scalars['String']
}

export type MutationRegisterArgs = {
  data: RegistrationDataInput
}

export type MutationRegisterFromInviteArgs = {
  data: RegistrationInviteDataInput
}

export type MutationRegisterUserArgs = {
  data: RegisterDataInput
}

export type MutationRemoveNodeArgs = {
  nodeId: Scalars['String']
}

export type MutationRemoveUserArgs = {
  issuerUserId: Scalars['String']
}

export type MutationRemoveUserOptionArgs = {
  option: Scalars['String']
  userId?: InputMaybe<Scalars['String']>
}

export type MutationResendEmailArgs = {
  id: Scalars['String']
}

export type MutationResendUnclaimedPassesArgs = {
  emailData: EmailDataInput
  passTemplateId: Scalars['String']
}

export type MutationResendUserInviteArgs = {
  id: Scalars['String']
}

export type MutationResetPasswordArgs = {
  password: Scalars['String']
  token: Scalars['String']
}

export type MutationRestoreUserArgs = {
  id: Scalars['String']
}

export type MutationScanActionArgs = {
  scannerData: ScannerActionDataInput
  transactionId: Scalars['String']
}

export type MutationSendDaysLeftOfDemoArgs = {
  daysLeft: Scalars['Int']
}

export type MutationSendPassEmailsArgs = {
  content: Scalars['String']
  passIds?: InputMaybe<Array<Scalars['String']>>
  passTemplateId?: InputMaybe<Scalars['String']>
  subject: Scalars['String']
}

export type MutationSendWelcomeEmailArgs = {
  issuerId: Scalars['String']
}

export type MutationSetActivePlanForIssuerArgs = {
  issuerId: Scalars['String']
  planId: Scalars['String']
}

export type MutationSetActivePlanSubscriptionArgs = {
  planId: Scalars['String']
}

export type MutationSetDaysLeftOfDemoArgs = {
  daysLeft: Scalars['Long']
}

export type MutationSetDiscountOnTemplateArgs = {
  data: DiscountDataInput
}

export type MutationSetInTrialArgs = {
  issuerId: Scalars['String']
}

export type MutationSubtractAmountOnGiftPassArgs = {
  amountToSubtract: Scalars['Int']
  passId: Scalars['String']
}

export type MutationSwitchIssuerArgs = {
  issuerId: Scalars['String']
}

export type MutationUnvoidAndReturnPassArgs = {
  id: Scalars['String']
}

export type MutationUnvoidPassArgs = {
  id: Scalars['String']
}

export type MutationUnvoidPassTemplateArgs = {
  id: Scalars['String']
}

export type MutationUpdateCountArgs = {
  count: Scalars['Int']
  id: Scalars['String']
}

export type MutationUpdateFeatureFlagStatusArgs = {
  activeWhen?: InputMaybe<Scalars['String']>
  key: Scalars['String']
  status: Scalars['Boolean']
}

export type MutationUpdateIssuerArgs = {
  data: IssuerDataInput
}

export type MutationUpdateIssuerInfoArgs = {
  data: IssuerDataInput
  issuerId: Scalars['String']
}

export type MutationUpdatePassArgs = {
  expirationDate?: InputMaybe<Scalars['String']>
  passId?: InputMaybe<Scalars['String']>
  passTemplateId: Scalars['String']
  thumbnail?: InputMaybe<ImageDataInput>
  values?: InputMaybe<Array<PassInputFieldValueDataInput>>
}

export type MutationUpdatePassAuthenticationTokenStatusArgs = {
  id: Scalars['String']
  status: PassAuthenticationTokenStatus
}

export type MutationUpdatePassByScannerActionArgs = {
  scannerData: ScannerActionDataInput
}

export type MutationUpdateQrCodeImageArgs = {
  passTemplateId: Scalars['String']
  qrCodeImage?: InputMaybe<ImageDataInput>
}

export type MutationUpdateStampsArgs = {
  id: Scalars['String']
  stampsLeft: Scalars['Int']
}

export type MutationUpdateStatusOnPassArgs = {
  amountToSubtract?: InputMaybe<Scalars['Int']>
  passId: Scalars['String']
  stamps?: InputMaybe<Scalars['Int']>
}

export type MutationUpdateStatusOnPassWithDynamicBarcodeArgs = {
  amountToSubtract?: InputMaybe<Scalars['Int']>
  dynamicBarcodeData: DynamicBarcodeDataInput
  stamps?: InputMaybe<Scalars['Int']>
}

export type MutationUpdateTrialEndDateArgs = {
  issuerId?: InputMaybe<Scalars['String']>
  trialEndDate: Scalars['String']
}

export type MutationUpsertApiKeyArgs = {
  data: ApiKeyDataInput
}

export type MutationUpsertAppPassInstanceArgs = {
  data: AppPassInstanceDataInput
}

export type MutationUpsertAppUserArgs = {
  data: AppUserDataInput
}

export type MutationUpsertAutomationArgs = {
  data: AutomationDataInput
}

export type MutationUpsertAutomationFromEditorArgs = {
  data: AutomationEditorDataInput
}

export type MutationUpsertDistributionPassArgs = {
  data: PassDataInput
}

export type MutationUpsertFixedMonthlyFeeArgs = {
  data: FixedMonthlyFeeDataInput
}

export type MutationUpsertFixedMonthlyFeesArgs = {
  data: Array<FixedMonthlyFeeDataInput>
}

export type MutationUpsertIntegrationArgs = {
  amountToChange?: InputMaybe<Scalars['Int']>
  enable: Scalars['Boolean']
  integrationType: MonthlyFeeType
  issuerId?: InputMaybe<Scalars['String']>
}

export type MutationUpsertIssuerDiscountArgs = {
  data: IssuerDiscountDataInput
}

export type MutationUpsertIssuerSecretArgs = {
  data: IssuerSecretDataInput
}

export type MutationUpsertIssuerUserSecretArgs = {
  data: IssuerUserSecretDataInput
}

export type MutationUpsertIssuerUserSecretValueArgs = {
  data: IssuerUserSecretValueDataInput
}

export type MutationUpsertLocationArgs = {
  data: LocationDataInput
}

export type MutationUpsertNodeArgs = {
  data: NodeDataInput
}

export type MutationUpsertNodesArgs = {
  automationId: Scalars['String']
  data: Array<NodeDataInput>
}

export type MutationUpsertNodesFromEditorArgs = {
  automationId: Scalars['String']
  data: Array<NodeEditorDataInput>
}

export type MutationUpsertNumberOfPassesArgs = {
  numberOfPasses: Scalars['Int']
  passTemplateId: Scalars['String']
}

export type MutationUpsertOptionArgs = {
  data: NodeOptionDataInput
  nodeId: Scalars['String']
}

export type MutationUpsertOrderInfoArgs = {
  data: OrderInfoDataInput
  issuer: DIssuerInput
}

export type MutationUpsertOtherExpensesArgs = {
  data: SubscriptionDataInput
  month: Scalars['Int']
  year: Scalars['Int']
}

export type MutationUpsertPassArgs = {
  data: PassDataInput
}

export type MutationUpsertPassIntegrationArgs = {
  data: PassIntegrationDataInput
}

export type MutationUpsertPassIntegrationsArgs = {
  data: Array<PassIntegrationDataInput>
}

export type MutationUpsertPassPricingArgs = {
  data: PassPricingDataInput
}

export type MutationUpsertPassPricingsArgs = {
  data: Array<PassPricingDataInput>
}

export type MutationUpsertPassTemplateArgs = {
  data: PassTemplateDataInput
}

export type MutationUpsertPassTemplateExternalIdentifiersArgs = {
  externalIdentifiers: Array<Scalars['String']>
  passTemplateId: Scalars['String']
}

export type MutationUpsertPassesArgs = {
  data: Array<PassDataInput>
}

export type MutationUpsertPaymentInfoArgs = {
  data: PaymentInfoDataInput
}

export type MutationUpsertPlanArgs = {
  data: PlanDataInput
}

export type MutationUpsertPricesArgs = {
  data: PricesDataInput
}

export type MutationUpsertRoleArgs = {
  data: RoleDataInput
}

export type MutationUpsertScannerArgs = {
  data: ScannerDataInput
}

export type MutationUpsertScannerGroupArgs = {
  data: ScannerGroupDataInput
}

export type MutationUpsertUserArgs = {
  data: UserDataInput
}

export type MutationUpsertUserAsAdminArgs = {
  data: UserDataInput
}

export type MutationUpsertUserOptionArgs = {
  option: Scalars['String']
  userId?: InputMaybe<Scalars['String']>
  value: Scalars['String']
}

export type MutationVoidAndReturnPassArgs = {
  id: Scalars['String']
}

export type MutationVoidPassArgs = {
  id: Scalars['String']
}

export type MutationVoidPassTemplateArgs = {
  id: Scalars['String']
}

export type MutationVoidUniquePassArgs = {
  passTemplateId: Scalars['String']
  values: Array<PassInputFieldValueDataInput>
}

export type Node = {
  __typename?: 'Node'
  automation?: Maybe<Automation>
  children: Array<Node>
  config: Array<NodeOption>
  id: Scalars['UUID']
  options: Scalars['String']
  parent?: Maybe<Node>
  type: Scalars['String']
}

export type NodeAvailableOptionChoice = {
  __typename?: 'NodeAvailableOptionChoice'
  displayText?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

export type NodeAvailableOptionsType = {
  __typename?: 'NodeAvailableOptionsType'
  choices: Array<NodeAvailableOptionChoice>
  default?: Maybe<Scalars['String']>
  dependentOn?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  fieldType: OptionsFieldTypes
  match?: Maybe<Scalars['String']>
  name: Scalars['String']
  required?: Maybe<Scalars['Boolean']>
  schema?: Maybe<OptionsSchemaTypes>
}

export enum NodeCategories {
  Action = 'ACTION',
  Data = 'DATA',
  Trigger = 'TRIGGER',
}

export type NodeDataInput = {
  automationId?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['String']>
  nodeType?: InputMaybe<Scalars['String']>
  options?: InputMaybe<Scalars['String']>
  parentId?: InputMaybe<Scalars['String']>
}

export type NodeEditorDataInput = {
  node: NodeDataInput
  options: Array<NodeOptionDataInput>
  selected: Scalars['Boolean']
}

export type NodeNotice = {
  __typename?: 'NodeNotice'
  message?: Maybe<Scalars['String']>
  type: NodeNoticeType
}

export enum NodeNoticeType {
  Error = 'ERROR',
  Info = 'INFO',
  Warning = 'WARNING',
}

export type NodeOption = {
  __typename?: 'NodeOption'
  children: Array<NodeOption>
  id: Scalars['UUID']
  key: Scalars['String']
  node: Node
  parent?: Maybe<NodeOption>
  value?: Maybe<Scalars['String']>
}

export type NodeOptionDataInput = {
  id?: InputMaybe<Scalars['String']>
  key: Scalars['String']
  parentId?: InputMaybe<Scalars['String']>
  value?: InputMaybe<Scalars['String']>
}

export type NodeType = {
  __typename?: 'NodeType'
  category: NodeCategories
  info: Array<NodeTypesNodeInfo>
  name: Scalars['String']
  namespace: Scalars['String']
  notices: Array<NodeNotice>
  options: Array<NodeAvailableOptionsType>
  type: Scalars['String']
}

export type NodeTypesNodeInfo = {
  __typename?: 'NodeTypesNodeInfo'
  key: Scalars['String']
  value: Scalars['String']
}

export enum OptionsFieldTypes {
  Checkbox = 'CHECKBOX',
  DataValue = 'DATA_VALUE',
  DataValueEqual = 'DATA_VALUE_EQUAL',
  DataValueEqualInputField = 'DATA_VALUE_EQUAL_INPUT_FIELD',
  Json = 'JSON',
  Number = 'NUMBER',
  PassTemplate = 'PASS_TEMPLATE',
  Radio = 'RADIO',
  Text = 'TEXT',
}

export enum OptionsSchemaTypes {
  MapStringString = 'MAP_STRING_STRING',
}

export enum OrderByDirection {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type OrderInfo = BaseModel & {
  __typename?: 'OrderInfo'
  amount: Scalars['String']
  confirmed?: Maybe<Scalars['Boolean']>
  currency: CurrencyType
  id: Scalars['UUID']
  orderId: Scalars['String']
  passId?: Maybe<Scalars['UUID']>
  passTemplateId?: Maybe<Scalars['UUID']>
  passTemplateName?: Maybe<Scalars['String']>
  payed?: Maybe<Scalars['Boolean']>
  paymentProvider: PaymentProvider
  productDescription?: Maybe<Scalars['String']>
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type OrderInfoDataInput = {
  amount: Scalars['String']
  confirmed?: InputMaybe<Scalars['Boolean']>
  currency: CurrencyType
  id?: InputMaybe<Scalars['String']>
  issuer: DIssuerInput
  orderId: Scalars['String']
  pass?: InputMaybe<DPassInput>
  passTemplate?: InputMaybe<DPassTemplateInput>
  payed?: InputMaybe<Scalars['Boolean']>
  paymentProvider: PaymentProvider
  productDescription?: InputMaybe<Scalars['String']>
}

export type PaginationInfo = {
  hasNext: Scalars['Boolean']
  hasPrev: Scalars['Boolean']
  pageSize: Scalars['Int']
  totalCount: Scalars['Int']
  totalPageCount: Scalars['Int']
}

export type PaginationInput = {
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
}

export type Pass = BaseModel & {
  __typename?: 'Pass'
  alreadyPaid: Scalars['Boolean']
  appPassInstances: Array<AppPassInstance>
  authenticationTokens: PassAuthenticationTokenPageInfo
  deliveryPageUrl: Scalars['String']
  devicePassInstances: Array<DevicePassInstance>
  distributionQRCode: Scalars['String']
  distributionUrl: Scalars['String']
  emails: Array<Email>
  expirationDate?: Maybe<Scalars['Instant']>
  expirationDateWithoutTime: Scalars['String']
  expirationTime: Scalars['String']
  externalIdentifier?: Maybe<Scalars['String']>
  hasMissingExternalAuthentication: Scalars['Boolean']
  hasMissingMemberInputFieldValues: Scalars['Boolean']
  hasViolation: Scalars['Boolean']
  id: Scalars['UUID']
  inputFieldValues: Array<PassInputFieldValue>
  isReward?: Maybe<Scalars['Boolean']>
  isVoided: Scalars['Boolean']
  passBackSide: Array<PassBackSide>
  passTemplate?: Maybe<PassTemplate>
  posDistributionCode?: Maybe<Scalars['String']>
  requiresCustomerInput: Scalars['Boolean']
  requiresThumbnail: Scalars['Boolean']
  stampsLeft?: Maybe<Scalars['Int']>
  status: PassStatus
  thumbnail?: Maybe<Image>
  validFrom?: Maybe<Scalars['Instant']>
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type PassAuthenticationTokensArgs = {
  pagination?: InputMaybe<PaginationInput>
}

export enum PassActionType {
  AddedToDevice = 'ADDED_TO_DEVICE',
  Created = 'CREATED',
  Deleted = 'DELETED',
  DeletionCancelled = 'DELETION_CANCELLED',
  DeletionInitiated = 'DELETION_INITIATED',
  DeviceInstanceDeactivated = 'DEVICE_INSTANCE_DEACTIVATED',
  DeviceInstanceReactivated = 'DEVICE_INSTANCE_REACTIVATED',
  EmailSent = 'EMAIL_SENT',
  PassScanned = 'PASS_SCANNED',
  Recreated = 'RECREATED',
  RemovedFromDevice = 'REMOVED_FROM_DEVICE',
  TokenActivated = 'TOKEN_ACTIVATED',
  TokenExpired = 'TOKEN_EXPIRED',
  TokenInvalidated = 'TOKEN_INVALIDATED',
  Unvoided = 'UNVOIDED',
  Voided = 'VOIDED',
}

export type PassAuthenticationToken = BaseModel & {
  __typename?: 'PassAuthenticationToken'
  devicePassInstances: Array<DevicePassInstance>
  id: Scalars['UUID']
  status: PassAuthenticationTokenStatus
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
  whenUsed?: Maybe<Scalars['Instant']>
}

export type PassAuthenticationTokenPageInfo = PaginationInfo & {
  __typename?: 'PassAuthenticationTokenPageInfo'
  data: Array<PassAuthenticationToken>
  hasNext: Scalars['Boolean']
  hasPrev: Scalars['Boolean']
  pageSize: Scalars['Int']
  totalCount: Scalars['Int']
  totalPageCount: Scalars['Int']
}

export enum PassAuthenticationTokenStatus {
  Active = 'ACTIVE',
  Expired = 'EXPIRED',
  Invalid = 'INVALID',
}

export type PassBackSide = BaseModel & {
  __typename?: 'PassBackSide'
  expirationDate?: Maybe<Scalars['Instant']>
  id: Scalars['UUID']
  label?: Maybe<Scalars['String']>
  orderIndex: Scalars['Int']
  value?: Maybe<Scalars['String']>
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type PassBackSideDataInput = {
  expirationDate?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['String']>
  label?: InputMaybe<Scalars['String']>
  orderIndex: Scalars['Int']
  value?: InputMaybe<Scalars['String']>
}

export type PassBeacon = BaseModel & {
  __typename?: 'PassBeacon'
  id: Scalars['UUID']
  major: Scalars['Int']
  minor: Scalars['Int']
  name: Scalars['String']
  proximityUUID: Scalars['String']
  relevantText: Scalars['String']
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type PassBeaconDataInput = {
  id?: InputMaybe<Scalars['String']>
  major: Scalars['Int']
  minor: Scalars['Int']
  name: Scalars['String']
  proximityUUID: Scalars['String']
  relevantText: Scalars['String']
}

export type PassDataInput = {
  alreadyPaid?: InputMaybe<Scalars['Boolean']>
  distributionToken?: InputMaybe<Scalars['String']>
  expirationDate?: InputMaybe<Scalars['String']>
  expirationDateWithoutTime?: InputMaybe<Scalars['String']>
  expirationTime?: InputMaybe<Scalars['String']>
  externalIdentifier?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['String']>
  inputFieldValues?: InputMaybe<Array<PassInputFieldValueDataInput>>
  isVoided?: InputMaybe<Scalars['Boolean']>
  passBackSide?: InputMaybe<Array<PassBackSideDataInput>>
  passTemplateDistributionToken?: InputMaybe<Scalars['String']>
  passTemplateId?: InputMaybe<Scalars['String']>
  posDistributionCode?: InputMaybe<Scalars['String']>
  stampsLeft?: InputMaybe<Scalars['Int']>
  thumbnail?: InputMaybe<ImageDataInput>
  thumbnailUrl?: InputMaybe<Scalars['String']>
  validFrom?: InputMaybe<Scalars['String']>
}

export type PassEmailDataInput = {
  alreadyPaid?: InputMaybe<Scalars['Boolean']>
  expirationDate?: InputMaybe<Scalars['String']>
  expirationDateWithoutTime?: InputMaybe<Scalars['String']>
  expirationTime?: InputMaybe<Scalars['String']>
  externalIdentifier?: InputMaybe<Scalars['String']>
  inputFieldValues?: InputMaybe<Array<PassInputFieldValueDataInput>>
  isVoided?: InputMaybe<Scalars['Boolean']>
  passBackSide?: InputMaybe<Array<PassBackSideDataInput>>
  stampsLeft?: InputMaybe<Scalars['Int']>
  thumbnail?: InputMaybe<ImageDataInput>
  thumbnailUrl?: InputMaybe<Scalars['String']>
  validFrom?: InputMaybe<Scalars['String']>
}

export type PassField = BaseModel & {
  __typename?: 'PassField'
  deletedText?: Maybe<Scalars['String']>
  expiredText?: Maybe<Scalars['String']>
  hideOnDeleted: Scalars['Boolean']
  hideOnExpired: Scalars['Boolean']
  hideOnVoided: Scalars['Boolean']
  id: Scalars['UUID']
  label: Scalars['String']
  orderIndex: Scalars['Int']
  passInputField?: Maybe<PassInputField>
  textAlignment?: Maybe<TextAlignment>
  type: PassFieldType
  value?: Maybe<Scalars['String']>
  version: Scalars['Long']
  voidedText?: Maybe<Scalars['String']>
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type PassFieldDataInput = {
  deletedText?: InputMaybe<Scalars['String']>
  expiredText?: InputMaybe<Scalars['String']>
  hideOnDeleted?: InputMaybe<Scalars['Boolean']>
  hideOnExpired?: InputMaybe<Scalars['Boolean']>
  hideOnVoided?: InputMaybe<Scalars['Boolean']>
  id?: InputMaybe<Scalars['String']>
  label: Scalars['String']
  passInputFieldId?: InputMaybe<Scalars['String']>
  textAlignment?: InputMaybe<TextAlignment>
  type: PassFieldType
  value?: InputMaybe<Scalars['String']>
  voidedText?: InputMaybe<Scalars['String']>
}

export enum PassFieldType {
  Auxiliary = 'AUXILIARY',
  Back = 'BACK',
  Header = 'HEADER',
  Primary = 'PRIMARY',
  Secondary = 'SECONDARY',
}

export type PassHistoryEntry = {
  __typename?: 'PassHistoryEntry'
  action: PassActionType
  comment?: Maybe<Scalars['String']>
  instance?: Maybe<DevicePassInstance>
  token?: Maybe<PassAuthenticationToken>
  whenModified: Scalars['Instant']
}

export type PassInputField = BaseModel & {
  __typename?: 'PassInputField'
  deleted: Scalars['Boolean']
  description?: Maybe<Scalars['String']>
  format: PassInputFieldFormat
  id: Scalars['UUID']
  identifier: Scalars['String']
  isExternalAuthField: Scalars['Boolean']
  label: Scalars['String']
  mandatory: Scalars['Boolean']
  type: PassInputFieldType
  unique: Scalars['Boolean']
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type PassInputFieldDataInput = {
  description?: InputMaybe<Scalars['String']>
  format: PassInputFieldFormat
  id?: InputMaybe<Scalars['String']>
  identifier: Scalars['String']
  label: Scalars['String']
  mandatory: Scalars['Boolean']
  type?: InputMaybe<PassInputFieldType>
  unique: Scalars['Boolean']
  userInputField: Scalars['Boolean']
}

export enum PassInputFieldFormat {
  Date = 'DATE',
  Email = 'EMAIL',
  Number = 'NUMBER',
  Text = 'TEXT',
  Url = 'URL',
}

export enum PassInputFieldType {
  Issuer = 'ISSUER',
  Member = 'MEMBER',
}

export type PassInputFieldValue = BaseModel & {
  __typename?: 'PassInputFieldValue'
  id: Scalars['UUID']
  passInputField: PassInputField
  value?: Maybe<Scalars['String']>
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type PassInputFieldValueDataInput = {
  id?: InputMaybe<Scalars['String']>
  identifier?: InputMaybe<Scalars['String']>
  passInputFieldId?: InputMaybe<Scalars['String']>
  value?: InputMaybe<Scalars['String']>
}

export type PassIntegration = BaseModel & {
  __typename?: 'PassIntegration'
  additionalRate?: Maybe<Scalars['Float']>
  id: Scalars['UUID']
  plan?: Maybe<Plan>
  type: PassIntegrationType
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type PassIntegrationDataInput = {
  additionalRate?: InputMaybe<Scalars['Float']>
  passIntegrationType: PassIntegrationType
}

export enum PassIntegrationType {
  DynamicBarcode = 'DYNAMIC_BARCODE',
  Nfc = 'NFC',
}

export type PassPageInfo = PaginationInfo & {
  __typename?: 'PassPageInfo'
  data: Array<Pass>
  hasNext: Scalars['Boolean']
  hasPrev: Scalars['Boolean']
  pageSize: Scalars['Int']
  totalCount: Scalars['Int']
  totalPageCount: Scalars['Int']
}

export type PassPricing = BaseModel & {
  __typename?: 'PassPricing'
  id: Scalars['UUID']
  passPrice: Money
  passType: PassType
  plan?: Maybe<Plan>
  range: PassesRangeInfo
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type PassPricingDataInput = {
  passPrice: MoneyDataNullableInput
  passType: PassType
  range: PassesRangeDataInput
}

export type PassSearchDataInput = {
  exact?: InputMaybe<Scalars['Boolean']>
  hasNoEmail?: InputMaybe<Scalars['Boolean']>
  query?: InputMaybe<Scalars['String']>
}

export enum PassStatus {
  Active = 'ACTIVE',
  Deleted = 'DELETED',
  DeleteInProgress = 'DELETE_IN_PROGRESS',
  Expired = 'EXPIRED',
  Inactive = 'INACTIVE',
  Redeemed = 'REDEEMED',
  Unclaimed = 'UNCLAIMED',
  UpdatesOff = 'UPDATES_OFF',
  Voided = 'VOIDED',
}

export type PassTemplate = BaseModel & {
  __typename?: 'PassTemplate'
  addOnPassTemplates: Array<AddOnPassTemplate>
  allowReward: Scalars['Boolean']
  backFields: Array<PassField>
  backgroundColor?: Maybe<Scalars['String']>
  backgroundImage?: Maybe<Image>
  barcodeFormat?: Maybe<Scalars['String']>
  barcodeTextFormat?: Maybe<Scalars['String']>
  barcodeType: BarcodeType
  beacons: Array<PassBeacon>
  dateFormat?: Maybe<DateFormat>
  dateNumber?: Maybe<Scalars['Int']>
  deletedPassTemplateId?: Maybe<Scalars['UUID']>
  deliveryPageUrl: Scalars['String']
  description?: Maybe<Scalars['String']>
  disableCsvDownload: Scalars['Boolean']
  disableDeleteUnclaimedPasses: Scalars['Boolean']
  disableIssue: Scalars['Boolean']
  distributionUrl: Scalars['String']
  dynamicBarcodeExpirationTimeSeconds?: Maybe<Scalars['Long']>
  dynamicBarcodeType: DynamicBarcodeType
  expirationDate?: Maybe<Scalars['Instant']>
  expirationDateWithoutTime: Scalars['String']
  expirationTime: Scalars['String']
  expirationType?: Maybe<ExpirationType>
  externalAPIs: Array<ExternalApi>
  externalAuthAgeVerification?: Maybe<Scalars['Int']>
  externalAuthEnablePOS: Scalars['Boolean']
  externalAuthIdField?: Maybe<PassInputField>
  externalAuthNameField?: Maybe<PassInputField>
  externalAuthUseIdentifiers: Scalars['Boolean']
  fields: Array<PassField>
  firstDeviceOnly: Scalars['Boolean']
  footerImage?: Maybe<Image>
  foregroundColor?: Maybe<Scalars['String']>
  grayOnExpired: Scalars['Boolean']
  hasDynamicBarcode: Scalars['Boolean']
  hasInputFields: Scalars['Boolean']
  icon?: Maybe<Image>
  id: Scalars['UUID']
  inputFields: Array<PassInputField>
  isDeletedPassTemplate: Scalars['Boolean']
  isNFC: Scalars['Boolean']
  isSharingProhibited: Scalars['Boolean']
  issuer?: Maybe<Issuer>
  labelColor?: Maybe<Scalars['String']>
  locations: Array<PassTemplateLocation>
  lockInputFields: Scalars['Boolean']
  logScansOnBack: Scalars['Boolean']
  logo?: Maybe<Image>
  logoText?: Maybe<Scalars['String']>
  mandatoryThumbnail: Scalars['Boolean']
  memberThumbnailImage: Scalars['Boolean']
  minAmount?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  nfcValue?: Maybe<Scalars['String']>
  notificationOnScan: Scalars['Boolean']
  oncePerDevice: Scalars['Boolean']
  oneDeviceAtATime: Scalars['Boolean']
  oneDevicePerToken: Scalars['Boolean']
  onePassOfTemplateTypePerDevice: Scalars['Boolean']
  passPrice?: Maybe<Scalars['Int']>
  passTemplateInvalidRoute: Scalars['String']
  passTemplateType: PassTemplateType
  paymentInfo?: Maybe<PaymentInfo>
  posDistributionOnly: Scalars['Boolean']
  publicKey?: Maybe<Scalars['String']>
  qrCodeImage?: Maybe<Image>
  quantityRestriction?: Maybe<Scalars['Int']>
  refillRenewal: Scalars['Boolean']
  rewardPassTemplate?: Maybe<RewardPassTemplate>
  sendBackUpPass: Scalars['Boolean']
  serviceEmail?: Maybe<Scalars['String']>
  serviceEmailType: ServiceEmailType
  singleDeviceOnly: Scalars['Boolean']
  stampBackgroundColor?: Maybe<Scalars['String']>
  stampStripImage: Array<StampStripImage>
  stampedImage?: Maybe<Image>
  stamps?: Maybe<Scalars['Int']>
  status: PassTemplateStatus
  statusFields: Scalars['Boolean']
  stripBackgroundColor?: Maybe<Scalars['String']>
  stripImage?: Maybe<Image>
  thumbnail?: Maybe<Image>
  triggers: Array<PassTemplateTrigger>
  unstampedImage?: Maybe<Image>
  useExternalAuth: Scalars['Boolean']
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type PassTemplateDataInput = {
  addOnPassTemplates?: InputMaybe<Array<AddOnPassTemplateDataInput>>
  allowReward?: InputMaybe<Scalars['Boolean']>
  backFields?: InputMaybe<Array<PassFieldDataInput>>
  backgroundColor?: InputMaybe<Scalars['String']>
  backgroundImage?: InputMaybe<ImageDataInput>
  barcodeFormat?: InputMaybe<Scalars['String']>
  barcodeTextFormat?: InputMaybe<Scalars['String']>
  barcodeType: BarcodeType
  beacons?: InputMaybe<Array<PassBeaconDataInput>>
  dateFormat?: InputMaybe<DateFormat>
  dateNumber?: InputMaybe<Scalars['Int']>
  deletedPassTemplateId?: InputMaybe<Scalars['String']>
  description?: InputMaybe<Scalars['String']>
  disableCsvDownload?: InputMaybe<Scalars['Boolean']>
  disableDeleteUnclaimedPasses?: InputMaybe<Scalars['Boolean']>
  disableIssue?: InputMaybe<Scalars['Boolean']>
  dynamicBarcodeExpirationTimeSeconds?: InputMaybe<Scalars['Long']>
  dynamicBarcodeType?: InputMaybe<DynamicBarcodeType>
  expirationDate?: InputMaybe<Scalars['String']>
  expirationDateWithoutTime?: InputMaybe<Scalars['String']>
  expirationTime?: InputMaybe<Scalars['String']>
  expirationType?: InputMaybe<ExpirationType>
  externalAPIs?: InputMaybe<Array<ExternalApiDataInput>>
  externalAuthAgeVerification?: InputMaybe<Scalars['Int']>
  externalAuthEnablePOS?: InputMaybe<Scalars['Boolean']>
  externalAuthIdFieldId?: InputMaybe<Scalars['String']>
  externalAuthNameFieldId?: InputMaybe<Scalars['String']>
  externalAuthUseIdentifiers?: InputMaybe<Scalars['Boolean']>
  externalIdentifiers?: InputMaybe<Array<ExternalIdentifierDataInput>>
  fields?: InputMaybe<Array<PassFieldDataInput>>
  firstDeviceOnly?: InputMaybe<Scalars['Boolean']>
  footerImage?: InputMaybe<ImageDataInput>
  foregroundColor?: InputMaybe<Scalars['String']>
  grayOnExpired?: InputMaybe<Scalars['Boolean']>
  hasDynamicBarcode?: InputMaybe<Scalars['Boolean']>
  icon?: InputMaybe<ImageDataInput>
  id?: InputMaybe<Scalars['String']>
  inputFields?: InputMaybe<Array<PassInputFieldDataInput>>
  isDeletedPassTemplate?: InputMaybe<Scalars['Boolean']>
  isNFC?: InputMaybe<Scalars['Boolean']>
  isSharingProhibited?: InputMaybe<Scalars['Boolean']>
  labelColor?: InputMaybe<Scalars['String']>
  locations?: InputMaybe<Array<PassTemplateLocationDataInput>>
  lockInputFields?: InputMaybe<Scalars['Boolean']>
  logScansOnBack?: InputMaybe<Scalars['Boolean']>
  logo?: InputMaybe<ImageDataInput>
  logoText?: InputMaybe<Scalars['String']>
  mandatoryThumbnail?: InputMaybe<Scalars['Boolean']>
  memberThumbnailImage?: InputMaybe<Scalars['Boolean']>
  minAmount?: InputMaybe<Scalars['Int']>
  name?: InputMaybe<Scalars['String']>
  nfcValue?: InputMaybe<Scalars['String']>
  notificationOnScan?: InputMaybe<Scalars['Boolean']>
  oncePerDevice?: InputMaybe<Scalars['Boolean']>
  oneDeviceAtATime?: InputMaybe<Scalars['Boolean']>
  oneDevicePerToken?: InputMaybe<Scalars['Boolean']>
  onePassOfTemplateTypePerDevice?: InputMaybe<Scalars['Boolean']>
  passPrice?: InputMaybe<Scalars['Int']>
  passTemplateType: PassTemplateType
  posDistributionOnly?: InputMaybe<Scalars['Boolean']>
  publicKey?: InputMaybe<Scalars['String']>
  qrCodeImage?: InputMaybe<ImageDataInput>
  quantityRestriction?: InputMaybe<Scalars['Int']>
  refillRenewal?: InputMaybe<Scalars['Boolean']>
  rewardPassTemplate?: InputMaybe<RewardPassTemplateDataInput>
  sendBackUpPass?: InputMaybe<Scalars['Boolean']>
  sendNotifications?: InputMaybe<Scalars['Boolean']>
  serviceEmail?: InputMaybe<Scalars['String']>
  serviceEmailType: ServiceEmailType
  singleDeviceOnly?: InputMaybe<Scalars['Boolean']>
  stampBackgroundColor?: InputMaybe<Scalars['String']>
  stampedImage?: InputMaybe<ImageDataInput>
  stamps?: InputMaybe<Scalars['Int']>
  statusFields?: InputMaybe<Scalars['Boolean']>
  stripBackgroundColor?: InputMaybe<Scalars['String']>
  stripImage?: InputMaybe<ImageDataInput>
  thumbnail?: InputMaybe<ImageDataInput>
  triggers?: InputMaybe<Array<PassTemplateTriggerDataInput>>
  unstampedImage?: InputMaybe<ImageDataInput>
  useExternalAuth?: InputMaybe<Scalars['Boolean']>
}

export type PassTemplateLocation = {
  __typename?: 'PassTemplateLocation'
  id: Scalars['UUID']
  latitude: Scalars['Float']
  longitude: Scalars['Float']
  relevantText: Scalars['String']
}

export type PassTemplateLocationDataInput = {
  id?: InputMaybe<Scalars['String']>
  latitude: Scalars['Float']
  longitude: Scalars['Float']
  relevantText: Scalars['String']
}

export type PassTemplatePageInfo = PaginationInfo & {
  __typename?: 'PassTemplatePageInfo'
  data: Array<PassTemplate>
  hasNext: Scalars['Boolean']
  hasPrev: Scalars['Boolean']
  pageSize: Scalars['Int']
  totalCount: Scalars['Int']
  totalPageCount: Scalars['Int']
}

export type PassTemplatePrice = {
  __typename?: 'PassTemplatePrice'
  details: Array<PassTemplatePriceDetails>
  discountOnTemplate?: Maybe<Discount>
  hasDynamicBarcode: Scalars['Boolean']
  isDiscount: Scalars['Boolean']
  isNFC: Scalars['Boolean']
  passTemplateId: Scalars['UUID']
  passTemplateName?: Maybe<Scalars['String']>
  passTemplateType: PassTemplateType
  totalPasses: Scalars['Int']
  totalPrice: Scalars['Float']
}

export type PassTemplatePriceDetails = {
  __typename?: 'PassTemplatePriceDetails'
  currency: Scalars['String']
  discount: Scalars['Float']
  passIntegrationType?: Maybe<PassIntegrationType>
  passPrice: Scalars['Float']
  plan: Plan
  quantity: Scalars['Int']
  range: Scalars['String']
  ratio: Scalars['Float']
  totalPrice: Money
}

export type PassTemplateStatistics = {
  __typename?: 'PassTemplateStatistics'
  activePasses: Scalars['Int']
  deletedPasses: Scalars['Int']
  expiredPasses: Scalars['Int']
  passScans: Scalars['Int']
  redeemedAmount: Scalars['Int']
  redeemedPasses: Scalars['Int']
  redeemedStamps: Scalars['Int']
  remainingAmount: Scalars['Int']
  soldPasses: Scalars['Int']
  totalPasses: Scalars['Int']
  totalPunchesLeft: Scalars['Int']
  totalSoldRevenue: Scalars['Int']
  unclaimedPasses: Scalars['Int']
  valueUnusedGift: Scalars['Int']
  valueUnusedPunches: Scalars['Int']
  voidedPasses: Scalars['Int']
}

export enum PassTemplateStatus {
  Active = 'ACTIVE',
  Deleted = 'DELETED',
  Voided = 'VOIDED',
}

export type PassTemplateTrigger = BaseModel & {
  __typename?: 'PassTemplateTrigger'
  active: Scalars['Boolean']
  id: Scalars['UUID']
  options: Scalars['String']
  type: Scalars['String']
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type PassTemplateTriggerDataInput = {
  active: Scalars['Boolean']
  id?: InputMaybe<Scalars['String']>
  /**
   * Option data in JSON format.
   * Query "passTemplateTriggerTypes" for schema
   *
   * Example.
   * {
   *   "field": "amount",
   *   "condition": {
   *     "gt": 1000
   *   },
   *   "multiple_choice_field_values": [
   *     "a",
   *     "b",
   *     "c"
   *   ],
   *   "multiple_choice_options": [
   *     {
   *       "another_multiple_choice": [
   *         "d",
   *         "e",
   *         "f"
   *       ]
   *     },
   *     "3000"
   *   ]
   * }
   */
  options: Scalars['String']
  type: Scalars['String']
}

export type PassTemplateTriggerType = {
  __typename?: 'PassTemplateTriggerType'
  description: Scalars['String']
  name: Scalars['String']
  /**
   * Options as a string of a JSON List
   * Returned as a JSON list because of GraphQLs problems with deep nesting
   * Format of list is available at: https://hail-spike-11a.notion.site/Pass-Template-Trigger-Schema-37f36310c46a40f99e775973b330be88?pvs=4
   *
   */
  options: Scalars['String']
  type: Scalars['String']
}

export enum PassTemplateType {
  Coupon = 'COUPON',
  Gift = 'GIFT',
  Id = 'ID',
  Member = 'MEMBER',
  MultiTicket = 'MULTI_TICKET',
  Punch = 'PUNCH',
  Storage = 'STORAGE',
  Ticket = 'TICKET',
}

export enum PassType {
  Endless = 'ENDLESS',
  SingleUse = 'SINGLE_USE',
}

export type PassbuilderPass = {
  __typename?: 'PassbuilderPass'
  is_expired: Scalars['Boolean']
  issuer_id: Scalars['String']
  issuer_name: Scalars['String']
  last_redeemed: LastRedeemed
  last_redeemedOld: Scalars['String']
  licenseData?: Maybe<Scalars['String']>
  passID_number: Scalars['String']
  pass_type: Scalars['String']
  punched: Scalars['Int']
  punches_left: Scalars['Int']
  status: Scalars['String']
  total_punches: Scalars['Int']
}

export type PassesCount = {
  __typename?: 'PassesCount'
  amount: Scalars['Int']
  id: Scalars['String']
  name: Scalars['String']
}

export type PassesIssuedByPassTemplate = {
  __typename?: 'PassesIssuedByPassTemplate'
  date: Scalars['String']
  passesCount: Array<PassesCount>
}

export enum PassesRange {
  Eighth = 'EIGHTH',
  Fifth = 'FIFTH',
  First = 'FIRST',
  Fourth = 'FOURTH',
  Second = 'SECOND',
  Seventh = 'SEVENTH',
  Sixth = 'SIXTH',
  Third = 'THIRD',
}

export type PassesRangeDataInput = {
  name: Scalars['String']
}

export type PassesRangeInfo = {
  __typename?: 'PassesRangeInfo'
  name: Scalars['String']
  type: IntRangeInfo
}

export type PaymentInfo = BaseModel & {
  __typename?: 'PaymentInfo'
  accessKey?: Maybe<Scalars['String']>
  country?: Maybe<CountryType>
  currency?: Maybe<CurrencyType>
  customerInfo?: Maybe<Scalars['Boolean']>
  errorUrl?: Maybe<Scalars['String']>
  id: Scalars['UUID']
  language?: Maybe<LanguageType>
  merchantEmail?: Maybe<Scalars['String']>
  merchantId?: Maybe<Scalars['String']>
  merchantLogo?: Maybe<Image>
  paymentGatewayId?: Maybe<Scalars['String']>
  paymentProvider?: Maybe<PaymentProvider>
  successUrl?: Maybe<Scalars['String']>
  terms?: Maybe<IssuerTerms>
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type PaymentInfoDataInput = {
  accessKey?: InputMaybe<Scalars['String']>
  country?: InputMaybe<Scalars['String']>
  currency: CurrencyType
  customerInfo?: InputMaybe<Scalars['Boolean']>
  errorUrl?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['String']>
  language?: InputMaybe<Scalars['String']>
  merchantEmail?: InputMaybe<Scalars['String']>
  merchantId?: InputMaybe<Scalars['String']>
  merchantLogo?: InputMaybe<ImageDataInput>
  paymentGatewayId?: InputMaybe<Scalars['String']>
  paymentProvider: PaymentProvider
  secretKey?: InputMaybe<Scalars['String']>
  successUrl?: InputMaybe<Scalars['String']>
  terms?: InputMaybe<IssuerTermsDataInput>
}

export enum PaymentProvider {
  None = 'NONE',
  Rapyd = 'RAPYD',
  Saltpay = 'SALTPAY',
}

export type PendingUser = {
  __typename?: 'PendingUser'
  email?: Maybe<Scalars['String']>
  id: Scalars['UUID']
  inviteDate: Scalars['Instant']
  invitedBy?: Maybe<User>
  name?: Maybe<Scalars['String']>
  role?: Maybe<Role>
}

export type PermissionAssoc = {
  __typename?: 'PermissionAssoc'
  action: Scalars['String']
  actionDescription?: Maybe<Scalars['String']>
  path: Scalars['String']
}

export type PermissionList = {
  __typename?: 'PermissionList'
  policy: Array<PermissionAssoc>
  resource: Scalars['String']
}

export type Plan = BaseModel & {
  __typename?: 'Plan'
  finalFixedMonthlyFees: Array<FixedMonthlyFee>
  finalPassIntegrations: Array<PassIntegration>
  finalPassPricings: Array<PassPricing>
  fixedMonthlyFees: Array<FixedMonthlyFee>
  id: Scalars['UUID']
  monthlyPrice?: Maybe<Money>
  name: Scalars['String']
  passIntegrations: Array<PassIntegration>
  passPricings: Array<PassPricing>
  passTemplatesLimit?: Maybe<Scalars['Int']>
  passesLimit?: Maybe<Scalars['Int']>
  planType?: Maybe<PlanType>
  scannerUsersLimit?: Maybe<Scalars['Int']>
  statisticsLimit?: Maybe<Scalars['String']>
  subscriptionCount: Scalars['Int']
  supportLimit?: Maybe<Scalars['String']>
  usersLimit?: Maybe<Scalars['Int']>
  version: Scalars['Long']
  visible: Scalars['Boolean']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type PlanDataInput = {
  fixedMonthlyFees: Array<FixedMonthlyFeeDataInput>
  id?: InputMaybe<Scalars['String']>
  monthlyPrice?: InputMaybe<MoneyDataInput>
  name: Scalars['String']
  passIntegrations: Array<PassIntegrationDataInput>
  passPricings: Array<PassPricingDataInput>
  passTemplatesLimit?: InputMaybe<Scalars['Int']>
  passesLimit?: InputMaybe<Scalars['Int']>
  scannerUsersLimit?: InputMaybe<Scalars['Int']>
  statisticsLimit?: InputMaybe<Scalars['String']>
  supportLimit?: InputMaybe<Scalars['String']>
  usersLimit?: InputMaybe<Scalars['Int']>
  visible: Scalars['Boolean']
}

export type PlanPageInfo = PaginationInfo & {
  __typename?: 'PlanPageInfo'
  data: Array<Plan>
  hasNext: Scalars['Boolean']
  hasPrev: Scalars['Boolean']
  pageSize: Scalars['Int']
  totalCount: Scalars['Int']
  totalPageCount: Scalars['Int']
}

export type PlanSubscription = BaseModel & {
  __typename?: 'PlanSubscription'
  id: Scalars['UUID']
  plan: Plan
  status: PlanSubscriptionStatus
  trialEndDate?: Maybe<Scalars['Instant']>
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export enum PlanSubscriptionStatus {
  Active = 'ACTIVE',
  Cancelled = 'CANCELLED',
  Inactive = 'INACTIVE',
  InTrial = 'IN_TRIAL',
  NonRenewing = 'NON_RENEWING',
}

export type PlanSubscriptionVersion = {
  __typename?: 'PlanSubscriptionVersion'
  end?: Maybe<Scalars['Instant']>
  id: Scalars['UUID']
  plan: Plan
  start: Scalars['Instant']
  status: PlanSubscriptionStatus
  trialEndDate?: Maybe<Scalars['Instant']>
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export enum PlanType {
  Demo = 'DEMO',
  Expert = 'EXPERT',
  Growing = 'GROWING',
  Professional = 'PROFESSIONAL',
  Starter = 'STARTER',
}

export type PlatformSubscription = BaseModel & {
  __typename?: 'PlatformSubscription'
  discount: Scalars['Float']
  expenses?: Maybe<Array<Expense>>
  id: Scalars['UUID']
  month: Scalars['Int']
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
  year: Scalars['Int']
}

export type Prices = {
  __typename?: 'Prices'
  fixedMonthlyFees: Array<FixedMonthlyFee>
  passIntegrations: Array<PassIntegration>
  passPricings: Array<PassPricing>
}

export type PricesDataInput = {
  fixedMonthlyFees: Array<FixedMonthlyFeeDataInput>
  passIntegrations: Array<PassIntegrationDataInput>
  passPricings: Array<PassPricingDataInput>
}

export type Pricing = BaseModel & {
  __typename?: 'Pricing'
  id: Scalars['UUID']
  passPrice: DMoney
  passType: PassType
  range: Scalars['String']
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type Query = {
  __typename?: 'Query'
  allowCreatingPassBecauseOfTotalPasses: Scalars['Boolean']
  apiKey?: Maybe<ApiKey>
  apiKeys: ApiKeyPageInfo
  appPasses: Array<Pass>
  appPassesQuery: Array<AppPassInstance>
  appUser?: Maybe<User>
  automation: Automation
  automationLog: AutomationLogPageInfo
  automations: Array<Automation>
  billingInfo: BillingInfo
  bulkEmailPreview: Scalars['String']
  checkQuantityRestriction: Scalars['Boolean']
  countDeviceTypesOfPasses: Array<DeviceTypeCount>
  countOfPassesIssuedByPassTemplate: Array<PassesIssuedByPassTemplate>
  distributionPass?: Maybe<Pass>
  distributionPassTemplate?: Maybe<PassTemplate>
  emailTransaction: EmailDistributionTransaction
  emailTransactions: Array<EmailDistributionTransaction>
  emailsByTransaction: EmailPage
  externalIdentifiers: ExternalIdentifierPageInfo
  featureFlags: Array<FeatureFlag>
  fixedMonthlyFee: Array<FixedMonthlyFee>
  fixedMonthlyFees: Array<FixedMonthlyFee>
  getFlag: Scalars['Boolean']
  getInvite: Invite
  getNextExternalId: ExternalIdentifier
  getNextIssuerId?: Maybe<Scalars['String']>
  getPassByScannedData?: Maybe<ScannedDataResponse>
  getSaltPayCheckHash: SaltpayHashInfo
  /** @deprecated Deprecated method. Please refer to scanTransactions query, replace with query scanTransactions */
  getScanHistoryDataForPass: Array<ScanTransaction>
  /** @deprecated Deprecated method for normal use, only used for SmartScanner, replace with query scanTransactions */
  getScannerHistory: Array<ScanTransaction>
  /** Not Implemented */
  getSettingsForScanner: Scalars['Boolean']
  globalStatistics: StatisticResponse
  globalUsers: UserPageInfo
  hasIntegration: Scalars['Boolean']
  health: Scalars['String']
  issuer?: Maybe<Issuer>
  issuerDemoInfo: DemoInfo
  issuerSecret?: Maybe<IssuerSecret>
  issuerSecrets: Array<IssuerSecret>
  issuerUserSecret?: Maybe<IssuerUserSecret>
  issuerUserSecretValue?: Maybe<IssuerUserSecretValue>
  issuerUserSecretValues: Array<IssuerUserSecretValue>
  issuerUserSecrets: Array<IssuerUserSecret>
  issuers: IssuerPageInfo
  issuersOfUser: Array<Issuer>
  /** @deprecated Not used, replace with Use inside pass template */
  locations: Array<Location>
  me?: Maybe<User>
  meScanner?: Maybe<Scanner>
  mostRecentlySentMail?: Maybe<Email>
  /** Most Valuable Fields, get only the most important input fields of a Pass Template */
  mostValuableFields: Array<PassInputField>
  nodeTypes: Array<NodeType>
  orders: Array<OrderInfo>
  pass?: Maybe<Pass>
  passAuthenticationTokens: PassAuthenticationTokenPageInfo
  passDeviceHistory: Array<DevicePassInstance>
  passHistory: Array<PassHistoryEntry>
  passIntegration: Array<PassIntegration>
  passIntegrations: Array<PassIntegration>
  passPricings: Array<PassPricing>
  passTemplate?: Maybe<PassTemplate>
  passTemplateStatistics?: Maybe<PassTemplateStatistics>
  /** Available template tokens for a pass template */
  passTemplateTokens: Array<KeyValuePair>
  /** Available triggers for a Pass Template */
  passTemplateTriggerTypes: Array<PassTemplateTriggerType>
  passTemplates: PassTemplatePageInfo
  passToApp?: Maybe<Pass>
  passbuilderPass: PassbuilderPass
  passes: PassPageInfo
  passesCsv: Scalars['String']
  passesInOneTemplateTypePerDeviceViolation: Array<Pass>
  passesOfDevice: Array<Pass>
  passesPricing: Array<Pricing>
  pendingIssuerInvitesOfUser: Array<Issuer>
  pendingUsers: Array<PendingUser>
  plan?: Maybe<Plan>
  plans: PlanPageInfo
  policies: Array<PermissionList>
  remainingIssuerUserSecrets: Array<IssuerUserSecret>
  role: Role
  roles: Array<Role>
  scanTransaction: ScanTransaction
  scanTransactions: ScanTransactionPageInfo
  /** @deprecated Experimental method, may be removed without notice, replace with query scanTransactions */
  scanTransactionsByLocation: Array<ScanTransaction>
  scanner?: Maybe<Scanner>
  scannerGroup?: Maybe<ScannerGroup>
  scannerGroupCode: Scalars['String']
  scannerGroups: ScannerGroupPageInfo
  scannerUserHistory: Scalars['Boolean']
  scanners: ScannerPageInfo
  subscription: PlatformSubscription
  totalPassTemplates: Scalars['Int']
  totalPasses: Scalars['Int']
  totalPassesWithDeleted: Scalars['Int']
  unclaimedPasses: PassPageInfo
  user?: Maybe<User>
  userDistributionContactInfo?: Maybe<UserDistributionContactInfo>
  userDistributionToken?: Maybe<UserDistributionToken>
  userOption?: Maybe<UserOptionData>
  users: UserPageInfo
  violatingPasses: PassPageInfo
  violatingPassesCount: Scalars['Int']
}

export type QueryAllowCreatingPassBecauseOfTotalPassesArgs = {
  distributionToken: Scalars['String']
  passTemplateId: Scalars['String']
}

export type QueryApiKeyArgs = {
  id: Scalars['String']
}

export type QueryAppUserArgs = {
  id: Scalars['String']
}

export type QueryAutomationArgs = {
  id: Scalars['String']
}

export type QueryAutomationLogArgs = {
  filter?: InputMaybe<AutomationLogFilterInput>
  id: Scalars['String']
  order?: InputMaybe<GenericOrderInput>
  orderMultiple?: InputMaybe<Array<GenericOrderMultiInput>>
  pagination?: InputMaybe<PaginationInput>
}

export type QueryBillingInfoArgs = {
  month: Scalars['Int']
  year: Scalars['Int']
}

export type QueryBulkEmailPreviewArgs = {
  passTemplateId: Scalars['String']
}

export type QueryCheckQuantityRestrictionArgs = {
  passTemplateId: Scalars['String']
}

export type QueryCountOfPassesIssuedByPassTemplateArgs = {
  daysBack?: InputMaybe<Scalars['Long']>
  maxTemplates?: InputMaybe<Scalars['Int']>
}

export type QueryDistributionPassArgs = {
  distributionToken: Scalars['String']
  passId: Scalars['String']
}

export type QueryDistributionPassTemplateArgs = {
  distributionToken: Scalars['String']
  passTemplateId: Scalars['String']
}

export type QueryEmailTransactionArgs = {
  id: Scalars['String']
}

export type QueryEmailsByTransactionArgs = {
  filter?: InputMaybe<Array<SendGridStatus>>
  id: Scalars['String']
  pagination: PaginationInput
}

export type QueryExternalIdentifiersArgs = {
  pagination?: InputMaybe<PaginationInput>
  passTemplateId: Scalars['String']
}

export type QueryFixedMonthlyFeesArgs = {
  planId?: InputMaybe<Scalars['String']>
}

export type QueryGetFlagArgs = {
  key: Scalars['String']
}

export type QueryGetInviteArgs = {
  id: Scalars['String']
}

export type QueryGetNextExternalIdArgs = {
  passTemplateId: Scalars['String']
}

export type QueryGetNextIssuerIdArgs = {
  exceptIssuerId: Scalars['String']
}

export type QueryGetPassByScannedDataArgs = {
  metadata?: InputMaybe<ScanMetadataInput>
  scanData: Scalars['String']
}

export type QueryGetSaltPayCheckHashArgs = {
  distributionUrl: Scalars['String']
  passTemplateId: Scalars['String']
}

export type QueryGetScanHistoryDataForPassArgs = {
  passId: Scalars['String']
}

export type QueryGetScannerHistoryArgs = {
  scannerId?: InputMaybe<Scalars['String']>
}

export type QueryGlobalUsersArgs = {
  pagination?: InputMaybe<PaginationInput>
  showDeleted?: InputMaybe<Scalars['Boolean']>
}

export type QueryHasIntegrationArgs = {
  integration: MonthlyFeeType
}

export type QueryIssuerArgs = {
  id: Scalars['String']
}

export type QueryIssuerSecretArgs = {
  id: Scalars['String']
}

export type QueryIssuerUserSecretArgs = {
  id: Scalars['String']
}

export type QueryIssuerUserSecretValueArgs = {
  id: Scalars['String']
}

export type QueryIssuersArgs = {
  order?: InputMaybe<GenericOrderInput>
  orderMultiple?: InputMaybe<Array<GenericOrderMultiInput>>
  pagination?: InputMaybe<PaginationInput>
}

export type QueryMostRecentlySentMailArgs = {
  passId: Scalars['String']
}

export type QueryMostValuableFieldsArgs = {
  id: Scalars['String']
}

export type QueryOrdersArgs = {
  order?: InputMaybe<GenericOrderInput>
  orderMultiple?: InputMaybe<Array<GenericOrderMultiInput>>
}

export type QueryPassArgs = {
  id: Scalars['String']
}

export type QueryPassAuthenticationTokensArgs = {
  pagination?: InputMaybe<PaginationInput>
  passId: Scalars['String']
}

export type QueryPassDeviceHistoryArgs = {
  passId: Scalars['String']
}

export type QueryPassHistoryArgs = {
  passId: Scalars['String']
}

export type QueryPassIntegrationsArgs = {
  planId?: InputMaybe<Scalars['String']>
}

export type QueryPassPricingsArgs = {
  planId?: InputMaybe<Scalars['String']>
}

export type QueryPassTemplateArgs = {
  id: Scalars['String']
}

export type QueryPassTemplateStatisticsArgs = {
  id: Scalars['String']
}

export type QueryPassTemplateTokensArgs = {
  id: Scalars['String']
}

export type QueryPassTemplatesArgs = {
  pagination?: InputMaybe<PaginationInput>
}

export type QueryPassToAppArgs = {
  id: Scalars['String']
}

export type QueryPassbuilderPassArgs = {
  passId: Scalars['String']
  templateId: Scalars['String']
}

export type QueryPassesArgs = {
  cheap?: InputMaybe<Scalars['Boolean']>
  hideByStatus?: InputMaybe<HideByStatusTypeInput>
  inputFieldOrder?: InputMaybe<Array<GenericOrderMultiInput>>
  order?: InputMaybe<GenericOrderInput>
  orderMultiple?: InputMaybe<Array<GenericOrderMultiInput>>
  pagination?: InputMaybe<PaginationInput>
  passTemplateId?: InputMaybe<Scalars['String']>
  search?: InputMaybe<PassSearchDataInput>
}

export type QueryPassesCsvArgs = {
  passTemplateId: Scalars['String']
}

export type QueryPassesInOneTemplateTypePerDeviceViolationArgs = {
  id: Scalars['String']
}

export type QueryPassesOfDeviceArgs = {
  id: Scalars['String']
}

export type QueryPlanArgs = {
  id: Scalars['String']
}

export type QueryPlansArgs = {
  order?: InputMaybe<GenericOrderInput>
  orderMultiple?: InputMaybe<Array<GenericOrderMultiInput>>
  pagination?: InputMaybe<PaginationInput>
  visible?: InputMaybe<Scalars['Boolean']>
}

export type QueryRemainingIssuerUserSecretsArgs = {
  id?: InputMaybe<Scalars['String']>
}

export type QueryRoleArgs = {
  id: Scalars['String']
}

export type QueryRolesArgs = {
  issuerId?: InputMaybe<Scalars['String']>
}

export type QueryScanTransactionArgs = {
  id: Scalars['String']
}

export type QueryScanTransactionsArgs = {
  filter?: InputMaybe<ScanTransactionsFilterInput>
  order?: InputMaybe<ScanTransactionOrderInput>
  pagination?: InputMaybe<PaginationInput>
}

export type QueryScanTransactionsByLocationArgs = {
  lat: Scalars['Float']
  lng: Scalars['Float']
  radius: Scalars['Int']
}

export type QueryScannerArgs = {
  id: Scalars['String']
}

export type QueryScannerGroupArgs = {
  id: Scalars['String']
}

export type QueryScannerGroupCodeArgs = {
  id: Scalars['String']
}

export type QueryScannerGroupsArgs = {
  paginationInput?: InputMaybe<PaginationInput>
}

export type QueryScannerUserHistoryArgs = {
  scannerId?: InputMaybe<Scalars['String']>
}

export type QueryScannersArgs = {
  pagination?: InputMaybe<PaginationInput>
}

export type QuerySubscriptionArgs = {
  month: Scalars['Int']
  year: Scalars['Int']
}

export type QueryUnclaimedPassesArgs = {
  order?: InputMaybe<GenericOrderInput>
  orderMultiple?: InputMaybe<Array<GenericOrderMultiInput>>
  pagination?: InputMaybe<PaginationInput>
  passTemplateId?: InputMaybe<Scalars['String']>
  search?: InputMaybe<PassSearchDataInput>
}

export type QueryUserArgs = {
  id: Scalars['String']
}

export type QueryUserDistributionContactInfoArgs = {
  token: Scalars['String']
}

export type QueryUserDistributionTokenArgs = {
  passTemplateId: Scalars['String']
}

export type QueryUserOptionArgs = {
  option: Scalars['String']
}

export type QueryUsersArgs = {
  order?: InputMaybe<GenericOrderInput>
  orderMultiple?: InputMaybe<Array<GenericOrderMultiInput>>
  pagination?: InputMaybe<PaginationInput>
}

export type QueryViolatingPassesArgs = {
  pagination?: InputMaybe<PaginationInput>
  passTemplateId: Scalars['String']
}

export type QueryViolatingPassesCountArgs = {
  passTemplateId?: InputMaybe<Scalars['String']>
}

export type RegisterDataInput = {
  email: Scalars['String']
  name: Scalars['String']
  password: Scalars['String']
  phoneNumber: Scalars['String']
}

export type RegistrationDataInput = {
  contactName: Scalars['String']
  contactPhone: Scalars['String']
  email: Scalars['String']
  idNumber: Scalars['String']
  name: Scalars['String']
  password: Scalars['String']
  termsAndConditions: Scalars['Boolean']
}

export type RegistrationInviteDataInput = {
  inviteId: Scalars['String']
  name: Scalars['String']
  password: Scalars['String']
  phone: Scalars['String']
}

export type RewardPassField = BaseModel & {
  __typename?: 'RewardPassField'
  id: Scalars['UUID']
  label: Scalars['String']
  orderIndex: Scalars['Int']
  passInputField?: Maybe<PassInputField>
  textAlignment?: Maybe<TextAlignment>
  type: PassFieldType
  value?: Maybe<Scalars['String']>
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type RewardPassFieldDataInput = {
  id?: InputMaybe<Scalars['String']>
  label: Scalars['String']
  passInputFieldId?: InputMaybe<Scalars['String']>
  textAlignment?: InputMaybe<TextAlignment>
  type: PassFieldType
  value?: InputMaybe<Scalars['String']>
}

export type RewardPassTemplate = BaseModel & {
  __typename?: 'RewardPassTemplate'
  backgroundColor?: Maybe<Scalars['String']>
  dateFormat?: Maybe<DateFormat>
  dateNumber?: Maybe<Scalars['Int']>
  description?: Maybe<Scalars['String']>
  expirationDate?: Maybe<Scalars['Instant']>
  expirationType?: Maybe<ExpirationType>
  fields: Array<RewardPassField>
  foregroundColor?: Maybe<Scalars['String']>
  id: Scalars['UUID']
  isSharingProhibited: Scalars['Boolean']
  labelColor?: Maybe<Scalars['String']>
  logo?: Maybe<Image>
  logoText?: Maybe<Scalars['String']>
  singleDeviceOnly: Scalars['Boolean']
  stripImage?: Maybe<Image>
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type RewardPassTemplateDataInput = {
  backgroundColor?: InputMaybe<Scalars['String']>
  dateFormat?: InputMaybe<DateFormat>
  dateNumber?: InputMaybe<Scalars['Int']>
  description?: InputMaybe<Scalars['String']>
  expirationDate?: InputMaybe<Scalars['String']>
  expirationType?: InputMaybe<ExpirationType>
  fields?: InputMaybe<Array<RewardPassFieldDataInput>>
  foregroundColor?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['String']>
  isSharingProhibited?: InputMaybe<Scalars['Boolean']>
  labelColor?: InputMaybe<Scalars['String']>
  logo?: InputMaybe<ImageDataInput>
  logoText?: InputMaybe<Scalars['String']>
  singleDeviceOnly?: InputMaybe<Scalars['Boolean']>
  stripImage?: InputMaybe<ImageDataInput>
}

export type Role = {
  __typename?: 'Role'
  id: Scalars['UUID']
  isRootRole: Scalars['Boolean']
  name: Scalars['String']
  policies?: Maybe<Array<RolePolicies>>
  userCount: Scalars['Int']
}

export type RoleDataInput = {
  id?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  policies?: InputMaybe<Array<RolePolicyDataInput>>
}

export type RolePolicies = {
  __typename?: 'RolePolicies'
  actions: Array<Scalars['String']>
  resource: Scalars['String']
}

export type RolePolicyDataInput = {
  action: Array<Scalars['String']>
  resource: Scalars['String']
}

export type SaltpayHashInfo = {
  __typename?: 'SaltpayHashInfo'
  hash: Scalars['String']
  orderId: Scalars['String']
  successUrl: Scalars['String']
}

export type ScanMetadataInput = {
  alt?: InputMaybe<Scalars['Float']>
  lat?: InputMaybe<Scalars['Float']>
  lng?: InputMaybe<Scalars['Float']>
  method?: InputMaybe<Scalars['String']>
}

export type ScanTransaction = {
  __typename?: 'ScanTransaction'
  actions: Array<ScanTransaction>
  amountUsed?: Maybe<Scalars['Int']>
  dateScanned: Scalars['Instant']
  id: Scalars['UUID']
  latitude?: Maybe<Scalars['Float']>
  longitude?: Maybe<Scalars['Float']>
  pass?: Maybe<Pass>
  scanType?: Maybe<ScanType>
  scanner?: Maybe<Scanner>
  scannerGroup?: Maybe<ScannerGroup>
  similarScans: Array<ScanTransaction>
  stampsUsed?: Maybe<Scalars['Int']>
  user?: Maybe<User>
}

export type ScanTransactionSimilarScansArgs = {
  limit?: InputMaybe<Scalars['Int']>
  radius?: InputMaybe<Scalars['Int']>
  showSimilar?: InputMaybe<Scalars['Boolean']>
}

export enum ScanTransactionOrderByColumn {
  AmountUsed = 'AMOUNT_USED',
  DateScanned = 'DATE_SCANNED',
  ScanType = 'SCAN_TYPE',
  StampsUsed = 'STAMPS_USED',
}

export type ScanTransactionOrderInput = {
  column?: InputMaybe<ScanTransactionOrderByColumn>
  dir?: InputMaybe<OrderByDirection>
}

export type ScanTransactionPageInfo = PaginationInfo & {
  __typename?: 'ScanTransactionPageInfo'
  data: Array<ScanTransaction>
  hasNext: Scalars['Boolean']
  hasPrev: Scalars['Boolean']
  pageSize: Scalars['Int']
  totalCount: Scalars['Int']
  totalPageCount: Scalars['Int']
}

export type ScanTransactionsFilterInput = {
  /** Format of YYYY-MM-DDTHH:MM:SS.000Z */
  dateEnd?: InputMaybe<Scalars['String']>
  /** Format of YYYY-MM-DDTHH:MM:SS.000Z */
  dateStart?: InputMaybe<Scalars['String']>
  passId?: InputMaybe<Scalars['String']>
  passTemplateId?: InputMaybe<Scalars['String']>
  scanTypes?: InputMaybe<Array<ScanType>>
  scannerGroupId?: InputMaybe<Scalars['String']>
  scannerId?: InputMaybe<Scalars['String']>
  userId?: InputMaybe<Scalars['String']>
}

export enum ScanType {
  Fetch = 'FETCH',
  Punch = 'PUNCH',
  Redeem = 'REDEEM',
  Subtract = 'SUBTRACT',
}

export type ScannedDataResponse = {
  __typename?: 'ScannedDataResponse'
  actions: Array<ScannerActionData>
  pass?: Maybe<Pass>
  transactionId: Scalars['String']
}

export type Scanner = BaseModel & {
  __typename?: 'Scanner'
  active: Scalars['Boolean']
  authenticationToken?: Maybe<Scalars['String']>
  currentUser?: Maybe<User>
  deviceId?: Maybe<Scalars['String']>
  disabled: Scalars['Boolean']
  externalId?: Maybe<Scalars['String']>
  id: Scalars['UUID']
  issuer: Issuer
  name?: Maybe<Scalars['String']>
  /** Templates scannable by scanner */
  scannableTemplates: Array<PassTemplate>
  scannerGroup?: Maybe<ScannerGroup>
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type ScannerActionData = {
  __typename?: 'ScannerActionData'
  action: ScannerActionType
  custom_description?: Maybe<Scalars['String']>
  custom_title?: Maybe<Scalars['String']>
  maxAddAmount?: Maybe<Scalars['Int']>
  maxPunches?: Maybe<Scalars['Int']>
  maxSubtractAmount?: Maybe<Scalars['Int']>
  minAddAmount?: Maybe<Scalars['Int']>
  minSubtractAmount?: Maybe<Scalars['Int']>
}

export type ScannerActionDataInput = {
  action: ScannerActionType
  addedAmount?: InputMaybe<Scalars['Int']>
  passId?: InputMaybe<Scalars['String']>
  punches?: InputMaybe<Scalars['Int']>
  subtractedAmount?: InputMaybe<Scalars['Int']>
}

export enum ScannerActionType {
  AddAmount = 'ADD_AMOUNT',
  CustomAction = 'CUSTOM_ACTION',
  Punches = 'PUNCHES',
  Redeem = 'REDEEM',
  SubtractAmount = 'SUBTRACT_AMOUNT',
  Void = 'VOID',
}

export enum ScannerAuthenticatedOptions {
  None = 'NONE',
  OnlyScanner = 'ONLY_SCANNER',
  ScannerCanUse = 'SCANNER_CAN_USE',
}

export type ScannerDataInput = {
  active?: InputMaybe<Scalars['Boolean']>
  disabled?: InputMaybe<Scalars['Boolean']>
  externalId?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  scannerGroupId?: InputMaybe<Scalars['String']>
  shouldLogout?: InputMaybe<Scalars['Boolean']>
}

export type ScannerGroup = BaseModel & {
  __typename?: 'ScannerGroup'
  id: Scalars['UUID']
  name?: Maybe<Scalars['String']>
  passTemplates: Array<PassTemplate>
  scanners: Array<Scanner>
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type ScannerGroupDataInput = {
  id?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  selectedPassTemplates: Array<Scalars['String']>
}

export type ScannerGroupPageInfo = PaginationInfo & {
  __typename?: 'ScannerGroupPageInfo'
  data: Array<ScannerGroup>
  hasNext: Scalars['Boolean']
  hasPrev: Scalars['Boolean']
  pageSize: Scalars['Int']
  totalCount: Scalars['Int']
  totalPageCount: Scalars['Int']
}

export type ScannerPageInfo = PaginationInfo & {
  __typename?: 'ScannerPageInfo'
  data: Array<Scanner>
  hasNext: Scalars['Boolean']
  hasPrev: Scalars['Boolean']
  pageSize: Scalars['Int']
  totalCount: Scalars['Int']
  totalPageCount: Scalars['Int']
}

export type ScannerSettings = BaseModel & {
  __typename?: 'ScannerSettings'
  id: Scalars['UUID']
  issuer: Issuer
  passTemplate?: Maybe<PassTemplate>
  scanner?: Maybe<Scanner>
  settingsType: ScannerSettingsSection
  shouldAutoPunch?: Maybe<Scalars['Boolean']>
  shouldAutoRedeem?: Maybe<Scalars['Boolean']>
  showPassScanHistory?: Maybe<Scalars['Boolean']>
  showScanHistory?: Maybe<Scalars['Boolean']>
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export enum ScannerSettingsSection {
  Global = 'GLOBAL',
  PassTemplate = 'PASS_TEMPLATE',
  Scanner = 'SCANNER',
}

export enum SendGridStatus {
  Bounce = 'BOUNCE',
  Deferred = 'DEFERRED',
  Delivered = 'DELIVERED',
  Dropped = 'DROPPED',
  Failed = 'FAILED',
  NoStatus = 'NO_STATUS',
  Opened = 'OPENED',
  Processed = 'PROCESSED',
  Queued = 'QUEUED',
  Sent = 'SENT',
}

export type SendPassEmailsResponse = {
  __typename?: 'SendPassEmailsResponse'
  failedCount: Scalars['Int']
  successCount: Scalars['Int']
}

export enum ServiceEmailType {
  Issuer = 'ISSUER',
  Template = 'TEMPLATE',
  User = 'USER',
}

export type StampStripImage = {
  __typename?: 'StampStripImage'
  stampsLeft?: Maybe<Scalars['Int']>
  url: Scalars['String']
}

export type StatisticResponse = {
  __typename?: 'StatisticResponse'
  totalPassTemplates?: Maybe<Scalars['Int']>
  totalPasses?: Maybe<Scalars['Int']>
  totalPassesRedeemedPastMonth?: Maybe<Scalars['Int']>
  totalRedeemedPasses?: Maybe<Scalars['Int']>
  totalScanners?: Maybe<Scalars['Int']>
  totalScansBySmartScanner?: Maybe<Scalars['Int']>
  totalUsers?: Maybe<Scalars['Int']>
  voidedPasses?: Maybe<Scalars['Int']>
}

export type Subscription = {
  __typename?: 'Subscription'
  emailDistributionTransaction: EmailDistributionTransactionStatus
  emailDistributionTransactionStatistics: EmailDistributionTransactionStatistics
  emailStatus: Email
}

export type SubscriptionEmailDistributionTransactionArgs = {
  id: Scalars['String']
}

export type SubscriptionEmailDistributionTransactionStatisticsArgs = {
  id: Scalars['String']
}

export type SubscriptionEmailStatusArgs = {
  id: Scalars['String']
}

export type SubscriptionDataInput = {
  expenses?: InputMaybe<Array<ExpenceDataInput>>
}

export enum TextAlignment {
  Center = 'CENTER',
  Left = 'LEFT',
  Right = 'RIGHT',
}

export type ThumbnailDataInput = {
  passId: Scalars['String']
  thumbnail: ImageDataInput
}

export type User = BaseModel & {
  __typename?: 'User'
  active: Scalars['Boolean']
  androidDeviceId?: Maybe<Scalars['String']>
  apiKeys: Array<ApiKey>
  displayName: Scalars['String']
  email: Scalars['String']
  globalRole: UserRole
  id: Scalars['UUID']
  invitedBy?: Maybe<User>
  issuer?: Maybe<Issuer>
  issuerRole?: Maybe<Role>
  issuerUserId?: Maybe<Scalars['String']>
  issuers?: Maybe<Array<IssuerUser>>
  language?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  options: Array<UserOptionData>
  permissions: Array<Maybe<UserPermission>>
  phoneNumber?: Maybe<Scalars['String']>
  photo?: Maybe<Image>
  policies?: Maybe<Array<UserPolicy>>
  role?: Maybe<Role>
  smartWalletUser?: Maybe<Scalars['Boolean']>
  status?: Maybe<UserStatus>
  verifyToken?: Maybe<Scalars['String']>
  version: Scalars['Long']
  whenConfirmed?: Maybe<Scalars['Instant']>
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type UserDataInput = {
  active?: InputMaybe<Scalars['Boolean']>
  email: Scalars['String']
  id?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  password: Scalars['String']
  permissions?: InputMaybe<Array<InputMaybe<UserPermission>>>
  userRole?: InputMaybe<UserRole>
}

export type UserDistributionContactInfo = BaseModel & {
  __typename?: 'UserDistributionContactInfo'
  email: Scalars['String']
  id: Scalars['UUID']
  name: Scalars['String']
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type UserDistributionToken = BaseModel & {
  __typename?: 'UserDistributionToken'
  id: Scalars['UUID']
  token: Scalars['UUID']
  version: Scalars['Long']
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type UserOld = BaseModel & {
  __typename?: 'UserOld'
  active: Scalars['Boolean']
  androidDeviceId?: Maybe<Scalars['String']>
  apiKeys: Array<ApiKey>
  displayName: Scalars['String']
  email: Scalars['String']
  id: Scalars['UUID']
  invitedBy?: Maybe<UserOld>
  issuer?: Maybe<Issuer>
  issuerRole?: Maybe<Role>
  issuerUserId?: Maybe<Scalars['String']>
  issuers?: Maybe<Array<IssuerUser>>
  language?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  options: Array<UserOptionData>
  permissions: Array<Maybe<UserPermission>>
  phoneNumber?: Maybe<Scalars['String']>
  photo?: Maybe<Image>
  policies?: Maybe<Array<UserPolicy>>
  role: UserRole
  smartWalletUser?: Maybe<Scalars['Boolean']>
  status?: Maybe<UserStatus>
  verifyToken?: Maybe<Scalars['String']>
  version: Scalars['Long']
  whenConfirmed?: Maybe<Scalars['Instant']>
  whenCreated: Scalars['Instant']
  whenModified: Scalars['Instant']
}

export type UserOptionData = {
  __typename?: 'UserOptionData'
  key: Scalars['String']
  value: Scalars['String']
}

export type UserPageInfo = PaginationInfo & {
  __typename?: 'UserPageInfo'
  data: Array<User>
  hasNext: Scalars['Boolean']
  hasPrev: Scalars['Boolean']
  pageSize: Scalars['Int']
  totalCount: Scalars['Int']
  totalPageCount: Scalars['Int']
}

export enum UserPermission {
  Basic = 'BASIC',
  ScannerLicence = 'SCANNER_LICENCE',
}

export type UserPolicy = {
  __typename?: 'UserPolicy'
  actions: Array<Scalars['String']>
  resource: Scalars['String']
}

export enum UserRole {
  Admin = 'ADMIN',
  BasicUser = 'BASIC_USER',
  CustomUser = 'CUSTOM_USER',
  User = 'USER',
}

export enum UserStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Unconfirmed = 'UNCONFIRMED',
}

type BaseModel_ApiKey_Fragment = {
  __typename?: 'ApiKey'
  id: string
  version: number
  whenCreated: number
  whenModified: number
}

type BaseModel_AppPassInstance_Fragment = {
  __typename?: 'AppPassInstance'
  id: string
  version: number
  whenCreated: number
  whenModified: number
}

type BaseModel_BillingInfo_Fragment = {
  __typename?: 'BillingInfo'
  id: string
  version: number
  whenCreated: number
  whenModified: number
}

type BaseModel_DemoInfo_Fragment = {
  __typename?: 'DemoInfo'
  id: string
  version: number
  whenCreated: number
  whenModified: number
}

type BaseModel_Device_Fragment = {
  __typename?: 'Device'
  id: string
  version: number
  whenCreated: number
  whenModified: number
}

type BaseModel_DevicePassInstance_Fragment = {
  __typename?: 'DevicePassInstance'
  id: string
  version: number
  whenCreated: number
  whenModified: number
}

type BaseModel_Email_Fragment = {
  __typename?: 'Email'
  id: string
  version: number
  whenCreated: number
  whenModified: number
}

type BaseModel_Expense_Fragment = {
  __typename?: 'Expense'
  id: string
  version: number
  whenCreated: number
  whenModified: number
}

type BaseModel_ExternalApi_Fragment = {
  __typename?: 'ExternalAPI'
  id: string
  version: number
  whenCreated: number
  whenModified: number
}

type BaseModel_ExternalApiOutput_Fragment = {
  __typename?: 'ExternalAPIOutput'
  id: string
  version: number
  whenCreated: number
  whenModified: number
}

type BaseModel_ExternalApiParameter_Fragment = {
  __typename?: 'ExternalAPIParameter'
  id: string
  version: number
  whenCreated: number
  whenModified: number
}

type BaseModel_FixedMonthlyFee_Fragment = {
  __typename?: 'FixedMonthlyFee'
  id: string
  version: number
  whenCreated: number
  whenModified: number
}

type BaseModel_Issuer_Fragment = {
  __typename?: 'Issuer'
  id: string
  version: number
  whenCreated: number
  whenModified: number
}

type BaseModel_IssuerDiscount_Fragment = {
  __typename?: 'IssuerDiscount'
  id: string
  version: number
  whenCreated: number
  whenModified: number
}

type BaseModel_IssuerSecret_Fragment = {
  __typename?: 'IssuerSecret'
  id: string
  version: number
  whenCreated: number
  whenModified: number
}

type BaseModel_IssuerTerms_Fragment = {
  __typename?: 'IssuerTerms'
  id: string
  version: number
  whenCreated: number
  whenModified: number
}

type BaseModel_IssuerUserSecret_Fragment = {
  __typename?: 'IssuerUserSecret'
  id: string
  version: number
  whenCreated: number
  whenModified: number
}

type BaseModel_IssuerUserSecretValue_Fragment = {
  __typename?: 'IssuerUserSecretValue'
  id: string
  version: number
  whenCreated: number
  whenModified: number
}

type BaseModel_OrderInfo_Fragment = {
  __typename?: 'OrderInfo'
  id: string
  version: number
  whenCreated: number
  whenModified: number
}

type BaseModel_Pass_Fragment = {
  __typename?: 'Pass'
  id: string
  version: number
  whenCreated: number
  whenModified: number
}

type BaseModel_PassAuthenticationToken_Fragment = {
  __typename?: 'PassAuthenticationToken'
  id: string
  version: number
  whenCreated: number
  whenModified: number
}

type BaseModel_PassBackSide_Fragment = {
  __typename?: 'PassBackSide'
  id: string
  version: number
  whenCreated: number
  whenModified: number
}

type BaseModel_PassBeacon_Fragment = {
  __typename?: 'PassBeacon'
  id: string
  version: number
  whenCreated: number
  whenModified: number
}

type BaseModel_PassField_Fragment = {
  __typename?: 'PassField'
  id: string
  version: number
  whenCreated: number
  whenModified: number
}

type BaseModel_PassInputField_Fragment = {
  __typename?: 'PassInputField'
  id: string
  version: number
  whenCreated: number
  whenModified: number
}

type BaseModel_PassInputFieldValue_Fragment = {
  __typename?: 'PassInputFieldValue'
  id: string
  version: number
  whenCreated: number
  whenModified: number
}

type BaseModel_PassIntegration_Fragment = {
  __typename?: 'PassIntegration'
  id: string
  version: number
  whenCreated: number
  whenModified: number
}

type BaseModel_PassPricing_Fragment = {
  __typename?: 'PassPricing'
  id: string
  version: number
  whenCreated: number
  whenModified: number
}

type BaseModel_PassTemplate_Fragment = {
  __typename?: 'PassTemplate'
  id: string
  version: number
  whenCreated: number
  whenModified: number
}

type BaseModel_PassTemplateTrigger_Fragment = {
  __typename?: 'PassTemplateTrigger'
  id: string
  version: number
  whenCreated: number
  whenModified: number
}

type BaseModel_PaymentInfo_Fragment = {
  __typename?: 'PaymentInfo'
  id: string
  version: number
  whenCreated: number
  whenModified: number
}

type BaseModel_Plan_Fragment = {
  __typename?: 'Plan'
  id: string
  version: number
  whenCreated: number
  whenModified: number
}

type BaseModel_PlanSubscription_Fragment = {
  __typename?: 'PlanSubscription'
  id: string
  version: number
  whenCreated: number
  whenModified: number
}

type BaseModel_PlatformSubscription_Fragment = {
  __typename?: 'PlatformSubscription'
  id: string
  version: number
  whenCreated: number
  whenModified: number
}

type BaseModel_Pricing_Fragment = {
  __typename?: 'Pricing'
  id: string
  version: number
  whenCreated: number
  whenModified: number
}

type BaseModel_RewardPassField_Fragment = {
  __typename?: 'RewardPassField'
  id: string
  version: number
  whenCreated: number
  whenModified: number
}

type BaseModel_RewardPassTemplate_Fragment = {
  __typename?: 'RewardPassTemplate'
  id: string
  version: number
  whenCreated: number
  whenModified: number
}

type BaseModel_Scanner_Fragment = {
  __typename?: 'Scanner'
  id: string
  version: number
  whenCreated: number
  whenModified: number
}

type BaseModel_ScannerGroup_Fragment = {
  __typename?: 'ScannerGroup'
  id: string
  version: number
  whenCreated: number
  whenModified: number
}

type BaseModel_ScannerSettings_Fragment = {
  __typename?: 'ScannerSettings'
  id: string
  version: number
  whenCreated: number
  whenModified: number
}

type BaseModel_User_Fragment = {
  __typename?: 'User'
  id: string
  version: number
  whenCreated: number
  whenModified: number
}

type BaseModel_UserDistributionContactInfo_Fragment = {
  __typename?: 'UserDistributionContactInfo'
  id: string
  version: number
  whenCreated: number
  whenModified: number
}

type BaseModel_UserDistributionToken_Fragment = {
  __typename?: 'UserDistributionToken'
  id: string
  version: number
  whenCreated: number
  whenModified: number
}

type BaseModel_UserOld_Fragment = {
  __typename?: 'UserOld'
  id: string
  version: number
  whenCreated: number
  whenModified: number
}

export type BaseModelFragment =
  | BaseModel_ApiKey_Fragment
  | BaseModel_AppPassInstance_Fragment
  | BaseModel_BillingInfo_Fragment
  | BaseModel_DemoInfo_Fragment
  | BaseModel_Device_Fragment
  | BaseModel_DevicePassInstance_Fragment
  | BaseModel_Email_Fragment
  | BaseModel_Expense_Fragment
  | BaseModel_ExternalApi_Fragment
  | BaseModel_ExternalApiOutput_Fragment
  | BaseModel_ExternalApiParameter_Fragment
  | BaseModel_FixedMonthlyFee_Fragment
  | BaseModel_Issuer_Fragment
  | BaseModel_IssuerDiscount_Fragment
  | BaseModel_IssuerSecret_Fragment
  | BaseModel_IssuerTerms_Fragment
  | BaseModel_IssuerUserSecret_Fragment
  | BaseModel_IssuerUserSecretValue_Fragment
  | BaseModel_OrderInfo_Fragment
  | BaseModel_Pass_Fragment
  | BaseModel_PassAuthenticationToken_Fragment
  | BaseModel_PassBackSide_Fragment
  | BaseModel_PassBeacon_Fragment
  | BaseModel_PassField_Fragment
  | BaseModel_PassInputField_Fragment
  | BaseModel_PassInputFieldValue_Fragment
  | BaseModel_PassIntegration_Fragment
  | BaseModel_PassPricing_Fragment
  | BaseModel_PassTemplate_Fragment
  | BaseModel_PassTemplateTrigger_Fragment
  | BaseModel_PaymentInfo_Fragment
  | BaseModel_Plan_Fragment
  | BaseModel_PlanSubscription_Fragment
  | BaseModel_PlatformSubscription_Fragment
  | BaseModel_Pricing_Fragment
  | BaseModel_RewardPassField_Fragment
  | BaseModel_RewardPassTemplate_Fragment
  | BaseModel_Scanner_Fragment
  | BaseModel_ScannerGroup_Fragment
  | BaseModel_ScannerSettings_Fragment
  | BaseModel_User_Fragment
  | BaseModel_UserDistributionContactInfo_Fragment
  | BaseModel_UserDistributionToken_Fragment
  | BaseModel_UserOld_Fragment

export type PassTemplatesQueryVariables = Exact<{ [key: string]: never }>

export type PassTemplatesQuery = {
  __typename?: 'Query'
  passTemplates: {
    __typename?: 'PassTemplatePageInfo'
    data: Array<{
      __typename?: 'PassTemplate'
      id: string
      name?: string | null
    }>
  }
}

export type VoidPassMutationVariables = Exact<{
  passTemplateId: Scalars['String']
  values: Array<PassInputFieldValueDataInput> | PassInputFieldValueDataInput
}>

export type VoidPassMutation = {
  __typename?: 'Mutation'
  voidUniquePass: boolean
}

export type UnvoidPassMutationVariables = Exact<{
  id: Scalars['String']
}>

export type UnvoidPassMutation = {
  __typename?: 'Mutation'
  unvoidPass: boolean
}

export type DeletePassMutationVariables = Exact<{
  passTemplateId: Scalars['String']
  values: Array<PassInputFieldValueDataInput> | PassInputFieldValueDataInput
}>

export type DeletePassMutation = {
  __typename?: 'Mutation'
  deleteUniquePass: boolean
}

export type UpdateStatusOnPassWithDynamicBarcodeMutationVariables = Exact<{
  dynamicBarcodeData: DynamicBarcodeDataInput
}>

export type UpdateStatusOnPassWithDynamicBarcodeMutation = {
  __typename?: 'Mutation'
  updateStatusOnPassWithDynamicBarcode: {
    __typename?: 'Pass'
    status: PassStatus
    id: string
    version: number
    whenCreated: number
    whenModified: number
    inputFieldValues: Array<{
      __typename?: 'PassInputFieldValue'
      value?: string | null
      id: string
      version: number
      whenCreated: number
      whenModified: number
      passInputField: {
        __typename?: 'PassInputField'
        deleted: boolean
        format: PassInputFieldFormat
        isExternalAuthField: boolean
        label: string
        mandatory: boolean
        type: PassInputFieldType
        unique: boolean
        identifier: string
        id: string
        version: number
        whenCreated: number
        whenModified: number
      }
    }>
  }
}

export type UpsertPassMutationVariables = Exact<{
  inputData: PassDataInput
}>

export type UpsertPassMutation = {
  __typename?: 'Mutation'
  upsertPass: {
    __typename?: 'Pass'
    distributionUrl: string
    deliveryPageUrl: string
    distributionQRCode: string
    expirationDate?: number | null
    id: string
    version: number
    whenCreated: number
    whenModified: number
  }
}

export type UpdatePassMutationVariables = Exact<{
  passTemplateId: Scalars['String']
  expirationDate?: InputMaybe<Scalars['String']>
  thumbnail?: InputMaybe<ImageDataInput>
  values?: InputMaybe<
    Array<PassInputFieldValueDataInput> | PassInputFieldValueDataInput
  >
}>

export type UpdatePassMutation = {
  __typename?: 'Mutation'
  updatePass: {
    __typename?: 'Pass'
    distributionUrl: string
    deliveryPageUrl: string
    distributionQRCode: string
    expirationDate?: number | null
    id: string
    version: number
    whenCreated: number
    whenModified: number
  }
}

export const BaseModel = gql`
  fragment baseModel on BaseModel {
    id
    version
    whenCreated
    whenModified
  }
`
export const PassTemplates = gql`
  query passTemplates {
    passTemplates {
      data {
        id
        name
      }
    }
  }
`
export const VoidPass = gql`
  mutation voidPass(
    $passTemplateId: String!
    $values: [PassInputFieldValueDataInput!]!
  ) {
    voidUniquePass(passTemplateId: $passTemplateId, values: $values)
  }
`
export const UnvoidPass = gql`
  mutation unvoidPass($id: String!) {
    unvoidPass(id: $id)
  }
`
export const DeletePass = gql`
  mutation deletePass(
    $passTemplateId: String!
    $values: [PassInputFieldValueDataInput!]!
  ) {
    deleteUniquePass(passTemplateId: $passTemplateId, values: $values)
  }
`
export const UpdateStatusOnPassWithDynamicBarcode = gql`
  mutation updateStatusOnPassWithDynamicBarcode(
    $dynamicBarcodeData: DynamicBarcodeDataInput!
  ) {
    updateStatusOnPassWithDynamicBarcode(
      dynamicBarcodeData: $dynamicBarcodeData
    ) {
      ...baseModel
      status
      inputFieldValues {
        passInputField {
          deleted
          format
          isExternalAuthField
          label
          mandatory
          type
          unique
          identifier
          ...baseModel
        }
        ...baseModel
        value
      }
    }
  }
  ${BaseModel}
`
export const UpsertPass = gql`
  mutation upsertPass($inputData: PassDataInput!) {
    upsertPass(data: $inputData) {
      distributionUrl
      deliveryPageUrl
      distributionQRCode
      expirationDate
      ...baseModel
    }
  }
  ${BaseModel}
`
export const UpdatePass = gql`
  mutation updatePass(
    $passTemplateId: String!
    $expirationDate: String
    $thumbnail: ImageDataInput
    $values: [PassInputFieldValueDataInput!]
  ) {
    updatePass(
      expirationDate: $expirationDate
      passTemplateId: $passTemplateId
      thumbnail: $thumbnail
      values: $values
    ) {
      distributionUrl
      deliveryPageUrl
      distributionQRCode
      expirationDate
      ...baseModel
    }
  }
  ${BaseModel}
`
