/* tslint:disable */
/* eslint-disable */
/**
 * Námskeið
 * Vefþjónusta til þess að fletta upp á og skrá í námskeið.
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
 * @interface PaymentInfoDTO
 */
export interface PaymentInfoDTO {
    /**
     * 
     * @type {string}
     * @memberof PaymentInfoDTO
     */
    companyNationalId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaymentInfoDTO
     */
    paymentId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaymentInfoDTO
     */
    paymentExplanation?: string | null;
}

export function PaymentInfoDTOFromJSON(json: any): PaymentInfoDTO {
    return PaymentInfoDTOFromJSONTyped(json, false);
}

export function PaymentInfoDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentInfoDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'companyNationalId': !exists(json, 'companyNationalId') ? undefined : json['companyNationalId'],
        'paymentId': !exists(json, 'paymentId') ? undefined : json['paymentId'],
        'paymentExplanation': !exists(json, 'paymentExplanation') ? undefined : json['paymentExplanation'],
    };
}

export function PaymentInfoDTOToJSON(value?: PaymentInfoDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'companyNationalId': value.companyNationalId,
        'paymentId': value.paymentId,
        'paymentExplanation': value.paymentExplanation,
    };
}


