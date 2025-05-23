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
 * Single contact information. Used in relation with forms, documents, etc.
 * where only a single contact can be assigned
 * @export
 * @interface LinkedContact
 */
export interface LinkedContact {
    /**
     * Unique record ID (a GUID) of an existing contact
     * @type {string}
     * @memberof LinkedContact
     */
    id?: string;
    /**
     * Full name of the person or company
     * @type {string}
     * @memberof LinkedContact
     */
    name: string;
    /**
     * National identification number
     * @type {string}
     * @memberof LinkedContact
     */
    idnumber: string;
    /**
     * Type of client. Possible values: Individual, Company, Contact
     * @type {string}
     * @memberof LinkedContact
     */
    type?: string;
    /**
     * Street address of the client
     * @type {string}
     * @memberof LinkedContact
     */
    address?: string;
    /**
     * Email address
     * @type {string}
     * @memberof LinkedContact
     */
    email?: string;
    /**
     * Web address, home page
     * @type {string}
     * @memberof LinkedContact
     */
    webPage?: string;
    /**
     * Main (default) phone number for contact
     * @type {string}
     * @memberof LinkedContact
     */
    phone?: string;
    /**
     * Postal code
     * @type {string}
     * @memberof LinkedContact
     */
    postalCode?: string;
    /**
     * City name
     * @type {string}
     * @memberof LinkedContact
     */
    city?: string;
}

export function LinkedContactFromJSON(json: any): LinkedContact {
    return LinkedContactFromJSONTyped(json, false);
}

export function LinkedContactFromJSONTyped(json: any, ignoreDiscriminator: boolean): LinkedContact {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': json['name'],
        'idnumber': json['idnumber'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'webPage': !exists(json, 'webPage') ? undefined : json['webPage'],
        'phone': !exists(json, 'phone') ? undefined : json['phone'],
        'postalCode': !exists(json, 'postalCode') ? undefined : json['postalCode'],
        'city': !exists(json, 'city') ? undefined : json['city'],
    };
}

export function LinkedContactToJSON(value?: LinkedContact | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'idnumber': value.idnumber,
        'type': value.type,
        'address': value.address,
        'email': value.email,
        'webPage': value.webPage,
        'phone': value.phone,
        'postalCode': value.postalCode,
        'city': value.city,
    };
}


