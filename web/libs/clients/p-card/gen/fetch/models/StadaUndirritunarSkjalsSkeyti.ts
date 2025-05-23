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
 * @interface StadaUndirritunarSkjalsSkeyti
 */
export interface StadaUndirritunarSkjalsSkeyti {
    /**
     * 
     * @type {string}
     * @memberof StadaUndirritunarSkjalsSkeyti
     */
    audkenni?: string;
    /**
     * 
     * @type {string}
     * @memberof StadaUndirritunarSkjalsSkeyti
     */
    malsnumer?: string;
    /**
     * 
     * @type {string}
     * @memberof StadaUndirritunarSkjalsSkeyti
     */
    skjalasnid?: string;
    /**
     * 
     * @type {string}
     * @memberof StadaUndirritunarSkjalsSkeyti
     */
    kennitalaUndirritanda?: string;
}

export function StadaUndirritunarSkjalsSkeytiFromJSON(json: any): StadaUndirritunarSkjalsSkeyti {
    return StadaUndirritunarSkjalsSkeytiFromJSONTyped(json, false);
}

export function StadaUndirritunarSkjalsSkeytiFromJSONTyped(json: any, ignoreDiscriminator: boolean): StadaUndirritunarSkjalsSkeyti {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'audkenni': !exists(json, 'audkenni') ? undefined : json['audkenni'],
        'malsnumer': !exists(json, 'malsnumer') ? undefined : json['malsnumer'],
        'skjalasnid': !exists(json, 'skjalasnid') ? undefined : json['skjalasnid'],
        'kennitalaUndirritanda': !exists(json, 'kennitalaUndirritanda') ? undefined : json['kennitalaUndirritanda'],
    };
}

export function StadaUndirritunarSkjalsSkeytiToJSON(value?: StadaUndirritunarSkjalsSkeyti | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'audkenni': value.audkenni,
        'malsnumer': value.malsnumer,
        'skjalasnid': value.skjalasnid,
        'kennitalaUndirritanda': value.kennitalaUndirritanda,
    };
}


