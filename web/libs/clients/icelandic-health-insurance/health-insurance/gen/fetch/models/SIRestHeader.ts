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
 * @interface SIRestHeader
 */
export interface SIRestHeader {
    /**
     * 
     * @type {string}
     * @memberof SIRestHeader
     */
    authorization?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SIRestHeader
     */
    userName: string;
    /**
     * 
     * @type {string}
     * @memberof SIRestHeader
     */
    password: string;
    /**
     * 
     * @type {string}
     * @memberof SIRestHeader
     */
    sender?: string | null;
}

export function SIRestHeaderFromJSON(json: any): SIRestHeader {
    return SIRestHeaderFromJSONTyped(json, false);
}

export function SIRestHeaderFromJSONTyped(json: any, ignoreDiscriminator: boolean): SIRestHeader {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'authorization': !exists(json, 'authorization') ? undefined : json['authorization'],
        'userName': json['userName'],
        'password': json['password'],
        'sender': !exists(json, 'sender') ? undefined : json['sender'],
    };
}

export function SIRestHeaderToJSON(value?: SIRestHeader | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'authorization': value.authorization,
        'userName': value.userName,
        'password': value.password,
        'sender': value.sender,
    };
}


