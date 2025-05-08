import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GenericLicenseCollectionQueryVariables = Types.Exact<{
  input: Types.GetGenericLicensesInput
  locale: Types.Scalars['String']
}>

export type GenericLicenseCollectionQuery = {
  __typename?: 'Query'
  genericLicenseCollection: {
    __typename?: 'GenericLicenseCollection'
    licenses?: Array<{
      __typename: 'GenericUserLicense'
      nationalId: string
      isOwnerChildOfUser?: boolean | null
      fetch: {
        __typename?: 'GenericLicenseFetch'
        status: Types.GenericUserLicenseFetchStatus
        updated: string
      }
      license: {
        __typename?: 'GenericLicense'
        type: Types.GenericLicenseType
        pkpass: boolean
        pkpassVerify: boolean
        status: Types.GenericUserLicenseStatus
        pkpassStatus: Types.GenericUserLicensePkPassStatus
        provider: {
          __typename?: 'GenericLicenseProvider'
          id: Types.GenericLicenseProviderId
          referenceId?: string | null
          providerName?: string | null
          providerLogo?: string | null
        }
      }
      payload?: {
        __typename?: 'Payload'
        data: Array<{
          __typename?: 'GenericLicenseDataField'
          type: Types.GenericLicenseDataFieldType
        }>
        metadata: {
          __typename?: 'GenericUserLicenseMetadata'
          licenseId?: string | null
          licenseNumber?: string | null
          subtitle?: string | null
          expiryStatus?: Types.GenericUserLicenseExpiryStatus | null
          title?: string | null
          name?: string | null
          displayTag?: {
            __typename?: 'GenericUserLicenseMetaTag'
            text: string
            color?: string | null
          } | null
          ctaLink?: {
            __typename?: 'GenericUserLicenseMetaLinks'
            value?: string | null
            label?: string | null
          } | null
        }
      } | null
    }> | null
    errors?: Array<{
      __typename: 'GenericLicenseError'
      type: Types.GenericLicenseType
      code?: number | null
      message?: string | null
      extraData?: string | null
      provider?: {
        __typename?: 'GenericLicenseProvider'
        id: Types.GenericLicenseProviderId
        providerName?: string | null
      } | null
      fetch: {
        __typename?: 'GenericLicenseFetch'
        status: Types.GenericUserLicenseFetchStatus
        updated: string
      }
    }> | null
  }
}

export const GenericLicenseCollectionDocument = gql`
  query GenericLicenseCollection(
    $input: GetGenericLicensesInput!
    $locale: String!
  ) {
    genericLicenseCollection(input: $input, locale: $locale) {
      licenses {
        __typename
        nationalId
        isOwnerChildOfUser
        fetch {
          status
          updated
        }
        license {
          type
          provider {
            id
            referenceId
            providerName
            providerLogo
          }
          pkpass
          pkpassVerify
          status
          pkpassStatus
        }
        payload {
          data {
            type
          }
          metadata {
            licenseId
            licenseNumber
            subtitle
            displayTag {
              text
              color
            }
            expiryStatus
            ctaLink {
              value
              label
            }
            title
            name
          }
        }
      }
      errors {
        __typename
        type
        provider {
          id
          providerName
        }
        fetch {
          status
          updated
        }
        code
        message
        extraData
      }
    }
  }
`

/**
 * __useGenericLicenseCollectionQuery__
 *
 * To run a query within a React component, call `useGenericLicenseCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGenericLicenseCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGenericLicenseCollectionQuery({
 *   variables: {
 *      input: // value for 'input'
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGenericLicenseCollectionQuery(
  baseOptions: Apollo.QueryHookOptions<
    GenericLicenseCollectionQuery,
    GenericLicenseCollectionQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GenericLicenseCollectionQuery,
    GenericLicenseCollectionQueryVariables
  >(GenericLicenseCollectionDocument, options)
}
export function useGenericLicenseCollectionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GenericLicenseCollectionQuery,
    GenericLicenseCollectionQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GenericLicenseCollectionQuery,
    GenericLicenseCollectionQueryVariables
  >(GenericLicenseCollectionDocument, options)
}
export type GenericLicenseCollectionQueryHookResult = ReturnType<
  typeof useGenericLicenseCollectionQuery
>
export type GenericLicenseCollectionLazyQueryHookResult = ReturnType<
  typeof useGenericLicenseCollectionLazyQuery
>
export type GenericLicenseCollectionQueryResult = Apollo.QueryResult<
  GenericLicenseCollectionQuery,
  GenericLicenseCollectionQueryVariables
>
