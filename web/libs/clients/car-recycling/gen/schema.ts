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
}

export type AccessControl = {
  __typename?: 'AccessControl'
  email?: Maybe<Scalars['String']>
  name: Scalars['String']
  nationalId: Scalars['ID']
  partnerId?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  recyclingLocation?: Maybe<Scalars['String']>
  recyclingPartner?: Maybe<RecyclingPartner>
  role: AccessControlRole
}

export enum AccessControlRole {
  developer = 'developer',
  municipality = 'municipality',
  recyclingCompany = 'recyclingCompany',
  recyclingCompanyAdmin = 'recyclingCompanyAdmin',
  recyclingFund = 'recyclingFund',
}

export type CreateAccessControlInput = {
  email: Scalars['String']
  name: Scalars['String']
  nationalId: Scalars['String']
  partnerId?: InputMaybe<Scalars['String']>
  phone: Scalars['String']
  recyclingLocation?: InputMaybe<Scalars['String']>
  role: AccessControlRole
}

export type CreateOwnerInput = {
  name: Scalars['String']
}

export type CreateRecyclingPartnerInput = {
  active: Scalars['Boolean']
  address: Scalars['String']
  city: Scalars['String']
  companyId: Scalars['String']
  companyName: Scalars['String']
  email: Scalars['String']
  isMunicipality: Scalars['Boolean']
  municipalityId?: InputMaybe<Scalars['String']>
  nationalId: Scalars['String']
  phone: Scalars['String']
  postnumber: Scalars['String']
  website?: InputMaybe<Scalars['String']>
}

export type CreateRecyclingRequestInput = {
  fullName: Scalars['String']
  permno: Scalars['String']
  requestType: RecyclingRequestTypes
}

export type CreateVehicleInput = {
  color: Scalars['String']
  firstRegistrationDate?: InputMaybe<Scalars['DateTime']>
  make: Scalars['String']
  mileage: Scalars['Float']
  permno: Scalars['String']
  vin: Scalars['String']
}

export type DeleteAccessControlInput = {
  nationalId: Scalars['String']
}

export type Gdpr = {
  __typename?: 'Gdpr'
  createdAt: Scalars['DateTime']
  gdprStatus: Scalars['String']
  nationalId: Scalars['String']
  updatedAt: Scalars['DateTime']
}

export type Municipality = {
  __typename?: 'Municipality'
  companyId: Scalars['ID']
  companyName: Scalars['String']
}

export type Mutation = {
  __typename?: 'Mutation'
  createSkilavottordAccessControl: AccessControl
  createSkilavottordGdpr: Scalars['Boolean']
  createSkilavottordRecyclingPartner: RecyclingPartner
  createSkilavottordRecyclingRequest: RecyclingRequestResponse
  createSkilavottordRecyclingRequestAppSys: RecyclingRequestResponse
  createSkilavottordVehicle: Scalars['Boolean']
  createSkilavottordVehicleAppSys: Scalars['Boolean']
  createSkilavottordVehicleOwner: Scalars['Boolean']
  createSkilavottordVehicleOwnerAppSys: Scalars['Boolean']
  deleteSkilavottordAccessControl: Scalars['Boolean']
  updateSkilavottordAccessControl: AccessControl
  updateSkilavottordRecyclingPartner: RecyclingPartner
  updateSkilavottordVehicleInfo: Scalars['Boolean']
}

export type MutationCreateSkilavottordAccessControlArgs = {
  input: CreateAccessControlInput
}

export type MutationCreateSkilavottordGdprArgs = {
  gdprStatus: Scalars['String']
}

export type MutationCreateSkilavottordRecyclingPartnerArgs = {
  input: CreateRecyclingPartnerInput
}

export type MutationCreateSkilavottordRecyclingRequestArgs = {
  permno: Scalars['String']
  requestType: RecyclingRequestTypes
}

export type MutationCreateSkilavottordRecyclingRequestAppSysArgs = {
  input: CreateRecyclingRequestInput
}

export type MutationCreateSkilavottordVehicleArgs = {
  permno: Scalars['String']
}

export type MutationCreateSkilavottordVehicleAppSysArgs = {
  input: CreateVehicleInput
}

export type MutationCreateSkilavottordVehicleOwnerArgs = {
  name: Scalars['String']
}

