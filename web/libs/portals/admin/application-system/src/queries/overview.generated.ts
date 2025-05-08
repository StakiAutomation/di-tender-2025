import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetApplicationsQueryVariables = Types.Exact<{
  input: Types.ApplicationApplicationsAdminInput
}>

export type GetApplicationsQuery = {
  __typename?: 'Query'
  applicationApplicationsAdmin?: Array<{
    __typename?: 'ApplicationAdmin'
    id: string
    typeId: Types.ApplicationListAdminResponseDtoTypeIdEnum
    applicant: string
    state: string
    created: string
    modified: string
    assignees: Array<string>
    applicantActors: Array<string>
    name?: string | null
    pruned?: boolean | null
    pruneAt?: string | null
    institution?: string | null
    progress?: number | null
    status: Types.ApplicationListAdminResponseDtoStatusEnum
    applicantName?: string | null
    paymentStatus?: string | null
    actionCard?: {
      __typename?: 'ActionCardMetaData'
      title?: string | null
      description?: string | null
      deleteButton?: boolean | null
      draftTotalSteps?: number | null
      draftFinishedSteps?: number | null
      tag?: {
        __typename?: 'ActionCardTag'
        label?: string | null
        variant?: string | null
      } | null
      pendingAction?: {
        __typename?: 'PendingAction'
        displayStatus?: string | null
        content?: string | null
        title?: string | null
      } | null
      history?: Array<{
        __typename?: 'ApplicationHistory'
        log?: string | null
        date: string
      }> | null
    } | null
  }> | null
}

export type GetInstitutionApplicationsQueryVariables = Types.Exact<{
  input: Types.ApplicationApplicationsInstitutionAdminInput
}>

export type GetInstitutionApplicationsQuery = {
  __typename?: 'Query'
  applicationApplicationsInstitutionAdmin?: {
    __typename?: 'ApplicationAdminPaginatedResponse'
    count: number
    rows: Array<{
      __typename?: 'ApplicationAdmin'
      id: string
      typeId: Types.ApplicationListAdminResponseDtoTypeIdEnum
      applicant: string
      state: string
      created: string
      modified: string
      assignees: Array<string>
      applicantActors: Array<string>
      name?: string | null
      institution?: string | null
      progress?: number | null
      status: Types.ApplicationListAdminResponseDtoStatusEnum
      applicantName?: string | null
      paymentStatus?: string | null
      actionCard?: {
        __typename?: 'ActionCardMetaData'
        title?: string | null
        description?: string | null
        deleteButton?: boolean | null
        draftTotalSteps?: number | null
        draftFinishedSteps?: number | null
        tag?: {
          __typename?: 'ActionCardTag'
          label?: string | null
          variant?: string | null
        } | null
        pendingAction?: {
          __typename?: 'PendingAction'
          displayStatus?: string | null
          content?: string | null
          title?: string | null
        } | null
        history?: Array<{
          __typename?: 'ApplicationHistory'
          log?: string | null
          date: string
        }> | null
      } | null
    }>
  } | null
}

export type GetOrganizationsQueryVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.GetOrganizationsInput>
}>

export type GetOrganizationsQuery = {
  __typename?: 'Query'
  getOrganizations: {
    __typename?: 'Organizations'
    items: Array<{
      __typename?: 'Organization'
      id: string
      title: string
      slug: string
      logo?: {
        __typename?: 'Image'
        id: string
        url: string
        title: string
      } | null
    }>
  }
}

export type GetApplicationStatisticsQueryVariables = Types.Exact<{
  input: Types.ApplicationApplicationsAdminStatisticsInput
}>

export type GetApplicationStatisticsQuery = {
  __typename?: 'Query'
  applicationApplicationsAdminStatistics?: Array<{
    __typename?: 'ApplicationStatistics'
    typeid: string
    count: number
    draft: number
    inprogress: number
    completed: number
    rejected: number
    approved: number
    name: string
  }> | null
}

export const GetApplicationsDocument = gql`
  query getApplications($input: ApplicationApplicationsAdminInput!) {
    applicationApplicationsAdmin(input: $input) {
      id
      typeId
      applicant
      state
      created
      modified
      assignees
      applicantActors
      name
      pruned
      pruneAt
      institution
      progress
      status
      applicantName
      paymentStatus
      actionCard {
        title
        description
        tag {
          label
          variant
        }
        pendingAction {
          displayStatus
          content
          title
        }
        history {
          log
          date
        }
        deleteButton
        draftTotalSteps
        draftFinishedSteps
      }
    }
  }
`

