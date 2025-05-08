import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type SignatureCollectionLockListMutationVariables = Types.Exact<{
  input: Types.SignatureCollectionListIdInput
}>

export type SignatureCollectionLockListMutation = {
  __typename?: 'Mutation'
  signatureCollectionLockList: {
    __typename?: 'SignatureCollectionSuccess'
    reasons?: Array<string> | null
    success: boolean
  }
}

export const SignatureCollectionLockListDocument = gql`
  mutation SignatureCollectionLockList(
    $input: SignatureCollectionListIdInput!
  ) {
    signatureCollectionLockList(input: $input) {
      reasons
      success
    }
  }
`
export type SignatureCollectionLockListMutationFn = Apollo.MutationFunction<
  SignatureCollectionLockListMutation,
  SignatureCollectionLockListMutationVariables
>

/**
 * __useSignatureCollectionLockListMutation__
 *
 * To run a mutation, you first call `useSignatureCollectionLockListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignatureCollectionLockListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signatureCollectionLockListMutation, { data, loading, error }] = useSignatureCollectionLockListMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignatureCollectionLockListMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignatureCollectionLockListMutation,
    SignatureCollectionLockListMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    SignatureCollectionLockListMutation,
    SignatureCollectionLockListMutationVariables
  >(SignatureCollectionLockListDocument, options)
}
export type SignatureCollectionLockListMutationHookResult = ReturnType<
  typeof useSignatureCollectionLockListMutation
>
export type SignatureCollectionLockListMutationResult = Apollo.MutationResult<SignatureCollectionLockListMutation>
export type SignatureCollectionLockListMutationOptions = Apollo.BaseMutationOptions<
  SignatureCollectionLockListMutation,
  SignatureCollectionLockListMutationVariables
>
