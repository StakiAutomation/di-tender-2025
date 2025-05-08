import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type LimitedAccessUpdateCaseMutationVariables = Types.Exact<{
  input: Types.UpdateCaseInput
}>

export type LimitedAccessUpdateCaseMutation = {
  __typename?: 'Mutation'
  limitedAccessUpdateCase?: {
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
    hasBeenAppealed?: boolean | null
    appealedByRole?: Types.UserRole | null
    appealedDate?: string | null
    appealDeadline?: string | null
    prosecutorStatementDate?: string | null
    defendantStatementDate?: string | null
    appealReceivedByCourtDate?: string | null
    appealCaseNumber?: string | null
    appealConclusion?: string | null
    appealRulingDecision?: Types.CaseAppealRulingDecision | null
    caseFiles?: Array<{
      __typename?: 'CaseFile'
      id: string
      created?: string | null
      name?: string | null
      category?: Types.CaseFileCategory | null
      key?: string | null
      policeCaseNumber?: string | null
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
    } | null
    registrar?: {
      __typename?: 'User'
      id: string
      name?: string | null
      title?: string | null
    } | null
    judge?: {
      __typename?: 'User'
      id: string
      name?: string | null
      title?: string | null
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
    prosecutorsOffice?: {
      __typename?: 'Institution'
      id: string
      name?: string | null
    } | null
  } | null
}

export const LimitedAccessUpdateCaseDocument = gql`
  mutation LimitedAccessUpdateCase($input: UpdateCaseInput!) {
    limitedAccessUpdateCase(input: $input) {
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
        name
        category
        key
        policeCaseNumber
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
      }
      courtCaseNumber
      courtEndTime
      validToDate
      decision
      isValidToDateInThePast
      isCustodyIsolation
      isolationToDate
      conclusion
      rulingDate
      rulingSignatureDate
      registrar {
        id
        name
        title
      }
      judge {
        id
        name
        title
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
      hasBeenAppealed
      appealedByRole
      appealedDate
      appealDeadline
      prosecutorStatementDate
      defendantStatementDate
      appealReceivedByCourtDate
      appealCaseNumber
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
      appealConclusion
      appealRulingDecision
      prosecutorsOffice {
        id
        name
      }
    }
  }
`
export type LimitedAccessUpdateCaseMutationFn = Apollo.MutationFunction<
  LimitedAccessUpdateCaseMutation,
  LimitedAccessUpdateCaseMutationVariables
>

/**
 * __useLimitedAccessUpdateCaseMutation__
 *
 * To run a mutation, you first call `useLimitedAccessUpdateCaseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLimitedAccessUpdateCaseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [limitedAccessUpdateCaseMutation, { data, loading, error }] = useLimitedAccessUpdateCaseMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLimitedAccessUpdateCaseMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LimitedAccessUpdateCaseMutation,
    LimitedAccessUpdateCaseMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    LimitedAccessUpdateCaseMutation,
    LimitedAccessUpdateCaseMutationVariables
  >(LimitedAccessUpdateCaseDocument, options)
}
export type LimitedAccessUpdateCaseMutationHookResult = ReturnType<
  typeof useLimitedAccessUpdateCaseMutation
>
export type LimitedAccessUpdateCaseMutationResult = Apollo.MutationResult<LimitedAccessUpdateCaseMutation>
export type LimitedAccessUpdateCaseMutationOptions = Apollo.BaseMutationOptions<
  LimitedAccessUpdateCaseMutation,
  LimitedAccessUpdateCaseMutationVariables
>
