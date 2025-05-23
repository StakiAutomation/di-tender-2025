/* tslint:disable */
/* eslint-disable */
/**
 * IdentityServer Admin api
 * Api for administration.
 *
 * The version of the OpenAPI document: 2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    TranslatedValueDto,
    TranslatedValueDtoFromJSON,
    TranslatedValueDtoFromJSONTyped,
    TranslatedValueDtoToJSON,
} from './';

/**
 * 
 * @export
 * @interface AdminCreateScopeDto
 */
export interface AdminCreateScopeDto {
    /**
     * 
     * @type {Array<TranslatedValueDto>}
     * @memberof AdminCreateScopeDto
     */
    displayName?: Array<TranslatedValueDto>;
    /**
     * 
     * @type {Array<TranslatedValueDto>}
     * @memberof AdminCreateScopeDto
     */
    description?: Array<TranslatedValueDto>;
    /**
     * 
     * @type {boolean}
     * @memberof AdminCreateScopeDto
     */
    grantToAuthenticatedUser?: boolean;
    /**
     * Use addedDelegationTypes or removedDelegationTypes instead
     * @type {boolean}
     * @memberof AdminCreateScopeDto
     */
    grantToLegalGuardians?: boolean;
    /**
     * Use addedDelegationTypes or removedDelegationTypes instead
     * @type {boolean}
     * @memberof AdminCreateScopeDto
     */
    grantToProcuringHolders?: boolean;
    /**
     * Use addedDelegationTypes or removedDelegationTypes instead
     * @type {boolean}
     * @memberof AdminCreateScopeDto
     */
    allowExplicitDelegationGrant?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AdminCreateScopeDto
     */
    isAccessControlled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AdminCreateScopeDto
     */
    automaticDelegationGrant?: boolean;
    /**
     * Use addedDelegationTypes or removedDelegationTypes instead
     * @type {boolean}
     * @memberof AdminCreateScopeDto
     */
    grantToPersonalRepresentatives?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AdminCreateScopeDto
     */
    name: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof AdminCreateScopeDto
     */
    supportedDelegationTypes?: Array<string>;
}

export function AdminCreateScopeDtoFromJSON(json: any): AdminCreateScopeDto {
    return AdminCreateScopeDtoFromJSONTyped(json, false);
}

export function AdminCreateScopeDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AdminCreateScopeDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'displayName': !exists(json, 'displayName') ? undefined : ((json['displayName'] as Array<any>).map(TranslatedValueDtoFromJSON)),
        'description': !exists(json, 'description') ? undefined : ((json['description'] as Array<any>).map(TranslatedValueDtoFromJSON)),
        'grantToAuthenticatedUser': !exists(json, 'grantToAuthenticatedUser') ? undefined : json['grantToAuthenticatedUser'],
        'grantToLegalGuardians': !exists(json, 'grantToLegalGuardians') ? undefined : json['grantToLegalGuardians'],
        'grantToProcuringHolders': !exists(json, 'grantToProcuringHolders') ? undefined : json['grantToProcuringHolders'],
        'allowExplicitDelegationGrant': !exists(json, 'allowExplicitDelegationGrant') ? undefined : json['allowExplicitDelegationGrant'],
        'isAccessControlled': !exists(json, 'isAccessControlled') ? undefined : json['isAccessControlled'],
        'automaticDelegationGrant': !exists(json, 'automaticDelegationGrant') ? undefined : json['automaticDelegationGrant'],
        'grantToPersonalRepresentatives': !exists(json, 'grantToPersonalRepresentatives') ? undefined : json['grantToPersonalRepresentatives'],
        'name': json['name'],
        'supportedDelegationTypes': !exists(json, 'supportedDelegationTypes') ? undefined : json['supportedDelegationTypes'],
    };
}

export function AdminCreateScopeDtoToJSON(value?: AdminCreateScopeDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'displayName': value.displayName === undefined ? undefined : ((value.displayName as Array<any>).map(TranslatedValueDtoToJSON)),
        'description': value.description === undefined ? undefined : ((value.description as Array<any>).map(TranslatedValueDtoToJSON)),
        'grantToAuthenticatedUser': value.grantToAuthenticatedUser,
        'grantToLegalGuardians': value.grantToLegalGuardians,
        'grantToProcuringHolders': value.grantToProcuringHolders,
        'allowExplicitDelegationGrant': value.allowExplicitDelegationGrant,
        'isAccessControlled': value.isAccessControlled,
        'automaticDelegationGrant': value.automaticDelegationGrant,
        'grantToPersonalRepresentatives': value.grantToPersonalRepresentatives,
        'name': value.name,
        'supportedDelegationTypes': value.supportedDelegationTypes,
    };
}


