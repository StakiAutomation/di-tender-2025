import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type SelectCourtOfficialsUsersQueryVariables = Types.Exact<{
  [key: string]: never
}>

export type SelectCourtOfficialsUsersQuery = {
  __typename?: 'Query'
  users?: Array<{
    __typename?: 'User'
    id: string
    name?: string | null
    created?: string | null
    modified?: string | null
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

export const SelectCourtOfficialsUsersDocument = gql`
  query SelectCourtOfficialsUsers {
    users(
      input: {
        role: [
          DISTRICT_COURT_REGISTRAR
          DISTRICT_COURT_ASSISTANT
          DISTRICT_COURT_JUDGE
        ]
      }
    ) {
      id
      name
      created
      modified
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
 * __useSelectCourtOfficialsUsersQuery__
 *
 * To run a query within a React component, call `useSelectCourtOfficialsUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useSelectCourtOfficialsUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSelectCourtOfficialsUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useSelectCourtOfficialsUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    SelectCourtOfficialsUsersQuery,
    SelectCourtOfficialsUsersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    SelectCourtOfficialsUsersQuery,
    SelectCourtOfficialsUsersQueryVariables
  >(SelectCourtOfficialsUsersDocument, options)
}
export function useSelectCourtOfficialsUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SelectCourtOfficialsUsersQuery,
    SelectCourtOfficialsUsersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    SelectCourtOfficialsUsersQuery,
    SelectCourtOfficialsUsersQueryVariables
  >(SelectCourtOfficialsUsersDocument, options)
}
export type SelectCourtOfficialsUsersQueryHookResult = ReturnType<
  typeof useSelectCourtOfficialsUsersQuery
>
export type SelectCourtOfficialsUsersLazyQueryHookResult = ReturnType<
  typeof useSelectCourtOfficialsUsersLazyQuery
>
export type SelectCourtOfficialsUsersQueryResult = Apollo.QueryResult<
  SelectCourtOfficialsUsersQuery,
  SelectCourtOfficialsUsersQueryVariables
>
