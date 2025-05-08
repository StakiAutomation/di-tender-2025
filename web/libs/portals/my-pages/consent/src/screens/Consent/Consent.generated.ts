import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type AuthConsentScopeNodeFragment = {
  __typename?: 'AuthConsentScopeNode'
  displayName: string
  name: string
  description?: string | null
  hasConsent?: boolean | null
}

export type GetConsentListQueryVariables = Types.Exact<{ [key: string]: never }>

export type GetConsentListQuery = {
  __typename?: 'Query'
  consentsList: {
    __typename?: 'AuthConsentsPaginated'
    data: Array<{
      __typename?: 'AuthConsent'
      client: {
        __typename?: 'AuthClient'
        clientId: string
        clientName?: string | null
        domainName?: string | null
        domain?: {
          __typename?: 'AuthDomain'
          name: string
          displayName: string
          description: string
          nationalId: string
          organisationLogoUrl?: string | null
        } | null
      }
      tenants: Array<{
        __typename?: 'AuthConsentTenant'
        tenant: {
          __typename?: 'AuthDomain'
          name: string
          displayName: string
          description: string
          nationalId: string
          organisationLogoUrl?: string | null
        }
        scopes?: Array<{
          __typename?: 'AuthConsentScopeNode'
          name: string
          displayName: string
          description?: string | null
          hasConsent?: boolean | null
          children?: Array<{
            __typename?: 'AuthConsentScopeNode'
            displayName: string
            name: string
            description?: string | null
            hasConsent?: boolean | null
          }> | null
        }> | null
      }>
    }>
  }
}

export type PatchConsentMutationVariables = Types.Exact<{
  input: Types.PatchAuthConsentInput
}>

export type PatchConsentMutation = {
  __typename?: 'Mutation'
  patchAuthConsent: boolean
}

export const AuthConsentScopeNodeFragmentDoc = gql`
  fragment AuthConsentScopeNode on AuthConsentScopeNode {
    displayName
    name
    description
    hasConsent
  }
`
export const GetConsentListDocument = gql`
  query GetConsentList {
    consentsList {
      data {
        client {
          clientId
          clientName
          domainName
          domain {
            name
            displayName
            description
            nationalId
            organisationLogoUrl
          }
        }
        tenants {
          tenant {
            name
            displayName
            description
            nationalId
            organisationLogoUrl
          }
          scopes {
            ... on AuthConsentScopeNode {
              ...AuthConsentScopeNode
            }
            ... on AuthConsentScopeNode {
              name
              displayName
              description
              children {
                ...AuthConsentScopeNode
              }
            }
          }
        }
      }
    }
  }
  ${AuthConsentScopeNodeFragmentDoc}
`

/**
 * __useGetConsentListQuery__
 *
 * To run a query within a React component, call `useGetConsentListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetConsentListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetConsentListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetConsentListQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetConsentListQuery,
    GetConsentListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetConsentListQuery, GetConsentListQueryVariables>(
    GetConsentListDocument,
    options,
  )
}
export function useGetConsentListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetConsentListQuery,
    GetConsentListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetConsentListQuery, GetConsentListQueryVariables>(
    GetConsentListDocument,
    options,
  )
}
export type GetConsentListQueryHookResult = ReturnType<
  typeof useGetConsentListQuery
>
export type GetConsentListLazyQueryHookResult = ReturnType<
  typeof useGetConsentListLazyQuery
>
export type GetConsentListQueryResult = Apollo.QueryResult<
  GetConsentListQuery,
  GetConsentListQueryVariables
>
export const PatchConsentDocument = gql`
  mutation PatchConsent($input: PatchAuthConsentInput!) {
    patchAuthConsent(input: $input)
  }
`
export type PatchConsentMutationFn = Apollo.MutationFunction<
  PatchConsentMutation,
  PatchConsentMutationVariables
>

/**
 * __usePatchConsentMutation__
 *
 * To run a mutation, you first call `usePatchConsentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePatchConsentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [patchConsentMutation, { data, loading, error }] = usePatchConsentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePatchConsentMutation(
  baseOptions?: Apollo.MutationHookOptions<
    PatchConsentMutation,
    PatchConsentMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    PatchConsentMutation,
    PatchConsentMutationVariables
  >(PatchConsentDocument, options)
}
export type PatchConsentMutationHookResult = ReturnType<
  typeof usePatchConsentMutation
>
export type PatchConsentMutationResult = Apollo.MutationResult<PatchConsentMutation>
export type PatchConsentMutationOptions = Apollo.BaseMutationOptions<
  PatchConsentMutation,
  PatchConsentMutationVariables
>
