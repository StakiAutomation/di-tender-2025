/* tslint:disable */
/* eslint-disable */
/**
 * Icelandic Health Insurance (IHI) - Island.is
 * Webservices for the X-Road serveces for Island.is
 *
 * The version of the OpenAPI document: v1
 * Contact: hjalp@sjukra.is
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ConfirmationInfo
 */
export interface ConfirmationInfo {
    /**
     * 1 = Attachment has been received by IHI, 0 = Not
     * @type {number}
     * @memberof ConfirmationInfo
     */
    isReceived?: number;
    /**
     * Confirmation type
     * 1 = Injured or representative party, 2 = Company party
     * @type {number}
     * @memberof ConfirmationInfo
     */
    confirmationType?: number;
}

export function ConfirmationInfoFromJSON(json: any): ConfirmationInfo {
    return ConfirmationInfoFromJSONTyped(json, false);
}

export function ConfirmationInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfirmationInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'isReceived': !exists(json, 'isReceived') ? undefined : json['isReceived'],
        'confirmationType': !exists(json, 'confirmationType') ? undefined : json['confirmationType'],
    };
}

export function ConfirmationInfoToJSON(value?: ConfirmationInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'isReceived': value.isReceived,
        'confirmationType': value.confirmationType,
    };
}


