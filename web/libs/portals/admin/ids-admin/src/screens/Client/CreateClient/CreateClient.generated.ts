import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type CreateClientMutationVariables = Types.Exact<{
  input: Types.CreateAuthAdminClientInput
}>

export type CreateClientMutation = {
  __typename?: 'Mutation'
  createAuthAdminClient: Array<{
    __typename?: 'AuthAdminCreateClientResponse'
    clientId: string
    environment: Types.AuthAdminEnvironment
  }>
}

export type GetClientAvailabilityQueryVariables = Types.Exact<{
  input: Types.AuthAdminClientInput
}>

export type GetClientAvailabilityQuery = {
  __typename?: 'Query'
  authAdminClient?: {
    __typename?: 'AuthAdminClient'
    clientId: string
    availableEnvironments: Array<Types.AuthAdminEnvironment>
  } | null
}

export const CreateClientDocument = gql`
  mutation CreateClient($input: CreateAuthAdminClientInput!) {
    createAuthAdminClient(input: $input) {
      clientId
      environment
    }
  }
`
export type CreateClientMutationFn = Apollo.MutationFunction<
  CreateClientMutation,
  CreateClientMutationVariables
>

/**
 * __useCreateClientMutation__
 *
 * To run a mutation, you first call `useCreateClientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateClientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createClientMutation, { data, loading, error }] = useCreateClientMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateClientMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateClientMutation,
    CreateClientMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateClientMutation,
    CreateClientMutationVariables
  >(CreateClientDocument, options)
}
export type CreateClientMutationHookResult = ReturnType<
  typeof useCreateClientMutation
>
export type CreateClientMutationResult = Apollo.MutationResult<CreateClientMutation>
export type CreateClientMutationOptions = Apollo.BaseMutationOptions<
  CreateClientMutation,
  CreateClientMutationVariables
>
export const GetClientAvailabilityDocument = gql`
  query GetClientAvailability($input: AuthAdminClientInput!) {
    authAdminClient(input: $input) {
      clientId
      availableEnvironments
    }
  }
`

/**
 * __useGetClientAvailabilityQuery__
 *
 * To run a query within a React component, call `useGetClientAvailabilityQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetClientAvailabilityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetClientAvailabilityQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetClientAvailabilityQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetClientAvailabilityQuery,
    GetClientAvailabilityQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetClientAvailabilityQuery,
    GetClientAvailabilityQueryVariables
  >(GetClientAvailabilityDocument, options)
}
export function useGetClientAvailabilityLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetClientAvailabilityQuery,
    GetClientAvailabilityQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetClientAvailabilityQuery,
    GetClientAvailabilityQueryVariables
  >(GetClientAvailabilityDocument, options)
}
export type GetClientAvailabilityQueryHookResult = ReturnType<
  typeof useGetClientAvailabilityQuery
>
export type GetClientAvailabilityLazyQueryHookResult = ReturnType<
  typeof useGetClientAvailabilityLazyQuery
>
export type GetClientAvailabilityQueryResult = Apollo.QueryResult<
  GetClientAvailabilityQuery,
  GetClientAvailabilityQueryVariables
>
