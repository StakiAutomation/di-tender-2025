import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type InstitutionsQueryVariables = Types.Exact<{ [key: string]: never }>

export type InstitutionsQuery = {
  __typename?: 'Query'
  institutions?: Array<{
    __typename?: 'Institution'
    id: string
    created?: string | null
    modified?: string | null
    type?: Types.InstitutionType | null
    name?: string | null
    active?: boolean | null
  }> | null
}

export const InstitutionsDocument = gql`
  query Institutions {
    institutions {
      id
      created
      modified
      type
      name
      active
    }
  }
`

/**
 * __useInstitutionsQuery__
 *
 * To run a query within a React component, call `useInstitutionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useInstitutionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInstitutionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useInstitutionsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    InstitutionsQuery,
    InstitutionsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<InstitutionsQuery, InstitutionsQueryVariables>(
    InstitutionsDocument,
    options,
  )
}
export function useInstitutionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    InstitutionsQuery,
    InstitutionsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<InstitutionsQuery, InstitutionsQueryVariables>(
    InstitutionsDocument,
    options,
  )
}
export type InstitutionsQueryHookResult = ReturnType<
  typeof useInstitutionsQuery
>
export type InstitutionsLazyQueryHookResult = ReturnType<
  typeof useInstitutionsLazyQuery
>
export type InstitutionsQueryResult = Apollo.QueryResult<
  InstitutionsQuery,
  InstitutionsQueryVariables
>
