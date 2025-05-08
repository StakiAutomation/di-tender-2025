import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetCopaymentStatusQueryVariables = Types.Exact<{
  [key: string]: never
}>

export type GetCopaymentStatusQuery = {
  __typename?: 'Query'
  rightsPortalCopaymentStatus?: {
    __typename?: 'RightsPortalCopaymentStatus'
    maximumMonthlyPayment?: number | null
    maximumPayment?: number | null
    basePayment?: number | null
    insuranceStatus?: {
      __typename?: 'RightsPortalCopaymentInsuranceStatus'
      display?: string | null
      code?: string | null
    } | null
  } | null
}

export type GetCopaymentPeriodsQueryVariables = Types.Exact<{
  input: Types.RightsPortalCopaymentPeriodInput
}>

export type GetCopaymentPeriodsQuery = {
  __typename?: 'Query'
  rightsPortalCopaymentPeriods: {
    __typename?: 'RightsPortalCopaymentPeriodResponse'
    items: Array<{
      __typename?: 'RightsPortalCopaymentPeriod'
      id?: number | null
      maximumPayment?: number | null
      monthPayment?: number | null
      overpaid?: number | null
      repaid?: number | null
      month?: string | null
      status?: {
        __typename?: 'RightsPortalCopaymentInsuranceStatus'
        display?: string | null
        code?: string | null
      } | null
    }>
    errors: Array<{
      __typename?: 'RightsPortalPaymentError'
      status: Types.RightsPortalPaymentErrorStatus
    }>
  }
}

export type GetCopaymentBillsQueryVariables = Types.Exact<{
  input: Types.RightsPortalCopaymentBillsInput
}>

export type GetCopaymentBillsQuery = {
  __typename?: 'Query'
  rightsPortalCopaymentBills: {
    __typename?: 'RightsPortalCopaymentBillResponse'
    items: Array<{
      __typename?: 'RightsPortalCopaymentBill'
      id?: number | null
      serviceType?: string | null
      date?: string | null
      totalAmount?: number | null
      insuranceAmount?: number | null
      ownAmount?: number | null
      overpaid?: number | null
    }>
    errors: Array<{
      __typename?: 'RightsPortalPaymentError'
      status: Types.RightsPortalPaymentErrorStatus
    }>
  }
}

export type GetPaymentOverviewServiceTypesQueryVariables = Types.Exact<{
  [key: string]: never
}>

export type GetPaymentOverviewServiceTypesQuery = {
  __typename?: 'Query'
  rightsPortalPaymentOverviewServiceTypes: {
    __typename?: 'RightsPortalPaymentOverviewServiceTypeResponse'
    items: Array<{
      __typename?: 'RightsPortalPaymentOverviewServiceType'
      code?: string | null
      name?: string | null
    }>
    errors: Array<{
      __typename?: 'RightsPortalPaymentError'
      status: Types.RightsPortalPaymentErrorStatus
    }>
  }
}

export type GetPaymentOverviewQueryVariables = Types.Exact<{
  input: Types.RightsPortalPaymentOverviewInput
}>

export type GetPaymentOverviewQuery = {
  __typename?: 'Query'
  rightsPortalPaymentOverview: {
    __typename?: 'RightsPortalPaymentOverviewResponse'
    items: Array<{
      __typename?: 'RightsPortalPaymentOverview'
      credit?: number | null
      debt?: number | null
      bills?: Array<{
        __typename?: 'RightsPortalPaymentOverviewBill'
        date?: string | null
        totalAmount?: number | null
        insuranceAmount?: number | null
        documentId?: number | null
        downloadUrl?: string | null
        serviceType?: {
          __typename?: 'RightsPortalPaymentOverviewServiceType'
          code?: string | null
          name?: string | null
        } | null
      }> | null
    }>
    errors: Array<{
      __typename?: 'RightsPortalPaymentError'
      status: Types.RightsPortalPaymentErrorStatus
    }>
  }
}

export type GetPaymentOverviewDocumentQueryVariables = Types.Exact<{
  input: Types.RightsPortalPaymentOverviewDocumentInput
}>

export type GetPaymentOverviewDocumentQuery = {
  __typename?: 'Query'
  rightsPortalPaymentOverviewDocument: {
    __typename?: 'RightsPortalPaymentOverviewDocumentResponse'
    items: Array<{
      __typename?: 'RightsPortalPaymentOverviewDocument'
      contentType?: string | null
      fileName?: string | null
      data?: string | null
    }>
    errors: Array<{
      __typename?: 'RightsPortalPaymentError'
      status: Types.RightsPortalPaymentErrorStatus
    }>
  }
}

