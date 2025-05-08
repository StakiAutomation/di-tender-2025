import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type PostBulkMailActionMutationVariables = Types.Exact<{
  input: Types.PostBulkMailActionResolverInput
}>

export type PostBulkMailActionMutation = {
  __typename?: 'Mutation'
  postBulkMailAction?: {
    __typename?: 'BulkMailAction'
    success: boolean
    messageId: string
  } | null
}

export const PostBulkMailActionDocument = gql`
  mutation PostBulkMailAction($input: PostBulkMailActionResolverInput!) {
    postBulkMailAction(input: $input) {
      success
      messageId
    }
  }
`
export type PostBulkMailActionMutationFn = Apollo.MutationFunction<
  PostBulkMailActionMutation,
  PostBulkMailActionMutationVariables
>

/**
 * __usePostBulkMailActionMutation__
 *
 * To run a mutation, you first call `usePostBulkMailActionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostBulkMailActionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postBulkMailActionMutation, { data, loading, error }] = usePostBulkMailActionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePostBulkMailActionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    PostBulkMailActionMutation,
    PostBulkMailActionMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    PostBulkMailActionMutation,
    PostBulkMailActionMutationVariables
  >(PostBulkMailActionDocument, options)
}
export type PostBulkMailActionMutationHookResult = ReturnType<
  typeof usePostBulkMailActionMutation
>
export type PostBulkMailActionMutationResult = Apollo.MutationResult<PostBulkMailActionMutation>
export type PostBulkMailActionMutationOptions = Apollo.BaseMutationOptions<
  PostBulkMailActionMutation,
  PostBulkMailActionMutationVariables
>
