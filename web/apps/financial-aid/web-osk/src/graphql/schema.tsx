import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any
}

export type AidInput = {
  livesWithParents: Scalars['Float']
  ownPlace: Scalars['Float']
  registeredRenting: Scalars['Float']
  type: Scalars['String']
  unknown: Scalars['Float']
  unregisteredRenting: Scalars['Float']
  withOthers: Scalars['Float']
}

export type AidModel = {
  __typename?: 'AidModel'
  livesWithParents: Scalars['Float']
  municipalityId: Scalars['String']
  ownPlace: Scalars['Float']
  registeredRenting: Scalars['Float']
  type: Scalars['String']
  unknown: Scalars['Float']
  unregisteredRenting: Scalars['Float']
  withOthers: Scalars['Float']
}

export type AllApplicationInput = {
  stateUrl: Scalars['String']
}

export type AmountModel = {
  __typename?: 'AmountModel'
  aidAmount: Scalars['Float']
  applicationId: Scalars['String']
  childrenAidAmount?: Maybe<Scalars['Float']>
  decemberAidAmount?: Maybe<Scalars['Float']>
  deductionFactors?: Maybe<Array<DeductionFactorsModel>>
  finalAmount: Scalars['Float']
  income?: Maybe<Scalars['Float']>
  personalTaxCredit: Scalars['Float']
  spousePersonalTaxCredit?: Maybe<Scalars['Float']>
  tax: Scalars['Float']
}

export type ApiKeysModel = {
  __typename?: 'ApiKeysModel'
  apiKey: Scalars['String']
  id: Scalars['ID']
  municipalityCode: Scalars['String']
  name: Scalars['String']
}

export type ApplicationEventModel = {
  __typename?: 'ApplicationEventModel'
  applicationId: Scalars['String']
  comment?: Maybe<Scalars['String']>
  created: Scalars['String']
  emailSent?: Maybe<Scalars['Boolean']>
  eventType: Scalars['String']
  id: Scalars['ID']
  staffName?: Maybe<Scalars['String']>
  staffNationalId?: Maybe<Scalars['String']>
}

export type ApplicationFileModel = {
  __typename?: 'ApplicationFileModel'
  applicationId: Scalars['String']
  created: Scalars['String']
  id: Scalars['ID']
  key: Scalars['String']
  name: Scalars['String']
  size: Scalars['Float']
  type: Scalars['String']
}

export type ApplicationFiltersModel = {
  __typename?: 'ApplicationFiltersModel'
  Approved: Scalars['Float']
  DataNeeded: Scalars['Float']
  InProgress: Scalars['Float']
  MyCases: Scalars['Float']
  New: Scalars['Float']
  Rejected: Scalars['Float']
}

export type ApplicationInput = {
  id: Scalars['String']
}

export type ApplicationModel = {
  __typename?: 'ApplicationModel'
  accountNumber?: Maybe<Scalars['String']>
  amount?: Maybe<AmountModel>
  applicationEvents?: Maybe<Array<ApplicationEventModel>>
  applicationSystemId?: Maybe<Scalars['String']>
  appliedDate: Scalars['String']
  bankNumber?: Maybe<Scalars['String']>
  children?: Maybe<Array<ChildrenModel>>
  childrenComment?: Maybe<Scalars['String']>
  city?: Maybe<Scalars['String']>
  created: Scalars['String']
  directTaxPayments: Array<DirectTaxPaymentModel>
  email: Scalars['String']
  employment: Scalars['String']
  employmentCustom?: Maybe<Scalars['String']>
  familyStatus: Scalars['String']
  files?: Maybe<Array<ApplicationFileModel>>
  filters?: Maybe<ApplicationFiltersModel>
  formComment?: Maybe<Scalars['String']>
  hasFetchedDirectTaxPayment?: Maybe<Scalars['Boolean']>
  hasIncome: Scalars['Boolean']
  homeCircumstances: Scalars['String']
  homeCircumstancesCustom?: Maybe<Scalars['String']>
  id: Scalars['ID']
  interview?: Maybe<Scalars['Boolean']>
  ledger?: Maybe<Scalars['String']>
  modified: Scalars['String']
  municipalityCode: Scalars['String']
  name: Scalars['String']
  nationalId: Scalars['String']
  navSuccess?: Maybe<Scalars['Boolean']>
  phoneNumber?: Maybe<Scalars['String']>
  postalCode?: Maybe<Scalars['String']>
  rejection?: Maybe<Scalars['String']>
  spouseEmail?: Maybe<Scalars['String']>
  spouseFormComment?: Maybe<Scalars['String']>
  spouseHasFetchedDirectTaxPayment?: Maybe<Scalars['Boolean']>
  spouseName?: Maybe<Scalars['String']>
  spouseNationalId?: Maybe<Scalars['String']>
  spousePhoneNumber?: Maybe<Scalars['String']>
  staff?: Maybe<StaffModel>
  state: Scalars['String']
  streetName?: Maybe<Scalars['String']>
  student: Scalars['Boolean']
  studentCustom?: Maybe<Scalars['String']>
  usePersonalTaxCredit: Scalars['Boolean']
}

