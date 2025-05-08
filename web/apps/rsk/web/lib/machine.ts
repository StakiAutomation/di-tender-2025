import {
  coreHistoryMessages,
  DefaultStateLifeCycle,
  EphemeralStateLifeCycle,
} from '@island.is/application/core'
import { defineTemplateApi, FormModes } from '@island.is/application/types'
import { ApiModuleActions, DefaultEvents, Roles, States } from './constants'

import { createMachine } from 'xstate'

export const taxReturnMachine = createMachine({
  // id: 'tax_return_state_machine',
  // initial: States.PREREQUISITES,
  // states: {
  //   [States.PREREQUISITES]: {
  //     meta: {
  //       name: States.PREREQUISITES,
  //       status: FormModes.DRAFT,
  //       lifecycle: EphemeralStateLifeCycle,
  //       actionCard: {
  //         historyLogs: [
  //           {
  //             logMessage: coreHistoryMessages.applicationStarted,
  //             onEvent: DefaultEvents.SUBMIT,
  //           },
  //         ],
  //       },
  //       roles: [
  //         {
  //           id: Roles.APPLICANT,
  //           formLoader: () =>
  //             import('../forms/Prerequisites/index').then((val) =>
  //               Promise.resolve(val.Prerequisites),
  //             ),
  //           actions: [
  //             {
  //               event: DefaultEvents.SUBMIT,
  //               name: 'newPrimarySchoolMessages.pre.startApplication',
  //               type: 'primary',
  //             },
  //           ],
  //           write: 'all',
  //           delete: true,
  //           api: [],
  //         },
  //       ],
  //     },
  //     on: {
  //       [DefaultEvents.SUBMIT]: { target: States.DRAFT },
  //     },
  //   },
  //   [States.DRAFT]: {
  //     exit: [],
  //     meta: {
  //       name: States.DRAFT,
  //       status: FormModes.DRAFT,
  //       lifecycle: DefaultStateLifeCycle,
  //       actionCard: {
  //         historyLogs: [
  //           {
  //             logMessage: coreHistoryMessages.applicationSent,
  //             onEvent: DefaultEvents.SUBMIT,
  //           },
  //         ],
  //       },
  //       onExit: defineTemplateApi({
  //         action: ApiModuleActions.sendApplication,
  //         triggerEvent: DefaultEvents.SUBMIT,
  //         throwOnError: true,
  //       }),
  //       roles: [
  //         {
  //           id: Roles.APPLICANT,
  //           formLoader: () =>
  //             import('../forms/TaxReturnForm/index').then((val) =>
  //               Promise.resolve(val.TaxReturnForm),
  //             ),
  //           actions: [
  //             {
  //               event: DefaultEvents.SUBMIT,
  //               name: 'newPrimarySchoolMessages.overview.submitButton',
  //               type: 'primary',
  //             },
  //           ],
  //           write: 'all',
  //           delete: true,
  //         },
  //       ],
  //     },
  //     on: {
  //       [DefaultEvents.SUBMIT]: { target: States.SUBMITTED },
  //     },
  //   },
  //   [States.SUBMITTED]: {
  //     meta: {
  //       name: States.SUBMITTED,
  //       status: FormModes.COMPLETED,
  //       lifecycle: DefaultStateLifeCycle,
  //       actionCard: {
  //         pendingAction: {
  //           title: 'corePendingActionMessages.applicationReceivedTitle',
  //           content: 'corePendingActionMessages.applicationReceivedDescription',
  //           displayStatus: 'success',
  //         },
  //       },
  //       roles: [
  //         {
  //           id: Roles.APPLICANT,
  //           formLoader: () =>
  //             import('../forms/TaxReturnForm').then((val) =>
  //               Promise.resolve(val.TaxReturnForm),
  //             ),
  //           write: 'all',
  //         },
  //       ],
  //     },
  //     on: {
  //       [DefaultEvents.EDIT]: { target: States.DRAFT },
  //     },
  //   },
  // },
})
