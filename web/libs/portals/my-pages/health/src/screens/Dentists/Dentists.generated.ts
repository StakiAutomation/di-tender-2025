import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetDentistsQueryVariables = Types.Exact<{
  input: Types.RightsPortalDentistBillsInput
}>

export type GetDentistsQuery = {
  __typename?: 'Query'
  rightsPortalUserDentistRegistration?: {
    __typename?: 'RightsPortalUserDentistRegistration'
    dentist?: {
      __typename?: 'RightsPortalUserDentistInformation'
      id?: number | null
      name?: string | null
      status?: {
        __typename?: 'RightsPortalDentistStatus'
        isInsured?: boolean | null
        canRegister?: boolean | null
        contractType?: string | null
      } | null
    } | null
    history?: Array<{
      __typename?: 'RightsPortalDentistBill'
      number?: number | null
      amount?: number | null
      coveredAmount?: number | null
      date?: string | null
      refundDate?: string | null
    }> | null
  } | null
}

export const GetDentistsDocument = gql`
  query getDentists($input: RightsPortalDentistBillsInput!) {
    rightsPortalUserDentistRegistration(input: $input) {
      dentist {
        id
        name
        status {
          isInsured
          canRegister
          contractType
        }
      }
      history {
        number
        amount
        coveredAmount
        date
        refundDate
      }
    }
  }
`

/**
 * __useGetDentistsQuery__
 *
 * To run a query within a React component, call `useGetDentistsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDentistsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDentistsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetDentistsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetDentistsQuery,
    GetDentistsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetDentistsQuery, GetDentistsQueryVariables>(
    GetDentistsDocument,
    options,
  )
}
export function useGetDentistsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetDentistsQuery,
    GetDentistsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetDentistsQuery, GetDentistsQueryVariables>(
    GetDentistsDocument,
    options,
  )
}
export type GetDentistsQueryHookResult = ReturnType<typeof useGetDentistsQuery>
export type GetDentistsLazyQueryHookResult = ReturnType<
  typeof useGetDentistsLazyQuery
>
export type GetDentistsQueryResult = Apollo.QueryResult<
  GetDentistsQuery,
  GetDentistsQueryVariables
>
