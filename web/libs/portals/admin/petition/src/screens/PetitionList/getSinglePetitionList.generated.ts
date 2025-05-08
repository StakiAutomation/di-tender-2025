import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type EndorsementSystemGetSingleEndorsementListQueryVariables = Types.Exact<{
  input: Types.FindEndorsementListInput
}>

export type EndorsementSystemGetSingleEndorsementListQuery = {
  __typename?: 'Query'
  endorsementSystemGetSingleEndorsementList?: {
    __typename?: 'EndorsementList'
    meta: any
    title: string
    description?: string | null
    owner?: string | null
    ownerName?: string | null
    closedDate: string
    openedDate: string
    adminLock: boolean
  } | null
}

export const EndorsementSystemGetSingleEndorsementListDocument = gql`
  query endorsementSystemGetSingleEndorsementList(
    $input: FindEndorsementListInput!
  ) {
    endorsementSystemGetSingleEndorsementList(input: $input) {
      meta
      title
      description
      owner
      ownerName
      closedDate
      openedDate
      adminLock
      owner
    }
  }
`

/**
 * __useEndorsementSystemGetSingleEndorsementListQuery__
 *
 * To run a query within a React component, call `useEndorsementSystemGetSingleEndorsementListQuery` and pass it any options that fit your needs.
 * When your component renders, `useEndorsementSystemGetSingleEndorsementListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEndorsementSystemGetSingleEndorsementListQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEndorsementSystemGetSingleEndorsementListQuery(
  baseOptions: Apollo.QueryHookOptions<
    EndorsementSystemGetSingleEndorsementListQuery,
    EndorsementSystemGetSingleEndorsementListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    EndorsementSystemGetSingleEndorsementListQuery,
    EndorsementSystemGetSingleEndorsementListQueryVariables
  >(EndorsementSystemGetSingleEndorsementListDocument, options)
}
export function useEndorsementSystemGetSingleEndorsementListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    EndorsementSystemGetSingleEndorsementListQuery,
    EndorsementSystemGetSingleEndorsementListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    EndorsementSystemGetSingleEndorsementListQuery,
    EndorsementSystemGetSingleEndorsementListQueryVariables
  >(EndorsementSystemGetSingleEndorsementListDocument, options)
}
export type EndorsementSystemGetSingleEndorsementListQueryHookResult = ReturnType<
  typeof useEndorsementSystemGetSingleEndorsementListQuery
>
export type EndorsementSystemGetSingleEndorsementListLazyQueryHookResult = ReturnType<
  typeof useEndorsementSystemGetSingleEndorsementListLazyQuery
>
export type EndorsementSystemGetSingleEndorsementListQueryResult = Apollo.QueryResult<
  EndorsementSystemGetSingleEndorsementListQuery,
  EndorsementSystemGetSingleEndorsementListQueryVariables
>
