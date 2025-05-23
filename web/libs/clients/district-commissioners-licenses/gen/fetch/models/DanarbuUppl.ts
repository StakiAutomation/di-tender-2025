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
    EignirDanarbus,
    EignirDanarbusFromJSON,
    EignirDanarbusFromJSONTyped,
    EignirDanarbusToJSON,
    Erfingar,
    ErfingarFromJSON,
    ErfingarFromJSONTyped,
    ErfingarToJSON,
} from './';

/**
 * 
 * @export
 * @interface DanarbuUppl
 */
export interface DanarbuUppl {
    /**
     * 
     * @type {string}
     * @memberof DanarbuUppl
     */
    malsnumer?: string;
    /**
     * 
     * @type {string}
     * @memberof DanarbuUppl
     */
    kennitala?: string;
    /**
     * 
     * @type {string}
     * @memberof DanarbuUppl
     */
    nafn?: string;
    /**
     * 
     * @type {Date}
     * @memberof DanarbuUppl
     */
    danardagur?: Date;
    /**
     * 
     * @type {string}
     * @memberof DanarbuUppl
     */
    logheimili?: string;
    /**
     * 
     * @type {Array<Erfingar>}
     * @memberof DanarbuUppl
     */
    erfingar?: Array<Erfingar>;
    /**
     * 
     * @type {string}
     * @memberof DanarbuUppl
     */
    erfdaskra?: string;
    /**
     * 
     * @type {boolean}
     * @memberof DanarbuUppl
     */
    kaupmali: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DanarbuUppl
     */
    erfdakraVitneskja: boolean;
    /**
     * 
     * @type {Array<EignirDanarbus>}
     * @memberof DanarbuUppl
     */
    eignir?: Array<EignirDanarbus>;
}

export function DanarbuUpplFromJSON(json: any): DanarbuUppl {
    return DanarbuUpplFromJSONTyped(json, false);
}

export function DanarbuUpplFromJSONTyped(json: any, ignoreDiscriminator: boolean): DanarbuUppl {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'malsnumer': !exists(json, 'malsnumer') ? undefined : json['malsnumer'],
        'kennitala': !exists(json, 'kennitala') ? undefined : json['kennitala'],
        'nafn': !exists(json, 'nafn') ? undefined : json['nafn'],
        'danardagur': !exists(json, 'danardagur') ? undefined : (new Date(json['danardagur'])),
        'logheimili': !exists(json, 'logheimili') ? undefined : json['logheimili'],
        'erfingar': !exists(json, 'erfingar') ? undefined : ((json['erfingar'] as Array<any>).map(ErfingarFromJSON)),
        'erfdaskra': !exists(json, 'erfdaskra') ? undefined : json['erfdaskra'],
        'kaupmali': json['kaupmali'],
        'erfdakraVitneskja': json['erfdakraVitneskja'],
        'eignir': !exists(json, 'eignir') ? undefined : ((json['eignir'] as Array<any>).map(EignirDanarbusFromJSON)),
    };
}

export function DanarbuUpplToJSON(value?: DanarbuUppl | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'malsnumer': value.malsnumer,
        'kennitala': value.kennitala,
        'nafn': value.nafn,
        'danardagur': value.danardagur === undefined ? undefined : (value.danardagur.toISOString()),
        'logheimili': value.logheimili,
        'erfingar': value.erfingar === undefined ? undefined : ((value.erfingar as Array<any>).map(ErfingarToJSON)),
        'erfdaskra': value.erfdaskra,
        'kaupmali': value.kaupmali,
        'erfdakraVitneskja': value.erfdakraVitneskja,
        'eignir': value.eignir === undefined ? undefined : ((value.eignir as Array<any>).map(EignirDanarbusToJSON)),
    };
}


