import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type CreateCaseMutationVariables = Types.Exact<{
  input: Types.CreateCaseInput
}>

export type CreateCaseMutation = {
  __typename?: 'Mutation'
  createCase?: {
    __typename?: 'Case'
    id: string
    type?: Types.CaseType | null
    defendants?: Array<{ __typename?: 'Defendant'; id: string }> | null
  } | null
}

export const CreateCaseDocument = gql`
  mutation CreateCase($input: CreateCaseInput!) {
    createCase(input: $input) {
      id
      type
      defendants {
        id
      }
    }
  }
`
export type CreateCaseMutationFn = Apollo.MutationFunction<
  CreateCaseMutation,
  CreateCaseMutationVariables
>

/**
 * __useCreateCaseMutation__
 *
 * To run a mutation, you first call `useCreateCaseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCaseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCaseMutation, { data, loading, error }] = useCreateCaseMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCaseMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateCaseMutation,
    CreateCaseMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateCaseMutation, CreateCaseMutationVariables>(
    CreateCaseDocument,
    options,
  )
}
export type CreateCaseMutationHookResult = ReturnType<
  typeof useCreateCaseMutation
>
export type CreateCaseMutationResult = Apollo.MutationResult<CreateCaseMutation>
export type CreateCaseMutationOptions = Apollo.BaseMutationOptions<
  CreateCaseMutation,
  CreateCaseMutationVariables
>
