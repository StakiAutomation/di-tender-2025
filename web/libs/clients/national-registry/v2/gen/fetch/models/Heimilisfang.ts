/* tslint:disable */
/* eslint-disable */
/**
 * Einstaklingur
 * The API retrieves information about individuals stored in the Icelandic registry.
 *
 * The version of the OpenAPI document: v1
 * Contact: skra@skra.is
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Heimilisfang
 */
export interface Heimilisfang {
    /**
     * Street name
     * @type {string}
     * @memberof Heimilisfang
     */
    heiti: string;
    /**
     * Postal code
     * @type {string}
     * @memberof Heimilisfang
     */
    postnumer?: string | null;
    /**
     * Location
     * @type {string}
     * @memberof Heimilisfang
     */
    stadur?: string | null;
    /**
     * Municipality number - definition can be looked up using resources in "Lyklar"
     * @type {string}
     * @memberof Heimilisfang
     */
    sveitarfelagsnumer?: string | null;
}

export function HeimilisfangFromJSON(json: any): Heimilisfang {
    return HeimilisfangFromJSONTyped(json, false);
}

export function HeimilisfangFromJSONTyped(json: any, ignoreDiscriminator: boolean): Heimilisfang {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'heiti': json['heiti'],
        'postnumer': !exists(json, 'postnumer') ? undefined : json['postnumer'],
        'stadur': !exists(json, 'stadur') ? undefined : json['stadur'],
        'sveitarfelagsnumer': !exists(json, 'sveitarfelagsnumer') ? undefined : json['sveitarfelagsnumer'],
    };
}

export function HeimilisfangToJSON(value?: Heimilisfang | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'heiti': value.heiti,
        'postnumer': value.postnumer,
        'stadur': value.stadur,
        'sveitarfelagsnumer': value.sveitarfelagsnumer,
    };
}


