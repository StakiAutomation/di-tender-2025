import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type DeleteAuthDelegationMutationVariables = Types.Exact<{
  input: Types.DeleteAuthDelegationInput
}>

export type DeleteAuthDelegationMutation = {
  __typename?: 'Mutation'
  deleteAuthDelegation: boolean
}

export const DeleteAuthDelegationDocument = gql`
  mutation DeleteAuthDelegation($input: DeleteAuthDelegationInput!) {
    deleteAuthDelegation(input: $input)
  }
`
export type DeleteAuthDelegationMutationFn = Apollo.MutationFunction<
  DeleteAuthDelegationMutation,
  DeleteAuthDelegationMutationVariables
>

/**
 * __useDeleteAuthDelegationMutation__
 *
 * To run a mutation, you first call `useDeleteAuthDelegationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAuthDelegationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAuthDelegationMutation, { data, loading, error }] = useDeleteAuthDelegationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteAuthDelegationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteAuthDelegationMutation,
    DeleteAuthDelegationMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    DeleteAuthDelegationMutation,
    DeleteAuthDelegationMutationVariables
  >(DeleteAuthDelegationDocument, options)
}
export type DeleteAuthDelegationMutationHookResult = ReturnType<
  typeof useDeleteAuthDelegationMutation
>
export type DeleteAuthDelegationMutationResult = Apollo.MutationResult<DeleteAuthDelegationMutation>
export type DeleteAuthDelegationMutationOptions = Apollo.BaseMutationOptions<
  DeleteAuthDelegationMutation,
  DeleteAuthDelegationMutationVariables
>
