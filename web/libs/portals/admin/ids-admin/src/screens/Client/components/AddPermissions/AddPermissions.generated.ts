import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetAvailableScopesQueryVariables = Types.Exact<{
  input: Types.ScopesInput
}>

export type GetAvailableScopesQuery = {
  __typename?: 'Query'
  authAdminScopes: {
    __typename?: 'AuthAdminScopesPayload'
    data: Array<{
      __typename?: 'AuthAdminScope'
      scopeName: string
      environments: Array<{
        __typename?: 'AuthAdminScopeEnvironment'
        name: string
        environment: Types.AuthAdminEnvironment
        domainName: string
        displayName: Array<{
          __typename?: 'AuthAdminTranslatedValue'
          locale: string
          value: string
        }>
        description: Array<{
          __typename?: 'AuthAdminTranslatedValue'
          locale: string
          value: string
        }>
      }>
    }>
  }
}

export const GetAvailableScopesDocument = gql`
  query GetAvailableScopes($input: ScopesInput!) {
    authAdminScopes(input: $input) {
      data {
        scopeName
        environments {
          name
          environment
          displayName {
            locale
            value
          }
          description {
            locale
            value
          }
          domainName
        }
      }
    }
  }
`

/**
 * __useGetAvailableScopesQuery__
 *
 * To run a query within a React component, call `useGetAvailableScopesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAvailableScopesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAvailableScopesQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAvailableScopesQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetAvailableScopesQuery,
    GetAvailableScopesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetAvailableScopesQuery,
    GetAvailableScopesQueryVariables
  >(GetAvailableScopesDocument, options)
}
export function useGetAvailableScopesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAvailableScopesQuery,
    GetAvailableScopesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetAvailableScopesQuery,
    GetAvailableScopesQueryVariables
  >(GetAvailableScopesDocument, options)
}
export type GetAvailableScopesQueryHookResult = ReturnType<
  typeof useGetAvailableScopesQuery
>
export type GetAvailableScopesLazyQueryHookResult = ReturnType<
  typeof useGetAvailableScopesLazyQuery
>
export type GetAvailableScopesQueryResult = Apollo.QueryResult<
  GetAvailableScopesQuery,
  GetAvailableScopesQueryVariables
>
