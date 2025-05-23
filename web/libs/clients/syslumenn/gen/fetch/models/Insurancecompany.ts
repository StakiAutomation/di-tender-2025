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
 * @interface Insurancecompany
 */
export interface Insurancecompany {
    /**
     * 
     * @type {number}
     * @memberof Insurancecompany
     */
    insuranceCompanyRegistrationNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof Insurancecompany
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Insurancecompany
     */
    nationalIdentificationNumber?: string | null;
}

export function InsurancecompanyFromJSON(json: any): Insurancecompany {
    return InsurancecompanyFromJSONTyped(json, false);
}

export function InsurancecompanyFromJSONTyped(json: any, ignoreDiscriminator: boolean): Insurancecompany {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'insuranceCompanyRegistrationNumber': !exists(json, 'insuranceCompanyRegistrationNumber') ? undefined : json['insuranceCompanyRegistrationNumber'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'nationalIdentificationNumber': !exists(json, 'nationalIdentificationNumber') ? undefined : json['nationalIdentificationNumber'],
    };
}

export function InsurancecompanyToJSON(value?: Insurancecompany | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'insuranceCompanyRegistrationNumber': value.insuranceCompanyRegistrationNumber,
        'name': value.name,
        'nationalIdentificationNumber': value.nationalIdentificationNumber,
    };
}


