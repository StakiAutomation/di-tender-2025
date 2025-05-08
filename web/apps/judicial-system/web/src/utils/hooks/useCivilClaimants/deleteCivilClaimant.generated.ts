import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type DeleteCivilClaimantMutationVariables = Types.Exact<{
  input: Types.DeleteCivilClaimantInput
}>

export type DeleteCivilClaimantMutation = {
  __typename?: 'Mutation'
  deleteCivilClaimant: {
    __typename?: 'DeleteCivilClaimantResponse'
    deleted: boolean
  }
}

export const DeleteCivilClaimantDocument = gql`
  mutation DeleteCivilClaimant($input: DeleteCivilClaimantInput!) {
    deleteCivilClaimant(input: $input) {
      deleted
    }
  }
`
export type DeleteCivilClaimantMutationFn = Apollo.MutationFunction<
  DeleteCivilClaimantMutation,
  DeleteCivilClaimantMutationVariables
>

/**
 * __useDeleteCivilClaimantMutation__
 *
 * To run a mutation, you first call `useDeleteCivilClaimantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCivilClaimantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCivilClaimantMutation, { data, loading, error }] = useDeleteCivilClaimantMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteCivilClaimantMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteCivilClaimantMutation,
    DeleteCivilClaimantMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    DeleteCivilClaimantMutation,
    DeleteCivilClaimantMutationVariables
  >(DeleteCivilClaimantDocument, options)
}
export type DeleteCivilClaimantMutationHookResult = ReturnType<
  typeof useDeleteCivilClaimantMutation
>
export type DeleteCivilClaimantMutationResult = Apollo.MutationResult<DeleteCivilClaimantMutation>
export type DeleteCivilClaimantMutationOptions = Apollo.BaseMutationOptions<
  DeleteCivilClaimantMutation,
  DeleteCivilClaimantMutationVariables
>
