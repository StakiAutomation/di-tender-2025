import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetInnaDiplomasQueryVariables = Types.Exact<{
  [key: string]: never
}>

export type GetInnaDiplomasQuery = {
  __typename?: 'Query'
  innaDiplomas: {
    __typename?: 'DiplomaModel'
    items?: Array<{
      __typename?: 'DiplomaItems'
      diplomaDate?: string | null
      diplomaId?: number | null
      diplomaName?: string | null
      diplomaLongName?: string | null
      diplomaCode?: string | null
      diplomaCreditsTotal?: number | null
      diplomaCredits?: number | null
      organisation?: string | null
      organisationId?: number | null
      organisationShort?: string | null
    }> | null
  }
}

export const GetInnaDiplomasDocument = gql`
  query GetInnaDiplomas {
    innaDiplomas {
      items {
        diplomaDate
        diplomaId
        diplomaName
        diplomaLongName
        diplomaCode
        diplomaCreditsTotal
        diplomaCredits
        organisation
        organisationId
        organisationShort
      }
    }
  }
`

/**
 * __useGetInnaDiplomasQuery__
 *
 * To run a query within a React component, call `useGetInnaDiplomasQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInnaDiplomasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInnaDiplomasQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetInnaDiplomasQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetInnaDiplomasQuery,
    GetInnaDiplomasQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetInnaDiplomasQuery, GetInnaDiplomasQueryVariables>(
    GetInnaDiplomasDocument,
    options,
  )
}
export function useGetInnaDiplomasLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetInnaDiplomasQuery,
    GetInnaDiplomasQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetInnaDiplomasQuery,
    GetInnaDiplomasQueryVariables
  >(GetInnaDiplomasDocument, options)
}
export type GetInnaDiplomasQueryHookResult = ReturnType<
  typeof useGetInnaDiplomasQuery
>
export type GetInnaDiplomasLazyQueryHookResult = ReturnType<
  typeof useGetInnaDiplomasLazyQuery
>
export type GetInnaDiplomasQueryResult = Apollo.QueryResult<
  GetInnaDiplomasQuery,
  GetInnaDiplomasQueryVariables
>
