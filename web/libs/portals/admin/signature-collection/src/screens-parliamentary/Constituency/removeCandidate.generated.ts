import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type SignatureCollectionAdminRemoveCandidateMutationVariables = Types.Exact<{
  input: Types.SignatureCollectionCandidateIdInput
}>

export type SignatureCollectionAdminRemoveCandidateMutation = {
  __typename?: 'Mutation'
  signatureCollectionAdminRemoveCandidate: {
    __typename?: 'SignatureCollectionSuccess'
    success: boolean
    reasons?: Array<string> | null
  }
}

export const SignatureCollectionAdminRemoveCandidateDocument = gql`
  mutation signatureCollectionAdminRemoveCandidate(
    $input: SignatureCollectionCandidateIdInput!
  ) {
    signatureCollectionAdminRemoveCandidate(input: $input) {
      success
      reasons
    }
  }
`
export type SignatureCollectionAdminRemoveCandidateMutationFn = Apollo.MutationFunction<
  SignatureCollectionAdminRemoveCandidateMutation,
  SignatureCollectionAdminRemoveCandidateMutationVariables
>

/**
 * __useSignatureCollectionAdminRemoveCandidateMutation__
 *
 * To run a mutation, you first call `useSignatureCollectionAdminRemoveCandidateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignatureCollectionAdminRemoveCandidateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signatureCollectionAdminRemoveCandidateMutation, { data, loading, error }] = useSignatureCollectionAdminRemoveCandidateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignatureCollectionAdminRemoveCandidateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignatureCollectionAdminRemoveCandidateMutation,
    SignatureCollectionAdminRemoveCandidateMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    SignatureCollectionAdminRemoveCandidateMutation,
    SignatureCollectionAdminRemoveCandidateMutationVariables
  >(SignatureCollectionAdminRemoveCandidateDocument, options)
}
export type SignatureCollectionAdminRemoveCandidateMutationHookResult = ReturnType<
  typeof useSignatureCollectionAdminRemoveCandidateMutation
>
export type SignatureCollectionAdminRemoveCandidateMutationResult = Apollo.MutationResult<SignatureCollectionAdminRemoveCandidateMutation>
export type SignatureCollectionAdminRemoveCandidateMutationOptions = Apollo.BaseMutationOptions<
  SignatureCollectionAdminRemoveCandidateMutation,
  SignatureCollectionAdminRemoveCandidateMutationVariables
>
