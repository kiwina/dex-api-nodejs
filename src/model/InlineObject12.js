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
import BaseReq from './BaseReq';
import Coin from './Coin';

/**
 * The InlineObject12 model module.
 * @module model/InlineObject12
 * @version 3.0
 */
class InlineObject12 {
    /**
     * Constructs a new <code>InlineObject12</code>.
     * @alias module:model/InlineObject12
     * @param baseReq {module:model/BaseReq} 
     * @param title {String} 
     * @param description {String} 
     * @param proposer {String} bech32 encoded address
     * @param recipient {String} bech32 encoded address
     * @param deposit {Array.<module:model/Coin>} 
     * @param amount {Array.<module:model/Coin>} 
     */
    constructor(baseReq, title, description, proposer, recipient, deposit, amount) { 
        
        InlineObject12.initialize(this, baseReq, title, description, proposer, recipient, deposit, amount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, baseReq, title, description, proposer, recipient, deposit, amount) { 
        obj['base_req'] = baseReq;
        obj['title'] = title;
        obj['description'] = description;
        obj['proposer'] = proposer;
        obj['recipient'] = recipient;
        obj['deposit'] = deposit;
        obj['amount'] = amount;
    }

    /**
     * Constructs a <code>InlineObject12</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject12} obj Optional instance to populate.
     * @return {module:model/InlineObject12} The populated <code>InlineObject12</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject12();

            if (data.hasOwnProperty('base_req')) {
                obj['base_req'] = BaseReq.constructFromObject(data['base_req']);
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('proposer')) {
                obj['proposer'] = ApiClient.convertToType(data['proposer'], 'String');
            }
            if (data.hasOwnProperty('recipient')) {
                obj['recipient'] = ApiClient.convertToType(data['recipient'], 'String');
            }
            if (data.hasOwnProperty('deposit')) {
                obj['deposit'] = ApiClient.convertToType(data['deposit'], [Coin]);
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], [Coin]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/BaseReq} base_req
 */
InlineObject12.prototype['base_req'] = undefined;

/**
 * @member {String} title
 */
InlineObject12.prototype['title'] = undefined;

/**
 * @member {String} description
 */
InlineObject12.prototype['description'] = undefined;

/**
 * bech32 encoded address
 * @member {String} proposer
 */
InlineObject12.prototype['proposer'] = undefined;

/**
 * bech32 encoded address
 * @member {String} recipient
 */
InlineObject12.prototype['recipient'] = undefined;

/**
 * @member {Array.<module:model/Coin>} deposit
 */
InlineObject12.prototype['deposit'] = undefined;

/**
 * @member {Array.<module:model/Coin>} amount
 */
InlineObject12.prototype['amount'] = undefined;






export default InlineObject12;

