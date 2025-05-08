import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type AuthAdminScopesQueryVariables = Types.Exact<{
  input: Types.ScopesInput
}>

export type AuthAdminScopesQuery = {
  __typename?: 'Query'
  authAdminScopes: {
    __typename?: 'AuthAdminScopesPayload'
    data: Array<{
      __typename?: 'AuthAdminScope'
      scopeName: string
      availableEnvironments: Array<Types.AuthAdminEnvironment>
      environments: Array<{
        __typename?: 'AuthAdminScopeEnvironment'
        environment: Types.AuthAdminEnvironment
        displayName: Array<{
          __typename?: 'AuthAdminTranslatedValue'
          locale: string
          value: string
        }>
        description: Array<{
          __typename?: 'AuthAdminTranslatedValue'
          locale: string
          value: string
        }>
      }>
      defaultEnvironment: {
        __typename?: 'AuthAdminScopeEnvironment'
        name: string
        environment: Types.AuthAdminEnvironment
      }
    }>
  }
}

export const AuthAdminScopesDocument = gql`
  query AuthAdminScopes($input: ScopesInput!) {
    authAdminScopes(input: $input) {
      data {
        scopeName
        environments {
          environment
          displayName {
            locale
            value
          }
          description {
            locale
            value
          }
        }
        defaultEnvironment {
          name
          environment
        }
        availableEnvironments
      }
    }
  }
`

/**
 * __useAuthAdminScopesQuery__
 *
 * To run a query within a React component, call `useAuthAdminScopesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthAdminScopesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthAdminScopesQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAuthAdminScopesQuery(
  baseOptions: Apollo.QueryHookOptions<
    AuthAdminScopesQuery,
    AuthAdminScopesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AuthAdminScopesQuery, AuthAdminScopesQueryVariables>(
    AuthAdminScopesDocument,
    options,
  )
}
export function useAuthAdminScopesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AuthAdminScopesQuery,
    AuthAdminScopesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    AuthAdminScopesQuery,
    AuthAdminScopesQueryVariables
  >(AuthAdminScopesDocument, options)
}
export type AuthAdminScopesQueryHookResult = ReturnType<
  typeof useAuthAdminScopesQuery
>
export type AuthAdminScopesLazyQueryHookResult = ReturnType<
  typeof useAuthAdminScopesLazyQuery
>
export type AuthAdminScopesQueryResult = Apollo.QueryResult<
  AuthAdminScopesQuery,
  AuthAdminScopesQueryVariables
>
