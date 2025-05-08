import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetHmsLoansHistoryQueryVariables = Types.Exact<{
  [key: string]: never
}>

export type GetHmsLoansHistoryQuery = {
  __typename?: 'Query'
  hmsLoansHistory?: Array<{
    __typename?: 'HmsLoansHistory'
    loanId?: number | null
    name?: string | null
    homeAddress?: string | null
    postNumber?: number | null
    municipality?: string | null
    firstInterestDate?: any | null
    firstPaymentDate?: any | null
    totalNumberOfPayments?: number | null
    numberOfPaymentPerYear?: number | null
    balancePayment?: string | null
    paymentFee?: string | null
    paymentDelayment?: string | null
    temporaryPaymentDelayment?: string | null
    variableInterest?: string | null
    affiliateLoan?: string | null
    priceIndexType?: string | null
    baseIndex?: number | null
    interest?: number | null
    originalLoanAmount?: number | null
    nextPaymentDate?: any | null
    lastPaymentDate?: any | null
    lastUnpaidInvoiceDate?: any | null
    numberOfPaymentDatesRemaining?: number | null
    statusSettlementPayment?: number | null
    lastPaymentAmount?: number | null
    totalDueAmount?: number | null
    balanceWithoutInterestPriceImprovements?: number | null
    accruedInterestPriceImprovements?: number | null
    remainingBalanceWithoutDebt?: number | null
    repaymentFee?: number | null
    loanAmountWithRepayment?: number | null
    loanStatus?: string | null
    nationalId?: string | null
    propertyId?: string | null
    propertyAddress?: string | null
    propertyMunicipality?: string | null
    epilog?: string | null
    municipalityNumber?: string | null
    loanType?: string | null
    installments?: number | null
    creditor?: string | null
    coPayerName?: string | null
    coPayerNationalId?: string | null
    properties?: Array<{
      __typename?: 'HmsLoansProperty'
      propertyId?: string | null
      propertyAddress?: string | null
      propertyMunicipality?: string | null
      epilog?: string | null
      municipalityNumber?: string | null
    }> | null
    coPayers?: Array<{
      __typename?: 'HmsLoansCoPayer'
      coPayerName?: string | null
      coPayerNationalId?: string | null
    }> | null
  }> | null
}

export type GetHmsLoansHistoryPdfQueryVariables = Types.Exact<{
  [key: string]: never
}>

export type GetHmsLoansHistoryPdfQuery = {
  __typename?: 'Query'
  hmsLoansHistoryPdf?: {
    __typename?: 'HmsLoansHistoryPdf'
    mime?: string | null
    data?: string | null
    name?: string | null
  } | null
}

export type GetHmsLoansPaymentHistoryQueryVariables = Types.Exact<{
  input: Types.GetHmsLoansPaymentHistoryInput
}>

export type GetHmsLoansPaymentHistoryQuery = {
  __typename?: 'Query'
  hmsLoansPaymentHistory?: Array<{
    __typename?: 'HmsLoansPaymentHistory'
    paymentDate?: any | null
    transactionDate?: any | null
    paymentAmount?: number | null
    interest?: number | null
    priceImprovementPayment?: number | null
    priceImprovementInterest?: number | null
    costPayment?: number | null
    defaultInterest?: number | null
    totalPayment?: number | null
    loanId?: number | null
  }> | null
}

export const GetHmsLoansHistoryDocument = gql`
  query GetHmsLoansHistory {
    hmsLoansHistory {
      loanId
      name
      homeAddress
      postNumber
      municipality
      firstInterestDate
      firstPaymentDate
      totalNumberOfPayments
      numberOfPaymentPerYear
      balancePayment
      paymentFee
      paymentDelayment
      temporaryPaymentDelayment
      variableInterest
      affiliateLoan
      priceIndexType
      baseIndex
      interest
      originalLoanAmount
      nextPaymentDate
      lastPaymentDate
      lastUnpaidInvoiceDate
      numberOfPaymentDatesRemaining
      statusSettlementPayment
      lastPaymentAmount
      totalDueAmount
      balanceWithoutInterestPriceImprovements
      accruedInterestPriceImprovements
      remainingBalanceWithoutDebt
      repaymentFee
      loanAmountWithRepayment
      loanStatus
      nationalId
      propertyId
      propertyAddress
      propertyMunicipality
      epilog
      municipalityNumber
      loanType
      installments
      creditor
      coPayerName
      coPayerNationalId
      properties {
        propertyId
        propertyAddress
        propertyMunicipality
        epilog
        municipalityNumber
      }
      coPayers {
        coPayerName
        coPayerNationalId
      }
    }
  }
`

