import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type ToggleListReviewMutationVariables = Types.Exact<{
  input: Types.SignatureCollectionListIdInput
}>

export type ToggleListReviewMutation = {
  __typename?: 'Mutation'
  signatureCollectionAdminToggleListReview: {
    __typename?: 'SignatureCollectionSuccess'
    success: boolean
  }
}

export const ToggleListReviewDocument = gql`
  mutation toggleListReview($input: SignatureCollectionListIdInput!) {
    signatureCollectionAdminToggleListReview(input: $input) {
      success
    }
  }
`
export type ToggleListReviewMutationFn = Apollo.MutationFunction<
  ToggleListReviewMutation,
  ToggleListReviewMutationVariables
>

/**
 * __useToggleListReviewMutation__
 *
 * To run a mutation, you first call `useToggleListReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleListReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleListReviewMutation, { data, loading, error }] = useToggleListReviewMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useToggleListReviewMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ToggleListReviewMutation,
    ToggleListReviewMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    ToggleListReviewMutation,
    ToggleListReviewMutationVariables
  >(ToggleListReviewDocument, options)
}
export type ToggleListReviewMutationHookResult = ReturnType<
  typeof useToggleListReviewMutation
>
export type ToggleListReviewMutationResult = Apollo.MutationResult<ToggleListReviewMutation>
export type ToggleListReviewMutationOptions = Apollo.BaseMutationOptions<
  ToggleListReviewMutation,
  ToggleListReviewMutationVariables
>
