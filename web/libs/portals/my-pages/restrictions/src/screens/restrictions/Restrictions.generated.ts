import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetLoginRestrictionQueryVariables = Types.Exact<{
  [key: string]: never
}>

export type GetLoginRestrictionQuery = {
  __typename?: 'Query'
  authLoginRestriction: {
    __typename?: 'AuthLoginRestriction'
    restricted: boolean
    until?: string | null
  }
}

export type CreateLoginRestrictionMutationVariables = Types.Exact<{
  input: Types.CreateAuthLoginRestrictionInput
}>

export type CreateLoginRestrictionMutation = {
  __typename?: 'Mutation'
  createAuthLoginRestriction: {
    __typename?: 'AuthLoginRestriction'
    restricted: boolean
    until?: string | null
  }
}

export type RemoveLoginRestrictionMutationVariables = Types.Exact<{
  [key: string]: never
}>

export type RemoveLoginRestrictionMutation = {
  __typename?: 'Mutation'
  removeAuthLoginRestriction: boolean
}

export const GetLoginRestrictionDocument = gql`
  query getLoginRestriction {
    authLoginRestriction {
      restricted
      until
    }
  }
`

/**
 * __useGetLoginRestrictionQuery__
 *
 * To run a query within a React component, call `useGetLoginRestrictionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLoginRestrictionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLoginRestrictionQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLoginRestrictionQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetLoginRestrictionQuery,
    GetLoginRestrictionQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetLoginRestrictionQuery,
    GetLoginRestrictionQueryVariables
  >(GetLoginRestrictionDocument, options)
}
export function useGetLoginRestrictionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetLoginRestrictionQuery,
    GetLoginRestrictionQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetLoginRestrictionQuery,
    GetLoginRestrictionQueryVariables
  >(GetLoginRestrictionDocument, options)
}
export type GetLoginRestrictionQueryHookResult = ReturnType<
  typeof useGetLoginRestrictionQuery
>
export type GetLoginRestrictionLazyQueryHookResult = ReturnType<
  typeof useGetLoginRestrictionLazyQuery
>
export type GetLoginRestrictionQueryResult = Apollo.QueryResult<
  GetLoginRestrictionQuery,
  GetLoginRestrictionQueryVariables
>
export const CreateLoginRestrictionDocument = gql`
  mutation createLoginRestriction($input: CreateAuthLoginRestrictionInput!) {
    createAuthLoginRestriction(input: $input) {
      restricted
      until
    }
  }
`
export type CreateLoginRestrictionMutationFn = Apollo.MutationFunction<
  CreateLoginRestrictionMutation,
  CreateLoginRestrictionMutationVariables
>

/**
 * __useCreateLoginRestrictionMutation__
 *
 * To run a mutation, you first call `useCreateLoginRestrictionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLoginRestrictionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLoginRestrictionMutation, { data, loading, error }] = useCreateLoginRestrictionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateLoginRestrictionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateLoginRestrictionMutation,
    CreateLoginRestrictionMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateLoginRestrictionMutation,
    CreateLoginRestrictionMutationVariables
  >(CreateLoginRestrictionDocument, options)
}
export type CreateLoginRestrictionMutationHookResult = ReturnType<
  typeof useCreateLoginRestrictionMutation
>
export type CreateLoginRestrictionMutationResult = Apollo.MutationResult<CreateLoginRestrictionMutation>
export type CreateLoginRestrictionMutationOptions = Apollo.BaseMutationOptions<
  CreateLoginRestrictionMutation,
  CreateLoginRestrictionMutationVariables
>
export const RemoveLoginRestrictionDocument = gql`
  mutation removeLoginRestriction {
    removeAuthLoginRestriction
  }
`
export type RemoveLoginRestrictionMutationFn = Apollo.MutationFunction<
  RemoveLoginRestrictionMutation,
  RemoveLoginRestrictionMutationVariables
>

/**
 * __useRemoveLoginRestrictionMutation__
 *
 * To run a mutation, you first call `useRemoveLoginRestrictionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveLoginRestrictionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeLoginRestrictionMutation, { data, loading, error }] = useRemoveLoginRestrictionMutation({
 *   variables: {
 *   },
 * });
 */
export function useRemoveLoginRestrictionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RemoveLoginRestrictionMutation,
    RemoveLoginRestrictionMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    RemoveLoginRestrictionMutation,
    RemoveLoginRestrictionMutationVariables
  >(RemoveLoginRestrictionDocument, options)
}
export type RemoveLoginRestrictionMutationHookResult = ReturnType<
  typeof useRemoveLoginRestrictionMutation
>
export type RemoveLoginRestrictionMutationResult = Apollo.MutationResult<RemoveLoginRestrictionMutation>
export type RemoveLoginRestrictionMutationOptions = Apollo.BaseMutationOptions<
  RemoveLoginRestrictionMutation,
  RemoveLoginRestrictionMutationVariables
>
