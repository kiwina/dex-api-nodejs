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

import ApiClient from '../ApiClient';
import Coin from './Coin';

/**
 * The StdTxCoreFee model module.
 * @module model/StdTxCoreFee
 * @version 3.0
 */
class StdTxCoreFee {
    /**
     * Constructs a new <code>StdTxCoreFee</code>.
     * @alias module:model/StdTxCoreFee
     */
    constructor() { 
        
        StdTxCoreFee.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StdTxCoreFee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StdTxCoreFee} obj Optional instance to populate.
     * @return {module:model/StdTxCoreFee} The populated <code>StdTxCoreFee</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StdTxCoreFee();

            if (data.hasOwnProperty('gas')) {
                obj['gas'] = ApiClient.convertToType(data['gas'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], [Coin]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} gas
 */
StdTxCoreFee.prototype['gas'] = undefined;

/**
 * @member {Array.<module:model/Coin>} amount
 */
StdTxCoreFee.prototype['amount'] = undefined;






export default StdTxCoreFee;
