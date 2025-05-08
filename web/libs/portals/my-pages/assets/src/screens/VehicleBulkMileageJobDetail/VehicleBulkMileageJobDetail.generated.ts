import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetJobsStatusQueryVariables = Types.Exact<{
  input: Types.BulkVehicleMileageRequestStatusInput
}>

export type GetJobsStatusQuery = {
  __typename?: 'Query'
  vehicleBulkMileageRegistrationRequestStatus?: {
    __typename?: 'VehiclesBulkMileageRegistrationRequestStatus'
    jobsErrored?: number | null
    jobsFinished?: number | null
    jobsRemaining?: number | null
    jobsSubmitted?: number | null
    jobsValid?: number | null
    requestId: string
  } | null
}

export type GetJobRegistrationsQueryVariables = Types.Exact<{
  input: Types.BulkVehicleMileageRequestOverviewInput
}>

export type GetJobRegistrationsQuery = {
  __typename?: 'Query'
  vehicleBulkMileageRegistrationRequestOverview?: {
    __typename?: 'VehiclesBulkMileageRegistrationRequestOverview'
    requests: Array<{
      __typename?: 'VehiclesBulkMileageRegistrationRequestDetail'
      guid: string
      vehicleId: string
      mileage?: number | null
      returnCode?: string | null
      errors?: Array<{
        __typename?: 'VehiclesBulkMileageRegistrationRequestError'
        code?: string | null
        message?: string | null
        warningSerialCode?: number | null
        warningText?: string | null
      }> | null
    }>
  } | null
}

export const GetJobsStatusDocument = gql`
  query getJobsStatus($input: BulkVehicleMileageRequestStatusInput!) {
    vehicleBulkMileageRegistrationRequestStatus(input: $input) {
      jobsErrored
      jobsFinished
      jobsRemaining
      jobsSubmitted
      jobsValid
      requestId
    }
  }
`

/**
 * __useGetJobsStatusQuery__
 *
 * To run a query within a React component, call `useGetJobsStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetJobsStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetJobsStatusQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetJobsStatusQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetJobsStatusQuery,
    GetJobsStatusQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetJobsStatusQuery, GetJobsStatusQueryVariables>(
    GetJobsStatusDocument,
    options,
  )
}
export function useGetJobsStatusLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetJobsStatusQuery,
    GetJobsStatusQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetJobsStatusQuery, GetJobsStatusQueryVariables>(
    GetJobsStatusDocument,
    options,
  )
}
export type GetJobsStatusQueryHookResult = ReturnType<
  typeof useGetJobsStatusQuery
>
export type GetJobsStatusLazyQueryHookResult = ReturnType<
  typeof useGetJobsStatusLazyQuery
>
export type GetJobsStatusQueryResult = Apollo.QueryResult<
  GetJobsStatusQuery,
  GetJobsStatusQueryVariables
>
export const GetJobRegistrationsDocument = gql`
  query getJobRegistrations($input: BulkVehicleMileageRequestOverviewInput!) {
    vehicleBulkMileageRegistrationRequestOverview(input: $input) {
      requests {
        guid
        vehicleId
        mileage
        returnCode
        errors {
          code
          message
          warningSerialCode
          warningText
        }
      }
    }
  }
`

/**
 * __useGetJobRegistrationsQuery__
 *
 * To run a query within a React component, call `useGetJobRegistrationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetJobRegistrationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetJobRegistrationsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetJobRegistrationsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetJobRegistrationsQuery,
    GetJobRegistrationsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetJobRegistrationsQuery,
    GetJobRegistrationsQueryVariables
  >(GetJobRegistrationsDocument, options)
}
export function useGetJobRegistrationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetJobRegistrationsQuery,
    GetJobRegistrationsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetJobRegistrationsQuery,
    GetJobRegistrationsQueryVariables
  >(GetJobRegistrationsDocument, options)
}
export type GetJobRegistrationsQueryHookResult = ReturnType<
  typeof useGetJobRegistrationsQuery
>
export type GetJobRegistrationsLazyQueryHookResult = ReturnType<
  typeof useGetJobRegistrationsLazyQuery
>
export type GetJobRegistrationsQueryResult = Apollo.QueryResult<
  GetJobRegistrationsQuery,
  GetJobRegistrationsQueryVariables
>
