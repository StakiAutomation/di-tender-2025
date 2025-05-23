/* tslint:disable */
/* eslint-disable */
/**
 * GoPro.JusticePortal.Rest
 * Provides access to Justice Portal rest service
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@gopro.net
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CredentialsData
 */
export interface CredentialsData {
    /**
     * Name of the user.
     * @type {string}
     * @memberof CredentialsData
     */
    userName: string;
    /**
     * Password of the user.
     * @type {string}
     * @memberof CredentialsData
     */
    password: string;
}

export function CredentialsDataFromJSON(json: any): CredentialsData {
    return CredentialsDataFromJSONTyped(json, false);
}

export function CredentialsDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CredentialsData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userName': json['userName'],
        'password': json['password'],
    };
}

export function CredentialsDataToJSON(value?: CredentialsData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'userName': value.userName,
        'password': value.password,
    };
}


