import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type PublishPermissionMutationVariables = Types.Exact<{
  input: Types.AuthAdminPublishScopeInput
}>

export type PublishPermissionMutation = {
  __typename?: 'Mutation'
  publishAuthAdminScope: {
    __typename?: 'AuthAdminScopeEnvironment'
    environment: Types.AuthAdminEnvironment
  }
}

export const PublishPermissionDocument = gql`
  mutation PublishPermission($input: AuthAdminPublishScopeInput!) {
    publishAuthAdminScope(input: $input) {
      environment
    }
  }
`
export type PublishPermissionMutationFn = Apollo.MutationFunction<
  PublishPermissionMutation,
  PublishPermissionMutationVariables
>

/**
 * __usePublishPermissionMutation__
 *
 * To run a mutation, you first call `usePublishPermissionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePublishPermissionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [publishPermissionMutation, { data, loading, error }] = usePublishPermissionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePublishPermissionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    PublishPermissionMutation,
    PublishPermissionMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    PublishPermissionMutation,
    PublishPermissionMutationVariables
  >(PublishPermissionDocument, options)
}
export type PublishPermissionMutationHookResult = ReturnType<
  typeof usePublishPermissionMutation
>
export type PublishPermissionMutationResult = Apollo.MutationResult<PublishPermissionMutation>
export type PublishPermissionMutationOptions = Apollo.BaseMutationOptions<
  PublishPermissionMutation,
  PublishPermissionMutationVariables
>
