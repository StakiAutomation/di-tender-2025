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
 * @interface ThjodskraSkeyti
 */
export interface ThjodskraSkeyti {
    /**
     * 
     * @type {string}
     * @memberof ThjodskraSkeyti
     */
    audkenni?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ThjodskraSkeyti
     */
    kennitala?: string | null;
}

export function ThjodskraSkeytiFromJSON(json: any): ThjodskraSkeyti {
    return ThjodskraSkeytiFromJSONTyped(json, false);
}

export function ThjodskraSkeytiFromJSONTyped(json: any, ignoreDiscriminator: boolean): ThjodskraSkeyti {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'audkenni': !exists(json, 'audkenni') ? undefined : json['audkenni'],
        'kennitala': !exists(json, 'kennitala') ? undefined : json['kennitala'],
    };
}

export function ThjodskraSkeytiToJSON(value?: ThjodskraSkeyti | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'audkenni': value.audkenni,
        'kennitala': value.kennitala,
    };
}


