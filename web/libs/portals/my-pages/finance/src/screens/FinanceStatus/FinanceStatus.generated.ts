import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetFinanceStatusQueryVariables = Types.Exact<{
  [key: string]: never
}>

export type GetFinanceStatusQuery = {
  __typename?: 'Query'
  getFinanceStatus: any
}

export type GetDebtStatusQueryVariables = Types.Exact<{ [key: string]: never }>

export type GetDebtStatusQuery = {
  __typename?: 'Query'
  getDebtStatus: {
    __typename?: 'FinanceDebtStatusModel'
    myDebtStatus: Array<{
      __typename?: 'FinanceDebtStatus'
      approvedSchedule: number
      possibleToSchedule: number
    }>
  }
}

export const GetFinanceStatusDocument = gql`
  query GetFinanceStatus {
    getFinanceStatus
  }
`

/**
 * __useGetFinanceStatusQuery__
 *
 * To run a query within a React component, call `useGetFinanceStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFinanceStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFinanceStatusQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFinanceStatusQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetFinanceStatusQuery,
    GetFinanceStatusQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetFinanceStatusQuery, GetFinanceStatusQueryVariables>(
    GetFinanceStatusDocument,
    options,
  )
}
export function useGetFinanceStatusLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetFinanceStatusQuery,
    GetFinanceStatusQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetFinanceStatusQuery,
    GetFinanceStatusQueryVariables
  >(GetFinanceStatusDocument, options)
}
export type GetFinanceStatusQueryHookResult = ReturnType<
  typeof useGetFinanceStatusQuery
>
export type GetFinanceStatusLazyQueryHookResult = ReturnType<
  typeof useGetFinanceStatusLazyQuery
>
export type GetFinanceStatusQueryResult = Apollo.QueryResult<
  GetFinanceStatusQuery,
  GetFinanceStatusQueryVariables
>
export const GetDebtStatusDocument = gql`
  query GetDebtStatus {
    getDebtStatus {
      myDebtStatus {
        approvedSchedule
        possibleToSchedule
      }
    }
  }
`

/**
 * __useGetDebtStatusQuery__
 *
 * To run a query within a React component, call `useGetDebtStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDebtStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDebtStatusQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDebtStatusQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetDebtStatusQuery,
    GetDebtStatusQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetDebtStatusQuery, GetDebtStatusQueryVariables>(
    GetDebtStatusDocument,
    options,
  )
}
export function useGetDebtStatusLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetDebtStatusQuery,
    GetDebtStatusQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetDebtStatusQuery, GetDebtStatusQueryVariables>(
    GetDebtStatusDocument,
    options,
  )
}
export type GetDebtStatusQueryHookResult = ReturnType<
  typeof useGetDebtStatusQuery
>
export type GetDebtStatusLazyQueryHookResult = ReturnType<
  typeof useGetDebtStatusLazyQuery
>
export type GetDebtStatusQueryResult = Apollo.QueryResult<
  GetDebtStatusQuery,
  GetDebtStatusQueryVariables
>
