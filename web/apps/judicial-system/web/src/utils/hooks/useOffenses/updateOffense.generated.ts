import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type UpdateOffenseMutationVariables = Types.Exact<{
  input: Types.UpdateOffenseInput
}>

export type UpdateOffenseMutation = {
  __typename?: 'Mutation'
  updateOffense?: {
    __typename?: 'Offense'
    id: string
    created?: string | null
    modified?: string | null
    indictmentCountId?: string | null
    offense: Types.IndictmentCountOffense
    substances?: any | null
  } | null
}

export const UpdateOffenseDocument = gql`
  mutation UpdateOffense($input: UpdateOffenseInput!) {
    updateOffense(input: $input) {
      id
      created
      modified
      indictmentCountId
      offense
      substances
    }
  }
`
export type UpdateOffenseMutationFn = Apollo.MutationFunction<
  UpdateOffenseMutation,
  UpdateOffenseMutationVariables
>

/**
 * __useUpdateOffenseMutation__
 *
 * To run a mutation, you first call `useUpdateOffenseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOffenseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOffenseMutation, { data, loading, error }] = useUpdateOffenseMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOffenseMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateOffenseMutation,
    UpdateOffenseMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    UpdateOffenseMutation,
    UpdateOffenseMutationVariables
  >(UpdateOffenseDocument, options)
}
export type UpdateOffenseMutationHookResult = ReturnType<
  typeof useUpdateOffenseMutation
>
export type UpdateOffenseMutationResult = Apollo.MutationResult<UpdateOffenseMutation>
export type UpdateOffenseMutationOptions = Apollo.BaseMutationOptions<
  UpdateOffenseMutation,
  UpdateOffenseMutationVariables
>
