import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type SignaturesQueryVariables = Types.Exact<{
  input: Types.SignatureCollectionListIdInput
}>

export type SignaturesQuery = {
  __typename?: 'Query'
  signatureCollectionAdminSignatures?: Array<{
    __typename?: 'SignatureCollectionSignature'
    id: string
    listId: string
    isDigital: boolean
    pageNumber?: number | null
    valid?: boolean | null
    created: string
    signee: {
      __typename?: 'SignatureCollectionSigneeBase'
      name: string
      nationalId: string
      address?: string | null
    }
  }> | null
}

export const SignaturesDocument = gql`
  query Signatures($input: SignatureCollectionListIdInput!) {
    signatureCollectionAdminSignatures(input: $input) {
      id
      listId
      signee {
        name
        nationalId
        address
      }
      isDigital
      pageNumber
      valid
      created
    }
  }
`

/**
 * __useSignaturesQuery__
 *
 * To run a query within a React component, call `useSignaturesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSignaturesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSignaturesQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignaturesQuery(
  baseOptions: Apollo.QueryHookOptions<
    SignaturesQuery,
    SignaturesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<SignaturesQuery, SignaturesQueryVariables>(
    SignaturesDocument,
    options,
  )
}
export function useSignaturesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SignaturesQuery,
    SignaturesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<SignaturesQuery, SignaturesQueryVariables>(
    SignaturesDocument,
    options,
  )
}
export type SignaturesQueryHookResult = ReturnType<typeof useSignaturesQuery>
export type SignaturesLazyQueryHookResult = ReturnType<
  typeof useSignaturesLazyQuery
>
export type SignaturesQueryResult = Apollo.QueryResult<
  SignaturesQuery,
  SignaturesQueryVariables
>
