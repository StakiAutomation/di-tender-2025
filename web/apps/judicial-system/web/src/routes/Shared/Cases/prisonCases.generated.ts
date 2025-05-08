import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type PrisonCasesQueryVariables = Types.Exact<{ [key: string]: never }>

export type PrisonCasesQuery = {
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
    courtDate?: string | null
    isValidToDateInThePast?: boolean | null
    initialRulingDate?: string | null
    rulingDate?: string | null
    rulingSignatureDate?: string | null
    postponedIndefinitelyExplanation?: string | null
    indictmentRulingDecision?: Types.CaseIndictmentRulingDecision | null
    indictmentAppealDeadline?: string | null
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
      punishmentType?: Types.PunishmentType | null
      openedByPrisonAdminDate?: string | null
    }> | null
    judge?: {
      __typename?: 'User'
      id: string
      created?: string | null
      modified?: string | null
      nationalId?: string | null
      name?: string | null
      title?: string | null
      mobileNumber?: string | null
      email?: string | null
      role?: Types.UserRole | null
      active?: boolean | null
    } | null
    court?: {
      __typename?: 'Institution'
      id: string
      name?: string | null
    } | null
    prosecutor?: {
      __typename?: 'User'
      id: string
      created?: string | null
      modified?: string | null
      nationalId?: string | null
      name?: string | null
      title?: string | null
      mobileNumber?: string | null
      email?: string | null
      role?: Types.UserRole | null
      active?: boolean | null
    } | null
    registrar?: {
      __typename?: 'User'
      id: string
      created?: string | null
      modified?: string | null
      nationalId?: string | null
      name?: string | null
      title?: string | null
      mobileNumber?: string | null
      email?: string | null
      role?: Types.UserRole | null
      active?: boolean | null
    } | null
    creatingProsecutor?: {
      __typename?: 'User'
      id: string
      created?: string | null
      modified?: string | null
      nationalId?: string | null
      name?: string | null
      title?: string | null
      mobileNumber?: string | null
      email?: string | null
      role?: Types.UserRole | null
      active?: boolean | null
    } | null
  }> | null
}

export const PrisonCasesDocument = gql`
  query PrisonCases {
    cases {
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
        punishmentType
        openedByPrisonAdminDate
      }
      courtDate
      isValidToDateInThePast
      initialRulingDate
      rulingDate
      rulingSignatureDate
      judge {
        id
        created
        modified
        nationalId
        name
        title
        mobileNumber
        email
        role
        active
      }
      court {
        id
        name
      }
      prosecutor {
        id
        created
        modified
        nationalId
        name
        title
        mobileNumber
        email
        role
        active
      }
      registrar {
        id
        created
        modified
        nationalId
        name
        title
        mobileNumber
        email
        role
        active
      }
      creatingProsecutor {
        id
        created
        modified
        nationalId
        name
        title
        mobileNumber
        email
        role
        active
      }
      postponedIndefinitelyExplanation
      indictmentRulingDecision
      indictmentAppealDeadline
      caseSentToCourtDate
    }
  }
`

/**
 * __usePrisonCasesQuery__
 *
 * To run a query within a React component, call `usePrisonCasesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePrisonCasesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePrisonCasesQuery({
 *   variables: {
 *   },
 * });
 */
export function usePrisonCasesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    PrisonCasesQuery,
    PrisonCasesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PrisonCasesQuery, PrisonCasesQueryVariables>(
    PrisonCasesDocument,
    options,
  )
}
export function usePrisonCasesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PrisonCasesQuery,
    PrisonCasesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PrisonCasesQuery, PrisonCasesQueryVariables>(
    PrisonCasesDocument,
    options,
  )
}
export type PrisonCasesQueryHookResult = ReturnType<typeof usePrisonCasesQuery>
export type PrisonCasesLazyQueryHookResult = ReturnType<
  typeof usePrisonCasesLazyQuery
>
export type PrisonCasesQueryResult = Apollo.QueryResult<
  PrisonCasesQuery,
  PrisonCasesQueryVariables
>
