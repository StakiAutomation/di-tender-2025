import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type UnlockListMutationVariables = Types.Exact<{
  input: Types.FindEndorsementListInput
}>

export type UnlockListMutation = {
  __typename?: 'Mutation'
  endorsementSystemUnlockEndorsementList: {
    __typename?: 'EndorsementList'
    id: string
  }
}

export const UnlockListDocument = gql`
  mutation unlockList($input: FindEndorsementListInput!) {
    endorsementSystemUnlockEndorsementList(input: $input) {
      id
    }
  }
`
export type UnlockListMutationFn = Apollo.MutationFunction<
  UnlockListMutation,
  UnlockListMutationVariables
>

/**
 * __useUnlockListMutation__
 *
 * To run a mutation, you first call `useUnlockListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnlockListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unlockListMutation, { data, loading, error }] = useUnlockListMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUnlockListMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UnlockListMutation,
    UnlockListMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UnlockListMutation, UnlockListMutationVariables>(
    UnlockListDocument,
    options,
  )
}
export type UnlockListMutationHookResult = ReturnType<
  typeof useUnlockListMutation
>
export type UnlockListMutationResult = Apollo.MutationResult<UnlockListMutation>
export type UnlockListMutationOptions = Apollo.BaseMutationOptions<
  UnlockListMutation,
  UnlockListMutationVariables
>
