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
    MinarsidurAPIModelsAccidentReportsReporterDTOReportingForEnum,
    MinarsidurAPIModelsAccidentReportsReporterDTOReportingForEnumFromJSON,
    MinarsidurAPIModelsAccidentReportsReporterDTOReportingForEnumFromJSONTyped,
    MinarsidurAPIModelsAccidentReportsReporterDTOReportingForEnumToJSON,
} from './';

/**
 * 
 * @export
 * @interface MinarsidurAPIModelsAccidentReportsReporterDTO
 */
export interface MinarsidurAPIModelsAccidentReportsReporterDTO {
    /**
     * 
     * @type {string}
     * @memberof MinarsidurAPIModelsAccidentReportsReporterDTO
     */
    nationalId: string | null;
    /**
     * 
     * @type {string}
     * @memberof MinarsidurAPIModelsAccidentReportsReporterDTO
     */
    name: string | null;
    /**
     * 
     * @type {string}
     * @memberof MinarsidurAPIModelsAccidentReportsReporterDTO
     */
    address: string | null;
    /**
     * 
     * @type {string}
     * @memberof MinarsidurAPIModelsAccidentReportsReporterDTO
     */
    city: string | null;
    /**
     * 
     * @type {string}
     * @memberof MinarsidurAPIModelsAccidentReportsReporterDTO
     */
    postcode: string | null;
    /**
     * 
     * @type {string}
     * @memberof MinarsidurAPIModelsAccidentReportsReporterDTO
     */
    email: string | null;
    /**
     * 
     * @type {string}
     * @memberof MinarsidurAPIModelsAccidentReportsReporterDTO
     */
    phone?: string | null;
    /**
     * 
     * @type {MinarsidurAPIModelsAccidentReportsReporterDTOReportingForEnum}
     * @memberof MinarsidurAPIModelsAccidentReportsReporterDTO
     */
    reportingFor: MinarsidurAPIModelsAccidentReportsReporterDTOReportingForEnum;
}

export function MinarsidurAPIModelsAccidentReportsReporterDTOFromJSON(json: any): MinarsidurAPIModelsAccidentReportsReporterDTO {
    return MinarsidurAPIModelsAccidentReportsReporterDTOFromJSONTyped(json, false);
}

export function MinarsidurAPIModelsAccidentReportsReporterDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MinarsidurAPIModelsAccidentReportsReporterDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'nationalId': json['nationalId'],
        'name': json['name'],
        'address': json['address'],
        'city': json['city'],
        'postcode': json['postcode'],
        'email': json['email'],
        'phone': !exists(json, 'phone') ? undefined : json['phone'],
        'reportingFor': MinarsidurAPIModelsAccidentReportsReporterDTOReportingForEnumFromJSON(json['reportingFor']),
    };
}

export function MinarsidurAPIModelsAccidentReportsReporterDTOToJSON(value?: MinarsidurAPIModelsAccidentReportsReporterDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'nationalId': value.nationalId,
        'name': value.name,
        'address': value.address,
        'city': value.city,
        'postcode': value.postcode,
        'email': value.email,
        'phone': value.phone,
        'reportingFor': MinarsidurAPIModelsAccidentReportsReporterDTOReportingForEnumToJSON(value.reportingFor),
    };
}


