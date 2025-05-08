import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import { AuthApiScopeFragmentDoc } from '../../access/AccessList/AccessListContainer/AccessListContainer.generated'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type AuthCustomDelegationOutgoingFragment = {
  __typename?: 'AuthCustomDelegation'
  validTo?: string | null
  scopes: Array<{
    __typename?: 'AuthDelegationScope'
    id: string
    name: string
    validTo?: string | null
    displayName: string
    apiScope?: {
      __typename?: 'AuthApiScope'
      name: string
      displayName: string
      description?: string | null
      group?: {
        __typename?: 'AuthApiScopeGroup'
        name: string
        displayName: string
      } | null
    } | null
  }>
  domain: {
    __typename?: 'AuthDomain'
    name: string
    displayName: string
    organisationLogoKey: string
    organisationLogoUrl?: string | null
  }
}

export type AuthDelegationsOutgoingQueryVariables = Types.Exact<{
  input: Types.AuthDelegationsInput
  lang?: Types.InputMaybe<Types.Scalars['String']>
}>

export type AuthDelegationsOutgoingQuery = {
  __typename?: 'Query'
  authDelegations: Array<
    | {
        __typename?: 'AuthCustomDelegation'
        id?: string | null
        type: Types.AuthDelegationType
        validTo?: string | null
        to:
          | { __typename?: 'IdentityCompany'; nationalId: string; name: string }
          | { __typename?: 'IdentityPerson'; nationalId: string; name: string }
        from:
          | { __typename?: 'IdentityCompany'; nationalId: string; name: string }
          | { __typename?: 'IdentityPerson'; nationalId: string; name: string }
        scopes: Array<{
          __typename?: 'AuthDelegationScope'
          id: string
          name: string
          validTo?: string | null
          displayName: string
          apiScope?: {
            __typename?: 'AuthApiScope'
            name: string
            displayName: string
            description?: string | null
            group?: {
              __typename?: 'AuthApiScopeGroup'
              name: string
              displayName: string
            } | null
          } | null
        }>
        domain: {
          __typename?: 'AuthDomain'
          name: string
          displayName: string
          organisationLogoKey: string
          organisationLogoUrl?: string | null
        }
      }
    | {
        __typename?: 'AuthGeneralMandate'
        id?: string | null
        type: Types.AuthDelegationType
        validTo?: string | null
        to?:
          | { __typename?: 'IdentityCompany'; nationalId: string; name: string }
          | { __typename?: 'IdentityPerson'; nationalId: string; name: string }
          | null
        from:
          | { __typename?: 'IdentityCompany'; nationalId: string; name: string }
          | { __typename?: 'IdentityPerson'; nationalId: string; name: string }
      }
    | {
        __typename?: 'AuthLegalGuardianDelegation'
        id?: string | null
        type: Types.AuthDelegationType
        validTo?: string | null
        to?:
          | { __typename?: 'IdentityCompany'; nationalId: string; name: string }
          | { __typename?: 'IdentityPerson'; nationalId: string; name: string }
          | null
        from:
          | { __typename?: 'IdentityCompany'; nationalId: string; name: string }
          | { __typename?: 'IdentityPerson'; nationalId: string; name: string }
      }
    | {
        __typename?: 'AuthLegalGuardianMinorDelegation'
        id?: string | null
        type: Types.AuthDelegationType
        validTo?: string | null
        to?:
          | { __typename?: 'IdentityCompany'; nationalId: string; name: string }
          | { __typename?: 'IdentityPerson'; nationalId: string; name: string }
          | null
        from:
          | { __typename?: 'IdentityCompany'; nationalId: string; name: string }
          | { __typename?: 'IdentityPerson'; nationalId: string; name: string }
      }
    | {
        __typename?: 'AuthLegalRepresentativeDelegation'
        id?: string | null
        type: Types.AuthDelegationType
        validTo?: string | null
        to?:
          | { __typename?: 'IdentityCompany'; nationalId: string; name: string }
          | { __typename?: 'IdentityPerson'; nationalId: string; name: string }
          | null
        from:
          | { __typename?: 'IdentityCompany'; nationalId: string; name: string }
          | { __typename?: 'IdentityPerson'; nationalId: string; name: string }
      }
    | {
        __typename?: 'AuthPersonalRepresentativeDelegation'
        id?: string | null
        type: Types.AuthDelegationType
        validTo?: string | null
        to?:
          | { __typename?: 'IdentityCompany'; nationalId: string; name: string }
          | { __typename?: 'IdentityPerson'; nationalId: string; name: string }
          | null
        from:
          | { __typename?: 'IdentityCompany'; nationalId: string; name: string }
          | { __typename?: 'IdentityPerson'; nationalId: string; name: string }
      }
    | {
        __typename?: 'AuthProcuringHolderDelegation'
        id?: string | null
        type: Types.AuthDelegationType
        validTo?: string | null
        to?:
          | { __typename?: 'IdentityCompany'; nationalId: string; name: string }
          | { __typename?: 'IdentityPerson'; nationalId: string; name: string }
          | null
        from:
          | { __typename?: 'IdentityCompany'; nationalId: string; name: string }
          | { __typename?: 'IdentityPerson'; nationalId: string; name: string }
      }
  >
}

export const AuthCustomDelegationOutgoingFragmentDoc = gql`
  fragment AuthCustomDelegationOutgoing on AuthCustomDelegation {
    validTo
    scopes {
      id
      name
      validTo
      displayName
      apiScope(lang: $lang) {
        ...AuthApiScope
        group {
          name
          displayName
        }
      }
    }
    domain {
      name
      displayName
      organisationLogoKey
      organisationLogoUrl
    }
  }
  ${AuthApiScopeFragmentDoc}
`
export const AuthDelegationsOutgoingDocument = gql`
  query AuthDelegationsOutgoing($input: AuthDelegationsInput!, $lang: String) {
    authDelegations(input: $input) {
      id
      type
      validTo
      to {
        nationalId
        name
      }
      from {
        nationalId
        name
      }
      ... on AuthCustomDelegation {
        ...AuthCustomDelegationOutgoing
      }
    }
  }
  ${AuthCustomDelegationOutgoingFragmentDoc}
`

/**
 * __useAuthDelegationsOutgoingQuery__
 *
 * To run a query within a React component, call `useAuthDelegationsOutgoingQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthDelegationsOutgoingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthDelegationsOutgoingQuery({
 *   variables: {
 *      input: // value for 'input'
 *      lang: // value for 'lang'
 *   },
 * });
 */
export function useAuthDelegationsOutgoingQuery(
  baseOptions: Apollo.QueryHookOptions<
    AuthDelegationsOutgoingQuery,
    AuthDelegationsOutgoingQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    AuthDelegationsOutgoingQuery,
    AuthDelegationsOutgoingQueryVariables
  >(AuthDelegationsOutgoingDocument, options)
}
export function useAuthDelegationsOutgoingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AuthDelegationsOutgoingQuery,
    AuthDelegationsOutgoingQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    AuthDelegationsOutgoingQuery,
    AuthDelegationsOutgoingQueryVariables
  >(AuthDelegationsOutgoingDocument, options)
}
export type AuthDelegationsOutgoingQueryHookResult = ReturnType<
  typeof useAuthDelegationsOutgoingQuery
>
export type AuthDelegationsOutgoingLazyQueryHookResult = ReturnType<
  typeof useAuthDelegationsOutgoingLazyQuery
>
export type AuthDelegationsOutgoingQueryResult = Apollo.QueryResult<
  AuthDelegationsOutgoingQuery,
  AuthDelegationsOutgoingQueryVariables
>
