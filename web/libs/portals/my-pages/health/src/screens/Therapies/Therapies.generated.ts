import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetTherapiesQueryVariables = Types.Exact<{ [key: string]: never }>

export type GetTherapiesQuery = {
  __typename?: 'Query'
  rightsPortalPaginatedTherapies?: {
    __typename?: 'RightsPortalPaginatedTherapies'
    data: Array<{
      __typename?: 'RightsPortalTherapy'
      id: string
      name: string
      postStation?: string | null
      periods?: Array<{
        __typename?: 'RightsPortalTherapyPeriod'
        from?: string | null
        to?: string | null
        sessions?: {
          __typename?: 'RightsPortalTherapySession'
          available: number
          used: number
        } | null
      }> | null
      state?: {
        __typename?: 'RightsPortalTherapyState'
        code: string
        display: string
      } | null
    }>
  } | null
}

export const GetTherapiesDocument = gql`
  query GetTherapies {
    rightsPortalPaginatedTherapies {
      data {
        id
        name
        periods {
          from
          to
          sessions {
            available
            used
          }
        }
        postStation
        state {
          code
          display
        }
      }
    }
  }
`

/**
 * __useGetTherapiesQuery__
 *
 * To run a query within a React component, call `useGetTherapiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTherapiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTherapiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTherapiesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetTherapiesQuery,
    GetTherapiesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetTherapiesQuery, GetTherapiesQueryVariables>(
    GetTherapiesDocument,
    options,
  )
}
export function useGetTherapiesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetTherapiesQuery,
    GetTherapiesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetTherapiesQuery, GetTherapiesQueryVariables>(
    GetTherapiesDocument,
    options,
  )
}
export type GetTherapiesQueryHookResult = ReturnType<
  typeof useGetTherapiesQuery
>
export type GetTherapiesLazyQueryHookResult = ReturnType<
  typeof useGetTherapiesLazyQuery
>
export type GetTherapiesQueryResult = Apollo.QueryResult<
  GetTherapiesQuery,
  GetTherapiesQueryVariables
>
