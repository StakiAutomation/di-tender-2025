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
 * @interface ActorProfileDto
 */
export interface ActorProfileDto {
    /**
     * 
     * @type {string}
     * @memberof ActorProfileDto
     */
    fromNationalId: string;
    /**
     * 
     * @type {boolean}
     * @memberof ActorProfileDto
     */
    emailNotifications: boolean;
    /**
     * 
     * @type {string}
     * @memberof ActorProfileDto
     */
    email?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ActorProfileDto
     */
    emailVerified: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ActorProfileDto
     */
    documentNotifications: boolean;
    /**
     * 
     * @type {string}
     * @memberof ActorProfileDto
     */
    locale?: ActorProfileDtoLocaleEnum;
}

export function ActorProfileDtoFromJSON(json: any): ActorProfileDto {
    return ActorProfileDtoFromJSONTyped(json, false);
}

export function ActorProfileDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActorProfileDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fromNationalId': json['fromNationalId'],
        'emailNotifications': json['emailNotifications'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'emailVerified': json['emailVerified'],
        'documentNotifications': json['documentNotifications'],
        'locale': !exists(json, 'locale') ? undefined : json['locale'],
    };
}

export function ActorProfileDtoToJSON(value?: ActorProfileDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fromNationalId': value.fromNationalId,
        'emailNotifications': value.emailNotifications,
        'email': value.email,
        'emailVerified': value.emailVerified,
        'documentNotifications': value.documentNotifications,
        'locale': value.locale,
    };
}

/**
* @export
* @enum {string}
*/
export enum ActorProfileDtoLocaleEnum {
    En = 'en',
    Is = 'is'
}


