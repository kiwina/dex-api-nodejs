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

/**
* The UnbondingEntries model module.
* @module model/UnbondingEntries
* @version 3.0
*/
export default class UnbondingEntries {
    /**
    * Constructs a new <code>UnbondingEntries</code>.
    * @alias module:model/UnbondingEntries
    * @class
    * @param initialBalance {String} 
    * @param balance {String} 
    * @param creationHeight {String} 
    * @param completionTime {String} 
    */

    constructor(initialBalance, balance, creationHeight, completionTime) {
        
        
        this['initial_balance'] = initialBalance;
        this['balance'] = balance;
        this['creation_height'] = creationHeight;
        this['completion_time'] = completionTime;
        
    }

    /**
    * Constructs a <code>UnbondingEntries</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/UnbondingEntries} obj Optional instance to populate.
    * @return {module:model/UnbondingEntries} The populated <code>UnbondingEntries</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UnbondingEntries();
                        
            
            if (data.hasOwnProperty('initial_balance')) {
                obj['initial_balance'] = ApiClient.convertToType(data['initial_balance'], 'String');
            }
            if (data.hasOwnProperty('balance')) {
                obj['balance'] = ApiClient.convertToType(data['balance'], 'String');
            }
            if (data.hasOwnProperty('creation_height')) {
                obj['creation_height'] = ApiClient.convertToType(data['creation_height'], 'String');
            }
            if (data.hasOwnProperty('completion_time')) {
                obj['completion_time'] = ApiClient.convertToType(data['completion_time'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} initial_balance
    */
    initial_balance = undefined;
    /**
    * @member {String} balance
    */
    balance = undefined;
    /**
    * @member {String} creation_height
    */
    creation_height = undefined;
    /**
    * @member {String} completion_time
    */
    completion_time = undefined;




}