import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetPaginatedUserProfilesQueryVariables = Types.Exact<{
  query: Types.Scalars['String']
}>

export type GetPaginatedUserProfilesQuery = {
  __typename?: 'Query'
  UserProfileAdminProfiles: {
    __typename?: 'UserProfileAdminProfilesResponse'
    totalCount: number
    data: Array<{
      __typename?: 'UserProfileAdminProfile'
      nationalId: string
      fullName?: string | null
    }>
  }
}

export const GetPaginatedUserProfilesDocument = gql`
  query GetPaginatedUserProfiles($query: String!) {
    UserProfileAdminProfiles(query: $query) {
      totalCount
      data {
        nationalId
        fullName
      }
    }
  }
`

/**
 * __useGetPaginatedUserProfilesQuery__
 *
 * To run a query within a React component, call `useGetPaginatedUserProfilesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaginatedUserProfilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaginatedUserProfilesQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useGetPaginatedUserProfilesQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetPaginatedUserProfilesQuery,
    GetPaginatedUserProfilesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetPaginatedUserProfilesQuery,
    GetPaginatedUserProfilesQueryVariables
  >(GetPaginatedUserProfilesDocument, options)
}
export function useGetPaginatedUserProfilesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPaginatedUserProfilesQuery,
    GetPaginatedUserProfilesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetPaginatedUserProfilesQuery,
    GetPaginatedUserProfilesQueryVariables
  >(GetPaginatedUserProfilesDocument, options)
}
export type GetPaginatedUserProfilesQueryHookResult = ReturnType<
  typeof useGetPaginatedUserProfilesQuery
>
export type GetPaginatedUserProfilesLazyQueryHookResult = ReturnType<
  typeof useGetPaginatedUserProfilesLazyQuery
>
export type GetPaginatedUserProfilesQueryResult = Apollo.QueryResult<
  GetPaginatedUserProfilesQuery,
  GetPaginatedUserProfilesQueryVariables
>
