/* tslint:disable */
/* eslint-disable */
/**
 * Samradsgatt.Api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    SubscriptionType,
    SubscriptionTypeFromJSON,
    SubscriptionTypeFromJSONTyped,
    SubscriptionTypeToJSON,
} from './';

/**
 * 
 * @export
 * @interface UserSubscriptionResult
 */
export interface UserSubscriptionResult {
    /**
     * 
     * @type {number}
     * @memberof UserSubscriptionResult
     */
    id?: number;
    /**
     * 
     * @type {SubscriptionType}
     * @memberof UserSubscriptionResult
     */
    subscriptionType?: SubscriptionType;
}

export function UserSubscriptionResultFromJSON(json: any): UserSubscriptionResult {
    return UserSubscriptionResultFromJSONTyped(json, false);
}

export function UserSubscriptionResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserSubscriptionResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'subscriptionType': !exists(json, 'subscriptionType') ? undefined : SubscriptionTypeFromJSON(json['subscriptionType']),
    };
}

export function UserSubscriptionResultToJSON(value?: UserSubscriptionResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'subscriptionType': SubscriptionTypeToJSON(value.subscriptionType),
    };
}


