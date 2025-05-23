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
/**
 * 
 * @export
 * @interface UserAdviceCaseResult
 */
export interface UserAdviceCaseResult {
    /**
     * 
     * @type {string}
     * @memberof UserAdviceCaseResult
     */
    caseNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserAdviceCaseResult
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserAdviceCaseResult
     */
    statusName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserAdviceCaseResult
     */
    institutionName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserAdviceCaseResult
     */
    typeName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserAdviceCaseResult
     */
    policyAreaName?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof UserAdviceCaseResult
     */
    processBegins?: Date;
    /**
     * 
     * @type {Date}
     * @memberof UserAdviceCaseResult
     */
    processEnds?: Date;
}

export function UserAdviceCaseResultFromJSON(json: any): UserAdviceCaseResult {
    return UserAdviceCaseResultFromJSONTyped(json, false);
}

export function UserAdviceCaseResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserAdviceCaseResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'caseNumber': !exists(json, 'caseNumber') ? undefined : json['caseNumber'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'statusName': !exists(json, 'statusName') ? undefined : json['statusName'],
        'institutionName': !exists(json, 'institutionName') ? undefined : json['institutionName'],
        'typeName': !exists(json, 'typeName') ? undefined : json['typeName'],
        'policyAreaName': !exists(json, 'policyAreaName') ? undefined : json['policyAreaName'],
        'processBegins': !exists(json, 'processBegins') ? undefined : (new Date(json['processBegins'])),
        'processEnds': !exists(json, 'processEnds') ? undefined : (new Date(json['processEnds'])),
    };
}

export function UserAdviceCaseResultToJSON(value?: UserAdviceCaseResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'caseNumber': value.caseNumber,
        'name': value.name,
        'statusName': value.statusName,
        'institutionName': value.institutionName,
        'typeName': value.typeName,
        'policyAreaName': value.policyAreaName,
        'processBegins': value.processBegins === undefined ? undefined : (value.processBegins.toISOString()),
        'processEnds': value.processEnds === undefined ? undefined : (value.processEnds.toISOString()),
    };
}