export type MutationCreateSkilavottordVehicleOwnerAppSysArgs = {
  input: CreateOwnerInput
}

export type MutationDeleteSkilavottordAccessControlArgs = {
  input: DeleteAccessControlInput
}

export type MutationUpdateSkilavottordAccessControlArgs = {
  input: UpdateAccessControlInput
}

export type MutationUpdateSkilavottordRecyclingPartnerArgs = {
  input: UpdateRecyclingPartnerInput
}

export type MutationUpdateSkilavottordVehicleInfoArgs = {
  mileage: Scalars['Float']
  permno: Scalars['String']
  plateCount?: InputMaybe<Scalars['Float']>
  plateLost: Scalars['Boolean']
}

export type PageInfo = {
  __typename?: 'PageInfo'
  endCursor?: Maybe<Scalars['String']>
  hasNextPage: Scalars['Boolean']
  hasPreviousPage: Scalars['Boolean']
  startCursor?: Maybe<Scalars['String']>
}

export type Query = {
  __typename?: 'Query'
  skilavottordAccessControls: Array<AccessControl>
  skilavottordAccessControlsByRecyclingPartner: Array<AccessControl>
  skilavottordAllActiveRecyclingPartners: Array<RecyclingPartner>
  skilavottordAllDeregisteredVehicles: VehicleConnection
  skilavottordAllGdprs: Array<Gdpr>
  skilavottordAllMunicipalities: Array<Municipality>
  skilavottordAllRecyclingPartners: Array<RecyclingPartner>
  skilavottordAllRecyclingRequests: Array<RecyclingRequest>
  skilavottordDeRegisterVehicle: Scalars['Boolean']
  skilavottordFjarsyslaSkilagjald: Scalars['Boolean']
  skilavottordGdpr?: Maybe<Gdpr>
  skilavottordRecyclingPartner: RecyclingPartner
  skilavottordRecyclingPartnerActive: Scalars['Boolean']
  skilavottordRecyclingPartnerVehicles: VehicleConnection
  skilavottordRecyclingPartners: Array<RecyclingPartner>
  skilavottordRecyclingRequests: Array<RecyclingRequest>
  skilavottordTraffic: Traffic
  skilavottordUser?: Maybe<SkilavottordUser>
  skilavottordUserRecyclingRequest: Array<RecyclingRequest>
  skilavottordVehicleById: Vehicle
  skilavottordVehicleReadyToDeregistered: Vehicle
  skilavottordVehicles: Array<VehicleInformation>
}

export type QuerySkilavottordAllDeregisteredVehiclesArgs = {
  after: Scalars['String']
  first: Scalars['Int']
}

export type QuerySkilavottordDeRegisterVehicleArgs = {
  mileage?: InputMaybe<Scalars['Int']>
  recyclingPartner: Scalars['String']
  vehiclePermno: Scalars['String']
}

export type QuerySkilavottordFjarsyslaSkilagjaldArgs = {
  guid: Scalars['String']
  vehiclePermno: Scalars['String']
}

export type QuerySkilavottordRecyclingPartnerArgs = {
  input: RecyclingPartnerInput
}

export type QuerySkilavottordRecyclingPartnerActiveArgs = {
  input: RecyclingPartnerInput
}

export type QuerySkilavottordRecyclingPartnerVehiclesArgs = {
  after: Scalars['String']
  first: Scalars['Int']
}

export type QuerySkilavottordRecyclingPartnersArgs = {
  isMunicipalityPage?: InputMaybe<Scalars['Boolean']>
  municipalityId?: InputMaybe<Scalars['String']>
}

export type QuerySkilavottordRecyclingRequestsArgs = {
  permno: Scalars['String']
}

export type QuerySkilavottordTrafficArgs = {
  permno: Scalars['String']
}

export type QuerySkilavottordUserRecyclingRequestArgs = {
  permno: Scalars['String']
}

export type QuerySkilavottordVehicleByIdArgs = {
  permno: Scalars['String']
}

export type QuerySkilavottordVehicleReadyToDeregisteredArgs = {
  permno: Scalars['String']
}

