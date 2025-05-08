import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type DocumentsV3QueryVariables = Types.Exact<{
  input: Types.DocumentsV2DocumentsInput
}>

export type DocumentsV3Query = {
  __typename?: 'Query'
  documentsV2?: {
    __typename?: 'DocumentsV2'
    totalCount: number
    unreadCount?: number | null
    data: Array<{
      __typename?: 'DocumentV2'
      id: string
      name?: string | null
      categoryId?: string | null
      publicationDate?: any | null
      documentDate?: any | null
      subject: string
      opened?: boolean | null
      bookmarked?: boolean | null
      archived?: boolean | null
      downloadUrl?: string | null
      isUrgent?: boolean | null
      sender: {
        __typename?: 'DocumentsV2Sender'
        id?: string | null
        name?: string | null
      }
      content?: {
        __typename?: 'DocumentV2Content'
        type: Types.DocumentsV2FileType
        value?: string | null
      } | null
      confirmation?: {
        __typename?: 'DocumentV2Action'
        title?: string | null
        data?: string | null
      } | null
    }>
    categories: Array<{
      __typename?: 'DocumentsV2Category'
      id: string
      name?: string | null
    }>
    senders: Array<{
      __typename?: 'DocumentsV2Sender'
      id?: string | null
      name?: string | null
    }>
  } | null
}

export type GetDocumentInboxLineV3QueryVariables = Types.Exact<{
  input: Types.DocumentInput
  locale?: Types.InputMaybe<Types.Scalars['String']>
}>

export type GetDocumentInboxLineV3Query = {
  __typename?: 'Query'
  documentV2?: {
    __typename?: 'DocumentV2'
    content?: {
      __typename?: 'DocumentV2Content'
      type: Types.DocumentsV2FileType
      value?: string | null
    } | null
    actions?: Array<{
      __typename?: 'DocumentV2Action'
      type?: string | null
      title?: string | null
      data?: string | null
      icon?: string | null
    }> | null
    confirmation?: {
      __typename?: 'DocumentV2Action'
      title?: string | null
      data?: string | null
    } | null
    alert?: {
      __typename?: 'DocumentV2Action'
      title?: string | null
      data?: string | null
    } | null
  } | null
}

export type GetDocumentInboxLineV2QueryVariables = Types.Exact<{
  input: Types.DocumentInput
}>

export type GetDocumentInboxLineV2Query = {
  __typename?: 'Query'
  documentV2?: {
    __typename?: 'DocumentV2'
    content?: {
      __typename?: 'DocumentV2Content'
      type: Types.DocumentsV2FileType
      value?: string | null
    } | null
  } | null
}

export type DocumentConfirmActionsQueryVariables = Types.Exact<{
  input: Types.DocumentConfirmActionsInput
}>

export type DocumentConfirmActionsQuery = {
  __typename?: 'Query'
  documentV2ConfirmActions?: {
    __typename?: 'DocumentConfirmActions'
    id: string
    confirmed?: boolean | null
  } | null
}

export type MailActionV2MutationVariables = Types.Exact<{
  input: Types.DocumentsV2MailActionInput
}>

export type MailActionV2Mutation = {
  __typename?: 'Mutation'
  postMailActionV2?: {
    __typename?: 'DocumentMailAction'
    success: boolean
  } | null
}

export const DocumentsV3Document = gql`
  query DocumentsV3($input: DocumentsV2DocumentsInput!) {
    documentsV2(input: $input) {
      data {
        id
        name
        categoryId
        publicationDate
        documentDate
        subject
        sender {
          id
          name
        }
        opened
        bookmarked
        archived
        downloadUrl
        content {
          type
          value
        }
        isUrgent
        confirmation {
          title
          data
        }
      }
      totalCount
      unreadCount
      categories {
        id
        name
      }
      senders {
        id
        name
      }
    }
  }
`

