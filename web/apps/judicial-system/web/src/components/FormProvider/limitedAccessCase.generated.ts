import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type LimitedAccessCaseQueryVariables = Types.Exact<{
  input: Types.CaseQueryInput
}>

export type LimitedAccessCaseQuery = {
  __typename?: 'Query'
  limitedAccessCase?: {
    __typename?: 'Case'
    id: string
    created?: string | null
    origin?: Types.CaseOrigin | null
    type?: Types.CaseType | null
    indictmentSubtypes?: any | null
    state?: Types.CaseState | null
    policeCaseNumbers?: Array<string> | null
    defenderName?: string | null
    defenderNationalId?: string | null
    defenderEmail?: string | null
    defenderPhoneNumber?: string | null
    requestSharedWithDefender?: Types.RequestSharedWithDefender | null
    leadInvestigator?: string | null
    requestedCustodyRestrictions?: Array<Types.CaseCustodyRestrictions> | null
    courtCaseNumber?: string | null
    courtEndTime?: string | null
    validToDate?: string | null
    decision?: Types.CaseDecision | null
    isValidToDateInThePast?: boolean | null
    isCustodyIsolation?: boolean | null
    isolationToDate?: string | null
    conclusion?: string | null
    accusedPostponedAppealDate?: string | null
    prosecutorPostponedAppealDate?: string | null
    rulingDate?: string | null
    rulingSignatureDate?: string | null
    courtRecordSignatureDate?: string | null
    caseModifiedExplanation?: string | null
    caseResentExplanation?: string | null
    appealState?: Types.CaseAppealState | null
    accusedAppealDecision?: Types.CaseAppealDecision | null
    prosecutorAppealDecision?: Types.CaseAppealDecision | null
    isAppealDeadlineExpired?: boolean | null
    isStatementDeadlineExpired?: boolean | null
    statementDeadline?: string | null
    canBeAppealed?: boolean | null
    canDefenderAppeal?: boolean | null
    hasBeenAppealed?: boolean | null
    appealedByRole?: Types.UserRole | null
    appealedDate?: string | null
    appealDeadline?: string | null
    prosecutorStatementDate?: string | null
    defendantStatementDate?: string | null
    appealReceivedByCourtDate?: string | null
    appealConclusion?: string | null
    appealRulingDecision?: Types.CaseAppealRulingDecision | null
    appealCaseNumber?: string | null
    appealRulingModifiedHistory?: string | null
    postponedIndefinitelyExplanation?: string | null
    indictmentDecision?: Types.IndictmentDecision | null
    indictmentRulingDecision?: Types.CaseIndictmentRulingDecision | null
    indictmentReviewDecision?: Types.IndictmentCaseReviewDecision | null
    indictmentVerdictViewedByAll?: boolean | null
    indictmentVerdictAppealDeadlineExpired?: boolean | null
    courtSessionType?: Types.CourtSessionType | null
    hasCivilClaims?: boolean | null
    isCompletedWithoutRuling?: boolean | null
    caseSentToCourtDate?: string | null
    caseFiles?: Array<{
      __typename?: 'CaseFile'
      id: string
      created?: string | null
      modified?: string | null
      name?: string | null
      type?: string | null
      category?: Types.CaseFileCategory | null
      state?: Types.CaseFileState | null
      key?: string | null
      size?: number | null
      userGeneratedFilename?: string | null
      displayDate?: string | null
      submittedBy?: string | null
      fileRepresentative?: string | null
    }> | null
    defendants?: Array<{
      __typename?: 'Defendant'
      id: string
      noNationalId?: boolean | null
      nationalId?: string | null
      name?: string | null
      gender?: Types.Gender | null
      address?: string | null
      citizenship?: string | null
      defenderName?: string | null
      defenderNationalId?: string | null
      defenderEmail?: string | null
      defenderPhoneNumber?: string | null
      defenderChoice?: Types.DefenderChoice | null
      defendantPlea?: Types.DefendantPlea | null
      requestedDefenderChoice?: Types.DefenderChoice | null
      requestedDefenderNationalId?: string | null
      requestedDefenderName?: string | null
      isDefenderChoiceConfirmed?: boolean | null
      caseFilesSharedWithDefender?: boolean | null
      serviceRequirement?: Types.ServiceRequirement | null
      verdictViewDate?: string | null
      verdictAppealDeadline?: string | null
      isVerdictAppealDeadlineExpired?: boolean | null
      subpoenaType?: Types.SubpoenaType | null
      isSentToPrisonAdmin?: boolean | null
      sentToPrisonAdminDate?: string | null
      openedByPrisonAdminDate?: string | null
      punishmentType?: Types.PunishmentType | null
      isAlternativeService?: boolean | null
      alternativeServiceDescription?: string | null
      subpoenas?: Array<{
        __typename?: 'Subpoena'
        id: string
        created?: string | null
        serviceStatus?: Types.ServiceStatus | null
        serviceDate?: string | null
        servedBy?: string | null
        comment?: string | null
        defenderNationalId?: string | null
        caseId?: string | null
        defendantId?: string | null
        policeSubpoenaId?: string | null
      }> | null
    }> | null
    court?: {
      __typename?: 'Institution'
      id: string
      name?: string | null
      type?: Types.InstitutionType | null
    } | null
    creatingProsecutor?: {
      __typename?: 'User'
      id: string
      name?: string | null
      title?: string | null
    } | null
    prosecutor?: {
      __typename?: 'User'
      id: string
      name?: string | null
      title?: string | null
      email?: string | null
    } | null
    registrar?: {
      __typename?: 'User'
      id: string
      name?: string | null
      title?: string | null
      email?: string | null
    } | null
    judge?: {
      __typename?: 'User'
      id: string
      name?: string | null
      title?: string | null
      email?: string | null
    } | null
    courtRecordSignatory?: {
      __typename?: 'User'
      id: string
      name?: string | null
      title?: string | null
    } | null
    parentCase?: {
      __typename?: 'Case'
      id: string
      state?: Types.CaseState | null
      validToDate?: string | null
      decision?: Types.CaseDecision | null
      courtCaseNumber?: string | null
      ruling?: string | null
    } | null
    childCase?: { __typename?: 'Case'; id: string } | null
    appealAssistant?: {
      __typename?: 'User'
      id: string
      name?: string | null
    } | null
    appealJudge1?: {
      __typename?: 'User'
      id: string
      name?: string | null
    } | null
    appealJudge2?: {
      __typename?: 'User'
      id: string
      name?: string | null
    } | null
    appealJudge3?: {
      __typename?: 'User'
      id: string
      name?: string | null
    } | null
    arraignmentDate?: {
      __typename?: 'DateLog'
      date?: string | null
      location?: string | null
    } | null
    courtDate?: {
      __typename?: 'DateLog'
      date?: string | null
      location?: string | null
    } | null
    prosecutorsOffice?: {
      __typename?: 'Institution'
      id: string
      name?: string | null
    } | null
    indictmentReviewer?: {
      __typename?: 'User'
      id: string
      name?: string | null
    } | null
    eventLogs?: Array<{
      __typename?: 'EventLog'
      id: string
      created?: string | null
      eventType?: Types.EventType | null
    }> | null
    mergeCase?: {
      __typename?: 'Case'
      id: string
      courtCaseNumber?: string | null
    } | null
    indictmentCounts?: Array<{
      __typename?: 'IndictmentCount'
      id: string
      caseId?: string | null
      policeCaseNumber?: string | null
      created?: string | null
      modified?: string | null
      vehicleRegistrationNumber?: string | null
      lawsBroken?: Array<Array<number>> | null
      incidentDescription?: string | null
      legalArguments?: string | null
      offenses?: Array<{
        __typename?: 'Offense'
        id: string
        indictmentCountId?: string | null
        created?: string | null
        modified?: string | null
        offense: Types.IndictmentCountOffense
        substances?: any | null
      }> | null
    }> | null
    mergedCases?: Array<{
      __typename?: 'Case'
      id: string
      courtCaseNumber?: string | null
      type?: Types.CaseType | null
      policeCaseNumbers?: Array<string> | null
      indictmentSubtypes?: any | null
      caseFiles?: Array<{
        __typename?: 'CaseFile'
        id: string
        created?: string | null
        modified?: string | null
        name?: string | null
        type?: string | null
        category?: Types.CaseFileCategory | null
        state?: Types.CaseFileState | null
        key?: string | null
        size?: number | null
        userGeneratedFilename?: string | null
        displayDate?: string | null
        submittedBy?: string | null
      }> | null
      court?: {
        __typename?: 'Institution'
        id: string
        name?: string | null
      } | null
      judge?: { __typename?: 'User'; id: string; name?: string | null } | null
      prosecutorsOffice?: {
        __typename?: 'Institution'
        id: string
        name?: string | null
      } | null
    }> | null
    civilClaimants?: Array<{
      __typename?: 'CivilClaimant'
      id: string
      caseId?: string | null
      name?: string | null
      nationalId?: string | null
      noNationalId?: boolean | null
      hasSpokesperson?: boolean | null
      spokespersonIsLawyer?: boolean | null
      spokespersonNationalId?: string | null
      spokespersonName?: string | null
      spokespersonEmail?: string | null
      spokespersonPhoneNumber?: string | null
      caseFilesSharedWithSpokesperson?: boolean | null
      isSpokespersonConfirmed?: boolean | null
    }> | null
    victims?: Array<{
      __typename?: 'Victim'
      id: string
      name?: string | null
      hasNationalId?: boolean | null
      nationalId?: string | null
      hasLawyer?: boolean | null
      lawyerNationalId?: string | null
      lawyerName?: string | null
      lawyerEmail?: string | null
      lawyerPhoneNumber?: string | null
      lawyerAccessToRequest?: Types.RequestSharedWhen | null
    }> | null
  } | null
}

