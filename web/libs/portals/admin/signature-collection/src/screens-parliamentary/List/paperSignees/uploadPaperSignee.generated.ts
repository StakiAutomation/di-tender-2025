import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type SignatureCollectionAdminUploadPaperSignatureMutationVariables = Types.Exact<{
  input: Types.SignatureCollectionUploadPaperSignatureInput
}>

export type SignatureCollectionAdminUploadPaperSignatureMutation = {
  __typename?: 'Mutation'
  signatureCollectionAdminUploadPaperSignature: {
    __typename?: 'SignatureCollectionSuccess'
    success: boolean
    reasons?: Array<string> | null
  }
}

export const SignatureCollectionAdminUploadPaperSignatureDocument = gql`
  mutation SignatureCollectionAdminUploadPaperSignature(
    $input: SignatureCollectionUploadPaperSignatureInput!
  ) {
    signatureCollectionAdminUploadPaperSignature(input: $input) {
      success
      reasons
    }
  }
`
export type SignatureCollectionAdminUploadPaperSignatureMutationFn = Apollo.MutationFunction<
  SignatureCollectionAdminUploadPaperSignatureMutation,
  SignatureCollectionAdminUploadPaperSignatureMutationVariables
>

/**
 * __useSignatureCollectionAdminUploadPaperSignatureMutation__
 *
 * To run a mutation, you first call `useSignatureCollectionAdminUploadPaperSignatureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignatureCollectionAdminUploadPaperSignatureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signatureCollectionAdminUploadPaperSignatureMutation, { data, loading, error }] = useSignatureCollectionAdminUploadPaperSignatureMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignatureCollectionAdminUploadPaperSignatureMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignatureCollectionAdminUploadPaperSignatureMutation,
    SignatureCollectionAdminUploadPaperSignatureMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    SignatureCollectionAdminUploadPaperSignatureMutation,
    SignatureCollectionAdminUploadPaperSignatureMutationVariables
  >(SignatureCollectionAdminUploadPaperSignatureDocument, options)
}
export type SignatureCollectionAdminUploadPaperSignatureMutationHookResult = ReturnType<
  typeof useSignatureCollectionAdminUploadPaperSignatureMutation
>
export type SignatureCollectionAdminUploadPaperSignatureMutationResult = Apollo.MutationResult<SignatureCollectionAdminUploadPaperSignatureMutation>
export type SignatureCollectionAdminUploadPaperSignatureMutationOptions = Apollo.BaseMutationOptions<
  SignatureCollectionAdminUploadPaperSignatureMutation,
  SignatureCollectionAdminUploadPaperSignatureMutationVariables
>
