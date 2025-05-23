/* tslint:disable */
/* eslint-disable */
/**
 * MedmaeliRestAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
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
    TegundDTO,
    TegundDTOFromJSON,
    TegundDTOToJSON,
} from '../models';

/**
 * 
 */
export class TegundApi extends runtime.BaseAPI {

    /**
     */
    async tegundKosningGetRaw(): Promise<runtime.ApiResponse<Array<TegundDTO>>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("IslandIs", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/Tegund/Kosning`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TegundDTOFromJSON));
    }

    /**
     */
    async tegundKosningGet(): Promise<Array<TegundDTO>> {
        const response = await this.tegundKosningGetRaw();
        return await response.value();
    }

    /**
     */
    async tegundMedmaeliGetRaw(): Promise<runtime.ApiResponse<Array<TegundDTO>>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("IslandIs", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/Tegund/Medmaeli`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TegundDTOFromJSON));
    }

    /**
     */
    async tegundMedmaeliGet(): Promise<Array<TegundDTO>> {
        const response = await this.tegundMedmaeliGetRaw();
        return await response.value();
    }

    /**
     */
    async tegundUmbodGetRaw(): Promise<runtime.ApiResponse<Array<TegundDTO>>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("IslandIs", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/Tegund/Umbod`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TegundDTOFromJSON));
    }

    /**
     */
    async tegundUmbodGet(): Promise<Array<TegundDTO>> {
        const response = await this.tegundUmbodGetRaw();
        return await response.value();
    }

}
