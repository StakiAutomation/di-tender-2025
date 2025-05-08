import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import { MileageRegistrationFragmentDoc } from '../VehicleBulkMileage/VehicleBulkMileage.generated'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type VehicleBulkMileagePostMutationVariables = Types.Exact<{
  input: Types.PostVehicleBulkMileageInput
}>

export type VehicleBulkMileagePostMutation = {
  __typename?: 'Mutation'
  vehicleBulkMileagePost?: {
    __typename?: 'VehiclesBulkMileageReadingResponse'
    requestId?: string | null
    errorMessage?: string | null
    errorCode?: number | null
  } | null
}

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

export const VehicleBulkMileagePostDocument = gql`
  mutation vehicleBulkMileagePost($input: PostVehicleBulkMileageInput!) {
    vehicleBulkMileagePost(input: $input) {
      requestId
      errorMessage
      errorCode
    }
  }
`
export type VehicleBulkMileagePostMutationFn = Apollo.MutationFunction<
  VehicleBulkMileagePostMutation,
  VehicleBulkMileagePostMutationVariables
>

/**
 * __useVehicleBulkMileagePostMutation__
 *
 * To run a mutation, you first call `useVehicleBulkMileagePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVehicleBulkMileagePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [vehicleBulkMileagePostMutation, { data, loading, error }] = useVehicleBulkMileagePostMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useVehicleBulkMileagePostMutation(
  baseOptions?: Apollo.MutationHookOptions<
    VehicleBulkMileagePostMutation,
    VehicleBulkMileagePostMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    VehicleBulkMileagePostMutation,
    VehicleBulkMileagePostMutationVariables
  >(VehicleBulkMileagePostDocument, options)
}
export type VehicleBulkMileagePostMutationHookResult = ReturnType<
  typeof useVehicleBulkMileagePostMutation
>
export type VehicleBulkMileagePostMutationResult = Apollo.MutationResult<VehicleBulkMileagePostMutation>
export type VehicleBulkMileagePostMutationOptions = Apollo.BaseMutationOptions<
  VehicleBulkMileagePostMutation,
  VehicleBulkMileagePostMutationVariables
>
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
