/* tslint:disable */
/* eslint-disable */
/**
 * SGS Rest API
 * Plate ordering API developed in .Net6.0 - Release-3 : 20230125.2
 *
 * The version of the OpenAPI document: 1.0
 * Contact: tolvuhjalp@samgongustofa.is
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ReturnTypeMessage
 */
export interface ReturnTypeMessage {
    /**
     * 
     * @type {number}
     * @memberof ReturnTypeMessage
     */
    lookupNo?: number | null;
    /**
     * 
     * @type {string}
     * @memberof ReturnTypeMessage
     */
    warnSever?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReturnTypeMessage
     */
    errorMess?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReturnTypeMessage
     */
    permno?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ReturnTypeMessage
     */
    warningSerialNumber?: number | null;
}

export function ReturnTypeMessageFromJSON(json: any): ReturnTypeMessage {
    return ReturnTypeMessageFromJSONTyped(json, false);
}

export function ReturnTypeMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReturnTypeMessage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lookupNo': !exists(json, 'lookupNo') ? undefined : json['lookupNo'],
        'warnSever': !exists(json, 'warnSever') ? undefined : json['warnSever'],
        'errorMess': !exists(json, 'errorMess') ? undefined : json['errorMess'],
        'permno': !exists(json, 'permno') ? undefined : json['permno'],
        'warningSerialNumber': !exists(json, 'warningSerialNumber') ? undefined : json['warningSerialNumber'],
    };
}

export function ReturnTypeMessageToJSON(value?: ReturnTypeMessage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'lookupNo': value.lookupNo,
        'warnSever': value.warnSever,
        'errorMess': value.errorMess,
        'permno': value.permno,
        'warningSerialNumber': value.warningSerialNumber,
    };
}


