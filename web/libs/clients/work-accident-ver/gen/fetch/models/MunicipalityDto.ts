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
 * @interface MunicipalityDto
 */
export interface MunicipalityDto {
    /**
     * 
     * @type {string}
     * @memberof MunicipalityDto
     */
    code?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MunicipalityDto
     */
    name?: string | null;
}

export function MunicipalityDtoFromJSON(json: any): MunicipalityDto {
    return MunicipalityDtoFromJSONTyped(json, false);
}

export function MunicipalityDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): MunicipalityDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function MunicipalityDtoToJSON(value?: MunicipalityDto | null): any {
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


