/* tslint:disable */
/* eslint-disable */
/**
 * GoPro.JusticePortal.Rest
 * Provides access to Justice Portal rest service
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@gopro.net
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    UpdateCaseWithDefendantData,
    UpdateCaseWithDefendantDataFromJSON,
    UpdateCaseWithDefendantDataToJSON,
    UpdateCaseWithPlaintiffData,
    UpdateCaseWithPlaintiffDataFromJSON,
    UpdateCaseWithPlaintiffDataToJSON,
    UpdateCaseWithProsecutorData,
    UpdateCaseWithProsecutorDataFromJSON,
    UpdateCaseWithProsecutorDataToJSON,
} from '../models';

export interface UpdateCaseWithDefendantRequest {
    updateCaseData: UpdateCaseWithDefendantData;
}

export interface UpdateCaseWithPlaintiffRequest {
    updateCaseData: UpdateCaseWithPlaintiffData;
}

export interface UpdateCaseWithProsecutorRequest {
    updateCaseData: UpdateCaseWithProsecutorData;
}

/**
 * 
 */
export class ParticipantsApi extends runtime.BaseAPI {

    /**
     * Updates cases with defendants.
     */
    async updateCaseWithDefendantRaw(requestParameters: UpdateCaseWithDefendantRequest): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.updateCaseData === null || requestParameters.updateCaseData === undefined) {
            throw new runtime.RequiredError('updateCaseData','Required parameter requestParameters.updateCaseData was null or undefined when calling updateCaseWithDefendant.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/UpdateCaseWithDefendant`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateCaseWithDefendantDataToJSON(requestParameters.updateCaseData),
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Updates cases with defendants.
     */
    async updateCaseWithDefendant(requestParameters: UpdateCaseWithDefendantRequest): Promise<string> {
        const response = await this.updateCaseWithDefendantRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates cases with plaintiffs.
     */
    async updateCaseWithPlaintiffRaw(requestParameters: UpdateCaseWithPlaintiffRequest): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.updateCaseData === null || requestParameters.updateCaseData === undefined) {
            throw new runtime.RequiredError('updateCaseData','Required parameter requestParameters.updateCaseData was null or undefined when calling updateCaseWithPlaintiff.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/UpdateCaseWithPlaintiff`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateCaseWithPlaintiffDataToJSON(requestParameters.updateCaseData),
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Updates cases with plaintiffs.
     */
    async updateCaseWithPlaintiff(requestParameters: UpdateCaseWithPlaintiffRequest): Promise<string> {
        const response = await this.updateCaseWithPlaintiffRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates R and S cases prosecutor.
     */
    async updateCaseWithProsecutorRaw(requestParameters: UpdateCaseWithProsecutorRequest): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.updateCaseData === null || requestParameters.updateCaseData === undefined) {
            throw new runtime.RequiredError('updateCaseData','Required parameter requestParameters.updateCaseData was null or undefined when calling updateCaseWithProsecutor.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/UpdateCaseWithProsecutor`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateCaseWithProsecutorDataToJSON(requestParameters.updateCaseData),
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Updates R and S cases prosecutor.
     */
    async updateCaseWithProsecutor(requestParameters: UpdateCaseWithProsecutorRequest): Promise<string> {
        const response = await this.updateCaseWithProsecutorRaw(requestParameters);
        return await response.value();
    }

}
