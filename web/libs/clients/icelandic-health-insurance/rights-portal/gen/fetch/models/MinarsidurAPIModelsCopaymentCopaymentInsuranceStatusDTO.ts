/* tslint:disable */
/* eslint-disable */
/**
 * Minarsidur
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
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
 * @interface MinarsidurAPIModelsCopaymentCopaymentInsuranceStatusDTO
 */
export interface MinarsidurAPIModelsCopaymentCopaymentInsuranceStatusDTO {
    /**
     * 
     * @type {string}
     * @memberof MinarsidurAPIModelsCopaymentCopaymentInsuranceStatusDTO
     */
    display?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MinarsidurAPIModelsCopaymentCopaymentInsuranceStatusDTO
     */
    code?: string | null;
}

export function MinarsidurAPIModelsCopaymentCopaymentInsuranceStatusDTOFromJSON(json: any): MinarsidurAPIModelsCopaymentCopaymentInsuranceStatusDTO {
    return MinarsidurAPIModelsCopaymentCopaymentInsuranceStatusDTOFromJSONTyped(json, false);
}

export function MinarsidurAPIModelsCopaymentCopaymentInsuranceStatusDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MinarsidurAPIModelsCopaymentCopaymentInsuranceStatusDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'display': !exists(json, 'display') ? undefined : json['display'],
        'code': !exists(json, 'code') ? undefined : json['code'],
    };
}

export function MinarsidurAPIModelsCopaymentCopaymentInsuranceStatusDTOToJSON(value?: MinarsidurAPIModelsCopaymentCopaymentInsuranceStatusDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'display': value.display,
        'code': value.code,
    };
}


