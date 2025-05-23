/* tslint:disable */
/* eslint-disable */
/**
 * The Official Journal of Iceland API
 * API for advarts and publication in the Official Journal of Iceland.
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
    Department,
    DepartmentFromJSON,
    DepartmentFromJSONTyped,
    DepartmentToJSON,
} from './';

/**
 * 
 * @export
 * @interface GetDepartmentResponse
 */
export interface GetDepartmentResponse {
    /**
     * The department that was found.
     * @type {Department}
     * @memberof GetDepartmentResponse
     */
    department: Department;
}

export function GetDepartmentResponseFromJSON(json: any): GetDepartmentResponse {
    return GetDepartmentResponseFromJSONTyped(json, false);
}

export function GetDepartmentResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetDepartmentResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'department': DepartmentFromJSON(json['department']),
    };
}

export function GetDepartmentResponseToJSON(value?: GetDepartmentResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'department': DepartmentToJSON(value.department),
    };
}


