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
 * @interface StofnaskjalOgSendaTilUndirritunarSkeyti
 */
export interface StofnaskjalOgSendaTilUndirritunarSkeyti {
    /**
     * 
     * @type {string}
     * @memberof StofnaskjalOgSendaTilUndirritunarSkeyti
     */
    audkenni?: string;
    /**
     * 
     * @type {string}
     * @memberof StofnaskjalOgSendaTilUndirritunarSkeyti
     */
    malsnumer?: string;
    /**
     * 
     * @type {string}
     * @memberof StofnaskjalOgSendaTilUndirritunarSkeyti
     */
    kennitalaMalsadila?: string;
    /**
     * 
     * @type {string}
     * @memberof StofnaskjalOgSendaTilUndirritunarSkeyti
     */
    skjalasnid?: string;
    /**
     * 
     * @type {Date}
     * @memberof StofnaskjalOgSendaTilUndirritunarSkeyti
     */
    gildirTil: Date;
    /**
     * 
     * @type {string}
     * @memberof StofnaskjalOgSendaTilUndirritunarSkeyti
     */
    smsTexti?: string;
}

export function StofnaskjalOgSendaTilUndirritunarSkeytiFromJSON(json: any): StofnaskjalOgSendaTilUndirritunarSkeyti {
    return StofnaskjalOgSendaTilUndirritunarSkeytiFromJSONTyped(json, false);
}

export function StofnaskjalOgSendaTilUndirritunarSkeytiFromJSONTyped(json: any, ignoreDiscriminator: boolean): StofnaskjalOgSendaTilUndirritunarSkeyti {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'audkenni': !exists(json, 'audkenni') ? undefined : json['audkenni'],
        'malsnumer': !exists(json, 'malsnumer') ? undefined : json['malsnumer'],
        'kennitalaMalsadila': !exists(json, 'kennitalaMalsadila') ? undefined : json['kennitalaMalsadila'],
        'skjalasnid': !exists(json, 'skjalasnid') ? undefined : json['skjalasnid'],
        'gildirTil': (new Date(json['gildirTil'])),
        'smsTexti': !exists(json, 'smsTexti') ? undefined : json['smsTexti'],
    };
}

export function StofnaskjalOgSendaTilUndirritunarSkeytiToJSON(value?: StofnaskjalOgSendaTilUndirritunarSkeyti | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'audkenni': value.audkenni,
        'malsnumer': value.malsnumer,
        'kennitalaMalsadila': value.kennitalaMalsadila,
        'skjalasnid': value.skjalasnid,
        'gildirTil': (value.gildirTil.toISOString()),
        'smsTexti': value.smsTexti,
    };
}


