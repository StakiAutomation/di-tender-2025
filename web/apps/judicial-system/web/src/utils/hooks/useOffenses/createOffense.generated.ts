import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type CreateOffenseMutationVariables = Types.Exact<{
  input: Types.CreateOffenseInput
}>

export type CreateOffenseMutation = {
  __typename?: 'Mutation'
  createOffense?: {
    __typename?: 'Offense'
    id: string
    created?: string | null
    modified?: string | null
    indictmentCountId?: string | null
    offense: Types.IndictmentCountOffense
    substances?: any | null
  } | null
}

export const CreateOffenseDocument = gql`
  mutation CreateOffense($input: CreateOffenseInput!) {
    createOffense(input: $input) {
      id
      created
      modified
      indictmentCountId
      offense
      substances
    }
  }
`
export type CreateOffenseMutationFn = Apollo.MutationFunction<
  CreateOffenseMutation,
  CreateOffenseMutationVariables
>

/**
 * __useCreateOffenseMutation__
 *
 * To run a mutation, you first call `useCreateOffenseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOffenseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOffenseMutation, { data, loading, error }] = useCreateOffenseMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOffenseMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateOffenseMutation,
    CreateOffenseMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateOffenseMutation,
    CreateOffenseMutationVariables
  >(CreateOffenseDocument, options)
}
export type CreateOffenseMutationHookResult = ReturnType<
  typeof useCreateOffenseMutation
>
export type CreateOffenseMutationResult = Apollo.MutationResult<CreateOffenseMutation>
export type CreateOffenseMutationOptions = Apollo.BaseMutationOptions<
  CreateOffenseMutation,
  CreateOffenseMutationVariables
>
