import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type LimitedAccessCreateFileMutationVariables = Types.Exact<{
  input: Types.CreateFileInput
}>

export type LimitedAccessCreateFileMutation = {
  __typename?: 'Mutation'
  limitedAccessCreateFile: { __typename?: 'CaseFile'; id: string }
}

export const LimitedAccessCreateFileDocument = gql`
  mutation LimitedAccessCreateFile($input: CreateFileInput!) {
    limitedAccessCreateFile(input: $input) {
      id
    }
  }
`
export type LimitedAccessCreateFileMutationFn = Apollo.MutationFunction<
  LimitedAccessCreateFileMutation,
  LimitedAccessCreateFileMutationVariables
>

/**
 * __useLimitedAccessCreateFileMutation__
 *
 * To run a mutation, you first call `useLimitedAccessCreateFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLimitedAccessCreateFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [limitedAccessCreateFileMutation, { data, loading, error }] = useLimitedAccessCreateFileMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLimitedAccessCreateFileMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LimitedAccessCreateFileMutation,
    LimitedAccessCreateFileMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    LimitedAccessCreateFileMutation,
    LimitedAccessCreateFileMutationVariables
  >(LimitedAccessCreateFileDocument, options)
}
export type LimitedAccessCreateFileMutationHookResult = ReturnType<
  typeof useLimitedAccessCreateFileMutation
>
export type LimitedAccessCreateFileMutationResult = Apollo.MutationResult<LimitedAccessCreateFileMutation>
export type LimitedAccessCreateFileMutationOptions = Apollo.BaseMutationOptions<
  LimitedAccessCreateFileMutation,
  LimitedAccessCreateFileMutationVariables
>
