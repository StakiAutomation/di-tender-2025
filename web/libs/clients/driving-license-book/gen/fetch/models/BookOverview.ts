/* tslint:disable */
/* eslint-disable */
/**
 * Digital DrivingLicenceBook API
 * Vefþjónusta fyrir rafræna ökunámsbók - f9a51338fc6bb51bf829cfc1123ddd104a8439cd-20240530.1
 *
 * The version of the OpenAPI document: v1
 * Contact: samgongustofa@samgongustofa.is
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    DrivingLicenceTestResult,
    DrivingLicenceTestResultFromJSON,
    DrivingLicenceTestResultFromJSONTyped,
    DrivingLicenceTestResultToJSON,
    DrivingSchoolExam,
    DrivingSchoolExamFromJSON,
    DrivingSchoolExamFromJSONTyped,
    DrivingSchoolExamToJSON,
    Exemption,
    ExemptionFromJSON,
    ExemptionFromJSONTyped,
    ExemptionToJSON,
    Lesson,
    LessonFromJSON,
    LessonFromJSONTyped,
    LessonToJSON,
} from './';

/**
 * Provides an overview of a driving license book.
 * @export
 * @interface BookOverview
 */
export interface BookOverview {
    /**
     * Gets or sets the unique identifier for the driving license book.
     * @type {string}
     * @memberof BookOverview
     */
    id?: string | null;
    /**
     * Gets or sets the type of driving license.
     * @type {string}
     * @memberof BookOverview
     */
    licenseCategory?: string | null;
    /**
     * Gets or sets the date the driving license book was registered (yyyy-MM-dd).
     * @type {string}
     * @memberof BookOverview
     */
    createdOn?: string | null;
    /**
     * Gets or sets the social security number of the driving instructor.
     * @type {string}
     * @memberof BookOverview
     */
    teacherSsn?: string | null;
    /**
     * Gets or sets the name of the driving instructor.
     * @type {string}
     * @memberof BookOverview
     */
    teacherName?: string | null;
    /**
     * Gets or sets the social security number of the driving school.
     * @type {string}
     * @memberof BookOverview
     */
    schoolSsn?: string | null;
    /**
     * Gets or sets the name of the driving school.
     * @type {string}
     * @memberof BookOverview
     */
    schoolName?: string | null;
    /**
     * Gets or sets a value indicating whether the driving license book is digital or not (else on paper).
     * @type {boolean}
     * @memberof BookOverview
     */
    isDigital?: boolean;
    /**
     * Gets or sets the status ID of the application (0=New, 1=In Progress, etc.).
     * @type {number}
     * @memberof BookOverview
     */
    status?: number;
    /**
     * Gets or sets the name of the book status.
     * @type {string}
     * @memberof BookOverview
     */
    statusName?: string | null;
    /**
     * Gets or sets a value indicating whether the student can do practice driving.
     * @type {boolean}
     * @memberof BookOverview
     */
    practiceDriving?: boolean;
    /**
     * Gets the count of all practical lessons (each lesson is 45 minutes).
     * @type {number}
     * @memberof BookOverview
     */
    readonly totalLessonCount?: number;
    /**
     * Gets or sets the list of all practical lessons with instructors.
     * @type {Array<Lesson>}
     * @memberof BookOverview
     */
    teachersAndLessons?: Array<Lesson> | null;
    /**
     * Gets or sets the list of all driving school tests, grouped by school.
     * @type {Array<DrivingSchoolExam>}
     * @memberof BookOverview
     */
    drivingSchoolExams?: Array<DrivingSchoolExam> | null;
    /**
     * Gets or sets the results from test center.
     * @type {Array<DrivingLicenceTestResult>}
     * @memberof BookOverview
     */
    testResults?: Array<DrivingLicenceTestResult> | null;
    /**
     * Gets or sets the list of all exemptions for the book.
     * @type {Array<Exemption>}
     * @memberof BookOverview
     */
    exemptions?: Array<Exemption> | null;
}

export function BookOverviewFromJSON(json: any): BookOverview {
    return BookOverviewFromJSONTyped(json, false);
}

export function BookOverviewFromJSONTyped(json: any, ignoreDiscriminator: boolean): BookOverview {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'licenseCategory': !exists(json, 'licenseCategory') ? undefined : json['licenseCategory'],
        'createdOn': !exists(json, 'createdOn') ? undefined : json['createdOn'],
        'teacherSsn': !exists(json, 'teacherSsn') ? undefined : json['teacherSsn'],
        'teacherName': !exists(json, 'teacherName') ? undefined : json['teacherName'],
        'schoolSsn': !exists(json, 'schoolSsn') ? undefined : json['schoolSsn'],
        'schoolName': !exists(json, 'schoolName') ? undefined : json['schoolName'],
        'isDigital': !exists(json, 'isDigital') ? undefined : json['isDigital'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'statusName': !exists(json, 'statusName') ? undefined : json['statusName'],
        'practiceDriving': !exists(json, 'practiceDriving') ? undefined : json['practiceDriving'],
        'totalLessonCount': !exists(json, 'totalLessonCount') ? undefined : json['totalLessonCount'],
        'teachersAndLessons': !exists(json, 'teachersAndLessons') ? undefined : (json['teachersAndLessons'] === null ? null : (json['teachersAndLessons'] as Array<any>).map(LessonFromJSON)),
        'drivingSchoolExams': !exists(json, 'drivingSchoolExams') ? undefined : (json['drivingSchoolExams'] === null ? null : (json['drivingSchoolExams'] as Array<any>).map(DrivingSchoolExamFromJSON)),
        'testResults': !exists(json, 'testResults') ? undefined : (json['testResults'] === null ? null : (json['testResults'] as Array<any>).map(DrivingLicenceTestResultFromJSON)),
        'exemptions': !exists(json, 'exemptions') ? undefined : (json['exemptions'] === null ? null : (json['exemptions'] as Array<any>).map(ExemptionFromJSON)),
    };
}

export function BookOverviewToJSON(value?: BookOverview | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'licenseCategory': value.licenseCategory,
        'createdOn': value.createdOn,
        'teacherSsn': value.teacherSsn,
        'teacherName': value.teacherName,
        'schoolSsn': value.schoolSsn,
        'schoolName': value.schoolName,
        'isDigital': value.isDigital,
        'status': value.status,
        'statusName': value.statusName,
        'practiceDriving': value.practiceDriving,
        'teachersAndLessons': value.teachersAndLessons === undefined ? undefined : (value.teachersAndLessons === null ? null : (value.teachersAndLessons as Array<any>).map(LessonToJSON)),
        'drivingSchoolExams': value.drivingSchoolExams === undefined ? undefined : (value.drivingSchoolExams === null ? null : (value.drivingSchoolExams as Array<any>).map(DrivingSchoolExamToJSON)),
        'testResults': value.testResults === undefined ? undefined : (value.testResults === null ? null : (value.testResults as Array<any>).map(DrivingLicenceTestResultToJSON)),
        'exemptions': value.exemptions === undefined ? undefined : (value.exemptions === null ? null : (value.exemptions as Array<any>).map(ExemptionToJSON)),
    };
}


