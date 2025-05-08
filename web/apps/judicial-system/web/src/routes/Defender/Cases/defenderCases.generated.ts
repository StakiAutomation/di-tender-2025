import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type DefenderCasesQueryVariables = Types.Exact<{
  input: Types.InputMaybe<Types.CaseListQueryInput>
}>

export type DefenderCasesQuery = {
  __typename?: 'Query'
  cases?: Array<{
    __typename?: 'CaseListEntry'
    id: string
    type?: Types.CaseType | null
    decision?: Types.CaseDecision | null
    state?: Types.CaseState | null
    courtCaseNumber?: string | null
    validToDate?: string | null
    policeCaseNumbers?: Array<string> | null
    courtDate?: string | null
    parentCaseId?: string | null
    appealCaseNumber?: string | null
    appealState?: Types.CaseAppealState | null
    appealRulingDecision?: Types.CaseAppealRulingDecision | null
    accusedPostponedAppealDate?: string | null
    initialRulingDate?: string | null
    rulingDate?: string | null
    postponedIndefinitelyExplanation?: string | null
    indictmentDecision?: Types.IndictmentDecision | null
    indictmentRulingDecision?: Types.CaseIndictmentRulingDecision | null
    courtSessionType?: Types.CourtSessionType | null
    caseSentToCourtDate?: string | null
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
      isAlternativeService?: boolean | null
      subpoenas?: Array<{
        __typename?: 'Subpoena'
        id: string
        serviceStatus?: Types.ServiceStatus | null
        policeSubpoenaId?: string | null
      }> | null
    }> | null
  }> | null
}

export const DefenderCasesDocument = gql`
  query DefenderCases($input: CaseListQueryInput) {
    cases(input: $input) {
      id
      type
      decision
      state
      courtCaseNumber
      validToDate
      policeCaseNumbers
      courtDate
      parentCaseId
      appealCaseNumber
      appealState
      appealRulingDecision
      accusedPostponedAppealDate
      defendants {
        id
        created
        modified
        caseId
        nationalId
        name
        noNationalId
        defenderChoice
        isAlternativeService
        subpoenas {
          id
          serviceStatus
          policeSubpoenaId
        }
      }
      initialRulingDate
      rulingDate
      postponedIndefinitelyExplanation
      indictmentDecision
      indictmentRulingDecision
      courtSessionType
      caseSentToCourtDate
    }
  }
`

/**
 * __useDefenderCasesQuery__
 *
 * To run a query within a React component, call `useDefenderCasesQuery` and pass it any options that fit your needs.
 * When your component renders, `useDefenderCasesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDefenderCasesQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDefenderCasesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    DefenderCasesQuery,
    DefenderCasesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<DefenderCasesQuery, DefenderCasesQueryVariables>(
    DefenderCasesDocument,
    options,
  )
}
export function useDefenderCasesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    DefenderCasesQuery,
    DefenderCasesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<DefenderCasesQuery, DefenderCasesQueryVariables>(
    DefenderCasesDocument,
    options,
  )
}
export type DefenderCasesQueryHookResult = ReturnType<
  typeof useDefenderCasesQuery
>
export type DefenderCasesLazyQueryHookResult = ReturnType<
  typeof useDefenderCasesLazyQuery
>
export type DefenderCasesQueryResult = Apollo.QueryResult<
  DefenderCasesQuery,
  DefenderCasesQueryVariables
>
