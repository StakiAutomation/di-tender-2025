/* tslint:disable */
/* eslint-disable */
/**
 * The Official Journal of Iceland Application API
 * This api is responsible for communications with the island.is application system.
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    ApplicationCase,
    ApplicationCaseFromJSON,
    ApplicationCaseFromJSONTyped,
    ApplicationCaseToJSON,
} from './';

/**
 * 
 * @export
 * @interface GetApplicationCaseResponse
 */
export interface GetApplicationCaseResponse {
    /**
     * 
     * @type {ApplicationCase}
     * @memberof GetApplicationCaseResponse
     */
    applicationCase: ApplicationCase;
}

export function GetApplicationCaseResponseFromJSON(json: any): GetApplicationCaseResponse {
    return GetApplicationCaseResponseFromJSONTyped(json, false);
}

export function GetApplicationCaseResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetApplicationCaseResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'applicationCase': ApplicationCaseFromJSON(json['applicationCase']),
    };
}

export function GetApplicationCaseResponseToJSON(value?: GetApplicationCaseResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'applicationCase': ApplicationCaseToJSON(value.applicationCase),
    };
}


