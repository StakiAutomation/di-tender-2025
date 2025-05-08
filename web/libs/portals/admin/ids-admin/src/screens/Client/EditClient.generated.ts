import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type UpdateClientMutationVariables = Types.Exact<{
  input: Types.AuthAdminPatchClientInput
}>

export type UpdateClientMutation = {
  __typename?: 'Mutation'
  patchAuthAdminClient: Array<{
    __typename?: 'AuthAdminClientEnvironment'
    environment: Types.AuthAdminEnvironment
    clientId: string
    redirectUris: Array<string>
    postLogoutRedirectUris: Array<string>
    absoluteRefreshTokenLifetime: number
    slidingRefreshTokenLifetime: number
    refreshTokenExpiration: Types.AuthAdminRefreshTokenExpiration
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
    sso: Types.AuthAdminClientSso
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
  }>
}

export const UpdateClientDocument = gql`
  mutation UpdateClient($input: AuthAdminPatchClientInput!) {
    patchAuthAdminClient(input: $input) {
      environment
      clientId
      displayName {
        locale
        value
      }
      redirectUris
      postLogoutRedirectUris
      absoluteRefreshTokenLifetime
      slidingRefreshTokenLifetime
      refreshTokenExpiration
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
      allowOfflineAccess
      sso
      customClaims {
        type
        value
      }
    }
  }
`
export type UpdateClientMutationFn = Apollo.MutationFunction<
  UpdateClientMutation,
  UpdateClientMutationVariables
>

/**
 * __useUpdateClientMutation__
 *
 * To run a mutation, you first call `useUpdateClientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateClientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateClientMutation, { data, loading, error }] = useUpdateClientMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateClientMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateClientMutation,
    UpdateClientMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    UpdateClientMutation,
    UpdateClientMutationVariables
  >(UpdateClientDocument, options)
}
export type UpdateClientMutationHookResult = ReturnType<
  typeof useUpdateClientMutation
>
export type UpdateClientMutationResult = Apollo.MutationResult<UpdateClientMutation>
export type UpdateClientMutationOptions = Apollo.BaseMutationOptions<
  UpdateClientMutation,
  UpdateClientMutationVariables
>
