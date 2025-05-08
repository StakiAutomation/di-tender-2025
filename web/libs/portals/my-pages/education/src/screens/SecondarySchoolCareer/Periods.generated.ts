import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetInnaPeriodsQueryVariables = Types.Exact<{ [key: string]: never }>

export type GetInnaPeriodsQuery = {
  __typename?: 'Query'
  innaPeriods: {
    __typename?: 'PeriodsModel'
    items?: Array<{
      __typename?: 'PeriodItems'
      division?: string | null
      divisionShort?: string | null
      organisation?: string | null
      organisationShort?: string | null
      periodFrom?: string | null
      periodName?: string | null
      periodShort?: string | null
      periodTo?: string | null
      studentId?: number | null
      periodId?: number | null
      diplomaId?: number | null
      courses?: Array<{
        __typename?: 'CoursesModel'
        courseId?: string | null
        courseName?: string | null
        finalgrade?: string | null
        units?: string | null
        stage?: number | null
        status?: string | null
        date?: string | null
      }> | null
    }> | null
  }
}

export const GetInnaPeriodsDocument = gql`
  query GetInnaPeriods {
    innaPeriods {
      items {
        courses {
          courseId
          courseName
          finalgrade
          units
          stage
          status
          date
        }
        division
        divisionShort
        organisation
        organisationShort
        periodFrom
        periodName
        periodShort
        periodTo
        studentId
        periodId
        diplomaId
      }
    }
  }
`

/**
 * __useGetInnaPeriodsQuery__
 *
 * To run a query within a React component, call `useGetInnaPeriodsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInnaPeriodsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInnaPeriodsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetInnaPeriodsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetInnaPeriodsQuery,
    GetInnaPeriodsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetInnaPeriodsQuery, GetInnaPeriodsQueryVariables>(
    GetInnaPeriodsDocument,
    options,
  )
}
export function useGetInnaPeriodsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetInnaPeriodsQuery,
    GetInnaPeriodsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetInnaPeriodsQuery, GetInnaPeriodsQueryVariables>(
    GetInnaPeriodsDocument,
    options,
  )
}
export type GetInnaPeriodsQueryHookResult = ReturnType<
  typeof useGetInnaPeriodsQuery
>
export type GetInnaPeriodsLazyQueryHookResult = ReturnType<
  typeof useGetInnaPeriodsLazyQuery
>
export type GetInnaPeriodsQueryResult = Apollo.QueryResult<
  GetInnaPeriodsQuery,
  GetInnaPeriodsQueryVariables
>
