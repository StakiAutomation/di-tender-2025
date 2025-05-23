/* tslint:disable */
/* eslint-disable */
/**
 * Tilkynna vinnuslys
 * Vefþjónusta til þess að senda inn tilkynningar um vinnuslys.
 *
 * The version of the OpenAPI document: v1
 * Contact: ut@vinnueftirlit.is
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface WorkplaceHealthAndSafetyDto
 */
export interface WorkplaceHealthAndSafetyDto {
    /**
     * 
     * @type {string}
     * @memberof WorkplaceHealthAndSafetyDto
     */
    code?: string | null;
    /**
     * 
     * @type {string}
     * @memberof WorkplaceHealthAndSafetyDto
     */
    name?: string | null;
}

export function WorkplaceHealthAndSafetyDtoFromJSON(json: any): WorkplaceHealthAndSafetyDto {
    return WorkplaceHealthAndSafetyDtoFromJSONTyped(json, false);
}

export function WorkplaceHealthAndSafetyDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkplaceHealthAndSafetyDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function WorkplaceHealthAndSafetyDtoToJSON(value?: WorkplaceHealthAndSafetyDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'name': value.name,
    };
}


