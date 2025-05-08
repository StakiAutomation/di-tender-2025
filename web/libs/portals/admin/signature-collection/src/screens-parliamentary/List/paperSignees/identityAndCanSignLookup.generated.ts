import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type IdentityQueryVariables = Types.Exact<{
  input: Types.IdentityInput
}>

export type IdentityQuery = {
  __typename?: 'Query'
  identity?:
    | {
        __typename?: 'IdentityCompany'
        nationalId: string
        type: Types.IdentityType
        name: string
      }
    | {
        __typename?: 'IdentityPerson'
        nationalId: string
        type: Types.IdentityType
        name: string
      }
    | null
}

export type SignatureCollectionAdminCanSignInfoQueryVariables = Types.Exact<{
  input: Types.SignatureCollectionCanSignFromPaperInput
}>

export type SignatureCollectionAdminCanSignInfoQuery = {
  __typename?: 'Query'
  signatureCollectionAdminCanSignInfo: {
    __typename?: 'SignatureCollectionSuccess'
    reasons?: Array<string> | null
    success: boolean
  }
}

export const IdentityDocument = gql`
  query Identity($input: IdentityInput!) {
    identity(input: $input) {
      nationalId
      type
      name
    }
  }
`

/**
 * __useIdentityQuery__
 *
 * To run a query within a React component, call `useIdentityQuery` and pass it any options that fit your needs.
 * When your component renders, `useIdentityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIdentityQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useIdentityQuery(
  baseOptions: Apollo.QueryHookOptions<IdentityQuery, IdentityQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<IdentityQuery, IdentityQueryVariables>(
    IdentityDocument,
    options,
  )
}
export function useIdentityLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    IdentityQuery,
    IdentityQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<IdentityQuery, IdentityQueryVariables>(
    IdentityDocument,
    options,
  )
}
export type IdentityQueryHookResult = ReturnType<typeof useIdentityQuery>
export type IdentityLazyQueryHookResult = ReturnType<
  typeof useIdentityLazyQuery
>
export type IdentityQueryResult = Apollo.QueryResult<
  IdentityQuery,
  IdentityQueryVariables
>
export const SignatureCollectionAdminCanSignInfoDocument = gql`
  query SignatureCollectionAdminCanSignInfo(
    $input: SignatureCollectionCanSignFromPaperInput!
  ) {
    signatureCollectionAdminCanSignInfo(input: $input) {
      reasons
      success
    }
  }
`

/**
 * __useSignatureCollectionAdminCanSignInfoQuery__
 *
 * To run a query within a React component, call `useSignatureCollectionAdminCanSignInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useSignatureCollectionAdminCanSignInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSignatureCollectionAdminCanSignInfoQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignatureCollectionAdminCanSignInfoQuery(
  baseOptions: Apollo.QueryHookOptions<
    SignatureCollectionAdminCanSignInfoQuery,
    SignatureCollectionAdminCanSignInfoQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    SignatureCollectionAdminCanSignInfoQuery,
    SignatureCollectionAdminCanSignInfoQueryVariables
  >(SignatureCollectionAdminCanSignInfoDocument, options)
}
export function useSignatureCollectionAdminCanSignInfoLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SignatureCollectionAdminCanSignInfoQuery,
    SignatureCollectionAdminCanSignInfoQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    SignatureCollectionAdminCanSignInfoQuery,
    SignatureCollectionAdminCanSignInfoQueryVariables
  >(SignatureCollectionAdminCanSignInfoDocument, options)
}
export type SignatureCollectionAdminCanSignInfoQueryHookResult = ReturnType<
  typeof useSignatureCollectionAdminCanSignInfoQuery
>
export type SignatureCollectionAdminCanSignInfoLazyQueryHookResult = ReturnType<
  typeof useSignatureCollectionAdminCanSignInfoLazyQuery
>
export type SignatureCollectionAdminCanSignInfoQueryResult = Apollo.QueryResult<
  SignatureCollectionAdminCanSignInfoQuery,
  SignatureCollectionAdminCanSignInfoQueryVariables
>
