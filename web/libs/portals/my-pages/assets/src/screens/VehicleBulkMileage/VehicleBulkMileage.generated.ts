import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type VehiclesListQueryVariables = Types.Exact<{
  input: Types.VehiclesListInputV3
}>

export type VehiclesListQuery = {
  __typename?: 'Query'
  vehiclesListV3?: {
    __typename?: 'VehiclesCurrentListResponse'
    pageNumber: number
    pageSize: number
    totalPages: number
    totalRecords: number
    data?: Array<{
      __typename?: 'VehicleCurrentWithMileage'
      vehicleId: string
      registrationNumber?: string | null
      userRole?: string | null
      type?: string | null
      color?: string | null
      mileageDetails?: {
        __typename?: 'VehiclesMileageDetails'
        canRegisterMileage?: boolean | null
        requiresMileageRegistration?: boolean | null
        lastMileageRegistration?: {
          __typename?: 'VehiclesMileageRegistration'
          originCode: string
          mileage: number
          date: string
          internalId?: number | null
        } | null
      } | null
    }> | null
  } | null
}

export type PostSingleVehicleMileageMutationVariables = Types.Exact<{
  input: Types.PostVehicleMileageInput
}>

export type PostSingleVehicleMileageMutation = {
  __typename?: 'Mutation'
  vehicleMileagePostV2?:
    | {
        __typename?: 'VehicleMileageDetail'
        permno?: string | null
        readDate?: string | null
        originCode?: string | null
        mileageNumber?: number | null
        internalId?: string | null
      }
    | {
        __typename?: 'VehiclesMileageUpdateError'
        code?: number | null
        message: string
      }
    | null
}

export type PutSingleVehicleMileageMutationVariables = Types.Exact<{
  input: Types.PutVehicleMileageInput
}>

export type PutSingleVehicleMileageMutation = {
  __typename?: 'Mutation'
  vehicleMileagePutV2?:
    | {
        __typename?: 'VehicleMileagePutModel'
        permno?: string | null
        internalId?: string | null
        mileageNumber?: number | null
      }
    | {
        __typename?: 'VehiclesMileageUpdateError'
        code?: number | null
        message: string
      }
    | null
}

export type GetUsersMileageQueryVariables = Types.Exact<{
  input: Types.GetVehicleMileageInput
}>

export type GetUsersMileageQuery = {
  __typename?: 'Query'
  vehicleMileageDetails?: {
    __typename?: 'VehicleMileageOverview'
    editing?: boolean | null
    canRegisterMileage?: boolean | null
    requiresMileageRegistration?: boolean | null
    canUserRegisterVehicleMileage?: boolean | null
    data?: Array<{
      __typename?: 'VehicleMileageDetail'
      permno?: string | null
      readDate?: string | null
      originCode?: string | null
      mileageNumber?: number | null
      internalId?: string | null
    }> | null
  } | null
}

export type MileageRegistrationFragment = {
  __typename?: 'VehiclesMileageRegistration'
  originCode: string
  mileage: number
  date: string
  internalId?: number | null
}

export type VehicleMileageRegistrationHistoryQueryVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.GetVehicleMileageInput>
}>

export type VehicleMileageRegistrationHistoryQuery = {
  __typename?: 'Query'
  vehiclesMileageRegistrationHistory?: {
    __typename?: 'VehiclesMileageRegistrationHistory'
    vehicleId: string
    mileageRegistrationHistory?: Array<{
      __typename?: 'VehiclesMileageRegistration'
      originCode: string
      mileage: number
      date: string
      internalId?: number | null
    }> | null
  } | null
}