/**
 * __useDocumentsV3Query__
 *
 * To run a query within a React component, call `useDocumentsV3Query` and pass it any options that fit your needs.
 * When your component renders, `useDocumentsV3Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDocumentsV3Query({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDocumentsV3Query(
  baseOptions: Apollo.QueryHookOptions<
    DocumentsV3Query,
    DocumentsV3QueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<DocumentsV3Query, DocumentsV3QueryVariables>(
    DocumentsV3Document,
    options,
  )
}
export function useDocumentsV3LazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    DocumentsV3Query,
    DocumentsV3QueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<DocumentsV3Query, DocumentsV3QueryVariables>(
    DocumentsV3Document,
    options,
  )
}
export type DocumentsV3QueryHookResult = ReturnType<typeof useDocumentsV3Query>
export type DocumentsV3LazyQueryHookResult = ReturnType<
  typeof useDocumentsV3LazyQuery
>
export type DocumentsV3QueryResult = Apollo.QueryResult<
  DocumentsV3Query,
  DocumentsV3QueryVariables
>
export const GetDocumentInboxLineV3Document = gql`
  query GetDocumentInboxLineV3($input: DocumentInput!, $locale: String) {
    documentV2(input: $input, locale: $locale) {
      content {
        type
        value
      }
      actions {
        type
        title
        data
        icon
      }
      confirmation {
        title
        data
      }
      alert {
        title
        data
      }
    }
  }
`

/**
 * __useGetDocumentInboxLineV3Query__
 *
 * To run a query within a React component, call `useGetDocumentInboxLineV3Query` and pass it any options that fit your needs.
 * When your component renders, `useGetDocumentInboxLineV3Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDocumentInboxLineV3Query({
 *   variables: {
 *      input: // value for 'input'
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetDocumentInboxLineV3Query(
  baseOptions: Apollo.QueryHookOptions<
    GetDocumentInboxLineV3Query,
    GetDocumentInboxLineV3QueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetDocumentInboxLineV3Query,
    GetDocumentInboxLineV3QueryVariables
  >(GetDocumentInboxLineV3Document, options)
}
export function useGetDocumentInboxLineV3LazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetDocumentInboxLineV3Query,
    GetDocumentInboxLineV3QueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetDocumentInboxLineV3Query,
    GetDocumentInboxLineV3QueryVariables
  >(GetDocumentInboxLineV3Document, options)
}
export type GetDocumentInboxLineV3QueryHookResult = ReturnType<
  typeof useGetDocumentInboxLineV3Query
>
export type GetDocumentInboxLineV3LazyQueryHookResult = ReturnType<
  typeof useGetDocumentInboxLineV3LazyQuery
>
export type GetDocumentInboxLineV3QueryResult = Apollo.QueryResult<
  GetDocumentInboxLineV3Query,
  GetDocumentInboxLineV3QueryVariables
>
export const GetDocumentInboxLineV2Document = gql`
  query GetDocumentInboxLineV2($input: DocumentInput!) {
    documentV2(input: $input) {
      content {
        type
        value
      }
    }
  }
`

/**
 * __useGetDocumentInboxLineV2Query__
 *
 * To run a query within a React component, call `useGetDocumentInboxLineV2Query` and pass it any options that fit your needs.
 * When your component renders, `useGetDocumentInboxLineV2Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDocumentInboxLineV2Query({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetDocumentInboxLineV2Query(
  baseOptions: Apollo.QueryHookOptions<
    GetDocumentInboxLineV2Query,
    GetDocumentInboxLineV2QueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetDocumentInboxLineV2Query,
    GetDocumentInboxLineV2QueryVariables
  >(GetDocumentInboxLineV2Document, options)
}
export function useGetDocumentInboxLineV2LazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetDocumentInboxLineV2Query,
    GetDocumentInboxLineV2QueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetDocumentInboxLineV2Query,
    GetDocumentInboxLineV2QueryVariables
  >(GetDocumentInboxLineV2Document, options)
}
export type GetDocumentInboxLineV2QueryHookResult = ReturnType<
  typeof useGetDocumentInboxLineV2Query
>
export type GetDocumentInboxLineV2LazyQueryHookResult = ReturnType<
  typeof useGetDocumentInboxLineV2LazyQuery
>
export type GetDocumentInboxLineV2QueryResult = Apollo.QueryResult<
  GetDocumentInboxLineV2Query,
  GetDocumentInboxLineV2QueryVariables
>
export const DocumentConfirmActionsDocument = gql`
  query DocumentConfirmActions($input: DocumentConfirmActionsInput!) {
    documentV2ConfirmActions(input: $input) {
      id
      confirmed
    }
  }
`

/**
 * __useDocumentConfirmActionsQuery__
 *
 * To run a query within a React component, call `useDocumentConfirmActionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useDocumentConfirmActionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDocumentConfirmActionsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDocumentConfirmActionsQuery(
  baseOptions: Apollo.QueryHookOptions<
    DocumentConfirmActionsQuery,
    DocumentConfirmActionsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    DocumentConfirmActionsQuery,
    DocumentConfirmActionsQueryVariables
  >(DocumentConfirmActionsDocument, options)
}
export function useDocumentConfirmActionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    DocumentConfirmActionsQuery,
    DocumentConfirmActionsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    DocumentConfirmActionsQuery,
    DocumentConfirmActionsQueryVariables
  >(DocumentConfirmActionsDocument, options)
}
export type DocumentConfirmActionsQueryHookResult = ReturnType<
  typeof useDocumentConfirmActionsQuery
>
export type DocumentConfirmActionsLazyQueryHookResult = ReturnType<
  typeof useDocumentConfirmActionsLazyQuery
>
export type DocumentConfirmActionsQueryResult = Apollo.QueryResult<
  DocumentConfirmActionsQuery,
  DocumentConfirmActionsQueryVariables
>
export const MailActionV2Document = gql`
  mutation MailActionV2($input: DocumentsV2MailActionInput!) {
    postMailActionV2(input: $input) {
      success
    }
  }
`
export type MailActionV2MutationFn = Apollo.MutationFunction<
  MailActionV2Mutation,
  MailActionV2MutationVariables
>

/**
 * __useMailActionV2Mutation__
 *
 * To run a mutation, you first call `useMailActionV2Mutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMailActionV2Mutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mailActionV2Mutation, { data, loading, error }] = useMailActionV2Mutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useMailActionV2Mutation(
  baseOptions?: Apollo.MutationHookOptions<
    MailActionV2Mutation,
    MailActionV2MutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    MailActionV2Mutation,
    MailActionV2MutationVariables
  >(MailActionV2Document, options)
}
export type MailActionV2MutationHookResult = ReturnType<
  typeof useMailActionV2Mutation
>
export type MailActionV2MutationResult = Apollo.MutationResult<MailActionV2Mutation>
export type MailActionV2MutationOptions = Apollo.BaseMutationOptions<
  MailActionV2Mutation,
  MailActionV2MutationVariables
>
