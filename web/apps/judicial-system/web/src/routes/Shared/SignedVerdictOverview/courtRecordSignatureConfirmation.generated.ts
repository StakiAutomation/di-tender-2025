import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type CourtRecordSignatureConfirmationQueryVariables = Types.Exact<{
  input: Types.SignatureConfirmationQueryInput
}>

export type CourtRecordSignatureConfirmationQuery = {
  __typename?: 'Query'
  courtRecordSignatureConfirmation?: {
    __typename?: 'SignatureConfirmationResponse'
    documentSigned: boolean
    code?: number | null
    message?: string | null
  } | null
}

export const CourtRecordSignatureConfirmationDocument = gql`
  query CourtRecordSignatureConfirmation(
    $input: SignatureConfirmationQueryInput!
  ) {
    courtRecordSignatureConfirmation(input: $input) {
      documentSigned
      code
      message
    }
  }
`

/**
 * __useCourtRecordSignatureConfirmationQuery__
 *
 * To run a query within a React component, call `useCourtRecordSignatureConfirmationQuery` and pass it any options that fit your needs.
 * When your component renders, `useCourtRecordSignatureConfirmationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCourtRecordSignatureConfirmationQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCourtRecordSignatureConfirmationQuery(
  baseOptions: Apollo.QueryHookOptions<
    CourtRecordSignatureConfirmationQuery,
    CourtRecordSignatureConfirmationQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    CourtRecordSignatureConfirmationQuery,
    CourtRecordSignatureConfirmationQueryVariables
  >(CourtRecordSignatureConfirmationDocument, options)
}
export function useCourtRecordSignatureConfirmationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CourtRecordSignatureConfirmationQuery,
    CourtRecordSignatureConfirmationQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    CourtRecordSignatureConfirmationQuery,
    CourtRecordSignatureConfirmationQueryVariables
  >(CourtRecordSignatureConfirmationDocument, options)
}
export type CourtRecordSignatureConfirmationQueryHookResult = ReturnType<
  typeof useCourtRecordSignatureConfirmationQuery
>
export type CourtRecordSignatureConfirmationLazyQueryHookResult = ReturnType<
  typeof useCourtRecordSignatureConfirmationLazyQuery
>
export type CourtRecordSignatureConfirmationQueryResult = Apollo.QueryResult<
  CourtRecordSignatureConfirmationQuery,
  CourtRecordSignatureConfirmationQueryVariables
>
