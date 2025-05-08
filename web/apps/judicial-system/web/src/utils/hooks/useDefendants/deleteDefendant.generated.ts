import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type DeleteDefendantMutationVariables = Types.Exact<{
  input: Types.DeleteDefendantInput
}>

export type DeleteDefendantMutation = {
  __typename?: 'Mutation'
  deleteDefendant?: {
    __typename?: 'DeleteDefendantResponse'
    deleted: boolean
  } | null
}

export const DeleteDefendantDocument = gql`
  mutation DeleteDefendant($input: DeleteDefendantInput!) {
    deleteDefendant(input: $input) {
      deleted
    }
  }
`
export type DeleteDefendantMutationFn = Apollo.MutationFunction<
  DeleteDefendantMutation,
  DeleteDefendantMutationVariables
>

/**
 * __useDeleteDefendantMutation__
 *
 * To run a mutation, you first call `useDeleteDefendantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDefendantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteDefendantMutation, { data, loading, error }] = useDeleteDefendantMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteDefendantMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteDefendantMutation,
    DeleteDefendantMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    DeleteDefendantMutation,
    DeleteDefendantMutationVariables
  >(DeleteDefendantDocument, options)
}
export type DeleteDefendantMutationHookResult = ReturnType<
  typeof useDeleteDefendantMutation
>
export type DeleteDefendantMutationResult = Apollo.MutationResult<DeleteDefendantMutation>
export type DeleteDefendantMutationOptions = Apollo.BaseMutationOptions<
  DeleteDefendantMutation,
  DeleteDefendantMutationVariables
>
