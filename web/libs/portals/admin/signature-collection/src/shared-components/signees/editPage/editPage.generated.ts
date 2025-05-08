import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type SignatureCollectionAdminUpdatePaperSignaturePageNumberMutationVariables = Types.Exact<{
  input: Types.SignatureCollectionSignatureUpdateInput
}>

export type SignatureCollectionAdminUpdatePaperSignaturePageNumberMutation = {
  __typename?: 'Mutation'
  signatureCollectionAdminUpdatePaperSignaturePageNumber: {
    __typename?: 'SignatureCollectionSuccess'
    success: boolean
  }
}

export const SignatureCollectionAdminUpdatePaperSignaturePageNumberDocument = gql`
  mutation SignatureCollectionAdminUpdatePaperSignaturePageNumber(
    $input: SignatureCollectionSignatureUpdateInput!
  ) {
    signatureCollectionAdminUpdatePaperSignaturePageNumber(input: $input) {
      success
    }
  }
`
export type SignatureCollectionAdminUpdatePaperSignaturePageNumberMutationFn = Apollo.MutationFunction<
  SignatureCollectionAdminUpdatePaperSignaturePageNumberMutation,
  SignatureCollectionAdminUpdatePaperSignaturePageNumberMutationVariables
>

/**
 * __useSignatureCollectionAdminUpdatePaperSignaturePageNumberMutation__
 *
 * To run a mutation, you first call `useSignatureCollectionAdminUpdatePaperSignaturePageNumberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignatureCollectionAdminUpdatePaperSignaturePageNumberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signatureCollectionAdminUpdatePaperSignaturePageNumberMutation, { data, loading, error }] = useSignatureCollectionAdminUpdatePaperSignaturePageNumberMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignatureCollectionAdminUpdatePaperSignaturePageNumberMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignatureCollectionAdminUpdatePaperSignaturePageNumberMutation,
    SignatureCollectionAdminUpdatePaperSignaturePageNumberMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    SignatureCollectionAdminUpdatePaperSignaturePageNumberMutation,
    SignatureCollectionAdminUpdatePaperSignaturePageNumberMutationVariables
  >(SignatureCollectionAdminUpdatePaperSignaturePageNumberDocument, options)
}
export type SignatureCollectionAdminUpdatePaperSignaturePageNumberMutationHookResult = ReturnType<
  typeof useSignatureCollectionAdminUpdatePaperSignaturePageNumberMutation
>
export type SignatureCollectionAdminUpdatePaperSignaturePageNumberMutationResult = Apollo.MutationResult<SignatureCollectionAdminUpdatePaperSignaturePageNumberMutation>
export type SignatureCollectionAdminUpdatePaperSignaturePageNumberMutationOptions = Apollo.BaseMutationOptions<
  SignatureCollectionAdminUpdatePaperSignaturePageNumberMutation,
  SignatureCollectionAdminUpdatePaperSignaturePageNumberMutationVariables
>
