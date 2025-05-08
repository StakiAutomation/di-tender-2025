import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type LockListMutationVariables = Types.Exact<{
  input: Types.FindEndorsementListInput
}>

export type LockListMutation = {
  __typename?: 'Mutation'
  endorsementSystemLockEndorsementList: {
    __typename?: 'EndorsementList'
    id: string
  }
}

export const LockListDocument = gql`
  mutation LockList($input: FindEndorsementListInput!) {
    endorsementSystemLockEndorsementList(input: $input) {
      id
    }
  }
`
export type LockListMutationFn = Apollo.MutationFunction<
  LockListMutation,
  LockListMutationVariables
>

/**
 * __useLockListMutation__
 *
 * To run a mutation, you first call `useLockListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLockListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [lockListMutation, { data, loading, error }] = useLockListMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLockListMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LockListMutation,
    LockListMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<LockListMutation, LockListMutationVariables>(
    LockListDocument,
    options,
  )
}
export type LockListMutationHookResult = ReturnType<typeof useLockListMutation>
export type LockListMutationResult = Apollo.MutationResult<LockListMutation>
export type LockListMutationOptions = Apollo.BaseMutationOptions<
  LockListMutation,
  LockListMutationVariables
>
