import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type RotateSecretMutationVariables = Types.Exact<{
  input: Types.AuthAdminRotateSecretInput
}>

export type RotateSecretMutation = {
  __typename?: 'Mutation'
  rotateAuthAdminClientSecret: {
    __typename?: 'AuthAdminClientSecret'
    decryptedValue?: string | null
  }
}

export const RotateSecretDocument = gql`
  mutation RotateSecret($input: AuthAdminRotateSecretInput!) {
    rotateAuthAdminClientSecret(input: $input) {
      decryptedValue
    }
  }
`
export type RotateSecretMutationFn = Apollo.MutationFunction<
  RotateSecretMutation,
  RotateSecretMutationVariables
>

/**
 * __useRotateSecretMutation__
 *
 * To run a mutation, you first call `useRotateSecretMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRotateSecretMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rotateSecretMutation, { data, loading, error }] = useRotateSecretMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRotateSecretMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RotateSecretMutation,
    RotateSecretMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    RotateSecretMutation,
    RotateSecretMutationVariables
  >(RotateSecretDocument, options)
}
export type RotateSecretMutationHookResult = ReturnType<
  typeof useRotateSecretMutation
>
export type RotateSecretMutationResult = Apollo.MutationResult<RotateSecretMutation>
export type RotateSecretMutationOptions = Apollo.BaseMutationOptions<
  RotateSecretMutation,
  RotateSecretMutationVariables
>
