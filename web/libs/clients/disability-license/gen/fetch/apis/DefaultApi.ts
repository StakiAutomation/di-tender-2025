/* tslint:disable */
/* eslint-disable */
/**
 * Öryrki V1
 * Upplýsingar um einstaklinga sem eru skilgreindir eru sem öryrkja frá Tryggingastofnun
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: helpdesk@tr.is
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    ErOryrki,
    ErOryrkiFromJSON,
    ErOryrkiToJSON,
    OrorkuSkirteini,
    OrorkuSkirteiniFromJSON,
    OrorkuSkirteiniToJSON,
} from '../models';

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     * Sækir hvort einstaklingur sé öryrki (disabled person), þ.e. hafi gilt 75% örorkumat (disability assessment). Kennitala í JWT.
     */
    async erOryrkiGetRaw(): Promise<runtime.ApiResponse<ErOryrki>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("bearerAuth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/erOryrki`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ErOryrkiFromJSON(jsonValue));
    }

    /**
     * Sækir hvort einstaklingur sé öryrki (disabled person), þ.e. hafi gilt 75% örorkumat (disability assessment). Kennitala í JWT.
     */
    async erOryrkiGet(): Promise<ErOryrki> {
        const response = await this.erOryrkiGetRaw();
        return await response.value();
    }

    /**
     * Skilar upplýsingum um örorkuskíteini (disability card), ef einstaklingur er með gilt 75% örorkumat (disability assessment). Kennitala í JWT.
     */
    async faskirteiniGetRaw(): Promise<runtime.ApiResponse<OrorkuSkirteini>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("bearerAuth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/faskirteini`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => OrorkuSkirteiniFromJSON(jsonValue));
    }

    /**
     * Skilar upplýsingum um örorkuskíteini (disability card), ef einstaklingur er með gilt 75% örorkumat (disability assessment). Kennitala í JWT.
     */
    async faskirteiniGet(): Promise<OrorkuSkirteini> {
        const response = await this.faskirteiniGetRaw();
        return await response.value();
    }

}
