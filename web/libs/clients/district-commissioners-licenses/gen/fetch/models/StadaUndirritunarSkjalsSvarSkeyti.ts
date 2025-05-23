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
import {
    StadaUndirritunar,
    StadaUndirritunarFromJSON,
    StadaUndirritunarFromJSONTyped,
    StadaUndirritunarToJSON,
} from './';

/**
 * 
 * @export
 * @interface StadaUndirritunarSkjalsSvarSkeyti
 */
export interface StadaUndirritunarSkjalsSvarSkeyti {
    /**
     * 
     * @type {string}
     * @memberof StadaUndirritunarSkjalsSvarSkeyti
     */
    audkenni?: string;
    /**
     * 
     * @type {string}
     * @memberof StadaUndirritunarSkjalsSvarSkeyti
     */
    skilabod?: string;
    /**
     * 
     * @type {StadaUndirritunar}
     * @memberof StadaUndirritunarSkjalsSvarSkeyti
     */
    stadaUndirritunar: StadaUndirritunar;
}

export function StadaUndirritunarSkjalsSvarSkeytiFromJSON(json: any): StadaUndirritunarSkjalsSvarSkeyti {
    return StadaUndirritunarSkjalsSvarSkeytiFromJSONTyped(json, false);
}

export function StadaUndirritunarSkjalsSvarSkeytiFromJSONTyped(json: any, ignoreDiscriminator: boolean): StadaUndirritunarSkjalsSvarSkeyti {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'audkenni': !exists(json, 'audkenni') ? undefined : json['audkenni'],
        'skilabod': !exists(json, 'skilabod') ? undefined : json['skilabod'],
        'stadaUndirritunar': StadaUndirritunarFromJSON(json['stadaUndirritunar']),
    };
}

export function StadaUndirritunarSkjalsSvarSkeytiToJSON(value?: StadaUndirritunarSkjalsSvarSkeyti | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'audkenni': value.audkenni,
        'skilabod': value.skilabod,
        'stadaUndirritunar': StadaUndirritunarToJSON(value.stadaUndirritunar),
    };
}