export type ApplicationSearchInput = {
  nationalId: Scalars['String']
}

export type ChildrenModel = {
  __typename?: 'ChildrenModel'
  applicationId: Scalars['String']
  created: Scalars['String']
  id: Scalars['ID']
  livesWithApplicant: Scalars['Boolean']
  livesWithBothParents: Scalars['Boolean']
  modified: Scalars['String']
  name: Scalars['String']
  nationalId: Scalars['String']
  school?: Maybe<Scalars['String']>
}

export type CreateAmountInput = {
  aidAmount: Scalars['Float']
  applicationId: Scalars['String']
  childrenAidAmount?: InputMaybe<Scalars['Float']>
  decemberAidAmount?: InputMaybe<Scalars['Float']>
  deductionFactors?: InputMaybe<Array<CreateDeductionFactorsInput>>
  finalAmount: Scalars['Float']
  income?: InputMaybe<Scalars['Float']>
  personalTaxCredit: Scalars['Float']
  spousePersonalTaxCredit?: InputMaybe<Scalars['Float']>
  tax: Scalars['Float']
}

export type CreateApiKeyInput = {
  apiKey: Scalars['String']
  municipalityCode: Scalars['String']
  name: Scalars['String']
}

export type CreateApplicationEventInput = {
  applicationId: Scalars['String']
  comment?: InputMaybe<Scalars['String']>
  eventType: Scalars['String']
  staffName?: InputMaybe<Scalars['String']>
  staffNationalId?: InputMaybe<Scalars['String']>
}

export type CreateApplicationFileInput = {
  key: Scalars['String']
  name: Scalars['String']
  size: Scalars['Float']
  type: Scalars['String']
}

export type CreateApplicationFilesInput = {
  files: Array<CreateFileInput>
}

export type CreateApplicationInput = {
  accountNumber?: InputMaybe<Scalars['String']>
  amount?: InputMaybe<Scalars['Float']>
  applicationSystemId?: InputMaybe<Scalars['String']>
  bankNumber?: InputMaybe<Scalars['String']>
  childrenComment?: InputMaybe<Scalars['String']>
  city?: InputMaybe<Scalars['String']>
  directTaxPayments: Array<DirectTaxPaymentInput>
  email: Scalars['String']
  employment: Scalars['String']
  employmentCustom?: InputMaybe<Scalars['String']>
  familyStatus: Scalars['String']
  files: Array<CreateApplicationFileInput>
  formComment?: InputMaybe<Scalars['String']>
  hasFetchedDirectTaxPayment?: InputMaybe<Scalars['Boolean']>
  hasIncome: Scalars['Boolean']
  homeCircumstances: Scalars['String']
  homeCircumstancesCustom?: InputMaybe<Scalars['String']>
  interview?: InputMaybe<Scalars['Boolean']>
  ledger?: InputMaybe<Scalars['String']>
  municipalityCode: Scalars['String']
  name: Scalars['String']
  phoneNumber?: InputMaybe<Scalars['String']>
  postalCode?: InputMaybe<Scalars['String']>
  spouseEmail?: InputMaybe<Scalars['String']>
  spouseName?: InputMaybe<Scalars['String']>
  spouseNationalId?: InputMaybe<Scalars['String']>
  state: Scalars['String']
  streetName?: InputMaybe<Scalars['String']>
  student: Scalars['Boolean']
  studentCustom?: InputMaybe<Scalars['String']>
  usePersonalTaxCredit: Scalars['Boolean']
}

export type CreateDeductionFactorsInput = {
  amount: Scalars['Float']
  description: Scalars['String']
}

export type CreateFileInput = {
  applicationId: Scalars['String']
  key: Scalars['String']
  name: Scalars['String']
  size: Scalars['Float']
  type: Scalars['String']
}

export type CreateFilesModel = {
  __typename?: 'CreateFilesModel'
  success: Scalars['Boolean']
}

export type CreateMunicipalityInput = {
  admin?: InputMaybe<CreateStaffInput>
  municipalityId: Scalars['String']
  name: Scalars['String']
}

export type CreateStaffInput = {
  email: Scalars['String']
  municipalityIds?: InputMaybe<Array<Scalars['String']>>
  municipalityNames?: InputMaybe<Array<Scalars['String']>>
  name: Scalars['String']
  nationalId: Scalars['String']
  roles: Array<Scalars['String']>
}

export type DeductionFactorsModel = {
  __typename?: 'DeductionFactorsModel'
  amount: Scalars['Float']
  amountId: Scalars['String']
  description: Scalars['String']
}

export type DeleteApiKeyInput = {
  id: Scalars['String']
}

export type DeleteApiKeyResponse = {
  __typename?: 'DeleteApiKeyResponse'
  success: Scalars['Boolean']
}

export type DirectTaxPaymentInput = {
  month: Scalars['Float']
  payerNationalId: Scalars['String']
  personalAllowance: Scalars['Float']
  totalSalary: Scalars['Float']
  userType: Scalars['String']
  withheldAtSource: Scalars['Float']
  year: Scalars['Float']
}

