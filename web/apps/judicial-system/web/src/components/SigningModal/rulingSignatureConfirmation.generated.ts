import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type RulingSignatureConfirmationQueryVariables = Types.Exact<{
  input: Types.SignatureConfirmationQueryInput
}>

export type RulingSignatureConfirmationQuery = {
  __typename?: 'Query'
  rulingSignatureConfirmation?: {
    __typename?: 'SignatureConfirmationResponse'
    documentSigned: boolean
    code?: number | null
    message?: string | null
  } | null
}

export const RulingSignatureConfirmationDocument = gql`
  query RulingSignatureConfirmation($input: SignatureConfirmationQueryInput!) {
    rulingSignatureConfirmation(input: $input) {
      documentSigned
      code
      message
    }
  }
`

/**
 * __useRulingSignatureConfirmationQuery__
 *
 * To run a query within a React component, call `useRulingSignatureConfirmationQuery` and pass it any options that fit your needs.
 * When your component renders, `useRulingSignatureConfirmationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRulingSignatureConfirmationQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRulingSignatureConfirmationQuery(
  baseOptions: Apollo.QueryHookOptions<
    RulingSignatureConfirmationQuery,
    RulingSignatureConfirmationQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    RulingSignatureConfirmationQuery,
    RulingSignatureConfirmationQueryVariables
  >(RulingSignatureConfirmationDocument, options)
}
export function useRulingSignatureConfirmationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    RulingSignatureConfirmationQuery,
    RulingSignatureConfirmationQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    RulingSignatureConfirmationQuery,
    RulingSignatureConfirmationQueryVariables
  >(RulingSignatureConfirmationDocument, options)
}
export type RulingSignatureConfirmationQueryHookResult = ReturnType<
  typeof useRulingSignatureConfirmationQuery
>
export type RulingSignatureConfirmationLazyQueryHookResult = ReturnType<
  typeof useRulingSignatureConfirmationLazyQuery
>
export type RulingSignatureConfirmationQueryResult = Apollo.QueryResult<
  RulingSignatureConfirmationQuery,
  RulingSignatureConfirmationQueryVariables
>
