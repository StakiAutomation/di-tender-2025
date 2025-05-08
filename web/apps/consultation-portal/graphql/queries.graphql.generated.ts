import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type SubGetCasesQueryVariables = Types.Exact<{
  input: Types.ConsultationPortalCasesInput
}>

export type SubGetCasesQuery = {
  __typename?: 'Query'
  consultationPortalGetCases: {
    __typename?: 'ConsultationPortalCasesAggregateResult'
    total: number
    cases?: Array<{
      __typename?: 'ConsultationPortalCaseItemResult'
      id?: number | null
      caseNumber?: string | null
      name?: string | null
      institutionName?: string | null
      policyAreaName?: string | null
    }> | null
  }
}

export type SubGetTypesQueryVariables = Types.Exact<{ [key: string]: never }>

export type SubGetTypesQuery = {
  __typename?: 'Query'
  consultationPortalAllTypes: {
    __typename?: 'ConsultationPortalAllTypesResult'
    policyAreas?: any | null
    institutions?: any | null
  }
}

export type SubGetEmailQueryVariables = Types.Exact<{ [key: string]: never }>

export type SubGetEmailQuery = {
  __typename?: 'Query'
  consultationPortalUserEmail: {
    __typename?: 'ConsultationPortalUserEmailResult'
    email?: string | null
    emailVerified?: boolean | null
  }
}

export type SubPostSubsMutationVariables = Types.Exact<{
  input: Types.ConsultationPortalUserSubscriptionsCommandInput
}>

export type SubPostSubsMutation = {
  __typename?: 'Mutation'
  consultationPortalPostSubscriptions?: boolean | null
}

export type SubGetUsersubsQueryVariables = Types.Exact<{ [key: string]: never }>

export type SubGetUsersubsQuery = {
  __typename?: 'Query'
  consultationPortalUserSubscriptions: {
    __typename?: 'ConsultationPortalUserSubscriptionsAggregate'
    subscribedToAll?: boolean | null
    subscribedToAllType?: Types.SubscriptionType | null
    cases?: Array<{
      __typename?: 'ConsultationPortalUserCaseSubscriptionResult'
      id?: number | null
      subscriptionType?: string | null
    }> | null
    institutions?: Array<{
      __typename?: 'ConsultationPortalUserSubscriptionResult'
      id?: number | null
      subscriptionType?: string | null
    }> | null
    policyAreas?: Array<{
      __typename?: 'ConsultationPortalUserSubscriptionResult'
      id?: number | null
      subscriptionType?: string | null
    }> | null
  }
}

export type SubPostEmailMutationVariables = Types.Exact<{
  input: Types.ConsultationPortalPostEmailCommandInput
}>

export type SubPostEmailMutation = {
  __typename?: 'Mutation'
  consultationPortalPostUserEmail?: boolean | null
}

export type HomeGetStatisticsQueryVariables = Types.Exact<{
  [key: string]: never
}>

export type HomeGetStatisticsQuery = {
  __typename?: 'Query'
  consultationPortalStatistics: {
    __typename?: 'ConsultationPortalStatisticsResult'
    totalCases?: number | null
    totalAdvices?: number | null
    casesInReview?: number | null
  }
}

export type HomeGetCasesQueryVariables = Types.Exact<{
  input: Types.ConsultationPortalCasesInput
}>

export type HomeGetCasesQuery = {
  __typename?: 'Query'
  consultationPortalGetCases: {
    __typename?: 'ConsultationPortalCasesAggregateResult'
    total: number
    filterGroups?: any | null
    cases?: Array<{
      __typename?: 'ConsultationPortalCaseItemResult'
      id?: number | null
      caseNumber?: string | null
      name?: string | null
      adviceCount?: number | null
      shortDescription?: string | null
      statusName?: string | null
      institutionName?: string | null
      typeName?: string | null
      policyAreaName?: string | null
      processBegins?: Date | null
      processEnds?: Date | null
      created?: Date | null
      publishOnWeb?: Date | null
    }> | null
  }
}

export type HomeGetTypesQueryVariables = Types.Exact<{ [key: string]: never }>

export type HomeGetTypesQuery = {
  __typename?: 'Query'
  consultationPortalAllTypes: {
    __typename?: 'ConsultationPortalAllTypesResult'
    policyAreas?: any | null
    institutions?: any | null
    caseStatuses?: any | null
    caseTypes?: any | null
  }
}

