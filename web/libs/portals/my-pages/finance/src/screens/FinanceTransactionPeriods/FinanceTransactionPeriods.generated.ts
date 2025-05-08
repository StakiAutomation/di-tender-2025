import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetAssessmentYearsQueryVariables = Types.Exact<{
  [key: string]: never
}>

export type GetAssessmentYearsQuery = {
  __typename?: 'Query'
  getAssessmentYears: {
    __typename?: 'FinanceAssessmentYears'
    year?: Array<string> | null
  }
}

export type GetChargeTypesByYearQueryVariables = Types.Exact<{
  input: Types.GetChargeTypesByYearInput
}>

export type GetChargeTypesByYearQuery = {
  __typename?: 'Query'
  getChargeTypesByYear?: {
    __typename?: 'FinanceChargeTypesByYear'
    chargeType?: Array<{
      __typename?: 'FinanceChargeTypesByYearData'
      iD: string
      name: string
    }> | null
  } | null
}

export type GetChargeTypesDetailsByYearQueryVariables = Types.Exact<{
  input: Types.GetChargeTypesDetailsByYearInput
}>

export type GetChargeTypesDetailsByYearQuery = {
  __typename?: 'Query'
  getChargeTypesDetailsByYear: {
    __typename?: 'FinanceChargeTypeDetails'
    chargeType: Array<{
      __typename?: 'FinanceChargeTypeDetailsData'
      iD: string
      name: string
      chargeItemSubjects: string
      chargeItemSubjectDescription: string
      lastMovementDate: string
    }>
  }
}

export type GetChargeItemSubjectsByYearQueryVariables = Types.Exact<{
  input: Types.GetChargeItemSubjectsByYearInput
}>

export type GetChargeItemSubjectsByYearQuery = {
  __typename?: 'Query'
  getChargeItemSubjectsByYear: {
    __typename?: 'FinanceChargeItemSubjectsByYear'
    more?: boolean | null
    nextKey?: string | null
    chargeItemSubjects: Array<{
      __typename?: 'FinanceChargeItemSubjectsByYearData'
      chargeItemSubject: string
      lastMoveDate: string
      totalAmount: number
      periods: Array<{
        __typename?: 'FinanceChargeItemSubjectsByYearPeriodData'
        period: string
        description: string
        lastMoveDate: string
        amount: string
      }>
    }>
  }
}

export type GetChargeTypePeriodSubjectQueryVariables = Types.Exact<{
  input: Types.GetChargeTypePeriodSubjectInput
}>

export type GetChargeTypePeriodSubjectQuery = {
  __typename?: 'Query'
  getChargeTypePeriodSubject: {
    __typename?: 'FinanceChargeTypePeriodSubject'
    message?: string | null
    nextKey?: string | null
    more?: boolean | null
    records: Array<{
      __typename?: 'FinanceChargeTypePeriodSubjectData'
      createDate: string
      createTime: string
      valueDate: string
      performingOrganization: string
      collectingOrganization: string
      chargeType: string
      itemCode: string
      chargeItemSubject: string
      periodType: string
      period: string
      amount: number
      category: string
      subCategory: string
      actionCategory: string
      reference: string
      referenceToLevy: string
      accountReference: string
    }>
  }
}

export const GetAssessmentYearsDocument = gql`
  query getAssessmentYears {
    getAssessmentYears {
      year
    }
  }
`

