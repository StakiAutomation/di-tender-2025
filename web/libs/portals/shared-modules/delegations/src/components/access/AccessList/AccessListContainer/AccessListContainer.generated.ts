import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type AuthApiScopeFragment = {
  __typename?: 'AuthApiScope'
  name: string
  displayName: string
  description?: string | null
}

export type AuthScopeTreeQueryVariables = Types.Exact<{
  input: Types.AuthApiScopesInput
}>

export type AuthScopeTreeQuery = {
  __typename?: 'Query'
  authScopeTree: Array<
    | {
        __typename: 'AuthApiScope'
        name: string
        displayName: string
        description?: string | null
      }
    | {
        __typename: 'AuthApiScopeGroup'
        name: string
        displayName: string
        description?: string | null
        children?: Array<{
          __typename?: 'AuthApiScope'
          name: string
          displayName: string
          description?: string | null
        }> | null
      }
  >
}

export const AuthApiScopeFragmentDoc = gql`
  fragment AuthApiScope on AuthApiScope {
    name
    displayName
    description
  }
`
export const AuthScopeTreeDocument = gql`
  query AuthScopeTree($input: AuthApiScopesInput!) {
    authScopeTree(input: $input) {
      __typename
      ... on AuthApiScope {
        ...AuthApiScope
      }
      ... on AuthApiScopeGroup {
        name
        displayName
        description
        children {
          ...AuthApiScope
        }
      }
    }
  }
  ${AuthApiScopeFragmentDoc}
`

/**
 * __useAuthScopeTreeQuery__
 *
 * To run a query within a React component, call `useAuthScopeTreeQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthScopeTreeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthScopeTreeQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAuthScopeTreeQuery(
  baseOptions: Apollo.QueryHookOptions<
    AuthScopeTreeQuery,
    AuthScopeTreeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AuthScopeTreeQuery, AuthScopeTreeQueryVariables>(
    AuthScopeTreeDocument,
    options,
  )
}
export function useAuthScopeTreeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AuthScopeTreeQuery,
    AuthScopeTreeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AuthScopeTreeQuery, AuthScopeTreeQueryVariables>(
    AuthScopeTreeDocument,
    options,
  )
}
export type AuthScopeTreeQueryHookResult = ReturnType<
  typeof useAuthScopeTreeQuery
>
export type AuthScopeTreeLazyQueryHookResult = ReturnType<
  typeof useAuthScopeTreeLazyQuery
>
export type AuthScopeTreeQueryResult = Apollo.QueryResult<
  AuthScopeTreeQuery,
  AuthScopeTreeQueryVariables
>
