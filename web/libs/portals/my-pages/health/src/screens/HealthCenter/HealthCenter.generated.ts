import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetHealthCenterQueryVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.RightsPortalHealthCenterHistoryInput>
}>

export type GetHealthCenterQuery = {
  __typename?: 'Query'
  getOrganizations: {
    __typename?: 'Organizations'
    items: Array<{
      __typename?: 'Organization'
      id: string
      title: string
      slug: string
      logo?: {
        __typename?: 'Image'
        id: string
        url: string
        title: string
      } | null
    }>
  }
  rightsPortalHealthCenterRegistrationHistory?: {
    __typename?: 'RightsPortalHealthCenterRegistrationHistory'
    canRegister?: boolean | null
    neighborhoodCenter?: string | null
    current?: {
      __typename?: 'RightsPortalHealthCenterRecord'
      healthCenterName?: string | null
      doctor?: string | null
    } | null
    history?: Array<{
      __typename?: 'RightsPortalHealthCenterRecord'
      dateFrom?: string | null
      dateTo?: string | null
      healthCenterName?: string | null
      doctor?: string | null
    }> | null
  } | null
}

export const GetHealthCenterDocument = gql`
  query getHealthCenter($input: RightsPortalHealthCenterHistoryInput) {
    getOrganizations {
      items {
        id
        title
        slug
        logo {
          id
          url
          title
        }
      }
    }
    rightsPortalHealthCenterRegistrationHistory(input: $input) {
      current {
        healthCenterName
        doctor
      }
      history {
        dateFrom
        dateTo
        healthCenterName
        doctor
      }
      canRegister
      neighborhoodCenter
    }
  }
`

/**
 * __useGetHealthCenterQuery__
 *
 * To run a query within a React component, call `useGetHealthCenterQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHealthCenterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHealthCenterQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetHealthCenterQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetHealthCenterQuery,
    GetHealthCenterQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetHealthCenterQuery, GetHealthCenterQueryVariables>(
    GetHealthCenterDocument,
    options,
  )
}
export function useGetHealthCenterLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetHealthCenterQuery,
    GetHealthCenterQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetHealthCenterQuery,
    GetHealthCenterQueryVariables
  >(GetHealthCenterDocument, options)
}
export type GetHealthCenterQueryHookResult = ReturnType<
  typeof useGetHealthCenterQuery
>
export type GetHealthCenterLazyQueryHookResult = ReturnType<
  typeof useGetHealthCenterLazyQuery
>
export type GetHealthCenterQueryResult = Apollo.QueryResult<
  GetHealthCenterQuery,
  GetHealthCenterQueryVariables
>