export const MileageRegistrationFragmentDoc = gql`
  fragment mileageRegistration on VehiclesMileageRegistration {
    originCode
    mileage
    date
    internalId
  }
`
export const VehiclesListDocument = gql`
  query vehiclesList($input: VehiclesListInputV3!) {
    vehiclesListV3(input: $input) {
      pageNumber
      pageSize
      totalPages
      totalRecords
      data {
        vehicleId
        registrationNumber
        userRole
        type
        color
        mileageDetails {
          lastMileageRegistration {
            ...mileageRegistration
          }
          canRegisterMileage
          requiresMileageRegistration
        }
      }
    }
  }
  ${MileageRegistrationFragmentDoc}
`

/**
 * __useVehiclesListQuery__
 *
 * To run a query within a React component, call `useVehiclesListQuery` and pass it any options that fit your needs.
 * When your component renders, `useVehiclesListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVehiclesListQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useVehiclesListQuery(
  baseOptions: Apollo.QueryHookOptions<
    VehiclesListQuery,
    VehiclesListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<VehiclesListQuery, VehiclesListQueryVariables>(
    VehiclesListDocument,
    options,
  )
}
export function useVehiclesListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    VehiclesListQuery,
    VehiclesListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<VehiclesListQuery, VehiclesListQueryVariables>(
    VehiclesListDocument,
    options,
  )
}
export type VehiclesListQueryHookResult = ReturnType<
  typeof useVehiclesListQuery
>
export type VehiclesListLazyQueryHookResult = ReturnType<
  typeof useVehiclesListLazyQuery
>
export type VehiclesListQueryResult = Apollo.QueryResult<
  VehiclesListQuery,
  VehiclesListQueryVariables
>
export const PostSingleVehicleMileageDocument = gql`
  mutation postSingleVehicleMileage($input: PostVehicleMileageInput!) {
    vehicleMileagePostV2(input: $input) {
      ... on VehicleMileageDetail {
        permno
        readDate
        originCode
        mileageNumber
        internalId
      }
      ... on VehiclesMileageUpdateError {
        code
        message
      }
    }
  }
`
export type PostSingleVehicleMileageMutationFn = Apollo.MutationFunction<
  PostSingleVehicleMileageMutation,
  PostSingleVehicleMileageMutationVariables
>

/**
 * __usePostSingleVehicleMileageMutation__
 *
 * To run a mutation, you first call `usePostSingleVehicleMileageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostSingleVehicleMileageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postSingleVehicleMileageMutation, { data, loading, error }] = usePostSingleVehicleMileageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePostSingleVehicleMileageMutation(
  baseOptions?: Apollo.MutationHookOptions<
    PostSingleVehicleMileageMutation,
    PostSingleVehicleMileageMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    PostSingleVehicleMileageMutation,
    PostSingleVehicleMileageMutationVariables
  >(PostSingleVehicleMileageDocument, options)
}
export type PostSingleVehicleMileageMutationHookResult = ReturnType<
  typeof usePostSingleVehicleMileageMutation
>
export type PostSingleVehicleMileageMutationResult = Apollo.MutationResult<PostSingleVehicleMileageMutation>
export type PostSingleVehicleMileageMutationOptions = Apollo.BaseMutationOptions<
  PostSingleVehicleMileageMutation,
  PostSingleVehicleMileageMutationVariables
>
export const PutSingleVehicleMileageDocument = gql`
  mutation putSingleVehicleMileage($input: PutVehicleMileageInput!) {
    vehicleMileagePutV2(input: $input) {
      ... on VehicleMileagePutModel {
        permno
        internalId
        mileageNumber
      }
      ... on VehiclesMileageUpdateError {
        code
        message
      }
    }
  }
`
export type PutSingleVehicleMileageMutationFn = Apollo.MutationFunction<
  PutSingleVehicleMileageMutation,
  PutSingleVehicleMileageMutationVariables
>

/**
 * __usePutSingleVehicleMileageMutation__
 *
 * To run a mutation, you first call `usePutSingleVehicleMileageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePutSingleVehicleMileageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [putSingleVehicleMileageMutation, { data, loading, error }] = usePutSingleVehicleMileageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePutSingleVehicleMileageMutation(
  baseOptions?: Apollo.MutationHookOptions<
    PutSingleVehicleMileageMutation,
    PutSingleVehicleMileageMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    PutSingleVehicleMileageMutation,
    PutSingleVehicleMileageMutationVariables
  >(PutSingleVehicleMileageDocument, options)
}
export type PutSingleVehicleMileageMutationHookResult = ReturnType<
  typeof usePutSingleVehicleMileageMutation
>
export type PutSingleVehicleMileageMutationResult = Apollo.MutationResult<PutSingleVehicleMileageMutation>
export type PutSingleVehicleMileageMutationOptions = Apollo.BaseMutationOptions<
  PutSingleVehicleMileageMutation,
  PutSingleVehicleMileageMutationVariables
>
export const GetUsersMileageDocument = gql`
  query GetUsersMileage($input: GetVehicleMileageInput!) {
    vehicleMileageDetails(input: $input) {
      data {
        permno
        readDate
        originCode
        mileageNumber
        internalId
      }
      editing
      canRegisterMileage
      requiresMileageRegistration
      canUserRegisterVehicleMileage
    }
  }
`

/**
 * __useGetUsersMileageQuery__
 *
 * To run a query within a React component, call `useGetUsersMileageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersMileageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersMileageQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetUsersMileageQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetUsersMileageQuery,
    GetUsersMileageQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetUsersMileageQuery, GetUsersMileageQueryVariables>(
    GetUsersMileageDocument,
    options,
  )
}
export function useGetUsersMileageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUsersMileageQuery,
    GetUsersMileageQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetUsersMileageQuery,
    GetUsersMileageQueryVariables
  >(GetUsersMileageDocument, options)
}
export type GetUsersMileageQueryHookResult = ReturnType<
  typeof useGetUsersMileageQuery
>
export type GetUsersMileageLazyQueryHookResult = ReturnType<
  typeof useGetUsersMileageLazyQuery
>
export type GetUsersMileageQueryResult = Apollo.QueryResult<
  GetUsersMileageQuery,
  GetUsersMileageQueryVariables
>
export const VehicleMileageRegistrationHistoryDocument = gql`
  query vehicleMileageRegistrationHistory($input: GetVehicleMileageInput) {
    vehiclesMileageRegistrationHistory(input: $input) {
      vehicleId
      mileageRegistrationHistory {
        ...mileageRegistration
      }
    }
  }
  ${MileageRegistrationFragmentDoc}
`

/**
 * __useVehicleMileageRegistrationHistoryQuery__
 *
 * To run a query within a React component, call `useVehicleMileageRegistrationHistoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useVehicleMileageRegistrationHistoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVehicleMileageRegistrationHistoryQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useVehicleMileageRegistrationHistoryQuery(
  baseOptions?: Apollo.QueryHookOptions<
    VehicleMileageRegistrationHistoryQuery,
    VehicleMileageRegistrationHistoryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    VehicleMileageRegistrationHistoryQuery,
    VehicleMileageRegistrationHistoryQueryVariables
  >(VehicleMileageRegistrationHistoryDocument, options)
}
export function useVehicleMileageRegistrationHistoryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    VehicleMileageRegistrationHistoryQuery,
    VehicleMileageRegistrationHistoryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    VehicleMileageRegistrationHistoryQuery,
    VehicleMileageRegistrationHistoryQueryVariables
  >(VehicleMileageRegistrationHistoryDocument, options)
}
export type VehicleMileageRegistrationHistoryQueryHookResult = ReturnType<
  typeof useVehicleMileageRegistrationHistoryQuery
>
export type VehicleMileageRegistrationHistoryLazyQueryHookResult = ReturnType<
  typeof useVehicleMileageRegistrationHistoryLazyQuery
>
export type VehicleMileageRegistrationHistoryQueryResult = Apollo.QueryResult<
  VehicleMileageRegistrationHistoryQuery,
  VehicleMileageRegistrationHistoryQueryVariables
>
