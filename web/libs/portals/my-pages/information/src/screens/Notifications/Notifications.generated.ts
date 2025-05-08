import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type NotificationMetadataFieldsFragment = {
  __typename?: 'NotificationMetadata'
  sent: string
  updated?: string | null
  created?: string | null
  read?: boolean | null
}

export type NotificationSenderFieldsFragment = {
  __typename?: 'NotificationSender'
  id?: string | null
  logoUrl?: string | null
}

export type NotificationMessageFieldsFragment = {
  __typename?: 'NotificationMessage'
  title: string
  displayBody: string
  link: { __typename?: 'NotificationLink'; url?: string | null }
}

export type NotificationDataFieldsFragment = {
  __typename?: 'Notification'
  id: number
  notificationId: string
  metadata: {
    __typename?: 'NotificationMetadata'
    sent: string
    updated?: string | null
    created?: string | null
    read?: boolean | null
  }
  sender: {
    __typename?: 'NotificationSender'
    id?: string | null
    logoUrl?: string | null
  }
  message: {
    __typename?: 'NotificationMessage'
    title: string
    displayBody: string
    link: { __typename?: 'NotificationLink'; url?: string | null }
  }
}

export type GetUserNotificationsListQueryVariables = Types.Exact<{
  input: Types.NotificationsInput
  locale?: Types.InputMaybe<Types.Scalars['String']>
}>

