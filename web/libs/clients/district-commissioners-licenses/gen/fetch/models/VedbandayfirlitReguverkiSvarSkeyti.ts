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
 * @interface VedbandayfirlitReguverkiSvarSkeyti
 */
export interface VedbandayfirlitReguverkiSvarSkeyti {
    /**
     * 
     * @type {string}
     * @memberof VedbandayfirlitReguverkiSvarSkeyti
     */
    fastnum?: string;
    /**
     * 
     * @type {number}
     * @memberof VedbandayfirlitReguverkiSvarSkeyti
     */
    landNr: number;
    /**
     * 
     * @type {string}
     * @memberof VedbandayfirlitReguverkiSvarSkeyti
     */
    heiti?: string;
    /**
     * 
     * @type {string}
     * @memberof VedbandayfirlitReguverkiSvarSkeyti
     */
    svfn?: string;
    /**
     * 
     * @type {string}
     * @memberof VedbandayfirlitReguverkiSvarSkeyti
     */
    svetiarfelag?: string;
    /**
     * 
     * @type {string}
     * @memberof VedbandayfirlitReguverkiSvarSkeyti
     */
    notkun?: string;
    /**
     * 
     * @type {string}
     * @memberof VedbandayfirlitReguverkiSvarSkeyti
     */
    eining?: string;
    /**
     * 
     * @type {string}
     * @memberof VedbandayfirlitReguverkiSvarSkeyti
     */
    byggd?: string;
    /**
     * 
     * @type {string}
     * @memberof VedbandayfirlitReguverkiSvarSkeyti
     */
    embaetti?: string;
    /**
     * 
     * @type {string}
     * @memberof VedbandayfirlitReguverkiSvarSkeyti
     */
    embaettiNumer?: string;
}

export function VedbandayfirlitReguverkiSvarSkeytiFromJSON(json: any): VedbandayfirlitReguverkiSvarSkeyti {
    return VedbandayfirlitReguverkiSvarSkeytiFromJSONTyped(json, false);
}

export function VedbandayfirlitReguverkiSvarSkeytiFromJSONTyped(json: any, ignoreDiscriminator: boolean): VedbandayfirlitReguverkiSvarSkeyti {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fastnum': !exists(json, 'fastnum') ? undefined : json['fastnum'],
        'landNr': json['landNr'],
        'heiti': !exists(json, 'heiti') ? undefined : json['heiti'],
        'svfn': !exists(json, 'svfn') ? undefined : json['svfn'],
        'svetiarfelag': !exists(json, 'svetiarfelag') ? undefined : json['svetiarfelag'],
        'notkun': !exists(json, 'notkun') ? undefined : json['notkun'],
        'eining': !exists(json, 'eining') ? undefined : json['eining'],
        'byggd': !exists(json, 'byggd') ? undefined : json['byggd'],
        'embaetti': !exists(json, 'embaetti') ? undefined : json['embaetti'],
        'embaettiNumer': !exists(json, 'embaettiNumer') ? undefined : json['embaettiNumer'],
    };
}

export function VedbandayfirlitReguverkiSvarSkeytiToJSON(value?: VedbandayfirlitReguverkiSvarSkeyti | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fastnum': value.fastnum,
        'landNr': value.landNr,
        'heiti': value.heiti,
        'svfn': value.svfn,
        'svetiarfelag': value.svetiarfelag,
        'notkun': value.notkun,
        'eining': value.eining,
        'byggd': value.byggd,
        'embaetti': value.embaetti,
        'embaettiNumer': value.embaettiNumer,
    };
}


