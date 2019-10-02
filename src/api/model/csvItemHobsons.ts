/**
 * UF.DataAccess.API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: V1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { CsvItemDecision } from './csvItemDecision';
import { CsvItemTestScore } from './csvItemTestScore';
import { CsvItemApplication } from './csvItemApplication';
import { CsvItemEducation } from './csvItemEducation';

export class CsvItemHobsons {
  Applications?: Array<CsvItemApplication>;
  Educations?: Array<CsvItemEducation>;
  Decisions?: Array<CsvItemDecision>;
  TestScores?: Array<CsvItemTestScore>;
}
