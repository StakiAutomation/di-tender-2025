import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type DeleteIndictmentCountMutationVariables = Types.Exact<{
  input: Types.DeleteIndictmentCountInput
}>

export type DeleteIndictmentCountMutation = {
  __typename?: 'Mutation'
  deleteIndictmentCount?: {
    __typename?: 'DeleteResponse'
    deleted: boolean
  } | null
}

export const DeleteIndictmentCountDocument = gql`
  mutation DeleteIndictmentCount($input: DeleteIndictmentCountInput!) {
    deleteIndictmentCount(input: $input) {
      deleted
    }
  }
`
export type DeleteIndictmentCountMutationFn = Apollo.MutationFunction<
  DeleteIndictmentCountMutation,
  DeleteIndictmentCountMutationVariables
>

/**
 * __useDeleteIndictmentCountMutation__
 *
 * To run a mutation, you first call `useDeleteIndictmentCountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteIndictmentCountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteIndictmentCountMutation, { data, loading, error }] = useDeleteIndictmentCountMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteIndictmentCountMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteIndictmentCountMutation,
    DeleteIndictmentCountMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    DeleteIndictmentCountMutation,
    DeleteIndictmentCountMutationVariables
  >(DeleteIndictmentCountDocument, options)
}
export type DeleteIndictmentCountMutationHookResult = ReturnType<
  typeof useDeleteIndictmentCountMutation
>
export type DeleteIndictmentCountMutationResult = Apollo.MutationResult<DeleteIndictmentCountMutation>
export type DeleteIndictmentCountMutationOptions = Apollo.BaseMutationOptions<
  DeleteIndictmentCountMutation,
  DeleteIndictmentCountMutationVariables
>
