import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type RequestRulingSignatureMutationVariables = Types.Exact<{
  input: Types.RequestSignatureInput
}>

export type RequestRulingSignatureMutation = {
  __typename?: 'Mutation'
  requestRulingSignature?: {
    __typename?: 'RequestSignatureResponse'
    controlCode: string
    documentToken: string
  } | null
}

export const RequestRulingSignatureDocument = gql`
  mutation RequestRulingSignature($input: RequestSignatureInput!) {
    requestRulingSignature(input: $input) {
      controlCode
      documentToken
    }
  }
`
export type RequestRulingSignatureMutationFn = Apollo.MutationFunction<
  RequestRulingSignatureMutation,
  RequestRulingSignatureMutationVariables
>

/**
 * __useRequestRulingSignatureMutation__
 *
 * To run a mutation, you first call `useRequestRulingSignatureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestRulingSignatureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestRulingSignatureMutation, { data, loading, error }] = useRequestRulingSignatureMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRequestRulingSignatureMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RequestRulingSignatureMutation,
    RequestRulingSignatureMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    RequestRulingSignatureMutation,
    RequestRulingSignatureMutationVariables
  >(RequestRulingSignatureDocument, options)
}
export type RequestRulingSignatureMutationHookResult = ReturnType<
  typeof useRequestRulingSignatureMutation
>
export type RequestRulingSignatureMutationResult = Apollo.MutationResult<RequestRulingSignatureMutation>
export type RequestRulingSignatureMutationOptions = Apollo.BaseMutationOptions<
  RequestRulingSignatureMutation,
  RequestRulingSignatureMutationVariables
>
