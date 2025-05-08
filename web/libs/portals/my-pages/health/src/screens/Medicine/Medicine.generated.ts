import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetDrugsDataQueryVariables = Types.Exact<{ [key: string]: never }>

export type GetDrugsDataQuery = {
  __typename?: 'Query'
  rightsPortalDrugPeriods: Array<{
    __typename?: 'RightsPortalDrugPeriod'
    id?: string | null
    dateFrom?: string | null
    dateTo?: string | null
    active?: boolean | null
    paidAmount?: number | null
    paymentStatus?: number | null
    numberOfBills?: number | null
    levelNumber?: number | null
    levelPercentage?: number | null
  }>
}

export type GetDrugsBillsQueryVariables = Types.Exact<{
  input: Types.RightsPortalDrugBillInput
}>

export type GetDrugsBillsQuery = {
  __typename?: 'Query'
  rightsPortalDrugBills: Array<{
    __typename?: 'RightsPortalDrugBill'
    id?: string | null
    date?: string | null
    description?: string | null
    totalCopaymentAmount?: number | null
    totalCustomerAmount?: number | null
    totalInsuranceAmount?: number | null
    totalExcessAmount?: number | null
    totalCalculatedForPaymentStepAmount?: number | null
  }>
}

export type GetDrugBillLineItemQueryVariables = Types.Exact<{
  input: Types.RightsPortalDrugsBillLineInput
}>

export type GetDrugBillLineItemQuery = {
  __typename?: 'Query'
  rightsPortalDrugBillLines: Array<{
    __typename?: 'RightsPortalDrugBillLine'
    billId?: string | null
    drugName?: string | null
    strength?: string | null
    quantity?: string | null
    units?: number | null
    salesPrice?: number | null
    copaymentAmount?: number | null
    excessAmount?: number | null
    customerAmount?: number | null
    insuranceAmount?: number | null
  }>
}

export type GetDrugsQueryVariables = Types.Exact<{
  input: Types.RightsPortalDrugInput
}>

export type GetDrugsQuery = {
  __typename?: 'Query'
  rightsPortalDrugs: {
    __typename?: 'RightsPortalPaginatedDrug'
    totalCount: number
    data: Array<{
      __typename?: 'RightsPortalDrug'
      nordicCode?: string | null
      atcCode?: string | null
      name?: string | null
      form?: string | null
      strength?: string | null
      packaging?: string | null
      price?: number | null
    }>
    pageInfo: {
      __typename?: 'PageInfoDto'
      hasNextPage: boolean
      hasPreviousPage?: boolean | null
      startCursor?: string | null
      endCursor?: string | null
    }
  }
}

export type GetDrugCalculationMutationVariables = Types.Exact<{
  input: Types.RightsPortalDrugCalculatorInput
}>

export type GetDrugCalculationMutation = {
  __typename?: 'Mutation'
  rightsPortalDrugsCalculator: {
    __typename?: 'RightsPortalDrugCalculatorResponse'
    totalUnits?: number | null
    totalPrice?: number | null
    totalCustomerPrice?: number | null
    drugs?: Array<{
      __typename?: 'RightsPortalDrugCalculation'
      lineNumber?: number | null
      referencePrice?: number | null
      customerPrice?: number | null
      calculatedCustomerPrice?: number | null
      insurancePrice?: number | null
      excessPrice?: number | null
      fullPrice?: number | null
      comment?: string | null
    }> | null
  }
}

export type GetDrugCertificatesQueryVariables = Types.Exact<{
  [key: string]: never
}>

export type GetDrugCertificatesQuery = {
  __typename?: 'Query'
  rightsPortalDrugCertificates: Array<{
    __typename?: 'RightsPortalDrugCertificate'
    id?: number | null
    atcCode?: string | null
    atcName?: string | null
    drugName?: string | null
    date?: string | null
    validFrom?: string | null
    validTo?: string | null
    doctor?: string | null
    processed?: boolean | null
    approved?: boolean | null
    rejected?: boolean | null
    expired?: boolean | null
    valid?: boolean | null
    comment?: string | null
    documentId?: number | null
    methylDoctors?: Array<{
      __typename?: 'RightsPortalMethylDoctor'
      name?: string | null
    }> | null
  }>
}

