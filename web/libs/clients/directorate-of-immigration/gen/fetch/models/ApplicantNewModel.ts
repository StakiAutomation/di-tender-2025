/* tslint:disable */
/* eslint-disable */
/**
 * ST2-api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
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
 * @interface ApplicantNewModel
 */
export interface ApplicantNewModel {
    /**
     * 
     * @type {string}
     * @memberof ApplicantNewModel
     */
    icelandicIDNO?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicantNewModel
     */
    readonly icelandicIDNOWithHyphen?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicantNewModel
     */
    givenName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicantNewModel
     */
    surName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicantNewModel
     */
    emailAddress?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicantNewModel
     */
    telephone?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicantNewModel
     */
    addressCity?: string | null;
}

export function ApplicantNewModelFromJSON(json: any): ApplicantNewModel {
    return ApplicantNewModelFromJSONTyped(json, false);
}

export function ApplicantNewModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplicantNewModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'icelandicIDNO': !exists(json, 'icelandicIDNO') ? undefined : json['icelandicIDNO'],
        'icelandicIDNOWithHyphen': !exists(json, 'icelandicIDNOWithHyphen') ? undefined : json['icelandicIDNOWithHyphen'],
        'givenName': !exists(json, 'givenName') ? undefined : json['givenName'],
        'surName': !exists(json, 'surName') ? undefined : json['surName'],
        'emailAddress': !exists(json, 'emailAddress') ? undefined : json['emailAddress'],
        'telephone': !exists(json, 'telephone') ? undefined : json['telephone'],
        'addressCity': !exists(json, 'addressCity') ? undefined : json['addressCity'],
    };
}

export function ApplicantNewModelToJSON(value?: ApplicantNewModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'icelandicIDNO': value.icelandicIDNO,
        'givenName': value.givenName,
        'surName': value.surName,
        'emailAddress': value.emailAddress,
        'telephone': value.telephone,
        'addressCity': value.addressCity,
    };
}


