import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetPaymentPlanQueryVariables = Types.Exact<{ [key: string]: never }>

export type GetPaymentPlanQuery = {
  __typename?: 'Query'
  socialInsurancePaymentPlan?: {
    __typename?: 'SocialInsurancePaymentPlan'
    totalPayments?: number | null
    totalPaymentsSubtraction?: number | null
    totalPaymentsReceived?: number | null
    paymentGroups?: Array<{
      __typename: 'SocialInsurancePaymentGroup'
      type: Types.SocialInsurancePaymentGroupType
      name: string
      totalYearCumulativeAmount: number
      payments: Array<{
        __typename: 'SocialInsurancePayment'
        name: string
        totalYearCumulativeAmount: number
        markWithAsterisk?: boolean | null
        monthlyPaymentHistory: Array<{
          __typename: 'SocialInsurancePaymentMonth'
          monthIndex: number
          amount: number
        }>
      }>
      monthlyPaymentHistory: Array<{
        __typename: 'SocialInsurancePaymentMonth'
        monthIndex: number
        amount: number
      }>
    }> | null
  } | null
}

export const GetPaymentPlanDocument = gql`
  query getPaymentPlan {
    socialInsurancePaymentPlan {
      totalPayments
      totalPaymentsSubtraction
      totalPaymentsReceived
      paymentGroups {
        __typename
        type
        name
        totalYearCumulativeAmount
        payments {
          __typename
          name
          totalYearCumulativeAmount
          markWithAsterisk
          monthlyPaymentHistory {
            __typename
            monthIndex
            amount
          }
        }
        monthlyPaymentHistory {
          __typename
          monthIndex
          amount
        }
      }
    }
  }
`

/**
 * __useGetPaymentPlanQuery__
 *
 * To run a query within a React component, call `useGetPaymentPlanQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaymentPlanQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaymentPlanQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPaymentPlanQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetPaymentPlanQuery,
    GetPaymentPlanQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetPaymentPlanQuery, GetPaymentPlanQueryVariables>(
    GetPaymentPlanDocument,
    options,
  )
}
export function useGetPaymentPlanLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPaymentPlanQuery,
    GetPaymentPlanQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetPaymentPlanQuery, GetPaymentPlanQueryVariables>(
    GetPaymentPlanDocument,
    options,
  )
}
export type GetPaymentPlanQueryHookResult = ReturnType<
  typeof useGetPaymentPlanQuery
>
export type GetPaymentPlanLazyQueryHookResult = ReturnType<
  typeof useGetPaymentPlanLazyQuery
>
export type GetPaymentPlanQueryResult = Apollo.QueryResult<
  GetPaymentPlanQuery,
  GetPaymentPlanQueryVariables
>
