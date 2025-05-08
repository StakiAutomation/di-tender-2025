import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetPreviousPaymentsQueryVariables = Types.Exact<{
  [key: string]: never
}>

export type GetPreviousPaymentsQuery = {
  __typename?: 'Query'
  socialInsurancePayments?: {
    __typename?: 'SocialInsurancePayments'
    nextPayment?: number | null
    previousPayment?: number | null
  } | null
}

export const GetPreviousPaymentsDocument = gql`
  query getPreviousPayments {
    socialInsurancePayments {
      nextPayment
      previousPayment
    }
  }
`

/**
 * __useGetPreviousPaymentsQuery__
 *
 * To run a query within a React component, call `useGetPreviousPaymentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPreviousPaymentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPreviousPaymentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPreviousPaymentsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetPreviousPaymentsQuery,
    GetPreviousPaymentsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetPreviousPaymentsQuery,
    GetPreviousPaymentsQueryVariables
  >(GetPreviousPaymentsDocument, options)
}
export function useGetPreviousPaymentsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPreviousPaymentsQuery,
    GetPreviousPaymentsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetPreviousPaymentsQuery,
    GetPreviousPaymentsQueryVariables
  >(GetPreviousPaymentsDocument, options)
}
export type GetPreviousPaymentsQueryHookResult = ReturnType<
  typeof useGetPreviousPaymentsQuery
>
export type GetPreviousPaymentsLazyQueryHookResult = ReturnType<
  typeof useGetPreviousPaymentsLazyQuery
>
export type GetPreviousPaymentsQueryResult = Apollo.QueryResult<
  GetPreviousPaymentsQuery,
  GetPreviousPaymentsQueryVariables
>
