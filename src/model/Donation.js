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

/**
 * The Donation model module.
 * @module model/Donation
 * @version 3.0
 */
class Donation {
    /**
     * Constructs a new <code>Donation</code>.
     * @alias module:model/Donation
     */
    constructor() { 
        
        Donation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Donation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Donation} obj Optional instance to populate.
     * @return {module:model/Donation} The populated <code>Donation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Donation();

            if (data.hasOwnProperty('sender')) {
                obj['sender'] = ApiClient.convertToType(data['sender'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
        }
        return obj;
    }


}

/**
 * bech32 encoded address
 * @member {String} sender
 */
Donation.prototype['sender'] = undefined;

/**
 * @member {String} amount
 */
Donation.prototype['amount'] = undefined;






export default Donation;