/**
 * __useGetApplicationsQuery__
 *
 * To run a query within a React component, call `useGetApplicationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetApplicationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetApplicationsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetApplicationsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetApplicationsQuery,
    GetApplicationsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetApplicationsQuery, GetApplicationsQueryVariables>(
    GetApplicationsDocument,
    options,
  )
}
export function useGetApplicationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetApplicationsQuery,
    GetApplicationsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetApplicationsQuery,
    GetApplicationsQueryVariables
  >(GetApplicationsDocument, options)
}
export type GetApplicationsQueryHookResult = ReturnType<
  typeof useGetApplicationsQuery
>
export type GetApplicationsLazyQueryHookResult = ReturnType<
  typeof useGetApplicationsLazyQuery
>
export type GetApplicationsQueryResult = Apollo.QueryResult<
  GetApplicationsQuery,
  GetApplicationsQueryVariables
>
export const GetInstitutionApplicationsDocument = gql`
  query getInstitutionApplications(
    $input: ApplicationApplicationsInstitutionAdminInput!
  ) {
    applicationApplicationsInstitutionAdmin(input: $input) {
      rows {
        id
        typeId
        applicant
        state
        created
        modified
        assignees
        applicantActors
        name
        institution
        progress
        status
        applicantName
        paymentStatus
        actionCard {
          title
          description
          tag {
            label
            variant
          }
          pendingAction {
            displayStatus
            content
            title
          }
          history {
            log
            date
          }
          deleteButton
          draftTotalSteps
          draftFinishedSteps
        }
      }
      count
    }
  }
`

/**
 * __useGetInstitutionApplicationsQuery__
 *
 * To run a query within a React component, call `useGetInstitutionApplicationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInstitutionApplicationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInstitutionApplicationsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetInstitutionApplicationsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetInstitutionApplicationsQuery,
    GetInstitutionApplicationsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetInstitutionApplicationsQuery,
    GetInstitutionApplicationsQueryVariables
  >(GetInstitutionApplicationsDocument, options)
}
export function useGetInstitutionApplicationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetInstitutionApplicationsQuery,
    GetInstitutionApplicationsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetInstitutionApplicationsQuery,
    GetInstitutionApplicationsQueryVariables
  >(GetInstitutionApplicationsDocument, options)
}
export type GetInstitutionApplicationsQueryHookResult = ReturnType<
  typeof useGetInstitutionApplicationsQuery
>
export type GetInstitutionApplicationsLazyQueryHookResult = ReturnType<
  typeof useGetInstitutionApplicationsLazyQuery
>
export type GetInstitutionApplicationsQueryResult = Apollo.QueryResult<
  GetInstitutionApplicationsQuery,
  GetInstitutionApplicationsQueryVariables
>
export const GetOrganizationsDocument = gql`
  query getOrganizations($input: GetOrganizationsInput) {
    getOrganizations(input: $input) {
      items {
        id
        title
        slug
        logo {
          id
          url
          title
        }
      }
    }
  }
`

/**
 * __useGetOrganizationsQuery__
 *
 * To run a query within a React component, call `useGetOrganizationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrganizationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrganizationsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetOrganizationsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetOrganizationsQuery,
    GetOrganizationsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetOrganizationsQuery, GetOrganizationsQueryVariables>(
    GetOrganizationsDocument,
    options,
  )
}
export function useGetOrganizationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetOrganizationsQuery,
    GetOrganizationsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetOrganizationsQuery,
    GetOrganizationsQueryVariables
  >(GetOrganizationsDocument, options)
}
export type GetOrganizationsQueryHookResult = ReturnType<
  typeof useGetOrganizationsQuery
>
export type GetOrganizationsLazyQueryHookResult = ReturnType<
  typeof useGetOrganizationsLazyQuery
>
export type GetOrganizationsQueryResult = Apollo.QueryResult<
  GetOrganizationsQuery,
  GetOrganizationsQueryVariables
>
export const GetApplicationStatisticsDocument = gql`
  query getApplicationStatistics(
    $input: ApplicationApplicationsAdminStatisticsInput!
  ) {
    applicationApplicationsAdminStatistics(input: $input) {
      typeid
      count
      draft
      inprogress
      completed
      rejected
      approved
      name
    }
  }
`

/**
 * __useGetApplicationStatisticsQuery__
 *
 * To run a query within a React component, call `useGetApplicationStatisticsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetApplicationStatisticsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetApplicationStatisticsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetApplicationStatisticsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetApplicationStatisticsQuery,
    GetApplicationStatisticsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetApplicationStatisticsQuery,
    GetApplicationStatisticsQueryVariables
  >(GetApplicationStatisticsDocument, options)
}
export function useGetApplicationStatisticsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetApplicationStatisticsQuery,
    GetApplicationStatisticsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetApplicationStatisticsQuery,
    GetApplicationStatisticsQueryVariables
  >(GetApplicationStatisticsDocument, options)
}
export type GetApplicationStatisticsQueryHookResult = ReturnType<
  typeof useGetApplicationStatisticsQuery
>
export type GetApplicationStatisticsLazyQueryHookResult = ReturnType<
  typeof useGetApplicationStatisticsLazyQuery
>
export type GetApplicationStatisticsQueryResult = Apollo.QueryResult<
  GetApplicationStatisticsQuery,
  GetApplicationStatisticsQueryVariables
>