export const LimitedAccessCaseDocument = gql`
  query LimitedAccessCase($input: CaseQueryInput!) {
    limitedAccessCase(input: $input) {
      id
      created
      origin
      type
      indictmentSubtypes
      state
      policeCaseNumbers
      caseFiles {
        id
        created
        modified
        name
        type
        category
        state
        key
        size
        userGeneratedFilename
        displayDate
        submittedBy
        fileRepresentative
      }
      defendants {
        id
        noNationalId
        nationalId
        name
        gender
        address
        citizenship
        defenderName
        defenderNationalId
        defenderEmail
        defenderPhoneNumber
        defenderChoice
        defendantPlea
        requestedDefenderChoice
        requestedDefenderNationalId
        requestedDefenderName
        isDefenderChoiceConfirmed
        caseFilesSharedWithDefender
        serviceRequirement
        verdictViewDate
        verdictAppealDeadline
        isVerdictAppealDeadlineExpired
        subpoenaType
        isSentToPrisonAdmin
        sentToPrisonAdminDate
        openedByPrisonAdminDate
        punishmentType
        isAlternativeService
        alternativeServiceDescription
        subpoenas {
          id
          created
          serviceStatus
          serviceDate
          servedBy
          comment
          defenderNationalId
          caseId
          defendantId
          policeSubpoenaId
        }
      }
      defenderName
      defenderNationalId
      defenderEmail
      defenderPhoneNumber
      requestSharedWithDefender
      court {
        id
        name
        type
      }
      leadInvestigator
      requestedCustodyRestrictions
      creatingProsecutor {
        id
        name
        title
      }
      prosecutor {
        id
        name
        title
        email
      }
      courtCaseNumber
      courtEndTime
      validToDate
      decision
      isValidToDateInThePast
      isCustodyIsolation
      isolationToDate
      conclusion
      accusedPostponedAppealDate
      prosecutorPostponedAppealDate
      rulingDate
      rulingSignatureDate
      registrar {
        id
        name
        title
        email
      }
      judge {
        id
        name
        title
        email
      }
      courtRecordSignatory {
        id
        name
        title
      }
      courtRecordSignatureDate
      parentCase {
        id
        state
        validToDate
        decision
        courtCaseNumber
        ruling
      }
      childCase {
        id
      }
      caseModifiedExplanation
      caseResentExplanation
      appealState
      accusedAppealDecision
      prosecutorAppealDecision
      isAppealDeadlineExpired
      isStatementDeadlineExpired
      statementDeadline
      canBeAppealed
      canDefenderAppeal
      hasBeenAppealed
      appealedByRole
      appealedDate
      appealDeadline
      prosecutorStatementDate
      defendantStatementDate
      appealReceivedByCourtDate
      appealConclusion
      appealRulingDecision
      appealCaseNumber
      appealRulingModifiedHistory
      appealAssistant {
        id
        name
      }
      appealJudge1 {
        id
        name
      }
      appealJudge2 {
        id
        name
      }
      appealJudge3 {
        id
        name
      }
      arraignmentDate {
        date
        location
      }
      courtDate {
        date
        location
      }
      prosecutorsOffice {
        id
        name
      }
      postponedIndefinitelyExplanation
      indictmentDecision
      indictmentRulingDecision
      indictmentReviewDecision
      indictmentVerdictViewedByAll
      indictmentVerdictAppealDeadlineExpired
      indictmentReviewer {
        id
        name
      }
      courtSessionType
      eventLogs {
        id
        created
        eventType
      }
      mergeCase {
        id
        courtCaseNumber
      }
      indictmentCounts {
        id
        caseId
        policeCaseNumber
        created
        modified
        vehicleRegistrationNumber
        offenses {
          id
          indictmentCountId
          created
          modified
          offense
          substances
        }
        lawsBroken
        incidentDescription
        legalArguments
      }
      mergedCases {
        id
        courtCaseNumber
        type
        caseFiles {
          id
          created
          modified
          name
          type
          category
          state
          key
          size
          userGeneratedFilename
          displayDate
          submittedBy
        }
        policeCaseNumbers
        indictmentSubtypes
        court {
          id
          name
        }
        judge {
          id
          name
        }
        prosecutorsOffice {
          id
          name
        }
      }
      hasCivilClaims
      civilClaimants {
        id
        caseId
        name
        nationalId
        noNationalId
        hasSpokesperson
        spokespersonIsLawyer
        spokespersonNationalId
        spokespersonName
        spokespersonEmail
        spokespersonPhoneNumber
        caseFilesSharedWithSpokesperson
        isSpokespersonConfirmed
      }
      victims {
        id
        name
        hasNationalId
        nationalId
        hasLawyer
        lawyerNationalId
        lawyerName
        lawyerEmail
        lawyerPhoneNumber
        lawyerAccessToRequest
      }
      isCompletedWithoutRuling
      caseSentToCourtDate
    }
  }
`

/**
 * __useLimitedAccessCaseQuery__
 *
 * To run a query within a React component, call `useLimitedAccessCaseQuery` and pass it any options that fit your needs.
 * When your component renders, `useLimitedAccessCaseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLimitedAccessCaseQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLimitedAccessCaseQuery(
  baseOptions: Apollo.QueryHookOptions<
    LimitedAccessCaseQuery,
    LimitedAccessCaseQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    LimitedAccessCaseQuery,
    LimitedAccessCaseQueryVariables
  >(LimitedAccessCaseDocument, options)
}
export function useLimitedAccessCaseLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    LimitedAccessCaseQuery,
    LimitedAccessCaseQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    LimitedAccessCaseQuery,
    LimitedAccessCaseQueryVariables
  >(LimitedAccessCaseDocument, options)
}
export type LimitedAccessCaseQueryHookResult = ReturnType<
  typeof useLimitedAccessCaseQuery
>
export type LimitedAccessCaseLazyQueryHookResult = ReturnType<
  typeof useLimitedAccessCaseLazyQuery
>
export type LimitedAccessCaseQueryResult = Apollo.QueryResult<
  LimitedAccessCaseQuery,
  LimitedAccessCaseQueryVariables
>
