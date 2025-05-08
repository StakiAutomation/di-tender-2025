import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetSessionsListQueryVariables = Types.Exact<{
  input: Types.SessionsInput
}>

export type GetSessionsListQuery = {
  __typename?: 'Query'
  sessionsList: {
    __typename?: 'SessionsPaginatedSessionResponse'
    totalCount: number
    pageInfo: {
      __typename?: 'PageInfoDto'
      hasNextPage: boolean
      hasPreviousPage?: boolean | null
      startCursor?: string | null
      endCursor?: string | null
    }
    data: Array<{
      __typename?: 'SessionsSession'
      id: string
      timestamp: string
      userAgent: string
      device?: string | null
      ip: string
      ipLocation?: string | null
      actor:
        | { __typename?: 'IdentityCompany'; nationalId: string; name: string }
        | { __typename?: 'IdentityPerson'; nationalId: string; name: string }
      subject:
        | { __typename?: 'IdentityCompany'; nationalId: string; name: string }
        | { __typename?: 'IdentityPerson'; nationalId: string; name: string }
      client: {
        __typename?: 'AuthClient'
        clientId: string
        clientName?: string | null
        domain?: {
          __typename?: 'AuthDomain'
          displayName: string
          organisationLogoUrl?: string | null
        } | null
      }
    }>
  }
}

export const GetSessionsListDocument = gql`
  query GetSessionsList($input: SessionsInput!) {
    sessionsList(input: $input) {
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      data {
        id
        actor {
          nationalId
          name
        }
        subject {
          nationalId
          name
        }
        client {
          clientId
          clientName
          domain {
            displayName
            organisationLogoUrl
          }
        }
        timestamp
        userAgent
        device
        ip
        ipLocation
      }
    }
  }
`

/**
 * __useGetSessionsListQuery__
 *
 * To run a query within a React component, call `useGetSessionsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSessionsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSessionsListQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetSessionsListQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetSessionsListQuery,
    GetSessionsListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetSessionsListQuery, GetSessionsListQueryVariables>(
    GetSessionsListDocument,
    options,
  )
}
export function useGetSessionsListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetSessionsListQuery,
    GetSessionsListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetSessionsListQuery,
    GetSessionsListQueryVariables
  >(GetSessionsListDocument, options)
}
export type GetSessionsListQueryHookResult = ReturnType<
  typeof useGetSessionsListQuery
>
export type GetSessionsListLazyQueryHookResult = ReturnType<
  typeof useGetSessionsListLazyQuery
>
export type GetSessionsListQueryResult = Apollo.QueryResult<
  GetSessionsListQuery,
  GetSessionsListQueryVariables
>
