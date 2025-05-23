/* tslint:disable */
/* eslint-disable */
/**
 * Þjónustugátt starfskerfa sýslumanna
 * Rafrænn aðgengi að gögnum og aðgerðum starfskerfis sýslumanna
 *
 * The version of the OpenAPI document: v1
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
 * @interface Insurancetype
 */
export interface Insurancetype {
    /**
     * 
     * @type {number}
     * @memberof Insurancetype
     */
    insuranceTypeRegistrationNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof Insurancetype
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Insurancetype
     */
    code?: string | null;
}

export function InsurancetypeFromJSON(json: any): Insurancetype {
    return InsurancetypeFromJSONTyped(json, false);
}

export function InsurancetypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): Insurancetype {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'insuranceTypeRegistrationNumber': !exists(json, 'insuranceTypeRegistrationNumber') ? undefined : json['insuranceTypeRegistrationNumber'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'code': !exists(json, 'code') ? undefined : json['code'],
    };
}

export function InsurancetypeToJSON(value?: Insurancetype | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'insuranceTypeRegistrationNumber': value.insuranceTypeRegistrationNumber,
        'name': value.name,
        'code': value.code,
    };
}


