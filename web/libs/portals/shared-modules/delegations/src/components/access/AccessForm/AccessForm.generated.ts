import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type UpdateAuthDelegationMutationVariables = Types.Exact<{
  input: Types.UpdateAuthDelegationInput
}>

export type UpdateAuthDelegationMutation = {
  __typename?: 'Mutation'
  updateAuthDelegation:
    | {
        __typename?: 'AuthCustomDelegation'
        id?: string | null
        scopes: Array<{
          __typename?: 'AuthDelegationScope'
          id: string
          name: string
          validTo?: string | null
          displayName: string
        }>
        from:
          | { __typename?: 'IdentityCompany'; nationalId: string }
          | { __typename?: 'IdentityPerson'; nationalId: string }
      }
    | {
        __typename?: 'AuthGeneralMandate'
        id?: string | null
        from:
          | { __typename?: 'IdentityCompany'; nationalId: string }
          | { __typename?: 'IdentityPerson'; nationalId: string }
      }
    | {
        __typename?: 'AuthLegalGuardianDelegation'
        id?: string | null
        from:
          | { __typename?: 'IdentityCompany'; nationalId: string }
          | { __typename?: 'IdentityPerson'; nationalId: string }
      }
    | {
        __typename?: 'AuthLegalGuardianMinorDelegation'
        id?: string | null
        from:
          | { __typename?: 'IdentityCompany'; nationalId: string }
          | { __typename?: 'IdentityPerson'; nationalId: string }
      }
    | {
        __typename?: 'AuthLegalRepresentativeDelegation'
        id?: string | null
        from:
          | { __typename?: 'IdentityCompany'; nationalId: string }
          | { __typename?: 'IdentityPerson'; nationalId: string }
      }
    | {
        __typename?: 'AuthPersonalRepresentativeDelegation'
        id?: string | null
        from:
          | { __typename?: 'IdentityCompany'; nationalId: string }
          | { __typename?: 'IdentityPerson'; nationalId: string }
      }
    | {
        __typename?: 'AuthProcuringHolderDelegation'
        id?: string | null
        from:
          | { __typename?: 'IdentityCompany'; nationalId: string }
          | { __typename?: 'IdentityPerson'; nationalId: string }
      }
}

export const UpdateAuthDelegationDocument = gql`
  mutation UpdateAuthDelegation($input: UpdateAuthDelegationInput!) {
    updateAuthDelegation(input: $input) {
      id
      from {
        nationalId
      }
      ... on AuthCustomDelegation {
        scopes {
          id
          name
          validTo
          displayName
        }
      }
    }
  }
`
export type UpdateAuthDelegationMutationFn = Apollo.MutationFunction<
  UpdateAuthDelegationMutation,
  UpdateAuthDelegationMutationVariables
>

/**
 * __useUpdateAuthDelegationMutation__
 *
 * To run a mutation, you first call `useUpdateAuthDelegationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAuthDelegationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAuthDelegationMutation, { data, loading, error }] = useUpdateAuthDelegationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateAuthDelegationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateAuthDelegationMutation,
    UpdateAuthDelegationMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    UpdateAuthDelegationMutation,
    UpdateAuthDelegationMutationVariables
  >(UpdateAuthDelegationDocument, options)
}
export type UpdateAuthDelegationMutationHookResult = ReturnType<
  typeof useUpdateAuthDelegationMutation
>
export type UpdateAuthDelegationMutationResult = Apollo.MutationResult<UpdateAuthDelegationMutation>
export type UpdateAuthDelegationMutationOptions = Apollo.BaseMutationOptions<
  UpdateAuthDelegationMutation,
  UpdateAuthDelegationMutationVariables
>
