/* tslint:disable */
/* eslint-disable */
/**
 * Financial Aid Backend
 * This is the backend for the financial aid.
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface MunicipalityActivityDto
 */
export interface MunicipalityActivityDto {
    /**
     * 
     * @type {boolean}
     * @memberof MunicipalityActivityDto
     */
    active: boolean;
}

export function MunicipalityActivityDtoFromJSON(json: any): MunicipalityActivityDto {
    return MunicipalityActivityDtoFromJSONTyped(json, false);
}

export function MunicipalityActivityDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): MunicipalityActivityDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'active': json['active'],
    };
}

export function MunicipalityActivityDtoToJSON(value?: MunicipalityActivityDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'active': value.active,
    };
}


