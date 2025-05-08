import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import { AuthAdminScopeEnvironmentFragmentFragmentDoc } from './Permission.generated'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type PatchAuthAdminScopeMutationVariables = Types.Exact<{
  input: Types.AuthAdminPatchScopeInput
}>

export type PatchAuthAdminScopeMutation = {
  __typename?: 'Mutation'
  patchAuthAdminScope: Array<{
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
}

export const PatchAuthAdminScopeDocument = gql`
  mutation PatchAuthAdminScope($input: AuthAdminPatchScopeInput!) {
    patchAuthAdminScope(input: $input) {
      ...AuthAdminScopeEnvironmentFragment
    }
  }
  ${AuthAdminScopeEnvironmentFragmentFragmentDoc}
`
export type PatchAuthAdminScopeMutationFn = Apollo.MutationFunction<
  PatchAuthAdminScopeMutation,
  PatchAuthAdminScopeMutationVariables
>

/**
 * __usePatchAuthAdminScopeMutation__
 *
 * To run a mutation, you first call `usePatchAuthAdminScopeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePatchAuthAdminScopeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [patchAuthAdminScopeMutation, { data, loading, error }] = usePatchAuthAdminScopeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePatchAuthAdminScopeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    PatchAuthAdminScopeMutation,
    PatchAuthAdminScopeMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    PatchAuthAdminScopeMutation,
    PatchAuthAdminScopeMutationVariables
  >(PatchAuthAdminScopeDocument, options)
}
export type PatchAuthAdminScopeMutationHookResult = ReturnType<
  typeof usePatchAuthAdminScopeMutation
>
export type PatchAuthAdminScopeMutationResult = Apollo.MutationResult<PatchAuthAdminScopeMutation>
export type PatchAuthAdminScopeMutationOptions = Apollo.BaseMutationOptions<
  PatchAuthAdminScopeMutation,
  PatchAuthAdminScopeMutationVariables
>
