/* tslint:disable */
/* eslint-disable */
/**
 * Air Discount Scheme
 *    This documentation is provided to airline booking sites for   integration purposes.    If there exists an ID attribute on any object, that ID refers   to a unique identifier of the object it is in. If the object   has an additional ID, something like flightId that refers to   an unique identifier of an object that is related to the   current one.    DEV:     https://loftbru.dev01.devland.is/min-rettindi    STAGING: https://loftbru.staging01.devland.is/min-rettindi    PROD:    https://loftbru.island.is/min-rettindi    The flow is like this:      1.  Contact anyone at Stafrænt Ísland about access to our Github         organization and credentials for Gervimadur. Then navigate to         min-rettindi on dev or staging, there you will be able to access         the discountCodes and use them in the next steps.       2.  Use the discount to book a flight on your end:        2a. First you need to fetch the user that is registered to this           discountCode by calling           GET /api/public/discounts/{discountCode}/user.           This endpoint will return user specific information that           should be populated on your booking page and made readonly           so the user can not change it.        2b. Then you can create a flight. A flight contains all the           relevant information about the booking from the customer.           Use POST /api/public/discounts/{discountCode}/flights.           When this endpoint is used the discountCode is           invalidated, so the user can not use it and needs           to generate a new discountCode (step 1).       3.  When you have created a flight you have the possibility         to delete it. For example if a payment failure has         occurred. You can use the ID that you received when         creating the flight to delete it. You have two possibilities:        3a. You can either delete all related flightLegs that were           booked by calling           DELETE /api/public/flights/{flightId}        3b. Or delete specific flightLegs within the booking by:          3ba. First fetching the related flightLegs by calling              GET /api/public/flights/{flightId}          3bb. Then use the flightLeg IDs from \"3ba.\" result              to delete the desired flightLegs by calling              DELETE /api/public/flights/{flightId}/flightLegs/{flightLegId} 
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
    ConnectionDiscountCode,
    ConnectionDiscountCodeFromJSON,
    ConnectionDiscountCodeFromJSONTyped,
    ConnectionDiscountCodeToJSON,
    User,
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
} from './';

/**
 * 
 * @export
 * @interface Discount
 */
export interface Discount {
    /**
     * 
     * @type {User}
     * @memberof Discount
     */
    user: User;
    /**
     * 
     * @type {string}
     * @memberof Discount
     */
    discountCode: string;
    /**
     * 
     * @type {Array<ConnectionDiscountCode>}
     * @memberof Discount
     */
    connectionDiscountCodes: Array<ConnectionDiscountCode>;
    /**
     * 
     * @type {string}
     * @memberof Discount
     */
    nationalId: string;
    /**
     * 
     * @type {number}
     * @memberof Discount
     */
    expiresIn: number;
}

export function DiscountFromJSON(json: any): Discount {
    return DiscountFromJSONTyped(json, false);
}

export function DiscountFromJSONTyped(json: any, ignoreDiscriminator: boolean): Discount {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'user': UserFromJSON(json['user']),
        'discountCode': json['discountCode'],
        'connectionDiscountCodes': ((json['connectionDiscountCodes'] as Array<any>).map(ConnectionDiscountCodeFromJSON)),
        'nationalId': json['nationalId'],
        'expiresIn': json['expiresIn'],
    };
}

export function DiscountToJSON(value?: Discount | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'user': UserToJSON(value.user),
        'discountCode': value.discountCode,
        'connectionDiscountCodes': ((value.connectionDiscountCodes as Array<any>).map(ConnectionDiscountCodeToJSON)),
        'nationalId': value.nationalId,
        'expiresIn': value.expiresIn,
    };
}


