import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type UpdateDefendantMutationVariables = Types.Exact<{
  input: Types.UpdateDefendantInput
}>

export type UpdateDefendantMutation = {
  __typename?: 'Mutation'
  updateDefendant?: { __typename?: 'Defendant'; id: string } | null
}

export const UpdateDefendantDocument = gql`
  mutation UpdateDefendant($input: UpdateDefendantInput!) {
    updateDefendant(input: $input) {
      id
    }
  }
`
export type UpdateDefendantMutationFn = Apollo.MutationFunction<
  UpdateDefendantMutation,
  UpdateDefendantMutationVariables
>

/**
 * __useUpdateDefendantMutation__
 *
 * To run a mutation, you first call `useUpdateDefendantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDefendantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDefendantMutation, { data, loading, error }] = useUpdateDefendantMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateDefendantMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateDefendantMutation,
    UpdateDefendantMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    UpdateDefendantMutation,
    UpdateDefendantMutationVariables
  >(UpdateDefendantDocument, options)
}
export type UpdateDefendantMutationHookResult = ReturnType<
  typeof useUpdateDefendantMutation
>
export type UpdateDefendantMutationResult = Apollo.MutationResult<UpdateDefendantMutation>
export type UpdateDefendantMutationOptions = Apollo.BaseMutationOptions<
  UpdateDefendantMutation,
  UpdateDefendantMutationVariables
>
