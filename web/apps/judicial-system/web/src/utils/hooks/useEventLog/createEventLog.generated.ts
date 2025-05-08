import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type CreateEventLogMutationVariables = Types.Exact<{
  input: Types.CreateEventLogInput
}>

export type CreateEventLogMutation = {
  __typename?: 'Mutation'
  createEventLog?: boolean | null
}

export const CreateEventLogDocument = gql`
  mutation CreateEventLog($input: CreateEventLogInput!) {
    createEventLog(input: $input)
  }
`
export type CreateEventLogMutationFn = Apollo.MutationFunction<
  CreateEventLogMutation,
  CreateEventLogMutationVariables
>

/**
 * __useCreateEventLogMutation__
 *
 * To run a mutation, you first call `useCreateEventLogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEventLogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEventLogMutation, { data, loading, error }] = useCreateEventLogMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateEventLogMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateEventLogMutation,
    CreateEventLogMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateEventLogMutation,
    CreateEventLogMutationVariables
  >(CreateEventLogDocument, options)
}
export type CreateEventLogMutationHookResult = ReturnType<
  typeof useCreateEventLogMutation
>
export type CreateEventLogMutationResult = Apollo.MutationResult<CreateEventLogMutation>
export type CreateEventLogMutationOptions = Apollo.BaseMutationOptions<
  CreateEventLogMutation,
  CreateEventLogMutationVariables
>
