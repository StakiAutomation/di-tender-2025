import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type DeleteClientMutationVariables = Types.Exact<{
  input: Types.AuthAdminDeleteClientInput
}>

export type DeleteClientMutation = {
  __typename?: 'Mutation'
  deleteAuthAdminClient: boolean
}

export const DeleteClientDocument = gql`
  mutation DeleteClient($input: AuthAdminDeleteClientInput!) {
    deleteAuthAdminClient(input: $input)
  }
`
export type DeleteClientMutationFn = Apollo.MutationFunction<
  DeleteClientMutation,
  DeleteClientMutationVariables
>

/**
 * __useDeleteClientMutation__
 *
 * To run a mutation, you first call `useDeleteClientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteClientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteClientMutation, { data, loading, error }] = useDeleteClientMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteClientMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteClientMutation,
    DeleteClientMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    DeleteClientMutation,
    DeleteClientMutationVariables
  >(DeleteClientDocument, options)
}
export type DeleteClientMutationHookResult = ReturnType<
  typeof useDeleteClientMutation
>
export type DeleteClientMutationResult = Apollo.MutationResult<DeleteClientMutation>
export type DeleteClientMutationOptions = Apollo.BaseMutationOptions<
  DeleteClientMutation,
  DeleteClientMutationVariables
>
