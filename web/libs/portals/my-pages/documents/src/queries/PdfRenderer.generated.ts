import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type PdfRendererQueryVariables = Types.Exact<{
  input: Types.DocumentPdfRendererInput
}>

export type PdfRendererQuery = {
  __typename?: 'Query'
  documentV2PdfRenderer?: {
    __typename?: 'DocumentPdfRenderer'
    id: string
    success: boolean
  } | null
}

export const PdfRendererDocument = gql`
  query PdfRenderer($input: DocumentPdfRendererInput!) {
    documentV2PdfRenderer(input: $input) {
      id
      success
    }
  }
`

/**
 * __usePdfRendererQuery__
 *
 * To run a query within a React component, call `usePdfRendererQuery` and pass it any options that fit your needs.
 * When your component renders, `usePdfRendererQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePdfRendererQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePdfRendererQuery(
  baseOptions: Apollo.QueryHookOptions<
    PdfRendererQuery,
    PdfRendererQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PdfRendererQuery, PdfRendererQueryVariables>(
    PdfRendererDocument,
    options,
  )
}
export function usePdfRendererLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PdfRendererQuery,
    PdfRendererQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PdfRendererQuery, PdfRendererQueryVariables>(
    PdfRendererDocument,
    options,
  )
}
export type PdfRendererQueryHookResult = ReturnType<typeof usePdfRendererQuery>
export type PdfRendererLazyQueryHookResult = ReturnType<
  typeof usePdfRendererLazyQuery
>
export type PdfRendererQueryResult = Apollo.QueryResult<
  PdfRendererQuery,
  PdfRendererQueryVariables
>
