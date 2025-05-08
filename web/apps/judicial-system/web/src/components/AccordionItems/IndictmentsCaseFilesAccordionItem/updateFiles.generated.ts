import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type UpdateFilesMutationVariables = Types.Exact<{
  input: Types.UpdateFilesInput
}>

export type UpdateFilesMutation = {
  __typename?: 'Mutation'
  updateFiles: {
    __typename?: 'UpdateFilesResponse'
    caseFiles: Array<{ __typename?: 'CaseFile'; id: string }>
  }
}

export const UpdateFilesDocument = gql`
  mutation UpdateFiles($input: UpdateFilesInput!) {
    updateFiles(input: $input) {
      caseFiles {
        id
      }
    }
  }
`
export type UpdateFilesMutationFn = Apollo.MutationFunction<
  UpdateFilesMutation,
  UpdateFilesMutationVariables
>

/**
 * __useUpdateFilesMutation__
 *
 * To run a mutation, you first call `useUpdateFilesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateFilesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateFilesMutation, { data, loading, error }] = useUpdateFilesMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateFilesMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateFilesMutation,
    UpdateFilesMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateFilesMutation, UpdateFilesMutationVariables>(
    UpdateFilesDocument,
    options,
  )
}
export type UpdateFilesMutationHookResult = ReturnType<
  typeof useUpdateFilesMutation
>
export type UpdateFilesMutationResult = Apollo.MutationResult<UpdateFilesMutation>
export type UpdateFilesMutationOptions = Apollo.BaseMutationOptions<
  UpdateFilesMutation,
  UpdateFilesMutationVariables
>
