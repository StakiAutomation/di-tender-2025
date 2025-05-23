/* tslint:disable */
/* eslint-disable */
/**
 * Veiðileyfi API
 * Skjölun á veiðileyfavefþjónustu Fiskistofu.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: olafur.palmi.gudnason@fiskistofa.is
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    UmbedinGildistakaTakmorkun,
    UmbedinGildistakaTakmorkunFromJSON,
    UmbedinGildistakaTakmorkunFromJSONTyped,
    UmbedinGildistakaTakmorkunToJSON,
} from './';

/**
 * 
 * @export
 * @interface Valmoguleiki
 */
export interface Valmoguleiki {
    /**
     * Lykill dropdown valmöguleika.
     * @type {string}
     * @memberof Valmoguleiki
     */
    lykill?: string | null;
    /**
     * Lýsing á selection sem birtist notanda.
     * @type {string}
     * @memberof Valmoguleiki
     */
    lysing?: string | null;
    /**
     * 
     * @type {UmbedinGildistakaTakmorkun}
     * @memberof Valmoguleiki
     */
    umbedinGildistakaTakmorkun?: UmbedinGildistakaTakmorkun;
    /**
     * Er select fieldinn disabled?
     * @type {boolean}
     * @memberof Valmoguleiki
     */
    ovirkt?: boolean;
    /**
     * Ef true, þá hleypir UI notanda ekki áfram með umsókn.
     * @type {boolean}
     * @memberof Valmoguleiki
     */
    ogildurValkostur?: boolean;
}

export function ValmoguleikiFromJSON(json: any): Valmoguleiki {
    return ValmoguleikiFromJSONTyped(json, false);
}

export function ValmoguleikiFromJSONTyped(json: any, ignoreDiscriminator: boolean): Valmoguleiki {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lykill': !exists(json, 'lykill') ? undefined : json['lykill'],
        'lysing': !exists(json, 'lysing') ? undefined : json['lysing'],
        'umbedinGildistakaTakmorkun': !exists(json, 'umbedinGildistakaTakmorkun') ? undefined : UmbedinGildistakaTakmorkunFromJSON(json['umbedinGildistakaTakmorkun']),
        'ovirkt': !exists(json, 'ovirkt') ? undefined : json['ovirkt'],
        'ogildurValkostur': !exists(json, 'ogildurValkostur') ? undefined : json['ogildurValkostur'],
    };
}

export function ValmoguleikiToJSON(value?: Valmoguleiki | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'lykill': value.lykill,
        'lysing': value.lysing,
        'umbedinGildistakaTakmorkun': UmbedinGildistakaTakmorkunToJSON(value.umbedinGildistakaTakmorkun),
        'ovirkt': value.ovirkt,
        'ogildurValkostur': value.ogildurValkostur,
    };
}


