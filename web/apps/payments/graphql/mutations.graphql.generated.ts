import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type VerifyCardMutationVariables = Types.Exact<{
  input: Types.PaymentsVerifyCardInput
}>

export type VerifyCardMutation = {
  __typename?: 'Mutation'
  paymentsVerifyCard: {
    __typename?: 'PaymentsVerifyCardResponse'
    cardVerificationRawResponse: string
    postUrl: string
    isSuccess: boolean
    scriptPath: string
    responseCode: string
    verificationFields: Array<{
      __typename?: 'PaymentsCardVerificationField'
      name: string
      value: string
    }>
    additionalFields: Array<{
      __typename?: 'PaymentsCardVerificationField'
      name: string
      value: string
    }>
  }
}

export type VerificationCallbackMutationVariables = Types.Exact<{
  input: Types.PaymentsCardVerificationCallbackInput
}>

export type VerificationCallbackMutation = {
  __typename?: 'Mutation'
  paymentsVerificationCallback: {
    __typename?: 'PaymentsCardVerificationResponse'
    paymentFlowId: string
  }
}

export type ChargeCardMutationVariables = Types.Exact<{
  input: Types.PaymentsChargeCardInput
}>

export type ChargeCardMutation = {
  __typename?: 'Mutation'
  paymentsChargeCard: {
    __typename?: 'PaymentsChargeCardResponse'
    isSuccess: boolean
    responseCode: string
  }
}

export type CreateInvoiceMutationVariables = Types.Exact<{
  input: Types.PaymentsCreateInvoiceInput
}>

export type CreateInvoiceMutation = {
  __typename?: 'Mutation'
  paymentsCreateInvoice: {
    __typename?: 'PaymentsCreateInvoiceResponse'
    isSuccess: boolean
    responseCode?: string | null
  }
}

export const VerifyCardDocument = gql`
  mutation verifyCard($input: PaymentsVerifyCardInput!) {
    paymentsVerifyCard(input: $input) {
      cardVerificationRawResponse
      postUrl
      verificationFields {
        name
        value
      }
      additionalFields {
        name
        value
      }
      isSuccess
      scriptPath
      responseCode
    }
  }
`
export type VerifyCardMutationFn = Apollo.MutationFunction<
  VerifyCardMutation,
  VerifyCardMutationVariables
>

/**
 * __useVerifyCardMutation__
 *
 * To run a mutation, you first call `useVerifyCardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyCardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyCardMutation, { data, loading, error }] = useVerifyCardMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useVerifyCardMutation(
  baseOptions?: Apollo.MutationHookOptions<
    VerifyCardMutation,
    VerifyCardMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<VerifyCardMutation, VerifyCardMutationVariables>(
    VerifyCardDocument,
    options,
  )
}
export type VerifyCardMutationHookResult = ReturnType<
  typeof useVerifyCardMutation
>
export type VerifyCardMutationResult = Apollo.MutationResult<VerifyCardMutation>
export type VerifyCardMutationOptions = Apollo.BaseMutationOptions<
  VerifyCardMutation,
  VerifyCardMutationVariables
>
export const VerificationCallbackDocument = gql`
  mutation verificationCallback(
    $input: PaymentsCardVerificationCallbackInput!
  ) {
    paymentsVerificationCallback(input: $input) {
      paymentFlowId
    }
  }
`
export type VerificationCallbackMutationFn = Apollo.MutationFunction<
  VerificationCallbackMutation,
  VerificationCallbackMutationVariables
>

/**
 * __useVerificationCallbackMutation__
 *
 * To run a mutation, you first call `useVerificationCallbackMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerificationCallbackMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verificationCallbackMutation, { data, loading, error }] = useVerificationCallbackMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useVerificationCallbackMutation(
  baseOptions?: Apollo.MutationHookOptions<
    VerificationCallbackMutation,
    VerificationCallbackMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    VerificationCallbackMutation,
    VerificationCallbackMutationVariables
  >(VerificationCallbackDocument, options)
}
export type VerificationCallbackMutationHookResult = ReturnType<
  typeof useVerificationCallbackMutation
>
export type VerificationCallbackMutationResult = Apollo.MutationResult<VerificationCallbackMutation>
export type VerificationCallbackMutationOptions = Apollo.BaseMutationOptions<
  VerificationCallbackMutation,
  VerificationCallbackMutationVariables
>
export const ChargeCardDocument = gql`
  mutation chargeCard($input: PaymentsChargeCardInput!) {
    paymentsChargeCard(input: $input) {
      isSuccess
      responseCode
    }
  }
`
export type ChargeCardMutationFn = Apollo.MutationFunction<
  ChargeCardMutation,
  ChargeCardMutationVariables
>

/**
 * __useChargeCardMutation__
 *
 * To run a mutation, you first call `useChargeCardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChargeCardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [chargeCardMutation, { data, loading, error }] = useChargeCardMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useChargeCardMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ChargeCardMutation,
    ChargeCardMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<ChargeCardMutation, ChargeCardMutationVariables>(
    ChargeCardDocument,
    options,
  )
}
export type ChargeCardMutationHookResult = ReturnType<
  typeof useChargeCardMutation
>
export type ChargeCardMutationResult = Apollo.MutationResult<ChargeCardMutation>
export type ChargeCardMutationOptions = Apollo.BaseMutationOptions<
  ChargeCardMutation,
  ChargeCardMutationVariables
>
export const CreateInvoiceDocument = gql`
  mutation createInvoice($input: PaymentsCreateInvoiceInput!) {
    paymentsCreateInvoice(input: $input) {
      isSuccess
      responseCode
    }
  }
`
export type CreateInvoiceMutationFn = Apollo.MutationFunction<
  CreateInvoiceMutation,
  CreateInvoiceMutationVariables
>

/**
 * __useCreateInvoiceMutation__
 *
 * To run a mutation, you first call `useCreateInvoiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateInvoiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createInvoiceMutation, { data, loading, error }] = useCreateInvoiceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateInvoiceMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateInvoiceMutation,
    CreateInvoiceMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateInvoiceMutation,
    CreateInvoiceMutationVariables
  >(CreateInvoiceDocument, options)
}
export type CreateInvoiceMutationHookResult = ReturnType<
  typeof useCreateInvoiceMutation
>
export type CreateInvoiceMutationResult = Apollo.MutationResult<CreateInvoiceMutation>
export type CreateInvoiceMutationOptions = Apollo.BaseMutationOptions<
  CreateInvoiceMutation,
  CreateInvoiceMutationVariables
>
