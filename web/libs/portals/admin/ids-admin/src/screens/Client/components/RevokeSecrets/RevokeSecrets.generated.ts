import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type RevokeSecretsMutationVariables = Types.Exact<{
  input: Types.AuthAdminRevokeSecretsInput
}>

export type RevokeSecretsMutation = {
  __typename?: 'Mutation'
  revokeAuthAdminClientSecrets: boolean
}

export const RevokeSecretsDocument = gql`
  mutation RevokeSecrets($input: AuthAdminRevokeSecretsInput!) {
    revokeAuthAdminClientSecrets(input: $input)
  }
`
export type RevokeSecretsMutationFn = Apollo.MutationFunction<
  RevokeSecretsMutation,
  RevokeSecretsMutationVariables
>

/**
 * __useRevokeSecretsMutation__
 *
 * To run a mutation, you first call `useRevokeSecretsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRevokeSecretsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [revokeSecretsMutation, { data, loading, error }] = useRevokeSecretsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRevokeSecretsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RevokeSecretsMutation,
    RevokeSecretsMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    RevokeSecretsMutation,
    RevokeSecretsMutationVariables
  >(RevokeSecretsDocument, options)
}
export type RevokeSecretsMutationHookResult = ReturnType<
  typeof useRevokeSecretsMutation
>
export type RevokeSecretsMutationResult = Apollo.MutationResult<RevokeSecretsMutation>
export type RevokeSecretsMutationOptions = Apollo.BaseMutationOptions<
  RevokeSecretsMutation,
  RevokeSecretsMutationVariables
>
