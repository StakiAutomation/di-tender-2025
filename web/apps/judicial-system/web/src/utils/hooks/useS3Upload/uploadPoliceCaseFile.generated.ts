import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type UploadPoliceCaseFileMutationVariables = Types.Exact<{
  input: Types.UploadPoliceCaseFileInput
}>

export type UploadPoliceCaseFileMutation = {
  __typename?: 'Mutation'
  uploadPoliceCaseFile?: {
    __typename?: 'UploadPoliceCaseFileResponse'
    key: string
    size: number
  } | null
}

export const UploadPoliceCaseFileDocument = gql`
  mutation UploadPoliceCaseFile($input: UploadPoliceCaseFileInput!) {
    uploadPoliceCaseFile(input: $input) {
      key
      size
    }
  }
`
export type UploadPoliceCaseFileMutationFn = Apollo.MutationFunction<
  UploadPoliceCaseFileMutation,
  UploadPoliceCaseFileMutationVariables
>

/**
 * __useUploadPoliceCaseFileMutation__
 *
 * To run a mutation, you first call `useUploadPoliceCaseFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadPoliceCaseFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadPoliceCaseFileMutation, { data, loading, error }] = useUploadPoliceCaseFileMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUploadPoliceCaseFileMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UploadPoliceCaseFileMutation,
    UploadPoliceCaseFileMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    UploadPoliceCaseFileMutation,
    UploadPoliceCaseFileMutationVariables
  >(UploadPoliceCaseFileDocument, options)
}
export type UploadPoliceCaseFileMutationHookResult = ReturnType<
  typeof useUploadPoliceCaseFileMutation
>
export type UploadPoliceCaseFileMutationResult = Apollo.MutationResult<UploadPoliceCaseFileMutation>
export type UploadPoliceCaseFileMutationOptions = Apollo.BaseMutationOptions<
  UploadPoliceCaseFileMutation,
  UploadPoliceCaseFileMutationVariables
>
