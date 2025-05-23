/* tslint:disable */
/* eslint-disable */
/**
 * Verdicts API
 * API for accessing court verdicts and related data
 *
 * The version of the OpenAPI document: 2.0.0
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
 * @interface KeywordInfo
 */
export interface KeywordInfo {
    /**
     * 
     * @type {string}
     * @memberof KeywordInfo
     */
    label?: string;
}

export function KeywordInfoFromJSON(json: any): KeywordInfo {
    return KeywordInfoFromJSONTyped(json, false);
}

export function KeywordInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): KeywordInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'label': !exists(json, 'label') ? undefined : json['label'],
    };
}

export function KeywordInfoToJSON(value?: KeywordInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'label': value.label,
    };
}


