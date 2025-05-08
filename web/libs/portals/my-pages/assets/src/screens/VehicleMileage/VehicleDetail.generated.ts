import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type VehicleMileageDetailFragmentFragment = {
  __typename?: 'VehicleMileageDetail'
  permno?: string | null
  readDate?: string | null
  originCode?: string | null
  mileageNumber?: number | null
  internalId?: string | null
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

export type PostVehicleMileageMutationVariables = Types.Exact<{
  input: Types.PostVehicleMileageInput
}>

export type PostVehicleMileageMutation = {
  __typename?: 'Mutation'
  vehicleMileagePost?: {
    __typename?: 'VehicleMileageDetail'
    permno?: string | null
    readDate?: string | null
    originCode?: string | null
    mileageNumber?: number | null
    internalId?: string | null
  } | null
}

export type PutVehicleMileageMutationVariables = Types.Exact<{
  input: Types.PutVehicleMileageInput
}>

export type PutVehicleMileageMutation = {
  __typename?: 'Mutation'
  vehicleMileagePut?: {
    __typename?: 'VehicleMileagePutModel'
    permno?: string | null
    internalId?: string | null
    mileageNumber?: number | null
  } | null
}

export const VehicleMileageDetailFragmentFragmentDoc = gql`
  fragment VehicleMileageDetailFragment on VehicleMileageDetail {
    permno
    readDate
    originCode
    mileageNumber
    internalId
  }
`
export const GetUsersMileageDocument = gql`
  query GetUsersMileage($input: GetVehicleMileageInput!) {
    vehicleMileageDetails(input: $input) {
      data {
        ...VehicleMileageDetailFragment
      }
      editing
      canRegisterMileage
      requiresMileageRegistration
      canUserRegisterVehicleMileage
    }
  }
  ${VehicleMileageDetailFragmentFragmentDoc}
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
export const PostVehicleMileageDocument = gql`
  mutation PostVehicleMileage($input: PostVehicleMileageInput!) {
    vehicleMileagePost(input: $input) {
      ...VehicleMileageDetailFragment
    }
  }
  ${VehicleMileageDetailFragmentFragmentDoc}
`
export type PostVehicleMileageMutationFn = Apollo.MutationFunction<
  PostVehicleMileageMutation,
  PostVehicleMileageMutationVariables
>

/**
 * __usePostVehicleMileageMutation__
 *
 * To run a mutation, you first call `usePostVehicleMileageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostVehicleMileageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postVehicleMileageMutation, { data, loading, error }] = usePostVehicleMileageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePostVehicleMileageMutation(
  baseOptions?: Apollo.MutationHookOptions<
    PostVehicleMileageMutation,
    PostVehicleMileageMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    PostVehicleMileageMutation,
    PostVehicleMileageMutationVariables
  >(PostVehicleMileageDocument, options)
}
export type PostVehicleMileageMutationHookResult = ReturnType<
  typeof usePostVehicleMileageMutation
>
export type PostVehicleMileageMutationResult = Apollo.MutationResult<PostVehicleMileageMutation>
export type PostVehicleMileageMutationOptions = Apollo.BaseMutationOptions<
  PostVehicleMileageMutation,
  PostVehicleMileageMutationVariables
>
export const PutVehicleMileageDocument = gql`
  mutation PutVehicleMileage($input: PutVehicleMileageInput!) {
    vehicleMileagePut(input: $input) {
      permno
      internalId
      mileageNumber
    }
  }
`
export type PutVehicleMileageMutationFn = Apollo.MutationFunction<
  PutVehicleMileageMutation,
  PutVehicleMileageMutationVariables
>

/**
 * __usePutVehicleMileageMutation__
 *
 * To run a mutation, you first call `usePutVehicleMileageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePutVehicleMileageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [putVehicleMileageMutation, { data, loading, error }] = usePutVehicleMileageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePutVehicleMileageMutation(
  baseOptions?: Apollo.MutationHookOptions<
    PutVehicleMileageMutation,
    PutVehicleMileageMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    PutVehicleMileageMutation,
    PutVehicleMileageMutationVariables
  >(PutVehicleMileageDocument, options)
}
export type PutVehicleMileageMutationHookResult = ReturnType<
  typeof usePutVehicleMileageMutation
>
export type PutVehicleMileageMutationResult = Apollo.MutationResult<PutVehicleMileageMutation>
export type PutVehicleMileageMutationOptions = Apollo.BaseMutationOptions<
  PutVehicleMileageMutation,
  PutVehicleMileageMutationVariables
>
