import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type CaseStatisticsQueryVariables = Types.Exact<{
  input: Types.InputMaybe<Types.CaseStatisticsInput>
}>

export type CaseStatisticsQuery = {
  __typename?: 'Query'
  caseStatistics?: {
    __typename?: 'CaseStatistics'
    count: number
    requestCases: {
      __typename?: 'RequestCaseStatistics'
      count: number
      inProgressCount: number
      completedCount: number
    }
    indictmentCases: {
      __typename?: 'IndictmentCaseStatistics'
      count: number
      inProgressCount: number
      rulingCount: number
      averageRulingTimeMs: number
      averageRulingTimeDays: number
    }
    subpoenas: {
      __typename?: 'SubpoenaStatistics'
      count: number
      serviceStatusStatistics: Array<{
        __typename?: 'ServiceStatusStatistics'
        serviceStatus?: Types.ServiceStatus | null
        count: number
        averageServiceTimeMs: number
        averageServiceTimeDays: number
      }>
    }
  } | null
}

export const CaseStatisticsDocument = gql`
  query CaseStatistics($input: CaseStatisticsInput) {
    caseStatistics(input: $input) {
      count
      requestCases {
        count
        inProgressCount
        completedCount
      }
      indictmentCases {
        count
        inProgressCount
        rulingCount
        averageRulingTimeMs
        averageRulingTimeDays
      }
      subpoenas {
        count
        serviceStatusStatistics {
          serviceStatus
          count
          averageServiceTimeMs
          averageServiceTimeDays
        }
      }
    }
  }
`

/**
 * __useCaseStatisticsQuery__
 *
 * To run a query within a React component, call `useCaseStatisticsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCaseStatisticsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCaseStatisticsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCaseStatisticsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CaseStatisticsQuery,
    CaseStatisticsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<CaseStatisticsQuery, CaseStatisticsQueryVariables>(
    CaseStatisticsDocument,
    options,
  )
}
export function useCaseStatisticsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CaseStatisticsQuery,
    CaseStatisticsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<CaseStatisticsQuery, CaseStatisticsQueryVariables>(
    CaseStatisticsDocument,
    options,
  )
}
export type CaseStatisticsQueryHookResult = ReturnType<
  typeof useCaseStatisticsQuery
>
export type CaseStatisticsLazyQueryHookResult = ReturnType<
  typeof useCaseStatisticsLazyQuery
>
export type CaseStatisticsQueryResult = Apollo.QueryResult<
  CaseStatisticsQuery,
  CaseStatisticsQueryVariables
>