/**
 * __useGetAssessmentYearsQuery__
 *
 * To run a query within a React component, call `useGetAssessmentYearsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAssessmentYearsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAssessmentYearsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAssessmentYearsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAssessmentYearsQuery,
    GetAssessmentYearsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetAssessmentYearsQuery,
    GetAssessmentYearsQueryVariables
  >(GetAssessmentYearsDocument, options)
}
export function useGetAssessmentYearsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAssessmentYearsQuery,
    GetAssessmentYearsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetAssessmentYearsQuery,
    GetAssessmentYearsQueryVariables
  >(GetAssessmentYearsDocument, options)
}
export type GetAssessmentYearsQueryHookResult = ReturnType<
  typeof useGetAssessmentYearsQuery
>
export type GetAssessmentYearsLazyQueryHookResult = ReturnType<
  typeof useGetAssessmentYearsLazyQuery
>
export type GetAssessmentYearsQueryResult = Apollo.QueryResult<
  GetAssessmentYearsQuery,
  GetAssessmentYearsQueryVariables
>
export const GetChargeTypesByYearDocument = gql`
  query GetChargeTypesByYear($input: GetChargeTypesByYearInput!) {
    getChargeTypesByYear(input: $input) {
      chargeType {
        iD
        name
      }
    }
  }
`

/**
 * __useGetChargeTypesByYearQuery__
 *
 * To run a query within a React component, call `useGetChargeTypesByYearQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChargeTypesByYearQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChargeTypesByYearQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetChargeTypesByYearQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetChargeTypesByYearQuery,
    GetChargeTypesByYearQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetChargeTypesByYearQuery,
    GetChargeTypesByYearQueryVariables
  >(GetChargeTypesByYearDocument, options)
}
export function useGetChargeTypesByYearLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetChargeTypesByYearQuery,
    GetChargeTypesByYearQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetChargeTypesByYearQuery,
    GetChargeTypesByYearQueryVariables
  >(GetChargeTypesByYearDocument, options)
}
export type GetChargeTypesByYearQueryHookResult = ReturnType<
  typeof useGetChargeTypesByYearQuery
>
export type GetChargeTypesByYearLazyQueryHookResult = ReturnType<
  typeof useGetChargeTypesByYearLazyQuery
>
export type GetChargeTypesByYearQueryResult = Apollo.QueryResult<
  GetChargeTypesByYearQuery,
  GetChargeTypesByYearQueryVariables
>
export const GetChargeTypesDetailsByYearDocument = gql`
  query GetChargeTypesDetailsByYear($input: GetChargeTypesDetailsByYearInput!) {
    getChargeTypesDetailsByYear(input: $input) {
      chargeType {
        iD
        name
        chargeItemSubjects
        chargeItemSubjectDescription
        lastMovementDate
      }
    }
  }
`

/**
 * __useGetChargeTypesDetailsByYearQuery__
 *
 * To run a query within a React component, call `useGetChargeTypesDetailsByYearQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChargeTypesDetailsByYearQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChargeTypesDetailsByYearQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetChargeTypesDetailsByYearQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetChargeTypesDetailsByYearQuery,
    GetChargeTypesDetailsByYearQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetChargeTypesDetailsByYearQuery,
    GetChargeTypesDetailsByYearQueryVariables
  >(GetChargeTypesDetailsByYearDocument, options)
}
export function useGetChargeTypesDetailsByYearLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetChargeTypesDetailsByYearQuery,
    GetChargeTypesDetailsByYearQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetChargeTypesDetailsByYearQuery,
    GetChargeTypesDetailsByYearQueryVariables
  >(GetChargeTypesDetailsByYearDocument, options)
}
export type GetChargeTypesDetailsByYearQueryHookResult = ReturnType<
  typeof useGetChargeTypesDetailsByYearQuery
>
export type GetChargeTypesDetailsByYearLazyQueryHookResult = ReturnType<
  typeof useGetChargeTypesDetailsByYearLazyQuery
>
export type GetChargeTypesDetailsByYearQueryResult = Apollo.QueryResult<
  GetChargeTypesDetailsByYearQuery,
  GetChargeTypesDetailsByYearQueryVariables
>
export const GetChargeItemSubjectsByYearDocument = gql`
  query GetChargeItemSubjectsByYear($input: GetChargeItemSubjectsByYearInput!) {
    getChargeItemSubjectsByYear(input: $input) {
      chargeItemSubjects {
        chargeItemSubject
        lastMoveDate
        totalAmount
        periods {
          period
          description
          lastMoveDate
          amount
        }
      }
      more
      nextKey
    }
  }
`

/**
 * __useGetChargeItemSubjectsByYearQuery__
 *
 * To run a query within a React component, call `useGetChargeItemSubjectsByYearQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChargeItemSubjectsByYearQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChargeItemSubjectsByYearQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetChargeItemSubjectsByYearQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetChargeItemSubjectsByYearQuery,
    GetChargeItemSubjectsByYearQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetChargeItemSubjectsByYearQuery,
    GetChargeItemSubjectsByYearQueryVariables
  >(GetChargeItemSubjectsByYearDocument, options)
}
export function useGetChargeItemSubjectsByYearLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetChargeItemSubjectsByYearQuery,
    GetChargeItemSubjectsByYearQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetChargeItemSubjectsByYearQuery,
    GetChargeItemSubjectsByYearQueryVariables
  >(GetChargeItemSubjectsByYearDocument, options)
}
export type GetChargeItemSubjectsByYearQueryHookResult = ReturnType<
  typeof useGetChargeItemSubjectsByYearQuery
>
export type GetChargeItemSubjectsByYearLazyQueryHookResult = ReturnType<
  typeof useGetChargeItemSubjectsByYearLazyQuery
>
export type GetChargeItemSubjectsByYearQueryResult = Apollo.QueryResult<
  GetChargeItemSubjectsByYearQuery,
  GetChargeItemSubjectsByYearQueryVariables
>
export const GetChargeTypePeriodSubjectDocument = gql`
  query GetChargeTypePeriodSubject($input: GetChargeTypePeriodSubjectInput!) {
    getChargeTypePeriodSubject(input: $input) {
      message
      nextKey
      more
      records {
        createDate
        createTime
        valueDate
        performingOrganization
        collectingOrganization
        chargeType
        itemCode
        chargeItemSubject
        periodType
        period
        amount
        category
        subCategory
        actionCategory
        reference
        referenceToLevy
        accountReference
      }
    }
  }
`

/**
 * __useGetChargeTypePeriodSubjectQuery__
 *
 * To run a query within a React component, call `useGetChargeTypePeriodSubjectQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChargeTypePeriodSubjectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChargeTypePeriodSubjectQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetChargeTypePeriodSubjectQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetChargeTypePeriodSubjectQuery,
    GetChargeTypePeriodSubjectQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetChargeTypePeriodSubjectQuery,
    GetChargeTypePeriodSubjectQueryVariables
  >(GetChargeTypePeriodSubjectDocument, options)
}
export function useGetChargeTypePeriodSubjectLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetChargeTypePeriodSubjectQuery,
    GetChargeTypePeriodSubjectQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetChargeTypePeriodSubjectQuery,
    GetChargeTypePeriodSubjectQueryVariables
  >(GetChargeTypePeriodSubjectDocument, options)
}
export type GetChargeTypePeriodSubjectQueryHookResult = ReturnType<
  typeof useGetChargeTypePeriodSubjectQuery
>
export type GetChargeTypePeriodSubjectLazyQueryHookResult = ReturnType<
  typeof useGetChargeTypePeriodSubjectLazyQuery
>
export type GetChargeTypePeriodSubjectQueryResult = Apollo.QueryResult<
  GetChargeTypePeriodSubjectQuery,
  GetChargeTypePeriodSubjectQueryVariables
>
