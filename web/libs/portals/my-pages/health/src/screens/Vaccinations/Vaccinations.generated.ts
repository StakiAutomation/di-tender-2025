import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetVaccinationsQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']>
}>

export type GetVaccinationsQuery = {
  __typename?: 'Query'
  healthDirectorateVaccinations: {
    __typename?: 'HealthDirectorateVaccinations'
    vaccinations: Array<{
      __typename?: 'HealthDirectorateVaccination'
      id: string
      name?: string | null
      description?: string | null
      isFeatured?: boolean | null
      status?: Types.HealthDirectorateVaccinationStatusEnum | null
      statusName?: string | null
      statusColor?: string | null
      lastVaccinationDate?: string | null
      comments?: Array<string> | null
      vaccinationsInfo?: Array<{
        __typename?: 'HealthDirectorateVaccinationsInfo'
        id: number
        name?: string | null
        date?: string | null
        url?: string | null
        comment?: string | null
        rejected?: boolean | null
        location?: string | null
        age?: {
          __typename?: 'HealthDirectorateVaccinationsAge'
          years?: number | null
          months?: number | null
        } | null
      }> | null
    }>
  }
}

export const GetVaccinationsDocument = gql`
  query getVaccinations($locale: String) {
    healthDirectorateVaccinations(locale: $locale) {
      vaccinations {
        id
        name
        description
        isFeatured
        status
        statusName
        statusColor
        lastVaccinationDate
        vaccinationsInfo {
          id
          name
          date
          age {
            years
            months
          }
          url
          comment
          rejected
          location
        }
        comments
      }
    }
  }
`

/**
 * __useGetVaccinationsQuery__
 *
 * To run a query within a React component, call `useGetVaccinationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVaccinationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVaccinationsQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetVaccinationsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetVaccinationsQuery,
    GetVaccinationsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetVaccinationsQuery, GetVaccinationsQueryVariables>(
    GetVaccinationsDocument,
    options,
  )
}
export function useGetVaccinationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetVaccinationsQuery,
    GetVaccinationsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetVaccinationsQuery,
    GetVaccinationsQueryVariables
  >(GetVaccinationsDocument, options)
}
export type GetVaccinationsQueryHookResult = ReturnType<
  typeof useGetVaccinationsQuery
>
export type GetVaccinationsLazyQueryHookResult = ReturnType<
  typeof useGetVaccinationsLazyQuery
>
export type GetVaccinationsQueryResult = Apollo.QueryResult<
  GetVaccinationsQuery,
  GetVaccinationsQueryVariables
>
