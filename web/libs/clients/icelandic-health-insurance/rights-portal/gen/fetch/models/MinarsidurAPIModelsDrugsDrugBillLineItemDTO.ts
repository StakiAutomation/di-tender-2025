/* tslint:disable */
/* eslint-disable */
/**
 * Minarsidur
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
 * @interface MinarsidurAPIModelsDrugsDrugBillLineItemDTO
 */
export interface MinarsidurAPIModelsDrugsDrugBillLineItemDTO {
    /**
     * 
     * @type {number}
     * @memberof MinarsidurAPIModelsDrugsDrugBillLineItemDTO
     */
    billId?: number;
    /**
     * 
     * @type {string}
     * @memberof MinarsidurAPIModelsDrugsDrugBillLineItemDTO
     */
    drugName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MinarsidurAPIModelsDrugsDrugBillLineItemDTO
     */
    strength?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MinarsidurAPIModelsDrugsDrugBillLineItemDTO
     */
    quantity?: string | null;
    /**
     * 
     * @type {number}
     * @memberof MinarsidurAPIModelsDrugsDrugBillLineItemDTO
     */
    units?: number | null;
    /**
     * 
     * @type {number}
     * @memberof MinarsidurAPIModelsDrugsDrugBillLineItemDTO
     */
    salesPrice?: number | null;
    /**
     * 
     * @type {number}
     * @memberof MinarsidurAPIModelsDrugsDrugBillLineItemDTO
     */
    copaymentAmount?: number | null;
    /**
     * 
     * @type {number}
     * @memberof MinarsidurAPIModelsDrugsDrugBillLineItemDTO
     */
    customerAmount?: number | null;
    /**
     * 
     * @type {number}
     * @memberof MinarsidurAPIModelsDrugsDrugBillLineItemDTO
     */
    excessAmount?: number | null;
    /**
     * 
     * @type {number}
     * @memberof MinarsidurAPIModelsDrugsDrugBillLineItemDTO
     */
    insuranceAmount?: number | null;
    /**
     * 
     * @type {number}
     * @memberof MinarsidurAPIModelsDrugsDrugBillLineItemDTO
     */
    calculatedForPaymentStepAmount?: number | null;
}

export function MinarsidurAPIModelsDrugsDrugBillLineItemDTOFromJSON(json: any): MinarsidurAPIModelsDrugsDrugBillLineItemDTO {
    return MinarsidurAPIModelsDrugsDrugBillLineItemDTOFromJSONTyped(json, false);
}

export function MinarsidurAPIModelsDrugsDrugBillLineItemDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MinarsidurAPIModelsDrugsDrugBillLineItemDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'billId': !exists(json, 'billId') ? undefined : json['billId'],
        'drugName': !exists(json, 'drugName') ? undefined : json['drugName'],
        'strength': !exists(json, 'strength') ? undefined : json['strength'],
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
        'units': !exists(json, 'units') ? undefined : json['units'],
        'salesPrice': !exists(json, 'salesPrice') ? undefined : json['salesPrice'],
        'copaymentAmount': !exists(json, 'copaymentAmount') ? undefined : json['copaymentAmount'],
        'customerAmount': !exists(json, 'customerAmount') ? undefined : json['customerAmount'],
        'excessAmount': !exists(json, 'excessAmount') ? undefined : json['excessAmount'],
        'insuranceAmount': !exists(json, 'insuranceAmount') ? undefined : json['insuranceAmount'],
        'calculatedForPaymentStepAmount': !exists(json, 'calculatedForPaymentStepAmount') ? undefined : json['calculatedForPaymentStepAmount'],
    };
}

export function MinarsidurAPIModelsDrugsDrugBillLineItemDTOToJSON(value?: MinarsidurAPIModelsDrugsDrugBillLineItemDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'billId': value.billId,
        'drugName': value.drugName,
        'strength': value.strength,
        'quantity': value.quantity,
        'units': value.units,
        'salesPrice': value.salesPrice,
        'copaymentAmount': value.copaymentAmount,
        'customerAmount': value.customerAmount,
        'excessAmount': value.excessAmount,
        'insuranceAmount': value.insuranceAmount,
        'calculatedForPaymentStepAmount': value.calculatedForPaymentStepAmount,
    };
}


