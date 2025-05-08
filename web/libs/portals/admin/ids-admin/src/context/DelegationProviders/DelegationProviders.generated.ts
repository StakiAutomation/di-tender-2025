import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetDelegationProvidersQueryVariables = Types.Exact<{
  [key: string]: never
}>

export type GetDelegationProvidersQuery = {
  __typename?: 'Query'
  authDelegationProviders: {
    __typename?: 'AuthDelegationProviderPayload'
    environments: Array<{
      __typename?: 'AuthDelegationProviderEnvironment'
      environment: Types.AuthAdminEnvironment
      providers: Array<{
        __typename?: 'AuthAdminDelegationProvider'
        id: string
        name: string
        description: string
        delegationTypes: Array<{
          __typename?: 'AuthAdminDelegationType'
          id: string
          name: string
          description: string
          providerId: string
        }>
      }>
    }>
  }
}

export const GetDelegationProvidersDocument = gql`
  query GetDelegationProviders {
    authDelegationProviders {
      environments {
        environment
        providers {
          id
          name
          description
          delegationTypes {
            id
            name
            description
            providerId
          }
        }
      }
    }
  }
`

/**
 * __useGetDelegationProvidersQuery__
 *
 * To run a query within a React component, call `useGetDelegationProvidersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDelegationProvidersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDelegationProvidersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDelegationProvidersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetDelegationProvidersQuery,
    GetDelegationProvidersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetDelegationProvidersQuery,
    GetDelegationProvidersQueryVariables
  >(GetDelegationProvidersDocument, options)
}
export function useGetDelegationProvidersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetDelegationProvidersQuery,
    GetDelegationProvidersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetDelegationProvidersQuery,
    GetDelegationProvidersQueryVariables
  >(GetDelegationProvidersDocument, options)
}
export type GetDelegationProvidersQueryHookResult = ReturnType<
  typeof useGetDelegationProvidersQuery
>
export type GetDelegationProvidersLazyQueryHookResult = ReturnType<
  typeof useGetDelegationProvidersLazyQuery
>
export type GetDelegationProvidersQueryResult = Apollo.QueryResult<
  GetDelegationProvidersQuery,
  GetDelegationProvidersQueryVariables
>
