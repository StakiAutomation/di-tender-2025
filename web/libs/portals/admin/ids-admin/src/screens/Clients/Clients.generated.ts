import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetClientsQueryVariables = Types.Exact<{
  input: Types.AuthAdminClientsInput
}>

export type GetClientsQuery = {
  __typename?: 'Query'
  authAdminClients: {
    __typename?: 'AuthAdminClientsPayload'
    data: Array<{
      __typename?: 'AuthAdminClient'
      clientId: string
      clientType: Types.AuthAdminClientType
      availableEnvironments: Array<Types.AuthAdminEnvironment>
      defaultEnvironment: {
        __typename?: 'AuthAdminClientEnvironment'
        id: string
        environment: Types.AuthAdminEnvironment
        clientId: string
        sso: Types.AuthAdminClientSso
        displayName: Array<{
          __typename?: 'AuthAdminTranslatedValue'
          locale: string
          value: string
        }>
      }
    }>
  }
}

export const GetClientsDocument = gql`
  query GetClients($input: AuthAdminClientsInput!) {
    authAdminClients(input: $input) {
      data {
        clientId
        clientType
        availableEnvironments
        defaultEnvironment {
          id
          environment
          clientId
          sso
          displayName {
            locale
            value
          }
        }
      }
    }
  }
`

/**
 * __useGetClientsQuery__
 *
 * To run a query within a React component, call `useGetClientsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetClientsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetClientsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetClientsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetClientsQuery,
    GetClientsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetClientsQuery, GetClientsQueryVariables>(
    GetClientsDocument,
    options,
  )
}
export function useGetClientsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetClientsQuery,
    GetClientsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetClientsQuery, GetClientsQueryVariables>(
    GetClientsDocument,
    options,
  )
}
export type GetClientsQueryHookResult = ReturnType<typeof useGetClientsQuery>
export type GetClientsLazyQueryHookResult = ReturnType<
  typeof useGetClientsLazyQuery
>
export type GetClientsQueryResult = Apollo.QueryResult<
  GetClientsQuery,
  GetClientsQueryVariables
>
