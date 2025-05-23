/* tslint:disable */
/* eslint-disable */
/**
 * Landlæknir API
 * Vefþjónustur á vegum Landlæknis.
 *
 * The version of the OpenAPI document: 1.0.1
 * Contact: holmfridur.palsdottir@landlaeknir.is
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    MinarSidur,
    MinarSidurFromJSON,
    MinarSidurToJSON,
} from '../models';

/**
 * 
 */
export class StarfsleyfiAMinumSidumApi extends runtime.BaseAPI {

    /**
     * Sækja mín starfsleyfi
     */
    async starfsleyfiAMinumSidumGetRaw(): Promise<runtime.ApiResponse<Array<MinarSidur>>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/StarfsleyfiAMinumSidum`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(MinarSidurFromJSON));
    }

    /**
     * Sækja mín starfsleyfi
     */
    async starfsleyfiAMinumSidumGet(): Promise<Array<MinarSidur>> {
        const response = await this.starfsleyfiAMinumSidumGetRaw();
        return await response.value();
    }

}