export type CaseGetCaseByIdQueryVariables = Types.Exact<{
  input: Types.ConsultationPortalCaseInput
}>

export type CaseGetCaseByIdQuery = {
  __typename?: 'Query'
  consultationPortalCaseById: {
    __typename?: 'ConsultationPortalCaseResult'
    id?: number | null
    caseNumber?: string | null
    name?: string | null
    typeName?: string | null
    shortDescription?: string | null
    detailedDescription?: string | null
    contactName?: string | null
    contactEmail?: string | null
    institutionName?: string | null
    policyAreaName?: string | null
    processBegins?: Date | null
    processEnds?: Date | null
    announcementText?: string | null
    summaryDate?: Date | null
    summaryText?: string | null
    summaryLink?: string | null
    summaryDocumentId?: string | null
    adviceCount?: number | null
    advicePublishTypeId?: number | null
    advicePublishTypeName?: string | null
    allowUsersToSendPrivateAdvices?: boolean | null
    created?: Date | null
    changed?: Date | null
    oldInstitutionName?: string | null
    extraStakeholderList?: string | null
    statusName?: string | null
    publishOnWeb?: Date | null
    stakeholders?: Array<{
      __typename?: 'ConsultationPortalCaseStakeholderResult'
      name?: string | null
      email?: string | null
    }> | null
    documents?: Array<{
      __typename?: 'ConsultationPortalDocumentInfoResult'
      id?: string | null
      description?: string | null
      link?: string | null
      fileName?: string | null
      fileType?: string | null
      size?: number | null
    }> | null
    additionalDocuments?: Array<{
      __typename?: 'ConsultationPortalDocumentInfoResult'
      id?: string | null
      description?: string | null
      link?: string | null
      fileName?: string | null
      fileType?: string | null
      size?: number | null
    }> | null
    relatedCases?: Array<{
      __typename?: 'ConsultationPortalRelatedCaseResult'
      id?: number | null
      caseNumber?: string | null
      name?: string | null
    }> | null
  }
}

export type CaseGetAdvicesByIdQueryVariables = Types.Exact<{
  input: Types.ConsultationPortalCaseInput
}>

export type CaseGetAdvicesByIdQuery = {
  __typename?: 'Query'
  consultationPortalAdviceByCaseId: Array<{
    __typename?: 'ConsultationPortalAdviceResult'
    id?: string | null
    number?: number | null
    participantName?: string | null
    participantEmail?: string | null
    content?: string | null
    created?: Date | null
    isPrivate?: boolean | null
    isHidden?: boolean | null
    adviceDocuments?: Array<{
      __typename?: 'ConsultationPortalDocumentInfoResult'
      id?: string | null
      fileName?: string | null
    }> | null
  }>
}

export type CasePostAdviceMutationVariables = Types.Exact<{
  input: Types.ConsultationPortalPostAdviceInput
}>

export type CasePostAdviceMutation = {
  __typename?: 'Mutation'
  consultationPortalPostAdvice?: boolean | null
}

export type CaseGetCaseSubscriptionQueryVariables = Types.Exact<{
  input: Types.ConsultationPortalCaseInput
}>

export type CaseGetCaseSubscriptionQuery = {
  __typename?: 'Query'
  consultationPortalSubscriptionType: {
    __typename?: 'ConsultationPortalCaseSubscriptionResult'
    type?: Types.CaseSubscriptionType | null
  }
}

export type CasePostCaseSubscriptionMutationVariables = Types.Exact<{
  input: Types.ConsultationPortalPostCaseSubscriptionTypeInput
}>

export type CasePostCaseSubscriptionMutation = {
  __typename?: 'Mutation'
  consultationPortalPostSubscriptionType?: boolean | null
}

export type CaseDeleteCaseSubscriptionMutationVariables = Types.Exact<{
  input: Types.ConsultationPortalCaseInput
}>

export type CaseDeleteCaseSubscriptionMutation = {
  __typename?: 'Mutation'
  consultationPortalDeleteSubscriptionType?: boolean | null
}

export type AdvicesGetAllUserAdvicesQueryVariables = Types.Exact<{
  input: Types.ConsultationPortalUserAdvicesInput
}>

