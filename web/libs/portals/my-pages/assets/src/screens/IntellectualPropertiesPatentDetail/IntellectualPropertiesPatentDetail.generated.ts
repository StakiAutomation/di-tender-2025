import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetIntellectualPropertiesPatentByIdQueryVariables = Types.Exact<{
  input: Types.IntellectualPropertiesInput
}>

export type GetIntellectualPropertiesPatentByIdQuery = {
  __typename?: 'Query'
  intellectualPropertiesPatent?:
    | {
        __typename: 'IntellectualPropertiesPatentEP'
        applicationNumber?: string | null
        id: string
        name: string
        nameInOrgLanguage?: string | null
        statusText?: string | null
        epApplicationNumber?: string | null
        spcNumbers?: Array<string> | null
        language?: string | null
        classifications?: Array<{
          __typename?: 'IntellectualPropertiesClassification'
          category: string
        }> | null
        pct?: {
          __typename?: 'IntellectualPropertiesPCT'
          number?: string | null
          date?: string | null
        } | null
        priorities?: Array<{
          __typename?: 'IntellectualPropertiesPriority'
          number?: string | null
          countryName?: string | null
          countryCode?: string | null
          applicationDate?: string | null
        }> | null
        lifecycle?: {
          __typename?: 'IntellectualPropertiesApplicationLifecycle'
          applicationDate?: string | null
          expiryDate?: string | null
          maxValidDate?: string | null
        } | null
        owners?: Array<{
          __typename: 'IntellectualPropertiesPerson'
          name?: string | null
          addressFull?: string | null
        }> | null
        inventors?: Array<{
          __typename: 'IntellectualPropertiesPerson'
          name?: string | null
          addressFull?: string | null
        }> | null
        epLifecycle?: {
          __typename?: 'IntellectualPropertiesEPApplicationLifecycle'
          publishDate?: string | null
          applicationDate?: string | null
          translationSubmissionDate?: string | null
          provisionDatePublishedInGazette?: string | null
        } | null
      }
    | {
        __typename: 'IntellectualPropertiesPatentIS'
        id: string
        name: string
        statusText?: string | null
        registrationNumber?: string | null
        classifications?: Array<{
          __typename?: 'IntellectualPropertiesClassification'
          category: string
        }> | null
        pct?: {
          __typename?: 'IntellectualPropertiesPCT'
          number?: string | null
          date?: string | null
        } | null
        lifecycle?: {
          __typename?: 'IntellectualPropertiesApplicationLifecycle'
          applicationDate?: string | null
          registrationDate?: string | null
          publishDate?: string | null
          maxValidObjectionDate?: string | null
          expiryDate?: string | null
          maxValidDate?: string | null
        } | null
        owners?: Array<{
          __typename: 'IntellectualPropertiesPerson'
          name?: string | null
          addressFull?: string | null
        }> | null
        inventors?: Array<{
          __typename: 'IntellectualPropertiesPerson'
          name?: string | null
          addressFull?: string | null
        }> | null
        agent?: {
          __typename: 'IntellectualPropertiesPerson'
          name?: string | null
          addressFull?: string | null
        } | null
        priorities?: Array<{
          __typename?: 'IntellectualPropertiesPriority'
          applicationDate?: string | null
          number?: string | null
          countryName?: string | null
          countryCode?: string | null
        }> | null
      }
    | {
        __typename: 'IntellectualPropertiesSPC'
        applicationNumber?: string | null
        number: string
        id: string
        name: string
        status?: string | null
        medicine?: string | null
        medicineForChildren?: boolean | null
        grantPublishedInGazetteDate?: string | null
        publishedInGazetteDate?: string | null
        lifecycle?: {
          __typename?: 'IntellectualPropertiesApplicationLifecycle'
          applicationDate?: string | null
          maxValidDate?: string | null
        } | null
        owners?: Array<{
          __typename: 'IntellectualPropertiesPerson'
          name?: string | null
          addressFull?: string | null
        }> | null
        agent?: {
          __typename: 'IntellectualPropertiesPerson'
          name?: string | null
          addressFull?: string | null
        } | null
        marketingAuthorization?: {
          __typename?: 'IntellectualPropertiesMarketingAuthorization'
          foreignAuthorizationNumber?: string | null
          foreignAuthorizationDate?: string | null
          icelandicAuthorizationNumber?: string | null
          icelandicAuthorizationDate?: string | null
        } | null
      }
    | null
}

