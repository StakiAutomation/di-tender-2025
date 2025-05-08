import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type PoliceCaseFilesQueryVariables = Types.Exact<{
  input: Types.PoliceCaseFilesQueryInput
}>

export type PoliceCaseFilesQuery = {
  __typename?: 'Query'
  policeCaseFiles?: Array<{
    __typename?: 'PoliceCaseFile'
    id: string
    name: string
    policeCaseNumber: string
    displayDate?: string | null
  }> | null
}

export const PoliceCaseFilesDocument = gql`
  query PoliceCaseFiles($input: PoliceCaseFilesQueryInput!) {
    policeCaseFiles(input: $input) {
      id
      name
      policeCaseNumber
      displayDate
    }
  }
`

/**
 * __usePoliceCaseFilesQuery__
 *
 * To run a query within a React component, call `usePoliceCaseFilesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePoliceCaseFilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePoliceCaseFilesQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePoliceCaseFilesQuery(
  baseOptions: Apollo.QueryHookOptions<
    PoliceCaseFilesQuery,
    PoliceCaseFilesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PoliceCaseFilesQuery, PoliceCaseFilesQueryVariables>(
    PoliceCaseFilesDocument,
    options,
  )
}
export function usePoliceCaseFilesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PoliceCaseFilesQuery,
    PoliceCaseFilesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    PoliceCaseFilesQuery,
    PoliceCaseFilesQueryVariables
  >(PoliceCaseFilesDocument, options)
}
export type PoliceCaseFilesQueryHookResult = ReturnType<
  typeof usePoliceCaseFilesQuery
>
export type PoliceCaseFilesLazyQueryHookResult = ReturnType<
  typeof usePoliceCaseFilesLazyQuery
>
export type PoliceCaseFilesQueryResult = Apollo.QueryResult<
  PoliceCaseFilesQuery,
  PoliceCaseFilesQueryVariables
>