export type AdvicesGetAllUserAdvicesQuery = {
  __typename?: 'Query'
  consultationPortalAllUserAdvices: {
    __typename?: 'ConsultationPortalUserAdviceAggregate'
    total?: number | null
    advices?: Array<{
      __typename?: 'ConsultationPortalUserAdviceResult'
      id?: string | null
      caseId?: number | null
      participantName?: string | null
      participantEmail?: string | null
      content?: string | null
      created?: Date | null
      _case?: {
        __typename?: 'ConsultationPortalUserAdviceCaseResult'
        caseNumber?: string | null
        name?: string | null
        statusName?: string | null
        institutionName?: string | null
        typeName?: string | null
        policyAreaName?: string | null
        processBegins?: Date | null
        processEnds?: Date | null
      } | null
      adviceDocuments?: Array<{
        __typename?: 'ConsultationPortalDocumentInfoResult'
        id?: string | null
        fileName?: string | null
      }> | null
    }> | null
  }
}

export type CreateUploadUrlMutationVariables = Types.Exact<{
  filename: Types.Scalars['String']
}>

export type CreateUploadUrlMutation = {
  __typename?: 'Mutation'
  createUploadUrl: {
    __typename?: 'PresignedPost'
    url: string
    fields: { [key: string]: any }
  }
}

export const SubGetCasesDocument = gql`
  query SUB_GET_CASES($input: ConsultationPortalCasesInput!) {
    consultationPortalGetCases(input: $input) {
      total
      cases {
        id
        caseNumber
        name
        institutionName
        policyAreaName
      }
    }
  }
`

/**
 * __useSubGetCasesQuery__
 *
 * To run a query within a React component, call `useSubGetCasesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSubGetCasesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubGetCasesQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSubGetCasesQuery(
  baseOptions: Apollo.QueryHookOptions<
    SubGetCasesQuery,
    SubGetCasesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<SubGetCasesQuery, SubGetCasesQueryVariables>(
    SubGetCasesDocument,
    options,
  )
}
export function useSubGetCasesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SubGetCasesQuery,
    SubGetCasesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<SubGetCasesQuery, SubGetCasesQueryVariables>(
    SubGetCasesDocument,
    options,
  )
}
export type SubGetCasesQueryHookResult = ReturnType<typeof useSubGetCasesQuery>
export type SubGetCasesLazyQueryHookResult = ReturnType<
  typeof useSubGetCasesLazyQuery
>
export type SubGetCasesQueryResult = Apollo.QueryResult<
  SubGetCasesQuery,
  SubGetCasesQueryVariables
>
export const SubGetTypesDocument = gql`
  query SUB_GET_TYPES {
    consultationPortalAllTypes {
      policyAreas
      institutions
    }
  }
`

/**
 * __useSubGetTypesQuery__
 *
 * To run a query within a React component, call `useSubGetTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSubGetTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubGetTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useSubGetTypesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    SubGetTypesQuery,
    SubGetTypesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<SubGetTypesQuery, SubGetTypesQueryVariables>(
    SubGetTypesDocument,
    options,
  )
}
export function useSubGetTypesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SubGetTypesQuery,
    SubGetTypesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<SubGetTypesQuery, SubGetTypesQueryVariables>(
    SubGetTypesDocument,
    options,
  )
}
export type SubGetTypesQueryHookResult = ReturnType<typeof useSubGetTypesQuery>
export type SubGetTypesLazyQueryHookResult = ReturnType<
  typeof useSubGetTypesLazyQuery
>
export type SubGetTypesQueryResult = Apollo.QueryResult<
  SubGetTypesQuery,
  SubGetTypesQueryVariables
>
export const SubGetEmailDocument = gql`
  query SUB_GET_EMAIL {
    consultationPortalUserEmail {
      email
      emailVerified
    }
  }
`

/**
 * __useSubGetEmailQuery__
 *
 * To run a query within a React component, call `useSubGetEmailQuery` and pass it any options that fit your needs.
 * When your component renders, `useSubGetEmailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubGetEmailQuery({
 *   variables: {
 *   },
 * });
 */