export type RecyclingPartner = {
  __typename?: 'RecyclingPartner'
  active: Scalars['Boolean']
  address: Scalars['String']
  city: Scalars['String']
  companyId: Scalars['ID']
  companyName: Scalars['String']
  createdAt: Scalars['DateTime']
  email?: Maybe<Scalars['String']>
  isMunicipality: Scalars['Boolean']
  municipality?: Maybe<Municipality>
  municipalityId?: Maybe<Scalars['String']>
  nationalId?: Maybe<Scalars['String']>
  phone: Scalars['String']
  postnumber: Scalars['String']
  recyclingRequests: Array<RecyclingRequest>
  updatedAt: Scalars['DateTime']
  website?: Maybe<Scalars['String']>
}

export type RecyclingPartnerInput = {
  companyId: Scalars['String']
}

export type RecyclingRequest = {
  __typename?: 'RecyclingRequest'
  createdAt?: Maybe<Scalars['DateTime']>
  id: Scalars['String']
  nameOfRequestor: Scalars['String']
  recyclingPartner: RecyclingPartner
  recyclingPartnerId: Scalars['String']
  requestType: RecyclingRequestTypes
  updatedAt?: Maybe<Scalars['DateTime']>
  vehicleId: Scalars['String']
}

export type RecyclingRequestResponse = RequestErrors | RequestStatus

export enum RecyclingRequestTypes {
  cancelled = 'cancelled',
  deregistered = 'deregistered',
  handOver = 'handOver',
  paymentFailed = 'paymentFailed',
  paymentInitiated = 'paymentInitiated',
  pendingRecycle = 'pendingRecycle',
}

export type RequestErrors = {
  __typename?: 'RequestErrors'
  message: Scalars['String']
  operation: Scalars['String']
}

export type RequestStatus = {
  __typename?: 'RequestStatus'
  status: Scalars['Boolean']
}

export enum Role {
  citizen = 'citizen',
  developer = 'developer',
  municipality = 'municipality',
  recyclingCompany = 'recyclingCompany',
  recyclingCompanyAdmin = 'recyclingCompanyAdmin',
  recyclingFund = 'recyclingFund',
}

export type SkilavottordUser = {
  __typename?: 'SkilavottordUser'
  name: Scalars['String']
  nationalId: Scalars['ID']
  partnerId?: Maybe<Scalars['String']>
  role: Role
}

export type Traffic = {
  __typename?: 'Traffic'
  outInStatus: Scalars['String']
  permno: Scalars['String']
  useDate: Scalars['String']
  useStatus: Scalars['String']
  useStatusName: Scalars['String']
}

export type UpdateAccessControlInput = {
  email: Scalars['String']
  name: Scalars['String']
  nationalId: Scalars['String']
  partnerId?: InputMaybe<Scalars['String']>
  phone: Scalars['String']
  recyclingLocation?: InputMaybe<Scalars['String']>
  role: AccessControlRole
}

export type UpdateRecyclingPartnerInput = {
  active: Scalars['Boolean']
  address: Scalars['String']
  city: Scalars['String']
  companyId: Scalars['String']
  companyName: Scalars['String']
  email: Scalars['String']
  isMunicipality?: InputMaybe<Scalars['Boolean']>
  municipalityId?: InputMaybe<Scalars['String']>
  nationalId: Scalars['String']
  phone: Scalars['String']
  postnumber: Scalars['String']
  website?: InputMaybe<Scalars['String']>
}

export type Vehicle = {
  __typename?: 'Vehicle'
  createdAt?: Maybe<Scalars['DateTime']>
  mileage?: Maybe<Scalars['Float']>
  newregDate?: Maybe<Scalars['DateTime']>
  plateCount?: Maybe<Scalars['Float']>
  plateLost?: Maybe<Scalars['Boolean']>
  recyclingRequests?: Maybe<Array<RecyclingRequest>>
  updatedAt?: Maybe<Scalars['DateTime']>
  vehicleColor: Scalars['String']
  vehicleId: Scalars['String']
  vehicleType: Scalars['String']
  vinNumber: Scalars['String']
}

export type VehicleConnection = {
  __typename?: 'VehicleConnection'
  count: Scalars['Float']
  items: Array<Vehicle>
  pageInfo: PageInfo
}

export type VehicleInformation = {
  __typename?: 'VehicleInformation'
  color: Scalars['String']
  firstRegDate: Scalars['String']
  hasCoOwner: Scalars['Boolean']
  isRecyclable: Scalars['Boolean']
  permno: Scalars['String']
  status: Scalars['String']
  type: Scalars['String']
  vinNumber: Scalars['String']
}
