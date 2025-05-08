import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetOrganizationsQueryVariables = Types.Exact<{
  [key: string]: never
}>

export type GetOrganizationsQuery = {
  __typename?: 'Query'
  getOrganizations: {
    __typename?: 'Organizations'
    items: Array<{ __typename?: 'Organization'; title: string; slug: string }>
  }
}

export const GetOrganizationsDocument = gql`
  query GetOrganizations {
    getOrganizations {
      items {
        title
        slug
      }
    }
  }
`

/**
 * __useGetOrganizationsQuery__
 *
 * To run a query within a React component, call `useGetOrganizationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrganizationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrganizationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetOrganizationsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetOrganizationsQuery,
    GetOrganizationsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetOrganizationsQuery, GetOrganizationsQueryVariables>(
    GetOrganizationsDocument,
    options,
  )
}
export function useGetOrganizationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetOrganizationsQuery,
    GetOrganizationsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetOrganizationsQuery,
    GetOrganizationsQueryVariables
  >(GetOrganizationsDocument, options)
}
export type GetOrganizationsQueryHookResult = ReturnType<
  typeof useGetOrganizationsQuery
>
export type GetOrganizationsLazyQueryHookResult = ReturnType<
  typeof useGetOrganizationsLazyQuery
>
export type GetOrganizationsQueryResult = Apollo.QueryResult<
  GetOrganizationsQuery,
  GetOrganizationsQueryVariables
>
