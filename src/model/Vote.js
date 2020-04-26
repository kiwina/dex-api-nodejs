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
* The Vote model module.
* @module model/Vote
* @version 3.0
*/
export default class Vote {
    /**
    * Constructs a new <code>Vote</code>.
    * @alias module:model/Vote
    * @class
    * @param voter {String} 
    * @param proposalId {String} 
    * @param option {String} 
    */

    constructor(voter, proposalId, option) {
        
        
        this['voter'] = voter;
        this['proposal_id'] = proposalId;
        this['option'] = option;
        
    }

    /**
    * Constructs a <code>Vote</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Vote} obj Optional instance to populate.
    * @return {module:model/Vote} The populated <code>Vote</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Vote();
                        
            
            if (data.hasOwnProperty('voter')) {
                obj['voter'] = ApiClient.convertToType(data['voter'], 'String');
            }
            if (data.hasOwnProperty('proposal_id')) {
                obj['proposal_id'] = ApiClient.convertToType(data['proposal_id'], 'String');
            }
            if (data.hasOwnProperty('option')) {
                obj['option'] = ApiClient.convertToType(data['option'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} voter
    */
    voter = undefined;
    /**
    * @member {String} proposal_id
    */
    proposal_id = undefined;
    /**
    * @member {String} option
    */
    option = undefined;




}
