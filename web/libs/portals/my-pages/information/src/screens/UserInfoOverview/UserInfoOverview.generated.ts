import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type UserInfoOverviewQueryVariables = Types.Exact<{
  useFakeData?: Types.InputMaybe<Types.Scalars['Boolean']>
}>

export type UserInfoOverviewQuery = {
  __typename?: 'Query'
  nationalRegistryPerson?: {
    __typename?: 'NationalRegistryPerson'
    nationalId: string
    name?: {
      __typename?: 'NationalRegistryName'
      fullName?: string | null
    } | null
    spouse?: {
      __typename?: 'NationalRegistrySpouse'
      nationalId: string
      fullName?: string | null
    } | null
    childCustody?: Array<{
      __typename?: 'NationalRegistryChildCustody'
      nationalId: string
      fullName?: string | null
    }> | null
    biologicalChildren?: Array<{
      __typename?: 'NationalRegistryChildCustody'
      nationalId: string
      fullName?: string | null
    }> | null
  } | null
}

export const UserInfoOverviewDocument = gql`
  query UserInfoOverview($useFakeData: Boolean) {
    nationalRegistryPerson(useFakeData: $useFakeData) {
      nationalId
      name {
        fullName
      }
      spouse {
        nationalId
        fullName
      }
      childCustody {
        nationalId
        fullName
      }
      biologicalChildren {
        nationalId
        fullName
      }
    }
  }
`

/**
 * __useUserInfoOverviewQuery__
 *
 * To run a query within a React component, call `useUserInfoOverviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserInfoOverviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserInfoOverviewQuery({
 *   variables: {
 *      useFakeData: // value for 'useFakeData'
 *   },
 * });
 */
export function useUserInfoOverviewQuery(
  baseOptions?: Apollo.QueryHookOptions<
    UserInfoOverviewQuery,
    UserInfoOverviewQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<UserInfoOverviewQuery, UserInfoOverviewQueryVariables>(
    UserInfoOverviewDocument,
    options,
  )
}
export function useUserInfoOverviewLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    UserInfoOverviewQuery,
    UserInfoOverviewQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    UserInfoOverviewQuery,
    UserInfoOverviewQueryVariables
  >(UserInfoOverviewDocument, options)
}
export type UserInfoOverviewQueryHookResult = ReturnType<
  typeof useUserInfoOverviewQuery
>
export type UserInfoOverviewLazyQueryHookResult = ReturnType<
  typeof useUserInfoOverviewLazyQuery
>
export type UserInfoOverviewQueryResult = Apollo.QueryResult<
  UserInfoOverviewQuery,
  UserInfoOverviewQueryVariables
>
