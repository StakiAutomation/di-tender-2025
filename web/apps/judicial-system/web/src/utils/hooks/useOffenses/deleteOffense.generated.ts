import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type DeleteOffenseMutationVariables = Types.Exact<{
  input: Types.DeleteOffenseInput
}>

export type DeleteOffenseMutation = {
  __typename?: 'Mutation'
  deleteOffense?: { __typename?: 'DeleteResponse'; deleted: boolean } | null
}

export const DeleteOffenseDocument = gql`
  mutation DeleteOffense($input: DeleteOffenseInput!) {
    deleteOffense(input: $input) {
      deleted
    }
  }
`
export type DeleteOffenseMutationFn = Apollo.MutationFunction<
  DeleteOffenseMutation,
  DeleteOffenseMutationVariables
>

/**
 * __useDeleteOffenseMutation__
 *
 * To run a mutation, you first call `useDeleteOffenseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOffenseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOffenseMutation, { data, loading, error }] = useDeleteOffenseMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteOffenseMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteOffenseMutation,
    DeleteOffenseMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    DeleteOffenseMutation,
    DeleteOffenseMutationVariables
  >(DeleteOffenseDocument, options)
}
export type DeleteOffenseMutationHookResult = ReturnType<
  typeof useDeleteOffenseMutation
>
export type DeleteOffenseMutationResult = Apollo.MutationResult<DeleteOffenseMutation>
export type DeleteOffenseMutationOptions = Apollo.BaseMutationOptions<
  DeleteOffenseMutation,
  DeleteOffenseMutationVariables
>