/**
 * __useGetHmsLoansHistoryQuery__
 *
 * To run a query within a React component, call `useGetHmsLoansHistoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHmsLoansHistoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHmsLoansHistoryQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHmsLoansHistoryQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetHmsLoansHistoryQuery,
    GetHmsLoansHistoryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetHmsLoansHistoryQuery,
    GetHmsLoansHistoryQueryVariables
  >(GetHmsLoansHistoryDocument, options)
}
export function useGetHmsLoansHistoryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetHmsLoansHistoryQuery,
    GetHmsLoansHistoryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetHmsLoansHistoryQuery,
    GetHmsLoansHistoryQueryVariables
  >(GetHmsLoansHistoryDocument, options)
}
export type GetHmsLoansHistoryQueryHookResult = ReturnType<
  typeof useGetHmsLoansHistoryQuery
>
export type GetHmsLoansHistoryLazyQueryHookResult = ReturnType<
  typeof useGetHmsLoansHistoryLazyQuery
>
export type GetHmsLoansHistoryQueryResult = Apollo.QueryResult<
  GetHmsLoansHistoryQuery,
  GetHmsLoansHistoryQueryVariables
>
export const GetHmsLoansHistoryPdfDocument = gql`
  query GetHmsLoansHistoryPdf {
    hmsLoansHistoryPdf {
      mime
      data
      name
    }
  }
`

/**
 * __useGetHmsLoansHistoryPdfQuery__
 *
 * To run a query within a React component, call `useGetHmsLoansHistoryPdfQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHmsLoansHistoryPdfQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHmsLoansHistoryPdfQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHmsLoansHistoryPdfQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetHmsLoansHistoryPdfQuery,
    GetHmsLoansHistoryPdfQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetHmsLoansHistoryPdfQuery,
    GetHmsLoansHistoryPdfQueryVariables
  >(GetHmsLoansHistoryPdfDocument, options)
}
export function useGetHmsLoansHistoryPdfLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetHmsLoansHistoryPdfQuery,
    GetHmsLoansHistoryPdfQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetHmsLoansHistoryPdfQuery,
    GetHmsLoansHistoryPdfQueryVariables
  >(GetHmsLoansHistoryPdfDocument, options)
}
export type GetHmsLoansHistoryPdfQueryHookResult = ReturnType<
  typeof useGetHmsLoansHistoryPdfQuery
>
export type GetHmsLoansHistoryPdfLazyQueryHookResult = ReturnType<
  typeof useGetHmsLoansHistoryPdfLazyQuery
>
export type GetHmsLoansHistoryPdfQueryResult = Apollo.QueryResult<
  GetHmsLoansHistoryPdfQuery,
  GetHmsLoansHistoryPdfQueryVariables
>
export const GetHmsLoansPaymentHistoryDocument = gql`
  query GetHmsLoansPaymentHistory($input: GetHmsLoansPaymentHistoryInput!) {
    hmsLoansPaymentHistory(input: $input) {
      paymentDate
      transactionDate
      paymentAmount
      interest
      priceImprovementPayment
      priceImprovementInterest
      costPayment
      defaultInterest
      totalPayment
      loanId
    }
  }
`

/**
 * __useGetHmsLoansPaymentHistoryQuery__
 *
 * To run a query within a React component, call `useGetHmsLoansPaymentHistoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHmsLoansPaymentHistoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHmsLoansPaymentHistoryQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetHmsLoansPaymentHistoryQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetHmsLoansPaymentHistoryQuery,
    GetHmsLoansPaymentHistoryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetHmsLoansPaymentHistoryQuery,
    GetHmsLoansPaymentHistoryQueryVariables
  >(GetHmsLoansPaymentHistoryDocument, options)
}
export function useGetHmsLoansPaymentHistoryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetHmsLoansPaymentHistoryQuery,
    GetHmsLoansPaymentHistoryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetHmsLoansPaymentHistoryQuery,
    GetHmsLoansPaymentHistoryQueryVariables
  >(GetHmsLoansPaymentHistoryDocument, options)
}
export type GetHmsLoansPaymentHistoryQueryHookResult = ReturnType<
  typeof useGetHmsLoansPaymentHistoryQuery
>
export type GetHmsLoansPaymentHistoryLazyQueryHookResult = ReturnType<
  typeof useGetHmsLoansPaymentHistoryLazyQuery
>
export type GetHmsLoansPaymentHistoryQueryResult = Apollo.QueryResult<
  GetHmsLoansPaymentHistoryQuery,
  GetHmsLoansPaymentHistoryQueryVariables
>
