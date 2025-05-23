/* tslint:disable */
/* eslint-disable */
/**
 * Gagnaveita Fiskistofu
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * Contact: olafur.palmi.gudnason@fiskistofa.is
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface AflamarkTegundirByTimabilDTO
 */
export interface AflamarkTegundirByTimabilDTO {
    /**
     * Auðkenni kvótategundar.
     * @type {number}
     * @memberof AflamarkTegundirByTimabilDTO
     */
    kvotategund?: number;
    /**
     * Heiti kvótategundar.
     * @type {string}
     * @memberof AflamarkTegundirByTimabilDTO
     */
    kvotategundHeiti?: string | null;
    /**
     * Dagsetning hvenær kvótategund tók gildi.
     * @type {Date}
     * @memberof AflamarkTegundirByTimabilDTO
     */
    gildirFra?: Date;
    /**
     * Dagsetning hvenær kvótategund fellur úr gildi.
     * @type {Date}
     * @memberof AflamarkTegundirByTimabilDTO
     */
    gildirTil?: Date;
    /**
     * Þorskígildisstuðull fisktegundar.
     * @type {number}
     * @memberof AflamarkTegundirByTimabilDTO
     */
    thorskigildi?: number;
    /**
     * Heildar magn sem var úthlutað til aflamarks.
     * @type {number}
     * @memberof AflamarkTegundirByTimabilDTO
     */
    heildarAflamark?: number;
}

export function AflamarkTegundirByTimabilDTOFromJSON(json: any): AflamarkTegundirByTimabilDTO {
    return AflamarkTegundirByTimabilDTOFromJSONTyped(json, false);
}

export function AflamarkTegundirByTimabilDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AflamarkTegundirByTimabilDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'kvotategund': !exists(json, 'kvotategund') ? undefined : json['kvotategund'],
        'kvotategundHeiti': !exists(json, 'kvotategundHeiti') ? undefined : json['kvotategundHeiti'],
        'gildirFra': !exists(json, 'gildirFra') ? undefined : (new Date(json['gildirFra'])),
        'gildirTil': !exists(json, 'gildirTil') ? undefined : (new Date(json['gildirTil'])),
        'thorskigildi': !exists(json, 'thorskigildi') ? undefined : json['thorskigildi'],
        'heildarAflamark': !exists(json, 'heildarAflamark') ? undefined : json['heildarAflamark'],
    };
}

export function AflamarkTegundirByTimabilDTOToJSON(value?: AflamarkTegundirByTimabilDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'kvotategund': value.kvotategund,
        'kvotategundHeiti': value.kvotategundHeiti,
        'gildirFra': value.gildirFra === undefined ? undefined : (value.gildirFra.toISOString()),
        'gildirTil': value.gildirTil === undefined ? undefined : (value.gildirTil.toISOString()),
        'thorskigildi': value.thorskigildi,
        'heildarAflamark': value.heildarAflamark,
    };
}


