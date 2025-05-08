import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type AuthDomainsQueryVariables = Types.Exact<{
  input: Types.AuthDomainsInput
}>

export type AuthDomainsQuery = {
  __typename?: 'Query'
  authDomains: Array<{
    __typename?: 'AuthDomain'
    name: string
    displayName: string
    description: string
    nationalId: string
    organisationLogoKey: string
  }>
}

export const AuthDomainsDocument = gql`
  query AuthDomains($input: AuthDomainsInput!) {
    authDomains(input: $input) {
      name
      displayName
      description
      nationalId
      organisationLogoKey
    }
  }
`

/**
 * __useAuthDomainsQuery__
 *
 * To run a query within a React component, call `useAuthDomainsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthDomainsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthDomainsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAuthDomainsQuery(
  baseOptions: Apollo.QueryHookOptions<
    AuthDomainsQuery,
    AuthDomainsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AuthDomainsQuery, AuthDomainsQueryVariables>(
    AuthDomainsDocument,
    options,
  )
}
export function useAuthDomainsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AuthDomainsQuery,
    AuthDomainsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AuthDomainsQuery, AuthDomainsQueryVariables>(
    AuthDomainsDocument,
    options,
  )
}
export type AuthDomainsQueryHookResult = ReturnType<typeof useAuthDomainsQuery>
export type AuthDomainsLazyQueryHookResult = ReturnType<
  typeof useAuthDomainsLazyQuery
>
export type AuthDomainsQueryResult = Apollo.QueryResult<
  AuthDomainsQuery,
  AuthDomainsQueryVariables
>
