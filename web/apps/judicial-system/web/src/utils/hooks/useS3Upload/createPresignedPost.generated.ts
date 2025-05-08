import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type CreatePresignedPostMutationVariables = Types.Exact<{
  input: Types.CreatePresignedPostInput
}>

export type CreatePresignedPostMutation = {
  __typename?: 'Mutation'
  createPresignedPost: {
    __typename?: 'PresignedPost'
    url: string
    fields: any
    key: string
  }
}

export const CreatePresignedPostDocument = gql`
  mutation CreatePresignedPost($input: CreatePresignedPostInput!) {
    createPresignedPost(input: $input) {
      url
      fields
      key
    }
  }
`
export type CreatePresignedPostMutationFn = Apollo.MutationFunction<
  CreatePresignedPostMutation,
  CreatePresignedPostMutationVariables
>

/**
 * __useCreatePresignedPostMutation__
 *
 * To run a mutation, you first call `useCreatePresignedPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePresignedPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPresignedPostMutation, { data, loading, error }] = useCreatePresignedPostMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePresignedPostMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreatePresignedPostMutation,
    CreatePresignedPostMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreatePresignedPostMutation,
    CreatePresignedPostMutationVariables
  >(CreatePresignedPostDocument, options)
}
export type CreatePresignedPostMutationHookResult = ReturnType<
  typeof useCreatePresignedPostMutation
>
export type CreatePresignedPostMutationResult = Apollo.MutationResult<CreatePresignedPostMutation>
export type CreatePresignedPostMutationOptions = Apollo.BaseMutationOptions<
  CreatePresignedPostMutation,
  CreatePresignedPostMutationVariables
>
