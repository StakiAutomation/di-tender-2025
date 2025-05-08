import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetTenantQueryVariables = Types.Exact<{
  id: Types.Scalars['String']
}>

export type GetTenantQuery = {
  __typename?: 'Query'
  authAdminTenant: {
    __typename?: 'AuthAdminTenant'
    id: string
    availableEnvironments: Array<Types.AuthAdminEnvironment>
    defaultEnvironment: {
      __typename?: 'AuthAdminTenantEnvironment'
      id: string
      displayName: Array<{
        __typename?: 'AuthAdminTranslatedValue'
        locale: string
        value: string
      }>
    }
  }
}

export const GetTenantDocument = gql`
  query GetTenant($id: String!) {
    authAdminTenant(id: $id) {
      id
      availableEnvironments
      defaultEnvironment {
        id
        displayName {
          locale
          value
        }
      }
    }
  }
`

/**
 * __useGetTenantQuery__
 *
 * To run a query within a React component, call `useGetTenantQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTenantQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTenantQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetTenantQuery(
  baseOptions: Apollo.QueryHookOptions<GetTenantQuery, GetTenantQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetTenantQuery, GetTenantQueryVariables>(
    GetTenantDocument,
    options,
  )
}
export function useGetTenantLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetTenantQuery,
    GetTenantQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetTenantQuery, GetTenantQueryVariables>(
    GetTenantDocument,
    options,
  )
}
export type GetTenantQueryHookResult = ReturnType<typeof useGetTenantQuery>
export type GetTenantLazyQueryHookResult = ReturnType<
  typeof useGetTenantLazyQuery
>
export type GetTenantQueryResult = Apollo.QueryResult<
  GetTenantQuery,
  GetTenantQueryVariables
>
