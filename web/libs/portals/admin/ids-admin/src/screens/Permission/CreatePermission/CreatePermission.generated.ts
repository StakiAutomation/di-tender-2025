import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type CreateAuthAdminScopeMutationVariables = Types.Exact<{
  input: Types.CreateScopeInput
}>

export type CreateAuthAdminScopeMutation = {
  __typename?: 'Mutation'
  createAuthAdminScope: Array<{
    __typename?: 'AuthAdminCreateScopeResponse'
    scopeName: string
    environment: Types.AuthAdminEnvironment
  }>
}

export type GetScopeAvailabilityQueryVariables = Types.Exact<{
  input: Types.ScopeInput
}>

export type GetScopeAvailabilityQuery = {
  __typename?: 'Query'
  authAdminScope: {
    __typename?: 'AuthAdminScope'
    scopeName: string
    availableEnvironments: Array<Types.AuthAdminEnvironment>
  }
}

export const CreateAuthAdminScopeDocument = gql`
  mutation CreateAuthAdminScope($input: CreateScopeInput!) {
    createAuthAdminScope(input: $input) {
      scopeName
      environment
    }
  }
`
export type CreateAuthAdminScopeMutationFn = Apollo.MutationFunction<
  CreateAuthAdminScopeMutation,
  CreateAuthAdminScopeMutationVariables
>

/**
 * __useCreateAuthAdminScopeMutation__
 *
 * To run a mutation, you first call `useCreateAuthAdminScopeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAuthAdminScopeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAuthAdminScopeMutation, { data, loading, error }] = useCreateAuthAdminScopeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateAuthAdminScopeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateAuthAdminScopeMutation,
    CreateAuthAdminScopeMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateAuthAdminScopeMutation,
    CreateAuthAdminScopeMutationVariables
  >(CreateAuthAdminScopeDocument, options)
}
export type CreateAuthAdminScopeMutationHookResult = ReturnType<
  typeof useCreateAuthAdminScopeMutation
>
export type CreateAuthAdminScopeMutationResult = Apollo.MutationResult<CreateAuthAdminScopeMutation>
export type CreateAuthAdminScopeMutationOptions = Apollo.BaseMutationOptions<
  CreateAuthAdminScopeMutation,
  CreateAuthAdminScopeMutationVariables
>
export const GetScopeAvailabilityDocument = gql`
  query GetScopeAvailability($input: ScopeInput!) {
    authAdminScope(input: $input) {
      scopeName
      availableEnvironments
    }
  }
`

/**
 * __useGetScopeAvailabilityQuery__
 *
 * To run a query within a React component, call `useGetScopeAvailabilityQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetScopeAvailabilityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetScopeAvailabilityQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetScopeAvailabilityQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetScopeAvailabilityQuery,
    GetScopeAvailabilityQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetScopeAvailabilityQuery,
    GetScopeAvailabilityQueryVariables
  >(GetScopeAvailabilityDocument, options)
}
export function useGetScopeAvailabilityLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetScopeAvailabilityQuery,
    GetScopeAvailabilityQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetScopeAvailabilityQuery,
    GetScopeAvailabilityQueryVariables
  >(GetScopeAvailabilityDocument, options)
}
export type GetScopeAvailabilityQueryHookResult = ReturnType<
  typeof useGetScopeAvailabilityQuery
>
export type GetScopeAvailabilityLazyQueryHookResult = ReturnType<
  typeof useGetScopeAvailabilityLazyQuery
>
export type GetScopeAvailabilityQueryResult = Apollo.QueryResult<
  GetScopeAvailabilityQuery,
  GetScopeAvailabilityQueryVariables
>
