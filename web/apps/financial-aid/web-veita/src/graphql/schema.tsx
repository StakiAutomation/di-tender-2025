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

export type GetApplicationQueryQueryVariables = Exact<{
  input: ApplicationInput
}>

export type GetApplicationQueryQuery = {
  __typename?: 'Query'
  application: {
    __typename?: 'ApplicationModel'
    id: string
    applicationSystemId?: string | null
    nationalId: string
    created: string
    appliedDate: string
    modified: string
    name: string
    phoneNumber?: string | null
    email: string
    homeCircumstances: string
    student: boolean
    employment: string
    hasIncome: boolean
    usePersonalTaxCredit: boolean
    bankNumber?: string | null
    ledger?: string | null
    accountNumber?: string | null
    interview?: boolean | null
    employmentCustom?: string | null
    homeCircumstancesCustom?: string | null
    familyStatus: string
    spouseNationalId?: string | null
    spouseName?: string | null
    spouseEmail?: string | null
    spousePhoneNumber?: string | null
    city?: string | null
    streetName?: string | null
    postalCode?: string | null
    state: string
    formComment?: string | null
    childrenComment?: string | null
    spouseFormComment?: string | null
    municipalityCode: string
    studentCustom?: string | null
    rejection?: string | null
    spouseHasFetchedDirectTaxPayment?: boolean | null
    hasFetchedDirectTaxPayment?: boolean | null
    navSuccess?: boolean | null
    files?: Array<{
      __typename?: 'ApplicationFileModel'
      id: string
      applicationId: string
      name: string
      size: number
      created: string
      type: string
    }> | null
    staff?: {
      __typename?: 'StaffModel'
      name: string
      municipalityIds: Array<string>
      nationalId: string
    } | null
    applicationEvents?: Array<{
      __typename?: 'ApplicationEventModel'
      id: string
      applicationId: string
      eventType: string
      comment?: string | null
      created: string
      staffName?: string | null
      staffNationalId?: string | null
      emailSent?: boolean | null
    }> | null
    children?: Array<{
      __typename?: 'ChildrenModel'
      id: string
      applicationId: string
      nationalId: string
      name: string
      school?: string | null
      livesWithApplicant: boolean
      livesWithBothParents: boolean
    }> | null
    amount?: {
      __typename?: 'AmountModel'
      aidAmount: number
      childrenAidAmount?: number | null
      decemberAidAmount?: number | null
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
    directTaxPayments: Array<{
      __typename?: 'DirectTaxPaymentModel'
      totalSalary: number
      payerNationalId: string
      personalAllowance: number
      withheldAtSource: number
      month: number
      year: number
      userType: string
    }>
  }
}

export type ApplicationSearchQueryQueryVariables = Exact<{
  input: ApplicationSearchInput
}>

export type ApplicationSearchQueryQuery = {
  __typename?: 'Query'
  applicationSearch: Array<{
    __typename?: 'ApplicationModel'
    id: string
    nationalId: string
    created: string
    name: string
    state: string
    files?: Array<{ __typename?: 'ApplicationFileModel'; id: string }> | null
  }>
}

export type ApplicationFilterQueryQueryVariables = Exact<{
  input: FilterApplicationsInput
}>

export type ApplicationFilterQueryQuery = {
  __typename?: 'Query'
  filterApplications: {
    __typename?: 'FilterApplicationsResponse'
    totalCount: number
    minDateCreated?: string | null
    applications: Array<{
      __typename?: 'ApplicationModel'
      id: string
      nationalId: string
      name: string
      state: string
      modified: string
      created: string
      appliedDate: string
      staff?: { __typename?: 'StaffModel'; name: string } | null
    }>
    staffList: Array<{
      __typename?: 'StaffModel'
      name: string
      nationalId: string
    }>
  }
}

export type UpdateApplicationTableMutationMutationVariables = Exact<{
  input: UpdateApplicationInputTable
}>

export type UpdateApplicationTableMutationMutation = {
  __typename?: 'Mutation'
  updateApplicationTable?: {
    __typename?: 'UpdateApplicationTableResponse'
    applications: Array<{
      __typename?: 'ApplicationModel'
      id: string
      nationalId: string
      name: string
      phoneNumber?: string | null
      email: string
      modified: string
      created: string
      appliedDate: string
      state: string
      staff?: {
        __typename?: 'StaffModel'
        name: string
        municipalityIds: Array<string>
      } | null
    }>
    filters: {
      __typename?: 'ApplicationFiltersModel'
      New: number
      InProgress: number
      DataNeeded: number
      Rejected: number
      Approved: number
      MyCases: number
    }
  } | null
}

export type GetApplicationsQueryQueryVariables = Exact<{
  input: AllApplicationInput
}>

export type GetApplicationsQueryQuery = {
  __typename?: 'Query'
  applications: Array<{
    __typename?: 'ApplicationModel'
    id: string
    nationalId: string
    name: string
    phoneNumber?: string | null
    email: string
    modified: string
    created: string
    appliedDate: string
    state: string
    staff?: { __typename?: 'StaffModel'; name: string } | null
  }>
}

export type GetApplicationFiltersQueryMutationVariables = Exact<{
  [key: string]: never
}>

export type GetApplicationFiltersQueryMutation = {
  __typename?: 'Mutation'
  applicationFilters: {
    __typename?: 'ApplicationFiltersModel'
    New: number
    InProgress: number
    DataNeeded: number
    Rejected: number
    Approved: number
    MyCases: number
  }
}

export type CreateApplicationEventMutationVariables = Exact<{
  input: CreateApplicationEventInput
}>

export type CreateApplicationEventMutation = {
  __typename?: 'Mutation'
  createApplicationEvent?: {
    __typename?: 'ApplicationModel'
    id: string
    applicationSystemId?: string | null
    nationalId: string
    created: string
    modified: string
    appliedDate: string
    name: string
    phoneNumber?: string | null
    email: string
    homeCircumstances: string
    student: boolean
    employment: string
    hasIncome: boolean
    usePersonalTaxCredit: boolean
    bankNumber?: string | null
    ledger?: string | null
    accountNumber?: string | null
    interview?: boolean | null
    employmentCustom?: string | null
    homeCircumstancesCustom?: string | null
    familyStatus: string
    spouseNationalId?: string | null
    spouseName?: string | null
    spouseEmail?: string | null
    spousePhoneNumber?: string | null
    city?: string | null
    streetName?: string | null
    postalCode?: string | null
    state: string
    formComment?: string | null
    childrenComment?: string | null
    spouseFormComment?: string | null
    municipalityCode: string
    studentCustom?: string | null
    rejection?: string | null
    spouseHasFetchedDirectTaxPayment?: boolean | null
    hasFetchedDirectTaxPayment?: boolean | null
    navSuccess?: boolean | null
    files?: Array<{
      __typename?: 'ApplicationFileModel'
      id: string
      applicationId: string
      name: string
      size: number
      created: string
      type: string
    }> | null
    staff?: {
      __typename?: 'StaffModel'
      name: string
      municipalityIds: Array<string>
      nationalId: string
    } | null
    applicationEvents?: Array<{
      __typename?: 'ApplicationEventModel'
      id: string
      applicationId: string
      eventType: string
      comment?: string | null
      created: string
      staffName?: string | null
      staffNationalId?: string | null
      emailSent?: boolean | null
    }> | null
    children?: Array<{
      __typename?: 'ChildrenModel'
      id: string
      applicationId: string
      nationalId: string
      name: string
      school?: string | null
      livesWithApplicant: boolean
      livesWithBothParents: boolean
    }> | null
    amount?: {
      __typename?: 'AmountModel'
      aidAmount: number
      childrenAidAmount?: number | null
      decemberAidAmount?: number | null
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
    directTaxPayments: Array<{
      __typename?: 'DirectTaxPaymentModel'
      totalSalary: number
      payerNationalId: string
      personalAllowance: number
      withheldAtSource: number
      month: number
      year: number
      userType: string
    }>
  } | null
}

export type CurrentUserQueryQueryVariables = Exact<{ [key: string]: never }>

export type CurrentUserQueryQuery = {
  __typename?: 'Query'
  currentUser?: {
    __typename?: 'UserModel'
    nationalId: string
    name: string
    phoneNumber?: string | null
    staff?: {
      __typename?: 'StaffModel'
      id: string
      nationalId: string
      name: string
      municipalityIds: Array<string>
      phoneNumber?: string | null
      roles: Array<string>
      active: boolean
      nickname?: string | null
      email?: string | null
      usePseudoName?: boolean | null
    } | null
  } | null
}

export type UpdateApplicationMutationMutationVariables = Exact<{
  input: UpdateApplicationInput
}>

export type UpdateApplicationMutationMutation = {
  __typename?: 'Mutation'
  updateApplication?: {
    __typename?: 'ApplicationModel'
    id: string
    applicationSystemId?: string | null
    nationalId: string
    created: string
    modified: string
    appliedDate: string
    name: string
    phoneNumber?: string | null
    email: string
    homeCircumstances: string
    student: boolean
    employment: string
    hasIncome: boolean
    usePersonalTaxCredit: boolean
    bankNumber?: string | null
    ledger?: string | null
    accountNumber?: string | null
    interview?: boolean | null
    employmentCustom?: string | null
    homeCircumstancesCustom?: string | null
    familyStatus: string
    spouseNationalId?: string | null
    spouseName?: string | null
    spouseEmail?: string | null
    spousePhoneNumber?: string | null
    city?: string | null
    streetName?: string | null
    postalCode?: string | null
    state: string
    formComment?: string | null
    childrenComment?: string | null
    spouseFormComment?: string | null
    municipalityCode: string
    studentCustom?: string | null
    rejection?: string | null
    spouseHasFetchedDirectTaxPayment?: boolean | null
    hasFetchedDirectTaxPayment?: boolean | null
    navSuccess?: boolean | null
    files?: Array<{
      __typename?: 'ApplicationFileModel'
      id: string
      applicationId: string
      name: string
      size: number
      created: string
      type: string
    }> | null
    staff?: {
      __typename?: 'StaffModel'
      name: string
      municipalityIds: Array<string>
      nationalId: string
    } | null
    applicationEvents?: Array<{
      __typename?: 'ApplicationEventModel'
      id: string
      applicationId: string
      eventType: string
      comment?: string | null
      created: string
      staffName?: string | null
      staffNationalId?: string | null
      emailSent?: boolean | null
    }> | null
    children?: Array<{
      __typename?: 'ChildrenModel'
      id: string
      applicationId: string
      nationalId: string
      name: string
      school?: string | null
      livesWithApplicant: boolean
      livesWithBothParents: boolean
    }> | null
    amount?: {
      __typename?: 'AmountModel'
      aidAmount: number
      childrenAidAmount?: number | null
      decemberAidAmount?: number | null
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
    directTaxPayments: Array<{
      __typename?: 'DirectTaxPaymentModel'
      totalSalary: number
      payerNationalId: string
      personalAllowance: number
      withheldAtSource: number
      month: number
      year: number
      userType: string
    }>
  } | null
}

export type StaffForMunicipalityQueryVariables = Exact<{ [key: string]: never }>

export type StaffForMunicipalityQuery = {
  __typename?: 'Query'
  users: Array<{
    __typename?: 'StaffModel'
    id: string
    nationalId: string
    name: string
    roles: Array<string>
    active: boolean
  }>
}

export type GetStaffQueryVariables = Exact<{
  input: StaffInput
}>

export type GetStaffQuery = {
  __typename?: 'Query'
  user: {
    __typename?: 'StaffModel'
    id: string
    nationalId: string
    name: string
    roles: Array<string>
    active: boolean
    nickname?: string | null
    email?: string | null
    municipalityIds: Array<string>
  }
}

export type StaffMutationMutationVariables = Exact<{
  input: CreateStaffInput
}>

export type StaffMutationMutation = {
  __typename?: 'Mutation'
  createStaff: { __typename?: 'StaffModel'; id: string }
}

export type MunicipalityActivityMutationMutationVariables = Exact<{
  input: MunicipalityActivityInput
}>

export type MunicipalityActivityMutationMutation = {
  __typename?: 'Mutation'
  municipalityActivity: {
    __typename?: 'MunicipalityModel'
    id: string
    active: boolean
  }
}

export type MunicipalityMutationMutationVariables = Exact<{
  input: CreateMunicipalityInput
}>

export type MunicipalityMutationMutation = {
  __typename?: 'Mutation'
  createMunicipality: {
    __typename?: 'MunicipalityModel'
    id: string
    municipalityId: string
  }
}

export type ApiKeyForMunicipalityMutationMutationVariables = Exact<{
  input: CreateApiKeyInput
}>

export type ApiKeyForMunicipalityMutationMutation = {
  __typename?: 'Mutation'
  createApiKey: {
    __typename?: 'ApiKeysModel'
    id: string
    name: string
    apiKey: string
    municipalityCode: string
  }
}

export type DeleteApiKeyForMunicipalityMutationMutationVariables = Exact<{
  input: DeleteApiKeyInput
}>

export type DeleteApiKeyForMunicipalityMutationMutation = {
  __typename?: 'Mutation'
  deleteApiKey: { __typename?: 'DeleteApiKeyResponse'; success: boolean }
}

export type UpdateApiKeyForMunicipalityMutationMutationVariables = Exact<{
  input: UpdateApiKeyInput
}>

export type UpdateApiKeyForMunicipalityMutationMutation = {
  __typename?: 'Mutation'
  updateApiKey: {
    __typename?: 'ApiKeysModel'
    id: string
    name: string
    apiKey: string
    municipalityCode: string
  }
}

export type UpdateMunicipalityMutationMutationVariables = Exact<{
  input: UpdateMunicipalityInput
}>

export type UpdateMunicipalityMutationMutation = {
  __typename?: 'Mutation'
  updateMunicipality: Array<{
    __typename?: 'MunicipalityModel'
    id: string
    name: string
    homepage?: string | null
    active: boolean
    municipalityId: string
    email?: string | null
    rulesHomepage?: string | null
    usingNav: boolean
    navUrl?: string | null
    navUsername?: string | null
    navPassword?: string | null
    decemberCompensation: number
    childrenAid: string
    individualAid: {
      __typename?: 'AidModel'
      ownPlace: number
      registeredRenting: number
      unregisteredRenting: number
      livesWithParents: number
      unknown: number
      withOthers: number
      type: string
    }
    cohabitationAid: {
      __typename?: 'AidModel'
      ownPlace: number
      registeredRenting: number
      unregisteredRenting: number
      livesWithParents: number
      unknown: number
      withOthers: number
      type: string
    }
  }>
}

export type UpdateStaffMutationMutationVariables = Exact<{
  input: UpdateStaffInput
}>

export type UpdateStaffMutationMutation = {
  __typename?: 'Mutation'
  updateStaff?: {
    __typename?: 'StaffModel'
    id: string
    nationalId: string
    name: string
    municipalityIds: Array<string>
    phoneNumber?: string | null
    roles: Array<string>
    active: boolean
    nickname?: string | null
    email?: string | null
    usePseudoName?: boolean | null
  } | null
}

export type GetMunicipalitiesQueryVariables = Exact<{ [key: string]: never }>

export type GetMunicipalitiesQuery = {
  __typename?: 'Query'
  municipalities: Array<{
    __typename?: 'MunicipalityModel'
    id: string
    name: string
    active: boolean
    numberOfUsers?: number | null
    municipalityId: string
  }>
}

export type GetMunicipalityQueryVariables = Exact<{
  input: MunicipalityQueryInput
}>

export type GetMunicipalityQuery = {
  __typename?: 'Query'
  municipality: {
    __typename?: 'MunicipalityModel'
    id: string
    name: string
    active: boolean
    rulesHomepage?: string | null
    homepage?: string | null
    municipalityId: string
    email?: string | null
    adminUsers?: Array<{
      __typename?: 'StaffModel'
      name: string
      nationalId: string
      email?: string | null
      active: boolean
      id: string
    }> | null
    allAdminUsers?: Array<{
      __typename?: 'StaffModel'
      name: string
      id: string
      municipalityIds: Array<string>
    }> | null
    individualAid: {
      __typename?: 'AidModel'
      ownPlace: number
      registeredRenting: number
      unregisteredRenting: number
      livesWithParents: number
      unknown: number
      withOthers: number
      type: string
    }
    cohabitationAid: {
      __typename?: 'AidModel'
      ownPlace: number
      registeredRenting: number
      unregisteredRenting: number
      livesWithParents: number
      unknown: number
      withOthers: number
      type: string
    }
  }
}

export type GetAdminUsersQueryVariables = Exact<{
  input: MunicipalityQueryInput
}>

export type GetAdminUsersQuery = {
  __typename?: 'Query'
  municipality: {
    __typename?: 'MunicipalityModel'
    municipalityId: string
    adminUsers?: Array<{
      __typename?: 'StaffModel'
      name: string
      nationalId: string
      email?: string | null
      active: boolean
      id: string
    }> | null
  }
}

export type AllAdminsQueryQueryVariables = Exact<{ [key: string]: never }>

export type AllAdminsQueryQuery = {
  __typename?: 'Query'
  admins: Array<{
    __typename?: 'StaffModel'
    id: string
    name: string
    municipalityIds: Array<string>
  }>
}

export type SupervisorsQueryQueryVariables = Exact<{ [key: string]: never }>

export type SupervisorsQueryQuery = {
  __typename?: 'Query'
  supervisors: Array<{
    __typename?: 'StaffModel'
    id: string
    nationalId: string
    name: string
    roles: Array<string>
    active: boolean
  }>
}

export type GetAllSignedUrlQueryQueryVariables = Exact<{
  input: GetSignedUrlForIdInput
}>

export type GetAllSignedUrlQueryQuery = {
  __typename?: 'Query'
  getSignedUrlForAllFilesId: Array<{
    __typename?: 'SignedUrlModel'
    url: string
    key: string
  }>
}

export type GetMunicipalityQueryQueryVariables = Exact<{ [key: string]: never }>

export type GetMunicipalityQueryQuery = {
  __typename?: 'Query'
  municipalityByIds: Array<{
    __typename?: 'MunicipalityModel'
    id: string
    name: string
    homepage?: string | null
    active: boolean
    municipalityId: string
    email?: string | null
    rulesHomepage?: string | null
    usingNav: boolean
    navUrl?: string | null
    navUsername?: string | null
    navPassword?: string | null
    decemberCompensation: number
    childrenAid: string
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
  }>
  apiKeysForMunicipality: Array<{
    __typename?: 'ApiKeysModel'
    id: string
    name: string
    apiKey: string
    municipalityCode: string
  }>
}

export const GetApplicationQueryDocument = gql`
  query GetApplicationQuery($input: ApplicationInput!) {
    application(input: $input) {
      id
      applicationSystemId
      nationalId
      created
      appliedDate
      modified
      name
      phoneNumber
      email
      homeCircumstances
      student
      employment
      hasIncome
      usePersonalTaxCredit
      bankNumber
      ledger
      accountNumber
      interview
      employmentCustom
      homeCircumstancesCustom
      familyStatus
      spouseNationalId
      spouseName
      spouseEmail
      spousePhoneNumber
      city
      streetName
      postalCode
      files {
        id
        applicationId
        name
        size
        created
        type
      }
      state
      formComment
      childrenComment
      spouseFormComment
      municipalityCode
      studentCustom
      rejection
      staff {
        name
        municipalityIds
        nationalId
      }
      applicationEvents {
        id
        applicationId
        eventType
        comment
        created
        staffName
        staffNationalId
        emailSent
      }
      children {
        id
        applicationId
        nationalId
        name
        school
        livesWithApplicant
        livesWithBothParents
      }
      amount {
        aidAmount
        childrenAidAmount
        decemberAidAmount
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
      spouseHasFetchedDirectTaxPayment
      hasFetchedDirectTaxPayment
      directTaxPayments {
        totalSalary
        payerNationalId
        personalAllowance
        withheldAtSource
        month
        year
        userType
      }
      navSuccess
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
export const ApplicationSearchQueryDocument = gql`
  query ApplicationSearchQuery($input: ApplicationSearchInput!) {
    applicationSearch(input: $input) {
      id
      nationalId
      created
      name
      state
      files {
        id
      }
    }
  }
`

/**
 * __useApplicationSearchQueryQuery__
 *
 * To run a query within a React component, call `useApplicationSearchQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useApplicationSearchQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApplicationSearchQueryQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useApplicationSearchQueryQuery(
  baseOptions: Apollo.QueryHookOptions<
    ApplicationSearchQueryQuery,
    ApplicationSearchQueryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    ApplicationSearchQueryQuery,
    ApplicationSearchQueryQueryVariables
  >(ApplicationSearchQueryDocument, options)
}
export function useApplicationSearchQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApplicationSearchQueryQuery,
    ApplicationSearchQueryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    ApplicationSearchQueryQuery,
    ApplicationSearchQueryQueryVariables
  >(ApplicationSearchQueryDocument, options)
}
export type ApplicationSearchQueryQueryHookResult = ReturnType<
  typeof useApplicationSearchQueryQuery
>
export type ApplicationSearchQueryLazyQueryHookResult = ReturnType<
  typeof useApplicationSearchQueryLazyQuery
>
export type ApplicationSearchQueryQueryResult = Apollo.QueryResult<
  ApplicationSearchQueryQuery,
  ApplicationSearchQueryQueryVariables
>
export const ApplicationFilterQueryDocument = gql`
  query ApplicationFilterQuery($input: FilterApplicationsInput!) {
    filterApplications(input: $input) {
      applications {
        id
        nationalId
        name
        state
        modified
        created
        appliedDate
        staff {
          name
        }
      }
      totalCount
      minDateCreated
      staffList {
        name
        nationalId
      }
    }
  }
`

/**
 * __useApplicationFilterQueryQuery__
 *
 * To run a query within a React component, call `useApplicationFilterQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useApplicationFilterQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApplicationFilterQueryQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useApplicationFilterQueryQuery(
  baseOptions: Apollo.QueryHookOptions<
    ApplicationFilterQueryQuery,
    ApplicationFilterQueryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    ApplicationFilterQueryQuery,
    ApplicationFilterQueryQueryVariables
  >(ApplicationFilterQueryDocument, options)
}
export function useApplicationFilterQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApplicationFilterQueryQuery,
    ApplicationFilterQueryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    ApplicationFilterQueryQuery,
    ApplicationFilterQueryQueryVariables
  >(ApplicationFilterQueryDocument, options)
}
export type ApplicationFilterQueryQueryHookResult = ReturnType<
  typeof useApplicationFilterQueryQuery
>
export type ApplicationFilterQueryLazyQueryHookResult = ReturnType<
  typeof useApplicationFilterQueryLazyQuery
>
export type ApplicationFilterQueryQueryResult = Apollo.QueryResult<
  ApplicationFilterQueryQuery,
  ApplicationFilterQueryQueryVariables
>
export const UpdateApplicationTableMutationDocument = gql`
  mutation UpdateApplicationTableMutation(
    $input: UpdateApplicationInputTable!
  ) {
    updateApplicationTable(input: $input) {
      applications {
        id
        nationalId
        name
        phoneNumber
        email
        modified
        created
        appliedDate
        state
        staff {
          name
          municipalityIds
        }
      }
      filters {
        New
        InProgress
        DataNeeded
        Rejected
        Approved
        MyCases
      }
    }
  }
`
export type UpdateApplicationTableMutationMutationFn = Apollo.MutationFunction<
  UpdateApplicationTableMutationMutation,
  UpdateApplicationTableMutationMutationVariables
>

/**
 * __useUpdateApplicationTableMutationMutation__
 *
 * To run a mutation, you first call `useUpdateApplicationTableMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateApplicationTableMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateApplicationTableMutationMutation, { data, loading, error }] = useUpdateApplicationTableMutationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateApplicationTableMutationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateApplicationTableMutationMutation,
    UpdateApplicationTableMutationMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    UpdateApplicationTableMutationMutation,
    UpdateApplicationTableMutationMutationVariables
  >(UpdateApplicationTableMutationDocument, options)
}
export type UpdateApplicationTableMutationMutationHookResult = ReturnType<
  typeof useUpdateApplicationTableMutationMutation
>
export type UpdateApplicationTableMutationMutationResult = Apollo.MutationResult<UpdateApplicationTableMutationMutation>
export type UpdateApplicationTableMutationMutationOptions = Apollo.BaseMutationOptions<
  UpdateApplicationTableMutationMutation,
  UpdateApplicationTableMutationMutationVariables
>
export const GetApplicationsQueryDocument = gql`
  query GetApplicationsQuery($input: AllApplicationInput!) {
    applications(input: $input) {
      id
      nationalId
      name
      phoneNumber
      email
      modified
      created
      appliedDate
      state
      staff {
        name
      }
    }
  }
`

/**
 * __useGetApplicationsQueryQuery__
 *
 * To run a query within a React component, call `useGetApplicationsQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetApplicationsQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetApplicationsQueryQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetApplicationsQueryQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetApplicationsQueryQuery,
    GetApplicationsQueryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetApplicationsQueryQuery,
    GetApplicationsQueryQueryVariables
  >(GetApplicationsQueryDocument, options)
}
export function useGetApplicationsQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetApplicationsQueryQuery,
    GetApplicationsQueryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetApplicationsQueryQuery,
    GetApplicationsQueryQueryVariables
  >(GetApplicationsQueryDocument, options)
}
export type GetApplicationsQueryQueryHookResult = ReturnType<
  typeof useGetApplicationsQueryQuery
>
export type GetApplicationsQueryLazyQueryHookResult = ReturnType<
  typeof useGetApplicationsQueryLazyQuery
>
export type GetApplicationsQueryQueryResult = Apollo.QueryResult<
  GetApplicationsQueryQuery,
  GetApplicationsQueryQueryVariables
>
export const GetApplicationFiltersQueryDocument = gql`
  mutation GetApplicationFiltersQuery {
    applicationFilters {
      New
      InProgress
      DataNeeded
      Rejected
      Approved
      MyCases
    }
  }
`
export type GetApplicationFiltersQueryMutationFn = Apollo.MutationFunction<
  GetApplicationFiltersQueryMutation,
  GetApplicationFiltersQueryMutationVariables
>

/**
 * __useGetApplicationFiltersQueryMutation__
 *
 * To run a mutation, you first call `useGetApplicationFiltersQueryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetApplicationFiltersQueryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getApplicationFiltersQueryMutation, { data, loading, error }] = useGetApplicationFiltersQueryMutation({
 *   variables: {
 *   },
 * });
 */
export function useGetApplicationFiltersQueryMutation(
  baseOptions?: Apollo.MutationHookOptions<
    GetApplicationFiltersQueryMutation,
    GetApplicationFiltersQueryMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    GetApplicationFiltersQueryMutation,
    GetApplicationFiltersQueryMutationVariables
  >(GetApplicationFiltersQueryDocument, options)
}
export type GetApplicationFiltersQueryMutationHookResult = ReturnType<
  typeof useGetApplicationFiltersQueryMutation
>
export type GetApplicationFiltersQueryMutationResult = Apollo.MutationResult<GetApplicationFiltersQueryMutation>
export type GetApplicationFiltersQueryMutationOptions = Apollo.BaseMutationOptions<
  GetApplicationFiltersQueryMutation,
  GetApplicationFiltersQueryMutationVariables
>
export const CreateApplicationEventDocument = gql`
  mutation CreateApplicationEvent($input: CreateApplicationEventInput!) {
    createApplicationEvent(input: $input) {
      id
      applicationSystemId
      nationalId
      created
      modified
      appliedDate
      name
      phoneNumber
      email
      homeCircumstances
      student
      employment
      hasIncome
      usePersonalTaxCredit
      bankNumber
      ledger
      accountNumber
      interview
      employmentCustom
      homeCircumstancesCustom
      familyStatus
      spouseNationalId
      spouseName
      spouseEmail
      spousePhoneNumber
      city
      streetName
      postalCode
      files {
        id
        applicationId
        name
        size
        created
        type
      }
      state
      formComment
      childrenComment
      spouseFormComment
      municipalityCode
      studentCustom
      rejection
      staff {
        name
        municipalityIds
        nationalId
      }
      applicationEvents {
        id
        applicationId
        eventType
        comment
        created
        staffName
        staffNationalId
        emailSent
      }
      children {
        id
        applicationId
        nationalId
        name
        school
        livesWithApplicant
        livesWithBothParents
      }
      amount {
        aidAmount
        childrenAidAmount
        decemberAidAmount
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
      spouseHasFetchedDirectTaxPayment
      hasFetchedDirectTaxPayment
      directTaxPayments {
        totalSalary
        payerNationalId
        personalAllowance
        withheldAtSource
        month
        year
        userType
      }
      navSuccess
    }
  }
`
export type CreateApplicationEventMutationFn = Apollo.MutationFunction<
  CreateApplicationEventMutation,
  CreateApplicationEventMutationVariables
>

/**
 * __useCreateApplicationEventMutation__
 *
 * To run a mutation, you first call `useCreateApplicationEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateApplicationEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createApplicationEventMutation, { data, loading, error }] = useCreateApplicationEventMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateApplicationEventMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateApplicationEventMutation,
    CreateApplicationEventMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateApplicationEventMutation,
    CreateApplicationEventMutationVariables
  >(CreateApplicationEventDocument, options)
}
export type CreateApplicationEventMutationHookResult = ReturnType<
  typeof useCreateApplicationEventMutation
>
export type CreateApplicationEventMutationResult = Apollo.MutationResult<CreateApplicationEventMutation>
export type CreateApplicationEventMutationOptions = Apollo.BaseMutationOptions<
  CreateApplicationEventMutation,
  CreateApplicationEventMutationVariables
>
export const CurrentUserQueryDocument = gql`
  query CurrentUserQuery {
    currentUser {
      nationalId
      name
      phoneNumber
      staff {
        id
        nationalId
        name
        municipalityIds
        phoneNumber
        roles
        active
        nickname
        email
        usePseudoName
      }
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
export const UpdateApplicationMutationDocument = gql`
  mutation UpdateApplicationMutation($input: UpdateApplicationInput!) {
    updateApplication(input: $input) {
      id
      applicationSystemId
      nationalId
      created
      modified
      appliedDate
      name
      phoneNumber
      email
      homeCircumstances
      student
      employment
      hasIncome
      usePersonalTaxCredit
      bankNumber
      ledger
      accountNumber
      interview
      employmentCustom
      homeCircumstancesCustom
      familyStatus
      spouseNationalId
      spouseName
      spouseEmail
      spousePhoneNumber
      city
      streetName
      postalCode
      files {
        id
        applicationId
        name
        size
        created
        type
      }
      state
      formComment
      childrenComment
      spouseFormComment
      municipalityCode
      studentCustom
      rejection
      staff {
        name
        municipalityIds
        nationalId
      }
      applicationEvents {
        id
        applicationId
        eventType
        comment
        created
        staffName
        staffNationalId
        emailSent
      }
      children {
        id
        applicationId
        nationalId
        name
        school
        livesWithApplicant
        livesWithBothParents
      }
      amount {
        aidAmount
        childrenAidAmount
        decemberAidAmount
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
      spouseHasFetchedDirectTaxPayment
      hasFetchedDirectTaxPayment
      directTaxPayments {
        totalSalary
        payerNationalId
        personalAllowance
        withheldAtSource
        month
        year
        userType
      }
      navSuccess
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
export const StaffForMunicipalityDocument = gql`
  query staffForMunicipality {
    users {
      id
      nationalId
      name
      roles
      active
    }
  }
`

/**
 * __useStaffForMunicipalityQuery__
 *
 * To run a query within a React component, call `useStaffForMunicipalityQuery` and pass it any options that fit your needs.
 * When your component renders, `useStaffForMunicipalityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStaffForMunicipalityQuery({
 *   variables: {
 *   },
 * });
 */
export function useStaffForMunicipalityQuery(
  baseOptions?: Apollo.QueryHookOptions<
    StaffForMunicipalityQuery,
    StaffForMunicipalityQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    StaffForMunicipalityQuery,
    StaffForMunicipalityQueryVariables
  >(StaffForMunicipalityDocument, options)
}
export function useStaffForMunicipalityLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    StaffForMunicipalityQuery,
    StaffForMunicipalityQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    StaffForMunicipalityQuery,
    StaffForMunicipalityQueryVariables
  >(StaffForMunicipalityDocument, options)
}
export type StaffForMunicipalityQueryHookResult = ReturnType<
  typeof useStaffForMunicipalityQuery
>
export type StaffForMunicipalityLazyQueryHookResult = ReturnType<
  typeof useStaffForMunicipalityLazyQuery
>
export type StaffForMunicipalityQueryResult = Apollo.QueryResult<
  StaffForMunicipalityQuery,
  StaffForMunicipalityQueryVariables
>
export const GetStaffDocument = gql`
  query getStaff($input: StaffInput!) {
    user(input: $input) {
      id
      nationalId
      name
      roles
      active
      nickname
      email
      municipalityIds
    }
  }
`

/**
 * __useGetStaffQuery__
 *
 * To run a query within a React component, call `useGetStaffQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStaffQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStaffQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetStaffQuery(
  baseOptions: Apollo.QueryHookOptions<GetStaffQuery, GetStaffQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetStaffQuery, GetStaffQueryVariables>(
    GetStaffDocument,
    options,
  )
}
export function useGetStaffLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetStaffQuery,
    GetStaffQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetStaffQuery, GetStaffQueryVariables>(
    GetStaffDocument,
    options,
  )
}
export type GetStaffQueryHookResult = ReturnType<typeof useGetStaffQuery>
export type GetStaffLazyQueryHookResult = ReturnType<
  typeof useGetStaffLazyQuery
>
export type GetStaffQueryResult = Apollo.QueryResult<
  GetStaffQuery,
  GetStaffQueryVariables
>
export const StaffMutationDocument = gql`
  mutation StaffMutation($input: CreateStaffInput!) {
    createStaff(input: $input) {
      id
    }
  }
`
export type StaffMutationMutationFn = Apollo.MutationFunction<
  StaffMutationMutation,
  StaffMutationMutationVariables
>

/**
 * __useStaffMutationMutation__
 *
 * To run a mutation, you first call `useStaffMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStaffMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [staffMutationMutation, { data, loading, error }] = useStaffMutationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useStaffMutationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    StaffMutationMutation,
    StaffMutationMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    StaffMutationMutation,
    StaffMutationMutationVariables
  >(StaffMutationDocument, options)
}
export type StaffMutationMutationHookResult = ReturnType<
  typeof useStaffMutationMutation
>
export type StaffMutationMutationResult = Apollo.MutationResult<StaffMutationMutation>
export type StaffMutationMutationOptions = Apollo.BaseMutationOptions<
  StaffMutationMutation,
  StaffMutationMutationVariables
>
export const MunicipalityActivityMutationDocument = gql`
  mutation MunicipalityActivityMutation($input: MunicipalityActivityInput!) {
    municipalityActivity(input: $input) {
      id
      active
    }
  }
`
export type MunicipalityActivityMutationMutationFn = Apollo.MutationFunction<
  MunicipalityActivityMutationMutation,
  MunicipalityActivityMutationMutationVariables
>

/**
 * __useMunicipalityActivityMutationMutation__
 *
 * To run a mutation, you first call `useMunicipalityActivityMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMunicipalityActivityMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [municipalityActivityMutationMutation, { data, loading, error }] = useMunicipalityActivityMutationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useMunicipalityActivityMutationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    MunicipalityActivityMutationMutation,
    MunicipalityActivityMutationMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    MunicipalityActivityMutationMutation,
    MunicipalityActivityMutationMutationVariables
  >(MunicipalityActivityMutationDocument, options)
}
export type MunicipalityActivityMutationMutationHookResult = ReturnType<
  typeof useMunicipalityActivityMutationMutation
>
export type MunicipalityActivityMutationMutationResult = Apollo.MutationResult<MunicipalityActivityMutationMutation>
export type MunicipalityActivityMutationMutationOptions = Apollo.BaseMutationOptions<
  MunicipalityActivityMutationMutation,
  MunicipalityActivityMutationMutationVariables
>
export const MunicipalityMutationDocument = gql`
  mutation MunicipalityMutation($input: CreateMunicipalityInput!) {
    createMunicipality(input: $input) {
      id
      municipalityId
    }
  }
`
export type MunicipalityMutationMutationFn = Apollo.MutationFunction<
  MunicipalityMutationMutation,
  MunicipalityMutationMutationVariables
>

/**
 * __useMunicipalityMutationMutation__
 *
 * To run a mutation, you first call `useMunicipalityMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMunicipalityMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [municipalityMutationMutation, { data, loading, error }] = useMunicipalityMutationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useMunicipalityMutationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    MunicipalityMutationMutation,
    MunicipalityMutationMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    MunicipalityMutationMutation,
    MunicipalityMutationMutationVariables
  >(MunicipalityMutationDocument, options)
}
export type MunicipalityMutationMutationHookResult = ReturnType<
  typeof useMunicipalityMutationMutation
>
export type MunicipalityMutationMutationResult = Apollo.MutationResult<MunicipalityMutationMutation>
export type MunicipalityMutationMutationOptions = Apollo.BaseMutationOptions<
  MunicipalityMutationMutation,
  MunicipalityMutationMutationVariables
>
export const ApiKeyForMunicipalityMutationDocument = gql`
  mutation ApiKeyForMunicipalityMutation($input: CreateApiKeyInput!) {
    createApiKey(input: $input) {
      id
      name
      apiKey
      municipalityCode
    }
  }
`
export type ApiKeyForMunicipalityMutationMutationFn = Apollo.MutationFunction<
  ApiKeyForMunicipalityMutationMutation,
  ApiKeyForMunicipalityMutationMutationVariables
>

/**
 * __useApiKeyForMunicipalityMutationMutation__
 *
 * To run a mutation, you first call `useApiKeyForMunicipalityMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useApiKeyForMunicipalityMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [apiKeyForMunicipalityMutationMutation, { data, loading, error }] = useApiKeyForMunicipalityMutationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useApiKeyForMunicipalityMutationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApiKeyForMunicipalityMutationMutation,
    ApiKeyForMunicipalityMutationMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    ApiKeyForMunicipalityMutationMutation,
    ApiKeyForMunicipalityMutationMutationVariables
  >(ApiKeyForMunicipalityMutationDocument, options)
}
export type ApiKeyForMunicipalityMutationMutationHookResult = ReturnType<
  typeof useApiKeyForMunicipalityMutationMutation
>
export type ApiKeyForMunicipalityMutationMutationResult = Apollo.MutationResult<ApiKeyForMunicipalityMutationMutation>
export type ApiKeyForMunicipalityMutationMutationOptions = Apollo.BaseMutationOptions<
  ApiKeyForMunicipalityMutationMutation,
  ApiKeyForMunicipalityMutationMutationVariables
>
export const DeleteApiKeyForMunicipalityMutationDocument = gql`
  mutation DeleteApiKeyForMunicipalityMutation($input: DeleteApiKeyInput!) {
    deleteApiKey(input: $input) {
      success
    }
  }
`
export type DeleteApiKeyForMunicipalityMutationMutationFn = Apollo.MutationFunction<
  DeleteApiKeyForMunicipalityMutationMutation,
  DeleteApiKeyForMunicipalityMutationMutationVariables
>

/**
 * __useDeleteApiKeyForMunicipalityMutationMutation__
 *
 * To run a mutation, you first call `useDeleteApiKeyForMunicipalityMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteApiKeyForMunicipalityMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteApiKeyForMunicipalityMutationMutation, { data, loading, error }] = useDeleteApiKeyForMunicipalityMutationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteApiKeyForMunicipalityMutationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteApiKeyForMunicipalityMutationMutation,
    DeleteApiKeyForMunicipalityMutationMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    DeleteApiKeyForMunicipalityMutationMutation,
    DeleteApiKeyForMunicipalityMutationMutationVariables
  >(DeleteApiKeyForMunicipalityMutationDocument, options)
}
export type DeleteApiKeyForMunicipalityMutationMutationHookResult = ReturnType<
  typeof useDeleteApiKeyForMunicipalityMutationMutation
>
export type DeleteApiKeyForMunicipalityMutationMutationResult = Apollo.MutationResult<DeleteApiKeyForMunicipalityMutationMutation>
export type DeleteApiKeyForMunicipalityMutationMutationOptions = Apollo.BaseMutationOptions<
  DeleteApiKeyForMunicipalityMutationMutation,
  DeleteApiKeyForMunicipalityMutationMutationVariables
>
export const UpdateApiKeyForMunicipalityMutationDocument = gql`
  mutation UpdateApiKeyForMunicipalityMutation($input: UpdateApiKeyInput!) {
    updateApiKey(input: $input) {
      id
      name
      apiKey
      municipalityCode
    }
  }
`
export type UpdateApiKeyForMunicipalityMutationMutationFn = Apollo.MutationFunction<
  UpdateApiKeyForMunicipalityMutationMutation,
  UpdateApiKeyForMunicipalityMutationMutationVariables
>

/**
 * __useUpdateApiKeyForMunicipalityMutationMutation__
 *
 * To run a mutation, you first call `useUpdateApiKeyForMunicipalityMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateApiKeyForMunicipalityMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateApiKeyForMunicipalityMutationMutation, { data, loading, error }] = useUpdateApiKeyForMunicipalityMutationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateApiKeyForMunicipalityMutationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateApiKeyForMunicipalityMutationMutation,
    UpdateApiKeyForMunicipalityMutationMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    UpdateApiKeyForMunicipalityMutationMutation,
    UpdateApiKeyForMunicipalityMutationMutationVariables
  >(UpdateApiKeyForMunicipalityMutationDocument, options)
}
export type UpdateApiKeyForMunicipalityMutationMutationHookResult = ReturnType<
  typeof useUpdateApiKeyForMunicipalityMutationMutation
>
export type UpdateApiKeyForMunicipalityMutationMutationResult = Apollo.MutationResult<UpdateApiKeyForMunicipalityMutationMutation>
export type UpdateApiKeyForMunicipalityMutationMutationOptions = Apollo.BaseMutationOptions<
  UpdateApiKeyForMunicipalityMutationMutation,
  UpdateApiKeyForMunicipalityMutationMutationVariables
>
export const UpdateMunicipalityMutationDocument = gql`
  mutation UpdateMunicipalityMutation($input: UpdateMunicipalityInput!) {
    updateMunicipality(input: $input) {
      id
      name
      homepage
      active
      municipalityId
      email
      rulesHomepage
      usingNav
      navUrl
      navUsername
      navPassword
      decemberCompensation
      childrenAid
      individualAid {
        ownPlace
        registeredRenting
        unregisteredRenting
        livesWithParents
        unknown
        withOthers
        type
      }
      cohabitationAid {
        ownPlace
        registeredRenting
        unregisteredRenting
        livesWithParents
        unknown
        withOthers
        type
      }
    }
  }
`
export type UpdateMunicipalityMutationMutationFn = Apollo.MutationFunction<
  UpdateMunicipalityMutationMutation,
  UpdateMunicipalityMutationMutationVariables
>

/**
 * __useUpdateMunicipalityMutationMutation__
 *
 * To run a mutation, you first call `useUpdateMunicipalityMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMunicipalityMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMunicipalityMutationMutation, { data, loading, error }] = useUpdateMunicipalityMutationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateMunicipalityMutationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateMunicipalityMutationMutation,
    UpdateMunicipalityMutationMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    UpdateMunicipalityMutationMutation,
    UpdateMunicipalityMutationMutationVariables
  >(UpdateMunicipalityMutationDocument, options)
}
export type UpdateMunicipalityMutationMutationHookResult = ReturnType<
  typeof useUpdateMunicipalityMutationMutation
>
export type UpdateMunicipalityMutationMutationResult = Apollo.MutationResult<UpdateMunicipalityMutationMutation>
export type UpdateMunicipalityMutationMutationOptions = Apollo.BaseMutationOptions<
  UpdateMunicipalityMutationMutation,
  UpdateMunicipalityMutationMutationVariables
>
export const UpdateStaffMutationDocument = gql`
  mutation UpdateStaffMutation($input: UpdateStaffInput!) {
    updateStaff(input: $input) {
      id
      nationalId
      name
      municipalityIds
      phoneNumber
      roles
      active
      nickname
      email
      usePseudoName
    }
  }
`
export type UpdateStaffMutationMutationFn = Apollo.MutationFunction<
  UpdateStaffMutationMutation,
  UpdateStaffMutationMutationVariables
>

/**
 * __useUpdateStaffMutationMutation__
 *
 * To run a mutation, you first call `useUpdateStaffMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateStaffMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateStaffMutationMutation, { data, loading, error }] = useUpdateStaffMutationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateStaffMutationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateStaffMutationMutation,
    UpdateStaffMutationMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    UpdateStaffMutationMutation,
    UpdateStaffMutationMutationVariables
  >(UpdateStaffMutationDocument, options)
}
export type UpdateStaffMutationMutationHookResult = ReturnType<
  typeof useUpdateStaffMutationMutation
>
export type UpdateStaffMutationMutationResult = Apollo.MutationResult<UpdateStaffMutationMutation>
export type UpdateStaffMutationMutationOptions = Apollo.BaseMutationOptions<
  UpdateStaffMutationMutation,
  UpdateStaffMutationMutationVariables
>
export const GetMunicipalitiesDocument = gql`
  query getMunicipalities {
    municipalities {
      id
      name
      active
      numberOfUsers
      municipalityId
    }
  }
`

/**
 * __useGetMunicipalitiesQuery__
 *
 * To run a query within a React component, call `useGetMunicipalitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMunicipalitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMunicipalitiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMunicipalitiesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetMunicipalitiesQuery,
    GetMunicipalitiesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetMunicipalitiesQuery,
    GetMunicipalitiesQueryVariables
  >(GetMunicipalitiesDocument, options)
}
export function useGetMunicipalitiesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetMunicipalitiesQuery,
    GetMunicipalitiesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetMunicipalitiesQuery,
    GetMunicipalitiesQueryVariables
  >(GetMunicipalitiesDocument, options)
}
export type GetMunicipalitiesQueryHookResult = ReturnType<
  typeof useGetMunicipalitiesQuery
>
export type GetMunicipalitiesLazyQueryHookResult = ReturnType<
  typeof useGetMunicipalitiesLazyQuery
>
export type GetMunicipalitiesQueryResult = Apollo.QueryResult<
  GetMunicipalitiesQuery,
  GetMunicipalitiesQueryVariables
>
export const GetMunicipalityDocument = gql`
  query getMunicipality($input: MunicipalityQueryInput!) {
    municipality(input: $input) {
      id
      name
      active
      rulesHomepage
      homepage
      municipalityId
      email
      adminUsers {
        name
        nationalId
        email
        active
        id
      }
      allAdminUsers {
        name
        id
        municipalityIds
      }
      individualAid {
        ownPlace
        registeredRenting
        unregisteredRenting
        livesWithParents
        unknown
        withOthers
        type
      }
      cohabitationAid {
        ownPlace
        registeredRenting
        unregisteredRenting
        livesWithParents
        unknown
        withOthers
        type
      }
    }
  }
`

/**
 * __useGetMunicipalityQuery__
 *
 * To run a query within a React component, call `useGetMunicipalityQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMunicipalityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMunicipalityQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetMunicipalityQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetMunicipalityQuery,
    GetMunicipalityQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetMunicipalityQuery, GetMunicipalityQueryVariables>(
    GetMunicipalityDocument,
    options,
  )
}
export function useGetMunicipalityLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetMunicipalityQuery,
    GetMunicipalityQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetMunicipalityQuery,
    GetMunicipalityQueryVariables
  >(GetMunicipalityDocument, options)
}
export type GetMunicipalityQueryHookResult = ReturnType<
  typeof useGetMunicipalityQuery
>
export type GetMunicipalityLazyQueryHookResult = ReturnType<
  typeof useGetMunicipalityLazyQuery
>
export type GetMunicipalityQueryResult = Apollo.QueryResult<
  GetMunicipalityQuery,
  GetMunicipalityQueryVariables
>
export const GetAdminUsersDocument = gql`
  query getAdminUsers($input: MunicipalityQueryInput!) {
    municipality(input: $input) {
      municipalityId
      adminUsers {
        name
        nationalId
        email
        active
        id
      }
    }
  }
`

/**
 * __useGetAdminUsersQuery__
 *
 * To run a query within a React component, call `useGetAdminUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdminUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdminUsersQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAdminUsersQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetAdminUsersQuery,
    GetAdminUsersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetAdminUsersQuery, GetAdminUsersQueryVariables>(
    GetAdminUsersDocument,
    options,
  )
}
export function useGetAdminUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAdminUsersQuery,
    GetAdminUsersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetAdminUsersQuery, GetAdminUsersQueryVariables>(
    GetAdminUsersDocument,
    options,
  )
}
export type GetAdminUsersQueryHookResult = ReturnType<
  typeof useGetAdminUsersQuery
>
export type GetAdminUsersLazyQueryHookResult = ReturnType<
  typeof useGetAdminUsersLazyQuery
>
export type GetAdminUsersQueryResult = Apollo.QueryResult<
  GetAdminUsersQuery,
  GetAdminUsersQueryVariables
>
export const AllAdminsQueryDocument = gql`
  query allAdminsQuery {
    admins {
      id
      name
      municipalityIds
    }
  }
`

/**
 * __useAllAdminsQueryQuery__
 *
 * To run a query within a React component, call `useAllAdminsQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllAdminsQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllAdminsQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllAdminsQueryQuery(
  baseOptions?: Apollo.QueryHookOptions<
    AllAdminsQueryQuery,
    AllAdminsQueryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AllAdminsQueryQuery, AllAdminsQueryQueryVariables>(
    AllAdminsQueryDocument,
    options,
  )
}
export function useAllAdminsQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllAdminsQueryQuery,
    AllAdminsQueryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AllAdminsQueryQuery, AllAdminsQueryQueryVariables>(
    AllAdminsQueryDocument,
    options,
  )
}
export type AllAdminsQueryQueryHookResult = ReturnType<
  typeof useAllAdminsQueryQuery
>
export type AllAdminsQueryLazyQueryHookResult = ReturnType<
  typeof useAllAdminsQueryLazyQuery
>
export type AllAdminsQueryQueryResult = Apollo.QueryResult<
  AllAdminsQueryQuery,
  AllAdminsQueryQueryVariables
>
export const SupervisorsQueryDocument = gql`
  query supervisorsQuery {
    supervisors {
      id
      nationalId
      name
      roles
      active
    }
  }
`

/**
 * __useSupervisorsQueryQuery__
 *
 * To run a query within a React component, call `useSupervisorsQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useSupervisorsQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSupervisorsQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useSupervisorsQueryQuery(
  baseOptions?: Apollo.QueryHookOptions<
    SupervisorsQueryQuery,
    SupervisorsQueryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<SupervisorsQueryQuery, SupervisorsQueryQueryVariables>(
    SupervisorsQueryDocument,
    options,
  )
}
export function useSupervisorsQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SupervisorsQueryQuery,
    SupervisorsQueryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    SupervisorsQueryQuery,
    SupervisorsQueryQueryVariables
  >(SupervisorsQueryDocument, options)
}
export type SupervisorsQueryQueryHookResult = ReturnType<
  typeof useSupervisorsQueryQuery
>
export type SupervisorsQueryLazyQueryHookResult = ReturnType<
  typeof useSupervisorsQueryLazyQuery
>
export type SupervisorsQueryQueryResult = Apollo.QueryResult<
  SupervisorsQueryQuery,
  SupervisorsQueryQueryVariables
>
export const GetAllSignedUrlQueryDocument = gql`
  query GetAllSignedUrlQuery($input: GetSignedUrlForIdInput!) {
    getSignedUrlForAllFilesId(input: $input) {
      url
      key
    }
  }
`

/**
 * __useGetAllSignedUrlQueryQuery__
 *
 * To run a query within a React component, call `useGetAllSignedUrlQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllSignedUrlQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllSignedUrlQueryQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAllSignedUrlQueryQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetAllSignedUrlQueryQuery,
    GetAllSignedUrlQueryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetAllSignedUrlQueryQuery,
    GetAllSignedUrlQueryQueryVariables
  >(GetAllSignedUrlQueryDocument, options)
}
export function useGetAllSignedUrlQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllSignedUrlQueryQuery,
    GetAllSignedUrlQueryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetAllSignedUrlQueryQuery,
    GetAllSignedUrlQueryQueryVariables
  >(GetAllSignedUrlQueryDocument, options)
}
export type GetAllSignedUrlQueryQueryHookResult = ReturnType<
  typeof useGetAllSignedUrlQueryQuery
>
export type GetAllSignedUrlQueryLazyQueryHookResult = ReturnType<
  typeof useGetAllSignedUrlQueryLazyQuery
>
export type GetAllSignedUrlQueryQueryResult = Apollo.QueryResult<
  GetAllSignedUrlQueryQuery,
  GetAllSignedUrlQueryQueryVariables
>
export const GetMunicipalityQueryDocument = gql`
  query GetMunicipalityQuery {
    municipalityByIds {
      id
      name
      homepage
      active
      municipalityId
      email
      rulesHomepage
      usingNav
      navUrl
      navUsername
      navPassword
      decemberCompensation
      childrenAid
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
    apiKeysForMunicipality {
      id
      name
      apiKey
      municipalityCode
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
 *   },
 * });
 */
export function useGetMunicipalityQueryQuery(
  baseOptions?: Apollo.QueryHookOptions<
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
