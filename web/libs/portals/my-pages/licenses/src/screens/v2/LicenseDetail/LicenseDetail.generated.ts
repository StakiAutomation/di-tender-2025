import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GenericLicenseQueryVariables = Types.Exact<{
  input: Types.GetGenericLicenseInput
  locale: Types.Scalars['String']
}>

export type GenericLicenseQuery = {
  __typename?: 'Query'
  genericLicense?: {
    __typename: 'GenericUserLicense'
    nationalId: string
    isOwnerChildOfUser?: boolean | null
    license: {
      __typename?: 'GenericLicense'
      type: Types.GenericLicenseType
      pkpass: boolean
      pkpassVerify: boolean
      pkpassStatus: Types.GenericUserLicensePkPassStatus
    }
    payload?: {
      __typename?: 'Payload'
      data: Array<{
        __typename?: 'GenericLicenseDataField'
        type: Types.GenericLicenseDataFieldType
        name?: string | null
        description?: string | null
        label?: string | null
        value?: string | null
        hideFromServicePortal?: boolean | null
        tag?: {
          __typename?: 'GenericUserLicenseMetaTag'
          text: string
          color?: string | null
          icon?: Types.GenericUserLicenseDataFieldTagType | null
          iconColor?: Types.GenericUserLicenseDataFieldTagColor | null
          iconText?: string | null
        } | null
        link?: {
          __typename?: 'GenericUserLicenseMetaLinks'
          label?: string | null
          value?: string | null
          name?: string | null
          type?: Types.GenericUserLicenseMetaLinksType | null
        } | null
        fields?: Array<{
          __typename?: 'GenericLicenseDataField'
          type: Types.GenericLicenseDataFieldType
          name?: string | null
          label?: string | null
          description?: string | null
          value?: string | null
          hideFromServicePortal?: boolean | null
          tag?: {
            __typename?: 'GenericUserLicenseMetaTag'
            text: string
            color?: string | null
            icon?: Types.GenericUserLicenseDataFieldTagType | null
            iconColor?: Types.GenericUserLicenseDataFieldTagColor | null
            iconText?: string | null
          } | null
          link?: {
            __typename?: 'GenericUserLicenseMetaLinks'
            label?: string | null
            value?: string | null
            name?: string | null
            type?: Types.GenericUserLicenseMetaLinksType | null
          } | null
          fields?: Array<{
            __typename?: 'GenericLicenseDataField'
            type: Types.GenericLicenseDataFieldType
            name?: string | null
            description?: string | null
            label?: string | null
            value?: string | null
            hideFromServicePortal?: boolean | null
            tag?: {
              __typename?: 'GenericUserLicenseMetaTag'
              text: string
              color?: string | null
              icon?: Types.GenericUserLicenseDataFieldTagType | null
              iconColor?: Types.GenericUserLicenseDataFieldTagColor | null
              iconText?: string | null
            } | null
            link?: {
              __typename?: 'GenericUserLicenseMetaLinks'
              label?: string | null
              value?: string | null
              name?: string | null
              type?: Types.GenericUserLicenseMetaLinksType | null
            } | null
          }> | null
        }> | null
      }>
      metadata: {
        __typename?: 'GenericUserLicenseMetadata'
        licenseId?: string | null
        licenseNumber?: string | null
        title?: string | null
        name?: string | null
        expired?: boolean | null
        links?: Array<{
          __typename?: 'GenericUserLicenseMetaLinks'
          label?: string | null
          value?: string | null
          name?: string | null
          type?: Types.GenericUserLicenseMetaLinksType | null
        }> | null
        description?: Array<{
          __typename?: 'GenericUserLicenseMetadataDescription'
          text: string
          linkInText?: string | null
          linkIconType?: Types.GenericUserLicenseMetaLinksType | null
        }> | null
        displayTag?: {
          __typename?: 'GenericUserLicenseMetaTag'
          text: string
          color?: string | null
          icon?: Types.GenericUserLicenseDataFieldTagType | null
          iconColor?: Types.GenericUserLicenseDataFieldTagColor | null
          iconText?: string | null
        } | null
        alert?: {
          __typename?: 'GenericUserLicenseAlert'
          title: string
          type: Types.GenericUserLicenseAlertType
          message?: string | null
        } | null
      }
    } | null
  } | null
}

export const GenericLicenseDocument = gql`
  query GenericLicense($input: GetGenericLicenseInput!, $locale: String!) {
    genericLicense(input: $input, locale: $locale) {
      __typename
      nationalId
      isOwnerChildOfUser
      license {
        type
        pkpass
        pkpassVerify
        pkpassStatus
      }
      payload {
        data {
          type
          name
          description
          label
          value
          tag {
            text
            color
            icon
            iconColor
            iconText
          }
          link {
            label
            value
            name
            type
          }
          hideFromServicePortal
          fields {
            type
            name
            label
            description
            value
            tag {
              text
              color
              icon
              iconColor
              iconText
            }
            link {
              label
              value
              name
              type
            }
            hideFromServicePortal
            fields {
              type
              name
              description
              label
              value
              tag {
                text
                color
                icon
                iconColor
                iconText
              }
              link {
                label
                value
                name
                type
              }
              hideFromServicePortal
            }
          }
        }
        metadata {
          links {
            label
            value
            name
            type
          }
          licenseId
          licenseNumber
          title
          name
          description {
            text
            linkInText
            linkIconType
          }
          displayTag {
            text
            color
            icon
            iconColor
            iconText
          }
          expired
          alert {
            title
            type
            message
          }
        }
      }
    }
  }
`

/**
 * __useGenericLicenseQuery__
 *
 * To run a query within a React component, call `useGenericLicenseQuery` and pass it any options that fit your needs.
 * When your component renders, `useGenericLicenseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGenericLicenseQuery({
 *   variables: {
 *      input: // value for 'input'
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGenericLicenseQuery(
  baseOptions: Apollo.QueryHookOptions<
    GenericLicenseQuery,
    GenericLicenseQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GenericLicenseQuery, GenericLicenseQueryVariables>(
    GenericLicenseDocument,
    options,
  )
}
export function useGenericLicenseLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GenericLicenseQuery,
    GenericLicenseQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GenericLicenseQuery, GenericLicenseQueryVariables>(
    GenericLicenseDocument,
    options,
  )
}
export type GenericLicenseQueryHookResult = ReturnType<
  typeof useGenericLicenseQuery
>
export type GenericLicenseLazyQueryHookResult = ReturnType<
  typeof useGenericLicenseLazyQuery
>
export type GenericLicenseQueryResult = Apollo.QueryResult<
  GenericLicenseQuery,
  GenericLicenseQueryVariables
>
