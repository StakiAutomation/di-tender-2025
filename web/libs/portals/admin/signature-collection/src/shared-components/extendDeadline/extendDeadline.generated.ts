import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type ExtendDeadlineMutationVariables = Types.Exact<{
  input: Types.SignatureCollectionExtendDeadlineInput
}>

export type ExtendDeadlineMutation = {
  __typename?: 'Mutation'
  signatureCollectionAdminExtendDeadline: {
    __typename?: 'SignatureCollectionSuccess'
    success: boolean
  }
}

export const ExtendDeadlineDocument = gql`
  mutation ExtendDeadline($input: SignatureCollectionExtendDeadlineInput!) {
    signatureCollectionAdminExtendDeadline(input: $input) {
      success
    }
  }
`
export type ExtendDeadlineMutationFn = Apollo.MutationFunction<
  ExtendDeadlineMutation,
  ExtendDeadlineMutationVariables
>

/**
 * __useExtendDeadlineMutation__
 *
 * To run a mutation, you first call `useExtendDeadlineMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useExtendDeadlineMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [extendDeadlineMutation, { data, loading, error }] = useExtendDeadlineMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useExtendDeadlineMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ExtendDeadlineMutation,
    ExtendDeadlineMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    ExtendDeadlineMutation,
    ExtendDeadlineMutationVariables
  >(ExtendDeadlineDocument, options)
}
export type ExtendDeadlineMutationHookResult = ReturnType<
  typeof useExtendDeadlineMutation
>
export type ExtendDeadlineMutationResult = Apollo.MutationResult<ExtendDeadlineMutation>
export type ExtendDeadlineMutationOptions = Apollo.BaseMutationOptions<
  ExtendDeadlineMutation,
  ExtendDeadlineMutationVariables
>
