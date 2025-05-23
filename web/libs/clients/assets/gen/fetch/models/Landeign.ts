/* tslint:disable */
/* eslint-disable */
/**
 * Fasteignir-Xroad
 * Uppfletting í fasteignaskrá.
 *
 * The version of the OpenAPI document: v1
 * Contact: skra@skra.is
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    ThinglysturEigandiWrapper,
    ThinglysturEigandiWrapperFromJSON,
    ThinglysturEigandiWrapperFromJSONTyped,
    ThinglysturEigandiWrapperToJSON,
} from './';

/**
 * 
 * @export
 * @interface Landeign
 */
export interface Landeign {
    /**
     * 
     * @type {string}
     * @memberof Landeign
     */
    landeignarnumer?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Landeign
     */
    lodamat?: number;
    /**
     * 
     * @type {string}
     * @memberof Landeign
     */
    notkunBirting?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Landeign
     */
    flatarmal?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Landeign
     */
    flatarmalEining?: string | null;
    /**
     * 
     * @type {ThinglysturEigandiWrapper}
     * @memberof Landeign
     */
    thinglystirEigendur?: ThinglysturEigandiWrapper | null;
}

export function LandeignFromJSON(json: any): Landeign {
    return LandeignFromJSONTyped(json, false);
}

export function LandeignFromJSONTyped(json: any, ignoreDiscriminator: boolean): Landeign {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'landeignarnumer': !exists(json, 'landeignarnumer') ? undefined : json['landeignarnumer'],
        'lodamat': !exists(json, 'lodamat') ? undefined : json['lodamat'],
        'notkunBirting': !exists(json, 'notkunBirting') ? undefined : json['notkunBirting'],
        'flatarmal': !exists(json, 'flatarmal') ? undefined : json['flatarmal'],
        'flatarmalEining': !exists(json, 'flatarmalEining') ? undefined : json['flatarmalEining'],
        'thinglystirEigendur': !exists(json, 'thinglystirEigendur') ? undefined : ThinglysturEigandiWrapperFromJSON(json['thinglystirEigendur']),
    };
}

export function LandeignToJSON(value?: Landeign | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'landeignarnumer': value.landeignarnumer,
        'lodamat': value.lodamat,
        'notkunBirting': value.notkunBirting,
        'flatarmal': value.flatarmal,
        'flatarmalEining': value.flatarmalEining,
        'thinglystirEigendur': ThinglysturEigandiWrapperToJSON(value.thinglystirEigendur),
    };
}


