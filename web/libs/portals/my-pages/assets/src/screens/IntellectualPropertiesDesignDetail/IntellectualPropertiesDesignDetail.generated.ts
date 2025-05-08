import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetIntellectualPropertiesDesignQueryVariables = Types.Exact<{
  input: Types.IntellectualPropertiesInput
}>

export type GetIntellectualPropertiesDesignQuery = {
  __typename?: 'Query'
  intellectualPropertiesDesign?: {
    __typename?: 'IntellectualPropertiesDesign'
    applicationNumber?: string | null
    status?: string | null
    canRenew?: boolean | null
    specification?: {
      __typename?: 'IntellectualPropertiesSpecification'
      description?: string | null
      specificationText?: string | null
    } | null
    lifecycle: {
      __typename?: 'IntellectualPropertiesApplicationLifecycle'
      publishDate?: string | null
      applicationDate?: string | null
      registrationDate?: string | null
      internationalRegistrationDate?: string | null
      expiryDate?: string | null
    }
    classification?: Array<{
      __typename?: 'IntellectualPropertiesClassification'
      category: string
    }> | null
    owners?: Array<{
      __typename?: 'IntellectualPropertiesPerson'
      name?: string | null
      address?: string | null
    }> | null
    designers?: Array<{
      __typename?: 'IntellectualPropertiesPerson'
      name?: string | null
    }> | null
    agent?: {
      __typename?: 'IntellectualPropertiesPerson'
      name?: string | null
      address?: string | null
    } | null
  } | null
  intellectualPropertiesDesignImageList?: {
    __typename?: 'IntellectualPropertiesImageList'
    images: Array<{
      __typename?: 'IntellectualPropertiesImage'
      designNumber?: number | null
      imageNumber?: number | null
      image?: string | null
    }>
  } | null
}

export const GetIntellectualPropertiesDesignDocument = gql`
  query getIntellectualPropertiesDesign($input: IntellectualPropertiesInput!) {
    intellectualPropertiesDesign(input: $input) {
      specification {
        description
        specificationText
      }
      applicationNumber
      status
      canRenew
      lifecycle {
        publishDate
        applicationDate
        registrationDate
        internationalRegistrationDate
        expiryDate
      }
      classification {
        category
      }
      status
      owners {
        name
        address
      }
      designers {
        name
      }
      agent {
        name
        address
      }
    }
    intellectualPropertiesDesignImageList(input: $input) {
      images {
        designNumber
        imageNumber
        image
      }
    }
  }
`

/**
 * __useGetIntellectualPropertiesDesignQuery__
 *
 * To run a query within a React component, call `useGetIntellectualPropertiesDesignQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIntellectualPropertiesDesignQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetIntellectualPropertiesDesignQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetIntellectualPropertiesDesignQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetIntellectualPropertiesDesignQuery,
    GetIntellectualPropertiesDesignQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetIntellectualPropertiesDesignQuery,
    GetIntellectualPropertiesDesignQueryVariables
  >(GetIntellectualPropertiesDesignDocument, options)
}
export function useGetIntellectualPropertiesDesignLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetIntellectualPropertiesDesignQuery,
    GetIntellectualPropertiesDesignQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetIntellectualPropertiesDesignQuery,
    GetIntellectualPropertiesDesignQueryVariables
  >(GetIntellectualPropertiesDesignDocument, options)
}
export type GetIntellectualPropertiesDesignQueryHookResult = ReturnType<
  typeof useGetIntellectualPropertiesDesignQuery
>
export type GetIntellectualPropertiesDesignLazyQueryHookResult = ReturnType<
  typeof useGetIntellectualPropertiesDesignLazyQuery
>
export type GetIntellectualPropertiesDesignQueryResult = Apollo.QueryResult<
  GetIntellectualPropertiesDesignQuery,
  GetIntellectualPropertiesDesignQueryVariables
>
