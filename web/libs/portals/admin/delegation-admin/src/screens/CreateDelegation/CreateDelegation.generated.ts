import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type CreateDelegationMutationVariables = Types.Exact<{
  input: Types.CreateDelegationInput
}>

export type CreateDelegationMutation = {
  __typename?: 'Mutation'
  authCreateDelegation: {
    __typename?: 'AuthCustomDelegation'
    id?: string | null
    from:
      | { __typename?: 'IdentityCompany'; nationalId: string; name: string }
      | { __typename?: 'IdentityPerson'; nationalId: string; name: string }
    to:
      | { __typename?: 'IdentityCompany'; nationalId: string; name: string }
      | { __typename?: 'IdentityPerson'; nationalId: string; name: string }
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

export const CreateDelegationDocument = gql`
  mutation CreateDelegation($input: CreateDelegationInput!) {
    authCreateDelegation(input: $input) {
      id
      from {
        nationalId
        name
      }
      to {
        nationalId
        name
      }
    }
  }
`
export type CreateDelegationMutationFn = Apollo.MutationFunction<
  CreateDelegationMutation,
  CreateDelegationMutationVariables
>

/**
 * __useCreateDelegationMutation__
 *
 * To run a mutation, you first call `useCreateDelegationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDelegationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDelegationMutation, { data, loading, error }] = useCreateDelegationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateDelegationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateDelegationMutation,
    CreateDelegationMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateDelegationMutation,
    CreateDelegationMutationVariables
  >(CreateDelegationDocument, options)
}
export type CreateDelegationMutationHookResult = ReturnType<
  typeof useCreateDelegationMutation
>
export type CreateDelegationMutationResult = Apollo.MutationResult<CreateDelegationMutation>
export type CreateDelegationMutationOptions = Apollo.BaseMutationOptions<
  CreateDelegationMutation,
  CreateDelegationMutationVariables
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
