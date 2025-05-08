import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type AppealCaseUsersQueryVariables = Types.Exact<{
  [key: string]: never
}>

export type AppealCaseUsersQuery = {
  __typename?: 'Query'
  users?: Array<{
    __typename?: 'User'
    id: string
    created?: string | null
    modified?: string | null
    name?: string | null
    nationalId?: string | null
    mobileNumber?: string | null
    role?: Types.UserRole | null
    title?: string | null
    email?: string | null
    active?: boolean | null
    latestLogin?: string | null
    loginCount?: number | null
    institution?: {
      __typename?: 'Institution'
      id: string
      created?: string | null
      modified?: string | null
      type?: Types.InstitutionType | null
      name?: string | null
      active?: boolean | null
    } | null
  }> | null
}

export const AppealCaseUsersDocument = gql`
  query AppealCaseUsers {
    users(
      input: { role: [COURT_OF_APPEALS_ASSISTANT, COURT_OF_APPEALS_JUDGE] }
    ) {
      id
      created
      modified
      name
      nationalId
      mobileNumber
      role
      title
      email
      institution {
        id
        created
        modified
        type
        name
        active
      }
      active
      latestLogin
      loginCount
    }
  }
`

/**
 * __useAppealCaseUsersQuery__
 *
 * To run a query within a React component, call `useAppealCaseUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAppealCaseUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAppealCaseUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useAppealCaseUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    AppealCaseUsersQuery,
    AppealCaseUsersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AppealCaseUsersQuery, AppealCaseUsersQueryVariables>(
    AppealCaseUsersDocument,
    options,
  )
}
export function useAppealCaseUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AppealCaseUsersQuery,
    AppealCaseUsersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    AppealCaseUsersQuery,
    AppealCaseUsersQueryVariables
  >(AppealCaseUsersDocument, options)
}
export type AppealCaseUsersQueryHookResult = ReturnType<
  typeof useAppealCaseUsersQuery
>
export type AppealCaseUsersLazyQueryHookResult = ReturnType<
  typeof useAppealCaseUsersLazyQuery
>
export type AppealCaseUsersQueryResult = Apollo.QueryResult<
  AppealCaseUsersQuery,
  AppealCaseUsersQueryVariables
>
