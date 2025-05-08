import * as Types from '../../gen/schema'

import gql from 'graphql-tag'
export type SkilavottordVehicleOwnerMutationVariables = Types.Exact<{
  input: Types.CreateOwnerInput
}>

export type SkilavottordVehicleOwnerMutation = {
  createSkilavottordVehicleOwnerAppSys: boolean
}

export type SkilavottordVehicleMutationVariables = Types.Exact<{
  input: Types.CreateVehicleInput
}>

export type SkilavottordVehicleMutation = {
  createSkilavottordVehicleAppSys: boolean
}

export type SkilavottordRecyclingRequestMutationVariables = Types.Exact<{
  input: Types.CreateRecyclingRequestInput
}>

export type SkilavottordRecyclingRequestMutation = {
  createSkilavottordRecyclingRequestAppSys:
    | { message: string; operation: string }
    | { status: boolean }
}

export const SkilavottordVehicleOwnerDocument = gql`
  mutation skilavottordVehicleOwner($input: CreateOwnerInput!) {
    createSkilavottordVehicleOwnerAppSys(input: $input)
  }
`
export const SkilavottordVehicleDocument = gql`
  mutation skilavottordVehicle($input: CreateVehicleInput!) {
    createSkilavottordVehicleAppSys(input: $input)
  }
`
export const SkilavottordRecyclingRequestDocument = gql`
  mutation skilavottordRecyclingRequest($input: CreateRecyclingRequestInput!) {
    createSkilavottordRecyclingRequestAppSys(input: $input) {
      ... on RequestErrors {
        message
        operation
      }
      ... on RequestStatus {
        status
      }
    }
  }
`
