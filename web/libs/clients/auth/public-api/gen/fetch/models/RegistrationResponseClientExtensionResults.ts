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
import {
    ClientExtensionResultsCredProps,
    ClientExtensionResultsCredPropsFromJSON,
    ClientExtensionResultsCredPropsFromJSONTyped,
    ClientExtensionResultsCredPropsToJSON,
} from './';

/**
 * 
 * @export
 * @interface RegistrationResponseClientExtensionResults
 */
export interface RegistrationResponseClientExtensionResults {
    /**
     * 
     * @type {boolean}
     * @memberof RegistrationResponseClientExtensionResults
     */
    appid?: boolean;
    /**
     * 
     * @type {ClientExtensionResultsCredProps}
     * @memberof RegistrationResponseClientExtensionResults
     */
    credProps?: ClientExtensionResultsCredProps;
    /**
     * 
     * @type {boolean}
     * @memberof RegistrationResponseClientExtensionResults
     */
    hmacCreateSecret?: boolean;
}

export function RegistrationResponseClientExtensionResultsFromJSON(json: any): RegistrationResponseClientExtensionResults {
    return RegistrationResponseClientExtensionResultsFromJSONTyped(json, false);
}

export function RegistrationResponseClientExtensionResultsFromJSONTyped(json: any, ignoreDiscriminator: boolean): RegistrationResponseClientExtensionResults {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appid': !exists(json, 'appid') ? undefined : json['appid'],
        'credProps': !exists(json, 'credProps') ? undefined : ClientExtensionResultsCredPropsFromJSON(json['credProps']),
        'hmacCreateSecret': !exists(json, 'hmacCreateSecret') ? undefined : json['hmacCreateSecret'],
    };
}

export function RegistrationResponseClientExtensionResultsToJSON(value?: RegistrationResponseClientExtensionResults | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appid': value.appid,
        'credProps': ClientExtensionResultsCredPropsToJSON(value.credProps),
        'hmacCreateSecret': value.hmacCreateSecret,
    };
}


