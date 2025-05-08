import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type TenantsQueryVariables = Types.Exact<{ [key: string]: never }>

export type TenantsQuery = {
  __typename?: 'Query'
  authAdminTenants: {
    __typename?: 'AuthAdminTenantsPayload'
    data: Array<{
      __typename?: 'AuthAdminTenant'
      id: string
      availableEnvironments: Array<Types.AuthAdminEnvironment>
      defaultEnvironment: {
        __typename?: 'AuthAdminTenantEnvironment'
        id: string
        name: string
        environment: Types.AuthAdminEnvironment
        displayName: Array<{
          __typename?: 'AuthAdminTranslatedValue'
          locale: string
          value: string
        }>
      }
    }>
  }
}

export const TenantsDocument = gql`
  query Tenants {
    authAdminTenants {
      data {
        id
        availableEnvironments
        defaultEnvironment {
          id
          name
          environment
          displayName {
            locale
            value
          }
        }
      }
    }
  }
`

/**
 * __useTenantsQuery__
 *
 * To run a query within a React component, call `useTenantsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTenantsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTenantsQuery({
 *   variables: {
 *   },
 * });
 */
export function useTenantsQuery(
  baseOptions?: Apollo.QueryHookOptions<TenantsQuery, TenantsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<TenantsQuery, TenantsQueryVariables>(
    TenantsDocument,
    options,
  )
}
export function useTenantsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    TenantsQuery,
    TenantsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<TenantsQuery, TenantsQueryVariables>(
    TenantsDocument,
    options,
  )
}
export type TenantsQueryHookResult = ReturnType<typeof useTenantsQuery>
export type TenantsLazyQueryHookResult = ReturnType<typeof useTenantsLazyQuery>
export type TenantsQueryResult = Apollo.QueryResult<
  TenantsQuery,
  TenantsQueryVariables
>
