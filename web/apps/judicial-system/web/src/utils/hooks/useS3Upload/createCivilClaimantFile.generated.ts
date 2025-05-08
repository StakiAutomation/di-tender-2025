import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type CreateCivilClaimantFileMutationVariables = Types.Exact<{
  input: Types.CreateCivilClaimantFileInput
}>

export type CreateCivilClaimantFileMutation = {
  __typename?: 'Mutation'
  createCivilClaimantFile: { __typename?: 'CaseFile'; id: string }
}

export const CreateCivilClaimantFileDocument = gql`
  mutation CreateCivilClaimantFile($input: CreateCivilClaimantFileInput!) {
    createCivilClaimantFile(input: $input) {
      id
    }
  }
`
export type CreateCivilClaimantFileMutationFn = Apollo.MutationFunction<
  CreateCivilClaimantFileMutation,
  CreateCivilClaimantFileMutationVariables
>

/**
 * __useCreateCivilClaimantFileMutation__
 *
 * To run a mutation, you first call `useCreateCivilClaimantFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCivilClaimantFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCivilClaimantFileMutation, { data, loading, error }] = useCreateCivilClaimantFileMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCivilClaimantFileMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateCivilClaimantFileMutation,
    CreateCivilClaimantFileMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateCivilClaimantFileMutation,
    CreateCivilClaimantFileMutationVariables
  >(CreateCivilClaimantFileDocument, options)
}
export type CreateCivilClaimantFileMutationHookResult = ReturnType<
  typeof useCreateCivilClaimantFileMutation
>
export type CreateCivilClaimantFileMutationResult = Apollo.MutationResult<CreateCivilClaimantFileMutation>
export type CreateCivilClaimantFileMutationOptions = Apollo.BaseMutationOptions<
  CreateCivilClaimantFileMutation,
  CreateCivilClaimantFileMutationVariables
>
