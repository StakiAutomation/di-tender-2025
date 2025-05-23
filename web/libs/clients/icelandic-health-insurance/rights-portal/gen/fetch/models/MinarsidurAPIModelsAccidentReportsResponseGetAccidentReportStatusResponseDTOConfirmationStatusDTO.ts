/* tslint:disable */
/* eslint-disable */
/**
 * Minarsidur
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    MinarsidurAPIModelsAccidentReportsAccidentReportConfirmationPartyEnum,
    MinarsidurAPIModelsAccidentReportsAccidentReportConfirmationPartyEnumFromJSON,
    MinarsidurAPIModelsAccidentReportsAccidentReportConfirmationPartyEnumFromJSONTyped,
    MinarsidurAPIModelsAccidentReportsAccidentReportConfirmationPartyEnumToJSON,
} from './';

/**
 * 
 * @export
 * @interface MinarsidurAPIModelsAccidentReportsResponseGetAccidentReportStatusResponseDTOConfirmationStatusDTO
 */
export interface MinarsidurAPIModelsAccidentReportsResponseGetAccidentReportStatusResponseDTOConfirmationStatusDTO {
    /**
     * 
     * @type {MinarsidurAPIModelsAccidentReportsAccidentReportConfirmationPartyEnum}
     * @memberof MinarsidurAPIModelsAccidentReportsResponseGetAccidentReportStatusResponseDTOConfirmationStatusDTO
     */
    party?: MinarsidurAPIModelsAccidentReportsAccidentReportConfirmationPartyEnum;
    /**
     * 
     * @type {boolean}
     * @memberof MinarsidurAPIModelsAccidentReportsResponseGetAccidentReportStatusResponseDTOConfirmationStatusDTO
     */
    received?: boolean | null;
}

export function MinarsidurAPIModelsAccidentReportsResponseGetAccidentReportStatusResponseDTOConfirmationStatusDTOFromJSON(json: any): MinarsidurAPIModelsAccidentReportsResponseGetAccidentReportStatusResponseDTOConfirmationStatusDTO {
    return MinarsidurAPIModelsAccidentReportsResponseGetAccidentReportStatusResponseDTOConfirmationStatusDTOFromJSONTyped(json, false);
}

export function MinarsidurAPIModelsAccidentReportsResponseGetAccidentReportStatusResponseDTOConfirmationStatusDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MinarsidurAPIModelsAccidentReportsResponseGetAccidentReportStatusResponseDTOConfirmationStatusDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'party': !exists(json, 'party') ? undefined : MinarsidurAPIModelsAccidentReportsAccidentReportConfirmationPartyEnumFromJSON(json['party']),
        'received': !exists(json, 'received') ? undefined : json['received'],
    };
}

export function MinarsidurAPIModelsAccidentReportsResponseGetAccidentReportStatusResponseDTOConfirmationStatusDTOToJSON(value?: MinarsidurAPIModelsAccidentReportsResponseGetAccidentReportStatusResponseDTOConfirmationStatusDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'party': MinarsidurAPIModelsAccidentReportsAccidentReportConfirmationPartyEnumToJSON(value.party),
        'received': value.received,
    };
}


