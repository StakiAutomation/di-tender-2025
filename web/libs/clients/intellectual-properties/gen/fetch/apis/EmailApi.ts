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
    HUXELSAPIv2EntitiesEmailModel,
    HUXELSAPIv2EntitiesEmailModelFromJSON,
    HUXELSAPIv2EntitiesEmailModelToJSON,
} from '../models';

export interface EmailSendEmailPostRequest {
    hUXELSAPIv2EntitiesEmailModel?: HUXELSAPIv2EntitiesEmailModel;
}

/**
 * 
 */
export class EmailApi extends runtime.BaseAPI {

    /**
     */
    async emailSendEmailPostRaw(requestParameters: EmailSendEmailPostRequest): Promise<runtime.ApiResponse<void>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json-patch+json';

        const response = await this.request({
            path: `/Email/SendEmail`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: HUXELSAPIv2EntitiesEmailModelToJSON(requestParameters.hUXELSAPIv2EntitiesEmailModel),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async emailSendEmailPost(requestParameters: EmailSendEmailPostRequest): Promise<void> {
        await this.emailSendEmailPostRaw(requestParameters);
    }

}
