import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetCustomerRecordsQueryVariables = Types.Exact<{
  input: Types.GetCustomerRecordsInput
}>

export type GetCustomerRecordsQuery = {
  __typename?: 'Query'
  getCustomerRecords?: {
    __typename?: 'FinanceCustomerRecords'
    records?: Array<{
      __typename?: 'FinanceCustomerRecordsItem'
      createDate: string
      createTime: string
      valueDate: string
      performingOrganization: string
      collectingOrganization: string
      chargeType: string
      itemCode: string
      chargeItemSubject: string
      periodType: string
      period: string
      amount: number
      category: string
      subCategory: string
      actionCategory?: string | null
      reference: string
      referenceToLevy: string
      accountReference: string
    }> | null
  } | null
}

export const GetCustomerRecordsDocument = gql`
  query GetCustomerRecords($input: GetCustomerRecordsInput!) {
    getCustomerRecords(input: $input) {
      records {
        createDate
        createTime
        valueDate
        performingOrganization
        collectingOrganization
        chargeType
        itemCode
        chargeItemSubject
        periodType
        period
        amount
        category
        subCategory
        actionCategory
        reference
        referenceToLevy
        accountReference
      }
    }
  }
`

/**
 * __useGetCustomerRecordsQuery__
 *
 * To run a query within a React component, call `useGetCustomerRecordsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCustomerRecordsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCustomerRecordsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetCustomerRecordsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetCustomerRecordsQuery,
    GetCustomerRecordsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetCustomerRecordsQuery,
    GetCustomerRecordsQueryVariables
  >(GetCustomerRecordsDocument, options)
}
export function useGetCustomerRecordsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCustomerRecordsQuery,
    GetCustomerRecordsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetCustomerRecordsQuery,
    GetCustomerRecordsQueryVariables
  >(GetCustomerRecordsDocument, options)
}
export type GetCustomerRecordsQueryHookResult = ReturnType<
  typeof useGetCustomerRecordsQuery
>
export type GetCustomerRecordsLazyQueryHookResult = ReturnType<
  typeof useGetCustomerRecordsLazyQuery
>
export type GetCustomerRecordsQueryResult = Apollo.QueryResult<
  GetCustomerRecordsQuery,
  GetCustomerRecordsQueryVariables
>
