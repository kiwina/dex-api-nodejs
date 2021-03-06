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
import LockedCoin from './LockedCoin';

/**
 * The Unlock model module.
 * @module model/Unlock
 * @version 3.0
 */
class Unlock {
    /**
     * Constructs a new <code>Unlock</code>.
     * @alias module:model/Unlock
     */
    constructor() { 
        
        Unlock.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Unlock</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Unlock} obj Optional instance to populate.
     * @return {module:model/Unlock} The populated <code>Unlock</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Unlock();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('unlocked')) {
                obj['unlocked'] = ApiClient.convertToType(data['unlocked'], [Coin]);
            }
            if (data.hasOwnProperty('locked_coins')) {
                obj['locked_coins'] = ApiClient.convertToType(data['locked_coins'], [LockedCoin]);
            }
            if (data.hasOwnProperty('frozen_coins')) {
                obj['frozen_coins'] = ApiClient.convertToType(data['frozen_coins'], [Coin]);
            }
            if (data.hasOwnProperty('coins')) {
                obj['coins'] = ApiClient.convertToType(data['coins'], [Coin]);
            }
            if (data.hasOwnProperty('height')) {
                obj['height'] = ApiClient.convertToType(data['height'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * bech32 encoded address
 * @member {String} address
 */
Unlock.prototype['address'] = undefined;

/**
 * @member {Array.<module:model/Coin>} unlocked
 */
Unlock.prototype['unlocked'] = undefined;

/**
 * @member {Array.<module:model/LockedCoin>} locked_coins
 */
Unlock.prototype['locked_coins'] = undefined;

/**
 * @member {Array.<module:model/Coin>} frozen_coins
 */
Unlock.prototype['frozen_coins'] = undefined;

/**
 * @member {Array.<module:model/Coin>} coins
 */
Unlock.prototype['coins'] = undefined;

/**
 * @member {Number} height
 */
Unlock.prototype['height'] = undefined;






export default Unlock;

