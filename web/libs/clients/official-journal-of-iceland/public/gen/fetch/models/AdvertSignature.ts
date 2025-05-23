/* tslint:disable */
/* eslint-disable */
/**
 * The Official Journal of Iceland API
 * API for advarts and publication in the Official Journal of Iceland.
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    AdvertSignatureData,
    AdvertSignatureDataFromJSON,
    AdvertSignatureDataFromJSONTyped,
    AdvertSignatureDataToJSON,
} from './';

/**
 * 
 * @export
 * @interface AdvertSignature
 */
export interface AdvertSignature {
    /**
     * Unique ID for the signature, GUID format.
     * @type {string}
     * @memberof AdvertSignature
     */
    id: string;
    /**
     * Advert ID
     * @type {string}
     * @memberof AdvertSignature
     */
    advertId: string;
    /**
     * Type of the signature
     * @type {string}
     * @memberof AdvertSignature
     */
    type: AdvertSignatureTypeEnum;
    /**
     * Optional addiational signature
     * @type {string}
     * @memberof AdvertSignature
     */
    additional?: string;
    /**
     * Signature data
     * @type {Array<AdvertSignatureData>}
     * @memberof AdvertSignature
     */
    data: Array<AdvertSignatureData>;
}

export function AdvertSignatureFromJSON(json: any): AdvertSignature {
    return AdvertSignatureFromJSONTyped(json, false);
}

export function AdvertSignatureFromJSONTyped(json: any, ignoreDiscriminator: boolean): AdvertSignature {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'advertId': json['advertId'],
        'type': json['type'],
        'additional': !exists(json, 'additional') ? undefined : json['additional'],
        'data': ((json['data'] as Array<any>).map(AdvertSignatureDataFromJSON)),
    };
}

export function AdvertSignatureToJSON(value?: AdvertSignature | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'advertId': value.advertId,
        'type': value.type,
        'additional': value.additional,
        'data': ((value.data as Array<any>).map(AdvertSignatureDataToJSON)),
    };
}

/**
* @export
* @enum {string}
*/
export enum AdvertSignatureTypeEnum {
    Hefbundin = 'Hefðbundin',
    Nefnd = 'Nefnd'
}


