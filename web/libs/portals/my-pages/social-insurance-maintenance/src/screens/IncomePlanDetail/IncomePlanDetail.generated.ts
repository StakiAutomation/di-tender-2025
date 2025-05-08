import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetIncomePlanDetailQueryVariables = Types.Exact<{
  [key: string]: never
}>

export type GetIncomePlanDetailQuery = {
  __typename?: 'Query'
  socialInsuranceIncomePlan?: {
    __typename?: 'SocialInsuranceIncomePlan'
    isEligibleForChange: {
      __typename?: 'SocialInsuranceIncomePlanEligbility'
      isEligible?: boolean | null
      reason?: string | null
    }
    incomeCategories: Array<{
      __typename?: 'SocialInsuranceIncomePlanIncomeCategory'
      typeName: string
      annualSum: number
      currency?: string | null
    }>
  } | null
}

export const GetIncomePlanDetailDocument = gql`
  query getIncomePlanDetail {
    socialInsuranceIncomePlan {
      isEligibleForChange {
        isEligible
        reason
      }
      incomeCategories {
        typeName
        annualSum
        currency
      }
    }
  }
`

/**
 * __useGetIncomePlanDetailQuery__
 *
 * To run a query within a React component, call `useGetIncomePlanDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIncomePlanDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetIncomePlanDetailQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetIncomePlanDetailQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetIncomePlanDetailQuery,
    GetIncomePlanDetailQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetIncomePlanDetailQuery,
    GetIncomePlanDetailQueryVariables
  >(GetIncomePlanDetailDocument, options)
}
export function useGetIncomePlanDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetIncomePlanDetailQuery,
    GetIncomePlanDetailQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetIncomePlanDetailQuery,
    GetIncomePlanDetailQueryVariables
  >(GetIncomePlanDetailDocument, options)
}
export type GetIncomePlanDetailQueryHookResult = ReturnType<
  typeof useGetIncomePlanDetailQuery
>
export type GetIncomePlanDetailLazyQueryHookResult = ReturnType<
  typeof useGetIncomePlanDetailLazyQuery
>
export type GetIncomePlanDetailQueryResult = Apollo.QueryResult<
  GetIncomePlanDetailQuery,
  GetIncomePlanDetailQueryVariables
>