export function useSubGetEmailQuery(
  baseOptions?: Apollo.QueryHookOptions<
    SubGetEmailQuery,
    SubGetEmailQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<SubGetEmailQuery, SubGetEmailQueryVariables>(
    SubGetEmailDocument,
    options,
  )
}
export function useSubGetEmailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SubGetEmailQuery,
    SubGetEmailQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<SubGetEmailQuery, SubGetEmailQueryVariables>(
    SubGetEmailDocument,
    options,
  )
}
export type SubGetEmailQueryHookResult = ReturnType<typeof useSubGetEmailQuery>
export type SubGetEmailLazyQueryHookResult = ReturnType<
  typeof useSubGetEmailLazyQuery
>
export type SubGetEmailQueryResult = Apollo.QueryResult<
  SubGetEmailQuery,
  SubGetEmailQueryVariables
>
export const SubPostSubsDocument = gql`
  mutation SUB_POST_SUBS(
    $input: ConsultationPortalUserSubscriptionsCommandInput!
  ) {
    consultationPortalPostSubscriptions(input: $input)
  }
`
export type SubPostSubsMutationFn = Apollo.MutationFunction<
  SubPostSubsMutation,
  SubPostSubsMutationVariables
>

/**
 * __useSubPostSubsMutation__
 *
 * To run a mutation, you first call `useSubPostSubsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubPostSubsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [subPostSubsMutation, { data, loading, error }] = useSubPostSubsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSubPostSubsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SubPostSubsMutation,
    SubPostSubsMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<SubPostSubsMutation, SubPostSubsMutationVariables>(
    SubPostSubsDocument,
    options,
  )
}
export type SubPostSubsMutationHookResult = ReturnType<
  typeof useSubPostSubsMutation
>
export type SubPostSubsMutationResult = Apollo.MutationResult<SubPostSubsMutation>
export type SubPostSubsMutationOptions = Apollo.BaseMutationOptions<
  SubPostSubsMutation,
  SubPostSubsMutationVariables
>
export const SubGetUsersubsDocument = gql`
  query SUB_GET_USERSUBS {
    consultationPortalUserSubscriptions {
      subscribedToAll
      subscribedToAllType
      cases {
        id
        subscriptionType
      }
      institutions {
        id
        subscriptionType
      }
      policyAreas {
        id
        subscriptionType
      }
    }
  }
`

/**
 * __useSubGetUsersubsQuery__
 *
 * To run a query within a React component, call `useSubGetUsersubsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSubGetUsersubsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubGetUsersubsQuery({
 *   variables: {
 *   },
 * });
 */
export function useSubGetUsersubsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    SubGetUsersubsQuery,
    SubGetUsersubsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<SubGetUsersubsQuery, SubGetUsersubsQueryVariables>(
    SubGetUsersubsDocument,
    options,
  )
}
export function useSubGetUsersubsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SubGetUsersubsQuery,
    SubGetUsersubsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<SubGetUsersubsQuery, SubGetUsersubsQueryVariables>(
    SubGetUsersubsDocument,
    options,
  )
}
export type SubGetUsersubsQueryHookResult = ReturnType<
  typeof useSubGetUsersubsQuery
>
export type SubGetUsersubsLazyQueryHookResult = ReturnType<
  typeof useSubGetUsersubsLazyQuery
>
export type SubGetUsersubsQueryResult = Apollo.QueryResult<
  SubGetUsersubsQuery,
  SubGetUsersubsQueryVariables
>
export const SubPostEmailDocument = gql`
  mutation SUB_POST_EMAIL($input: ConsultationPortalPostEmailCommandInput!) {
    consultationPortalPostUserEmail(input: $input)
  }
`
export type SubPostEmailMutationFn = Apollo.MutationFunction<
  SubPostEmailMutation,
  SubPostEmailMutationVariables
>

/**
 * __useSubPostEmailMutation__
 *
 * To run a mutation, you first call `useSubPostEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubPostEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [subPostEmailMutation, { data, loading, error }] = useSubPostEmailMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSubPostEmailMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SubPostEmailMutation,
    SubPostEmailMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    SubPostEmailMutation,
    SubPostEmailMutationVariables
  >(SubPostEmailDocument, options)
}
export type SubPostEmailMutationHookResult = ReturnType<
  typeof useSubPostEmailMutation
>
export type SubPostEmailMutationResult = Apollo.MutationResult<SubPostEmailMutation>
export type SubPostEmailMutationOptions = Apollo.BaseMutationOptions<
  SubPostEmailMutation,
  SubPostEmailMutationVariables
>
export const HomeGetStatisticsDocument = gql`
  query HOME_GET_STATISTICS {
    consultationPortalStatistics {
      totalCases
      totalAdvices
      casesInReview
    }
  }
`

/**
 * __useHomeGetStatisticsQuery__
 *
 * To run a query within a React component, call `useHomeGetStatisticsQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeGetStatisticsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeGetStatisticsQuery({
 *   variables: {
 *   },
 * });
 */
