/**
 * CET-Lite for CoinEx Chain
 * A REST interface for state queries, transaction generation and broadcasting.
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import InlineObject33 from '../model/InlineObject33';
import InlineObject34 from '../model/InlineObject34';
import InlineObject35 from '../model/InlineObject35';
import InlineResponse20051 from '../model/InlineResponse20051';
import InlineResponse20052 from '../model/InlineResponse20052';
import StdTx from '../model/StdTx';

/**
* Bancorlite service.
* @module api/BancorliteApi
* @version 3.0
*/
export default class BancorliteApi {

    /**
    * Constructs a new BancorliteApi. 
    * @alias module:api/BancorliteApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * cancel bancor
     * @param {module:model/InlineObject35} bancorCancel 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StdTx} and HTTP response
     */
    bancorCancelWithHttpInfo(bancorCancel) {
      let postBody = bancorCancel;
      // verify the required parameter 'bancorCancel' is set
      if (bancorCancel === undefined || bancorCancel === null) {
        throw new Error("Missing the required parameter 'bancorCancel' when calling bancorCancel");
      }

      let pathParams = {
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
        '/bancorlite/bancor-cancel', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * cancel bancor
     * @param {module:model/InlineObject35} bancorCancel 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StdTx}
     */
    bancorCancel(bancorCancel) {
      return this.bancorCancelWithHttpInfo(bancorCancel)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * create bancor
     * @param {module:model/InlineObject33} bancorInit 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StdTx} and HTTP response
     */
    bancorInitWithHttpInfo(bancorInit) {
      let postBody = bancorInit;
      // verify the required parameter 'bancorInit' is set
      if (bancorInit === undefined || bancorInit === null) {
        throw new Error("Missing the required parameter 'bancorInit' when calling bancorInit");
      }

      let pathParams = {
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
        '/bancorlite/bancor-init', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * create bancor
     * @param {module:model/InlineObject33} bancorInit 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StdTx}
     */
    bancorInit(bancorInit) {
      return this.bancorInitWithHttpInfo(bancorInit)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * trade with bancor
     * @param {module:model/InlineObject34} bancorTrade 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StdTx} and HTTP response
     */
    bancorTradeWithHttpInfo(bancorTrade) {
      let postBody = bancorTrade;
      // verify the required parameter 'bancorTrade' is set
      if (bancorTrade === undefined || bancorTrade === null) {
        throw new Error("Missing the required parameter 'bancorTrade' when calling bancorTrade");
      }

      let pathParams = {
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
        '/bancorlite/bancor-trade', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * trade with bancor
     * @param {module:model/InlineObject34} bancorTrade 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StdTx}
     */
    bancorTrade(bancorTrade) {
      return this.bancorTradeWithHttpInfo(bancorTrade)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * get the bancor pool info
     * @param {String} symbol stock and money pair
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object.<String, {String: Object}>} and HTTP response
     */
    getBancorInfoWithHttpInfo(symbol) {
      let postBody = null;
      // verify the required parameter 'symbol' is set
      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling getBancorInfo");
      }

      let pathParams = {
        'symbol': symbol
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
      let returnType = {'String': Object};
      return this.apiClient.callApi(
        '/bancorlite/pools/{symbol}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * get the bancor pool info
     * @param {String} symbol stock and money pair
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object.<String, {String: Object}>}
     */
    getBancorInfo(symbol) {
      return this.getBancorInfoWithHttpInfo(symbol)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * get all bancor infos
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20052} and HTTP response
     */
    getBancorInfosWithHttpInfo() {
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
      let returnType = InlineResponse20052;
      return this.apiClient.callApi(
        '/bancorlite/infos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * get all bancor infos
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20052}
     */
    getBancorInfos() {
      return this.getBancorInfosWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the current bancorlite parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20051} and HTTP response
     */
    getBancorliteParamsWithHttpInfo() {
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
      let returnType = InlineResponse20051;
      return this.apiClient.callApi(
        '/bancorlite/parameters', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get the current bancorlite parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20051}
     */
    getBancorliteParams() {
      return this.getBancorliteParamsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
