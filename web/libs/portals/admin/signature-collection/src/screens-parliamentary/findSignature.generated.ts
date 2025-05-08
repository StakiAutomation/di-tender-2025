import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type SignatureCollectionSignatureLookupQueryVariables = Types.Exact<{
  input: Types.SignatureCollectionSignatureLookupInput
}>

export type SignatureCollectionSignatureLookupQuery = {
  __typename?: 'Query'
  signatureCollectionSignatureLookup: Array<{
    __typename?: 'SignatureCollectionSignature'
    id: string
    listId: string
    listTitle?: string | null
    created: string
    valid?: boolean | null
    isDigital: boolean
    pageNumber?: number | null
    signee: {
      __typename?: 'SignatureCollectionSigneeBase'
      nationalId: string
      name: string
      address?: string | null
    }
  }>
}

export const SignatureCollectionSignatureLookupDocument = gql`
  query SignatureCollectionSignatureLookup(
    $input: SignatureCollectionSignatureLookupInput!
  ) {
    signatureCollectionSignatureLookup(input: $input) {
      id
      listId
      listTitle
      created
      signee {
        nationalId
        name
        address
      }
      valid
      isDigital
      pageNumber
    }
  }
`

/**
 * __useSignatureCollectionSignatureLookupQuery__
 *
 * To run a query within a React component, call `useSignatureCollectionSignatureLookupQuery` and pass it any options that fit your needs.
 * When your component renders, `useSignatureCollectionSignatureLookupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSignatureCollectionSignatureLookupQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignatureCollectionSignatureLookupQuery(
  baseOptions: Apollo.QueryHookOptions<
    SignatureCollectionSignatureLookupQuery,
    SignatureCollectionSignatureLookupQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    SignatureCollectionSignatureLookupQuery,
    SignatureCollectionSignatureLookupQueryVariables
  >(SignatureCollectionSignatureLookupDocument, options)
}
export function useSignatureCollectionSignatureLookupLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SignatureCollectionSignatureLookupQuery,
    SignatureCollectionSignatureLookupQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    SignatureCollectionSignatureLookupQuery,
    SignatureCollectionSignatureLookupQueryVariables
  >(SignatureCollectionSignatureLookupDocument, options)
}
export type SignatureCollectionSignatureLookupQueryHookResult = ReturnType<
  typeof useSignatureCollectionSignatureLookupQuery
>
export type SignatureCollectionSignatureLookupLazyQueryHookResult = ReturnType<
  typeof useSignatureCollectionSignatureLookupLazyQuery
>
export type SignatureCollectionSignatureLookupQueryResult = Apollo.QueryResult<
  SignatureCollectionSignatureLookupQuery,
  SignatureCollectionSignatureLookupQueryVariables
>
