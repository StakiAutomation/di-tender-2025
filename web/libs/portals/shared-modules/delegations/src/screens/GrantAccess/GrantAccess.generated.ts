import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type CreateAuthDelegationMutationVariables = Types.Exact<{
  input: Types.CreateAuthDelegationInput
}>

export type CreateAuthDelegationMutation = {
  __typename?: 'Mutation'
  createAuthDelegation:
    | {
        __typename?: 'AuthCustomDelegation'
        id?: string | null
        to:
          | { __typename?: 'IdentityCompany'; nationalId: string }
          | { __typename?: 'IdentityPerson'; nationalId: string }
      }
    | {
        __typename?: 'AuthGeneralMandate'
        id?: string | null
        to?:
          | { __typename?: 'IdentityCompany'; nationalId: string }
          | { __typename?: 'IdentityPerson'; nationalId: string }
          | null
      }
    | {
        __typename?: 'AuthLegalGuardianDelegation'
        id?: string | null
        to?:
          | { __typename?: 'IdentityCompany'; nationalId: string }
          | { __typename?: 'IdentityPerson'; nationalId: string }
          | null
      }
    | {
        __typename?: 'AuthLegalGuardianMinorDelegation'
        id?: string | null
        to?:
          | { __typename?: 'IdentityCompany'; nationalId: string }
          | { __typename?: 'IdentityPerson'; nationalId: string }
          | null
      }
    | {
        __typename?: 'AuthLegalRepresentativeDelegation'
        id?: string | null
        to?:
          | { __typename?: 'IdentityCompany'; nationalId: string }
          | { __typename?: 'IdentityPerson'; nationalId: string }
          | null
      }
    | {
        __typename?: 'AuthPersonalRepresentativeDelegation'
        id?: string | null
        to?:
          | { __typename?: 'IdentityCompany'; nationalId: string }
          | { __typename?: 'IdentityPerson'; nationalId: string }
          | null
      }
    | {
        __typename?: 'AuthProcuringHolderDelegation'
        id?: string | null
        to?:
          | { __typename?: 'IdentityCompany'; nationalId: string }
          | { __typename?: 'IdentityPerson'; nationalId: string }
          | null
      }
}

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

export const CreateAuthDelegationDocument = gql`
  mutation CreateAuthDelegation($input: CreateAuthDelegationInput!) {
    createAuthDelegation(input: $input) {
      id
      to {
        nationalId
      }
    }
  }
`
export type CreateAuthDelegationMutationFn = Apollo.MutationFunction<
  CreateAuthDelegationMutation,
  CreateAuthDelegationMutationVariables
>

/**
 * __useCreateAuthDelegationMutation__
 *
 * To run a mutation, you first call `useCreateAuthDelegationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAuthDelegationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAuthDelegationMutation, { data, loading, error }] = useCreateAuthDelegationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateAuthDelegationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateAuthDelegationMutation,
    CreateAuthDelegationMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateAuthDelegationMutation,
    CreateAuthDelegationMutationVariables
  >(CreateAuthDelegationDocument, options)
}
export type CreateAuthDelegationMutationHookResult = ReturnType<
  typeof useCreateAuthDelegationMutation
>
export type CreateAuthDelegationMutationResult = Apollo.MutationResult<CreateAuthDelegationMutation>
export type CreateAuthDelegationMutationOptions = Apollo.BaseMutationOptions<
  CreateAuthDelegationMutation,
  CreateAuthDelegationMutationVariables
>
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
