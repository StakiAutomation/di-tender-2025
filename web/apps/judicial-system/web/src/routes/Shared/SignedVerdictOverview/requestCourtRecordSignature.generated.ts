import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type RequestCourtRecordSignatureMutationVariables = Types.Exact<{
  input: Types.RequestSignatureInput
}>

export type RequestCourtRecordSignatureMutation = {
  __typename?: 'Mutation'
  requestCourtRecordSignature?: {
    __typename?: 'RequestSignatureResponse'
    controlCode: string
    documentToken: string
  } | null
}

export const RequestCourtRecordSignatureDocument = gql`
  mutation RequestCourtRecordSignature($input: RequestSignatureInput!) {
    requestCourtRecordSignature(input: $input) {
      controlCode
      documentToken
    }
  }
`
export type RequestCourtRecordSignatureMutationFn = Apollo.MutationFunction<
  RequestCourtRecordSignatureMutation,
  RequestCourtRecordSignatureMutationVariables
>

/**
 * __useRequestCourtRecordSignatureMutation__
 *
 * To run a mutation, you first call `useRequestCourtRecordSignatureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestCourtRecordSignatureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestCourtRecordSignatureMutation, { data, loading, error }] = useRequestCourtRecordSignatureMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRequestCourtRecordSignatureMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RequestCourtRecordSignatureMutation,
    RequestCourtRecordSignatureMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    RequestCourtRecordSignatureMutation,
    RequestCourtRecordSignatureMutationVariables
  >(RequestCourtRecordSignatureDocument, options)
}
export type RequestCourtRecordSignatureMutationHookResult = ReturnType<
  typeof useRequestCourtRecordSignatureMutation
>
export type RequestCourtRecordSignatureMutationResult = Apollo.MutationResult<RequestCourtRecordSignatureMutation>
export type RequestCourtRecordSignatureMutationOptions = Apollo.BaseMutationOptions<
  RequestCourtRecordSignatureMutation,
  RequestCourtRecordSignatureMutationVariables
>
