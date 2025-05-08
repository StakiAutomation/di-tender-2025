import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetPaymentScheduleByIdQueryVariables = Types.Exact<{
  input: Types.GetFinancePaymentScheduleInput
}>

export type GetPaymentScheduleByIdQuery = {
  __typename?: 'Query'
  getPaymentScheduleById: {
    __typename?: 'PaymentScheduleDetailModel'
    myDetailedSchedules: {
      __typename?: 'PaymentScheduleDetailData'
      myDetailedSchedule: Array<{
        __typename?: 'DetailedSchedule'
        paidDate: string
        paidAmount: number
        paymentNumber: string
        unpaidAmount: number
        payExplanation: string
      }>
    }
  }
}

export const GetPaymentScheduleByIdDocument = gql`
  query GetPaymentScheduleById($input: GetFinancePaymentScheduleInput!) {
    getPaymentScheduleById(input: $input) {
      myDetailedSchedules {
        myDetailedSchedule {
          paidDate
          paidAmount
          paymentNumber
          unpaidAmount
          payExplanation
        }
      }
    }
  }
`

/**
 * __useGetPaymentScheduleByIdQuery__
 *
 * To run a query within a React component, call `useGetPaymentScheduleByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaymentScheduleByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaymentScheduleByIdQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetPaymentScheduleByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetPaymentScheduleByIdQuery,
    GetPaymentScheduleByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetPaymentScheduleByIdQuery,
    GetPaymentScheduleByIdQueryVariables
  >(GetPaymentScheduleByIdDocument, options)
}
export function useGetPaymentScheduleByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPaymentScheduleByIdQuery,
    GetPaymentScheduleByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetPaymentScheduleByIdQuery,
    GetPaymentScheduleByIdQueryVariables
  >(GetPaymentScheduleByIdDocument, options)
}
export type GetPaymentScheduleByIdQueryHookResult = ReturnType<
  typeof useGetPaymentScheduleByIdQuery
>
export type GetPaymentScheduleByIdLazyQueryHookResult = ReturnType<
  typeof useGetPaymentScheduleByIdLazyQuery
>
export type GetPaymentScheduleByIdQueryResult = Apollo.QueryResult<
  GetPaymentScheduleByIdQuery,
  GetPaymentScheduleByIdQueryVariables
>
