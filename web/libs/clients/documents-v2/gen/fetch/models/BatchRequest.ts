/* tslint:disable */
/* eslint-disable */
/**
 * IslandIs.Skjalabirting
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
 * @interface BatchRequest
 */
export interface BatchRequest {
    /**
     * 
     * @type {Array<string>}
     * @memberof BatchRequest
     */
    ids?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof BatchRequest
     */
    status?: boolean;
}

export function BatchRequestFromJSON(json: any): BatchRequest {
    return BatchRequestFromJSONTyped(json, false);
}

export function BatchRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BatchRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ids': !exists(json, 'ids') ? undefined : json['ids'],
        'status': !exists(json, 'status') ? undefined : json['status'],
    };
}

export function BatchRequestToJSON(value?: BatchRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ids': value.ids,
        'status': value.status,
    };
}


