import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetRequestsStatusQueryVariables = Types.Exact<{
  [key: string]: never
}>

export type GetRequestsStatusQuery = {
  __typename?: 'Query'
  vehicleBulkMileageRegistrationJobHistory?: {
    __typename?: 'VehiclesBulkMileageRegistrationJobHistory'
    history: Array<{
      __typename?: 'VehiclesBulkMileageRegistrationJob'
      guid: string
      reportingPersonNationalId?: string | null
      reportingPersonName?: string | null
      originCode?: string | null
      originName?: string | null
      dateRequested?: string | null
      dateStarted?: string | null
      dateFinished?: string | null
    }>
  } | null
}

export const GetRequestsStatusDocument = gql`
  query getRequestsStatus {
    vehicleBulkMileageRegistrationJobHistory {
      history {
        guid
        reportingPersonNationalId
        reportingPersonName
        originCode
        originName
        dateRequested
        dateStarted
        dateFinished
      }
    }
  }
`

/**
 * __useGetRequestsStatusQuery__
 *
 * To run a query within a React component, call `useGetRequestsStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRequestsStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRequestsStatusQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRequestsStatusQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetRequestsStatusQuery,
    GetRequestsStatusQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetRequestsStatusQuery,
    GetRequestsStatusQueryVariables
  >(GetRequestsStatusDocument, options)
}
export function useGetRequestsStatusLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetRequestsStatusQuery,
    GetRequestsStatusQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetRequestsStatusQuery,
    GetRequestsStatusQueryVariables
  >(GetRequestsStatusDocument, options)
}
export type GetRequestsStatusQueryHookResult = ReturnType<
  typeof useGetRequestsStatusQuery
>
export type GetRequestsStatusLazyQueryHookResult = ReturnType<
  typeof useGetRequestsStatusLazyQuery
>
export type GetRequestsStatusQueryResult = Apollo.QueryResult<
  GetRequestsStatusQuery,
  GetRequestsStatusQueryVariables
>
