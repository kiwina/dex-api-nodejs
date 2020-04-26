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
import MarketInfo from './MarketInfo';

/**
* The MarketInfos model module.
* @module model/MarketInfos
* @version 3.0
*/
export default class MarketInfos extends Array {
    /**
    * Constructs a new <code>MarketInfos</code>.
    * @alias module:model/MarketInfos
    * @class
    * @extends Array
    */

    constructor() {
        super();
        
        
        return this;
    }

    /**
    * Constructs a <code>MarketInfos</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/MarketInfos} obj Optional instance to populate.
    * @return {module:model/MarketInfos} The populated <code>MarketInfos</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MarketInfos();
            ApiClient.constructFromObject(data, obj, 'MarketInfo');
            
            
        }
        return obj;
    }





}
