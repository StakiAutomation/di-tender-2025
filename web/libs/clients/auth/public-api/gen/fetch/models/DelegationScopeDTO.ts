/* tslint:disable */
/* eslint-disable */
/**
 * IdentityServer Public API
 * Public API for IdentityServer.   The swagger document can be downloaded by appending `-json` to the last path segment.
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
 * @interface DelegationScopeDTO
 */
export interface DelegationScopeDTO {
    /**
     * 
     * @type {string}
     * @memberof DelegationScopeDTO
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DelegationScopeDTO
     */
    delegationId: string;
    /**
     * 
     * @type {string}
     * @memberof DelegationScopeDTO
     */
    scopeName: string;
    /**
     * 
     * @type {string}
     * @memberof DelegationScopeDTO
     */
    displayName: string;
    /**
     * 
     * @type {Date}
     * @memberof DelegationScopeDTO
     */
    validFrom: Date;
    /**
     * 
     * @type {Date}
     * @memberof DelegationScopeDTO
     */
    validTo?: Date | null;
}

export function DelegationScopeDTOFromJSON(json: any): DelegationScopeDTO {
    return DelegationScopeDTOFromJSONTyped(json, false);
}

export function DelegationScopeDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): DelegationScopeDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'delegationId': json['delegationId'],
        'scopeName': json['scopeName'],
        'displayName': json['displayName'],
        'validFrom': (new Date(json['validFrom'])),
        'validTo': !exists(json, 'validTo') ? undefined : (json['validTo'] === null ? null : new Date(json['validTo'])),
    };
}

export function DelegationScopeDTOToJSON(value?: DelegationScopeDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'delegationId': value.delegationId,
        'scopeName': value.scopeName,
        'displayName': value.displayName,
        'validFrom': (value.validFrom.toISOString()),
        'validTo': value.validTo === undefined ? undefined : (value.validTo === null ? null : value.validTo.toISOString()),
    };
}


