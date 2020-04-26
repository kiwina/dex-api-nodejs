/**
 * CET-Lite for CoinEx Chain
 * A REST interface for state queries, transaction generation and broadcasting.
 *
 * OpenAPI spec version: 3.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from "../ApiClient";
import BroadcastTxCommitResult from '../model/BroadcastTxCommitResult';

/**
* Slashing service.
* @module api/SlashingApi
* @version 3.0
*/
export default class SlashingApi {

    /**
    * Constructs a new SlashingApi. 
    * @alias module:api/SlashingApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getSigningInfo operation.
     * @callback module:api/SlashingApi~getSigningInfoCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get sign info of given validator
     * Get sign info of given validator
     * @param {module:api/SlashingApi~getSigningInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getSigningInfo(validatorPubKey, callback) {
      let postBody = null;

      let pathParams = {
        'validatorPubKey': validatorPubKey
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/slashing/validators/{validatorPubKey}/signing_info', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getSigningInfos operation.
     * @callback module:api/SlashingApi~getSigningInfosCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get sign info of given all validators
     * Get sign info of all validators
     * @param {module:api/SlashingApi~getSigningInfosCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getSigningInfos(page, limit, callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'page': page,
        'limit': limit
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/slashing/signing_infos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getSlashingParams operation.
     * @callback module:api/SlashingApi~getSlashingParamsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the current slashing parameters
     * @param {module:api/SlashingApi~getSlashingParamsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getSlashingParams(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/slashing/parameters', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the unjailValidator operation.
     * @callback module:api/SlashingApi~unjailValidatorCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BroadcastTxCommitResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unjail a jailed validator
     * Send transaction to unjail a jailed validator
     * @param {module:api/SlashingApi~unjailValidatorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BroadcastTxCommitResult}
     */
    unjailValidator(body, validatorAddr, callback) {
      let postBody = body;

      let pathParams = {
        'validatorAddr': validatorAddr
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = BroadcastTxCommitResult;

      return this.apiClient.callApi(
        '/slashing/validators/{validatorAddr}/unjail', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}