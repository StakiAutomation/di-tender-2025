import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type LimitedAccessUpdateDefendantMutationVariables = Types.Exact<{
  input: Types.UpdateDefendantInput
}>

export type LimitedAccessUpdateDefendantMutation = {
  __typename?: 'Mutation'
  limitedAccessUpdateDefendant?: { __typename?: 'Defendant'; id: string } | null
}

export const LimitedAccessUpdateDefendantDocument = gql`
  mutation LimitedAccessUpdateDefendant($input: UpdateDefendantInput!) {
    limitedAccessUpdateDefendant(input: $input) {
      id
    }
  }
`
export type LimitedAccessUpdateDefendantMutationFn = Apollo.MutationFunction<
  LimitedAccessUpdateDefendantMutation,
  LimitedAccessUpdateDefendantMutationVariables
>

/**
 * __useLimitedAccessUpdateDefendantMutation__
 *
 * To run a mutation, you first call `useLimitedAccessUpdateDefendantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLimitedAccessUpdateDefendantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [limitedAccessUpdateDefendantMutation, { data, loading, error }] = useLimitedAccessUpdateDefendantMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLimitedAccessUpdateDefendantMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LimitedAccessUpdateDefendantMutation,
    LimitedAccessUpdateDefendantMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    LimitedAccessUpdateDefendantMutation,
    LimitedAccessUpdateDefendantMutationVariables
  >(LimitedAccessUpdateDefendantDocument, options)
}
export type LimitedAccessUpdateDefendantMutationHookResult = ReturnType<
  typeof useLimitedAccessUpdateDefendantMutation
>
export type LimitedAccessUpdateDefendantMutationResult = Apollo.MutationResult<LimitedAccessUpdateDefendantMutation>
export type LimitedAccessUpdateDefendantMutationOptions = Apollo.BaseMutationOptions<
  LimitedAccessUpdateDefendantMutation,
  LimitedAccessUpdateDefendantMutationVariables
>
