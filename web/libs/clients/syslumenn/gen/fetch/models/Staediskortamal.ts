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
 * @interface Staediskortamal
 */
export interface Staediskortamal {
    /**
     * 
     * @type {string}
     * @memberof Staediskortamal
     */
    malsnumer?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Staediskortamal
     */
    kennitala?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Staediskortamal
     */
    nafn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Staediskortamal
     */
    tegundMalsadila?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Staediskortamal
     */
    undirtegund?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Staediskortamal
     */
    tegund?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Staediskortamal
     */
    stada?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Staediskortamal
     */
    malalok?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof Staediskortamal
     */
    mottekidDagsetning?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof Staediskortamal
     */
    malalokDagsetning?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof Staediskortamal
     */
    gildistimi?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof Staediskortamal
     */
    utgafudagur?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof Staediskortamal
     */
    utgefandi?: string | null;
}

export function StaediskortamalFromJSON(json: any): Staediskortamal {
    return StaediskortamalFromJSONTyped(json, false);
}

export function StaediskortamalFromJSONTyped(json: any, ignoreDiscriminator: boolean): Staediskortamal {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'malsnumer': !exists(json, 'malsnumer') ? undefined : json['malsnumer'],
        'kennitala': !exists(json, 'kennitala') ? undefined : json['kennitala'],
        'nafn': !exists(json, 'nafn') ? undefined : json['nafn'],
        'tegundMalsadila': !exists(json, 'tegundMalsadila') ? undefined : json['tegundMalsadila'],
        'undirtegund': !exists(json, 'undirtegund') ? undefined : json['undirtegund'],
        'tegund': !exists(json, 'tegund') ? undefined : json['tegund'],
        'stada': !exists(json, 'stada') ? undefined : json['stada'],
        'malalok': !exists(json, 'malalok') ? undefined : json['malalok'],
        'mottekidDagsetning': !exists(json, 'mottekidDagsetning') ? undefined : (json['mottekidDagsetning'] === null ? null : new Date(json['mottekidDagsetning'])),
        'malalokDagsetning': !exists(json, 'malalokDagsetning') ? undefined : (json['malalokDagsetning'] === null ? null : new Date(json['malalokDagsetning'])),
        'gildistimi': !exists(json, 'gildistimi') ? undefined : (json['gildistimi'] === null ? null : new Date(json['gildistimi'])),
        'utgafudagur': !exists(json, 'utgafudagur') ? undefined : (json['utgafudagur'] === null ? null : new Date(json['utgafudagur'])),
        'utgefandi': !exists(json, 'utgefandi') ? undefined : json['utgefandi'],
    };
}

export function StaediskortamalToJSON(value?: Staediskortamal | null): any {
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
        'tegundMalsadila': value.tegundMalsadila,
        'undirtegund': value.undirtegund,
        'tegund': value.tegund,
        'stada': value.stada,
        'malalok': value.malalok,
        'mottekidDagsetning': value.mottekidDagsetning === undefined ? undefined : (value.mottekidDagsetning === null ? null : value.mottekidDagsetning.toISOString()),
        'malalokDagsetning': value.malalokDagsetning === undefined ? undefined : (value.malalokDagsetning === null ? null : value.malalokDagsetning.toISOString()),
        'gildistimi': value.gildistimi === undefined ? undefined : (value.gildistimi === null ? null : value.gildistimi.toISOString()),
        'utgafudagur': value.utgafudagur === undefined ? undefined : (value.utgafudagur === null ? null : value.utgafudagur.toISOString()),
        'utgefandi': value.utgefandi,
    };
}


