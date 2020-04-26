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
import Coin from './Coin';

/**
* The BaseReq model module.
* @module model/BaseReq
* @version 3.0
*/
export default class BaseReq {
    /**
    * Constructs a new <code>BaseReq</code>.
    * @alias module:model/BaseReq
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>BaseReq</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/BaseReq} obj Optional instance to populate.
    * @return {module:model/BaseReq} The populated <code>BaseReq</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BaseReq();
                        
            
            if (data.hasOwnProperty('from')) {
                obj['from'] = ApiClient.convertToType(data['from'], 'String');
            }
            if (data.hasOwnProperty('memo')) {
                obj['memo'] = ApiClient.convertToType(data['memo'], 'String');
            }
            if (data.hasOwnProperty('chain_id')) {
                obj['chain_id'] = ApiClient.convertToType(data['chain_id'], 'String');
            }
            if (data.hasOwnProperty('account_number')) {
                obj['account_number'] = ApiClient.convertToType(data['account_number'], 'String');
            }
            if (data.hasOwnProperty('sequence')) {
                obj['sequence'] = ApiClient.convertToType(data['sequence'], 'String');
            }
            if (data.hasOwnProperty('gas')) {
                obj['gas'] = ApiClient.convertToType(data['gas'], 'String');
            }
            if (data.hasOwnProperty('gas_adjustment')) {
                obj['gas_adjustment'] = ApiClient.convertToType(data['gas_adjustment'], 'String');
            }
            if (data.hasOwnProperty('fees')) {
                obj['fees'] = ApiClient.convertToType(data['fees'], [Coin]);
            }
            if (data.hasOwnProperty('simulate')) {
                obj['simulate'] = ApiClient.convertToType(data['simulate'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * Sender address or Keybase name to generate a transaction
    * @member {String} from
    */
    from = undefined;
    /**
    * @member {String} memo
    */
    memo = undefined;
    /**
    * @member {String} chain_id
    */
    chain_id = undefined;
    /**
    * @member {String} account_number
    */
    account_number = undefined;
    /**
    * @member {String} sequence
    */
    sequence = undefined;
    /**
    * @member {String} gas
    */
    gas = undefined;
    /**
    * @member {String} gas_adjustment
    */
    gas_adjustment = undefined;
    /**
    * @member {Array.<module:model/Coin>} fees
    */
    fees = undefined;
    /**
    * Estimate gas for a transaction (cannot be used in conjunction with generate_only)
    * @member {Boolean} simulate
    */
    simulate = undefined;




}
