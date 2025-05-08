import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type UnsignAdminMutationVariables = Types.Exact<{
  input: Types.SignatureCollectionSignatureIdInput
}>

export type UnsignAdminMutation = {
  __typename?: 'Mutation'
  signatureCollectionAdminUnsign: {
    __typename?: 'SignatureCollectionSuccess'
    success: boolean
    reasons?: Array<string> | null
  }
}

export const UnsignAdminDocument = gql`
  mutation UnsignAdmin($input: SignatureCollectionSignatureIdInput!) {
    signatureCollectionAdminUnsign(input: $input) {
      success
      reasons
    }
  }
`
export type UnsignAdminMutationFn = Apollo.MutationFunction<
  UnsignAdminMutation,
  UnsignAdminMutationVariables
>

/**
 * __useUnsignAdminMutation__
 *
 * To run a mutation, you first call `useUnsignAdminMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnsignAdminMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unsignAdminMutation, { data, loading, error }] = useUnsignAdminMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUnsignAdminMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UnsignAdminMutation,
    UnsignAdminMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UnsignAdminMutation, UnsignAdminMutationVariables>(
    UnsignAdminDocument,
    options,
  )
}
export type UnsignAdminMutationHookResult = ReturnType<
  typeof useUnsignAdminMutation
>
export type UnsignAdminMutationResult = Apollo.MutationResult<UnsignAdminMutation>
export type UnsignAdminMutationOptions = Apollo.BaseMutationOptions<
  UnsignAdminMutation,
  UnsignAdminMutationVariables
>
