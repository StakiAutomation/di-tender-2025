/* tslint:disable */
/* eslint-disable */
/**
 * User Profile backend
 * Backend providing user profiles for Island.is
 *
 * The version of the OpenAPI document: 1.0
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
 * @interface UserDeviceTokenDto
 */
export interface UserDeviceTokenDto {
    /**
     * 
     * @type {string}
     * @memberof UserDeviceTokenDto
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof UserDeviceTokenDto
     */
    nationalId: string;
    /**
     * 
     * @type {string}
     * @memberof UserDeviceTokenDto
     */
    deviceToken: string;
    /**
     * 
     * @type {Date}
     * @memberof UserDeviceTokenDto
     */
    created: Date;
    /**
     * 
     * @type {Date}
     * @memberof UserDeviceTokenDto
     */
    modified: Date;
}

export function UserDeviceTokenDtoFromJSON(json: any): UserDeviceTokenDto {
    return UserDeviceTokenDtoFromJSONTyped(json, false);
}

export function UserDeviceTokenDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserDeviceTokenDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'nationalId': json['nationalId'],
        'deviceToken': json['deviceToken'],
        'created': (new Date(json['created'])),
        'modified': (new Date(json['modified'])),
    };
}

export function UserDeviceTokenDtoToJSON(value?: UserDeviceTokenDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'nationalId': value.nationalId,
        'deviceToken': value.deviceToken,
        'created': (value.created.toISOString()),
        'modified': (value.modified.toISOString()),
    };
}