export const GetDrugsDataDocument = gql`
  query getDrugsData {
    rightsPortalDrugPeriods {
      id
      dateFrom
      dateTo
      active
      paidAmount
      paymentStatus
      numberOfBills
      levelNumber
      levelPercentage
    }
  }
`

/**
 * __useGetDrugsDataQuery__
 *
 * To run a query within a React component, call `useGetDrugsDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDrugsDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDrugsDataQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDrugsDataQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetDrugsDataQuery,
    GetDrugsDataQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetDrugsDataQuery, GetDrugsDataQueryVariables>(
    GetDrugsDataDocument,
    options,
  )
}
export function useGetDrugsDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetDrugsDataQuery,
    GetDrugsDataQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetDrugsDataQuery, GetDrugsDataQueryVariables>(
    GetDrugsDataDocument,
    options,
  )
}
export type GetDrugsDataQueryHookResult = ReturnType<
  typeof useGetDrugsDataQuery
>
export type GetDrugsDataLazyQueryHookResult = ReturnType<
  typeof useGetDrugsDataLazyQuery
>
export type GetDrugsDataQueryResult = Apollo.QueryResult<
  GetDrugsDataQuery,
  GetDrugsDataQueryVariables
>
export const GetDrugsBillsDocument = gql`
  query getDrugsBills($input: RightsPortalDrugBillInput!) {
    rightsPortalDrugBills(input: $input) {
      id
      date
      description
      totalCopaymentAmount
      totalCustomerAmount
      totalInsuranceAmount
      totalExcessAmount
      totalCalculatedForPaymentStepAmount
    }
  }
`

/**
 * __useGetDrugsBillsQuery__
 *
 * To run a query within a React component, call `useGetDrugsBillsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDrugsBillsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDrugsBillsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetDrugsBillsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetDrugsBillsQuery,
    GetDrugsBillsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetDrugsBillsQuery, GetDrugsBillsQueryVariables>(
    GetDrugsBillsDocument,
    options,
  )
}
export function useGetDrugsBillsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetDrugsBillsQuery,
    GetDrugsBillsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetDrugsBillsQuery, GetDrugsBillsQueryVariables>(
    GetDrugsBillsDocument,
    options,
  )
}
export type GetDrugsBillsQueryHookResult = ReturnType<
  typeof useGetDrugsBillsQuery
>
export type GetDrugsBillsLazyQueryHookResult = ReturnType<
  typeof useGetDrugsBillsLazyQuery
>
export type GetDrugsBillsQueryResult = Apollo.QueryResult<
  GetDrugsBillsQuery,
  GetDrugsBillsQueryVariables
>
export const GetDrugBillLineItemDocument = gql`
  query getDrugBillLineItem($input: RightsPortalDrugsBillLineInput!) {
    rightsPortalDrugBillLines(input: $input) {
      billId
      drugName
      strength
      quantity
      units
      salesPrice
      copaymentAmount
      excessAmount
      customerAmount
      insuranceAmount
    }
  }
`

/**
 * __useGetDrugBillLineItemQuery__
 *
 * To run a query within a React component, call `useGetDrugBillLineItemQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDrugBillLineItemQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDrugBillLineItemQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetDrugBillLineItemQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetDrugBillLineItemQuery,
    GetDrugBillLineItemQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetDrugBillLineItemQuery,
    GetDrugBillLineItemQueryVariables
  >(GetDrugBillLineItemDocument, options)
}
export function useGetDrugBillLineItemLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetDrugBillLineItemQuery,
    GetDrugBillLineItemQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetDrugBillLineItemQuery,
    GetDrugBillLineItemQueryVariables
  >(GetDrugBillLineItemDocument, options)
}
export type GetDrugBillLineItemQueryHookResult = ReturnType<
  typeof useGetDrugBillLineItemQuery
>
export type GetDrugBillLineItemLazyQueryHookResult = ReturnType<
  typeof useGetDrugBillLineItemLazyQuery
>
export type GetDrugBillLineItemQueryResult = Apollo.QueryResult<
  GetDrugBillLineItemQuery,
  GetDrugBillLineItemQueryVariables
>
export const GetDrugsDocument = gql`
  query getDrugs($input: RightsPortalDrugInput!) {
    rightsPortalDrugs(input: $input) {
      data {
        nordicCode
        atcCode
        name
        form
        strength
        packaging
        price
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      totalCount
    }
  }
`

/**
 * __useGetDrugsQuery__
 *
 * To run a query within a React component, call `useGetDrugsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDrugsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDrugsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetDrugsQuery(
  baseOptions: Apollo.QueryHookOptions<GetDrugsQuery, GetDrugsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetDrugsQuery, GetDrugsQueryVariables>(
    GetDrugsDocument,
    options,
  )
}
export function useGetDrugsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetDrugsQuery,
    GetDrugsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetDrugsQuery, GetDrugsQueryVariables>(
    GetDrugsDocument,
    options,
  )
}
export type GetDrugsQueryHookResult = ReturnType<typeof useGetDrugsQuery>
export type GetDrugsLazyQueryHookResult = ReturnType<
  typeof useGetDrugsLazyQuery
>
export type GetDrugsQueryResult = Apollo.QueryResult<
  GetDrugsQuery,
  GetDrugsQueryVariables
>
export const GetDrugCalculationDocument = gql`
  mutation getDrugCalculation($input: RightsPortalDrugCalculatorInput!) {
    rightsPortalDrugsCalculator(input: $input) {
      drugs {
        lineNumber
        referencePrice
        customerPrice
        calculatedCustomerPrice
        insurancePrice
        excessPrice
        fullPrice
        comment
      }
      totalUnits
      totalPrice
      totalCustomerPrice
    }
  }
`
export type GetDrugCalculationMutationFn = Apollo.MutationFunction<
  GetDrugCalculationMutation,
  GetDrugCalculationMutationVariables
>

/**
 * __useGetDrugCalculationMutation__
 *
 * To run a mutation, you first call `useGetDrugCalculationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetDrugCalculationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getDrugCalculationMutation, { data, loading, error }] = useGetDrugCalculationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetDrugCalculationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    GetDrugCalculationMutation,
    GetDrugCalculationMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    GetDrugCalculationMutation,
    GetDrugCalculationMutationVariables
  >(GetDrugCalculationDocument, options)
}
export type GetDrugCalculationMutationHookResult = ReturnType<
  typeof useGetDrugCalculationMutation
>
export type GetDrugCalculationMutationResult = Apollo.MutationResult<GetDrugCalculationMutation>
export type GetDrugCalculationMutationOptions = Apollo.BaseMutationOptions<
  GetDrugCalculationMutation,
  GetDrugCalculationMutationVariables
>
export const GetDrugCertificatesDocument = gql`
  query getDrugCertificates {
    rightsPortalDrugCertificates {
      id
      atcCode
      atcName
      drugName
      date
      validFrom
      validTo
      doctor
      processed
      approved
      rejected
      expired
      valid
      comment
      documentId
      methylDoctors {
        name
      }
    }
  }
`

/**
 * __useGetDrugCertificatesQuery__
 *
 * To run a query within a React component, call `useGetDrugCertificatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDrugCertificatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDrugCertificatesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDrugCertificatesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetDrugCertificatesQuery,
    GetDrugCertificatesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetDrugCertificatesQuery,
    GetDrugCertificatesQueryVariables
  >(GetDrugCertificatesDocument, options)
}
export function useGetDrugCertificatesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetDrugCertificatesQuery,
    GetDrugCertificatesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetDrugCertificatesQuery,
    GetDrugCertificatesQueryVariables
  >(GetDrugCertificatesDocument, options)
}
export type GetDrugCertificatesQueryHookResult = ReturnType<
  typeof useGetDrugCertificatesQuery
>
export type GetDrugCertificatesLazyQueryHookResult = ReturnType<
  typeof useGetDrugCertificatesLazyQuery
>
export type GetDrugCertificatesQueryResult = Apollo.QueryResult<
  GetDrugCertificatesQuery,
  GetDrugCertificatesQueryVariables
>
