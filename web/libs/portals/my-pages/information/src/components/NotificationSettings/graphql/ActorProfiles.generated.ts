import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type ActorProfilesQueryVariables = Types.Exact<{ [key: string]: never }>

export type ActorProfilesQuery = {
  __typename?: 'Query'
  userProfileActorProfiles: {
    __typename?: 'UserProfileActorProfileResponse'
    data: Array<{
      __typename?: 'UserProfileActorProfile'
      fromNationalId: string
      fromName?: string | null
      emailNotifications: boolean
    }>
  }
}

export type UpdateActorProfileMutationVariables = Types.Exact<{
  input: Types.UserProfileUpdateActorProfileInput
}>

export type UpdateActorProfileMutation = {
  __typename?: 'Mutation'
  userProfileUpdateActorProfile: {
    __typename?: 'UserProfileActorProfile'
    fromNationalId: string
    emailNotifications: boolean
  }
}

export const ActorProfilesDocument = gql`
  query ActorProfiles {
    userProfileActorProfiles {
      data {
        fromNationalId
        fromName
        emailNotifications
      }
    }
  }
`

/**
 * __useActorProfilesQuery__
 *
 * To run a query within a React component, call `useActorProfilesQuery` and pass it any options that fit your needs.
 * When your component renders, `useActorProfilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActorProfilesQuery({
 *   variables: {
 *   },
 * });
 */
export function useActorProfilesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ActorProfilesQuery,
    ActorProfilesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ActorProfilesQuery, ActorProfilesQueryVariables>(
    ActorProfilesDocument,
    options,
  )
}
export function useActorProfilesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ActorProfilesQuery,
    ActorProfilesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ActorProfilesQuery, ActorProfilesQueryVariables>(
    ActorProfilesDocument,
    options,
  )
}
export type ActorProfilesQueryHookResult = ReturnType<
  typeof useActorProfilesQuery
>
export type ActorProfilesLazyQueryHookResult = ReturnType<
  typeof useActorProfilesLazyQuery
>
export type ActorProfilesQueryResult = Apollo.QueryResult<
  ActorProfilesQuery,
  ActorProfilesQueryVariables
>
export const UpdateActorProfileDocument = gql`
  mutation UpdateActorProfile($input: UserProfileUpdateActorProfileInput!) {
    userProfileUpdateActorProfile(input: $input) {
      fromNationalId
      emailNotifications
    }
  }
`
export type UpdateActorProfileMutationFn = Apollo.MutationFunction<
  UpdateActorProfileMutation,
  UpdateActorProfileMutationVariables
>

/**
 * __useUpdateActorProfileMutation__
 *
 * To run a mutation, you first call `useUpdateActorProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateActorProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateActorProfileMutation, { data, loading, error }] = useUpdateActorProfileMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateActorProfileMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateActorProfileMutation,
    UpdateActorProfileMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    UpdateActorProfileMutation,
    UpdateActorProfileMutationVariables
  >(UpdateActorProfileDocument, options)
}
export type UpdateActorProfileMutationHookResult = ReturnType<
  typeof useUpdateActorProfileMutation
>
export type UpdateActorProfileMutationResult = Apollo.MutationResult<UpdateActorProfileMutation>
export type UpdateActorProfileMutationOptions = Apollo.BaseMutationOptions<
  UpdateActorProfileMutation,
  UpdateActorProfileMutationVariables
>
