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
import { Person } from './person';

export class DirectoryResponse {
  People?: Array<Person>;
  IsValid?: boolean;
  ErrorMessage?: string;
  ResultMessage?: string;
  ValidationErrors?: Array<string>;
}
