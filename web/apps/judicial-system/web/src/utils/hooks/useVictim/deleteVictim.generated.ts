import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type DeleteVictimMutationVariables = Types.Exact<{
  input: Types.DeleteVictimInput
}>

export type DeleteVictimMutation = {
  __typename?: 'Mutation'
  deleteVictim: { __typename?: 'DeleteVictimResponse'; deleted: boolean }
}

export const DeleteVictimDocument = gql`
  mutation DeleteVictim($input: DeleteVictimInput!) {
    deleteVictim(input: $input) {
      deleted
    }
  }
`
export type DeleteVictimMutationFn = Apollo.MutationFunction<
  DeleteVictimMutation,
  DeleteVictimMutationVariables
>

/**
 * __useDeleteVictimMutation__
 *
 * To run a mutation, you first call `useDeleteVictimMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteVictimMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteVictimMutation, { data, loading, error }] = useDeleteVictimMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteVictimMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteVictimMutation,
    DeleteVictimMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    DeleteVictimMutation,
    DeleteVictimMutationVariables
  >(DeleteVictimDocument, options)
}
export type DeleteVictimMutationHookResult = ReturnType<
  typeof useDeleteVictimMutation
>
export type DeleteVictimMutationResult = Apollo.MutationResult<DeleteVictimMutation>
export type DeleteVictimMutationOptions = Apollo.BaseMutationOptions<
  DeleteVictimMutation,
  DeleteVictimMutationVariables
>
