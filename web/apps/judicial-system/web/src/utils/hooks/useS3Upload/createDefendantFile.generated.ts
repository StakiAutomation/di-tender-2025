import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type CreateDefendantFileMutationVariables = Types.Exact<{
  input: Types.CreateDefendantFileInput
}>

export type CreateDefendantFileMutation = {
  __typename?: 'Mutation'
  createDefendantFile: { __typename?: 'CaseFile'; id: string }
}

export const CreateDefendantFileDocument = gql`
  mutation CreateDefendantFile($input: CreateDefendantFileInput!) {
    createDefendantFile(input: $input) {
      id
    }
  }
`
export type CreateDefendantFileMutationFn = Apollo.MutationFunction<
  CreateDefendantFileMutation,
  CreateDefendantFileMutationVariables
>

/**
 * __useCreateDefendantFileMutation__
 *
 * To run a mutation, you first call `useCreateDefendantFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDefendantFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDefendantFileMutation, { data, loading, error }] = useCreateDefendantFileMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateDefendantFileMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateDefendantFileMutation,
    CreateDefendantFileMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateDefendantFileMutation,
    CreateDefendantFileMutationVariables
  >(CreateDefendantFileDocument, options)
}
export type CreateDefendantFileMutationHookResult = ReturnType<
  typeof useCreateDefendantFileMutation
>
export type CreateDefendantFileMutationResult = Apollo.MutationResult<CreateDefendantFileMutation>
export type CreateDefendantFileMutationOptions = Apollo.BaseMutationOptions<
  CreateDefendantFileMutation,
  CreateDefendantFileMutationVariables
>