export type PersonFragmentFragment = {
  __typename: 'IntellectualPropertiesPerson'
  name?: string | null
  addressFull?: string | null
}

export const PersonFragmentFragmentDoc = gql`
  fragment PersonFragment on IntellectualPropertiesPerson {
    __typename
    name
    addressFull
  }
`
export const GetIntellectualPropertiesPatentByIdDocument = gql`
  query getIntellectualPropertiesPatentById(
    $input: IntellectualPropertiesInput!
  ) {
    intellectualPropertiesPatent(input: $input) {
      ... on IntellectualPropertiesPatentIS {
        __typename
        id
        classifications {
          category
        }
        name
        statusText
        registrationNumber
        pct {
          number
          date
        }
        lifecycle {
          applicationDate
          registrationDate
          publishDate
          maxValidObjectionDate
          expiryDate
          maxValidDate
        }
        owners {
          ...PersonFragment
        }
        inventors {
          ...PersonFragment
        }
        agent {
          ...PersonFragment
        }
        priorities {
          applicationDate
          number
          countryName
          countryCode
        }
      }
      ... on IntellectualPropertiesPatentEP {
        __typename
        applicationNumber
        id
        classifications {
          category
        }
        name
        nameInOrgLanguage
        statusText
        pct {
          number
          date
        }
        priorities {
          number
          countryName
          countryCode
          applicationDate
        }
        lifecycle {
          applicationDate
          expiryDate
          maxValidDate
        }
        owners {
          ...PersonFragment
        }
        inventors {
          ...PersonFragment
        }
        epApplicationNumber
        spcNumbers
        epLifecycle {
          publishDate
          applicationDate
          translationSubmissionDate
          provisionDatePublishedInGazette
        }
        language
      }
      ... on IntellectualPropertiesSPC {
        __typename
        applicationNumber
        number
        id
        name
        status
        lifecycle {
          applicationDate
          maxValidDate
        }
        owners {
          ...PersonFragment
        }
        agent {
          ...PersonFragment
        }
        medicine
        medicineForChildren
        marketingAuthorization {
          foreignAuthorizationNumber
          foreignAuthorizationDate
          icelandicAuthorizationNumber
          icelandicAuthorizationDate
        }
        grantPublishedInGazetteDate
        publishedInGazetteDate
      }
    }
  }
  ${PersonFragmentFragmentDoc}
`

/**
 * __useGetIntellectualPropertiesPatentByIdQuery__
 *
 * To run a query within a React component, call `useGetIntellectualPropertiesPatentByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIntellectualPropertiesPatentByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetIntellectualPropertiesPatentByIdQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetIntellectualPropertiesPatentByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetIntellectualPropertiesPatentByIdQuery,
    GetIntellectualPropertiesPatentByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetIntellectualPropertiesPatentByIdQuery,
    GetIntellectualPropertiesPatentByIdQueryVariables
  >(GetIntellectualPropertiesPatentByIdDocument, options)
}
export function useGetIntellectualPropertiesPatentByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetIntellectualPropertiesPatentByIdQuery,
    GetIntellectualPropertiesPatentByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetIntellectualPropertiesPatentByIdQuery,
    GetIntellectualPropertiesPatentByIdQueryVariables
  >(GetIntellectualPropertiesPatentByIdDocument, options)
}
export type GetIntellectualPropertiesPatentByIdQueryHookResult = ReturnType<
  typeof useGetIntellectualPropertiesPatentByIdQuery
>
export type GetIntellectualPropertiesPatentByIdLazyQueryHookResult = ReturnType<
  typeof useGetIntellectualPropertiesPatentByIdLazyQuery
>
export type GetIntellectualPropertiesPatentByIdQueryResult = Apollo.QueryResult<
  GetIntellectualPropertiesPatentByIdQuery,
  GetIntellectualPropertiesPatentByIdQueryVariables
>