export type DirectTaxPaymentModel = {
  __typename?: 'DirectTaxPaymentModel'
  month: Scalars['Float']
  payerNationalId: Scalars['String']
  personalAllowance: Scalars['Float']
  totalSalary: Scalars['Float']
  userType: Scalars['String']
  withheldAtSource: Scalars['Float']
  year: Scalars['Float']
}

export type DirectTaxPaymentResponse = {
  __typename?: 'DirectTaxPaymentResponse'
  month: Scalars['Float']
  payerNationalId: Scalars['String']
  personalAllowance: Scalars['Float']
  totalSalary: Scalars['Float']
  withheldAtSource: Scalars['Float']
  year: Scalars['Float']
}

export type DirectTaxPaymentsResponse = {
  __typename?: 'DirectTaxPaymentsResponse'
  directTaxPayments: Array<DirectTaxPaymentResponse>
  success: Scalars['Boolean']
}

export type FilterApplicationsInput = {
  defaultStates: Array<Scalars['String']>
  endDate?: InputMaybe<Scalars['String']>
  page: Scalars['Float']
  staff: Array<Scalars['String']>
  startDate?: InputMaybe<Scalars['String']>
  states: Array<Scalars['String']>
}

export type FilterApplicationsResponse = {
  __typename?: 'FilterApplicationsResponse'
  applications: Array<ApplicationModel>
  minDateCreated?: Maybe<Scalars['String']>
  staffList: Array<StaffModel>
  totalCount: Scalars['Float']
}

export type GetSignedUrlForIdInput = {
  id: Scalars['String']
}

export type GetSignedUrlInput = {
  fileName: Scalars['String']
  folder: Scalars['String']
}

export type MunicipalitiesPersonalTaxReturnIdInput = {
  id: Scalars['String']
}

export type MunicipalityActivityInput = {
  active: Scalars['Boolean']
  id: Scalars['String']
}

export type MunicipalityModel = {
  __typename?: 'MunicipalityModel'
  active: Scalars['Boolean']
  adminUsers?: Maybe<Array<StaffModel>>
  allAdminUsers?: Maybe<Array<StaffModel>>
  childrenAid: Scalars['String']
  cohabitationAid: AidModel
  decemberCompensation: Scalars['Float']
  email?: Maybe<Scalars['String']>
  homepage?: Maybe<Scalars['String']>
  id: Scalars['ID']
  individualAid: AidModel
  municipalityId: Scalars['String']
  name: Scalars['String']
  navPassword?: Maybe<Scalars['String']>
  navUrl?: Maybe<Scalars['String']>
  navUsername?: Maybe<Scalars['String']>
  numberOfUsers?: Maybe<Scalars['Float']>
  rulesHomepage?: Maybe<Scalars['String']>
  usingNav: Scalars['Boolean']
}

export type MunicipalityQueryInput = {
  id: Scalars['String']
}

export type Mutation = {
  __typename?: 'Mutation'
  applicationFilters: ApplicationFiltersModel
  createApiKey: ApiKeysModel
  createApplication?: Maybe<ApplicationModel>
  createApplicationEvent?: Maybe<ApplicationModel>
  createApplicationFiles: CreateFilesModel
  createMunicipality: MunicipalityModel
  createStaff: StaffModel
  deleteApiKey: DeleteApiKeyResponse
  getSignedUrl: SignedUrlModel
  municipalityActivity: MunicipalityModel
  updateApiKey: ApiKeysModel
  updateApplication?: Maybe<ApplicationModel>
  updateApplicationTable?: Maybe<UpdateApplicationTableResponse>
  updateMunicipality: Array<MunicipalityModel>
  updateStaff?: Maybe<StaffModel>
}

export type MutationCreateApiKeyArgs = {
  input: CreateApiKeyInput
}

export type MutationCreateApplicationArgs = {
  input: CreateApplicationInput
}

export type MutationCreateApplicationEventArgs = {
  input: CreateApplicationEventInput
}

export type MutationCreateApplicationFilesArgs = {
  input: CreateApplicationFilesInput
}

export type MutationCreateMunicipalityArgs = {
  input: CreateMunicipalityInput
}

export type MutationCreateStaffArgs = {
  input: CreateStaffInput
}

export type MutationDeleteApiKeyArgs = {
  input: DeleteApiKeyInput
}

export type MutationGetSignedUrlArgs = {
  input: GetSignedUrlInput
}

export type MutationMunicipalityActivityArgs = {
  input: MunicipalityActivityInput
}

export type MutationUpdateApiKeyArgs = {
  input: UpdateApiKeyInput
}

export type MutationUpdateApplicationArgs = {
  input: UpdateApplicationInput
}

export type MutationUpdateApplicationTableArgs = {
  input: UpdateApplicationInputTable
}

export type MutationUpdateMunicipalityArgs = {
  input: UpdateMunicipalityInput
}

export type MutationUpdateStaffArgs = {
  input: UpdateStaffInput
}

export type Person = {
  __typename?: 'Person'
  address?: Maybe<UserAddress>
  children?: Maybe<Array<Person>>
  fullName: Scalars['String']
  genderCode: Scalars['String']
  livesWithApplicant?: Maybe<Scalars['Boolean']>
  livesWithBothParents?: Maybe<Scalars['Boolean']>
  nationalId: Scalars['ID']
  otherParent?: Maybe<Person>
  residenceHistory?: Maybe<Array<UserResidence>>
  spouse?: Maybe<UserSpouse>
}

