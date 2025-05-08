import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetDocumentProvidedTypesQueryVariables = Types.Exact<{
  [key: string]: never
}>

export type GetDocumentProvidedTypesQuery = {
  __typename?: 'Query'
  documentProviderProvidedTypes: Array<{
    __typename?: 'DocumentProviderType'
    id: number
    name?: string | null
    active?: boolean | null
  }>
}

export type GetDocumentProvidedCategoriesQueryVariables = Types.Exact<{
  [key: string]: never
}>

export type GetDocumentProvidedCategoriesQuery = {
  __typename?: 'Query'
  documentProviderProvidedCategories: Array<{
    __typename?: 'DocumentProviderCategory'
    id: number
    name?: string | null
    active?: boolean | null
  }>
}

export const GetDocumentProvidedTypesDocument = gql`
  query GetDocumentProvidedTypes {
    documentProviderProvidedTypes {
      id
      name
      active
    }
  }
`

/**
 * __useGetDocumentProvidedTypesQuery__
 *
 * To run a query within a React component, call `useGetDocumentProvidedTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDocumentProvidedTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDocumentProvidedTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDocumentProvidedTypesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetDocumentProvidedTypesQuery,
    GetDocumentProvidedTypesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetDocumentProvidedTypesQuery,
    GetDocumentProvidedTypesQueryVariables
  >(GetDocumentProvidedTypesDocument, options)
}
export function useGetDocumentProvidedTypesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetDocumentProvidedTypesQuery,
    GetDocumentProvidedTypesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetDocumentProvidedTypesQuery,
    GetDocumentProvidedTypesQueryVariables
  >(GetDocumentProvidedTypesDocument, options)
}
export type GetDocumentProvidedTypesQueryHookResult = ReturnType<
  typeof useGetDocumentProvidedTypesQuery
>
export type GetDocumentProvidedTypesLazyQueryHookResult = ReturnType<
  typeof useGetDocumentProvidedTypesLazyQuery
>
export type GetDocumentProvidedTypesQueryResult = Apollo.QueryResult<
  GetDocumentProvidedTypesQuery,
  GetDocumentProvidedTypesQueryVariables
>
export const GetDocumentProvidedCategoriesDocument = gql`
  query GetDocumentProvidedCategories {
    documentProviderProvidedCategories {
      id
      name
      active
    }
  }
`

/**
 * __useGetDocumentProvidedCategoriesQuery__
 *
 * To run a query within a React component, call `useGetDocumentProvidedCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDocumentProvidedCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDocumentProvidedCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDocumentProvidedCategoriesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetDocumentProvidedCategoriesQuery,
    GetDocumentProvidedCategoriesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetDocumentProvidedCategoriesQuery,
    GetDocumentProvidedCategoriesQueryVariables
  >(GetDocumentProvidedCategoriesDocument, options)
}
export function useGetDocumentProvidedCategoriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetDocumentProvidedCategoriesQuery,
    GetDocumentProvidedCategoriesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetDocumentProvidedCategoriesQuery,
    GetDocumentProvidedCategoriesQueryVariables
  >(GetDocumentProvidedCategoriesDocument, options)
}
export type GetDocumentProvidedCategoriesQueryHookResult = ReturnType<
  typeof useGetDocumentProvidedCategoriesQuery
>
export type GetDocumentProvidedCategoriesLazyQueryHookResult = ReturnType<
  typeof useGetDocumentProvidedCategoriesLazyQuery
>
export type GetDocumentProvidedCategoriesQueryResult = Apollo.QueryResult<
  GetDocumentProvidedCategoriesQuery,
  GetDocumentProvidedCategoriesQueryVariables
>
