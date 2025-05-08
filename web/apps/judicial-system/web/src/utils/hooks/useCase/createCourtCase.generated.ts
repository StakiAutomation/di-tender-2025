import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type CreateCourtCaseMutationVariables = Types.Exact<{
  input: Types.CreateCourtCaseInput
}>

export type CreateCourtCaseMutation = {
  __typename?: 'Mutation'
  createCourtCase?: {
    __typename?: 'Case'
    courtCaseNumber?: string | null
  } | null
}

export const CreateCourtCaseDocument = gql`
  mutation CreateCourtCase($input: CreateCourtCaseInput!) {
    createCourtCase(input: $input) {
      courtCaseNumber
    }
  }
`
export type CreateCourtCaseMutationFn = Apollo.MutationFunction<
  CreateCourtCaseMutation,
  CreateCourtCaseMutationVariables
>

/**
 * __useCreateCourtCaseMutation__
 *
 * To run a mutation, you first call `useCreateCourtCaseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCourtCaseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCourtCaseMutation, { data, loading, error }] = useCreateCourtCaseMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCourtCaseMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateCourtCaseMutation,
    CreateCourtCaseMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateCourtCaseMutation,
    CreateCourtCaseMutationVariables
  >(CreateCourtCaseDocument, options)
}
export type CreateCourtCaseMutationHookResult = ReturnType<
  typeof useCreateCourtCaseMutation
>
export type CreateCourtCaseMutationResult = Apollo.MutationResult<CreateCourtCaseMutation>
export type CreateCourtCaseMutationOptions = Apollo.BaseMutationOptions<
  CreateCourtCaseMutation,
  CreateCourtCaseMutationVariables
>
