/* tslint:disable */
/* eslint-disable */
/**
 * Forritunarskil þróunar á island.is
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * Contact: api@ust.is
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    PermitHunting,
    PermitHuntingFromJSON,
    PermitHuntingToJSON,
} from '../models';

export interface PermitHuntingRequest {
    xQueryNationalId: string;
}

/**
 * 
 */
export class PermitsApi extends runtime.BaseAPI {

    /**
     */
    async permitHuntingRaw(requestParameters: PermitHuntingRequest): Promise<runtime.ApiResponse<PermitHunting>> {
        if (requestParameters.xQueryNationalId === null || requestParameters.xQueryNationalId === undefined) {
            throw new runtime.RequiredError('xQueryNationalId','Required parameter requestParameters.xQueryNationalId was null or undefined when calling permitHunting.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xQueryNationalId !== undefined && requestParameters.xQueryNationalId !== null) {
            headerParameters['X-Query-National-Id'] = String(requestParameters.xQueryNationalId);
        }

        const response = await this.request({
            path: `/permit_hunting/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PermitHuntingFromJSON(jsonValue));
    }

    /**
     */
    async permitHunting(requestParameters: PermitHuntingRequest): Promise<PermitHunting> {
        const response = await this.permitHuntingRaw(requestParameters);
        return await response.value();
    }

}
