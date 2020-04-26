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

import ApiClient from '../ApiClient';
import Hash from './Hash';

/**
* The BroadcastTxCommitResult model module.
* @module model/BroadcastTxCommitResult
* @version 3.0
*/
export default class BroadcastTxCommitResult {
    /**
    * Constructs a new <code>BroadcastTxCommitResult</code>.
    * @alias module:model/BroadcastTxCommitResult
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>BroadcastTxCommitResult</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/BroadcastTxCommitResult} obj Optional instance to populate.
    * @return {module:model/BroadcastTxCommitResult} The populated <code>BroadcastTxCommitResult</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BroadcastTxCommitResult();
                        
            
            if (data.hasOwnProperty('height')) {
                obj['height'] = ApiClient.convertToType(data['height'], 'String');
            }
            if (data.hasOwnProperty('txhash')) {
                obj['txhash'] = Hash.constructFromObject(data['txhash']);
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'Number');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], 'String');
            }
            if (data.hasOwnProperty('raw_log')) {
                obj['raw_log'] = ApiClient.convertToType(data['raw_log'], 'String');
            }
            if (data.hasOwnProperty('logs')) {
                obj['logs'] = ApiClient.convertToType(data['logs'], [Object]);
            }
            if (data.hasOwnProperty('info')) {
                obj['info'] = ApiClient.convertToType(data['info'], 'String');
            }
            if (data.hasOwnProperty('gas_wanted')) {
                obj['gas_wanted'] = ApiClient.convertToType(data['gas_wanted'], 'String');
            }
            if (data.hasOwnProperty('gas_used')) {
                obj['gas_used'] = ApiClient.convertToType(data['gas_used'], 'String');
            }
            if (data.hasOwnProperty('events')) {
                obj['events'] = ApiClient.convertToType(data['events'], [Object]);
            }
            if (data.hasOwnProperty('codespace')) {
                obj['codespace'] = ApiClient.convertToType(data['codespace'], 'String');
            }
            if (data.hasOwnProperty('tx')) {
                obj['tx'] = ApiClient.convertToType(data['tx'], Object);
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} height
    */
    height = undefined;
    /**
    * @member {module:model/Hash} txhash
    */
    txhash = undefined;
    /**
    * @member {Number} code
    */
    code = undefined;
    /**
    * @member {String} data
    */
    data = undefined;
    /**
    * @member {String} raw_log
    */
    raw_log = undefined;
    /**
    * @member {Array.<Object>} logs
    */
    logs = undefined;
    /**
    * @member {String} info
    */
    info = undefined;
    /**
    * @member {String} gas_wanted
    */
    gas_wanted = undefined;
    /**
    * @member {String} gas_used
    */
    gas_used = undefined;
    /**
    * @member {Array.<Object>} events
    */
    events = undefined;
    /**
    * @member {String} codespace
    */
    codespace = undefined;
    /**
    * @member {Object} tx
    */
    tx = undefined;
    /**
    * @member {String} timestamp
    */
    timestamp = undefined;




}