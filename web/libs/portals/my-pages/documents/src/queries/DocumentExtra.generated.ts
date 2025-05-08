import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type DocumentCategoriesQueryVariables = Types.Exact<{
  [key: string]: never
}>

export type DocumentCategoriesQuery = {
  __typename?: 'Query'
  getDocumentCategories?: Array<{
    __typename?: 'DocumentCategory'
    id: string
    name: string
  }> | null
}

export type DocumentTypesQueryVariables = Types.Exact<{ [key: string]: never }>

export type DocumentTypesQuery = {
  __typename?: 'Query'
  getDocumentTypes?: Array<{
    __typename?: 'DocumentType'
    id: string
    name: string
  }> | null
}

export type DocumentSendersQueryVariables = Types.Exact<{
  [key: string]: never
}>

export type DocumentSendersQuery = {
  __typename?: 'Query'
  getDocumentSenders?: Array<{
    __typename?: 'DocumentSender'
    id: string
    name: string
  }> | null
}

export const DocumentCategoriesDocument = gql`
  query documentCategories {
    getDocumentCategories {
      id
      name
    }
  }
`

/**
 * __useDocumentCategoriesQuery__
 *
 * To run a query within a React component, call `useDocumentCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useDocumentCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDocumentCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useDocumentCategoriesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    DocumentCategoriesQuery,
    DocumentCategoriesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    DocumentCategoriesQuery,
    DocumentCategoriesQueryVariables
  >(DocumentCategoriesDocument, options)
}
export function useDocumentCategoriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    DocumentCategoriesQuery,
    DocumentCategoriesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    DocumentCategoriesQuery,
    DocumentCategoriesQueryVariables
  >(DocumentCategoriesDocument, options)
}
export type DocumentCategoriesQueryHookResult = ReturnType<
  typeof useDocumentCategoriesQuery
>
export type DocumentCategoriesLazyQueryHookResult = ReturnType<
  typeof useDocumentCategoriesLazyQuery
>
export type DocumentCategoriesQueryResult = Apollo.QueryResult<
  DocumentCategoriesQuery,
  DocumentCategoriesQueryVariables
>
export const DocumentTypesDocument = gql`
  query documentTypes {
    getDocumentTypes {
      id
      name
    }
  }
`

/**
 * __useDocumentTypesQuery__
 *
 * To run a query within a React component, call `useDocumentTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useDocumentTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDocumentTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useDocumentTypesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    DocumentTypesQuery,
    DocumentTypesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<DocumentTypesQuery, DocumentTypesQueryVariables>(
    DocumentTypesDocument,
    options,
  )
}
export function useDocumentTypesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    DocumentTypesQuery,
    DocumentTypesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<DocumentTypesQuery, DocumentTypesQueryVariables>(
    DocumentTypesDocument,
    options,
  )
}
export type DocumentTypesQueryHookResult = ReturnType<
  typeof useDocumentTypesQuery
>
export type DocumentTypesLazyQueryHookResult = ReturnType<
  typeof useDocumentTypesLazyQuery
>
export type DocumentTypesQueryResult = Apollo.QueryResult<
  DocumentTypesQuery,
  DocumentTypesQueryVariables
>
export const DocumentSendersDocument = gql`
  query documentSenders {
    getDocumentSenders {
      id
      name
    }
  }
`

/**
 * __useDocumentSendersQuery__
 *
 * To run a query within a React component, call `useDocumentSendersQuery` and pass it any options that fit your needs.
 * When your component renders, `useDocumentSendersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDocumentSendersQuery({
 *   variables: {
 *   },
 * });
 */
export function useDocumentSendersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    DocumentSendersQuery,
    DocumentSendersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<DocumentSendersQuery, DocumentSendersQueryVariables>(
    DocumentSendersDocument,
    options,
  )
}
export function useDocumentSendersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    DocumentSendersQuery,
    DocumentSendersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    DocumentSendersQuery,
    DocumentSendersQueryVariables
  >(DocumentSendersDocument, options)
}
export type DocumentSendersQueryHookResult = ReturnType<
  typeof useDocumentSendersQuery
>
export type DocumentSendersLazyQueryHookResult = ReturnType<
  typeof useDocumentSendersLazyQuery
>
export type DocumentSendersQueryResult = Apollo.QueryResult<
  DocumentSendersQuery,
  DocumentSendersQueryVariables
>
