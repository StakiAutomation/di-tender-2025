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

/**
 * 
 * @export
 * @enum {string}
 */
export enum SubscriptionType {
    AllChanges = 'AllChanges',
    StatusChanges = 'StatusChanges',
    OnlyNew = 'OnlyNew'
}

export function SubscriptionTypeFromJSON(json: any): SubscriptionType {
    return SubscriptionTypeFromJSONTyped(json, false);
}

export function SubscriptionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionType {
    return json as SubscriptionType;
}

export function SubscriptionTypeToJSON(value?: SubscriptionType | null): any {
    return value as any;
}

