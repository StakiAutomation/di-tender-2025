import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type PublishClientMutationVariables = Types.Exact<{
  input: Types.AuthAdminPublishClientInput
}>

export type PublishClientMutation = {
  __typename?: 'Mutation'
  publishAuthAdminClient: {
    __typename?: 'AuthAdminClientEnvironment'
    environment: Types.AuthAdminEnvironment
  }
}

export const PublishClientDocument = gql`
  mutation PublishClient($input: AuthAdminPublishClientInput!) {
    publishAuthAdminClient(input: $input) {
      environment
    }
  }
`
export type PublishClientMutationFn = Apollo.MutationFunction<
  PublishClientMutation,
  PublishClientMutationVariables
>

/**
 * __usePublishClientMutation__
 *
 * To run a mutation, you first call `usePublishClientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePublishClientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [publishClientMutation, { data, loading, error }] = usePublishClientMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePublishClientMutation(
  baseOptions?: Apollo.MutationHookOptions<
    PublishClientMutation,
    PublishClientMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    PublishClientMutation,
    PublishClientMutationVariables
  >(PublishClientDocument, options)
}
export type PublishClientMutationHookResult = ReturnType<
  typeof usePublishClientMutation
>
export type PublishClientMutationResult = Apollo.MutationResult<PublishClientMutation>
export type PublishClientMutationOptions = Apollo.BaseMutationOptions<
  PublishClientMutation,
  PublishClientMutationVariables
>
