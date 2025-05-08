import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type PoliceCaseInfoQueryVariables = Types.Exact<{
  input: Types.PoliceCaseInfoQueryInput
}>

export type PoliceCaseInfoQuery = {
  __typename?: 'Query'
  policeCaseInfo?: Array<{
    __typename?: 'PoliceCaseInfo'
    policeCaseNumber: string
    place?: string | null
    date?: string | null
    licencePlate?: string | null
  }> | null
}

export const PoliceCaseInfoDocument = gql`
  query PoliceCaseInfo($input: PoliceCaseInfoQueryInput!) {
    policeCaseInfo(input: $input) {
      policeCaseNumber
      place
      date
      licencePlate
    }
  }
`

/**
 * __usePoliceCaseInfoQuery__
 *
 * To run a query within a React component, call `usePoliceCaseInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `usePoliceCaseInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePoliceCaseInfoQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePoliceCaseInfoQuery(
  baseOptions: Apollo.QueryHookOptions<
    PoliceCaseInfoQuery,
    PoliceCaseInfoQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PoliceCaseInfoQuery, PoliceCaseInfoQueryVariables>(
    PoliceCaseInfoDocument,
    options,
  )
}
export function usePoliceCaseInfoLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PoliceCaseInfoQuery,
    PoliceCaseInfoQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PoliceCaseInfoQuery, PoliceCaseInfoQueryVariables>(
    PoliceCaseInfoDocument,
    options,
  )
}
export type PoliceCaseInfoQueryHookResult = ReturnType<
  typeof usePoliceCaseInfoQuery
>
export type PoliceCaseInfoLazyQueryHookResult = ReturnType<
  typeof usePoliceCaseInfoLazyQuery
>
export type PoliceCaseInfoQueryResult = Apollo.QueryResult<
  PoliceCaseInfoQuery,
  PoliceCaseInfoQueryVariables
>