export function useHomeGetStatisticsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    HomeGetStatisticsQuery,
    HomeGetStatisticsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    HomeGetStatisticsQuery,
    HomeGetStatisticsQueryVariables
  >(HomeGetStatisticsDocument, options)
}
export function useHomeGetStatisticsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    HomeGetStatisticsQuery,
    HomeGetStatisticsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    HomeGetStatisticsQuery,
    HomeGetStatisticsQueryVariables
  >(HomeGetStatisticsDocument, options)
}
export type HomeGetStatisticsQueryHookResult = ReturnType<
  typeof useHomeGetStatisticsQuery
>
export type HomeGetStatisticsLazyQueryHookResult = ReturnType<
  typeof useHomeGetStatisticsLazyQuery
>
export type HomeGetStatisticsQueryResult = Apollo.QueryResult<
  HomeGetStatisticsQuery,
  HomeGetStatisticsQueryVariables
>
export const HomeGetCasesDocument = gql`
  query HOME_GET_CASES($input: ConsultationPortalCasesInput!) {
    consultationPortalGetCases(input: $input) {
      total
      filterGroups
      cases {
        id
        caseNumber
        name
        adviceCount
        shortDescription
        statusName
        institutionName
        typeName
        policyAreaName
        processBegins
        processEnds
        created
        publishOnWeb
      }
    }
  }
`

