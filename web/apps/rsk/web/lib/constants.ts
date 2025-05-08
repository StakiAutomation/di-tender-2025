export enum DefaultEvents {
  PAYMENT = 'PAYMENT',
  APPROVE = 'APPROVE',
  ASSIGN = 'ASSIGN',
  REJECT = 'REJECT',
  SUBMIT = 'SUBMIT',
  ABORT = 'ABORT',
  EDIT = 'EDIT',
}

export type Events =
  | { type: DefaultEvents.APPROVE }
  | { type: DefaultEvents.REJECT }
  | { type: DefaultEvents.SUBMIT }
  | { type: DefaultEvents.ASSIGN }
  | { type: DefaultEvents.EDIT }

export const enum States {
  PREREQUISITES = 'prerequisites',
  DRAFT = 'draft',
  SUBMITTED = 'submitted',
}

export enum Roles {
  APPLICANT = 'applicant',
}

export enum ApiModuleActions {
  sendApplication = 'sendApplication',
}
