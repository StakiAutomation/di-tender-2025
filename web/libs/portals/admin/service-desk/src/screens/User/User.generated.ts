import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetUserProfileByNationalIdQueryVariables = Types.Exact<{
  nationalId: Types.Scalars['String']
}>

export type GetUserProfileByNationalIdQuery = {
  __typename?: 'Query'
  UserProfileAdminProfile?: {
    __typename?: 'UserProfileAdminProfile'
    nationalId: string
    email?: string | null
    emailVerified: boolean
    mobilePhoneNumber?: string | null
    mobilePhoneNumberVerified: boolean
    lastNudge?: string | null
    nextNudge?: string | null
    fullName?: string | null
    documentNotifications: boolean
    emailNotifications?: boolean | null
    locale?: string | null
  } | null
}

export type UpdateUserProfileMutationVariables = Types.Exact<{
  nationalId: Types.Scalars['String']
  input: Types.UpdateUserProfileInput
}>

export type UpdateUserProfileMutation = {
  __typename?: 'Mutation'
  UserProfileAdminUpdateProfile: {
    __typename?: 'UserProfileAdminProfile'
    nationalId: string
    email?: string | null
    emailVerified: boolean
    mobilePhoneNumber?: string | null
    mobilePhoneNumberVerified: boolean
    lastNudge?: string | null
    nextNudge?: string | null
    fullName?: string | null
    documentNotifications: boolean
    emailNotifications?: boolean | null
    locale?: string | null
  }
}

export type GetAdminNotificationsQueryVariables = Types.Exact<{
  nationalId: Types.Scalars['String']
  input: Types.NotificationsInput
}>

export type GetAdminNotificationsQuery = {
  __typename?: 'Query'
  adminNotifications?: {
    __typename?: 'AdminNotifications'
    totalCount: number
    data: Array<{
      __typename?: 'AdminNotification'
      id: number
      notificationId: string
      sent: string
      sender: {
        __typename?: 'NotificationSender'
        id?: string | null
        logoUrl?: string | null
      }
    }>
    pageInfo: {
      __typename?: 'PageInfoDto'
      hasNextPage: boolean
      hasPreviousPage?: boolean | null
      startCursor?: string | null
      endCursor?: string | null
    }
  } | null
}

export const GetUserProfileByNationalIdDocument = gql`
  query GetUserProfileByNationalId($nationalId: String!) {
    UserProfileAdminProfile(nationalId: $nationalId) {
      nationalId
      email
      emailVerified
      mobilePhoneNumber
      mobilePhoneNumberVerified
      lastNudge
      nextNudge
      fullName
      documentNotifications
      emailNotifications
      locale
    }
  }
`

/**
 * __useGetUserProfileByNationalIdQuery__
 *
 * To run a query within a React component, call `useGetUserProfileByNationalIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserProfileByNationalIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserProfileByNationalIdQuery({
 *   variables: {
 *      nationalId: // value for 'nationalId'
 *   },
 * });
 */
export function useGetUserProfileByNationalIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetUserProfileByNationalIdQuery,
    GetUserProfileByNationalIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetUserProfileByNationalIdQuery,
    GetUserProfileByNationalIdQueryVariables
  >(GetUserProfileByNationalIdDocument, options)
}
export function useGetUserProfileByNationalIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserProfileByNationalIdQuery,
    GetUserProfileByNationalIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetUserProfileByNationalIdQuery,
    GetUserProfileByNationalIdQueryVariables
  >(GetUserProfileByNationalIdDocument, options)
}
export type GetUserProfileByNationalIdQueryHookResult = ReturnType<
  typeof useGetUserProfileByNationalIdQuery
>
export type GetUserProfileByNationalIdLazyQueryHookResult = ReturnType<
  typeof useGetUserProfileByNationalIdLazyQuery
>
export type GetUserProfileByNationalIdQueryResult = Apollo.QueryResult<
  GetUserProfileByNationalIdQuery,
  GetUserProfileByNationalIdQueryVariables
>
export const UpdateUserProfileDocument = gql`
  mutation UpdateUserProfile(
    $nationalId: String!
    $input: UpdateUserProfileInput!
  ) {
    UserProfileAdminUpdateProfile(nationalId: $nationalId, input: $input) {
      nationalId
      email
      emailVerified
      mobilePhoneNumber
      mobilePhoneNumberVerified
      lastNudge
      nextNudge
      fullName
      documentNotifications
      emailNotifications
      locale
    }
  }
`
export type UpdateUserProfileMutationFn = Apollo.MutationFunction<
  UpdateUserProfileMutation,
  UpdateUserProfileMutationVariables
>

/**
 * __useUpdateUserProfileMutation__
 *
 * To run a mutation, you first call `useUpdateUserProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserProfileMutation, { data, loading, error }] = useUpdateUserProfileMutation({
 *   variables: {
 *      nationalId: // value for 'nationalId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserProfileMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateUserProfileMutation,
    UpdateUserProfileMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    UpdateUserProfileMutation,
    UpdateUserProfileMutationVariables
  >(UpdateUserProfileDocument, options)
}
export type UpdateUserProfileMutationHookResult = ReturnType<
  typeof useUpdateUserProfileMutation
>
export type UpdateUserProfileMutationResult = Apollo.MutationResult<UpdateUserProfileMutation>
export type UpdateUserProfileMutationOptions = Apollo.BaseMutationOptions<
  UpdateUserProfileMutation,
  UpdateUserProfileMutationVariables
>
export const GetAdminNotificationsDocument = gql`
  query GetAdminNotifications(
    $nationalId: String!
    $input: NotificationsInput!
  ) {
    adminNotifications(nationalId: $nationalId, input: $input) {
      data {
        id
        notificationId
        sender {
          id
          logoUrl
        }
        sent
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      totalCount
    }
  }
`

/**
 * __useGetAdminNotificationsQuery__
 *
 * To run a query within a React component, call `useGetAdminNotificationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdminNotificationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdminNotificationsQuery({
 *   variables: {
 *      nationalId: // value for 'nationalId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAdminNotificationsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetAdminNotificationsQuery,
    GetAdminNotificationsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetAdminNotificationsQuery,
    GetAdminNotificationsQueryVariables
  >(GetAdminNotificationsDocument, options)
}
export function useGetAdminNotificationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAdminNotificationsQuery,
    GetAdminNotificationsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetAdminNotificationsQuery,
    GetAdminNotificationsQueryVariables
  >(GetAdminNotificationsDocument, options)
}
export type GetAdminNotificationsQueryHookResult = ReturnType<
  typeof useGetAdminNotificationsQuery
>
export type GetAdminNotificationsLazyQueryHookResult = ReturnType<
  typeof useGetAdminNotificationsLazyQuery
>
export type GetAdminNotificationsQueryResult = Apollo.QueryResult<
  GetAdminNotificationsQuery,
  GetAdminNotificationsQueryVariables
>
