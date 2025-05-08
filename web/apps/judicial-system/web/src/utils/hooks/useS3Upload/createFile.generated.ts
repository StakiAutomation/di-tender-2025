import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type CreateFileMutationVariables = Types.Exact<{
  input: Types.CreateFileInput
}>

export type CreateFileMutation = {
  __typename?: 'Mutation'
  createFile: { __typename?: 'CaseFile'; id: string }
}

export const CreateFileDocument = gql`
  mutation CreateFile($input: CreateFileInput!) {
    createFile(input: $input) {
      id
    }
  }
`
export type CreateFileMutationFn = Apollo.MutationFunction<
  CreateFileMutation,
  CreateFileMutationVariables
>

/**
 * __useCreateFileMutation__
 *
 * To run a mutation, you first call `useCreateFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFileMutation, { data, loading, error }] = useCreateFileMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateFileMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateFileMutation,
    CreateFileMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateFileMutation, CreateFileMutationVariables>(
    CreateFileDocument,
    options,
  )
}
export type CreateFileMutationHookResult = ReturnType<
  typeof useCreateFileMutation
>
export type CreateFileMutationResult = Apollo.MutationResult<CreateFileMutation>
export type CreateFileMutationOptions = Apollo.BaseMutationOptions<
  CreateFileMutation,
  CreateFileMutationVariables
>
