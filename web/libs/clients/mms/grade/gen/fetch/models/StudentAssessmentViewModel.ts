/* tslint:disable */
/* eslint-disable */
/**
 * Grade API
 * This is the API for the Grade system.
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    CourseViewModel,
    CourseViewModelFromJSON,
    CourseViewModelFromJSONTyped,
    CourseViewModelToJSON,
} from './';

/**
 * 
 * @export
 * @interface StudentAssessmentViewModel
 */
export interface StudentAssessmentViewModel {
    /**
     * 
     * @type {Array<CourseViewModel>}
     * @memberof StudentAssessmentViewModel
     */
    einkunnir: Array<CourseViewModel>;
}

export function StudentAssessmentViewModelFromJSON(json: any): StudentAssessmentViewModel {
    return StudentAssessmentViewModelFromJSONTyped(json, false);
}

export function StudentAssessmentViewModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): StudentAssessmentViewModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'einkunnir': ((json['einkunnir'] as Array<any>).map(CourseViewModelFromJSON)),
    };
}

export function StudentAssessmentViewModelToJSON(value?: StudentAssessmentViewModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'einkunnir': ((value.einkunnir as Array<any>).map(CourseViewModelToJSON)),
    };
}


