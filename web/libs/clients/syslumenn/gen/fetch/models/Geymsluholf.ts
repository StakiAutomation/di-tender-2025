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
 * @interface Geymsluholf
 */
export interface Geymsluholf {
    /**
     * 
     * @type {string}
     * @memberof Geymsluholf
     */
    audkenni?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Geymsluholf
     */
    stadsetning?: string | null;
}

export function GeymsluholfFromJSON(json: any): Geymsluholf {
    return GeymsluholfFromJSONTyped(json, false);
}

export function GeymsluholfFromJSONTyped(json: any, ignoreDiscriminator: boolean): Geymsluholf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'audkenni': !exists(json, 'audkenni') ? undefined : json['audkenni'],
        'stadsetning': !exists(json, 'stadsetning') ? undefined : json['stadsetning'],
    };
}

export function GeymsluholfToJSON(value?: Geymsluholf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'audkenni': value.audkenni,
        'stadsetning': value.stadsetning,
    };
}


