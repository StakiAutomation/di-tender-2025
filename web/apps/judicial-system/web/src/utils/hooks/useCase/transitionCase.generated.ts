import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type TransitionCaseMutationVariables = Types.Exact<{
  input: Types.TransitionCaseInput
}>

export type TransitionCaseMutation = {
  __typename?: 'Mutation'
  transitionCase?: {
    __typename?: 'Case'
    state?: Types.CaseState | null
    appealState?: Types.CaseAppealState | null
    appealReceivedByCourtDate?: string | null
    statementDeadline?: string | null
  } | null
}

export const TransitionCaseDocument = gql`
  mutation TransitionCase($input: TransitionCaseInput!) {
    transitionCase(input: $input) {
      state
      appealState
      appealReceivedByCourtDate
      statementDeadline
    }
  }
`
export type TransitionCaseMutationFn = Apollo.MutationFunction<
  TransitionCaseMutation,
  TransitionCaseMutationVariables
>

/**
 * __useTransitionCaseMutation__
 *
 * To run a mutation, you first call `useTransitionCaseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTransitionCaseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [transitionCaseMutation, { data, loading, error }] = useTransitionCaseMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useTransitionCaseMutation(
  baseOptions?: Apollo.MutationHookOptions<
    TransitionCaseMutation,
    TransitionCaseMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    TransitionCaseMutation,
    TransitionCaseMutationVariables
  >(TransitionCaseDocument, options)
}
export type TransitionCaseMutationHookResult = ReturnType<
  typeof useTransitionCaseMutation
>
export type TransitionCaseMutationResult = Apollo.MutationResult<TransitionCaseMutation>
export type TransitionCaseMutationOptions = Apollo.BaseMutationOptions<
  TransitionCaseMutation,
  TransitionCaseMutationVariables
>
