import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type UpdateVictimMutationVariables = Types.Exact<{
  input: Types.UpdateVictimInput
}>

export type UpdateVictimMutation = {
  __typename?: 'Mutation'
  updateVictim: { __typename?: 'Victim'; id: string }
}

export const UpdateVictimDocument = gql`
  mutation UpdateVictim($input: UpdateVictimInput!) {
    updateVictim(input: $input) {
      id
    }
  }
`
export type UpdateVictimMutationFn = Apollo.MutationFunction<
  UpdateVictimMutation,
  UpdateVictimMutationVariables
>

/**
 * __useUpdateVictimMutation__
 *
 * To run a mutation, you first call `useUpdateVictimMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateVictimMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateVictimMutation, { data, loading, error }] = useUpdateVictimMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateVictimMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateVictimMutation,
    UpdateVictimMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    UpdateVictimMutation,
    UpdateVictimMutationVariables
  >(UpdateVictimDocument, options)
}
export type UpdateVictimMutationHookResult = ReturnType<
  typeof useUpdateVictimMutation
>
export type UpdateVictimMutationResult = Apollo.MutationResult<UpdateVictimMutation>
export type UpdateVictimMutationOptions = Apollo.BaseMutationOptions<
  UpdateVictimMutation,
  UpdateVictimMutationVariables
>
