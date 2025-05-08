import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type ConnectedCasesQueryVariables = Types.Exact<{
  input: Types.CaseQueryInput
}>

export type ConnectedCasesQuery = {
  __typename?: 'Query'
  connectedCases?: Array<{
    __typename?: 'Case'
    id: string
    courtCaseNumber?: string | null
    created?: string | null
    defendants?: Array<{
      __typename?: 'Defendant'
      id: string
      noNationalId?: boolean | null
      nationalId?: string | null
      name?: string | null
    }> | null
    court?: {
      __typename?: 'Institution'
      id: string
      name?: string | null
      type?: Types.InstitutionType | null
    } | null
  }> | null
}

export const ConnectedCasesDocument = gql`
  query ConnectedCases($input: CaseQueryInput!) {
    connectedCases(input: $input) {
      id
      courtCaseNumber
      created
      defendants {
        id
        noNationalId
        nationalId
        name
      }
      court {
        id
        name
        type
      }
    }
  }
`

/**
 * __useConnectedCasesQuery__
 *
 * To run a query within a React component, call `useConnectedCasesQuery` and pass it any options that fit your needs.
 * When your component renders, `useConnectedCasesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConnectedCasesQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useConnectedCasesQuery(
  baseOptions: Apollo.QueryHookOptions<
    ConnectedCasesQuery,
    ConnectedCasesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ConnectedCasesQuery, ConnectedCasesQueryVariables>(
    ConnectedCasesDocument,
    options,
  )
}
export function useConnectedCasesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ConnectedCasesQuery,
    ConnectedCasesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ConnectedCasesQuery, ConnectedCasesQueryVariables>(
    ConnectedCasesDocument,
    options,
  )
}
export type ConnectedCasesQueryHookResult = ReturnType<
  typeof useConnectedCasesQuery
>
export type ConnectedCasesLazyQueryHookResult = ReturnType<
  typeof useConnectedCasesLazyQuery
>
export type ConnectedCasesQueryResult = Apollo.QueryResult<
  ConnectedCasesQuery,
  ConnectedCasesQueryVariables
>
