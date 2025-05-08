import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetFinanceStatusDetailsQueryVariables = Types.Exact<{
  input: Types.GetFinancialOverviewInput
}>

export type GetFinanceStatusDetailsQuery = {
  __typename?: 'Query'
  getFinanceStatusDetails?: any | null
}

export const GetFinanceStatusDetailsDocument = gql`
  query GetFinanceStatusDetails($input: GetFinancialOverviewInput!) {
    getFinanceStatusDetails(input: $input)
  }
`

/**
 * __useGetFinanceStatusDetailsQuery__
 *
 * To run a query within a React component, call `useGetFinanceStatusDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFinanceStatusDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFinanceStatusDetailsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetFinanceStatusDetailsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetFinanceStatusDetailsQuery,
    GetFinanceStatusDetailsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetFinanceStatusDetailsQuery,
    GetFinanceStatusDetailsQueryVariables
  >(GetFinanceStatusDetailsDocument, options)
}
export function useGetFinanceStatusDetailsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetFinanceStatusDetailsQuery,
    GetFinanceStatusDetailsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetFinanceStatusDetailsQuery,
    GetFinanceStatusDetailsQueryVariables
  >(GetFinanceStatusDetailsDocument, options)
}
export type GetFinanceStatusDetailsQueryHookResult = ReturnType<
  typeof useGetFinanceStatusDetailsQuery
>
export type GetFinanceStatusDetailsLazyQueryHookResult = ReturnType<
  typeof useGetFinanceStatusDetailsLazyQuery
>
export type GetFinanceStatusDetailsQueryResult = Apollo.QueryResult<
  GetFinanceStatusDetailsQuery,
  GetFinanceStatusDetailsQueryVariables
>
