/* tslint:disable */
/* eslint-disable */
/**
 * Þjónustugátt starfskerfa sýslumanna
 * Rafrænn aðgengi að gögnum og aðgerðum starfskerfis sýslumanna
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
 * 
 * @export
 * @interface InnskraningSvarSkeyti
 */
export interface InnskraningSvarSkeyti {
    /**
     * 
     * @type {string}
     * @memberof InnskraningSvarSkeyti
     */
    skilabod?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InnskraningSvarSkeyti
     */
    audkenni?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InnskraningSvarSkeyti
     */
    accessToken?: string | null;
}

export function InnskraningSvarSkeytiFromJSON(json: any): InnskraningSvarSkeyti {
    return InnskraningSvarSkeytiFromJSONTyped(json, false);
}

export function InnskraningSvarSkeytiFromJSONTyped(json: any, ignoreDiscriminator: boolean): InnskraningSvarSkeyti {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'skilabod': !exists(json, 'skilabod') ? undefined : json['skilabod'],
        'audkenni': !exists(json, 'audkenni') ? undefined : json['audkenni'],
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
    };
}

export function InnskraningSvarSkeytiToJSON(value?: InnskraningSvarSkeyti | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'skilabod': value.skilabod,
        'audkenni': value.audkenni,
        'accessToken': value.accessToken,
    };
}


