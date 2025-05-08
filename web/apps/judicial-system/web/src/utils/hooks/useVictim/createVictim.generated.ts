import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type CreateVictimMutationVariables = Types.Exact<{
  input: Types.CreateVictimInput
}>

export type CreateVictimMutation = {
  __typename?: 'Mutation'
  createVictim: { __typename?: 'Victim'; id: string }
}

export const CreateVictimDocument = gql`
  mutation CreateVictim($input: CreateVictimInput!) {
    createVictim(input: $input) {
      id
    }
  }
`
export type CreateVictimMutationFn = Apollo.MutationFunction<
  CreateVictimMutation,
  CreateVictimMutationVariables
>

/**
 * __useCreateVictimMutation__
 *
 * To run a mutation, you first call `useCreateVictimMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateVictimMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createVictimMutation, { data, loading, error }] = useCreateVictimMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateVictimMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateVictimMutation,
    CreateVictimMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateVictimMutation,
    CreateVictimMutationVariables
  >(CreateVictimDocument, options)
}
export type CreateVictimMutationHookResult = ReturnType<
  typeof useCreateVictimMutation
>
export type CreateVictimMutationResult = Apollo.MutationResult<CreateVictimMutation>
export type CreateVictimMutationOptions = Apollo.BaseMutationOptions<
  CreateVictimMutation,
  CreateVictimMutationVariables
>
