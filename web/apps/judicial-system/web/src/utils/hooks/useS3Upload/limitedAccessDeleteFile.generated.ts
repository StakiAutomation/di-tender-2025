import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type LimitedAccessDeleteFileMutationVariables = Types.Exact<{
  input: Types.DeleteFileInput
}>

export type LimitedAccessDeleteFileMutation = {
  __typename?: 'Mutation'
  limitedAccessDeleteFile: {
    __typename?: 'DeleteFileResponse'
    success: boolean
  }
}

export const LimitedAccessDeleteFileDocument = gql`
  mutation LimitedAccessDeleteFile($input: DeleteFileInput!) {
    limitedAccessDeleteFile(input: $input) {
      success
    }
  }
`
export type LimitedAccessDeleteFileMutationFn = Apollo.MutationFunction<
  LimitedAccessDeleteFileMutation,
  LimitedAccessDeleteFileMutationVariables
>

/**
 * __useLimitedAccessDeleteFileMutation__
 *
 * To run a mutation, you first call `useLimitedAccessDeleteFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLimitedAccessDeleteFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [limitedAccessDeleteFileMutation, { data, loading, error }] = useLimitedAccessDeleteFileMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLimitedAccessDeleteFileMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LimitedAccessDeleteFileMutation,
    LimitedAccessDeleteFileMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    LimitedAccessDeleteFileMutation,
    LimitedAccessDeleteFileMutationVariables
  >(LimitedAccessDeleteFileDocument, options)
}
export type LimitedAccessDeleteFileMutationHookResult = ReturnType<
  typeof useLimitedAccessDeleteFileMutation
>
export type LimitedAccessDeleteFileMutationResult = Apollo.MutationResult<LimitedAccessDeleteFileMutation>
export type LimitedAccessDeleteFileMutationOptions = Apollo.BaseMutationOptions<
  LimitedAccessDeleteFileMutation,
  LimitedAccessDeleteFileMutationVariables
>