export type GetUserNotificationsListQuery = {
  __typename?: 'Query'
  userNotifications?: {
    __typename?: 'Notifications'
    unreadCount?: number | null
    unseenCount?: number | null
    totalCount: number
    data: Array<{
      __typename?: 'Notification'
      id: number
      notificationId: string
      recipient: {
        __typename?: 'NotificationRecipient'
        nationalId?: string | null
      }
      metadata: {
        __typename?: 'NotificationMetadata'
        sent: string
        updated?: string | null
        created?: string | null
        read?: boolean | null
      }
      sender: {
        __typename?: 'NotificationSender'
        id?: string | null
        logoUrl?: string | null
      }
      message: {
        __typename?: 'NotificationMessage'
        title: string
        displayBody: string
        link: { __typename?: 'NotificationLink'; url?: string | null }
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

export type GetUserNotificationsOverviewQueryVariables = Types.Exact<{
  input: Types.NotificationsInput
  locale?: Types.InputMaybe<Types.Scalars['String']>
}>

export type GetUserNotificationsOverviewQuery = {
  __typename?: 'Query'
  userNotificationsOverview?: {
    __typename?: 'Notifications'
    totalCount: number
    unseenCount?: number | null
    data: Array<{
      __typename?: 'Notification'
      id: number
      notificationId: string
      metadata: {
        __typename?: 'NotificationMetadata'
        sent: string
        updated?: string | null
        created?: string | null
        read?: boolean | null
      }
      sender: {
        __typename?: 'NotificationSender'
        id?: string | null
        logoUrl?: string | null
      }
      message: {
        __typename?: 'NotificationMessage'
        title: string
        displayBody: string
        link: { __typename?: 'NotificationLink'; url?: string | null }
      }
    }>
  } | null
}

export type MarkUserNotificationAsReadMutationVariables = Types.Exact<{
  id: Types.Scalars['Float']
}>

export type MarkUserNotificationAsReadMutation = {
  __typename?: 'Mutation'
  markNotificationAsRead?: {
    __typename?: 'MarkNotificationReadResponse'
    data: {
      __typename?: 'Notification'
      id: number
      notificationId: string
      metadata: {
        __typename?: 'NotificationMetadata'
        sent: string
        updated?: string | null
        created?: string | null
        read?: boolean | null
      }
      sender: {
        __typename?: 'NotificationSender'
        id?: string | null
        logoUrl?: string | null
      }
      message: {
        __typename?: 'NotificationMessage'
        title: string
        displayBody: string
        link: { __typename?: 'NotificationLink'; url?: string | null }
      }
    }
  } | null
}

export type MarkAllNotificationsAsSeenMutationVariables = Types.Exact<{
  [key: string]: never
}>

export type MarkAllNotificationsAsSeenMutation = {
  __typename?: 'Mutation'
  markAllNotificationsSeen?: {
    __typename?: 'NotificationsMarkAllAsSeenResponse'
    success: boolean
  } | null
}

export type MarkAllNotificationsAsReadMutationVariables = Types.Exact<{
  [key: string]: never
}>

export type MarkAllNotificationsAsReadMutation = {
  __typename?: 'Mutation'
  markAllNotificationsRead?: {
    __typename?: 'NotificationsMarkAllAsReadResponse'
    success: boolean
  } | null
}

export const NotificationMetadataFieldsFragmentDoc = gql`
  fragment NotificationMetadataFields on NotificationMetadata {
    sent
    updated
    created
    read
  }
`
export const NotificationSenderFieldsFragmentDoc = gql`
  fragment NotificationSenderFields on NotificationSender {
    id
    logoUrl
  }
`
export const NotificationMessageFieldsFragmentDoc = gql`
  fragment NotificationMessageFields on NotificationMessage {
    title
    displayBody
    link {
      url
    }
  }
`
export const NotificationDataFieldsFragmentDoc = gql`
  fragment NotificationDataFields on Notification {
    id
    notificationId
    metadata {
      ...NotificationMetadataFields
    }
    sender {
      ...NotificationSenderFields
    }
    message {
      ...NotificationMessageFields
    }
  }
  ${NotificationMetadataFieldsFragmentDoc}
  ${NotificationSenderFieldsFragmentDoc}
  ${NotificationMessageFieldsFragmentDoc}
`
export const GetUserNotificationsListDocument = gql`
  query GetUserNotificationsList($input: NotificationsInput!, $locale: String) {
    userNotifications(input: $input, locale: $locale) {
      data {
        ...NotificationDataFields
        recipient {
          nationalId
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      unreadCount
      unseenCount
      totalCount
    }
  }
  ${NotificationDataFieldsFragmentDoc}
`

/**
 * __useGetUserNotificationsListQuery__
 *
 * To run a query within a React component, call `useGetUserNotificationsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserNotificationsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserNotificationsListQuery({
 *   variables: {
 *      input: // value for 'input'
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetUserNotificationsListQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetUserNotificationsListQuery,
    GetUserNotificationsListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetUserNotificationsListQuery,
    GetUserNotificationsListQueryVariables
  >(GetUserNotificationsListDocument, options)
}
export function useGetUserNotificationsListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserNotificationsListQuery,
    GetUserNotificationsListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetUserNotificationsListQuery,
    GetUserNotificationsListQueryVariables
  >(GetUserNotificationsListDocument, options)
}
export type GetUserNotificationsListQueryHookResult = ReturnType<
  typeof useGetUserNotificationsListQuery
>
export type GetUserNotificationsListLazyQueryHookResult = ReturnType<
  typeof useGetUserNotificationsListLazyQuery
>
export type GetUserNotificationsListQueryResult = Apollo.QueryResult<
  GetUserNotificationsListQuery,
  GetUserNotificationsListQueryVariables
>
export const GetUserNotificationsOverviewDocument = gql`
  query GetUserNotificationsOverview(
    $input: NotificationsInput!
    $locale: String
  ) {
    userNotificationsOverview: userNotifications(
      input: $input
      locale: $locale
    ) {
      data {
        ...NotificationDataFields
      }
      totalCount
      unseenCount
    }
  }
  ${NotificationDataFieldsFragmentDoc}
`

/**
 * __useGetUserNotificationsOverviewQuery__
 *
 * To run a query within a React component, call `useGetUserNotificationsOverviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserNotificationsOverviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserNotificationsOverviewQuery({
 *   variables: {
 *      input: // value for 'input'
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetUserNotificationsOverviewQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetUserNotificationsOverviewQuery,
    GetUserNotificationsOverviewQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetUserNotificationsOverviewQuery,
    GetUserNotificationsOverviewQueryVariables
  >(GetUserNotificationsOverviewDocument, options)
}
export function useGetUserNotificationsOverviewLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserNotificationsOverviewQuery,
    GetUserNotificationsOverviewQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetUserNotificationsOverviewQuery,
    GetUserNotificationsOverviewQueryVariables
  >(GetUserNotificationsOverviewDocument, options)
}
export type GetUserNotificationsOverviewQueryHookResult = ReturnType<
  typeof useGetUserNotificationsOverviewQuery
>
export type GetUserNotificationsOverviewLazyQueryHookResult = ReturnType<
  typeof useGetUserNotificationsOverviewLazyQuery
>
export type GetUserNotificationsOverviewQueryResult = Apollo.QueryResult<
  GetUserNotificationsOverviewQuery,
  GetUserNotificationsOverviewQueryVariables
>
export const MarkUserNotificationAsReadDocument = gql`
  mutation MarkUserNotificationAsRead($id: Float!) {
    markNotificationAsRead(id: $id) {
      data {
        ...NotificationDataFields
      }
    }
  }
  ${NotificationDataFieldsFragmentDoc}
`
export type MarkUserNotificationAsReadMutationFn = Apollo.MutationFunction<
  MarkUserNotificationAsReadMutation,
  MarkUserNotificationAsReadMutationVariables
>

/**
 * __useMarkUserNotificationAsReadMutation__
 *
 * To run a mutation, you first call `useMarkUserNotificationAsReadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMarkUserNotificationAsReadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [markUserNotificationAsReadMutation, { data, loading, error }] = useMarkUserNotificationAsReadMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMarkUserNotificationAsReadMutation(
  baseOptions?: Apollo.MutationHookOptions<
    MarkUserNotificationAsReadMutation,
    MarkUserNotificationAsReadMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    MarkUserNotificationAsReadMutation,
    MarkUserNotificationAsReadMutationVariables
  >(MarkUserNotificationAsReadDocument, options)
}
export type MarkUserNotificationAsReadMutationHookResult = ReturnType<
  typeof useMarkUserNotificationAsReadMutation
>
export type MarkUserNotificationAsReadMutationResult = Apollo.MutationResult<MarkUserNotificationAsReadMutation>
export type MarkUserNotificationAsReadMutationOptions = Apollo.BaseMutationOptions<
  MarkUserNotificationAsReadMutation,
  MarkUserNotificationAsReadMutationVariables
>
export const MarkAllNotificationsAsSeenDocument = gql`
  mutation MarkAllNotificationsAsSeen {
    markAllNotificationsSeen {
      success
    }
  }
`
export type MarkAllNotificationsAsSeenMutationFn = Apollo.MutationFunction<
  MarkAllNotificationsAsSeenMutation,
  MarkAllNotificationsAsSeenMutationVariables
>

/**
 * __useMarkAllNotificationsAsSeenMutation__
 *
 * To run a mutation, you first call `useMarkAllNotificationsAsSeenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMarkAllNotificationsAsSeenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [markAllNotificationsAsSeenMutation, { data, loading, error }] = useMarkAllNotificationsAsSeenMutation({
 *   variables: {
 *   },
 * });
 */
export function useMarkAllNotificationsAsSeenMutation(
  baseOptions?: Apollo.MutationHookOptions<
    MarkAllNotificationsAsSeenMutation,
    MarkAllNotificationsAsSeenMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    MarkAllNotificationsAsSeenMutation,
    MarkAllNotificationsAsSeenMutationVariables
  >(MarkAllNotificationsAsSeenDocument, options)
}
export type MarkAllNotificationsAsSeenMutationHookResult = ReturnType<
  typeof useMarkAllNotificationsAsSeenMutation
>
export type MarkAllNotificationsAsSeenMutationResult = Apollo.MutationResult<MarkAllNotificationsAsSeenMutation>
export type MarkAllNotificationsAsSeenMutationOptions = Apollo.BaseMutationOptions<
  MarkAllNotificationsAsSeenMutation,
  MarkAllNotificationsAsSeenMutationVariables
>
export const MarkAllNotificationsAsReadDocument = gql`
  mutation MarkAllNotificationsAsRead {
    markAllNotificationsRead {
      success
    }
  }
`
export type MarkAllNotificationsAsReadMutationFn = Apollo.MutationFunction<
  MarkAllNotificationsAsReadMutation,
  MarkAllNotificationsAsReadMutationVariables
>

/**
 * __useMarkAllNotificationsAsReadMutation__
 *
 * To run a mutation, you first call `useMarkAllNotificationsAsReadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMarkAllNotificationsAsReadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [markAllNotificationsAsReadMutation, { data, loading, error }] = useMarkAllNotificationsAsReadMutation({
 *   variables: {
 *   },
 * });
 */
export function useMarkAllNotificationsAsReadMutation(
  baseOptions?: Apollo.MutationHookOptions<
    MarkAllNotificationsAsReadMutation,
    MarkAllNotificationsAsReadMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    MarkAllNotificationsAsReadMutation,
    MarkAllNotificationsAsReadMutationVariables
  >(MarkAllNotificationsAsReadDocument, options)
}
export type MarkAllNotificationsAsReadMutationHookResult = ReturnType<
  typeof useMarkAllNotificationsAsReadMutation
>
export type MarkAllNotificationsAsReadMutationResult = Apollo.MutationResult<MarkAllNotificationsAsReadMutation>
export type MarkAllNotificationsAsReadMutationOptions = Apollo.BaseMutationOptions<
  MarkAllNotificationsAsReadMutation,
  MarkAllNotificationsAsReadMutationVariables
>
