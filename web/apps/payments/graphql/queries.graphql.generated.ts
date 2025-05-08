import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetOrganizationByNationalIdQueryVariables = Types.Exact<{
  input: Types.GetOrganizationByNationalIdInput
}>

export type GetOrganizationByNationalIdQuery = {
  __typename?: 'Query'
  getOrganizationByNationalId?: {
    __typename?: 'Organization'
    id: string
    title: string
    shortTitle: string
    logo?: { __typename?: 'Image'; url: string; title: string } | null
  } | null
}

export type GetPaymentFlowQueryVariables = Types.Exact<{
  input: Types.GetPaymentFlowInput
}>

export type GetPaymentFlowQuery = {
  __typename?: 'Query'
  paymentsGetFlow: {
    __typename?: 'PaymentsGetPaymentFlowResponse'
    id: string
    paymentStatus: Types.PaymentsGetFlowPaymentStatus
    productTitle: string
    productPrice: number
    payerNationalId: string
    payerName: string
    existingInvoiceId?: string | null
    availablePaymentMethods: Array<string>
    organisationId: string
    metadata?: { [key: string]: any } | null
    returnUrl?: string | null
    redirectToReturnUrlOnSuccess?: boolean | null
    updatedAt: Date
  }
}

export type GetVerificationStatusQueryVariables = Types.Exact<{
  input: Types.GetPaymentFlowInput
}>

export type GetVerificationStatusQuery = {
  __typename?: 'Query'
  paymentsGetVerificationStatus: {
    __typename?: 'PaymentsGetVerificationStatus'
    isVerified: boolean
  }
}

export const GetOrganizationByNationalIdDocument = gql`
  query getOrganizationByNationalId($input: GetOrganizationByNationalIdInput!) {
    getOrganizationByNationalId(input: $input) {
      id
      title
      shortTitle
      logo {
        url
        title
      }
    }
  }
`

/**
 * __useGetOrganizationByNationalIdQuery__
 *
 * To run a query within a React component, call `useGetOrganizationByNationalIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrganizationByNationalIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrganizationByNationalIdQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetOrganizationByNationalIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetOrganizationByNationalIdQuery,
    GetOrganizationByNationalIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetOrganizationByNationalIdQuery,
    GetOrganizationByNationalIdQueryVariables
  >(GetOrganizationByNationalIdDocument, options)
}
export function useGetOrganizationByNationalIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetOrganizationByNationalIdQuery,
    GetOrganizationByNationalIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetOrganizationByNationalIdQuery,
    GetOrganizationByNationalIdQueryVariables
  >(GetOrganizationByNationalIdDocument, options)
}
export type GetOrganizationByNationalIdQueryHookResult = ReturnType<
  typeof useGetOrganizationByNationalIdQuery
>
export type GetOrganizationByNationalIdLazyQueryHookResult = ReturnType<
  typeof useGetOrganizationByNationalIdLazyQuery
>
export type GetOrganizationByNationalIdQueryResult = Apollo.QueryResult<
  GetOrganizationByNationalIdQuery,
  GetOrganizationByNationalIdQueryVariables
>
export const GetPaymentFlowDocument = gql`
  query getPaymentFlow($input: GetPaymentFlowInput!) {
    paymentsGetFlow(input: $input) {
      id
      paymentStatus
      productTitle
      productPrice
      payerNationalId
      payerName
      existingInvoiceId
      availablePaymentMethods
      organisationId
      metadata
      returnUrl
      redirectToReturnUrlOnSuccess
      updatedAt
    }
  }
`

/**
 * __useGetPaymentFlowQuery__
 *
 * To run a query within a React component, call `useGetPaymentFlowQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaymentFlowQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaymentFlowQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetPaymentFlowQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetPaymentFlowQuery,
    GetPaymentFlowQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetPaymentFlowQuery, GetPaymentFlowQueryVariables>(
    GetPaymentFlowDocument,
    options,
  )
}
export function useGetPaymentFlowLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPaymentFlowQuery,
    GetPaymentFlowQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetPaymentFlowQuery, GetPaymentFlowQueryVariables>(
    GetPaymentFlowDocument,
    options,
  )
}
export type GetPaymentFlowQueryHookResult = ReturnType<
  typeof useGetPaymentFlowQuery
>
export type GetPaymentFlowLazyQueryHookResult = ReturnType<
  typeof useGetPaymentFlowLazyQuery
>
export type GetPaymentFlowQueryResult = Apollo.QueryResult<
  GetPaymentFlowQuery,
  GetPaymentFlowQueryVariables
>
export const GetVerificationStatusDocument = gql`
  query getVerificationStatus($input: GetPaymentFlowInput!) {
    paymentsGetVerificationStatus(input: $input) {
      isVerified
    }
  }
`

/**
 * __useGetVerificationStatusQuery__
 *
 * To run a query within a React component, call `useGetVerificationStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVerificationStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVerificationStatusQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetVerificationStatusQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetVerificationStatusQuery,
    GetVerificationStatusQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetVerificationStatusQuery,
    GetVerificationStatusQueryVariables
  >(GetVerificationStatusDocument, options)
}
export function useGetVerificationStatusLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetVerificationStatusQuery,
    GetVerificationStatusQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetVerificationStatusQuery,
    GetVerificationStatusQueryVariables
  >(GetVerificationStatusDocument, options)
}
export type GetVerificationStatusQueryHookResult = ReturnType<
  typeof useGetVerificationStatusQuery
>
export type GetVerificationStatusLazyQueryHookResult = ReturnType<
  typeof useGetVerificationStatusLazyQuery
>
export type GetVerificationStatusQueryResult = Apollo.QueryResult<
  GetVerificationStatusQuery,
  GetVerificationStatusQueryVariables
>
