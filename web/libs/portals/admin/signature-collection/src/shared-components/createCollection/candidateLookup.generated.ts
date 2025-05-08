import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type CandidateLookupQueryVariables = Types.Exact<{
  input: Types.SignatureCollectionNationalIdInput
}>

export type CandidateLookupQuery = {
  __typename?: 'Query'
  signatureCollectionAdminCandidateLookup: {
    __typename?: 'SignatureCollectionCandidateLookUp'
    nationalId: string
    name: string
    canCreate: boolean
    canCreateInfo?: Array<string> | null
  }
}

export const CandidateLookupDocument = gql`
  query CandidateLookup($input: SignatureCollectionNationalIdInput!) {
    signatureCollectionAdminCandidateLookup(input: $input) {
      nationalId
      name
      canCreate
      canCreateInfo
    }
  }
`

/**
 * __useCandidateLookupQuery__
 *
 * To run a query within a React component, call `useCandidateLookupQuery` and pass it any options that fit your needs.
 * When your component renders, `useCandidateLookupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCandidateLookupQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCandidateLookupQuery(
  baseOptions: Apollo.QueryHookOptions<
    CandidateLookupQuery,
    CandidateLookupQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<CandidateLookupQuery, CandidateLookupQueryVariables>(
    CandidateLookupDocument,
    options,
  )
}
export function useCandidateLookupLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CandidateLookupQuery,
    CandidateLookupQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    CandidateLookupQuery,
    CandidateLookupQueryVariables
  >(CandidateLookupDocument, options)
}
export type CandidateLookupQueryHookResult = ReturnType<
  typeof useCandidateLookupQuery
>
export type CandidateLookupLazyQueryHookResult = ReturnType<
  typeof useCandidateLookupLazyQuery
>
export type CandidateLookupQueryResult = Apollo.QueryResult<
  CandidateLookupQuery,
  CandidateLookupQueryVariables
>
