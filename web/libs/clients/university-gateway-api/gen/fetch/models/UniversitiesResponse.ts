/* tslint:disable */
/* eslint-disable */
/**
 * University Gateway
 * API for communication between island.is application system and university gateway DB, and between university gateway DB and universities system (MySchool and Ugla)
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
    University,
    UniversityFromJSON,
    UniversityFromJSONTyped,
    UniversityToJSON,
} from './';

/**
 * 
 * @export
 * @interface UniversitiesResponse
 */
export interface UniversitiesResponse {
    /**
     * University data
     * @type {Array<University>}
     * @memberof UniversitiesResponse
     */
    data: Array<University>;
}

export function UniversitiesResponseFromJSON(json: any): UniversitiesResponse {
    return UniversitiesResponseFromJSONTyped(json, false);
}

export function UniversitiesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UniversitiesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(UniversityFromJSON)),
    };
}

export function UniversitiesResponseToJSON(value?: UniversitiesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(UniversityToJSON)),
    };
}


