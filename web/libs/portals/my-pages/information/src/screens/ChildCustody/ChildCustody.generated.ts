import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type NationalRegistryChildCustodyQueryVariables = Types.Exact<{
  childNationalId?: Types.InputMaybe<Types.Scalars['String']>
  useFakeData?: Types.InputMaybe<Types.Scalars['Boolean']>
}>

export type NationalRegistryChildCustodyQuery = {
  __typename?: 'Query'
  nationalRegistryPerson?: {
    __typename?: 'NationalRegistryPerson'
    nationalId: string
    fullName?: string | null
    childCustody?: Array<{
      __typename: 'NationalRegistryChildCustody'
      details?: {
        __typename: 'NationalRegistryPerson'
        nationalId: string
        fullName?: string | null
        baseId?: string | null
        gender?: Types.NationalRegistryGender | null
        religion?: string | null
        name?: {
          __typename?: 'NationalRegistryName'
          firstName?: string | null
          middleName?: string | null
          lastName?: string | null
        } | null
        housing?: {
          __typename?: 'NationalRegistryHousing'
          address?: {
            __typename?: 'NationalRegistryAddress'
            streetAddress?: string | null
            postalCode?: string | null
            city?: string | null
          } | null
        } | null
        custodians?: Array<{
          __typename?: 'NationalRegistryCustodian'
          fullName?: string | null
          nationalId: string
          text?: string | null
        }> | null
        birthplace?: {
          __typename?: 'NationalRegistryBirthplace'
          location?: string | null
        } | null
        citizenship?: {
          __typename?: 'NationalRegistryCitizenship'
          code: string
          name: string
        } | null
      } | null
    }> | null
  } | null
}

export const NationalRegistryChildCustodyDocument = gql`
  query NationalRegistryChildCustody(
    $childNationalId: String
    $useFakeData: Boolean
  ) {
    nationalRegistryPerson(useFakeData: $useFakeData) {
      nationalId
      fullName
      childCustody(childNationalId: $childNationalId) {
        __typename
        details {
          nationalId
          fullName
          baseId
          __typename
          name {
            firstName
            middleName
            lastName
          }
          gender
          religion
          housing {
            address {
              streetAddress
              postalCode
              city
            }
          }
          custodians {
            fullName
            nationalId
            text
          }
          birthplace {
            location
          }
          citizenship {
            code
            name
          }
        }
      }
    }
  }
`

/**
 * __useNationalRegistryChildCustodyQuery__
 *
 * To run a query within a React component, call `useNationalRegistryChildCustodyQuery` and pass it any options that fit your needs.
 * When your component renders, `useNationalRegistryChildCustodyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNationalRegistryChildCustodyQuery({
 *   variables: {
 *      childNationalId: // value for 'childNationalId'
 *      useFakeData: // value for 'useFakeData'
 *   },
 * });
 */
export function useNationalRegistryChildCustodyQuery(
  baseOptions?: Apollo.QueryHookOptions<
    NationalRegistryChildCustodyQuery,
    NationalRegistryChildCustodyQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    NationalRegistryChildCustodyQuery,
    NationalRegistryChildCustodyQueryVariables
  >(NationalRegistryChildCustodyDocument, options)
}
export function useNationalRegistryChildCustodyLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    NationalRegistryChildCustodyQuery,
    NationalRegistryChildCustodyQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    NationalRegistryChildCustodyQuery,
    NationalRegistryChildCustodyQueryVariables
  >(NationalRegistryChildCustodyDocument, options)
}
export type NationalRegistryChildCustodyQueryHookResult = ReturnType<
  typeof useNationalRegistryChildCustodyQuery
>
export type NationalRegistryChildCustodyLazyQueryHookResult = ReturnType<
  typeof useNationalRegistryChildCustodyLazyQuery
>
export type NationalRegistryChildCustodyQueryResult = Apollo.QueryResult<
  NationalRegistryChildCustodyQuery,
  NationalRegistryChildCustodyQueryVariables
>
