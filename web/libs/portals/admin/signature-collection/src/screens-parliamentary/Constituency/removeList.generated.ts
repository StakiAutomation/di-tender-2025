import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type SignatureCollectionAdminRemoveListMutationVariables = Types.Exact<{
  input: Types.SignatureCollectionListIdInput
}>

export type SignatureCollectionAdminRemoveListMutation = {
  __typename?: 'Mutation'
  signatureCollectionAdminRemoveList: {
    __typename?: 'SignatureCollectionSuccess'
    reasons?: Array<string> | null
    success: boolean
  }
}

export const SignatureCollectionAdminRemoveListDocument = gql`
  mutation SignatureCollectionAdminRemoveList(
    $input: SignatureCollectionListIdInput!
  ) {
    signatureCollectionAdminRemoveList(input: $input) {
      reasons
      success
    }
  }
`
export type SignatureCollectionAdminRemoveListMutationFn = Apollo.MutationFunction<
  SignatureCollectionAdminRemoveListMutation,
  SignatureCollectionAdminRemoveListMutationVariables
>

/**
 * __useSignatureCollectionAdminRemoveListMutation__
 *
 * To run a mutation, you first call `useSignatureCollectionAdminRemoveListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignatureCollectionAdminRemoveListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signatureCollectionAdminRemoveListMutation, { data, loading, error }] = useSignatureCollectionAdminRemoveListMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignatureCollectionAdminRemoveListMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignatureCollectionAdminRemoveListMutation,
    SignatureCollectionAdminRemoveListMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    SignatureCollectionAdminRemoveListMutation,
    SignatureCollectionAdminRemoveListMutationVariables
  >(SignatureCollectionAdminRemoveListDocument, options)
}
export type SignatureCollectionAdminRemoveListMutationHookResult = ReturnType<
  typeof useSignatureCollectionAdminRemoveListMutation
>
export type SignatureCollectionAdminRemoveListMutationResult = Apollo.MutationResult<SignatureCollectionAdminRemoveListMutation>
export type SignatureCollectionAdminRemoveListMutationOptions = Apollo.BaseMutationOptions<
  SignatureCollectionAdminRemoveListMutation,
  SignatureCollectionAdminRemoveListMutationVariables
>
