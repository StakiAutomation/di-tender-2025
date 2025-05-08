import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetHousingBenefitsListQueryVariables = Types.Exact<{
  input: Types.HousingBenefitsPaymentsInput
}>

export type GetHousingBenefitsListQuery = {
  __typename?: 'Query'
  housingBenefitsPayments?: {
    __typename?: 'HousingBenefitsPayments'
    totalCount: number
    data: Array<{
      __typename?: 'HousingBenefitsPayment'
      nr?: number | null
      nationalId?: string | null
      name?: string | null
      address?: string | null
      noDays?: number | null
      dateCalculation?: any | null
      month?: string | null
      dateTransfer?: any | null
      transactionType?: Types.TransactionType | null
      calculationType?: Types.CalculationType | null
      paymentActual?: number | null
      bankAccountMerged?: string | null
      paidOfDebt?: number | null
      paymentBeforeDebt?: number | null
      benefit?: number | null
      reductionIncome?: number | null
      reductionAssets?: number | null
      reductionHousingCost?: number | null
      totalIncome?: number | null
      remainDebt?: number | null
      paymentOrigin?: number | null
    }>
    pageInfo: {
      __typename?: 'HousingBenefitsPageInfo'
      hasNextPage?: boolean | null
      hasPreviousPage?: boolean | null
    }
  } | null
}

export const GetHousingBenefitsListDocument = gql`
  query GetHousingBenefitsList($input: HousingBenefitsPaymentsInput!) {
    housingBenefitsPayments(input: $input) {
      data {
        nr
        nationalId
        name
        address
        noDays
        dateCalculation
        month
        dateTransfer
        transactionType
        calculationType
        paymentActual
        bankAccountMerged
        paidOfDebt
        paymentBeforeDebt
        benefit
        reductionIncome
        reductionAssets
        reductionHousingCost
        totalIncome
        remainDebt
        paymentOrigin
      }
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
    }
  }
`

/**
 * __useGetHousingBenefitsListQuery__
 *
 * To run a query within a React component, call `useGetHousingBenefitsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHousingBenefitsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHousingBenefitsListQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetHousingBenefitsListQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetHousingBenefitsListQuery,
    GetHousingBenefitsListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetHousingBenefitsListQuery,
    GetHousingBenefitsListQueryVariables
  >(GetHousingBenefitsListDocument, options)
}
export function useGetHousingBenefitsListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetHousingBenefitsListQuery,
    GetHousingBenefitsListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetHousingBenefitsListQuery,
    GetHousingBenefitsListQueryVariables
  >(GetHousingBenefitsListDocument, options)
}
export type GetHousingBenefitsListQueryHookResult = ReturnType<
  typeof useGetHousingBenefitsListQuery
>
export type GetHousingBenefitsListLazyQueryHookResult = ReturnType<
  typeof useGetHousingBenefitsListLazyQuery
>
export type GetHousingBenefitsListQueryResult = Apollo.QueryResult<
  GetHousingBenefitsListQuery,
  GetHousingBenefitsListQueryVariables
>
