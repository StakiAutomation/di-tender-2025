/* tslint:disable */
/* eslint-disable */
/**
 * HusbotAPI
 * HusbotAPI gives overview of payments for housing benefits.
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
 * @interface PageInfo
 */
export interface PageInfo {
    /**
     * 
     * @type {boolean}
     * @memberof PageInfo
     */
    hasPreviousPage?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PageInfo
     */
    hasNextPage?: boolean;
}

export function PageInfoFromJSON(json: any): PageInfo {
    return PageInfoFromJSONTyped(json, false);
}

export function PageInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hasPreviousPage': !exists(json, 'hasPreviousPage') ? undefined : json['hasPreviousPage'],
        'hasNextPage': !exists(json, 'hasNextPage') ? undefined : json['hasNextPage'],
    };
}

export function PageInfoToJSON(value?: PageInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hasPreviousPage': value.hasPreviousPage,
        'hasNextPage': value.hasNextPage,
    };
}


