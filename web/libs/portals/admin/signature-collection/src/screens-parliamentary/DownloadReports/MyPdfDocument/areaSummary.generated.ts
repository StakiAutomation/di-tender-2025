import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type SignatureCollectionAreaSummaryReportQueryVariables = Types.Exact<{
  input: Types.SignatureCollectionAreaSummaryReportInput
}>

export type SignatureCollectionAreaSummaryReportQuery = {
  __typename?: 'Query'
  signatureCollectionAreaSummaryReport: {
    __typename?: 'SignatureCollectionAreaSummaryReport'
    id: string
    name: string
    min: number
    max?: number | null
    lists: Array<{
      __typename?: 'SignatureCollectionListSummary'
      candidateName: string
      listName: string
      partyBallotLetter: string
      nrOfSignatures: number
      nrOfDigitalSignatures: number
      nrOfPaperSignatures: number
    }>
  }
}

export const SignatureCollectionAreaSummaryReportDocument = gql`
  query SignatureCollectionAreaSummaryReport(
    $input: SignatureCollectionAreaSummaryReportInput!
  ) {
    signatureCollectionAreaSummaryReport(input: $input) {
      id
      name
      min
      max
      lists {
        candidateName
        listName
        partyBallotLetter
        nrOfSignatures
        nrOfDigitalSignatures
        nrOfPaperSignatures
      }
    }
  }
`

/**
 * __useSignatureCollectionAreaSummaryReportQuery__
 *
 * To run a query within a React component, call `useSignatureCollectionAreaSummaryReportQuery` and pass it any options that fit your needs.
 * When your component renders, `useSignatureCollectionAreaSummaryReportQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSignatureCollectionAreaSummaryReportQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignatureCollectionAreaSummaryReportQuery(
  baseOptions: Apollo.QueryHookOptions<
    SignatureCollectionAreaSummaryReportQuery,
    SignatureCollectionAreaSummaryReportQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    SignatureCollectionAreaSummaryReportQuery,
    SignatureCollectionAreaSummaryReportQueryVariables
  >(SignatureCollectionAreaSummaryReportDocument, options)
}
export function useSignatureCollectionAreaSummaryReportLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SignatureCollectionAreaSummaryReportQuery,
    SignatureCollectionAreaSummaryReportQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    SignatureCollectionAreaSummaryReportQuery,
    SignatureCollectionAreaSummaryReportQueryVariables
  >(SignatureCollectionAreaSummaryReportDocument, options)
}
export type SignatureCollectionAreaSummaryReportQueryHookResult = ReturnType<
  typeof useSignatureCollectionAreaSummaryReportQuery
>
export type SignatureCollectionAreaSummaryReportLazyQueryHookResult = ReturnType<
  typeof useSignatureCollectionAreaSummaryReportLazyQuery
>
export type SignatureCollectionAreaSummaryReportQueryResult = Apollo.QueryResult<
  SignatureCollectionAreaSummaryReportQuery,
  SignatureCollectionAreaSummaryReportQueryVariables
>
