import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetCustomDelegationsAdminQueryVariables = Types.Exact<{
  nationalId: Types.Scalars['String']
}>

export type GetCustomDelegationsAdminQuery = {
  __typename?: 'Query'
  authAdminDelegationAdmin: {
    __typename?: 'DelegationAdminCustomModel'
    name: string
    nationalId: string
    incoming: Array<{
      __typename?: 'AuthCustomDelegation'
      id?: string | null
      validTo?: string | null
      referenceId?: string | null
      type: Types.AuthDelegationType
      domain: {
        __typename?: 'AuthDomain'
        name: string
        organisationLogoKey: string
        organisationLogoUrl?: string | null
        displayName: string
        nationalId: string
      }
      from:
        | { __typename?: 'IdentityCompany'; name: string; nationalId: string }
        | { __typename?: 'IdentityPerson'; name: string; nationalId: string }
      to:
        | { __typename?: 'IdentityCompany'; name: string; nationalId: string }
        | { __typename?: 'IdentityPerson'; name: string; nationalId: string }
      createdBy?:
        | { __typename?: 'IdentityCompany'; name: string; nationalId: string }
        | { __typename?: 'IdentityPerson'; name: string; nationalId: string }
        | null
      scopes: Array<{
        __typename?: 'AuthDelegationScope'
        name: string
        displayName: string
        id: string
        validTo?: string | null
      }>
    }>
    outgoing: Array<{
      __typename?: 'AuthCustomDelegation'
      id?: string | null
      validTo?: string | null
      referenceId?: string | null
      type: Types.AuthDelegationType
      domain: {
        __typename?: 'AuthDomain'
        name: string
        organisationLogoKey: string
        organisationLogoUrl?: string | null
        displayName: string
        nationalId: string
      }
      from:
        | { __typename?: 'IdentityCompany'; name: string; nationalId: string }
        | { __typename?: 'IdentityPerson'; name: string; nationalId: string }
      to:
        | { __typename?: 'IdentityCompany'; name: string; nationalId: string }
        | { __typename?: 'IdentityPerson'; name: string; nationalId: string }
      createdBy?:
        | { __typename?: 'IdentityCompany'; name: string; nationalId: string }
        | { __typename?: 'IdentityPerson'; name: string; nationalId: string }
        | null
      scopes: Array<{
        __typename?: 'AuthDelegationScope'
        name: string
        displayName: string
        id: string
        validTo?: string | null
      }>
    }>
  }
}

export type DeleteCustomDelegationAdminMutationVariables = Types.Exact<{
  id: Types.Scalars['String']
}>

export type DeleteCustomDelegationAdminMutation = {
  __typename?: 'Mutation'
  authDeleteAdminDelegation: boolean
}

export const GetCustomDelegationsAdminDocument = gql`
  query getCustomDelegationsAdmin($nationalId: String!) {
    authAdminDelegationAdmin(nationalId: $nationalId) {
      name
      nationalId
      incoming {
        id
        validTo
        referenceId
        domain {
          name
          organisationLogoKey
          organisationLogoUrl
          displayName
          nationalId
        }
        type
        from {
          name
          nationalId
        }
        to {
          name
          nationalId
        }
        createdBy {
          name
          nationalId
        }
        scopes {
          name
          displayName
          id
          validTo
        }
      }
      outgoing {
        id
        validTo
        referenceId
        domain {
          name
          organisationLogoKey
          organisationLogoUrl
          displayName
          nationalId
        }
        type
        from {
          name
          nationalId
        }
        to {
          name
          nationalId
        }
        createdBy {
          name
          nationalId
        }
        scopes {
          name
          displayName
          id
          validTo
        }
      }
    }
  }
`

/**
 * __useGetCustomDelegationsAdminQuery__
 *
 * To run a query within a React component, call `useGetCustomDelegationsAdminQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCustomDelegationsAdminQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCustomDelegationsAdminQuery({
 *   variables: {
 *      nationalId: // value for 'nationalId'
 *   },
 * });
 */
export function useGetCustomDelegationsAdminQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetCustomDelegationsAdminQuery,
    GetCustomDelegationsAdminQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetCustomDelegationsAdminQuery,
    GetCustomDelegationsAdminQueryVariables
  >(GetCustomDelegationsAdminDocument, options)
}
export function useGetCustomDelegationsAdminLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCustomDelegationsAdminQuery,
    GetCustomDelegationsAdminQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetCustomDelegationsAdminQuery,
    GetCustomDelegationsAdminQueryVariables
  >(GetCustomDelegationsAdminDocument, options)
}
export type GetCustomDelegationsAdminQueryHookResult = ReturnType<
  typeof useGetCustomDelegationsAdminQuery
>
export type GetCustomDelegationsAdminLazyQueryHookResult = ReturnType<
  typeof useGetCustomDelegationsAdminLazyQuery
>
export type GetCustomDelegationsAdminQueryResult = Apollo.QueryResult<
  GetCustomDelegationsAdminQuery,
  GetCustomDelegationsAdminQueryVariables
>
export const DeleteCustomDelegationAdminDocument = gql`
  mutation deleteCustomDelegationAdmin($id: String!) {
    authDeleteAdminDelegation(id: $id)
  }
`
export type DeleteCustomDelegationAdminMutationFn = Apollo.MutationFunction<
  DeleteCustomDelegationAdminMutation,
  DeleteCustomDelegationAdminMutationVariables
>

/**
 * __useDeleteCustomDelegationAdminMutation__
 *
 * To run a mutation, you first call `useDeleteCustomDelegationAdminMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCustomDelegationAdminMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCustomDelegationAdminMutation, { data, loading, error }] = useDeleteCustomDelegationAdminMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCustomDelegationAdminMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteCustomDelegationAdminMutation,
    DeleteCustomDelegationAdminMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    DeleteCustomDelegationAdminMutation,
    DeleteCustomDelegationAdminMutationVariables
  >(DeleteCustomDelegationAdminDocument, options)
}
export type DeleteCustomDelegationAdminMutationHookResult = ReturnType<
  typeof useDeleteCustomDelegationAdminMutation
>
export type DeleteCustomDelegationAdminMutationResult = Apollo.MutationResult<DeleteCustomDelegationAdminMutation>
export type DeleteCustomDelegationAdminMutationOptions = Apollo.BaseMutationOptions<
  DeleteCustomDelegationAdminMutation,
  DeleteCustomDelegationAdminMutationVariables
>
