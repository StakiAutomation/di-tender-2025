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
    ChargeInput,
    ChargeInputFromJSON,
    ChargeInputFromJSONTyped,
    ChargeInputToJSON,
    ExtraDataItem,
    ExtraDataItemFromJSON,
    ExtraDataItemFromJSONTyped,
    ExtraDataItemToJSON,
} from './';

/**
 * 
 * @export
 * @interface CreatePaymentFlowInput
 */
export interface CreatePaymentFlowInput {
    /**
     * List of allowed payment methods for this payment flow
     * @type {Array<string>}
     * @memberof CreatePaymentFlowInput
     */
    availablePaymentMethods: Array<CreatePaymentFlowInputAvailablePaymentMethodsEnum>;
    /**
     * Charges associated with the payment flow
     * @type {Array<ChargeInput>}
     * @memberof CreatePaymentFlowInput
     */
    charges: Array<ChargeInput>;
    /**
     * National id of the payer, can be a company or an individual
     * @type {string}
     * @memberof CreatePaymentFlowInput
     */
    payerNationalId: string;
    /**
     * National id for the organization initiating the payment flow
     * @type {string}
     * @memberof CreatePaymentFlowInput
     */
    organisationId: string;
    /**
     * URL callback to be called on payment update events like when the user requests to create invoice rather than directly paying
     * @type {string}
     * @memberof CreatePaymentFlowInput
     */
    onUpdateUrl: string;
    /**
     * Arbitrary JSON data that will be returned with the onUpdateUrl callback
     * @type {object}
     * @memberof CreatePaymentFlowInput
     */
    metadata?: object;
    /**
     * Product title to display to the payer
     * @type {string}
     * @memberof CreatePaymentFlowInput
     */
    productTitle?: string;
    /**
     * Optional identifier for an invoice associated with the payment flow
     * @type {string}
     * @memberof CreatePaymentFlowInput
     */
    existingInvoiceId?: string;
    /**
     * URL to redirect the payer to after the payment flow has been completed successfully
     * @type {string}
     * @memberof CreatePaymentFlowInput
     */
    returnUrl?: string;
    /**
     * If true the user will be redirected to the returnUrl after the payment flow has been completed successfully
     * @type {boolean}
     * @memberof CreatePaymentFlowInput
     */
    redirectToReturnUrlOnSuccess?: boolean;
    /**
     * Define key-value pairs of extra data that should be included when creating the FJS charge for the payment, example: car license plate, house address etc.
     * @type {Array<ExtraDataItem>}
     * @memberof CreatePaymentFlowInput
     */
    extraData?: Array<ExtraDataItem>;
    /**
     * Id that becomes the subject of the FJS charge item, used to reference where it originated from
     * @type {string}
     * @memberof CreatePaymentFlowInput
     */
    chargeItemSubjectId?: string;
}

export function CreatePaymentFlowInputFromJSON(json: any): CreatePaymentFlowInput {
    return CreatePaymentFlowInputFromJSONTyped(json, false);
}

export function CreatePaymentFlowInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreatePaymentFlowInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'availablePaymentMethods': json['availablePaymentMethods'],
        'charges': ((json['charges'] as Array<any>).map(ChargeInputFromJSON)),
        'payerNationalId': json['payerNationalId'],
        'organisationId': json['organisationId'],
        'onUpdateUrl': json['onUpdateUrl'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'productTitle': !exists(json, 'productTitle') ? undefined : json['productTitle'],
        'existingInvoiceId': !exists(json, 'existingInvoiceId') ? undefined : json['existingInvoiceId'],
        'returnUrl': !exists(json, 'returnUrl') ? undefined : json['returnUrl'],
        'redirectToReturnUrlOnSuccess': !exists(json, 'redirectToReturnUrlOnSuccess') ? undefined : json['redirectToReturnUrlOnSuccess'],
        'extraData': !exists(json, 'extraData') ? undefined : ((json['extraData'] as Array<any>).map(ExtraDataItemFromJSON)),
        'chargeItemSubjectId': !exists(json, 'chargeItemSubjectId') ? undefined : json['chargeItemSubjectId'],
    };
}

export function CreatePaymentFlowInputToJSON(value?: CreatePaymentFlowInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'availablePaymentMethods': value.availablePaymentMethods,
        'charges': ((value.charges as Array<any>).map(ChargeInputToJSON)),
        'payerNationalId': value.payerNationalId,
        'organisationId': value.organisationId,
        'onUpdateUrl': value.onUpdateUrl,
        'metadata': value.metadata,
        'productTitle': value.productTitle,
        'existingInvoiceId': value.existingInvoiceId,
        'returnUrl': value.returnUrl,
        'redirectToReturnUrlOnSuccess': value.redirectToReturnUrlOnSuccess,
        'extraData': value.extraData === undefined ? undefined : ((value.extraData as Array<any>).map(ExtraDataItemToJSON)),
        'chargeItemSubjectId': value.chargeItemSubjectId,
    };
}

/**
* @export
* @enum {string}
*/
export enum CreatePaymentFlowInputAvailablePaymentMethodsEnum {
    card = 'card',
    invoice = 'invoice'
}


