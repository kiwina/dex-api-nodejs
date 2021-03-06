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
import TallyResult from './TallyResult';
import TextProposalContent from './TextProposalContent';

/**
 * The TextProposal model module.
 * @module model/TextProposal
 * @version 3.0
 */
class TextProposal {
    /**
     * Constructs a new <code>TextProposal</code>.
     * @alias module:model/TextProposal
     * @param id {String} 
     * @param content {module:model/TextProposalContent} 
     * @param depositEndTime {String} 
     * @param proposalStatus {String} 
     * @param finalTallyResult {module:model/TallyResult} 
     * @param submitTime {String} 
     * @param totalDeposit {Array.<module:model/Coin>} 
     * @param votingStartTime {String} 
     * @param votingEndTime {String} 
     */
    constructor(id, content, depositEndTime, proposalStatus, finalTallyResult, submitTime, totalDeposit, votingStartTime, votingEndTime) { 
        
        TextProposal.initialize(this, id, content, depositEndTime, proposalStatus, finalTallyResult, submitTime, totalDeposit, votingStartTime, votingEndTime);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, content, depositEndTime, proposalStatus, finalTallyResult, submitTime, totalDeposit, votingStartTime, votingEndTime) { 
        obj['id'] = id;
        obj['content'] = content;
        obj['deposit_end_time'] = depositEndTime;
        obj['proposal_status'] = proposalStatus;
        obj['final_tally_result'] = finalTallyResult;
        obj['submit_time'] = submitTime;
        obj['total_deposit'] = totalDeposit;
        obj['voting_start_time'] = votingStartTime;
        obj['voting_end_time'] = votingEndTime;
    }

    /**
     * Constructs a <code>TextProposal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TextProposal} obj Optional instance to populate.
     * @return {module:model/TextProposal} The populated <code>TextProposal</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TextProposal();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = TextProposalContent.constructFromObject(data['content']);
            }
            if (data.hasOwnProperty('deposit_end_time')) {
                obj['deposit_end_time'] = ApiClient.convertToType(data['deposit_end_time'], 'String');
            }
            if (data.hasOwnProperty('proposal_status')) {
                obj['proposal_status'] = ApiClient.convertToType(data['proposal_status'], 'String');
            }
            if (data.hasOwnProperty('final_tally_result')) {
                obj['final_tally_result'] = TallyResult.constructFromObject(data['final_tally_result']);
            }
            if (data.hasOwnProperty('submit_time')) {
                obj['submit_time'] = ApiClient.convertToType(data['submit_time'], 'String');
            }
            if (data.hasOwnProperty('total_deposit')) {
                obj['total_deposit'] = ApiClient.convertToType(data['total_deposit'], [Coin]);
            }
            if (data.hasOwnProperty('voting_start_time')) {
                obj['voting_start_time'] = ApiClient.convertToType(data['voting_start_time'], 'String');
            }
            if (data.hasOwnProperty('voting_end_time')) {
                obj['voting_end_time'] = ApiClient.convertToType(data['voting_end_time'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
TextProposal.prototype['id'] = undefined;

/**
 * @member {module:model/TextProposalContent} content
 */
TextProposal.prototype['content'] = undefined;

/**
 * @member {String} deposit_end_time
 */
TextProposal.prototype['deposit_end_time'] = undefined;

/**
 * @member {String} proposal_status
 */
TextProposal.prototype['proposal_status'] = undefined;

/**
 * @member {module:model/TallyResult} final_tally_result
 */
TextProposal.prototype['final_tally_result'] = undefined;

/**
 * @member {String} submit_time
 */
TextProposal.prototype['submit_time'] = undefined;

/**
 * @member {Array.<module:model/Coin>} total_deposit
 */
TextProposal.prototype['total_deposit'] = undefined;

/**
 * @member {String} voting_start_time
 */
TextProposal.prototype['voting_start_time'] = undefined;

/**
 * @member {String} voting_end_time
 */
TextProposal.prototype['voting_end_time'] = undefined;






export default TextProposal;

