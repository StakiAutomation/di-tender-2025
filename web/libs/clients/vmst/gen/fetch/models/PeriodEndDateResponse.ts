/* tslint:disable */
/* eslint-disable */
/**
 * FOS - Parental Leaves API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
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
 * @interface PeriodEndDateResponse
 */
export interface PeriodEndDateResponse {
    /**
     * 
     * @type {Date}
     * @memberof PeriodEndDateResponse
     */
    periodEndDate?: Date;
}

export function PeriodEndDateResponseFromJSON(json: any): PeriodEndDateResponse {
    return PeriodEndDateResponseFromJSONTyped(json, false);
}

export function PeriodEndDateResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PeriodEndDateResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'periodEndDate': !exists(json, 'periodEndDate') ? undefined : (new Date(json['periodEndDate'])),
    };
}

export function PeriodEndDateResponseToJSON(value?: PeriodEndDateResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'periodEndDate': value.periodEndDate === undefined ? undefined : (value.periodEndDate.toISOString()),
    };
}


