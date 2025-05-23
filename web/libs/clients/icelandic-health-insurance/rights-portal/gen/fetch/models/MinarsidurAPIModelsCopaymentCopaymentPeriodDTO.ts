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
import {
    MinarsidurAPIModelsCopaymentCopaymentInsuranceStatusDTO,
    MinarsidurAPIModelsCopaymentCopaymentInsuranceStatusDTOFromJSON,
    MinarsidurAPIModelsCopaymentCopaymentInsuranceStatusDTOFromJSONTyped,
    MinarsidurAPIModelsCopaymentCopaymentInsuranceStatusDTOToJSON,
} from './';

/**
 * 
 * @export
 * @interface MinarsidurAPIModelsCopaymentCopaymentPeriodDTO
 */
export interface MinarsidurAPIModelsCopaymentCopaymentPeriodDTO {
    /**
     * 
     * @type {number}
     * @memberof MinarsidurAPIModelsCopaymentCopaymentPeriodDTO
     */
    id?: number | null;
    /**
     * 
     * @type {MinarsidurAPIModelsCopaymentCopaymentInsuranceStatusDTO}
     * @memberof MinarsidurAPIModelsCopaymentCopaymentPeriodDTO
     */
    status?: MinarsidurAPIModelsCopaymentCopaymentInsuranceStatusDTO;
    /**
     * 
     * @type {string}
     * @memberof MinarsidurAPIModelsCopaymentCopaymentPeriodDTO
     */
    month?: string | null;
    /**
     * 
     * @type {number}
     * @memberof MinarsidurAPIModelsCopaymentCopaymentPeriodDTO
     */
    maximumPayment?: number | null;
    /**
     * 
     * @type {number}
     * @memberof MinarsidurAPIModelsCopaymentCopaymentPeriodDTO
     */
    monthPayment?: number | null;
    /**
     * 
     * @type {number}
     * @memberof MinarsidurAPIModelsCopaymentCopaymentPeriodDTO
     */
    overpaid?: number | null;
    /**
     * 
     * @type {number}
     * @memberof MinarsidurAPIModelsCopaymentCopaymentPeriodDTO
     */
    repaid?: number | null;
}

export function MinarsidurAPIModelsCopaymentCopaymentPeriodDTOFromJSON(json: any): MinarsidurAPIModelsCopaymentCopaymentPeriodDTO {
    return MinarsidurAPIModelsCopaymentCopaymentPeriodDTOFromJSONTyped(json, false);
}

export function MinarsidurAPIModelsCopaymentCopaymentPeriodDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MinarsidurAPIModelsCopaymentCopaymentPeriodDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'status': !exists(json, 'status') ? undefined : MinarsidurAPIModelsCopaymentCopaymentInsuranceStatusDTOFromJSON(json['status']),
        'month': !exists(json, 'month') ? undefined : json['month'],
        'maximumPayment': !exists(json, 'maximumPayment') ? undefined : json['maximumPayment'],
        'monthPayment': !exists(json, 'monthPayment') ? undefined : json['monthPayment'],
        'overpaid': !exists(json, 'overpaid') ? undefined : json['overpaid'],
        'repaid': !exists(json, 'repaid') ? undefined : json['repaid'],
    };
}

export function MinarsidurAPIModelsCopaymentCopaymentPeriodDTOToJSON(value?: MinarsidurAPIModelsCopaymentCopaymentPeriodDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'status': MinarsidurAPIModelsCopaymentCopaymentInsuranceStatusDTOToJSON(value.status),
        'month': value.month,
        'maximumPayment': value.maximumPayment,
        'monthPayment': value.monthPayment,
        'overpaid': value.overpaid,
        'repaid': value.repaid,
    };
}


