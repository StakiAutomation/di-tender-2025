import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type IndictmentPoliceCaseFilesQueryVariables = Types.Exact<{
  input: Types.PoliceCaseFilesQueryInput
}>

export type IndictmentPoliceCaseFilesQuery = {
  __typename?: 'Query'
  policeCaseFiles?: Array<{
    __typename?: 'PoliceCaseFile'
    id: string
    name: string
    policeCaseNumber: string
    chapter?: number | null
    displayDate?: string | null
    type?: string | null
  }> | null
}

export const IndictmentPoliceCaseFilesDocument = gql`
  query IndictmentPoliceCaseFiles($input: PoliceCaseFilesQueryInput!) {
    policeCaseFiles(input: $input) {
      id
      name
      policeCaseNumber
      chapter
      displayDate
      type
    }
  }
`

/**
 * __useIndictmentPoliceCaseFilesQuery__
 *
 * To run a query within a React component, call `useIndictmentPoliceCaseFilesQuery` and pass it any options that fit your needs.
 * When your component renders, `useIndictmentPoliceCaseFilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIndictmentPoliceCaseFilesQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useIndictmentPoliceCaseFilesQuery(
  baseOptions: Apollo.QueryHookOptions<
    IndictmentPoliceCaseFilesQuery,
    IndictmentPoliceCaseFilesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    IndictmentPoliceCaseFilesQuery,
    IndictmentPoliceCaseFilesQueryVariables
  >(IndictmentPoliceCaseFilesDocument, options)
}
export function useIndictmentPoliceCaseFilesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    IndictmentPoliceCaseFilesQuery,
    IndictmentPoliceCaseFilesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    IndictmentPoliceCaseFilesQuery,
    IndictmentPoliceCaseFilesQueryVariables
  >(IndictmentPoliceCaseFilesDocument, options)
}
export type IndictmentPoliceCaseFilesQueryHookResult = ReturnType<
  typeof useIndictmentPoliceCaseFilesQuery
>
export type IndictmentPoliceCaseFilesLazyQueryHookResult = ReturnType<
  typeof useIndictmentPoliceCaseFilesLazyQuery
>
export type IndictmentPoliceCaseFilesQueryResult = Apollo.QueryResult<
  IndictmentPoliceCaseFilesQuery,
  IndictmentPoliceCaseFilesQueryVariables
>
