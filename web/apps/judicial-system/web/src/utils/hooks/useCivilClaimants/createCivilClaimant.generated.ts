import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type CreateCivilClaimantMutationVariables = Types.Exact<{
  input: Types.CreateCivilClaimantInput
}>

export type CreateCivilClaimantMutation = {
  __typename?: 'Mutation'
  createCivilClaimant: { __typename?: 'CivilClaimant'; id: string }
}

export const CreateCivilClaimantDocument = gql`
  mutation CreateCivilClaimant($input: CreateCivilClaimantInput!) {
    createCivilClaimant(input: $input) {
      id
    }
  }
`
export type CreateCivilClaimantMutationFn = Apollo.MutationFunction<
  CreateCivilClaimantMutation,
  CreateCivilClaimantMutationVariables
>

/**
 * __useCreateCivilClaimantMutation__
 *
 * To run a mutation, you first call `useCreateCivilClaimantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCivilClaimantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCivilClaimantMutation, { data, loading, error }] = useCreateCivilClaimantMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCivilClaimantMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateCivilClaimantMutation,
    CreateCivilClaimantMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateCivilClaimantMutation,
    CreateCivilClaimantMutationVariables
  >(CreateCivilClaimantDocument, options)
}
export type CreateCivilClaimantMutationHookResult = ReturnType<
  typeof useCreateCivilClaimantMutation
>
export type CreateCivilClaimantMutationResult = Apollo.MutationResult<CreateCivilClaimantMutation>
export type CreateCivilClaimantMutationOptions = Apollo.BaseMutationOptions<
  CreateCivilClaimantMutation,
  CreateCivilClaimantMutationVariables
>
