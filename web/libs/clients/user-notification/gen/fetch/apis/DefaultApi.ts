/* tslint:disable */
/* eslint-disable */
/**
 * Notification Service
 * Creates and stores notifications AND sends as mobile push notifications and emails
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    InlineResponse200,
    InlineResponse200FromJSON,
    InlineResponse200ToJSON,
    InlineResponse503,
    InlineResponse503FromJSON,
    InlineResponse503ToJSON,
} from '../models';

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     */
    async healthControllerCheckRaw(): Promise<runtime.ApiResponse<InlineResponse200>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/health/check`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse200FromJSON(jsonValue));
    }

    /**
     */
    async healthControllerCheck(): Promise<InlineResponse200> {
        const response = await this.healthControllerCheckRaw();
        return await response.value();
    }

}
