/* tslint:disable */
/* eslint-disable */
/**
 * SGS Rest API
 * Ownerchange API developed in .Net6.0 - Release-13 : 20231219.2
 *
 * The version of the OpenAPI document: 2.0
 * Contact: tolvuhjalp@samgongustofa.is
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    PostCoOwner,
    PostCoOwnerFromJSON,
    PostCoOwnerFromJSONTyped,
    PostCoOwnerToJSON,
    PostOperator,
    PostOperatorFromJSON,
    PostOperatorFromJSONTyped,
    PostOperatorToJSON,
} from './';

/**
 * Model to post owner change
 * @export
 * @interface PostOwnerChange
 */
export interface PostOwnerChange {
    /**
     * Vehicle permanent number
     * @type {string}
     * @memberof PostOwnerChange
     */
    permno: string;
    /**
     * Buyer's social security number
     * @type {string}
     * @memberof PostOwnerChange
     */
    buyerPersonIdNumber: string;
    /**
     * Seller's social security number
     * @type {string}
     * @memberof PostOwnerChange
     */
    sellerPersonIdNumber: string;
    /**
     * Date when vehicle was purchased
     * @type {Date}
     * @memberof PostOwnerChange
     */
    dateOfPurchase: Date;
    /**
     * Code for insurance company, see REST GET endpoint /vehicle/codetables/insurancecompanies
     * @type {string}
     * @memberof PostOwnerChange
     */
    insuranceCompanyCode: string;
    /**
     * Use group for vehicle, see REST GET endpoint /vehicle/codetables/usegroups
     * @type {string}
     * @memberof PostOwnerChange
     */
    useGroup?: string | null;
    /**
     * Amount in purchase
     * @type {number}
     * @memberof PostOwnerChange
     */
    saleAmount: number;
    /**
     * Email for seller
     * @type {string}
     * @memberof PostOwnerChange
     */
    sellerEmail?: string | null;
    /**
     * Email for buyer
     * @type {string}
     * @memberof PostOwnerChange
     */
    buyerEmail?: string | null;
    /**
     * Email of operator
     * @type {string}
     * @memberof PostOwnerChange
     */
    operatorEmail?: string | null;
    /**
     * List of vehicle operators
     * @type {Array<PostOperator>}
     * @memberof PostOwnerChange
     */
    operators?: Array<PostOperator> | null;
    /**
     * List of vehicle co owners
     * @type {Array<PostCoOwner>}
     * @memberof PostOwnerChange
     */
    coOwners?: Array<PostCoOwner> | null;
    /**
     * Reporting person's social security number (car sale)
     * @type {string}
     * @memberof PostOwnerChange
     */
    reportingPersonIdNumber: string;
    /**
     * Current mileage on vehicle when owner change is reported
     * @type {number}
     * @memberof PostOwnerChange
     */
    mileage?: number | null;
}

export function PostOwnerChangeFromJSON(json: any): PostOwnerChange {
    return PostOwnerChangeFromJSONTyped(json, false);
}

export function PostOwnerChangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostOwnerChange {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'permno': json['permno'],
        'buyerPersonIdNumber': json['buyerPersonIdNumber'],
        'sellerPersonIdNumber': json['sellerPersonIdNumber'],
        'dateOfPurchase': (new Date(json['dateOfPurchase'])),
        'insuranceCompanyCode': json['insuranceCompanyCode'],
        'useGroup': !exists(json, 'useGroup') ? undefined : json['useGroup'],
        'saleAmount': json['saleAmount'],
        'sellerEmail': !exists(json, 'sellerEmail') ? undefined : json['sellerEmail'],
        'buyerEmail': !exists(json, 'buyerEmail') ? undefined : json['buyerEmail'],
        'operatorEmail': !exists(json, 'operatorEmail') ? undefined : json['operatorEmail'],
        'operators': !exists(json, 'operators') ? undefined : (json['operators'] === null ? null : (json['operators'] as Array<any>).map(PostOperatorFromJSON)),
        'coOwners': !exists(json, 'coOwners') ? undefined : (json['coOwners'] === null ? null : (json['coOwners'] as Array<any>).map(PostCoOwnerFromJSON)),
        'reportingPersonIdNumber': json['reportingPersonIdNumber'],
        'mileage': !exists(json, 'mileage') ? undefined : json['mileage'],
    };
}

export function PostOwnerChangeToJSON(value?: PostOwnerChange | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'permno': value.permno,
        'buyerPersonIdNumber': value.buyerPersonIdNumber,
        'sellerPersonIdNumber': value.sellerPersonIdNumber,
        'dateOfPurchase': (value.dateOfPurchase.toISOString()),
        'insuranceCompanyCode': value.insuranceCompanyCode,
        'useGroup': value.useGroup,
        'saleAmount': value.saleAmount,
        'sellerEmail': value.sellerEmail,
        'buyerEmail': value.buyerEmail,
        'operatorEmail': value.operatorEmail,
        'operators': value.operators === undefined ? undefined : (value.operators === null ? null : (value.operators as Array<any>).map(PostOperatorToJSON)),
        'coOwners': value.coOwners === undefined ? undefined : (value.coOwners === null ? null : (value.coOwners as Array<any>).map(PostCoOwnerToJSON)),
        'reportingPersonIdNumber': value.reportingPersonIdNumber,
        'mileage': value.mileage,
    };
}


