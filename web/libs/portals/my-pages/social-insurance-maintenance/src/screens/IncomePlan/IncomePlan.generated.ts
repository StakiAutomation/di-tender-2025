import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetIncomePlanQueryVariables = Types.Exact<{ [key: string]: never }>

export type GetIncomePlanQuery = {
  __typename?: 'Query'
  socialInsuranceIncomePlan?: {
    __typename?: 'SocialInsuranceIncomePlan'
    registrationDate: string
    status: Types.SocialInsuranceIncomePlanStatus
    isEligibleForChange: {
      __typename?: 'SocialInsuranceIncomePlanEligbility'
      isEligible?: boolean | null
      reason?: string | null
    }
  } | null
}

export type GetIncomePlanApplicationQueryVariables = Types.Exact<{
  input: Types.ApplicationApplicationsInput
  locale: Types.Scalars['String']
}>

export type GetIncomePlanApplicationQuery = {
  __typename?: 'Query'
  applicationApplications?: Array<{
    __typename?: 'Application'
    id: string
    created: string
    modified: string
    applicant: string
    assignees: Array<string>
    applicantActors: Array<string>
    state: string
    typeId: Types.ApplicationResponseDtoTypeIdEnum
    answers: any
    externalData: any
    status: Types.ApplicationResponseDtoStatusEnum
  }> | null
}

export const GetIncomePlanDocument = gql`
  query getIncomePlan {
    socialInsuranceIncomePlan {
      isEligibleForChange {
        isEligible
        reason
      }
      registrationDate
      status
    }
  }
`

/**
 * __useGetIncomePlanQuery__
 *
 * To run a query within a React component, call `useGetIncomePlanQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIncomePlanQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetIncomePlanQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetIncomePlanQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetIncomePlanQuery,
    GetIncomePlanQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetIncomePlanQuery, GetIncomePlanQueryVariables>(
    GetIncomePlanDocument,
    options,
  )
}
export function useGetIncomePlanLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetIncomePlanQuery,
    GetIncomePlanQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetIncomePlanQuery, GetIncomePlanQueryVariables>(
    GetIncomePlanDocument,
    options,
  )
}
export type GetIncomePlanQueryHookResult = ReturnType<
  typeof useGetIncomePlanQuery
>
export type GetIncomePlanLazyQueryHookResult = ReturnType<
  typeof useGetIncomePlanLazyQuery
>
export type GetIncomePlanQueryResult = Apollo.QueryResult<
  GetIncomePlanQuery,
  GetIncomePlanQueryVariables
>
export const GetIncomePlanApplicationDocument = gql`
  query getIncomePlanApplication(
    $input: ApplicationApplicationsInput!
    $locale: String!
  ) {
    applicationApplications(input: $input, locale: $locale) {
      id
      created
      modified
      applicant
      assignees
      applicantActors
      state
      typeId
      answers
      externalData
      status
    }
  }
`

/**
 * __useGetIncomePlanApplicationQuery__
 *
 * To run a query within a React component, call `useGetIncomePlanApplicationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIncomePlanApplicationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetIncomePlanApplicationQuery({
 *   variables: {
 *      input: // value for 'input'
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetIncomePlanApplicationQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetIncomePlanApplicationQuery,
    GetIncomePlanApplicationQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetIncomePlanApplicationQuery,
    GetIncomePlanApplicationQueryVariables
  >(GetIncomePlanApplicationDocument, options)
}
export function useGetIncomePlanApplicationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetIncomePlanApplicationQuery,
    GetIncomePlanApplicationQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetIncomePlanApplicationQuery,
    GetIncomePlanApplicationQueryVariables
  >(GetIncomePlanApplicationDocument, options)
}
export type GetIncomePlanApplicationQueryHookResult = ReturnType<
  typeof useGetIncomePlanApplicationQuery
>
export type GetIncomePlanApplicationLazyQueryHookResult = ReturnType<
  typeof useGetIncomePlanApplicationLazyQuery
>
export type GetIncomePlanApplicationQueryResult = Apollo.QueryResult<
  GetIncomePlanApplicationQuery,
  GetIncomePlanApplicationQueryVariables
>
