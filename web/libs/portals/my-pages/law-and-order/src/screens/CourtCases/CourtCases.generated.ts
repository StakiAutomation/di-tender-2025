import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetCourtCasesQueryVariables = Types.Exact<{
  locale: Types.Scalars['String']
}>

export type GetCourtCasesQuery = {
  __typename?: 'Query'
  lawAndOrderCourtCasesList?: {
    __typename?: 'LawAndOrderCourtCases'
    cases?: Array<{
      __typename?: 'LawAndOrderCourtCasesCase'
      id: string
      caseNumberTitle?: string | null
      type?: string | null
      state?: {
        __typename?: 'LawAndOrderCourtCasesState'
        label?: string | null
        color?: Types.LawAndOrderCourtCaseStateTagColorEnum | null
      } | null
    }> | null
  } | null
}

export const GetCourtCasesDocument = gql`
  query GetCourtCases($locale: String!) {
    lawAndOrderCourtCasesList(locale: $locale) {
      cases {
        id
        caseNumberTitle
        type
        state {
          label
          color
        }
      }
    }
  }
`

/**
 * __useGetCourtCasesQuery__
 *
 * To run a query within a React component, call `useGetCourtCasesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCourtCasesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCourtCasesQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetCourtCasesQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetCourtCasesQuery,
    GetCourtCasesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetCourtCasesQuery, GetCourtCasesQueryVariables>(
    GetCourtCasesDocument,
    options,
  )
}
export function useGetCourtCasesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCourtCasesQuery,
    GetCourtCasesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetCourtCasesQuery, GetCourtCasesQueryVariables>(
    GetCourtCasesDocument,
    options,
  )
}
export type GetCourtCasesQueryHookResult = ReturnType<
  typeof useGetCourtCasesQuery
>
export type GetCourtCasesLazyQueryHookResult = ReturnType<
  typeof useGetCourtCasesLazyQuery
>
export type GetCourtCasesQueryResult = Apollo.QueryResult<
  GetCourtCasesQuery,
  GetCourtCasesQueryVariables
>
