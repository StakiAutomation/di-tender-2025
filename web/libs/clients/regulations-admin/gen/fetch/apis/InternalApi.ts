/* tslint:disable */
/* eslint-disable */
/**
 * Regulations admin - backend
 * Backend services for regulations admin.
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
    Liveness,
    LivenessFromJSON,
    LivenessToJSON,
    Version,
    VersionFromJSON,
    VersionToJSON,
} from '../models';

/**
 * 
 */
export class InternalApi extends runtime.BaseAPI {

    /**
     */
    async infraControllerLivenessRaw(): Promise<runtime.ApiResponse<Liveness>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/liveness`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => LivenessFromJSON(jsonValue));
    }

    /**
     */
    async infraControllerLiveness(): Promise<Liveness> {
        const response = await this.infraControllerLivenessRaw();
        return await response.value();
    }

    /**
     */
    async infraControllerVersionRaw(): Promise<runtime.ApiResponse<Version>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/version`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => VersionFromJSON(jsonValue));
    }

    /**
     */
    async infraControllerVersion(): Promise<Version> {
        const response = await this.infraControllerVersionRaw();
        return await response.value();
    }

}
