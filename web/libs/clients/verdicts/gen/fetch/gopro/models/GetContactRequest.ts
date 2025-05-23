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
/**
 * GetContact method request structure
 * @export
 * @interface GetContactRequest
 */
export interface GetContactRequest {
    /**
     * Unique record ID (GUID) of the contact or identity number (SSN) of the related individual
     * @type {string}
     * @memberof GetContactRequest
     */
    contactId: string;
    /**
     * Identity number (SSN) or unique record ID (GUID) of the company which is represented by the individual
     * @type {string}
     * @memberof GetContactRequest
     */
    companyId?: string;
    /**
     * Optional. When true then search for inactive contact/company as well. Default is false.
     * @type {boolean}
     * @memberof GetContactRequest
     */
    searchInactive?: boolean;
}

export function GetContactRequestFromJSON(json: any): GetContactRequest {
    return GetContactRequestFromJSONTyped(json, false);
}

export function GetContactRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetContactRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'contactId': json['contactId'],
        'companyId': !exists(json, 'companyId') ? undefined : json['companyId'],
        'searchInactive': !exists(json, 'searchInactive') ? undefined : json['searchInactive'],
    };
}

export function GetContactRequestToJSON(value?: GetContactRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'contactId': value.contactId,
        'companyId': value.companyId,
        'searchInactive': value.searchInactive,
    };
}


