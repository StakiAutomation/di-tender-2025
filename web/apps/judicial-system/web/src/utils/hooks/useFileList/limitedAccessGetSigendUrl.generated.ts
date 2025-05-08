import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type LimitedAccessGetSignedUrlQueryVariables = Types.Exact<{
  input: Types.GetSignedUrlInput
}>

export type LimitedAccessGetSignedUrlQuery = {
  __typename?: 'Query'
  limitedAccessGetSignedUrl?: { __typename?: 'SignedUrl'; url: string } | null
}

export const LimitedAccessGetSignedUrlDocument = gql`
  query LimitedAccessGetSignedUrl($input: GetSignedUrlInput!) {
    limitedAccessGetSignedUrl(input: $input) {
      url
    }
  }
`

/**
 * __useLimitedAccessGetSignedUrlQuery__
 *
 * To run a query within a React component, call `useLimitedAccessGetSignedUrlQuery` and pass it any options that fit your needs.
 * When your component renders, `useLimitedAccessGetSignedUrlQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLimitedAccessGetSignedUrlQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLimitedAccessGetSignedUrlQuery(
  baseOptions: Apollo.QueryHookOptions<
    LimitedAccessGetSignedUrlQuery,
    LimitedAccessGetSignedUrlQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    LimitedAccessGetSignedUrlQuery,
    LimitedAccessGetSignedUrlQueryVariables
  >(LimitedAccessGetSignedUrlDocument, options)
}
export function useLimitedAccessGetSignedUrlLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    LimitedAccessGetSignedUrlQuery,
    LimitedAccessGetSignedUrlQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    LimitedAccessGetSignedUrlQuery,
    LimitedAccessGetSignedUrlQueryVariables
  >(LimitedAccessGetSignedUrlDocument, options)
}
export type LimitedAccessGetSignedUrlQueryHookResult = ReturnType<
  typeof useLimitedAccessGetSignedUrlQuery
>
export type LimitedAccessGetSignedUrlLazyQueryHookResult = ReturnType<
  typeof useLimitedAccessGetSignedUrlLazyQuery
>
export type LimitedAccessGetSignedUrlQueryResult = Apollo.QueryResult<
  LimitedAccessGetSignedUrlQuery,
  LimitedAccessGetSignedUrlQueryVariables
>