export type PersonalTaxReturn = {
  __typename?: 'PersonalTaxReturn'
  key: Scalars['String']
  name: Scalars['String']
  size: Scalars['Float']
}

export type PersonalTaxReturnResponse = {
  __typename?: 'PersonalTaxReturnResponse'
  personalTaxReturn?: Maybe<PersonalTaxReturn>
}

export type Query = {
  __typename?: 'Query'
  admins: Array<StaffModel>
  apiKeysForMunicipality: Array<ApiKeysModel>
  application: ApplicationModel
  applicationSearch: Array<ApplicationModel>
  applications: Array<ApplicationModel>
  currentUser?: Maybe<UserModel>
  filterApplications: FilterApplicationsResponse
  getSignedUrlForAllFilesId: Array<SignedUrlModel>
  getSignedUrlForId: SignedUrlModel
  municipalities: Array<MunicipalityModel>
  municipalitiesDirectTaxPayments: DirectTaxPaymentsResponse
  municipalitiesPersonalTaxReturn: PersonalTaxReturnResponse
  municipality: MunicipalityModel
  municipalityByIds: Array<MunicipalityModel>
  municipalityNationalRegistryUserV2?: Maybe<Person>
  supervisors: Array<StaffModel>
  user: StaffModel
  users: Array<StaffModel>
}

export type QueryApplicationArgs = {
  input: ApplicationInput
}

export type QueryApplicationSearchArgs = {
  input: ApplicationSearchInput
}

export type QueryApplicationsArgs = {
  input: AllApplicationInput
}

export type QueryFilterApplicationsArgs = {
  input: FilterApplicationsInput
}

export type QueryGetSignedUrlForAllFilesIdArgs = {
  input: GetSignedUrlForIdInput
}

export type QueryGetSignedUrlForIdArgs = {
  input: GetSignedUrlForIdInput
}

export type QueryMunicipalitiesPersonalTaxReturnArgs = {
  input: MunicipalitiesPersonalTaxReturnIdInput
}

export type QueryMunicipalityArgs = {
  input: MunicipalityQueryInput
}

export type QueryUserArgs = {
  input: StaffInput
}

export type SignedUrlModel = {
  __typename?: 'SignedUrlModel'
  key: Scalars['String']
  url: Scalars['String']
}

export type SpouseModel = {
  __typename?: 'SpouseModel'
  applicantName: Scalars['String']
  applicantSpouseEmail: Scalars['String']
  hasFiles: Scalars['Boolean']
  hasPartnerApplied: Scalars['Boolean']
}

export type StaffInput = {
  id: Scalars['String']
}

export type StaffModel = {
  __typename?: 'StaffModel'
  active: Scalars['Boolean']
  email?: Maybe<Scalars['String']>
  id: Scalars['ID']
  municipalityIds: Array<Scalars['String']>
  name: Scalars['String']
  nationalId: Scalars['String']
  nickname?: Maybe<Scalars['String']>
  phoneNumber?: Maybe<Scalars['String']>
  roles: Array<Scalars['String']>
  usePseudoName?: Maybe<Scalars['Boolean']>
}

export type UpdateApiKeyInput = {
  id: Scalars['String']
  name: Scalars['String']
}

export type UpdateApplicationInput = {
  amount?: InputMaybe<CreateAmountInput>
  appliedDate?: InputMaybe<Scalars['String']>
  comment?: InputMaybe<Scalars['String']>
  directTaxPayments?: InputMaybe<Array<DirectTaxPaymentInput>>
  event: Scalars['String']
  id: Scalars['String']
  rejection?: InputMaybe<Scalars['String']>
  spouseEmail?: InputMaybe<Scalars['String']>
  spouseFormComment?: InputMaybe<Scalars['String']>
  spouseHasFetchedDirectTaxPayment?: InputMaybe<Scalars['Boolean']>
  spouseName?: InputMaybe<Scalars['String']>
  spousePhoneNumber?: InputMaybe<Scalars['String']>
  staffId?: InputMaybe<Scalars['String']>
  state?: InputMaybe<Scalars['String']>
}

export type UpdateApplicationInputTable = {
  event: Scalars['String']
  id: Scalars['String']
  staffId: Scalars['String']
  state: Scalars['String']
  stateUrl: Scalars['String']
}

export type UpdateApplicationTableResponse = {
  __typename?: 'UpdateApplicationTableResponse'
  applications: Array<ApplicationModel>
  filters: ApplicationFiltersModel
}

export type UpdateMunicipalityInput = {
  childrenAid?: InputMaybe<Scalars['String']>
  cohabitationAid?: InputMaybe<AidInput>
  decemberCompensation?: InputMaybe<Scalars['Float']>
  email?: InputMaybe<Scalars['String']>
  homepage?: InputMaybe<Scalars['String']>
  individualAid?: InputMaybe<AidInput>
  municipalityId: Scalars['String']
  navPassword?: InputMaybe<Scalars['String']>
  navUrl?: InputMaybe<Scalars['String']>
  navUsername?: InputMaybe<Scalars['String']>
  rulesHomepage?: InputMaybe<Scalars['String']>
  usingNav?: InputMaybe<Scalars['Boolean']>
}

