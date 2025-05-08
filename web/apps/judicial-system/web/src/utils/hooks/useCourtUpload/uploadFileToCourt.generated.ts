import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type UploadFileToCourtMutationVariables = Types.Exact<{
  input: Types.UploadFileToCourtInput
}>

export type UploadFileToCourtMutation = {
  __typename?: 'Mutation'
  uploadFileToCourt: {
    __typename?: 'UploadFileToCourtResponse'
    success: boolean
  }
}

export const UploadFileToCourtDocument = gql`
  mutation UploadFileToCourt($input: UploadFileToCourtInput!) {
    uploadFileToCourt(input: $input) {
      success
    }
  }
`
export type UploadFileToCourtMutationFn = Apollo.MutationFunction<
  UploadFileToCourtMutation,
  UploadFileToCourtMutationVariables
>

/**
 * __useUploadFileToCourtMutation__
 *
 * To run a mutation, you first call `useUploadFileToCourtMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadFileToCourtMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadFileToCourtMutation, { data, loading, error }] = useUploadFileToCourtMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUploadFileToCourtMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UploadFileToCourtMutation,
    UploadFileToCourtMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    UploadFileToCourtMutation,
    UploadFileToCourtMutationVariables
  >(UploadFileToCourtDocument, options)
}
export type UploadFileToCourtMutationHookResult = ReturnType<
  typeof useUploadFileToCourtMutation
>
export type UploadFileToCourtMutationResult = Apollo.MutationResult<UploadFileToCourtMutation>
export type UploadFileToCourtMutationOptions = Apollo.BaseMutationOptions<
  UploadFileToCourtMutation,
  UploadFileToCourtMutationVariables
>
