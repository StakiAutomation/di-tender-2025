import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type EndorsementSystemGetEndorsementsQueryVariables = Types.Exact<{
  input: Types.PaginatedEndorsementInput
}>

export type EndorsementSystemGetEndorsementsQuery = {
  __typename?: 'Query'
  endorsementSystemGetEndorsements?: {
    __typename?: 'PaginatedEndorsementResponse'
    totalCount: number
    data: Array<{
      __typename?: 'Endorsement'
      id: string
      endorser: string
      created: string
      meta: {
        __typename?: 'EndorsementMetadata'
        fullName?: string | null
        locality?: string | null
      }
    }>
  } | null
}

export const EndorsementSystemGetEndorsementsDocument = gql`
  query endorsementSystemGetEndorsements($input: PaginatedEndorsementInput!) {
    endorsementSystemGetEndorsements(input: $input) {
      totalCount
      data {
        id
        endorser
        created
        meta {
          fullName
          locality
        }
      }
    }
  }
`

/**
 * __useEndorsementSystemGetEndorsementsQuery__
 *
 * To run a query within a React component, call `useEndorsementSystemGetEndorsementsQuery` and pass it any options that fit your needs.
 * When your component renders, `useEndorsementSystemGetEndorsementsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEndorsementSystemGetEndorsementsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEndorsementSystemGetEndorsementsQuery(
  baseOptions: Apollo.QueryHookOptions<
    EndorsementSystemGetEndorsementsQuery,
    EndorsementSystemGetEndorsementsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    EndorsementSystemGetEndorsementsQuery,
    EndorsementSystemGetEndorsementsQueryVariables
  >(EndorsementSystemGetEndorsementsDocument, options)
}
export function useEndorsementSystemGetEndorsementsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    EndorsementSystemGetEndorsementsQuery,
    EndorsementSystemGetEndorsementsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    EndorsementSystemGetEndorsementsQuery,
    EndorsementSystemGetEndorsementsQueryVariables
  >(EndorsementSystemGetEndorsementsDocument, options)
}
export type EndorsementSystemGetEndorsementsQueryHookResult = ReturnType<
  typeof useEndorsementSystemGetEndorsementsQuery
>
export type EndorsementSystemGetEndorsementsLazyQueryHookResult = ReturnType<
  typeof useEndorsementSystemGetEndorsementsLazyQuery
>
export type EndorsementSystemGetEndorsementsQueryResult = Apollo.QueryResult<
  EndorsementSystemGetEndorsementsQuery,
  EndorsementSystemGetEndorsementsQueryVariables
>