export type UpdateStaffInput = {
  active?: InputMaybe<Scalars['Boolean']>
  email?: InputMaybe<Scalars['String']>
  id: Scalars['String']
  municipalityIds?: InputMaybe<Array<Scalars['String']>>
  name?: InputMaybe<Scalars['String']>
  nationalId?: InputMaybe<Scalars['String']>
  nickname?: InputMaybe<Scalars['String']>
  roles?: InputMaybe<Array<Scalars['String']>>
  usePseudoName?: InputMaybe<Scalars['Boolean']>
}

export type UserAddress = {
  __typename?: 'UserAddress'
  city?: Maybe<Scalars['String']>
  municipalityCode?: Maybe<Scalars['String']>
  postalCode?: Maybe<Scalars['String']>
  streetName: Scalars['String']
}

export type UserModel = {
  __typename?: 'UserModel'
  currentApplicationId?: Maybe<Scalars['String']>
  name: Scalars['String']
  nationalId: Scalars['String']
  phoneNumber?: Maybe<Scalars['String']>
  postalCode?: Maybe<Scalars['Float']>
  spouse?: Maybe<SpouseModel>
  staff?: Maybe<StaffModel>
}

export type UserResidence = {
  __typename?: 'UserResidence'
  address: UserAddress
  country?: Maybe<Scalars['String']>
  dateOfChange?: Maybe<Scalars['DateTime']>
  houseIdentificationCode?: Maybe<Scalars['String']>
  realEstateNumber?: Maybe<Scalars['String']>
}

export type UserSpouse = {
  __typename?: 'UserSpouse'
  maritalStatus?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  nationalId?: Maybe<Scalars['ID']>
}

export type CreateApplicationMutationVariables = Exact<{
  input: CreateApplicationInput
}>

export type CreateApplicationMutation = {
  __typename?: 'Mutation'
  createApplication?: { __typename?: 'ApplicationModel'; id: string } | null
}

export type CreateApplicationFilesMutationVariables = Exact<{
  input: CreateApplicationFilesInput
}>

export type CreateApplicationFilesMutation = {
  __typename?: 'Mutation'
  createApplicationFiles: { __typename?: 'CreateFilesModel'; success: boolean }
}

export type GetSignedUrlMutationVariables = Exact<{
  input: GetSignedUrlInput
}>

export type GetSignedUrlMutation = {
  __typename?: 'Mutation'
  getSignedUrl: { __typename?: 'SignedUrlModel'; url: string; key: string }
}

export type CurrentUserQueryQueryVariables = Exact<{ [key: string]: never }>

export type CurrentUserQueryQuery = {
  __typename?: 'Query'
  currentUser?: {
    __typename?: 'UserModel'
    nationalId: string
    name: string
    phoneNumber?: string | null
    postalCode?: number | null
    currentApplicationId?: string | null
    spouse?: {
      __typename?: 'SpouseModel'
      hasPartnerApplied: boolean
      hasFiles: boolean
      applicantName: string
      applicantSpouseEmail: string
    } | null
  } | null
}

export type GetApplicationQueryQueryVariables = Exact<{
  input: ApplicationInput
}>

export type GetApplicationQueryQuery = {
  __typename?: 'Query'
  application: {
    __typename?: 'ApplicationModel'
    id: string
    homeCircumstances: string
    usePersonalTaxCredit: boolean
    state: string
    rejection?: string | null
    created: string
    modified: string
    municipalityCode: string
    spouseNationalId?: string | null
    familyStatus: string
    amount?: {
      __typename?: 'AmountModel'
      aidAmount: number
      income?: number | null
      personalTaxCredit: number
      spousePersonalTaxCredit?: number | null
      tax: number
      finalAmount: number
      deductionFactors?: Array<{
        __typename?: 'DeductionFactorsModel'
        description: string
        amount: number
      }> | null
    } | null
    applicationEvents?: Array<{
      __typename?: 'ApplicationEventModel'
      id: string
      applicationId: string
      eventType: string
      comment?: string | null
      created: string
    }> | null
  }
}

export type UpdateApplicationMutationMutationVariables = Exact<{
  input: UpdateApplicationInput
}>

export type UpdateApplicationMutationMutation = {
  __typename?: 'Mutation'
  updateApplication?: {
    __typename?: 'ApplicationModel'
    id: string
    homeCircumstances: string
    usePersonalTaxCredit: boolean
    state: string
    rejection?: string | null
    created: string
    modified: string
    municipalityCode: string
    spouseNationalId?: string | null
    amount?: {
      __typename?: 'AmountModel'
      aidAmount: number
      income?: number | null
      personalTaxCredit: number
      spousePersonalTaxCredit?: number | null
      tax: number
      finalAmount: number
      deductionFactors?: Array<{
        __typename?: 'DeductionFactorsModel'
        description: string
        amount: number
      }> | null
    } | null
    applicationEvents?: Array<{
      __typename?: 'ApplicationEventModel'
      id: string
      applicationId: string
      eventType: string
      comment?: string | null
      created: string
    }> | null
  } | null
}

