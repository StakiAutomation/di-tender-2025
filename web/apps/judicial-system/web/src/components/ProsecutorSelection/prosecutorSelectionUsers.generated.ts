import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type ProsecutorSelectionUsersQueryVariables = Types.Exact<{
  [key: string]: never
}>

export type ProsecutorSelectionUsersQuery = {
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
    email?: string | null
    title?: string | null
    active?: boolean | null
    institution?: {
      __typename?: 'Institution'
      id: string
      type?: Types.InstitutionType | null
      name?: string | null
    } | null
  }> | null
}

export const ProsecutorSelectionUsersDocument = gql`
  query ProsecutorSelectionUsers {
    users(input: { role: PROSECUTOR }) {
      id
      created
      modified
      name
      nationalId
      mobileNumber
      role
      email
      title
      institution {
        id
        type
        name
      }
      active
    }
  }
`

/**
 * __useProsecutorSelectionUsersQuery__
 *
 * To run a query within a React component, call `useProsecutorSelectionUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useProsecutorSelectionUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProsecutorSelectionUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useProsecutorSelectionUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ProsecutorSelectionUsersQuery,
    ProsecutorSelectionUsersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    ProsecutorSelectionUsersQuery,
    ProsecutorSelectionUsersQueryVariables
  >(ProsecutorSelectionUsersDocument, options)
}
export function useProsecutorSelectionUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ProsecutorSelectionUsersQuery,
    ProsecutorSelectionUsersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    ProsecutorSelectionUsersQuery,
    ProsecutorSelectionUsersQueryVariables
  >(ProsecutorSelectionUsersDocument, options)
}
export type ProsecutorSelectionUsersQueryHookResult = ReturnType<
  typeof useProsecutorSelectionUsersQuery
>
export type ProsecutorSelectionUsersLazyQueryHookResult = ReturnType<
  typeof useProsecutorSelectionUsersLazyQuery
>
export type ProsecutorSelectionUsersQueryResult = Apollo.QueryResult<
  ProsecutorSelectionUsersQuery,
  ProsecutorSelectionUsersQueryVariables
>
