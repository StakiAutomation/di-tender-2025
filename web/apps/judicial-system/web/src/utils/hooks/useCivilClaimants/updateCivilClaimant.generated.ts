import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type UpdateCivilClaimantMutationVariables = Types.Exact<{
  input: Types.UpdateCivilClaimantInput
}>

export type UpdateCivilClaimantMutation = {
  __typename?: 'Mutation'
  updateCivilClaimant: { __typename?: 'CivilClaimant'; id: string }
}

export const UpdateCivilClaimantDocument = gql`
  mutation UpdateCivilClaimant($input: UpdateCivilClaimantInput!) {
    updateCivilClaimant(input: $input) {
      id
    }
  }
`
export type UpdateCivilClaimantMutationFn = Apollo.MutationFunction<
  UpdateCivilClaimantMutation,
  UpdateCivilClaimantMutationVariables
>

/**
 * __useUpdateCivilClaimantMutation__
 *
 * To run a mutation, you first call `useUpdateCivilClaimantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCivilClaimantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCivilClaimantMutation, { data, loading, error }] = useUpdateCivilClaimantMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCivilClaimantMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateCivilClaimantMutation,
    UpdateCivilClaimantMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    UpdateCivilClaimantMutation,
    UpdateCivilClaimantMutationVariables
  >(UpdateCivilClaimantDocument, options)
}
export type UpdateCivilClaimantMutationHookResult = ReturnType<
  typeof useUpdateCivilClaimantMutation
>
export type UpdateCivilClaimantMutationResult = Apollo.MutationResult<UpdateCivilClaimantMutation>
export type UpdateCivilClaimantMutationOptions = Apollo.BaseMutationOptions<
  UpdateCivilClaimantMutation,
  UpdateCivilClaimantMutationVariables
>
