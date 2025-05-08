import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetStatisticsTotalQueryVariables = Types.Exact<{
  input: Types.StatisticsInput
}>

export type GetStatisticsTotalQuery = {
  __typename?: 'Query'
  getStatisticsTotal: {
    __typename?: 'ProviderStatistics'
    published: number
    notifications: number
    opened: number
  }
}

export const GetStatisticsTotalDocument = gql`
  query GetStatisticsTotal($input: StatisticsInput!) {
    getStatisticsTotal(input: $input) {
      published
      notifications
      opened
    }
  }
`

/**
 * __useGetStatisticsTotalQuery__
 *
 * To run a query within a React component, call `useGetStatisticsTotalQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStatisticsTotalQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStatisticsTotalQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetStatisticsTotalQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetStatisticsTotalQuery,
    GetStatisticsTotalQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetStatisticsTotalQuery,
    GetStatisticsTotalQueryVariables
  >(GetStatisticsTotalDocument, options)
}
export function useGetStatisticsTotalLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetStatisticsTotalQuery,
    GetStatisticsTotalQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetStatisticsTotalQuery,
    GetStatisticsTotalQueryVariables
  >(GetStatisticsTotalDocument, options)
}
export type GetStatisticsTotalQueryHookResult = ReturnType<
  typeof useGetStatisticsTotalQuery
>
export type GetStatisticsTotalLazyQueryHookResult = ReturnType<
  typeof useGetStatisticsTotalLazyQuery
>
export type GetStatisticsTotalQueryResult = Apollo.QueryResult<
  GetStatisticsTotalQuery,
  GetStatisticsTotalQueryVariables
>
