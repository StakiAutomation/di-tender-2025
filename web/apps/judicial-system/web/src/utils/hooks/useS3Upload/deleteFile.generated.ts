import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type DeleteFileMutationVariables = Types.Exact<{
  input: Types.DeleteFileInput
}>

export type DeleteFileMutation = {
  __typename?: 'Mutation'
  deleteFile: { __typename?: 'DeleteFileResponse'; success: boolean }
}

export const DeleteFileDocument = gql`
  mutation DeleteFile($input: DeleteFileInput!) {
    deleteFile(input: $input) {
      success
    }
  }
`
export type DeleteFileMutationFn = Apollo.MutationFunction<
  DeleteFileMutation,
  DeleteFileMutationVariables
>

/**
 * __useDeleteFileMutation__
 *
 * To run a mutation, you first call `useDeleteFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFileMutation, { data, loading, error }] = useDeleteFileMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteFileMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteFileMutation,
    DeleteFileMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DeleteFileMutation, DeleteFileMutationVariables>(
    DeleteFileDocument,
    options,
  )
}
export type DeleteFileMutationHookResult = ReturnType<
  typeof useDeleteFileMutation
>
export type DeleteFileMutationResult = Apollo.MutationResult<DeleteFileMutation>
export type DeleteFileMutationOptions = Apollo.BaseMutationOptions<
  DeleteFileMutation,
  DeleteFileMutationVariables
>
