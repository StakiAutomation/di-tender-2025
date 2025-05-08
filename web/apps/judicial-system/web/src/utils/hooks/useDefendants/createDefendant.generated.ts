import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type CreateDefendantMutationVariables = Types.Exact<{
  input: Types.CreateDefendantInput
}>

export type CreateDefendantMutation = {
  __typename?: 'Mutation'
  createDefendant?: { __typename?: 'Defendant'; id: string } | null
}

export const CreateDefendantDocument = gql`
  mutation CreateDefendant($input: CreateDefendantInput!) {
    createDefendant(input: $input) {
      id
    }
  }
`
export type CreateDefendantMutationFn = Apollo.MutationFunction<
  CreateDefendantMutation,
  CreateDefendantMutationVariables
>

/**
 * __useCreateDefendantMutation__
 *
 * To run a mutation, you first call `useCreateDefendantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDefendantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDefendantMutation, { data, loading, error }] = useCreateDefendantMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateDefendantMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateDefendantMutation,
    CreateDefendantMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateDefendantMutation,
    CreateDefendantMutationVariables
  >(CreateDefendantDocument, options)
}
export type CreateDefendantMutationHookResult = ReturnType<
  typeof useCreateDefendantMutation
>
export type CreateDefendantMutationResult = Apollo.MutationResult<CreateDefendantMutation>
export type CreateDefendantMutationOptions = Apollo.BaseMutationOptions<
  CreateDefendantMutation,
  CreateDefendantMutationVariables
>
