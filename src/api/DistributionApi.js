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
import StdTx from '../model/StdTx';

/**
* Distribution service.
* @module api/DistributionApi
* @version 3.0
*/
export default class DistributionApi {

    /**
    * Constructs a new DistributionApi. 
    * @alias module:api/DistributionApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the donateToCommunityPool operation.
     * @callback module:api/DistributionApi~donateToCommunityPoolCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StdTx} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Donate to the community pool
     * Donate some amount of cet to the community pool
     * @param {module:api/DistributionApi~donateToCommunityPoolCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StdTx}
     */
    donateToCommunityPool(body, accAddress, callback) {
      let postBody = body;

      let pathParams = {
        'accAddress': accAddress
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
      let returnType = StdTx;

      return this.apiClient.callApi(
        '/distribution/{accAddress}/donates', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getAllRewards operation.
     * @callback module:api/DistributionApi~getAllRewardsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the total rewards balance from all delegations
     * Get the sum of all the rewards earned by delegations by a single delegator
     * @param {module:api/DistributionApi~getAllRewardsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getAllRewards(delegatorAddr, callback) {
      let postBody = null;

      let pathParams = {
        'delegatorAddr': delegatorAddr
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
        '/distribution/delegators/{delegatorAddr}/rewards', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getCommunityPool operation.
     * @callback module:api/DistributionApi~getCommunityPoolCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Community pool parameters
     * @param {module:api/DistributionApi~getCommunityPoolCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getCommunityPool(callback) {
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
        '/distribution/community_pool', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getDistributionInfo operation.
     * @callback module:api/DistributionApi~getDistributionInfoCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validator distribution information
     * Query the distribution information of a single validator
     * @param {module:api/DistributionApi~getDistributionInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getDistributionInfo(validatorAddr, callback) {
      let postBody = null;

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
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/distribution/validators/{validatorAddr}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getDistributionParams operation.
     * @callback module:api/DistributionApi~getDistributionParamsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fee distribution parameters
     * @param {module:api/DistributionApi~getDistributionParamsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getDistributionParams(callback) {
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
        '/distribution/parameters', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getOutstandingRewards operation.
     * @callback module:api/DistributionApi~getOutstandingRewardsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fee distribution outstanding rewards of a single validator
     * @param {module:api/DistributionApi~getOutstandingRewardsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getOutstandingRewards(validatorAddr, callback) {
      let postBody = null;

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
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/distribution/validators/{validatorAddr}/outstanding_rewards', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getRewardByValidator operation.
     * @callback module:api/DistributionApi~getRewardByValidatorCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Query a delegation reward
     * Query a single delegation reward by a delegator
     * @param {module:api/DistributionApi~getRewardByValidatorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getRewardByValidator(delegatorAddr, validatorAddr, callback) {
      let postBody = null;

      let pathParams = {
        'delegatorAddr': delegatorAddr,
        'validatorAddr': validatorAddr
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
        '/distribution/delegators/{delegatorAddr}/rewards/{validatorAddr}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getValidatorRewards operation.
     * @callback module:api/DistributionApi~getValidatorRewardsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Commission and self-delegation rewards of a single validator
     * Query the commission and self-delegation rewards of validator.
     * @param {module:api/DistributionApi~getValidatorRewardsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getValidatorRewards(validatorAddr, callback) {
      let postBody = null;

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
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/distribution/validators/{validatorAddr}/rewards', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getWithdrawAddress operation.
     * @callback module:api/DistributionApi~getWithdrawAddressCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the rewards withdrawal address
     * Get the delegations&#x27; rewards withdrawal address. This is the address in which the user will receive the reward funds
     * @param {module:api/DistributionApi~getWithdrawAddressCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getWithdrawAddress(delegatorAddr, callback) {
      let postBody = null;

      let pathParams = {
        'delegatorAddr': delegatorAddr
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
        '/distribution/delegators/{delegatorAddr}/withdraw_address', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the setWithdrawAddress operation.
     * @callback module:api/DistributionApi~setWithdrawAddressCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BroadcastTxCommitResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Replace the rewards withdrawal address
     * Replace the delegations&#x27; rewards withdrawal address for a new one.
     * @param {module:api/DistributionApi~setWithdrawAddressCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BroadcastTxCommitResult}
     */
    setWithdrawAddress(delegatorAddr, opts, callback) {
      let postBody = opts['body'];

      let pathParams = {
        'delegatorAddr': delegatorAddr
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
        '/distribution/delegators/{delegatorAddr}/withdraw_address', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the withdrawAllRewards operation.
     * @callback module:api/DistributionApi~withdrawAllRewardsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BroadcastTxCommitResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Withdraw all the delegator&#x27;s delegation rewards
     * Withdraw all the delegator&#x27;s delegation rewards
     * @param {module:api/DistributionApi~withdrawAllRewardsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BroadcastTxCommitResult}
     */
    withdrawAllRewards(delegatorAddr, opts, callback) {
      let postBody = opts['body'];

      let pathParams = {
        'delegatorAddr': delegatorAddr
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
        '/distribution/delegators/{delegatorAddr}/rewards', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the withdrawAllValidatorRewards operation.
     * @callback module:api/DistributionApi~withdrawAllValidatorRewardsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BroadcastTxCommitResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Withdraw the validator&#x27;s rewards
     * Withdraw the validator&#x27;s self-delegation and commissions rewards
     * @param {module:api/DistributionApi~withdrawAllValidatorRewardsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BroadcastTxCommitResult}
     */
    withdrawAllValidatorRewards(validatorAddr, opts, callback) {
      let postBody = opts['body'];

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
        '/distribution/validators/{validatorAddr}/rewards', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the withdrawRewardsByValidator operation.
     * @callback module:api/DistributionApi~withdrawRewardsByValidatorCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BroadcastTxCommitResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Withdraw a delegation reward
     * Withdraw a delegator&#x27;s delegation reward from a single validator
     * @param {module:api/DistributionApi~withdrawRewardsByValidatorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BroadcastTxCommitResult}
     */
    withdrawRewardsByValidator(delegatorAddr, validatorAddr, opts, callback) {
      let postBody = opts['body'];

      let pathParams = {
        'delegatorAddr': delegatorAddr,
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
        '/distribution/delegators/{delegatorAddr}/rewards/{validatorAddr}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
