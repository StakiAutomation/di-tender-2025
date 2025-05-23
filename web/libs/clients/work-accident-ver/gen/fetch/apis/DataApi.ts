/* tslint:disable */
/* eslint-disable */
/**
 * Tilkynna vinnuslys
 * Vefþjónusta til þess að senda inn tilkynningar um vinnuslys.
 *
 * The version of the OpenAPI document: v1
 * Contact: ut@vinnueftirlit.is
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    DataDto,
    DataDtoFromJSON,
    DataDtoToJSON,
} from '../models';

export interface GetDataRequest {
    locale?: string;
    xCorrelationID?: string;
}

export interface GetDataOptionsRequest {
    xCorrelationID?: string;
}

/**
 * 
 */
export class DataApi extends runtime.BaseAPI {

    /**
     * This endpoint returns `DataDto` Data model with lookup tables for the notification of an occupational accident. Gagnalíkan með uppflettitöflum fyrir tilkynninguna um vinnuslys.
     * Endpoint to get lookup talbes for the a occupational accident report.
     */
    async getDataRaw(requestParameters: GetDataRequest): Promise<runtime.ApiResponse<DataDto>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.locale !== undefined) {
            queryParameters['locale'] = requestParameters.locale;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xCorrelationID !== undefined && requestParameters.xCorrelationID !== null) {
            headerParameters['X-Correlation-ID'] = String(requestParameters.xCorrelationID);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/Data`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DataDtoFromJSON(jsonValue));
    }

    /**
     * This endpoint returns `DataDto` Data model with lookup tables for the notification of an occupational accident. Gagnalíkan með uppflettitöflum fyrir tilkynninguna um vinnuslys.
     * Endpoint to get lookup talbes for the a occupational accident report.
     */
    async getData(requestParameters: GetDataRequest): Promise<DataDto> {
        const response = await this.getDataRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async getDataOptionsRaw(requestParameters: GetDataOptionsRequest): Promise<runtime.ApiResponse<void>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xCorrelationID !== undefined && requestParameters.xCorrelationID !== null) {
            headerParameters['X-Correlation-ID'] = String(requestParameters.xCorrelationID);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/Data`,
            method: 'OPTIONS',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async getDataOptions(requestParameters: GetDataOptionsRequest): Promise<void> {
        await this.getDataOptionsRaw(requestParameters);
    }

}
