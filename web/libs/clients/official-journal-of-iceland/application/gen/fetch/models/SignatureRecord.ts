/* tslint:disable */
/* eslint-disable */
/**
 * The Official Journal of Iceland Application API
 * This api is responsible for communications with the island.is application system.
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    SignatureMember,
    SignatureMemberFromJSON,
    SignatureMemberFromJSONTyped,
    SignatureMemberToJSON,
} from './';

/**
 * 
 * @export
 * @interface SignatureRecord
 */
export interface SignatureRecord {
    /**
     * 
     * @type {string}
     * @memberof SignatureRecord
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof SignatureRecord
     */
    institution: string;
    /**
     * 
     * @type {string}
     * @memberof SignatureRecord
     */
    signatureDate: string;
    /**
     * 
     * @type {string}
     * @memberof SignatureRecord
     */
    additional: string | null;
    /**
     * 
     * @type {SignatureMember}
     * @memberof SignatureRecord
     */
    chairman: SignatureMember | null;
    /**
     * 
     * @type {Array<SignatureMember>}
     * @memberof SignatureRecord
     */
    members: Array<SignatureMember>;
}

export function SignatureRecordFromJSON(json: any): SignatureRecord {
    return SignatureRecordFromJSONTyped(json, false);
}

export function SignatureRecordFromJSONTyped(json: any, ignoreDiscriminator: boolean): SignatureRecord {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'institution': json['institution'],
        'signatureDate': json['signatureDate'],
        'additional': json['additional'],
        'chairman': SignatureMemberFromJSON(json['chairman']),
        'members': ((json['members'] as Array<any>).map(SignatureMemberFromJSON)),
    };
}

export function SignatureRecordToJSON(value?: SignatureRecord | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'institution': value.institution,
        'signatureDate': value.signatureDate,
        'additional': value.additional,
        'chairman': SignatureMemberToJSON(value.chairman),
        'members': ((value.members as Array<any>).map(SignatureMemberToJSON)),
    };
}


