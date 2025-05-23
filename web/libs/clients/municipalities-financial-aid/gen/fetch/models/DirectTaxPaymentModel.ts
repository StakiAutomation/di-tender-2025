/* tslint:disable */
/* eslint-disable */
/**
 * Financial Aid Backend
 * This is the backend for the financial aid.
 *
 * The version of the OpenAPI document: 1.0
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
 * @interface DirectTaxPaymentModel
 */
export interface DirectTaxPaymentModel {
    /**
     * 
     * @type {string}
     * @memberof DirectTaxPaymentModel
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof DirectTaxPaymentModel
     */
    applicationId: string;
    /**
     * 
     * @type {number}
     * @memberof DirectTaxPaymentModel
     */
    totalSalary: number;
    /**
     * 
     * @type {string}
     * @memberof DirectTaxPaymentModel
     */
    payerNationalId: string;
    /**
     * 
     * @type {number}
     * @memberof DirectTaxPaymentModel
     */
    personalAllowance: number;
    /**
     * 
     * @type {number}
     * @memberof DirectTaxPaymentModel
     */
    withheldAtSource: number;
    /**
     * 
     * @type {number}
     * @memberof DirectTaxPaymentModel
     */
    month: number;
    /**
     * 
     * @type {number}
     * @memberof DirectTaxPaymentModel
     */
    year: number;
    /**
     * 
     * @type {string}
     * @memberof DirectTaxPaymentModel
     */
    userType: string;
    /**
     * 
     * @type {Date}
     * @memberof DirectTaxPaymentModel
     */
    created: Date;
    /**
     * 
     * @type {Date}
     * @memberof DirectTaxPaymentModel
     */
    modified: Date;
}

export function DirectTaxPaymentModelFromJSON(json: any): DirectTaxPaymentModel {
    return DirectTaxPaymentModelFromJSONTyped(json, false);
}

export function DirectTaxPaymentModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): DirectTaxPaymentModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'applicationId': json['applicationId'],
        'totalSalary': json['totalSalary'],
        'payerNationalId': json['payerNationalId'],
        'personalAllowance': json['personalAllowance'],
        'withheldAtSource': json['withheldAtSource'],
        'month': json['month'],
        'year': json['year'],
        'userType': json['userType'],
        'created': (new Date(json['created'])),
        'modified': (new Date(json['modified'])),
    };
}

export function DirectTaxPaymentModelToJSON(value?: DirectTaxPaymentModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'applicationId': value.applicationId,
        'totalSalary': value.totalSalary,
        'payerNationalId': value.payerNationalId,
        'personalAllowance': value.personalAllowance,
        'withheldAtSource': value.withheldAtSource,
        'month': value.month,
        'year': value.year,
        'userType': value.userType,
        'created': (value.created.toISOString()),
        'modified': (value.modified.toISOString()),
    };
}


