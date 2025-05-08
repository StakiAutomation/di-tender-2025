import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type UpdateUserProfileSettingsMutationVariables = Types.Exact<{
  input: Types.UpdateUserProfileInput
}>

export type UpdateUserProfileSettingsMutation = {
  __typename?: 'Mutation'
  updateProfile?: {
    __typename?: 'UserProfile'
    nationalId: string
    documentNotifications: boolean
    canNudge?: boolean | null
  } | null
}

export type UserProfileSettingsQueryVariables = Types.Exact<{
  [key: string]: never
}>

export type UserProfileSettingsQuery = {
  __typename?: 'Query'
  getUserProfile?: {
    __typename?: 'UserProfile'
    nationalId: string
    documentNotifications: boolean
    canNudge?: boolean | null
  } | null
}

export const UpdateUserProfileSettingsDocument = gql`
  mutation UpdateUserProfileSettings($input: UpdateUserProfileInput!) {
    updateProfile(input: $input) {
      nationalId
      documentNotifications
      canNudge
    }
  }
`
export type UpdateUserProfileSettingsMutationFn = Apollo.MutationFunction<
  UpdateUserProfileSettingsMutation,
  UpdateUserProfileSettingsMutationVariables
>

/**
 * __useUpdateUserProfileSettingsMutation__
 *
 * To run a mutation, you first call `useUpdateUserProfileSettingsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserProfileSettingsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserProfileSettingsMutation, { data, loading, error }] = useUpdateUserProfileSettingsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserProfileSettingsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateUserProfileSettingsMutation,
    UpdateUserProfileSettingsMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    UpdateUserProfileSettingsMutation,
    UpdateUserProfileSettingsMutationVariables
  >(UpdateUserProfileSettingsDocument, options)
}
export type UpdateUserProfileSettingsMutationHookResult = ReturnType<
  typeof useUpdateUserProfileSettingsMutation
>
export type UpdateUserProfileSettingsMutationResult = Apollo.MutationResult<UpdateUserProfileSettingsMutation>
export type UpdateUserProfileSettingsMutationOptions = Apollo.BaseMutationOptions<
  UpdateUserProfileSettingsMutation,
  UpdateUserProfileSettingsMutationVariables
>
export const UserProfileSettingsDocument = gql`
  query UserProfileSettings {
    getUserProfile {
      nationalId
      documentNotifications
      canNudge
    }
  }
`

/**
 * __useUserProfileSettingsQuery__
 *
 * To run a query within a React component, call `useUserProfileSettingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserProfileSettingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserProfileSettingsQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserProfileSettingsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    UserProfileSettingsQuery,
    UserProfileSettingsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    UserProfileSettingsQuery,
    UserProfileSettingsQueryVariables
  >(UserProfileSettingsDocument, options)
}
export function useUserProfileSettingsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    UserProfileSettingsQuery,
    UserProfileSettingsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    UserProfileSettingsQuery,
    UserProfileSettingsQueryVariables
  >(UserProfileSettingsDocument, options)
}
export type UserProfileSettingsQueryHookResult = ReturnType<
  typeof useUserProfileSettingsQuery
>
export type UserProfileSettingsLazyQueryHookResult = ReturnType<
  typeof useUserProfileSettingsLazyQuery
>
export type UserProfileSettingsQueryResult = Apollo.QueryResult<
  UserProfileSettingsQuery,
  UserProfileSettingsQueryVariables
>
