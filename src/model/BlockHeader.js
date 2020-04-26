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
import Address from './Address';
import BigDecimal from './BigDecimal';
import BlockID from './BlockID';
import Hash from './Hash';

/**
* The BlockHeader model module.
* @module model/BlockHeader
* @version 3.0
*/
export default class BlockHeader {
    /**
    * Constructs a new <code>BlockHeader</code>.
    * @alias module:model/BlockHeader
    * @class
    * @param chainId {String} 
    * @param height {module:model/BigDecimal} 
    * @param time {String} 
    * @param numTxs {module:model/BigDecimal} 
    * @param lastBlockId {module:model/BlockID} 
    * @param totalTxs {module:model/BigDecimal} 
    * @param lastCommitHash {module:model/Hash} 
    * @param dataHash {module:model/Hash} 
    * @param validatorsHash {module:model/Hash} 
    * @param nextValidatorsHash {module:model/Hash} 
    * @param consensusHash {module:model/Hash} 
    * @param appHash {module:model/Hash} 
    * @param lastResultsHash {module:model/Hash} 
    * @param evidenceHash {module:model/Hash} 
    * @param proposerAddress {module:model/Address} 
    * @param version {Object} 
    */

    constructor(chainId, height, time, numTxs, lastBlockId, totalTxs, lastCommitHash, dataHash, validatorsHash, nextValidatorsHash, consensusHash, appHash, lastResultsHash, evidenceHash, proposerAddress, version) {
        
        
        this['chain_id'] = chainId;
        this['height'] = height;
        this['time'] = time;
        this['num_txs'] = numTxs;
        this['last_block_id'] = lastBlockId;
        this['total_txs'] = totalTxs;
        this['last_commit_hash'] = lastCommitHash;
        this['data_hash'] = dataHash;
        this['validators_hash'] = validatorsHash;
        this['next_validators_hash'] = nextValidatorsHash;
        this['consensus_hash'] = consensusHash;
        this['app_hash'] = appHash;
        this['last_results_hash'] = lastResultsHash;
        this['evidence_hash'] = evidenceHash;
        this['proposer_address'] = proposerAddress;
        this['version'] = version;
        
    }

    /**
    * Constructs a <code>BlockHeader</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/BlockHeader} obj Optional instance to populate.
    * @return {module:model/BlockHeader} The populated <code>BlockHeader</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BlockHeader();
                        
            
            if (data.hasOwnProperty('chain_id')) {
                obj['chain_id'] = ApiClient.convertToType(data['chain_id'], 'String');
            }
            if (data.hasOwnProperty('height')) {
                obj['height'] = ApiClient.convertToType(data['height'], BigDecimal);
            }
            if (data.hasOwnProperty('time')) {
                obj['time'] = ApiClient.convertToType(data['time'], 'String');
            }
            if (data.hasOwnProperty('num_txs')) {
                obj['num_txs'] = ApiClient.convertToType(data['num_txs'], BigDecimal);
            }
            if (data.hasOwnProperty('last_block_id')) {
                obj['last_block_id'] = BlockID.constructFromObject(data['last_block_id']);
            }
            if (data.hasOwnProperty('total_txs')) {
                obj['total_txs'] = ApiClient.convertToType(data['total_txs'], BigDecimal);
            }
            if (data.hasOwnProperty('last_commit_hash')) {
                obj['last_commit_hash'] = Hash.constructFromObject(data['last_commit_hash']);
            }
            if (data.hasOwnProperty('data_hash')) {
                obj['data_hash'] = Hash.constructFromObject(data['data_hash']);
            }
            if (data.hasOwnProperty('validators_hash')) {
                obj['validators_hash'] = Hash.constructFromObject(data['validators_hash']);
            }
            if (data.hasOwnProperty('next_validators_hash')) {
                obj['next_validators_hash'] = Hash.constructFromObject(data['next_validators_hash']);
            }
            if (data.hasOwnProperty('consensus_hash')) {
                obj['consensus_hash'] = Hash.constructFromObject(data['consensus_hash']);
            }
            if (data.hasOwnProperty('app_hash')) {
                obj['app_hash'] = Hash.constructFromObject(data['app_hash']);
            }
            if (data.hasOwnProperty('last_results_hash')) {
                obj['last_results_hash'] = Hash.constructFromObject(data['last_results_hash']);
            }
            if (data.hasOwnProperty('evidence_hash')) {
                obj['evidence_hash'] = Hash.constructFromObject(data['evidence_hash']);
            }
            if (data.hasOwnProperty('proposer_address')) {
                obj['proposer_address'] = Address.constructFromObject(data['proposer_address']);
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], Object);
            }
        }
        return obj;
    }

    /**
    * @member {String} chain_id
    */
    chain_id = undefined;
    /**
    * @member {module:model/BigDecimal} height
    */
    height = undefined;
    /**
    * @member {String} time
    */
    time = undefined;
    /**
    * @member {module:model/BigDecimal} num_txs
    */
    num_txs = undefined;
    /**
    * @member {module:model/BlockID} last_block_id
    */
    last_block_id = undefined;
    /**
    * @member {module:model/BigDecimal} total_txs
    */
    total_txs = undefined;
    /**
    * @member {module:model/Hash} last_commit_hash
    */
    last_commit_hash = undefined;
    /**
    * @member {module:model/Hash} data_hash
    */
    data_hash = undefined;
    /**
    * @member {module:model/Hash} validators_hash
    */
    validators_hash = undefined;
    /**
    * @member {module:model/Hash} next_validators_hash
    */
    next_validators_hash = undefined;
    /**
    * @member {module:model/Hash} consensus_hash
    */
    consensus_hash = undefined;
    /**
    * @member {module:model/Hash} app_hash
    */
    app_hash = undefined;
    /**
    * @member {module:model/Hash} last_results_hash
    */
    last_results_hash = undefined;
    /**
    * @member {module:model/Hash} evidence_hash
    */
    evidence_hash = undefined;
    /**
    * @member {module:model/Address} proposer_address
    */
    proposer_address = undefined;
    /**
    * @member {Object} version
    */
    version = undefined;




}
