/* tslint:disable */
/* eslint-disable */
/**
 * FJS Charge v2
 * FJS Charge service
 *
 * The version of the OpenAPI document: 2.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    ModelError,
    ModelErrorFromJSON,
    ModelErrorFromJSONTyped,
    ModelErrorToJSON,
} from './';

/**
 * 
 * @export
 * @interface ChargerequestIDDELETEResponse
 */
export interface ChargerequestIDDELETEResponse {
    /**
     * 
     * @type {string}
     * @memberof ChargerequestIDDELETEResponse
     */
    receptionID: string;
    /**
     * 
     * @type {ModelError}
     * @memberof ChargerequestIDDELETEResponse
     */
    error: ModelError;
}

export function ChargerequestIDDELETEResponseFromJSON(json: any): ChargerequestIDDELETEResponse {
    return ChargerequestIDDELETEResponseFromJSONTyped(json, false);
}

export function ChargerequestIDDELETEResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChargerequestIDDELETEResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'receptionID': json['receptionID'],
        'error': ModelErrorFromJSON(json['error']),
    };
}

export function ChargerequestIDDELETEResponseToJSON(value?: ChargerequestIDDELETEResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'receptionID': value.receptionID,
        'error': ModelErrorToJSON(value.error),
    };
}


