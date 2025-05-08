import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type AuthAdminScopeEnvironmentFragmentFragment = {
  __typename?: 'AuthAdminScopeEnvironment'
  environment: Types.AuthAdminEnvironment
  name: string
  isAccessControlled: boolean
  grantToAuthenticatedUser: boolean
  grantToProcuringHolders: boolean
  grantToLegalGuardians: boolean
  allowExplicitDelegationGrant: boolean
  grantToPersonalRepresentatives: boolean
  supportedDelegationTypes: Array<string>
  automaticDelegationGrant: boolean
  description: Array<{
    __typename?: 'AuthAdminTranslatedValue'
    value: string
    locale: string
  }>
  displayName: Array<{
    __typename?: 'AuthAdminTranslatedValue'
    value: string
    locale: string
  }>
}

export type AuthAdminScopeQueryVariables = Types.Exact<{
  input: Types.ScopeInput
}>

export type AuthAdminScopeQuery = {
  __typename?: 'Query'
  authAdminScope: {
    __typename?: 'AuthAdminScope'
    scopeName: string
    availableEnvironments: Array<Types.AuthAdminEnvironment>
    environments: Array<{
      __typename?: 'AuthAdminScopeEnvironment'
      environment: Types.AuthAdminEnvironment
      name: string
      isAccessControlled: boolean
      grantToAuthenticatedUser: boolean
      grantToProcuringHolders: boolean
      grantToLegalGuardians: boolean
      allowExplicitDelegationGrant: boolean
      grantToPersonalRepresentatives: boolean
      supportedDelegationTypes: Array<string>
      automaticDelegationGrant: boolean
      description: Array<{
        __typename?: 'AuthAdminTranslatedValue'
        value: string
        locale: string
      }>
      displayName: Array<{
        __typename?: 'AuthAdminTranslatedValue'
        value: string
        locale: string
      }>
    }>
    defaultEnvironment: {
      __typename?: 'AuthAdminScopeEnvironment'
      environment: Types.AuthAdminEnvironment
      name: string
    }
  }
}

export const AuthAdminScopeEnvironmentFragmentFragmentDoc = gql`
  fragment AuthAdminScopeEnvironmentFragment on AuthAdminScopeEnvironment {
    environment
    name
    description {
      value
      locale
    }
    displayName {
      value
      locale
    }
    isAccessControlled
    grantToAuthenticatedUser
    grantToProcuringHolders
    grantToLegalGuardians
    allowExplicitDelegationGrant
    grantToPersonalRepresentatives
    supportedDelegationTypes
    automaticDelegationGrant
  }
`
export const AuthAdminScopeDocument = gql`
  query AuthAdminScope($input: ScopeInput!) {
    authAdminScope(input: $input) {
      scopeName
      environments {
        ...AuthAdminScopeEnvironmentFragment
      }
      defaultEnvironment {
        environment
        name
      }
      availableEnvironments
    }
  }
  ${AuthAdminScopeEnvironmentFragmentFragmentDoc}
`

/**
 * __useAuthAdminScopeQuery__
 *
 * To run a query within a React component, call `useAuthAdminScopeQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthAdminScopeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthAdminScopeQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAuthAdminScopeQuery(
  baseOptions: Apollo.QueryHookOptions<
    AuthAdminScopeQuery,
    AuthAdminScopeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AuthAdminScopeQuery, AuthAdminScopeQueryVariables>(
    AuthAdminScopeDocument,
    options,
  )
}
export function useAuthAdminScopeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AuthAdminScopeQuery,
    AuthAdminScopeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AuthAdminScopeQuery, AuthAdminScopeQueryVariables>(
    AuthAdminScopeDocument,
    options,
  )
}
export type AuthAdminScopeQueryHookResult = ReturnType<
  typeof useAuthAdminScopeQuery
>
export type AuthAdminScopeLazyQueryHookResult = ReturnType<
  typeof useAuthAdminScopeLazyQuery
>
export type AuthAdminScopeQueryResult = Apollo.QueryResult<
  AuthAdminScopeQuery,
  AuthAdminScopeQueryVariables
>
