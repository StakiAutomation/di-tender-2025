import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type ProcessCollectionMutationVariables = Types.Exact<{
  input: Types.SignatureCollectionIdInput
}>

export type ProcessCollectionMutation = {
  __typename?: 'Mutation'
  signatureCollectionAdminProcess: {
    __typename?: 'SignatureCollectionSuccess'
    success: boolean
  }
}

export const ProcessCollectionDocument = gql`
  mutation processCollection($input: SignatureCollectionIdInput!) {
    signatureCollectionAdminProcess(input: $input) {
      success
    }
  }
`
export type ProcessCollectionMutationFn = Apollo.MutationFunction<
  ProcessCollectionMutation,
  ProcessCollectionMutationVariables
>

/**
 * __useProcessCollectionMutation__
 *
 * To run a mutation, you first call `useProcessCollectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useProcessCollectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [processCollectionMutation, { data, loading, error }] = useProcessCollectionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useProcessCollectionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ProcessCollectionMutation,
    ProcessCollectionMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    ProcessCollectionMutation,
    ProcessCollectionMutationVariables
  >(ProcessCollectionDocument, options)
}
export type ProcessCollectionMutationHookResult = ReturnType<
  typeof useProcessCollectionMutation
>
export type ProcessCollectionMutationResult = Apollo.MutationResult<ProcessCollectionMutation>
export type ProcessCollectionMutationOptions = Apollo.BaseMutationOptions<
  ProcessCollectionMutation,
  ProcessCollectionMutationVariables
>
