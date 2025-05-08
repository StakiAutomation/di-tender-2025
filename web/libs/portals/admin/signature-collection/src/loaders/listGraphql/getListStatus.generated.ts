import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type ListStatusQueryVariables = Types.Exact<{
  input: Types.SignatureCollectionListIdInput
}>

export type ListStatusQuery = {
  __typename?: 'Query'
  signatureCollectionAdminListStatus: {
    __typename?: 'SignatureCollectionListStatus'
    status: Types.ListStatus
  }
}

export const ListStatusDocument = gql`
  query ListStatus($input: SignatureCollectionListIdInput!) {
    signatureCollectionAdminListStatus(input: $input) {
      status
    }
  }
`

/**
 * __useListStatusQuery__
 *
 * To run a query within a React component, call `useListStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useListStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListStatusQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useListStatusQuery(
  baseOptions: Apollo.QueryHookOptions<
    ListStatusQuery,
    ListStatusQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ListStatusQuery, ListStatusQueryVariables>(
    ListStatusDocument,
    options,
  )
}
export function useListStatusLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ListStatusQuery,
    ListStatusQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ListStatusQuery, ListStatusQueryVariables>(
    ListStatusDocument,
    options,
  )
}
export type ListStatusQueryHookResult = ReturnType<typeof useListStatusQuery>
export type ListStatusLazyQueryHookResult = ReturnType<
  typeof useListStatusLazyQuery
>
export type ListStatusQueryResult = Apollo.QueryResult<
  ListStatusQuery,
  ListStatusQueryVariables
>
