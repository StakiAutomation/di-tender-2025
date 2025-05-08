import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type UpdateListMutationVariables = Types.Exact<{
  input: Types.UpdateEndorsementListInput
}>

export type UpdateListMutation = {
  __typename?: 'Mutation'
  endorsementSystemUpdateEndorsementList: {
    __typename?: 'EndorsementList'
    id: string
  }
}

export const UpdateListDocument = gql`
  mutation UpdateList($input: UpdateEndorsementListInput!) {
    endorsementSystemUpdateEndorsementList(input: $input) {
      id
    }
  }
`
export type UpdateListMutationFn = Apollo.MutationFunction<
  UpdateListMutation,
  UpdateListMutationVariables
>

/**
 * __useUpdateListMutation__
 *
 * To run a mutation, you first call `useUpdateListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateListMutation, { data, loading, error }] = useUpdateListMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateListMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateListMutation,
    UpdateListMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateListMutation, UpdateListMutationVariables>(
    UpdateListDocument,
    options,
  )
}
export type UpdateListMutationHookResult = ReturnType<
  typeof useUpdateListMutation
>
export type UpdateListMutationResult = Apollo.MutationResult<UpdateListMutation>
export type UpdateListMutationOptions = Apollo.BaseMutationOptions<
  UpdateListMutation,
  UpdateListMutationVariables
>
