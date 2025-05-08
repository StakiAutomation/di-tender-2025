import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import { AuthCustomDelegationFragmentDoc } from '../../components/delegations/incoming/DelegationIncoming.generated'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type AuthDelegationQueryVariables = Types.Exact<{
  input: Types.AuthDelegationInput
  lang?: Types.InputMaybe<Types.Scalars['String']>
}>

export type AuthDelegationQuery = {
  __typename?: 'Query'
  authDelegation?:
    | {
        __typename?: 'AuthCustomDelegation'
        id?: string | null
        type: Types.AuthDelegationType
        validTo?: string | null
        to:
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
        to?:
          | { __typename?: 'IdentityCompany'; nationalId: string; name: string }
          | { __typename?: 'IdentityPerson'; nationalId: string; name: string }
          | null
      }
    | {
        __typename?: 'AuthLegalGuardianDelegation'
        id?: string | null
        type: Types.AuthDelegationType
        to?:
          | { __typename?: 'IdentityCompany'; nationalId: string; name: string }
          | { __typename?: 'IdentityPerson'; nationalId: string; name: string }
          | null
      }
    | {
        __typename?: 'AuthLegalGuardianMinorDelegation'
        id?: string | null
        type: Types.AuthDelegationType
        to?:
          | { __typename?: 'IdentityCompany'; nationalId: string; name: string }
          | { __typename?: 'IdentityPerson'; nationalId: string; name: string }
          | null
      }
    | {
        __typename?: 'AuthLegalRepresentativeDelegation'
        id?: string | null
        type: Types.AuthDelegationType
        to?:
          | { __typename?: 'IdentityCompany'; nationalId: string; name: string }
          | { __typename?: 'IdentityPerson'; nationalId: string; name: string }
          | null
      }
    | {
        __typename?: 'AuthPersonalRepresentativeDelegation'
        id?: string | null
        type: Types.AuthDelegationType
        to?:
          | { __typename?: 'IdentityCompany'; nationalId: string; name: string }
          | { __typename?: 'IdentityPerson'; nationalId: string; name: string }
          | null
      }
    | {
        __typename?: 'AuthProcuringHolderDelegation'
        id?: string | null
        type: Types.AuthDelegationType
        to?:
          | { __typename?: 'IdentityCompany'; nationalId: string; name: string }
          | { __typename?: 'IdentityPerson'; nationalId: string; name: string }
          | null
      }
    | null
}

export const AuthDelegationDocument = gql`
  query AuthDelegation($input: AuthDelegationInput!, $lang: String) {
    authDelegation(input: $input) {
      id
      type
      to {
        nationalId
        name
      }
      ... on AuthCustomDelegation {
        ...AuthCustomDelegation
      }
    }
  }
  ${AuthCustomDelegationFragmentDoc}
`

/**
 * __useAuthDelegationQuery__
 *
 * To run a query within a React component, call `useAuthDelegationQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthDelegationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthDelegationQuery({
 *   variables: {
 *      input: // value for 'input'
 *      lang: // value for 'lang'
 *   },
 * });
 */
export function useAuthDelegationQuery(
  baseOptions: Apollo.QueryHookOptions<
    AuthDelegationQuery,
    AuthDelegationQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AuthDelegationQuery, AuthDelegationQueryVariables>(
    AuthDelegationDocument,
    options,
  )
}
export function useAuthDelegationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AuthDelegationQuery,
    AuthDelegationQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AuthDelegationQuery, AuthDelegationQueryVariables>(
    AuthDelegationDocument,
    options,
  )
}
export type AuthDelegationQueryHookResult = ReturnType<
  typeof useAuthDelegationQuery
>
export type AuthDelegationLazyQueryHookResult = ReturnType<
  typeof useAuthDelegationLazyQuery
>
export type AuthDelegationQueryResult = Apollo.QueryResult<
  AuthDelegationQuery,
  AuthDelegationQueryVariables
>
