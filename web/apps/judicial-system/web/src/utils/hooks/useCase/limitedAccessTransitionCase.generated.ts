import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type LimitedAccessTransitionCaseMutationVariables = Types.Exact<{
  input: Types.TransitionCaseInput
}>

export type LimitedAccessTransitionCaseMutation = {
  __typename?: 'Mutation'
  limitedAccessTransitionCase?: {
    __typename?: 'Case'
    state?: Types.CaseState | null
    appealState?: Types.CaseAppealState | null
    appealReceivedByCourtDate?: string | null
  } | null
}

export const LimitedAccessTransitionCaseDocument = gql`
  mutation LimitedAccessTransitionCase($input: TransitionCaseInput!) {
    limitedAccessTransitionCase(input: $input) {
      state
      appealState
      appealReceivedByCourtDate
    }
  }
`
export type LimitedAccessTransitionCaseMutationFn = Apollo.MutationFunction<
  LimitedAccessTransitionCaseMutation,
  LimitedAccessTransitionCaseMutationVariables
>

/**
 * __useLimitedAccessTransitionCaseMutation__
 *
 * To run a mutation, you first call `useLimitedAccessTransitionCaseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLimitedAccessTransitionCaseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [limitedAccessTransitionCaseMutation, { data, loading, error }] = useLimitedAccessTransitionCaseMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLimitedAccessTransitionCaseMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LimitedAccessTransitionCaseMutation,
    LimitedAccessTransitionCaseMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    LimitedAccessTransitionCaseMutation,
    LimitedAccessTransitionCaseMutationVariables
  >(LimitedAccessTransitionCaseDocument, options)
}
export type LimitedAccessTransitionCaseMutationHookResult = ReturnType<
  typeof useLimitedAccessTransitionCaseMutation
>
export type LimitedAccessTransitionCaseMutationResult = Apollo.MutationResult<LimitedAccessTransitionCaseMutation>
export type LimitedAccessTransitionCaseMutationOptions = Apollo.BaseMutationOptions<
  LimitedAccessTransitionCaseMutation,
  LimitedAccessTransitionCaseMutationVariables
>
