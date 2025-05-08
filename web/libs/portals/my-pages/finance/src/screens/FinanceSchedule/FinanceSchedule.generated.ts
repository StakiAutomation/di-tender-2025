import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetPaymentScheduleQueryVariables = Types.Exact<{
  [key: string]: never
}>

export type GetPaymentScheduleQuery = {
  __typename?: 'Query'
  getPaymentSchedule?: {
    __typename?: 'PaymentScheduleModel'
    myPaymentSchedule?: {
      __typename?: 'PaymentScheduleData'
      nationalId: string
      paymentSchedules: Array<{
        __typename?: 'PaymentSchedule'
        approvalDate: string
        paymentCount: string
        scheduleName: string
        scheduleNumber: string
        scheduleStatus: string
        scheduleType: string
        totalAmount: number
        unpaidAmount: number
        unpaidWithInterest: number
        unpaidCount: string
        documentID?: string | null
        downloadServiceURL: string
      }>
    } | null
  } | null
}

export const GetPaymentScheduleDocument = gql`
  query GetPaymentSchedule {
    getPaymentSchedule {
      myPaymentSchedule {
        nationalId
        paymentSchedules {
          approvalDate
          paymentCount
          scheduleName
          scheduleNumber
          scheduleStatus
          scheduleType
          totalAmount
          unpaidAmount
          unpaidWithInterest
          unpaidCount
          documentID
          downloadServiceURL
        }
      }
    }
  }
`

/**
 * __useGetPaymentScheduleQuery__
 *
 * To run a query within a React component, call `useGetPaymentScheduleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaymentScheduleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaymentScheduleQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPaymentScheduleQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetPaymentScheduleQuery,
    GetPaymentScheduleQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetPaymentScheduleQuery,
    GetPaymentScheduleQueryVariables
  >(GetPaymentScheduleDocument, options)
}
export function useGetPaymentScheduleLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPaymentScheduleQuery,
    GetPaymentScheduleQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetPaymentScheduleQuery,
    GetPaymentScheduleQueryVariables
  >(GetPaymentScheduleDocument, options)
}
export type GetPaymentScheduleQueryHookResult = ReturnType<
  typeof useGetPaymentScheduleQuery
>
export type GetPaymentScheduleLazyQueryHookResult = ReturnType<
  typeof useGetPaymentScheduleLazyQuery
>
export type GetPaymentScheduleQueryResult = Apollo.QueryResult<
  GetPaymentScheduleQuery,
  GetPaymentScheduleQueryVariables
>