export type GetNationalRegistryUserQueryQueryVariables = Exact<{
  [key: string]: never
}>

export type GetNationalRegistryUserQueryQuery = {
  __typename?: 'Query'
  municipalityNationalRegistryUserV2?: {
    __typename?: 'Person'
    nationalId: string
    fullName: string
    address?: {
      __typename?: 'UserAddress'
      streetName: string
      postalCode?: string | null
      city?: string | null
      municipalityCode?: string | null
    } | null
    spouse?: {
      __typename?: 'UserSpouse'
      nationalId?: string | null
      maritalStatus?: string | null
      name?: string | null
    } | null
  } | null
}

export type GatherTaxDataQueryQueryVariables = Exact<{
  input: MunicipalitiesPersonalTaxReturnIdInput
}>

export type GatherTaxDataQueryQuery = {
  __typename?: 'Query'
  municipalitiesPersonalTaxReturn: {
    __typename?: 'PersonalTaxReturnResponse'
    personalTaxReturn?: {
      __typename?: 'PersonalTaxReturn'
      key: string
      name: string
      size: number
    } | null
  }
  municipalitiesDirectTaxPayments: {
    __typename?: 'DirectTaxPaymentsResponse'
    success: boolean
    directTaxPayments: Array<{
      __typename?: 'DirectTaxPaymentResponse'
      totalSalary: number
      payerNationalId: string
      personalAllowance: number
      withheldAtSource: number
      month: number
      year: number
    }>
  }
}

export type GetMunicipalityQueryQueryVariables = Exact<{
  input: MunicipalityQueryInput
}>

export type GetMunicipalityQueryQuery = {
  __typename?: 'Query'
  municipality: {
    __typename?: 'MunicipalityModel'
    id: string
    name: string
    homepage?: string | null
    active: boolean
    municipalityId: string
    email?: string | null
    rulesHomepage?: string | null
    individualAid: {
      __typename?: 'AidModel'
      ownPlace: number
      registeredRenting: number
      unregisteredRenting: number
      withOthers: number
      livesWithParents: number
      unknown: number
      type: string
    }
    cohabitationAid: {
      __typename?: 'AidModel'
      ownPlace: number
      registeredRenting: number
      unregisteredRenting: number
      withOthers: number
      livesWithParents: number
      unknown: number
      type: string
    }
  }
}

export const CreateApplicationDocument = gql`
  mutation createApplication($input: CreateApplicationInput!) {
    createApplication(input: $input) {
      id
    }
  }
`
export type CreateApplicationMutationFn = Apollo.MutationFunction<
  CreateApplicationMutation,
  CreateApplicationMutationVariables
>

