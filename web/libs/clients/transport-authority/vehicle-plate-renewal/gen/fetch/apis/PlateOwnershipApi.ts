/* tslint:disable */
/* eslint-disable */
/**
 * SGS Rest API
 * PlateOwnership API developed in .Net6.0 - Release-2 : 20230517.1
 *
 * The version of the OpenAPI document: 1.0
 * Contact: tolvuhjalp@samgongustofa.is
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    PersonalPlatesForPersonDto,
    PersonalPlatesForPersonDtoFromJSON,
    PersonalPlatesForPersonDtoToJSON,
    PlateAvailabilityDto,
    PlateAvailabilityDtoFromJSON,
    PlateAvailabilityDtoToJSON,
    PostRenewPlateOwnershipModel,
    PostRenewPlateOwnershipModelFromJSON,
    PostRenewPlateOwnershipModelToJSON,
    ProblemDetails,
    ProblemDetailsFromJSON,
    ProblemDetailsToJSON,
} from '../models';

export interface PlateavailableGetRequest {
    regno?: string;
    apiVersion?: string;
    apiVersion2?: string;
}

export interface PlateownershipGetRequest {
    persidno?: string;
    showExpired?: boolean;
    apiVersion?: string;
    apiVersion2?: string;
}

export interface RenewplateownershipPostRequest {
    apiVersion?: string;
    apiVersion2?: string;
    postRenewPlateOwnershipModel?: PostRenewPlateOwnershipModel;
}

/**
 * 
 */
export class PlateOwnershipApi extends runtime.BaseAPI {

    /**
     */
    async plateavailableGetRaw(requestParameters: PlateavailableGetRequest): Promise<runtime.ApiResponse<PlateAvailabilityDto>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.regno !== undefined) {
            queryParameters['regno'] = requestParameters.regno;
        }

        if (requestParameters.apiVersion2 !== undefined) {
            queryParameters['api-version'] = requestParameters.apiVersion2;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.apiVersion !== undefined && requestParameters.apiVersion !== null) {
            headerParameters['api-version'] = String(requestParameters.apiVersion);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/plateavailable`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PlateAvailabilityDtoFromJSON(jsonValue));
    }

    /**
     */
    async plateavailableGet(requestParameters: PlateavailableGetRequest): Promise<PlateAvailabilityDto> {
        const response = await this.plateavailableGetRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async plateownershipGetRaw(requestParameters: PlateownershipGetRequest): Promise<runtime.ApiResponse<Array<PersonalPlatesForPersonDto>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.persidno !== undefined) {
            queryParameters['persidno'] = requestParameters.persidno;
        }

        if (requestParameters.showExpired !== undefined) {
            queryParameters['showExpired'] = requestParameters.showExpired;
        }

        if (requestParameters.apiVersion2 !== undefined) {
            queryParameters['api-version'] = requestParameters.apiVersion2;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.apiVersion !== undefined && requestParameters.apiVersion !== null) {
            headerParameters['api-version'] = String(requestParameters.apiVersion);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/plateownership`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PersonalPlatesForPersonDtoFromJSON));
    }

    /**
     */
    async plateownershipGet(requestParameters: PlateownershipGetRequest): Promise<Array<PersonalPlatesForPersonDto>> {
        const response = await this.plateownershipGetRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async renewplateownershipPostRaw(requestParameters: RenewplateownershipPostRequest): Promise<runtime.ApiResponse<void>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.apiVersion2 !== undefined) {
            queryParameters['api-version'] = requestParameters.apiVersion2;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json-patch+json';

        if (requestParameters.apiVersion !== undefined && requestParameters.apiVersion !== null) {
            headerParameters['api-version'] = String(requestParameters.apiVersion);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/renewplateownership`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PostRenewPlateOwnershipModelToJSON(requestParameters.postRenewPlateOwnershipModel),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async renewplateownershipPost(requestParameters: RenewplateownershipPostRequest): Promise<void> {
        await this.renewplateownershipPostRaw(requestParameters);
    }

}
