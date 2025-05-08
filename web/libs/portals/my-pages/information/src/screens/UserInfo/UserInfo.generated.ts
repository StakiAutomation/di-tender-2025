import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type NationalRegistryPersonQueryVariables = Types.Exact<{
  useFakeData?: Types.InputMaybe<Types.Scalars['Boolean']>
}>

export type NationalRegistryPersonQuery = {
  __typename?: 'Query'
  nationalRegistryPerson?: {
    __typename?: 'NationalRegistryPerson'
    nationalId: string
    gender?: Types.NationalRegistryGender | null
    exceptionFromDirectMarketing?: boolean | null
    religion?: string | null
    maritalStatus?: Types.NationalRegistryMaritalStatus | null
    name?: {
      __typename?: 'NationalRegistryName'
      firstName?: string | null
      middleName?: string | null
      lastName?: string | null
      fullName?: string | null
    } | null
    citizenship?: {
      __typename?: 'NationalRegistryCitizenship'
      code: string
      name: string
    } | null
    birthplace?: {
      __typename?: 'NationalRegistryBirthplace'
      location?: string | null
    } | null
    spouse?: {
      __typename?: 'NationalRegistrySpouse'
      nationalId: string
      fullName?: string | null
    } | null
    housing?: {
      __typename?: 'NationalRegistryHousing'
      domicileId: string
      domicileInhabitants?: Array<{
        __typename?: 'NationalRegistryPersonBase'
        nationalId: string
        fullName?: string | null
      }> | null
      address?: {
        __typename?: 'NationalRegistryAddress'
        streetAddress?: string | null
        postalCode?: string | null
        city?: string | null
      } | null
    } | null
  } | null
}

export const NationalRegistryPersonDocument = gql`
  query NationalRegistryPerson($useFakeData: Boolean) {
    nationalRegistryPerson(useFakeData: $useFakeData) {
      nationalId
      gender
      exceptionFromDirectMarketing
      religion
      name {
        firstName
        middleName
        lastName
        fullName
      }
      maritalStatus
      citizenship {
        code
        name
      }
      birthplace {
        location
      }
      spouse {
        nationalId
        fullName
      }
      housing {
        domicileId
        domicileInhabitants {
          nationalId
          fullName
        }
        address {
          streetAddress
          postalCode
          city
        }
      }
    }
  }
`

/**
 * __useNationalRegistryPersonQuery__
 *
 * To run a query within a React component, call `useNationalRegistryPersonQuery` and pass it any options that fit your needs.
 * When your component renders, `useNationalRegistryPersonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNationalRegistryPersonQuery({
 *   variables: {
 *      useFakeData: // value for 'useFakeData'
 *   },
 * });
 */
export function useNationalRegistryPersonQuery(
  baseOptions?: Apollo.QueryHookOptions<
    NationalRegistryPersonQuery,
    NationalRegistryPersonQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    NationalRegistryPersonQuery,
    NationalRegistryPersonQueryVariables
  >(NationalRegistryPersonDocument, options)
}
export function useNationalRegistryPersonLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    NationalRegistryPersonQuery,
    NationalRegistryPersonQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    NationalRegistryPersonQuery,
    NationalRegistryPersonQueryVariables
  >(NationalRegistryPersonDocument, options)
}
export type NationalRegistryPersonQueryHookResult = ReturnType<
  typeof useNationalRegistryPersonQuery
>
export type NationalRegistryPersonLazyQueryHookResult = ReturnType<
  typeof useNationalRegistryPersonLazyQuery
>
export type NationalRegistryPersonQueryResult = Apollo.QueryResult<
  NationalRegistryPersonQuery,
  NationalRegistryPersonQueryVariables
>