/**
 * __useCreateApplicationMutation__
 *
 * To run a mutation, you first call `useCreateApplicationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateApplicationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createApplicationMutation, { data, loading, error }] = useCreateApplicationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateApplicationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateApplicationMutation,
    CreateApplicationMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateApplicationMutation,
    CreateApplicationMutationVariables
  >(CreateApplicationDocument, options)
}
export type CreateApplicationMutationHookResult = ReturnType<
  typeof useCreateApplicationMutation
>
export type CreateApplicationMutationResult = Apollo.MutationResult<CreateApplicationMutation>
export type CreateApplicationMutationOptions = Apollo.BaseMutationOptions<
  CreateApplicationMutation,
  CreateApplicationMutationVariables
>
export const CreateApplicationFilesDocument = gql`
  mutation createApplicationFiles($input: CreateApplicationFilesInput!) {
    createApplicationFiles(input: $input) {
      success
    }
  }
`
export type CreateApplicationFilesMutationFn = Apollo.MutationFunction<
  CreateApplicationFilesMutation,
  CreateApplicationFilesMutationVariables
>

/**
 * __useCreateApplicationFilesMutation__
 *
 * To run a mutation, you first call `useCreateApplicationFilesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateApplicationFilesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createApplicationFilesMutation, { data, loading, error }] = useCreateApplicationFilesMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateApplicationFilesMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateApplicationFilesMutation,
    CreateApplicationFilesMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateApplicationFilesMutation,
    CreateApplicationFilesMutationVariables
  >(CreateApplicationFilesDocument, options)
}
export type CreateApplicationFilesMutationHookResult = ReturnType<
  typeof useCreateApplicationFilesMutation
>
export type CreateApplicationFilesMutationResult = Apollo.MutationResult<CreateApplicationFilesMutation>
export type CreateApplicationFilesMutationOptions = Apollo.BaseMutationOptions<
  CreateApplicationFilesMutation,
  CreateApplicationFilesMutationVariables
>
export const GetSignedUrlDocument = gql`
  mutation getSignedUrl($input: GetSignedUrlInput!) {
    getSignedUrl(input: $input) {
      url
      key
    }
  }
`
export type GetSignedUrlMutationFn = Apollo.MutationFunction<
  GetSignedUrlMutation,
  GetSignedUrlMutationVariables
>

/**
 * __useGetSignedUrlMutation__
 *
 * To run a mutation, you first call `useGetSignedUrlMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetSignedUrlMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getSignedUrlMutation, { data, loading, error }] = useGetSignedUrlMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetSignedUrlMutation(
  baseOptions?: Apollo.MutationHookOptions<
    GetSignedUrlMutation,
    GetSignedUrlMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    GetSignedUrlMutation,
    GetSignedUrlMutationVariables
  >(GetSignedUrlDocument, options)
}
export type GetSignedUrlMutationHookResult = ReturnType<
  typeof useGetSignedUrlMutation
>
export type GetSignedUrlMutationResult = Apollo.MutationResult<GetSignedUrlMutation>
export type GetSignedUrlMutationOptions = Apollo.BaseMutationOptions<
  GetSignedUrlMutation,
  GetSignedUrlMutationVariables
>
export const CurrentUserQueryDocument = gql`
  query CurrentUserQuery {
    currentUser {
      nationalId
      name
      phoneNumber
      postalCode
      spouse {
        hasPartnerApplied
        hasFiles
        applicantName
        applicantSpouseEmail
      }
      currentApplicationId
    }
  }
`

/**
 * __useCurrentUserQueryQuery__
 *
 * To run a query within a React component, call `useCurrentUserQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQueryQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CurrentUserQueryQuery,
    CurrentUserQueryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<CurrentUserQueryQuery, CurrentUserQueryQueryVariables>(
    CurrentUserQueryDocument,
    options,
  )
}
export function useCurrentUserQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CurrentUserQueryQuery,
    CurrentUserQueryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    CurrentUserQueryQuery,
    CurrentUserQueryQueryVariables
  >(CurrentUserQueryDocument, options)
}
export type CurrentUserQueryQueryHookResult = ReturnType<
  typeof useCurrentUserQueryQuery
>
export type CurrentUserQueryLazyQueryHookResult = ReturnType<
  typeof useCurrentUserQueryLazyQuery
>
export type CurrentUserQueryQueryResult = Apollo.QueryResult<
  CurrentUserQueryQuery,
  CurrentUserQueryQueryVariables
>
export const GetApplicationQueryDocument = gql`
  query GetApplicationQuery($input: ApplicationInput!) {
    application(input: $input) {
      id
      homeCircumstances
      usePersonalTaxCredit
      state
      amount {
        aidAmount
        income
        personalTaxCredit
        spousePersonalTaxCredit
        tax
        finalAmount
        deductionFactors {
          description
          amount
        }
      }
      rejection
      created
      modified
      municipalityCode
      spouseNationalId
      familyStatus
      applicationEvents {
        id
        applicationId
        eventType
        comment
        created
      }
    }
  }
`

/**
 * __useGetApplicationQueryQuery__
 *
 * To run a query within a React component, call `useGetApplicationQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetApplicationQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetApplicationQueryQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetApplicationQueryQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetApplicationQueryQuery,
    GetApplicationQueryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetApplicationQueryQuery,
    GetApplicationQueryQueryVariables
  >(GetApplicationQueryDocument, options)
}
export function useGetApplicationQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetApplicationQueryQuery,
    GetApplicationQueryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetApplicationQueryQuery,
    GetApplicationQueryQueryVariables
  >(GetApplicationQueryDocument, options)
}
export type GetApplicationQueryQueryHookResult = ReturnType<
  typeof useGetApplicationQueryQuery
>
export type GetApplicationQueryLazyQueryHookResult = ReturnType<
  typeof useGetApplicationQueryLazyQuery
>
export type GetApplicationQueryQueryResult = Apollo.QueryResult<
  GetApplicationQueryQuery,
  GetApplicationQueryQueryVariables
>
export const UpdateApplicationMutationDocument = gql`
  mutation UpdateApplicationMutation($input: UpdateApplicationInput!) {
    updateApplication(input: $input) {
      id
      homeCircumstances
      usePersonalTaxCredit
      state
      amount {
        aidAmount
        income
        personalTaxCredit
        spousePersonalTaxCredit
        tax
        finalAmount
        deductionFactors {
          description
          amount
        }
      }
      rejection
      created
      modified
      municipalityCode
      spouseNationalId
      applicationEvents {
        id
        applicationId
        eventType
        comment
        created
      }
    }
  }
`
export type UpdateApplicationMutationMutationFn = Apollo.MutationFunction<
  UpdateApplicationMutationMutation,
  UpdateApplicationMutationMutationVariables
>

/**
 * __useUpdateApplicationMutationMutation__
 *
 * To run a mutation, you first call `useUpdateApplicationMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateApplicationMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateApplicationMutationMutation, { data, loading, error }] = useUpdateApplicationMutationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateApplicationMutationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateApplicationMutationMutation,
    UpdateApplicationMutationMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    UpdateApplicationMutationMutation,
    UpdateApplicationMutationMutationVariables
  >(UpdateApplicationMutationDocument, options)
}
export type UpdateApplicationMutationMutationHookResult = ReturnType<
  typeof useUpdateApplicationMutationMutation
>
export type UpdateApplicationMutationMutationResult = Apollo.MutationResult<UpdateApplicationMutationMutation>
export type UpdateApplicationMutationMutationOptions = Apollo.BaseMutationOptions<
  UpdateApplicationMutationMutation,
  UpdateApplicationMutationMutationVariables
>
export const GetNationalRegistryUserQueryDocument = gql`
  query getNationalRegistryUserQuery {
    municipalityNationalRegistryUserV2 {
      nationalId
      fullName
      address {
        streetName
        postalCode
        city
        municipalityCode
      }
      spouse {
        nationalId
        maritalStatus
        name
      }
    }
  }
`

/**
 * __useGetNationalRegistryUserQueryQuery__
 *
 * To run a query within a React component, call `useGetNationalRegistryUserQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNationalRegistryUserQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNationalRegistryUserQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetNationalRegistryUserQueryQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetNationalRegistryUserQueryQuery,
    GetNationalRegistryUserQueryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetNationalRegistryUserQueryQuery,
    GetNationalRegistryUserQueryQueryVariables
  >(GetNationalRegistryUserQueryDocument, options)
}
export function useGetNationalRegistryUserQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetNationalRegistryUserQueryQuery,
    GetNationalRegistryUserQueryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetNationalRegistryUserQueryQuery,
    GetNationalRegistryUserQueryQueryVariables
  >(GetNationalRegistryUserQueryDocument, options)
}
export type GetNationalRegistryUserQueryQueryHookResult = ReturnType<
  typeof useGetNationalRegistryUserQueryQuery
>
export type GetNationalRegistryUserQueryLazyQueryHookResult = ReturnType<
  typeof useGetNationalRegistryUserQueryLazyQuery
>
export type GetNationalRegistryUserQueryQueryResult = Apollo.QueryResult<
  GetNationalRegistryUserQueryQuery,
  GetNationalRegistryUserQueryQueryVariables
>
export const GatherTaxDataQueryDocument = gql`
  query gatherTaxDataQuery($input: MunicipalitiesPersonalTaxReturnIdInput!) {
    municipalitiesPersonalTaxReturn(input: $input) {
      personalTaxReturn {
        key
        name
        size
      }
    }
    municipalitiesDirectTaxPayments {
      success
      directTaxPayments {
        totalSalary
        payerNationalId
        personalAllowance
        withheldAtSource
        month
        year
      }
    }
  }
`

/**
 * __useGatherTaxDataQueryQuery__
 *
 * To run a query within a React component, call `useGatherTaxDataQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGatherTaxDataQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGatherTaxDataQueryQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGatherTaxDataQueryQuery(
  baseOptions: Apollo.QueryHookOptions<
    GatherTaxDataQueryQuery,
    GatherTaxDataQueryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GatherTaxDataQueryQuery,
    GatherTaxDataQueryQueryVariables
  >(GatherTaxDataQueryDocument, options)
}
export function useGatherTaxDataQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GatherTaxDataQueryQuery,
    GatherTaxDataQueryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GatherTaxDataQueryQuery,
    GatherTaxDataQueryQueryVariables
  >(GatherTaxDataQueryDocument, options)
}
export type GatherTaxDataQueryQueryHookResult = ReturnType<
  typeof useGatherTaxDataQueryQuery
>
export type GatherTaxDataQueryLazyQueryHookResult = ReturnType<
  typeof useGatherTaxDataQueryLazyQuery
>
export type GatherTaxDataQueryQueryResult = Apollo.QueryResult<
  GatherTaxDataQueryQuery,
  GatherTaxDataQueryQueryVariables
>
export const GetMunicipalityQueryDocument = gql`
  query GetMunicipalityQuery($input: MunicipalityQueryInput!) {
    municipality(input: $input) {
      id
      name
      homepage
      active
      municipalityId
      email
      rulesHomepage
      individualAid {
        ownPlace
        registeredRenting
        unregisteredRenting
        withOthers
        livesWithParents
        unknown
        type
      }
      cohabitationAid {
        ownPlace
        registeredRenting
        unregisteredRenting
        withOthers
        livesWithParents
        unknown
        type
      }
    }
  }
`

/**
 * __useGetMunicipalityQueryQuery__
 *
 * To run a query within a React component, call `useGetMunicipalityQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMunicipalityQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMunicipalityQueryQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetMunicipalityQueryQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetMunicipalityQueryQuery,
    GetMunicipalityQueryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetMunicipalityQueryQuery,
    GetMunicipalityQueryQueryVariables
  >(GetMunicipalityQueryDocument, options)
}
export function useGetMunicipalityQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetMunicipalityQueryQuery,
    GetMunicipalityQueryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetMunicipalityQueryQuery,
    GetMunicipalityQueryQueryVariables
  >(GetMunicipalityQueryDocument, options)
}
export type GetMunicipalityQueryQueryHookResult = ReturnType<
  typeof useGetMunicipalityQueryQuery
>
export type GetMunicipalityQueryLazyQueryHookResult = ReturnType<
  typeof useGetMunicipalityQueryLazyQuery
>
export type GetMunicipalityQueryQueryResult = Apollo.QueryResult<
  GetMunicipalityQueryQuery,
  GetMunicipalityQueryQueryVariables
>
