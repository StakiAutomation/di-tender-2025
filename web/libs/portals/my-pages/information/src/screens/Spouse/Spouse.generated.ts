import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type NationalRegistrySpouseQueryVariables = Types.Exact<{
  [key: string]: never
}>

export type NationalRegistrySpouseQuery = {
  __typename?: 'Query'
  nationalRegistryPerson?: {
    __typename?: 'NationalRegistryPerson'
    nationalId: string
    maritalStatus?: Types.NationalRegistryMaritalStatus | null
    spouse?: {
      __typename?: 'NationalRegistrySpouse'
      maritalStatus?: string | null
      nationalId: string
      cohabitationWithSpouse?: boolean | null
      cohabitant?: string | null
      fullName?: string | null
    } | null
  } | null
}

export const NationalRegistrySpouseDocument = gql`
  query NationalRegistrySpouse {
    nationalRegistryPerson {
      nationalId
      maritalStatus
      spouse {
        maritalStatus
        nationalId
        cohabitationWithSpouse
        cohabitant
        fullName
      }
    }
  }
`

/**
 * __useNationalRegistrySpouseQuery__
 *
 * To run a query within a React component, call `useNationalRegistrySpouseQuery` and pass it any options that fit your needs.
 * When your component renders, `useNationalRegistrySpouseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNationalRegistrySpouseQuery({
 *   variables: {
 *   },
 * });
 */
export function useNationalRegistrySpouseQuery(
  baseOptions?: Apollo.QueryHookOptions<
    NationalRegistrySpouseQuery,
    NationalRegistrySpouseQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    NationalRegistrySpouseQuery,
    NationalRegistrySpouseQueryVariables
  >(NationalRegistrySpouseDocument, options)
}
export function useNationalRegistrySpouseLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    NationalRegistrySpouseQuery,
    NationalRegistrySpouseQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    NationalRegistrySpouseQuery,
    NationalRegistrySpouseQueryVariables
  >(NationalRegistrySpouseDocument, options)
}
export type NationalRegistrySpouseQueryHookResult = ReturnType<
  typeof useNationalRegistrySpouseQuery
>
export type NationalRegistrySpouseLazyQueryHookResult = ReturnType<
  typeof useNationalRegistrySpouseLazyQuery
>
export type NationalRegistrySpouseQueryResult = Apollo.QueryResult<
  NationalRegistrySpouseQuery,
  NationalRegistrySpouseQueryVariables
>
