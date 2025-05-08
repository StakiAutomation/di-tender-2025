import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetUserProfileQueryVariables = Types.Exact<{ [key: string]: never }>

export type GetUserProfileQuery = {
  __typename?: 'Query'
  getUserProfile?: {
    __typename?: 'UserProfile'
    nationalId: string
    mobilePhoneNumber?: string | null
    locale?: string | null
    email?: string | null
    canNudge?: boolean | null
    bankInfo?: string | null
    emailStatus?: string | null
    mobileStatus?: string | null
    needsNudge?: boolean | null
  } | null
}

export const GetUserProfileDocument = gql`
  query GetUserProfile {
    getUserProfile {
      nationalId
      mobilePhoneNumber
      locale
      email
      canNudge
      bankInfo
      emailStatus
      mobileStatus
      needsNudge
    }
  }
`

/**
 * __useGetUserProfileQuery__
 *
 * To run a query within a React component, call `useGetUserProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserProfileQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetUserProfileQuery,
    GetUserProfileQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetUserProfileQuery, GetUserProfileQueryVariables>(
    GetUserProfileDocument,
    options,
  )
}
export function useGetUserProfileLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserProfileQuery,
    GetUserProfileQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetUserProfileQuery, GetUserProfileQueryVariables>(
    GetUserProfileDocument,
    options,
  )
}
export type GetUserProfileQueryHookResult = ReturnType<
  typeof useGetUserProfileQuery
>
export type GetUserProfileLazyQueryHookResult = ReturnType<
  typeof useGetUserProfileLazyQuery
>
export type GetUserProfileQueryResult = Apollo.QueryResult<
  GetUserProfileQuery,
  GetUserProfileQueryVariables
>