export const GetCopaymentStatusDocument = gql`
  query getCopaymentStatus {
    rightsPortalCopaymentStatus {
      insuranceStatus {
        display
        code
      }
      maximumMonthlyPayment
      maximumPayment
      basePayment
    }
  }
`

/**
 * __useGetCopaymentStatusQuery__
 *
 * To run a query within a React component, call `useGetCopaymentStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCopaymentStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCopaymentStatusQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCopaymentStatusQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCopaymentStatusQuery,
    GetCopaymentStatusQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetCopaymentStatusQuery,
    GetCopaymentStatusQueryVariables
  >(GetCopaymentStatusDocument, options)
}
export function useGetCopaymentStatusLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCopaymentStatusQuery,
    GetCopaymentStatusQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetCopaymentStatusQuery,
    GetCopaymentStatusQueryVariables
  >(GetCopaymentStatusDocument, options)
}
export type GetCopaymentStatusQueryHookResult = ReturnType<
  typeof useGetCopaymentStatusQuery
>
export type GetCopaymentStatusLazyQueryHookResult = ReturnType<
  typeof useGetCopaymentStatusLazyQuery
>
export type GetCopaymentStatusQueryResult = Apollo.QueryResult<
  GetCopaymentStatusQuery,
  GetCopaymentStatusQueryVariables
>
export const GetCopaymentPeriodsDocument = gql`
  query getCopaymentPeriods($input: RightsPortalCopaymentPeriodInput!) {
    rightsPortalCopaymentPeriods(input: $input) {
      items {
        id
        status {
          display
          code
        }
        maximumPayment
        monthPayment
        overpaid
        repaid
        month
      }
      errors {
        status
      }
    }
  }
`

/**
 * __useGetCopaymentPeriodsQuery__
 *
 * To run a query within a React component, call `useGetCopaymentPeriodsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCopaymentPeriodsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCopaymentPeriodsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetCopaymentPeriodsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetCopaymentPeriodsQuery,
    GetCopaymentPeriodsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetCopaymentPeriodsQuery,
    GetCopaymentPeriodsQueryVariables
  >(GetCopaymentPeriodsDocument, options)
}
export function useGetCopaymentPeriodsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCopaymentPeriodsQuery,
    GetCopaymentPeriodsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetCopaymentPeriodsQuery,
    GetCopaymentPeriodsQueryVariables
  >(GetCopaymentPeriodsDocument, options)
}
export type GetCopaymentPeriodsQueryHookResult = ReturnType<
  typeof useGetCopaymentPeriodsQuery
>
export type GetCopaymentPeriodsLazyQueryHookResult = ReturnType<
  typeof useGetCopaymentPeriodsLazyQuery
>
export type GetCopaymentPeriodsQueryResult = Apollo.QueryResult<
  GetCopaymentPeriodsQuery,
  GetCopaymentPeriodsQueryVariables
>
export const GetCopaymentBillsDocument = gql`
  query getCopaymentBills($input: RightsPortalCopaymentBillsInput!) {
    rightsPortalCopaymentBills(input: $input) {
      items {
        id
        serviceType
        date
        totalAmount
        insuranceAmount
        ownAmount
        overpaid
      }
      errors {
        status
      }
    }
  }
`

/**
 * __useGetCopaymentBillsQuery__
 *
 * To run a query within a React component, call `useGetCopaymentBillsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCopaymentBillsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCopaymentBillsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetCopaymentBillsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetCopaymentBillsQuery,
    GetCopaymentBillsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetCopaymentBillsQuery,
    GetCopaymentBillsQueryVariables
  >(GetCopaymentBillsDocument, options)
}
export function useGetCopaymentBillsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCopaymentBillsQuery,
    GetCopaymentBillsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetCopaymentBillsQuery,
    GetCopaymentBillsQueryVariables
  >(GetCopaymentBillsDocument, options)
}
export type GetCopaymentBillsQueryHookResult = ReturnType<
  typeof useGetCopaymentBillsQuery
>
export type GetCopaymentBillsLazyQueryHookResult = ReturnType<
  typeof useGetCopaymentBillsLazyQuery
>
export type GetCopaymentBillsQueryResult = Apollo.QueryResult<
  GetCopaymentBillsQuery,
  GetCopaymentBillsQueryVariables
>
export const GetPaymentOverviewServiceTypesDocument = gql`
  query getPaymentOverviewServiceTypes {
    rightsPortalPaymentOverviewServiceTypes {
      items {
        code
        name
      }
      errors {
        status
      }
    }
  }
`

/**
 * __useGetPaymentOverviewServiceTypesQuery__
 *
 * To run a query within a React component, call `useGetPaymentOverviewServiceTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaymentOverviewServiceTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaymentOverviewServiceTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPaymentOverviewServiceTypesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetPaymentOverviewServiceTypesQuery,
    GetPaymentOverviewServiceTypesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetPaymentOverviewServiceTypesQuery,
    GetPaymentOverviewServiceTypesQueryVariables
  >(GetPaymentOverviewServiceTypesDocument, options)
}
export function useGetPaymentOverviewServiceTypesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPaymentOverviewServiceTypesQuery,
    GetPaymentOverviewServiceTypesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetPaymentOverviewServiceTypesQuery,
    GetPaymentOverviewServiceTypesQueryVariables
  >(GetPaymentOverviewServiceTypesDocument, options)
}
export type GetPaymentOverviewServiceTypesQueryHookResult = ReturnType<
  typeof useGetPaymentOverviewServiceTypesQuery
>
export type GetPaymentOverviewServiceTypesLazyQueryHookResult = ReturnType<
  typeof useGetPaymentOverviewServiceTypesLazyQuery
>
export type GetPaymentOverviewServiceTypesQueryResult = Apollo.QueryResult<
  GetPaymentOverviewServiceTypesQuery,
  GetPaymentOverviewServiceTypesQueryVariables
>
export const GetPaymentOverviewDocument = gql`
  query getPaymentOverview($input: RightsPortalPaymentOverviewInput!) {
    rightsPortalPaymentOverview(input: $input) {
      items {
        credit
        debt
        bills {
          date
          serviceType {
            code
            name
          }
          totalAmount
          insuranceAmount
          documentId
          downloadUrl
        }
      }
      errors {
        status
      }
    }
  }
`

/**
 * __useGetPaymentOverviewQuery__
 *
 * To run a query within a React component, call `useGetPaymentOverviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaymentOverviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaymentOverviewQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetPaymentOverviewQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetPaymentOverviewQuery,
    GetPaymentOverviewQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetPaymentOverviewQuery,
    GetPaymentOverviewQueryVariables
  >(GetPaymentOverviewDocument, options)
}
export function useGetPaymentOverviewLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPaymentOverviewQuery,
    GetPaymentOverviewQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetPaymentOverviewQuery,
    GetPaymentOverviewQueryVariables
  >(GetPaymentOverviewDocument, options)
}
export type GetPaymentOverviewQueryHookResult = ReturnType<
  typeof useGetPaymentOverviewQuery
>
export type GetPaymentOverviewLazyQueryHookResult = ReturnType<
  typeof useGetPaymentOverviewLazyQuery
>
export type GetPaymentOverviewQueryResult = Apollo.QueryResult<
  GetPaymentOverviewQuery,
  GetPaymentOverviewQueryVariables
>
export const GetPaymentOverviewDocumentDocument = gql`
  query getPaymentOverviewDocument(
    $input: RightsPortalPaymentOverviewDocumentInput!
  ) {
    rightsPortalPaymentOverviewDocument(input: $input) {
      items {
        contentType
        fileName
        data
      }
      errors {
        status
      }
    }
  }
`

/**
 * __useGetPaymentOverviewDocumentQuery__
 *
 * To run a query within a React component, call `useGetPaymentOverviewDocumentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaymentOverviewDocumentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaymentOverviewDocumentQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetPaymentOverviewDocumentQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetPaymentOverviewDocumentQuery,
    GetPaymentOverviewDocumentQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetPaymentOverviewDocumentQuery,
    GetPaymentOverviewDocumentQueryVariables
  >(GetPaymentOverviewDocumentDocument, options)
}
export function useGetPaymentOverviewDocumentLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPaymentOverviewDocumentQuery,
    GetPaymentOverviewDocumentQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetPaymentOverviewDocumentQuery,
    GetPaymentOverviewDocumentQueryVariables
  >(GetPaymentOverviewDocumentDocument, options)
}
export type GetPaymentOverviewDocumentQueryHookResult = ReturnType<
  typeof useGetPaymentOverviewDocumentQuery
>
export type GetPaymentOverviewDocumentLazyQueryHookResult = ReturnType<
  typeof useGetPaymentOverviewDocumentLazyQuery
>
export type GetPaymentOverviewDocumentQueryResult = Apollo.QueryResult<
  GetPaymentOverviewDocumentQuery,
  GetPaymentOverviewDocumentQueryVariables
>
