/* tslint:disable */
/* eslint-disable */
/**
 * Hugverkastofan WebAPI
 * Hugverkastofan WebAPI v3
 *
 * The version of the OpenAPI document: v3
 * Contact: ut@hugverk.is
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface HUXELSAPICommonPricesUnitPrice
 */
export interface HUXELSAPICommonPricesUnitPrice {
    /**
     * 
     * @type {string}
     * @memberof HUXELSAPICommonPricesUnitPrice
     */
    code?: string | null;
    /**
     * 
     * @type {string}
     * @memberof HUXELSAPICommonPricesUnitPrice
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof HUXELSAPICommonPricesUnitPrice
     */
    descriptionEN?: string | null;
    /**
     * 
     * @type {string}
     * @memberof HUXELSAPICommonPricesUnitPrice
     */
    fee?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof HUXELSAPICommonPricesUnitPrice
     */
    caseType?: Array<string> | null;
}

export function HUXELSAPICommonPricesUnitPriceFromJSON(json: any): HUXELSAPICommonPricesUnitPrice {
    return HUXELSAPICommonPricesUnitPriceFromJSONTyped(json, false);
}

export function HUXELSAPICommonPricesUnitPriceFromJSONTyped(json: any, ignoreDiscriminator: boolean): HUXELSAPICommonPricesUnitPrice {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'descriptionEN': !exists(json, 'descriptionEN') ? undefined : json['descriptionEN'],
        'fee': !exists(json, 'fee') ? undefined : json['fee'],
        'caseType': !exists(json, 'caseType') ? undefined : json['caseType'],
    };
}

export function HUXELSAPICommonPricesUnitPriceToJSON(value?: HUXELSAPICommonPricesUnitPrice | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'description': value.description,
        'descriptionEN': value.descriptionEN,
        'fee': value.fee,
        'caseType': value.caseType,
    };
}


