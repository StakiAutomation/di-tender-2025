/* tslint:disable */
/* eslint-disable */
/**
 * Payments API
 * This service handles and encapsulates all lgoic related to payment flows, from creation to payment. It handles communication with FJS for the payments.
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
    CardInformation,
    CardInformationFromJSON,
    CardInformationFromJSONTyped,
    CardInformationToJSON,
    VerificationField,
    VerificationFieldFromJSON,
    VerificationFieldFromJSONTyped,
    VerificationFieldToJSON,
} from './';

/**
 * 
 * @export
 * @interface VerifyCardResponse
 */
export interface VerifyCardResponse {
    /**
     * Raw response from card verification
     * @type {string}
     * @memberof VerifyCardResponse
     */
    cardVerificationRawResponse: string;
    /**
     * Post URL for verification
     * @type {string}
     * @memberof VerifyCardResponse
     */
    postUrl: string;
    /**
     * Verification fields
     * @type {Array<VerificationField>}
     * @memberof VerifyCardResponse
     */
    verificationFields: Array<VerificationField>;
    /**
     * Additional fields
     * @type {Array<VerificationField>}
     * @memberof VerifyCardResponse
     */
    additionalFields: Array<VerificationField>;
    /**
     * Indicates if the verification was successful
     * @type {boolean}
     * @memberof VerifyCardResponse
     */
    isSuccess: boolean;
    /**
     * Card information
     * @type {CardInformation}
     * @memberof VerifyCardResponse
     */
    cardInformation: CardInformation;
    /**
     * Script path for further actions
     * @type {string}
     * @memberof VerifyCardResponse
     */
    scriptPath: string;
    /**
     * Response code from the verification
     * @type {string}
     * @memberof VerifyCardResponse
     */
    responseCode: string;
    /**
     * Description of the response
     * @type {string}
     * @memberof VerifyCardResponse
     */
    responseDescription: string;
    /**
     * Response time of the verification
     * @type {string}
     * @memberof VerifyCardResponse
     */
    responseTime: string;
    /**
     * Correlation ID for tracking
     * @type {string}
     * @memberof VerifyCardResponse
     */
    correlationId: string;
}

export function VerifyCardResponseFromJSON(json: any): VerifyCardResponse {
    return VerifyCardResponseFromJSONTyped(json, false);
}

export function VerifyCardResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): VerifyCardResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cardVerificationRawResponse': json['cardVerificationRawResponse'],
        'postUrl': json['postUrl'],
        'verificationFields': ((json['verificationFields'] as Array<any>).map(VerificationFieldFromJSON)),
        'additionalFields': ((json['additionalFields'] as Array<any>).map(VerificationFieldFromJSON)),
        'isSuccess': json['isSuccess'],
        'cardInformation': CardInformationFromJSON(json['cardInformation']),
        'scriptPath': json['scriptPath'],
        'responseCode': json['responseCode'],
        'responseDescription': json['responseDescription'],
        'responseTime': json['responseTime'],
        'correlationId': json['correlationId'],
    };
}

export function VerifyCardResponseToJSON(value?: VerifyCardResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cardVerificationRawResponse': value.cardVerificationRawResponse,
        'postUrl': value.postUrl,
        'verificationFields': ((value.verificationFields as Array<any>).map(VerificationFieldToJSON)),
        'additionalFields': ((value.additionalFields as Array<any>).map(VerificationFieldToJSON)),
        'isSuccess': value.isSuccess,
        'cardInformation': CardInformationToJSON(value.cardInformation),
        'scriptPath': value.scriptPath,
        'responseCode': value.responseCode,
        'responseDescription': value.responseDescription,
        'responseTime': value.responseTime,
        'correlationId': value.correlationId,
    };
}


