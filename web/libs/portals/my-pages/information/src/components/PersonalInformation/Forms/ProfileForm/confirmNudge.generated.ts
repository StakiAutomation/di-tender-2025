import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type ConfirmNudgeMutationVariables = Types.Exact<{
  [key: string]: never
}>

export type ConfirmNudgeMutation = {
  __typename?: 'Mutation'
  userProfileConfirmNudge: boolean
}

export const ConfirmNudgeDocument = gql`
  mutation confirmNudge {
    userProfileConfirmNudge
  }
`
export type ConfirmNudgeMutationFn = Apollo.MutationFunction<
  ConfirmNudgeMutation,
  ConfirmNudgeMutationVariables
>

/**
 * __useConfirmNudgeMutation__
 *
 * To run a mutation, you first call `useConfirmNudgeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmNudgeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmNudgeMutation, { data, loading, error }] = useConfirmNudgeMutation({
 *   variables: {
 *   },
 * });
 */
export function useConfirmNudgeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ConfirmNudgeMutation,
    ConfirmNudgeMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    ConfirmNudgeMutation,
    ConfirmNudgeMutationVariables
  >(ConfirmNudgeDocument, options)
}
export type ConfirmNudgeMutationHookResult = ReturnType<
  typeof useConfirmNudgeMutation
>
export type ConfirmNudgeMutationResult = Apollo.MutationResult<ConfirmNudgeMutation>
export type ConfirmNudgeMutationOptions = Apollo.BaseMutationOptions<
  ConfirmNudgeMutation,
  ConfirmNudgeMutationVariables
>
