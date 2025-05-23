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
 * @interface AranguslausFjarnamMal
 */
export interface AranguslausFjarnamMal {
    /**
     * 
     * @type {string}
     * @memberof AranguslausFjarnamMal
     */
    malsnumer?: string;
    /**
     * 
     * @type {Date}
     * @memberof AranguslausFjarnamMal
     */
    dags: Date;
    /**
     * 
     * @type {string}
     * @memberof AranguslausFjarnamMal
     */
    kennitala?: string;
    /**
     * 
     * @type {string}
     * @memberof AranguslausFjarnamMal
     */
    nafn?: string;
    /**
     * 
     * @type {number}
     * @memberof AranguslausFjarnamMal
     */
    upphaedKrofu?: number;
    /**
     * 
     * @type {string}
     * @memberof AranguslausFjarnamMal
     */
    kennitalaUmbodsmanns?: string;
    /**
     * 
     * @type {string}
     * @memberof AranguslausFjarnamMal
     */
    kennitalaGerdarbeidanda?: string;
    /**
     * 
     * @type {string}
     * @memberof AranguslausFjarnamMal
     */
    kennitalaEmbaettis?: string;
}

export function AranguslausFjarnamMalFromJSON(json: any): AranguslausFjarnamMal {
    return AranguslausFjarnamMalFromJSONTyped(json, false);
}

export function AranguslausFjarnamMalFromJSONTyped(json: any, ignoreDiscriminator: boolean): AranguslausFjarnamMal {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'malsnumer': !exists(json, 'malsnumer') ? undefined : json['malsnumer'],
        'dags': (new Date(json['dags'])),
        'kennitala': !exists(json, 'kennitala') ? undefined : json['kennitala'],
        'nafn': !exists(json, 'nafn') ? undefined : json['nafn'],
        'upphaedKrofu': !exists(json, 'upphaedKrofu') ? undefined : json['upphaedKrofu'],
        'kennitalaUmbodsmanns': !exists(json, 'kennitalaUmbodsmanns') ? undefined : json['kennitalaUmbodsmanns'],
        'kennitalaGerdarbeidanda': !exists(json, 'kennitalaGerdarbeidanda') ? undefined : json['kennitalaGerdarbeidanda'],
        'kennitalaEmbaettis': !exists(json, 'kennitalaEmbaettis') ? undefined : json['kennitalaEmbaettis'],
    };
}

export function AranguslausFjarnamMalToJSON(value?: AranguslausFjarnamMal | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'malsnumer': value.malsnumer,
        'dags': (value.dags.toISOString()),
        'kennitala': value.kennitala,
        'nafn': value.nafn,
        'upphaedKrofu': value.upphaedKrofu,
        'kennitalaUmbodsmanns': value.kennitalaUmbodsmanns,
        'kennitalaGerdarbeidanda': value.kennitalaGerdarbeidanda,
        'kennitalaEmbaettis': value.kennitalaEmbaettis,
    };
}


