import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type EndorsementSystemFindEndorsementListsQueryVariables = Types.Exact<{
  input: Types.PaginatedEndorsementListInput
}>

export type EndorsementSystemFindEndorsementListsQuery = {
  __typename?: 'Query'
  endorsementSystemFindEndorsementLists: {
    __typename?: 'PaginatedEndorsementListResponse'
    totalCount: number
    pageInfo: {
      __typename?: 'PageInfoResponse'
      hasPreviousPage: boolean
      hasNextPage: boolean
      startCursor?: string | null
      endCursor?: string | null
    }
    data: Array<{
      __typename?: 'EndorsementList'
      id: string
      title: string
      description?: string | null
      closedDate: string
      openedDate: string
      adminLock: boolean
      owner?: string | null
    }>
  }
}

export const EndorsementSystemFindEndorsementListsDocument = gql`
  query endorsementSystemFindEndorsementLists(
    $input: PaginatedEndorsementListInput!
  ) {
    endorsementSystemFindEndorsementLists(input: $input) {
      totalCount
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
      data {
        id
        title
        description
        closedDate
        openedDate
        adminLock
        owner
      }
    }
  }
`

/**
 * __useEndorsementSystemFindEndorsementListsQuery__
 *
 * To run a query within a React component, call `useEndorsementSystemFindEndorsementListsQuery` and pass it any options that fit your needs.
 * When your component renders, `useEndorsementSystemFindEndorsementListsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEndorsementSystemFindEndorsementListsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEndorsementSystemFindEndorsementListsQuery(
  baseOptions: Apollo.QueryHookOptions<
    EndorsementSystemFindEndorsementListsQuery,
    EndorsementSystemFindEndorsementListsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    EndorsementSystemFindEndorsementListsQuery,
    EndorsementSystemFindEndorsementListsQueryVariables
  >(EndorsementSystemFindEndorsementListsDocument, options)
}
export function useEndorsementSystemFindEndorsementListsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    EndorsementSystemFindEndorsementListsQuery,
    EndorsementSystemFindEndorsementListsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    EndorsementSystemFindEndorsementListsQuery,
    EndorsementSystemFindEndorsementListsQueryVariables
  >(EndorsementSystemFindEndorsementListsDocument, options)
}
export type EndorsementSystemFindEndorsementListsQueryHookResult = ReturnType<
  typeof useEndorsementSystemFindEndorsementListsQuery
>
export type EndorsementSystemFindEndorsementListsLazyQueryHookResult = ReturnType<
  typeof useEndorsementSystemFindEndorsementListsLazyQuery
>
export type EndorsementSystemFindEndorsementListsQueryResult = Apollo.QueryResult<
  EndorsementSystemFindEndorsementListsQuery,
  EndorsementSystemFindEndorsementListsQueryVariables
>
