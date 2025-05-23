/* tslint:disable */
/* eslint-disable */
/**
 * Organ donor API
 * The api provides access to information about individuals\' donation status.
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
    HttpProblemResponse,
    HttpProblemResponseFromJSON,
    HttpProblemResponseToJSON,
    Locale,
    LocaleFromJSON,
    LocaleToJSON,
    OrganDto,
    OrganDtoFromJSON,
    OrganDtoToJSON,
} from '../models';

export interface DonationExceptionControllerGetOrgansRequest {
    locale?: Locale;
}

/**
 * 
 */
export class DonationExceptionsApi extends runtime.BaseAPI {

    /**
     * Gets a list of organs that can be omitted from an donation-exception donation
     */
    async donationExceptionControllerGetOrgansRaw(requestParameters: DonationExceptionControllerGetOrgansRequest): Promise<runtime.ApiResponse<Array<OrganDto>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.locale !== undefined) {
            queryParameters['locale'] = requestParameters.locale;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/donation-exceptions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(OrganDtoFromJSON));
    }

    /**
     * Gets a list of organs that can be omitted from an donation-exception donation
     */
    async donationExceptionControllerGetOrgans(requestParameters: DonationExceptionControllerGetOrgansRequest): Promise<Array<OrganDto>> {
        const response = await this.donationExceptionControllerGetOrgansRaw(requestParameters);
        return await response.value();
    }

}
