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
 * 
 * @export
 * @interface NamsUpplysingar
 */
export interface NamsUpplysingar {
    /**
     * 
     * @type {number}
     * @memberof NamsUpplysingar
     */
    id?: number;
    /**
     * Auðkenni Starfstétts
     * @type {string}
     * @memberof NamsUpplysingar
     */
    idProfession?: string | null;
    /**
     * Prof_id
     * @type {number}
     * @memberof NamsUpplysingar
     */
    educationId?: number;
    /**
     * Nafn á prófi
     * @type {string}
     * @memberof NamsUpplysingar
     */
    educationName?: string | null;
    /**
     * Gildir frá dagsetning á prófinu
     * @type {Date}
     * @memberof NamsUpplysingar
     */
    educationValidFrom?: Date | null;
    /**
     * Stutt ID frá háskólunum. Notað til að mappa saman nám.
     * @type {string}
     * @memberof NamsUpplysingar
     */
    shortId?: string | null;
    /**
     * Röðun prófa/gagna, 1 = lægsta stig. NoOfData = hæðsta stig
     * @type {number}
     * @memberof NamsUpplysingar
     */
    dataOrder?: number;
    /**
     * Fjöldi prófa/gagna sem þarf að skila.
     * @type {number}
     * @memberof NamsUpplysingar
     */
    noOfData?: number;
}

export function NamsUpplysingarFromJSON(json: any): NamsUpplysingar {
    return NamsUpplysingarFromJSONTyped(json, false);
}

export function NamsUpplysingarFromJSONTyped(json: any, ignoreDiscriminator: boolean): NamsUpplysingar {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'idProfession': !exists(json, 'idProfession') ? undefined : json['idProfession'],
        'educationId': !exists(json, 'educationId') ? undefined : json['educationId'],
        'educationName': !exists(json, 'educationName') ? undefined : json['educationName'],
        'educationValidFrom': !exists(json, 'educationValidFrom') ? undefined : (json['educationValidFrom'] === null ? null : new Date(json['educationValidFrom'])),
        'shortId': !exists(json, 'shortId') ? undefined : json['shortId'],
        'dataOrder': !exists(json, 'dataOrder') ? undefined : json['dataOrder'],
        'noOfData': !exists(json, 'noOfData') ? undefined : json['noOfData'],
    };
}

export function NamsUpplysingarToJSON(value?: NamsUpplysingar | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'idProfession': value.idProfession,
        'educationId': value.educationId,
        'educationName': value.educationName,
        'educationValidFrom': value.educationValidFrom === undefined ? undefined : (value.educationValidFrom === null ? null : value.educationValidFrom.toISOString()),
        'shortId': value.shortId,
        'dataOrder': value.dataOrder,
        'noOfData': value.noOfData,
    };
}


