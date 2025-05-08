import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type LimitedAccessCreatePresignedPostMutationVariables = Types.Exact<{
  input: Types.CreatePresignedPostInput
}>

export type LimitedAccessCreatePresignedPostMutation = {
  __typename?: 'Mutation'
  limitedAccessCreatePresignedPost: {
    __typename?: 'PresignedPost'
    url: string
    fields: any
    key: string
  }
}

export const LimitedAccessCreatePresignedPostDocument = gql`
  mutation LimitedAccessCreatePresignedPost($input: CreatePresignedPostInput!) {
    limitedAccessCreatePresignedPost(input: $input) {
      url
      fields
      key
    }
  }
`
export type LimitedAccessCreatePresignedPostMutationFn = Apollo.MutationFunction<
  LimitedAccessCreatePresignedPostMutation,
  LimitedAccessCreatePresignedPostMutationVariables
>

/**
 * __useLimitedAccessCreatePresignedPostMutation__
 *
 * To run a mutation, you first call `useLimitedAccessCreatePresignedPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLimitedAccessCreatePresignedPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [limitedAccessCreatePresignedPostMutation, { data, loading, error }] = useLimitedAccessCreatePresignedPostMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLimitedAccessCreatePresignedPostMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LimitedAccessCreatePresignedPostMutation,
    LimitedAccessCreatePresignedPostMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    LimitedAccessCreatePresignedPostMutation,
    LimitedAccessCreatePresignedPostMutationVariables
  >(LimitedAccessCreatePresignedPostDocument, options)
}
export type LimitedAccessCreatePresignedPostMutationHookResult = ReturnType<
  typeof useLimitedAccessCreatePresignedPostMutation
>
export type LimitedAccessCreatePresignedPostMutationResult = Apollo.MutationResult<LimitedAccessCreatePresignedPostMutation>
export type LimitedAccessCreatePresignedPostMutationOptions = Apollo.BaseMutationOptions<
  LimitedAccessCreatePresignedPostMutation,
  LimitedAccessCreatePresignedPostMutationVariables
>
