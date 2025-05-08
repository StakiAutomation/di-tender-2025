import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetClientQueryVariables = Types.Exact<{
  input: Types.AuthAdminClientInput
}>

export type GetClientQuery = {
  __typename?: 'Query'
  authAdminClient?: {
    __typename?: 'AuthAdminClient'
    clientId: string
    clientType: Types.AuthAdminClientType
    availableEnvironments: Array<Types.AuthAdminEnvironment>
    environments: Array<{
      __typename?: 'AuthAdminClientEnvironment'
      id: string
      environment: Types.AuthAdminEnvironment
      clientId: string
      sso: Types.AuthAdminClientSso
      redirectUris: Array<string>
      postLogoutRedirectUris: Array<string>
      absoluteRefreshTokenLifetime: number
      slidingRefreshTokenLifetime: number
      refreshTokenExpiration: Types.AuthAdminRefreshTokenExpiration
      supportedDelegationTypes?: Array<string> | null
      supportsCustomDelegation: boolean
      supportsPersonalRepresentatives: boolean
      supportsLegalGuardians: boolean
      supportsProcuringHolders: boolean
      supportTokenExchange: boolean
      promptDelegations: boolean
      requireApiScopes: boolean
      requireConsent: boolean
      requirePkce: boolean
      singleSession: boolean
      accessTokenLifetime: number
      allowOfflineAccess: boolean
      secrets: Array<{
        __typename?: 'AuthAdminClientSecret'
        secretId: string
        decryptedValue?: string | null
      }>
      displayName: Array<{
        __typename?: 'AuthAdminTranslatedValue'
        locale: string
        value: string
      }>
      customClaims?: Array<{
        __typename?: 'AuthAdminClientClaim'
        type: string
        value: string
      }> | null
      allowedScopes?: Array<{
        __typename?: 'AuthAdminClientAllowedScope'
        name: string
        domainName?: string | null
        displayName: Array<{
          __typename?: 'AuthAdminTranslatedValue'
          locale: string
          value: string
        }>
        description?: Array<{
          __typename?: 'AuthAdminTranslatedValue'
          locale: string
          value: string
        }> | null
      }> | null
    }>
  } | null
}

export const GetClientDocument = gql`
  query GetClient($input: AuthAdminClientInput!) {
    authAdminClient(input: $input) {
      clientId
      clientType
      availableEnvironments
      environments {
        id
        environment
        clientId
        sso
        secrets {
          secretId
          decryptedValue
        }
        displayName {
          locale
          value
        }
        redirectUris
        postLogoutRedirectUris
        absoluteRefreshTokenLifetime
        slidingRefreshTokenLifetime
        refreshTokenExpiration
        supportedDelegationTypes
        supportsCustomDelegation
        supportsPersonalRepresentatives
        supportsLegalGuardians
        supportsProcuringHolders
        supportTokenExchange
        promptDelegations
        requireApiScopes
        requireConsent
        requirePkce
        singleSession
        accessTokenLifetime
        customClaims {
          type
          value
        }
        allowOfflineAccess
        allowedScopes {
          name
          displayName {
            locale
            value
          }
          description {
            locale
            value
          }
          domainName
        }
      }
    }
  }
`

/**
 * __useGetClientQuery__
 *
 * To run a query within a React component, call `useGetClientQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetClientQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetClientQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetClientQuery(
  baseOptions: Apollo.QueryHookOptions<GetClientQuery, GetClientQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetClientQuery, GetClientQueryVariables>(
    GetClientDocument,
    options,
  )
}
export function useGetClientLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetClientQuery,
    GetClientQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetClientQuery, GetClientQueryVariables>(
    GetClientDocument,
    options,
  )
}
export type GetClientQueryHookResult = ReturnType<typeof useGetClientQuery>
export type GetClientLazyQueryHookResult = ReturnType<
  typeof useGetClientLazyQuery
>
export type GetClientQueryResult = Apollo.QueryResult<
  GetClientQuery,
  GetClientQueryVariables
>
