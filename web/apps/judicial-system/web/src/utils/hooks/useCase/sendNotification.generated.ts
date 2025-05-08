import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type SendNotificationMutationVariables = Types.Exact<{
  input: Types.SendNotificationInput
}>

export type SendNotificationMutation = {
  __typename?: 'Mutation'
  sendNotification?: {
    __typename?: 'SendNotificationResponse'
    notificationSent: boolean
  } | null
}

export const SendNotificationDocument = gql`
  mutation SendNotification($input: SendNotificationInput!) {
    sendNotification(input: $input) {
      notificationSent
    }
  }
`
export type SendNotificationMutationFn = Apollo.MutationFunction<
  SendNotificationMutation,
  SendNotificationMutationVariables
>

/**
 * __useSendNotificationMutation__
 *
 * To run a mutation, you first call `useSendNotificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendNotificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendNotificationMutation, { data, loading, error }] = useSendNotificationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSendNotificationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SendNotificationMutation,
    SendNotificationMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    SendNotificationMutation,
    SendNotificationMutationVariables
  >(SendNotificationDocument, options)
}
export type SendNotificationMutationHookResult = ReturnType<
  typeof useSendNotificationMutation
>
export type SendNotificationMutationResult = Apollo.MutationResult<SendNotificationMutation>
export type SendNotificationMutationOptions = Apollo.BaseMutationOptions<
  SendNotificationMutation,
  SendNotificationMutationVariables
>
