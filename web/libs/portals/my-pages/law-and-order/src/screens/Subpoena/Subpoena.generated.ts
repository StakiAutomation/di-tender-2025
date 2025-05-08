import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetSubpoenaQueryVariables = Types.Exact<{
  input: Types.LawAndOrderSubpoenaInput
  locale: Types.Scalars['String']
}>

export type GetSubpoenaQuery = {
  __typename?: 'Query'
  lawAndOrderSubpoena?: {
    __typename?: 'LawAndOrderSubpoena'
    data?: {
      __typename?: 'LawAndOrderSubpoenaData'
      id: string
      hasBeenServed?: boolean | null
      chosenDefender?: string | null
      defenderChoice?: Types.LawAndOrderDefenseChoiceEnum | null
      canEditDefenderChoice?: boolean | null
      courtContactInfo?: string | null
      defaultChoice: Types.LawAndOrderDefenseChoiceEnum
      hasChosen?: boolean | null
      groups?: Array<{
        __typename?: 'LawAndOrderGroup'
        label?: string | null
        items?: Array<{
          __typename?: 'LawAndOrderSubpoenaItem'
          label?: string | null
          value?: string | null
          link?: string | null
        }> | null
      }> | null
    } | null
    texts?: {
      __typename?: 'LawAndOrderSubpoenaTexts'
      confirmation?: string | null
      description?: string | null
      information?: string | null
      deadline?: string | null
    } | null
  } | null
}

export const GetSubpoenaDocument = gql`
  query GetSubpoena($input: LawAndOrderSubpoenaInput!, $locale: String!) {
    lawAndOrderSubpoena(input: $input, locale: $locale) {
      data {
        id
        hasBeenServed
        chosenDefender
        defenderChoice
        canEditDefenderChoice
        courtContactInfo
        defaultChoice
        hasChosen
        groups {
          label
          items {
            label
            value
            link
          }
        }
      }
      texts {
        confirmation
        description
        information
        deadline
      }
    }
  }
`

/**
 * __useGetSubpoenaQuery__
 *
 * To run a query within a React component, call `useGetSubpoenaQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSubpoenaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSubpoenaQuery({
 *   variables: {
 *      input: // value for 'input'
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetSubpoenaQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetSubpoenaQuery,
    GetSubpoenaQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetSubpoenaQuery, GetSubpoenaQueryVariables>(
    GetSubpoenaDocument,
    options,
  )
}
export function useGetSubpoenaLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetSubpoenaQuery,
    GetSubpoenaQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetSubpoenaQuery, GetSubpoenaQueryVariables>(
    GetSubpoenaDocument,
    options,
  )
}
export type GetSubpoenaQueryHookResult = ReturnType<typeof useGetSubpoenaQuery>
export type GetSubpoenaLazyQueryHookResult = ReturnType<
  typeof useGetSubpoenaLazyQuery
>
export type GetSubpoenaQueryResult = Apollo.QueryResult<
  GetSubpoenaQuery,
  GetSubpoenaQueryVariables
>
