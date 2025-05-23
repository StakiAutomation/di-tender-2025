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
    Stadavidskiptamanns,
    StadavidskiptamannsFromJSON,
    StadavidskiptamannsFromJSONTyped,
    StadavidskiptamannsToJSON,
} from './';

/**
 * 
 * @export
 * @interface BankaupplysingarDanarbusSkeyti
 */
export interface BankaupplysingarDanarbusSkeyti {
    /**
     * 
     * @type {string}
     * @memberof BankaupplysingarDanarbusSkeyti
     */
    audkenni?: string | null;
    /**
     * 
     * @type {Stadavidskiptamanns}
     * @memberof BankaupplysingarDanarbusSkeyti
     */
    stadaVidskiptamanns?: Stadavidskiptamanns | null;
}

export function BankaupplysingarDanarbusSkeytiFromJSON(json: any): BankaupplysingarDanarbusSkeyti {
    return BankaupplysingarDanarbusSkeytiFromJSONTyped(json, false);
}

export function BankaupplysingarDanarbusSkeytiFromJSONTyped(json: any, ignoreDiscriminator: boolean): BankaupplysingarDanarbusSkeyti {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'audkenni': !exists(json, 'audkenni') ? undefined : json['audkenni'],
        'stadaVidskiptamanns': !exists(json, 'stadaVidskiptamanns') ? undefined : StadavidskiptamannsFromJSON(json['stadaVidskiptamanns']),
    };
}

export function BankaupplysingarDanarbusSkeytiToJSON(value?: BankaupplysingarDanarbusSkeyti | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'audkenni': value.audkenni,
        'stadaVidskiptamanns': StadavidskiptamannsToJSON(value.stadaVidskiptamanns),
    };
}


