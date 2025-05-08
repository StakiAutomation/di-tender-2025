import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type SubpoenaQueryVariables = Types.Exact<{
  input: Types.SubpoenaQueryInput
}>

export type SubpoenaQuery = {
  __typename?: 'Query'
  subpoena?: {
    __typename?: 'Subpoena'
    id: string
    created?: string | null
    serviceStatus?: Types.ServiceStatus | null
    serviceDate?: string | null
    servedBy?: string | null
    comment?: string | null
    defenderNationalId?: string | null
    caseId?: string | null
    defendantId?: string | null
    policeSubpoenaId?: string | null
  } | null
}

export const SubpoenaDocument = gql`
  query Subpoena($input: SubpoenaQueryInput!) {
    subpoena(input: $input) {
      id
      created
      serviceStatus
      serviceDate
      servedBy
      comment
      defenderNationalId
      caseId
      defendantId
      policeSubpoenaId
    }
  }
`

/**
 * __useSubpoenaQuery__
 *
 * To run a query within a React component, call `useSubpoenaQuery` and pass it any options that fit your needs.
 * When your component renders, `useSubpoenaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubpoenaQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSubpoenaQuery(
  baseOptions: Apollo.QueryHookOptions<SubpoenaQuery, SubpoenaQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<SubpoenaQuery, SubpoenaQueryVariables>(
    SubpoenaDocument,
    options,
  )
}
export function useSubpoenaLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SubpoenaQuery,
    SubpoenaQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<SubpoenaQuery, SubpoenaQueryVariables>(
    SubpoenaDocument,
    options,
  )
}
export type SubpoenaQueryHookResult = ReturnType<typeof useSubpoenaQuery>
export type SubpoenaLazyQueryHookResult = ReturnType<
  typeof useSubpoenaLazyQuery
>
export type SubpoenaQueryResult = Apollo.QueryResult<
  SubpoenaQuery,
  SubpoenaQueryVariables
>
