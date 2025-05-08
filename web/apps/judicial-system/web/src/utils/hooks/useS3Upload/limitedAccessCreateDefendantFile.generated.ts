import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type LimitedAccessCreateDefendantFileMutationVariables = Types.Exact<{
  input: Types.CreateDefendantFileInput
}>

export type LimitedAccessCreateDefendantFileMutation = {
  __typename?: 'Mutation'
  limitedAccessCreateDefendantFile: { __typename?: 'CaseFile'; id: string }
}

export const LimitedAccessCreateDefendantFileDocument = gql`
  mutation LimitedAccessCreateDefendantFile($input: CreateDefendantFileInput!) {
    limitedAccessCreateDefendantFile(input: $input) {
      id
    }
  }
`
export type LimitedAccessCreateDefendantFileMutationFn = Apollo.MutationFunction<
  LimitedAccessCreateDefendantFileMutation,
  LimitedAccessCreateDefendantFileMutationVariables
>

/**
 * __useLimitedAccessCreateDefendantFileMutation__
 *
 * To run a mutation, you first call `useLimitedAccessCreateDefendantFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLimitedAccessCreateDefendantFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [limitedAccessCreateDefendantFileMutation, { data, loading, error }] = useLimitedAccessCreateDefendantFileMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLimitedAccessCreateDefendantFileMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LimitedAccessCreateDefendantFileMutation,
    LimitedAccessCreateDefendantFileMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    LimitedAccessCreateDefendantFileMutation,
    LimitedAccessCreateDefendantFileMutationVariables
  >(LimitedAccessCreateDefendantFileDocument, options)
}
export type LimitedAccessCreateDefendantFileMutationHookResult = ReturnType<
  typeof useLimitedAccessCreateDefendantFileMutation
>
export type LimitedAccessCreateDefendantFileMutationResult = Apollo.MutationResult<LimitedAccessCreateDefendantFileMutation>
export type LimitedAccessCreateDefendantFileMutationOptions = Apollo.BaseMutationOptions<
  LimitedAccessCreateDefendantFileMutation,
  LimitedAccessCreateDefendantFileMutationVariables
>
