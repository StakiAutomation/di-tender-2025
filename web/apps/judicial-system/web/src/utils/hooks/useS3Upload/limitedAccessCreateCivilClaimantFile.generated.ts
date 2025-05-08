import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type LimitedAccessCreateCivilClaimantFileMutationVariables = Types.Exact<{
  input: Types.CreateCivilClaimantFileInput
}>

export type LimitedAccessCreateCivilClaimantFileMutation = {
  __typename?: 'Mutation'
  limitedAccessCreateCivilClaimantFile: { __typename?: 'CaseFile'; id: string }
}

export const LimitedAccessCreateCivilClaimantFileDocument = gql`
  mutation LimitedAccessCreateCivilClaimantFile(
    $input: CreateCivilClaimantFileInput!
  ) {
    limitedAccessCreateCivilClaimantFile(input: $input) {
      id
    }
  }
`
export type LimitedAccessCreateCivilClaimantFileMutationFn = Apollo.MutationFunction<
  LimitedAccessCreateCivilClaimantFileMutation,
  LimitedAccessCreateCivilClaimantFileMutationVariables
>

/**
 * __useLimitedAccessCreateCivilClaimantFileMutation__
 *
 * To run a mutation, you first call `useLimitedAccessCreateCivilClaimantFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLimitedAccessCreateCivilClaimantFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [limitedAccessCreateCivilClaimantFileMutation, { data, loading, error }] = useLimitedAccessCreateCivilClaimantFileMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLimitedAccessCreateCivilClaimantFileMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LimitedAccessCreateCivilClaimantFileMutation,
    LimitedAccessCreateCivilClaimantFileMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    LimitedAccessCreateCivilClaimantFileMutation,
    LimitedAccessCreateCivilClaimantFileMutationVariables
  >(LimitedAccessCreateCivilClaimantFileDocument, options)
}
export type LimitedAccessCreateCivilClaimantFileMutationHookResult = ReturnType<
  typeof useLimitedAccessCreateCivilClaimantFileMutation
>
export type LimitedAccessCreateCivilClaimantFileMutationResult = Apollo.MutationResult<LimitedAccessCreateCivilClaimantFileMutation>
export type LimitedAccessCreateCivilClaimantFileMutationOptions = Apollo.BaseMutationOptions<
  LimitedAccessCreateCivilClaimantFileMutation,
  LimitedAccessCreateCivilClaimantFileMutationVariables
>
