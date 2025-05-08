import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type AppealedCasesQueryVariables = Types.Exact<{
  input: Types.InputMaybe<Types.CaseListQueryInput>
}>

export type AppealedCasesQuery = {
  __typename?: 'Query'
  cases?: Array<{
    __typename?: 'CaseListEntry'
    id: string
    created?: string | null
    type?: Types.CaseType | null
    decision?: Types.CaseDecision | null
    state?: Types.CaseState | null
    courtCaseNumber?: string | null
    accusedAppealDecision?: Types.CaseAppealDecision | null
    prosecutorAppealDecision?: Types.CaseAppealDecision | null
    accusedPostponedAppealDate?: string | null
    prosecutorPostponedAppealDate?: string | null
    courtEndTime?: string | null
    validToDate?: string | null
    policeCaseNumbers?: Array<string> | null
    parentCaseId?: string | null
    appealCaseNumber?: string | null
    appealState?: Types.CaseAppealState | null
    appealRulingDecision?: Types.CaseAppealRulingDecision | null
    appealedDate?: string | null
    initialRulingDate?: string | null
    rulingDate?: string | null
    defendants?: Array<{
      __typename?: 'Defendant'
      id: string
      created?: string | null
      modified?: string | null
      caseId?: string | null
      nationalId?: string | null
      name?: string | null
      noNationalId?: boolean | null
      defenderChoice?: Types.DefenderChoice | null
    }> | null
  }> | null
}

export const AppealedCasesDocument = gql`
  query AppealedCases($input: CaseListQueryInput) {
    cases(input: $input) {
      id
      created
      type
      decision
      state
      courtCaseNumber
      accusedAppealDecision
      prosecutorAppealDecision
      accusedPostponedAppealDate
      prosecutorPostponedAppealDate
      courtEndTime
      validToDate
      policeCaseNumbers
      parentCaseId
      appealCaseNumber
      appealState
      appealRulingDecision
      defendants {
        id
        created
        modified
        caseId
        nationalId
        name
        noNationalId
        defenderChoice
      }
      appealedDate
      initialRulingDate
      rulingDate
    }
  }
`

/**
 * __useAppealedCasesQuery__
 *
 * To run a query within a React component, call `useAppealedCasesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAppealedCasesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAppealedCasesQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAppealedCasesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    AppealedCasesQuery,
    AppealedCasesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AppealedCasesQuery, AppealedCasesQueryVariables>(
    AppealedCasesDocument,
    options,
  )
}
export function useAppealedCasesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AppealedCasesQuery,
    AppealedCasesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AppealedCasesQuery, AppealedCasesQueryVariables>(
    AppealedCasesDocument,
    options,
  )
}
export type AppealedCasesQueryHookResult = ReturnType<
  typeof useAppealedCasesQuery
>
export type AppealedCasesLazyQueryHookResult = ReturnType<
  typeof useAppealedCasesLazyQuery
>
export type AppealedCasesQueryResult = Apollo.QueryResult<
  AppealedCasesQuery,
  AppealedCasesQueryVariables
>
