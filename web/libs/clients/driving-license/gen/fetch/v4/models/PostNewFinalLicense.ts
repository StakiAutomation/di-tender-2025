/* tslint:disable */
/* eslint-disable */
/**
 * RLS driver licence Rest API
 * RESTFul services for driver licences. Programmed in ASP.NET Core 3 API 
 *
 * The version of the OpenAPI document: 4.0
 * Contact: tmd@tmd.is
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Model class to post new final license
 * @export
 * @interface PostNewFinalLicense
 */
export interface PostNewFinalLicense {
    /**
     * Person id number
     * @type {string}
     * @memberof PostNewFinalLicense
     */
    personIdNumber: string;
    /**
     * Publishing authority
     * @type {number}
     * @memberof PostNewFinalLicense
     */
    authorityNumber: number;
    /**
     * Does person need to present health certificate
     * @type {number}
     * @memberof PostNewFinalLicense
     */
    needsToPresentHealthCertificate?: number;
    /**
     * Applicant will bring new photo for license
     * @type {number}
     * @memberof PostNewFinalLicense
     */
    bringsNewPhoto?: number;
    /**
     * Applicant has asked to send license in mail
     * @type {number}
     * @memberof PostNewFinalLicense
     */
    sendLicenseInMail?: number;
    /**
     * Address to send license to
     * @type {string}
     * @memberof PostNewFinalLicense
     */
    sendToAddress?: string | null;
    /**
     * Healt certificate
     * @type {string}
     * @memberof PostNewFinalLicense
     */
    healtCertificate?: string | null;
}

export function PostNewFinalLicenseFromJSON(json: any): PostNewFinalLicense {
    return PostNewFinalLicenseFromJSONTyped(json, false);
}

export function PostNewFinalLicenseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostNewFinalLicense {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'personIdNumber': json['personIdNumber'],
        'authorityNumber': json['authorityNumber'],
        'needsToPresentHealthCertificate': !exists(json, 'needsToPresentHealthCertificate') ? undefined : json['needsToPresentHealthCertificate'],
        'bringsNewPhoto': !exists(json, 'bringsNewPhoto') ? undefined : json['bringsNewPhoto'],
        'sendLicenseInMail': !exists(json, 'sendLicenseInMail') ? undefined : json['sendLicenseInMail'],
        'sendToAddress': !exists(json, 'sendToAddress') ? undefined : json['sendToAddress'],
        'healtCertificate': !exists(json, 'healtCertificate') ? undefined : json['healtCertificate'],
    };
}

export function PostNewFinalLicenseToJSON(value?: PostNewFinalLicense | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'personIdNumber': value.personIdNumber,
        'authorityNumber': value.authorityNumber,
        'needsToPresentHealthCertificate': value.needsToPresentHealthCertificate,
        'bringsNewPhoto': value.bringsNewPhoto,
        'sendLicenseInMail': value.sendLicenseInMail,
        'sendToAddress': value.sendToAddress,
        'healtCertificate': value.healtCertificate,
    };
}


