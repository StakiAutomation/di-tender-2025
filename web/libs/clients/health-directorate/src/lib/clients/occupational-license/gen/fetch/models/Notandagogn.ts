/* tslint:disable */
/* eslint-disable */
/**
 * Landlæknir API
 * Vefþjónustur á vegum Landlæknis.
 *
 * The version of the OpenAPI document: 1.0.1
 * Contact: holmfridur.palsdottir@landlaeknir.is
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Data entered by the applicant to be inspected bu the ruleset
 * @export
 * @interface Notandagogn
 */
export interface Notandagogn {
    /**
     * Group name
     * @type {string}
     * @memberof Notandagogn
     */
    flokkur?: string | null;
    /**
     * Name of the variable
     * @type {string}
     * @memberof Notandagogn
     */
    heiti?: string | null;
    /**
     * Type of variable
     * @type {string}
     * @memberof Notandagogn
     */
    tegund?: string | null;
    /**
     * Value for inspection
     * @type {string}
     * @memberof Notandagogn
     */
    gildi?: string | null;
}

export function NotandagognFromJSON(json: any): Notandagogn {
    return NotandagognFromJSONTyped(json, false);
}

export function NotandagognFromJSONTyped(json: any, ignoreDiscriminator: boolean): Notandagogn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'flokkur': !exists(json, 'flokkur') ? undefined : json['flokkur'],
        'heiti': !exists(json, 'heiti') ? undefined : json['heiti'],
        'tegund': !exists(json, 'tegund') ? undefined : json['tegund'],
        'gildi': !exists(json, 'gildi') ? undefined : json['gildi'],
    };
}

export function NotandagognToJSON(value?: Notandagogn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'flokkur': value.flokkur,
        'heiti': value.heiti,
        'tegund': value.tegund,
        'gildi': value.gildi,
    };
}


