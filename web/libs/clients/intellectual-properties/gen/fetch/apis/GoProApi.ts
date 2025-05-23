/* tslint:disable */
/* eslint-disable */
/**
 * Hugverkastofan WebAPI
 * Hugverkastofan WebAPI v3
 *
 * The version of the OpenAPI document: v3
 * Contact: ut@hugverk.is
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    InternalClientGoProCaseContract,
    InternalClientGoProCaseContractFromJSON,
    InternalClientGoProCaseContractToJSON,
} from '../models';

export interface GoProGetCasesBySSNGetRequest {
    ssn?: string;
}

/**
 * 
 */
export class GoProApi extends runtime.BaseAPI {

    /**
     */
    async goProGetCasesBySSNGetRaw(requestParameters: GoProGetCasesBySSNGetRequest): Promise<runtime.ApiResponse<Array<InternalClientGoProCaseContract>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.ssn !== undefined) {
            queryParameters['ssn'] = requestParameters.ssn;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/GoPro/getCasesBySSN`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(InternalClientGoProCaseContractFromJSON));
    }

    /**
     */
    async goProGetCasesBySSNGet(requestParameters: GoProGetCasesBySSNGetRequest): Promise<Array<InternalClientGoProCaseContract>> {
        const response = await this.goProGetCasesBySSNGetRaw(requestParameters);
        return await response.value();
    }

}
