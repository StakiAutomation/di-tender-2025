/* tslint:disable */
/* eslint-disable */
/**
 * Finance Services v2
 * Finance services verison 2 ,   services for  working with a assessment Year,
 *
 * The version of the OpenAPI document: 2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    AssessmentYearsnationalIdGETResponse,
    AssessmentYearsnationalIdGETResponseFromJSON,
    AssessmentYearsnationalIdGETResponseToJSON,
    ChargeItemSubjectsByYearnationalIdassessmentYearchargeTypeIDGETResponse,
    ChargeItemSubjectsByYearnationalIdassessmentYearchargeTypeIDGETResponseFromJSON,
    ChargeItemSubjectsByYearnationalIdassessmentYearchargeTypeIDGETResponseToJSON,
    ChargeTypesByYearnationalIdassessmentYearGETResponse,
    ChargeTypesByYearnationalIdassessmentYearGETResponseFromJSON,
    ChargeTypesByYearnationalIdassessmentYearGETResponseToJSON,
    ChargeTypesDetailsByYearnationalIdassessmentYearchargeTypeIDGETResponse,
    ChargeTypesDetailsByYearnationalIdassessmentYearchargeTypeIDGETResponseFromJSON,
    ChargeTypesDetailsByYearnationalIdassessmentYearchargeTypeIDGETResponseToJSON,
    RecordsByYearnationalIdassessmentYearchargeTypeIDchargeItemSubjectperiodGETResponse,
    RecordsByYearnationalIdassessmentYearchargeTypeIDchargeItemSubjectperiodGETResponseFromJSON,
    RecordsByYearnationalIdassessmentYearchargeTypeIDchargeItemSubjectperiodGETResponseToJSON,
} from '../models';

export interface AssessmentYearsnationalIdGET1Request {
    nationalId: string;
}

export interface ChargeItemSubjectsByYearnationalIdassessmentYearchargeTypeIDGET4Request {
    nationalId: string;
    assessmentYear: string;
    chargeTypeID: string;
    nextKey?: string;
}

export interface ChargeTypesByYearnationalIdassessmentYearGET2Request {
    nationalId: string;
    assessmentYear: string;
}

export interface ChargeTypesDetailsByYearnationalIdassessmentYearchargeTypeIDGET3Request {
    nationalId: string;
    assessmentYear: string;
    chargeTypeID: string;
}

export interface RecordsByYearnationalIdassessmentYearchargeTypeIDchargeItemSubjectperiodGET5Request {
    nationalId: string;
    assessmentYear: string;
    chargeTypeID: string;
    chargeItemSubject: string;
    period: string;
    nextKey?: string;
}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     * Returns assessemnt years for given nationalId.
     */
    async assessmentYearsnationalIdGET1Raw(requestParameters: AssessmentYearsnationalIdGET1Request): Promise<runtime.ApiResponse<AssessmentYearsnationalIdGETResponse>> {
        if (requestParameters.nationalId === null || requestParameters.nationalId === undefined) {
            throw new runtime.RequiredError('nationalId','Required parameter requestParameters.nationalId was null or undefined when calling assessmentYearsnationalIdGET1.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/assessmentYears/{nationalId}`.replace(`{${"nationalId"}}`, encodeURIComponent(String(requestParameters.nationalId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AssessmentYearsnationalIdGETResponseFromJSON(jsonValue));
    }

    /**
     * Returns assessemnt years for given nationalId.
     */
    async assessmentYearsnationalIdGET1(requestParameters: AssessmentYearsnationalIdGET1Request): Promise<AssessmentYearsnationalIdGETResponse> {
        const response = await this.assessmentYearsnationalIdGET1Raw(requestParameters);
        return await response.value();
    }

    /**
     * Returns chargeItemSubjects/periods  for nationalid/ assessment Year/charge type
     */
    async chargeItemSubjectsByYearnationalIdassessmentYearchargeTypeIDGET4Raw(requestParameters: ChargeItemSubjectsByYearnationalIdassessmentYearchargeTypeIDGET4Request): Promise<runtime.ApiResponse<ChargeItemSubjectsByYearnationalIdassessmentYearchargeTypeIDGETResponse>> {
        if (requestParameters.nationalId === null || requestParameters.nationalId === undefined) {
            throw new runtime.RequiredError('nationalId','Required parameter requestParameters.nationalId was null or undefined when calling chargeItemSubjectsByYearnationalIdassessmentYearchargeTypeIDGET4.');
        }

        if (requestParameters.assessmentYear === null || requestParameters.assessmentYear === undefined) {
            throw new runtime.RequiredError('assessmentYear','Required parameter requestParameters.assessmentYear was null or undefined when calling chargeItemSubjectsByYearnationalIdassessmentYearchargeTypeIDGET4.');
        }

        if (requestParameters.chargeTypeID === null || requestParameters.chargeTypeID === undefined) {
            throw new runtime.RequiredError('chargeTypeID','Required parameter requestParameters.chargeTypeID was null or undefined when calling chargeItemSubjectsByYearnationalIdassessmentYearchargeTypeIDGET4.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.nextKey !== undefined) {
            queryParameters['nextKey'] = requestParameters.nextKey;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/chargeItemSubjectsByYear/{nationalId}/{assessmentYear}/{chargeTypeID}`.replace(`{${"nationalId"}}`, encodeURIComponent(String(requestParameters.nationalId))).replace(`{${"assessmentYear"}}`, encodeURIComponent(String(requestParameters.assessmentYear))).replace(`{${"chargeTypeID"}}`, encodeURIComponent(String(requestParameters.chargeTypeID))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ChargeItemSubjectsByYearnationalIdassessmentYearchargeTypeIDGETResponseFromJSON(jsonValue));
    }

    /**
     * Returns chargeItemSubjects/periods  for nationalid/ assessment Year/charge type
     */
    async chargeItemSubjectsByYearnationalIdassessmentYearchargeTypeIDGET4(requestParameters: ChargeItemSubjectsByYearnationalIdassessmentYearchargeTypeIDGET4Request): Promise<ChargeItemSubjectsByYearnationalIdassessmentYearchargeTypeIDGETResponse> {
        const response = await this.chargeItemSubjectsByYearnationalIdassessmentYearchargeTypeIDGET4Raw(requestParameters);
        return await response.value();
    }

    /**
     * Returns  charge type for given nationalId./ Assessment Year
     */
    async chargeTypesByYearnationalIdassessmentYearGET2Raw(requestParameters: ChargeTypesByYearnationalIdassessmentYearGET2Request): Promise<runtime.ApiResponse<ChargeTypesByYearnationalIdassessmentYearGETResponse>> {
        if (requestParameters.nationalId === null || requestParameters.nationalId === undefined) {
            throw new runtime.RequiredError('nationalId','Required parameter requestParameters.nationalId was null or undefined when calling chargeTypesByYearnationalIdassessmentYearGET2.');
        }

        if (requestParameters.assessmentYear === null || requestParameters.assessmentYear === undefined) {
            throw new runtime.RequiredError('assessmentYear','Required parameter requestParameters.assessmentYear was null or undefined when calling chargeTypesByYearnationalIdassessmentYearGET2.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/chargeTypesByYear/{nationalId}/{assessmentYear}`.replace(`{${"nationalId"}}`, encodeURIComponent(String(requestParameters.nationalId))).replace(`{${"assessmentYear"}}`, encodeURIComponent(String(requestParameters.assessmentYear))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ChargeTypesByYearnationalIdassessmentYearGETResponseFromJSON(jsonValue));
    }

    /**
     * Returns  charge type for given nationalId./ Assessment Year
     */
    async chargeTypesByYearnationalIdassessmentYearGET2(requestParameters: ChargeTypesByYearnationalIdassessmentYearGET2Request): Promise<ChargeTypesByYearnationalIdassessmentYearGETResponse> {
        const response = await this.chargeTypesByYearnationalIdassessmentYearGET2Raw(requestParameters);
        return await response.value();
    }

    /**
     * Returns charge type details for  nationalId/AssessmentYear
     */
    async chargeTypesDetailsByYearnationalIdassessmentYearchargeTypeIDGET3Raw(requestParameters: ChargeTypesDetailsByYearnationalIdassessmentYearchargeTypeIDGET3Request): Promise<runtime.ApiResponse<ChargeTypesDetailsByYearnationalIdassessmentYearchargeTypeIDGETResponse>> {
        if (requestParameters.nationalId === null || requestParameters.nationalId === undefined) {
            throw new runtime.RequiredError('nationalId','Required parameter requestParameters.nationalId was null or undefined when calling chargeTypesDetailsByYearnationalIdassessmentYearchargeTypeIDGET3.');
        }

        if (requestParameters.assessmentYear === null || requestParameters.assessmentYear === undefined) {
            throw new runtime.RequiredError('assessmentYear','Required parameter requestParameters.assessmentYear was null or undefined when calling chargeTypesDetailsByYearnationalIdassessmentYearchargeTypeIDGET3.');
        }

        if (requestParameters.chargeTypeID === null || requestParameters.chargeTypeID === undefined) {
            throw new runtime.RequiredError('chargeTypeID','Required parameter requestParameters.chargeTypeID was null or undefined when calling chargeTypesDetailsByYearnationalIdassessmentYearchargeTypeIDGET3.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/chargeTypesDetailsByYear/{nationalId}/{assessmentYear}/{chargeTypeID}`.replace(`{${"nationalId"}}`, encodeURIComponent(String(requestParameters.nationalId))).replace(`{${"assessmentYear"}}`, encodeURIComponent(String(requestParameters.assessmentYear))).replace(`{${"chargeTypeID"}}`, encodeURIComponent(String(requestParameters.chargeTypeID))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ChargeTypesDetailsByYearnationalIdassessmentYearchargeTypeIDGETResponseFromJSON(jsonValue));
    }

    /**
     * Returns charge type details for  nationalId/AssessmentYear
     */
    async chargeTypesDetailsByYearnationalIdassessmentYearchargeTypeIDGET3(requestParameters: ChargeTypesDetailsByYearnationalIdassessmentYearchargeTypeIDGET3Request): Promise<ChargeTypesDetailsByYearnationalIdassessmentYearchargeTypeIDGETResponse> {
        const response = await this.chargeTypesDetailsByYearnationalIdassessmentYearchargeTypeIDGET3Raw(requestParameters);
        return await response.value();
    }

    /**
     * Returns records  for nationalid/ assessment Year/charge type/subjects/period
     */
    async recordsByYearnationalIdassessmentYearchargeTypeIDchargeItemSubjectperiodGET5Raw(requestParameters: RecordsByYearnationalIdassessmentYearchargeTypeIDchargeItemSubjectperiodGET5Request): Promise<runtime.ApiResponse<RecordsByYearnationalIdassessmentYearchargeTypeIDchargeItemSubjectperiodGETResponse>> {
        if (requestParameters.nationalId === null || requestParameters.nationalId === undefined) {
            throw new runtime.RequiredError('nationalId','Required parameter requestParameters.nationalId was null or undefined when calling recordsByYearnationalIdassessmentYearchargeTypeIDchargeItemSubjectperiodGET5.');
        }

        if (requestParameters.assessmentYear === null || requestParameters.assessmentYear === undefined) {
            throw new runtime.RequiredError('assessmentYear','Required parameter requestParameters.assessmentYear was null or undefined when calling recordsByYearnationalIdassessmentYearchargeTypeIDchargeItemSubjectperiodGET5.');
        }

        if (requestParameters.chargeTypeID === null || requestParameters.chargeTypeID === undefined) {
            throw new runtime.RequiredError('chargeTypeID','Required parameter requestParameters.chargeTypeID was null or undefined when calling recordsByYearnationalIdassessmentYearchargeTypeIDchargeItemSubjectperiodGET5.');
        }

        if (requestParameters.chargeItemSubject === null || requestParameters.chargeItemSubject === undefined) {
            throw new runtime.RequiredError('chargeItemSubject','Required parameter requestParameters.chargeItemSubject was null or undefined when calling recordsByYearnationalIdassessmentYearchargeTypeIDchargeItemSubjectperiodGET5.');
        }

        if (requestParameters.period === null || requestParameters.period === undefined) {
            throw new runtime.RequiredError('period','Required parameter requestParameters.period was null or undefined when calling recordsByYearnationalIdassessmentYearchargeTypeIDchargeItemSubjectperiodGET5.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.nextKey !== undefined) {
            queryParameters['nextKey'] = requestParameters.nextKey;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/recordsByYear/{nationalId}/{assessmentYear}/{chargeTypeID}/{chargeItemSubject}/{period}`.replace(`{${"nationalId"}}`, encodeURIComponent(String(requestParameters.nationalId))).replace(`{${"assessmentYear"}}`, encodeURIComponent(String(requestParameters.assessmentYear))).replace(`{${"chargeTypeID"}}`, encodeURIComponent(String(requestParameters.chargeTypeID))).replace(`{${"chargeItemSubject"}}`, encodeURIComponent(String(requestParameters.chargeItemSubject))).replace(`{${"period"}}`, encodeURIComponent(String(requestParameters.period))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RecordsByYearnationalIdassessmentYearchargeTypeIDchargeItemSubjectperiodGETResponseFromJSON(jsonValue));
    }

    /**
     * Returns records  for nationalid/ assessment Year/charge type/subjects/period
     */
    async recordsByYearnationalIdassessmentYearchargeTypeIDchargeItemSubjectperiodGET5(requestParameters: RecordsByYearnationalIdassessmentYearchargeTypeIDchargeItemSubjectperiodGET5Request): Promise<RecordsByYearnationalIdassessmentYearchargeTypeIDchargeItemSubjectperiodGETResponse> {
        const response = await this.recordsByYearnationalIdassessmentYearchargeTypeIDchargeItemSubjectperiodGET5Raw(requestParameters);
        return await response.value();
    }

}
