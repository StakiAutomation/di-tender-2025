import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type NationalRegistryBioChildQueryVariables = Types.Exact<{
  childNationalId?: Types.InputMaybe<Types.Scalars['String']>
  useFakeData?: Types.InputMaybe<Types.Scalars['Boolean']>
}>

export type NationalRegistryBioChildQuery = {
  __typename?: 'Query'
  nationalRegistryPerson?: {
    __typename?: 'NationalRegistryPerson'
    nationalId: string
    fullName?: string | null
    biologicalChildren?: Array<{
      __typename: 'NationalRegistryChildCustody'
      details?: {
        __typename: 'NationalRegistryPerson'
        nationalId: string
        fullName?: string | null
        baseId?: string | null
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
          } | null
        } | null
        birthParents?: Array<{
          __typename?: 'NationalRegistryPersonBase'
          nationalId: string
        }> | null
      } | null
    }> | null
  } | null
}

export const NationalRegistryBioChildDocument = gql`
  query NationalRegistryBioChild(
    $childNationalId: String
    $useFakeData: Boolean
  ) {
    nationalRegistryPerson(useFakeData: $useFakeData) {
      nationalId
      fullName
      biologicalChildren(childNationalId: $childNationalId) {
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
          housing {
            address {
              streetAddress
            }
          }
          birthParents {
            nationalId
          }
        }
      }
    }
  }
`

/**
 * __useNationalRegistryBioChildQuery__
 *
 * To run a query within a React component, call `useNationalRegistryBioChildQuery` and pass it any options that fit your needs.
 * When your component renders, `useNationalRegistryBioChildQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNationalRegistryBioChildQuery({
 *   variables: {
 *      childNationalId: // value for 'childNationalId'
 *      useFakeData: // value for 'useFakeData'
 *   },
 * });
 */
export function useNationalRegistryBioChildQuery(
  baseOptions?: Apollo.QueryHookOptions<
    NationalRegistryBioChildQuery,
    NationalRegistryBioChildQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    NationalRegistryBioChildQuery,
    NationalRegistryBioChildQueryVariables
  >(NationalRegistryBioChildDocument, options)
}
export function useNationalRegistryBioChildLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    NationalRegistryBioChildQuery,
    NationalRegistryBioChildQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    NationalRegistryBioChildQuery,
    NationalRegistryBioChildQueryVariables
  >(NationalRegistryBioChildDocument, options)
}
export type NationalRegistryBioChildQueryHookResult = ReturnType<
  typeof useNationalRegistryBioChildQuery
>
export type NationalRegistryBioChildLazyQueryHookResult = ReturnType<
  typeof useNationalRegistryBioChildLazyQuery
>
export type NationalRegistryBioChildQueryResult = Apollo.QueryResult<
  NationalRegistryBioChildQuery,
  NationalRegistryBioChildQueryVariables
>
