import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetIntellectualPropertiesTrademarkByIdQueryVariables = Types.Exact<{
  input: Types.IntellectualPropertiesInput
}>

export type GetIntellectualPropertiesTrademarkByIdQuery = {
  __typename?: 'Query'
  intellectualPropertiesTrademark?: {
    __typename?: 'IntellectualPropertiesTrademark'
    id: string
    text?: string | null
    type?: Types.TrademarkType | null
    typeReadable?: string | null
    subType?: Types.TrademarkSubType | null
    status?: string | null
    canRenew?: boolean | null
    applicationNumber?: string | null
    registrationNumber?: string | null
    imageCategories?: string | null
    isColorMark?: boolean | null
    lifecycle: {
      __typename?: 'IntellectualPropertiesApplicationLifecycle'
      applicationDate?: string | null
      publishDate?: string | null
      registrationDate?: string | null
      expiryDate?: string | null
      maxValidObjectionDate?: string | null
    }
    media?: {
      __typename?: 'IntellectualPropertiesMedia'
      mediaType?: string | null
      mediaPath?: string | null
    } | null
    markOwners?: Array<{
      __typename?: 'IntellectualPropertiesPerson'
      name?: string | null
      addressFull?: string | null
    }> | null
    markAgent?: {
      __typename?: 'IntellectualPropertiesPerson'
      name?: string | null
      addressFull?: string | null
    } | null
    markCategories?: Array<{
      __typename?: 'IntellectualPropertiesCategory'
      categoryNumber?: string | null
      categoryDescription?: string | null
    }> | null
  } | null
}

export const GetIntellectualPropertiesTrademarkByIdDocument = gql`
  query getIntellectualPropertiesTrademarkById(
    $input: IntellectualPropertiesInput!
  ) {
    intellectualPropertiesTrademark(input: $input) {
      id
      text
      type
      typeReadable
      subType
      status
      canRenew
      applicationNumber
      registrationNumber
      lifecycle {
        applicationDate
        publishDate
        registrationDate
        expiryDate
        maxValidObjectionDate
      }
      imageCategories
      isColorMark
      media {
        mediaType
        mediaPath
      }
      markOwners {
        name
        addressFull
      }
      markAgent {
        name
        addressFull
      }
      markCategories {
        categoryNumber
        categoryDescription
      }
    }
  }
`

/**
 * __useGetIntellectualPropertiesTrademarkByIdQuery__
 *
 * To run a query within a React component, call `useGetIntellectualPropertiesTrademarkByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIntellectualPropertiesTrademarkByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetIntellectualPropertiesTrademarkByIdQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetIntellectualPropertiesTrademarkByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetIntellectualPropertiesTrademarkByIdQuery,
    GetIntellectualPropertiesTrademarkByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetIntellectualPropertiesTrademarkByIdQuery,
    GetIntellectualPropertiesTrademarkByIdQueryVariables
  >(GetIntellectualPropertiesTrademarkByIdDocument, options)
}
export function useGetIntellectualPropertiesTrademarkByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetIntellectualPropertiesTrademarkByIdQuery,
    GetIntellectualPropertiesTrademarkByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetIntellectualPropertiesTrademarkByIdQuery,
    GetIntellectualPropertiesTrademarkByIdQueryVariables
  >(GetIntellectualPropertiesTrademarkByIdDocument, options)
}
export type GetIntellectualPropertiesTrademarkByIdQueryHookResult = ReturnType<
  typeof useGetIntellectualPropertiesTrademarkByIdQuery
>
export type GetIntellectualPropertiesTrademarkByIdLazyQueryHookResult = ReturnType<
  typeof useGetIntellectualPropertiesTrademarkByIdLazyQuery
>
export type GetIntellectualPropertiesTrademarkByIdQueryResult = Apollo.QueryResult<
  GetIntellectualPropertiesTrademarkByIdQuery,
  GetIntellectualPropertiesTrademarkByIdQueryVariables
>
