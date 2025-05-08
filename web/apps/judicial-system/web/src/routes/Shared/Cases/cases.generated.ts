import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type CasesQueryVariables = Types.Exact<{ [key: string]: never }>

export type CasesQuery = {
  __typename?: 'Query'
  cases?: Array<{
    __typename?: 'CaseListEntry'
    id: string
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
    defendantsPunishmentType?: Types.PunishmentType | null
    publicProsecutorIsRegisteredInPoliceSystem?: boolean | null
    courtDate?: string | null
    isValidToDateInThePast?: boolean | null
    initialRulingDate?: string | null
    rulingDate?: string | null
    rulingSignatureDate?: string | null
    postponedIndefinitelyExplanation?: string | null
    indictmentReviewDecision?: Types.IndictmentCaseReviewDecision | null
    indictmentAppealDeadline?: string | null
    indictmentVerdictViewedByAll?: boolean | null
    indictmentVerdictAppealDeadlineExpired?: boolean | null
    indictmentRulingDecision?: Types.CaseIndictmentRulingDecision | null
    indictmentDecision?: Types.IndictmentDecision | null
    courtSessionType?: Types.CourtSessionType | null
    caseSentToCourtDate?: string | null
    isCompletedWithoutRuling?: boolean | null
    defendants?: Array<{
      __typename?: 'Defendant'
      id: string
      created?: string | null
      modified?: string | null
      caseId?: string | null
      nationalId?: string | null
      name?: string | null
      gender?: Types.Gender | null
      noNationalId?: boolean | null
      defenderChoice?: Types.DefenderChoice | null
      verdictViewDate?: string | null
      isSentToPrisonAdmin?: boolean | null
      punishmentType?: Types.PunishmentType | null
      isAlternativeService?: boolean | null
      openedByPrisonAdminDate?: string | null
      verdictAppealDate?: string | null
      subpoenas?: Array<{
        __typename?: 'Subpoena'
        id: string
        serviceStatus?: Types.ServiceStatus | null
        policeSubpoenaId?: string | null
      }> | null
    }> | null
    court?: {
      __typename?: 'Institution'
      id: string
      name?: string | null
    } | null
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
      canConfirmIndictment?: boolean | null
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
      canConfirmIndictment?: boolean | null
    } | null
    indictmentReviewer?: {
      __typename?: 'User'
      id: string
      name?: string | null
    } | null
    eventLogs?: Array<{
      __typename?: 'EventLog'
      id: string
      eventType?: Types.EventType | null
    }> | null
  }> | null
}

export const CasesDocument = gql`
  query Cases {
    cases {
      id
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
        gender
        noNationalId
        defenderChoice
        verdictViewDate
        isSentToPrisonAdmin
        punishmentType
        isAlternativeService
        openedByPrisonAdminDate
        subpoenas {
          id
          serviceStatus
          policeSubpoenaId
        }
        verdictAppealDate
      }
      defendantsPunishmentType
      publicProsecutorIsRegisteredInPoliceSystem
      courtDate
      isValidToDateInThePast
      initialRulingDate
      rulingDate
      rulingSignatureDate
      court {
        id
        name
      }
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
        canConfirmIndictment
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
        canConfirmIndictment
      }
      postponedIndefinitelyExplanation
      indictmentReviewer {
        id
        name
      }
      indictmentReviewDecision
      indictmentAppealDeadline
      indictmentVerdictViewedByAll
      indictmentVerdictAppealDeadlineExpired
      indictmentRulingDecision
      indictmentDecision
      courtSessionType
      caseSentToCourtDate
      isCompletedWithoutRuling
      eventLogs {
        id
        eventType
      }
    }
  }
`

/**
 * __useCasesQuery__
 *
 * To run a query within a React component, call `useCasesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCasesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCasesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCasesQuery(
  baseOptions?: Apollo.QueryHookOptions<CasesQuery, CasesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<CasesQuery, CasesQueryVariables>(
    CasesDocument,
    options,
  )
}
export function useCasesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<CasesQuery, CasesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<CasesQuery, CasesQueryVariables>(
    CasesDocument,
    options,
  )
}
export type CasesQueryHookResult = ReturnType<typeof useCasesQuery>
export type CasesLazyQueryHookResult = ReturnType<typeof useCasesLazyQuery>
export type CasesQueryResult = Apollo.QueryResult<
  CasesQuery,
  CasesQueryVariables
>
