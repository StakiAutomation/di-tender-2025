import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetAidsAndNutritionQueryVariables = Types.Exact<{
  [key: string]: never
}>

export type GetAidsAndNutritionQuery = {
  __typename?: 'Query'
  rightsPortalPaginatedAidOrNutrition?: {
    __typename?: 'RightsPortalPaginatedAidsOrNutrition'
    data: Array<{
      __typename?: 'RightsPortalAidOrNutrition'
      name: string
      id: string
      type: Types.RightsPortalAidOrNutritionType
      iso: string
      available?: string | null
      expiring: boolean
      explanation?: string | null
      validUntil?: string | null
      nextAllowedMonth?: string | null
      location?: string | null
      maxUnitRefund?: string | null
      maxMonthlyAmount?: number | null
      allowed12MonthPeriod?: number | null
      refund: {
        __typename?: 'RightsPortalAidOrNutritionRefund'
        type: string
        value: number
      }
    }>
  } | null
}

export const GetAidsAndNutritionDocument = gql`
  query GetAidsAndNutrition {
    rightsPortalPaginatedAidOrNutrition {
      data {
        name
        id
        type
        iso
        available
        expiring
        explanation
        validUntil
        nextAllowedMonth
        location
        maxUnitRefund
        maxMonthlyAmount
        allowed12MonthPeriod
        refund {
          type
          value
        }
      }
    }
  }
`

/**
 * __useGetAidsAndNutritionQuery__
 *
 * To run a query within a React component, call `useGetAidsAndNutritionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAidsAndNutritionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAidsAndNutritionQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAidsAndNutritionQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAidsAndNutritionQuery,
    GetAidsAndNutritionQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetAidsAndNutritionQuery,
    GetAidsAndNutritionQueryVariables
  >(GetAidsAndNutritionDocument, options)
}
export function useGetAidsAndNutritionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAidsAndNutritionQuery,
    GetAidsAndNutritionQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetAidsAndNutritionQuery,
    GetAidsAndNutritionQueryVariables
  >(GetAidsAndNutritionDocument, options)
}
export type GetAidsAndNutritionQueryHookResult = ReturnType<
  typeof useGetAidsAndNutritionQuery
>
export type GetAidsAndNutritionLazyQueryHookResult = ReturnType<
  typeof useGetAidsAndNutritionLazyQuery
>
export type GetAidsAndNutritionQueryResult = Apollo.QueryResult<
  GetAidsAndNutritionQuery,
  GetAidsAndNutritionQueryVariables
>
