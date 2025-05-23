/* tslint:disable */
/* eslint-disable */
/**
 * GoPro External Integration REST Services - API version 1.0
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
    Contact,
    ContactFromJSON,
    ContactFromJSONTyped,
    ContactToJSON,
} from './';

/**
 * GetContact method response structure
 * @export
 * @interface GetContactResponse
 */
export interface GetContactResponse {
    /**
     * 
     * @type {Contact}
     * @memberof GetContactResponse
     */
    contact?: Contact;
    /**
     * General success indicator
     * @type {boolean}
     * @memberof GetContactResponse
     */
    succeeded?: boolean;
    /**
     * HTTP response status code
     * @type {number}
     * @memberof GetContactResponse
     */
    returnCode?: number;
    /**
     * Additional message containing information or error message
     * @type {string}
     * @memberof GetContactResponse
     */
    message?: string;
}

export function GetContactResponseFromJSON(json: any): GetContactResponse {
    return GetContactResponseFromJSONTyped(json, false);
}

export function GetContactResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetContactResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'contact': !exists(json, 'contact') ? undefined : ContactFromJSON(json['contact']),
        'succeeded': !exists(json, 'succeeded') ? undefined : json['succeeded'],
        'returnCode': !exists(json, 'returnCode') ? undefined : json['returnCode'],
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function GetContactResponseToJSON(value?: GetContactResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'contact': ContactToJSON(value.contact),
        'succeeded': value.succeeded,
        'returnCode': value.returnCode,
        'message': value.message,
    };
}