/**
 * __useHomeGetCasesQuery__
 *
 * To run a query within a React component, call `useHomeGetCasesQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeGetCasesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeGetCasesQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useHomeGetCasesQuery(
  baseOptions: Apollo.QueryHookOptions<
    HomeGetCasesQuery,
    HomeGetCasesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<HomeGetCasesQuery, HomeGetCasesQueryVariables>(
    HomeGetCasesDocument,
    options,
  )
}
export function useHomeGetCasesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    HomeGetCasesQuery,
    HomeGetCasesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<HomeGetCasesQuery, HomeGetCasesQueryVariables>(
    HomeGetCasesDocument,
    options,
  )
}
export type HomeGetCasesQueryHookResult = ReturnType<
  typeof useHomeGetCasesQuery
>
export type HomeGetCasesLazyQueryHookResult = ReturnType<
  typeof useHomeGetCasesLazyQuery
>
export type HomeGetCasesQueryResult = Apollo.QueryResult<
  HomeGetCasesQuery,
  HomeGetCasesQueryVariables
>
export const HomeGetTypesDocument = gql`
  query HOME_GET_TYPES {
    consultationPortalAllTypes {
      policyAreas
      institutions
      caseStatuses
      caseTypes
    }
  }
`

/**
 * __useHomeGetTypesQuery__
 *
 * To run a query within a React component, call `useHomeGetTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeGetTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeGetTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useHomeGetTypesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    HomeGetTypesQuery,
    HomeGetTypesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<HomeGetTypesQuery, HomeGetTypesQueryVariables>(
    HomeGetTypesDocument,
    options,
  )
}
export function useHomeGetTypesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    HomeGetTypesQuery,
    HomeGetTypesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<HomeGetTypesQuery, HomeGetTypesQueryVariables>(
    HomeGetTypesDocument,
    options,
  )
}
export type HomeGetTypesQueryHookResult = ReturnType<
  typeof useHomeGetTypesQuery
>
export type HomeGetTypesLazyQueryHookResult = ReturnType<
  typeof useHomeGetTypesLazyQuery
>
export type HomeGetTypesQueryResult = Apollo.QueryResult<
  HomeGetTypesQuery,
  HomeGetTypesQueryVariables
>
export const CaseGetCaseByIdDocument = gql`
  query CASE_GET_CASE_BY_ID($input: ConsultationPortalCaseInput!) {
    consultationPortalCaseById(input: $input) {
      id
      caseNumber
      name
      typeName
      shortDescription
      detailedDescription
      contactName
      contactEmail
      institutionName
      policyAreaName
      processBegins
      processEnds
      announcementText
      summaryDate
      summaryText
      summaryLink
      summaryDocumentId
      adviceCount
      advicePublishTypeId
      advicePublishTypeName
      allowUsersToSendPrivateAdvices
      created
      changed
      oldInstitutionName
      extraStakeholderList
      statusName
      publishOnWeb
      stakeholders {
        name
        email
      }
      documents {
        id
        description
        link
        fileName
        fileType
        size
      }
      additionalDocuments {
        id
        description
        link
        fileName
        fileType
        size
      }
      relatedCases {
        id
        caseNumber
        name
      }
    }
  }
`

/**
 * __useCaseGetCaseByIdQuery__
 *
 * To run a query within a React component, call `useCaseGetCaseByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useCaseGetCaseByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCaseGetCaseByIdQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCaseGetCaseByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    CaseGetCaseByIdQuery,
    CaseGetCaseByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<CaseGetCaseByIdQuery, CaseGetCaseByIdQueryVariables>(
    CaseGetCaseByIdDocument,
    options,
  )
}
export function useCaseGetCaseByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CaseGetCaseByIdQuery,
    CaseGetCaseByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    CaseGetCaseByIdQuery,
    CaseGetCaseByIdQueryVariables
  >(CaseGetCaseByIdDocument, options)
}
export type CaseGetCaseByIdQueryHookResult = ReturnType<
  typeof useCaseGetCaseByIdQuery
>
export type CaseGetCaseByIdLazyQueryHookResult = ReturnType<
  typeof useCaseGetCaseByIdLazyQuery
>
export type CaseGetCaseByIdQueryResult = Apollo.QueryResult<
  CaseGetCaseByIdQuery,
  CaseGetCaseByIdQueryVariables
>
export const CaseGetAdvicesByIdDocument = gql`
  query CASE_GET_ADVICES_BY_ID($input: ConsultationPortalCaseInput!) {
    consultationPortalAdviceByCaseId(input: $input) {
      id
      number
      participantName
      participantEmail
      content
      created
      isPrivate
      isHidden
      adviceDocuments {
        id
        fileName
      }
    }
  }
`

/**
 * __useCaseGetAdvicesByIdQuery__
 *
 * To run a query within a React component, call `useCaseGetAdvicesByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useCaseGetAdvicesByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCaseGetAdvicesByIdQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCaseGetAdvicesByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    CaseGetAdvicesByIdQuery,
    CaseGetAdvicesByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    CaseGetAdvicesByIdQuery,
    CaseGetAdvicesByIdQueryVariables
  >(CaseGetAdvicesByIdDocument, options)
}
export function useCaseGetAdvicesByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CaseGetAdvicesByIdQuery,
    CaseGetAdvicesByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    CaseGetAdvicesByIdQuery,
    CaseGetAdvicesByIdQueryVariables
  >(CaseGetAdvicesByIdDocument, options)
}
export type CaseGetAdvicesByIdQueryHookResult = ReturnType<
  typeof useCaseGetAdvicesByIdQuery
>
export type CaseGetAdvicesByIdLazyQueryHookResult = ReturnType<
  typeof useCaseGetAdvicesByIdLazyQuery
>
export type CaseGetAdvicesByIdQueryResult = Apollo.QueryResult<
  CaseGetAdvicesByIdQuery,
  CaseGetAdvicesByIdQueryVariables
>
export const CasePostAdviceDocument = gql`
  mutation CASE_POST_ADVICE($input: ConsultationPortalPostAdviceInput!) {
    consultationPortalPostAdvice(input: $input)
  }
`
export type CasePostAdviceMutationFn = Apollo.MutationFunction<
  CasePostAdviceMutation,
  CasePostAdviceMutationVariables
>

/**
 * __useCasePostAdviceMutation__
 *
 * To run a mutation, you first call `useCasePostAdviceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCasePostAdviceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [casePostAdviceMutation, { data, loading, error }] = useCasePostAdviceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCasePostAdviceMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CasePostAdviceMutation,
    CasePostAdviceMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CasePostAdviceMutation,
    CasePostAdviceMutationVariables
  >(CasePostAdviceDocument, options)
}
export type CasePostAdviceMutationHookResult = ReturnType<
  typeof useCasePostAdviceMutation
>
export type CasePostAdviceMutationResult = Apollo.MutationResult<CasePostAdviceMutation>
export type CasePostAdviceMutationOptions = Apollo.BaseMutationOptions<
  CasePostAdviceMutation,
  CasePostAdviceMutationVariables
>
export const CaseGetCaseSubscriptionDocument = gql`
  query CASE_GET_CASE_SUBSCRIPTION($input: ConsultationPortalCaseInput!) {
    consultationPortalSubscriptionType(input: $input) {
      type
    }
  }
`

/**
 * __useCaseGetCaseSubscriptionQuery__
 *
 * To run a query within a React component, call `useCaseGetCaseSubscriptionQuery` and pass it any options that fit your needs.
 * When your component renders, `useCaseGetCaseSubscriptionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCaseGetCaseSubscriptionQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCaseGetCaseSubscriptionQuery(
  baseOptions: Apollo.QueryHookOptions<
    CaseGetCaseSubscriptionQuery,
    CaseGetCaseSubscriptionQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    CaseGetCaseSubscriptionQuery,
    CaseGetCaseSubscriptionQueryVariables
  >(CaseGetCaseSubscriptionDocument, options)
}
export function useCaseGetCaseSubscriptionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CaseGetCaseSubscriptionQuery,
    CaseGetCaseSubscriptionQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    CaseGetCaseSubscriptionQuery,
    CaseGetCaseSubscriptionQueryVariables
  >(CaseGetCaseSubscriptionDocument, options)
}
export type CaseGetCaseSubscriptionQueryHookResult = ReturnType<
  typeof useCaseGetCaseSubscriptionQuery
>
export type CaseGetCaseSubscriptionLazyQueryHookResult = ReturnType<
  typeof useCaseGetCaseSubscriptionLazyQuery
>
export type CaseGetCaseSubscriptionQueryResult = Apollo.QueryResult<
  CaseGetCaseSubscriptionQuery,
  CaseGetCaseSubscriptionQueryVariables
>
export const CasePostCaseSubscriptionDocument = gql`
  mutation CASE_POST_CASE_SUBSCRIPTION(
    $input: ConsultationPortalPostCaseSubscriptionTypeInput!
  ) {
    consultationPortalPostSubscriptionType(input: $input)
  }
`
export type CasePostCaseSubscriptionMutationFn = Apollo.MutationFunction<
  CasePostCaseSubscriptionMutation,
  CasePostCaseSubscriptionMutationVariables
>

/**
 * __useCasePostCaseSubscriptionMutation__
 *
 * To run a mutation, you first call `useCasePostCaseSubscriptionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCasePostCaseSubscriptionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [casePostCaseSubscriptionMutation, { data, loading, error }] = useCasePostCaseSubscriptionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCasePostCaseSubscriptionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CasePostCaseSubscriptionMutation,
    CasePostCaseSubscriptionMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CasePostCaseSubscriptionMutation,
    CasePostCaseSubscriptionMutationVariables
  >(CasePostCaseSubscriptionDocument, options)
}
export type CasePostCaseSubscriptionMutationHookResult = ReturnType<
  typeof useCasePostCaseSubscriptionMutation
>
export type CasePostCaseSubscriptionMutationResult = Apollo.MutationResult<CasePostCaseSubscriptionMutation>
export type CasePostCaseSubscriptionMutationOptions = Apollo.BaseMutationOptions<
  CasePostCaseSubscriptionMutation,
  CasePostCaseSubscriptionMutationVariables
>
export const CaseDeleteCaseSubscriptionDocument = gql`
  mutation CASE_DELETE_CASE_SUBSCRIPTION($input: ConsultationPortalCaseInput!) {
    consultationPortalDeleteSubscriptionType(input: $input)
  }
`
export type CaseDeleteCaseSubscriptionMutationFn = Apollo.MutationFunction<
  CaseDeleteCaseSubscriptionMutation,
  CaseDeleteCaseSubscriptionMutationVariables
>

/**
 * __useCaseDeleteCaseSubscriptionMutation__
 *
 * To run a mutation, you first call `useCaseDeleteCaseSubscriptionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCaseDeleteCaseSubscriptionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [caseDeleteCaseSubscriptionMutation, { data, loading, error }] = useCaseDeleteCaseSubscriptionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCaseDeleteCaseSubscriptionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CaseDeleteCaseSubscriptionMutation,
    CaseDeleteCaseSubscriptionMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CaseDeleteCaseSubscriptionMutation,
    CaseDeleteCaseSubscriptionMutationVariables
  >(CaseDeleteCaseSubscriptionDocument, options)
}
export type CaseDeleteCaseSubscriptionMutationHookResult = ReturnType<
  typeof useCaseDeleteCaseSubscriptionMutation
>
export type CaseDeleteCaseSubscriptionMutationResult = Apollo.MutationResult<CaseDeleteCaseSubscriptionMutation>
export type CaseDeleteCaseSubscriptionMutationOptions = Apollo.BaseMutationOptions<
  CaseDeleteCaseSubscriptionMutation,
  CaseDeleteCaseSubscriptionMutationVariables
>
export const AdvicesGetAllUserAdvicesDocument = gql`
  query ADVICES_GET_ALL_USER_ADVICES(
    $input: ConsultationPortalUserAdvicesInput!
  ) {
    consultationPortalAllUserAdvices(input: $input) {
      total
      advices {
        id
        caseId
        participantName
        participantEmail
        content
        created
        _case {
          caseNumber
          name
          statusName
          institutionName
          typeName
          policyAreaName
          processBegins
          processEnds
        }
        adviceDocuments {
          id
          fileName
        }
      }
    }
  }
`

/**
 * __useAdvicesGetAllUserAdvicesQuery__
 *
 * To run a query within a React component, call `useAdvicesGetAllUserAdvicesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdvicesGetAllUserAdvicesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdvicesGetAllUserAdvicesQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdvicesGetAllUserAdvicesQuery(
  baseOptions: Apollo.QueryHookOptions<
    AdvicesGetAllUserAdvicesQuery,
    AdvicesGetAllUserAdvicesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    AdvicesGetAllUserAdvicesQuery,
    AdvicesGetAllUserAdvicesQueryVariables
  >(AdvicesGetAllUserAdvicesDocument, options)
}
export function useAdvicesGetAllUserAdvicesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AdvicesGetAllUserAdvicesQuery,
    AdvicesGetAllUserAdvicesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    AdvicesGetAllUserAdvicesQuery,
    AdvicesGetAllUserAdvicesQueryVariables
  >(AdvicesGetAllUserAdvicesDocument, options)
}
export type AdvicesGetAllUserAdvicesQueryHookResult = ReturnType<
  typeof useAdvicesGetAllUserAdvicesQuery
>
export type AdvicesGetAllUserAdvicesLazyQueryHookResult = ReturnType<
  typeof useAdvicesGetAllUserAdvicesLazyQuery
>
export type AdvicesGetAllUserAdvicesQueryResult = Apollo.QueryResult<
  AdvicesGetAllUserAdvicesQuery,
  AdvicesGetAllUserAdvicesQueryVariables
>
export const CreateUploadUrlDocument = gql`
  mutation CreateUploadUrl($filename: String!) {
    createUploadUrl(filename: $filename) {
      url
      fields
    }
  }
`
export type CreateUploadUrlMutationFn = Apollo.MutationFunction<
  CreateUploadUrlMutation,
  CreateUploadUrlMutationVariables
>

/**
 * __useCreateUploadUrlMutation__
 *
 * To run a mutation, you first call `useCreateUploadUrlMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUploadUrlMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUploadUrlMutation, { data, loading, error }] = useCreateUploadUrlMutation({
 *   variables: {
 *      filename: // value for 'filename'
 *   },
 * });
 */
export function useCreateUploadUrlMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateUploadUrlMutation,
    CreateUploadUrlMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateUploadUrlMutation,
    CreateUploadUrlMutationVariables
  >(CreateUploadUrlDocument, options)
}
export type CreateUploadUrlMutationHookResult = ReturnType<
  typeof useCreateUploadUrlMutation
>
export type CreateUploadUrlMutationResult = Apollo.MutationResult<CreateUploadUrlMutation>
export type CreateUploadUrlMutationOptions = Apollo.BaseMutationOptions<
  CreateUploadUrlMutation,
  CreateUploadUrlMutationVariables
>
