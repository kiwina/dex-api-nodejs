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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.DexApiNodejs);
  }
}(this, function(expect, DexApiNodejs) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new DexApiNodejs.DistributionApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DistributionApi', function() {
    describe('donateToCommunityPool', function() {
      it('should call donateToCommunityPool successfully', function(done) {
        //uncomment below and update the code to test donateToCommunityPool
        //instance.donateToCommunityPool(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAllRewards', function() {
      it('should call getAllRewards successfully', function(done) {
        //uncomment below and update the code to test getAllRewards
        //instance.getAllRewards(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCommunityPool', function() {
      it('should call getCommunityPool successfully', function(done) {
        //uncomment below and update the code to test getCommunityPool
        //instance.getCommunityPool(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDistributionInfo', function() {
      it('should call getDistributionInfo successfully', function(done) {
        //uncomment below and update the code to test getDistributionInfo
        //instance.getDistributionInfo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDistributionParams', function() {
      it('should call getDistributionParams successfully', function(done) {
        //uncomment below and update the code to test getDistributionParams
        //instance.getDistributionParams(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOutstandingRewards', function() {
      it('should call getOutstandingRewards successfully', function(done) {
        //uncomment below and update the code to test getOutstandingRewards
        //instance.getOutstandingRewards(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRewardByValidator', function() {
      it('should call getRewardByValidator successfully', function(done) {
        //uncomment below and update the code to test getRewardByValidator
        //instance.getRewardByValidator(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getValidatorRewards', function() {
      it('should call getValidatorRewards successfully', function(done) {
        //uncomment below and update the code to test getValidatorRewards
        //instance.getValidatorRewards(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWithdrawAddress', function() {
      it('should call getWithdrawAddress successfully', function(done) {
        //uncomment below and update the code to test getWithdrawAddress
        //instance.getWithdrawAddress(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setWithdrawAddress', function() {
      it('should call setWithdrawAddress successfully', function(done) {
        //uncomment below and update the code to test setWithdrawAddress
        //instance.setWithdrawAddress(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('withdrawAllRewards', function() {
      it('should call withdrawAllRewards successfully', function(done) {
        //uncomment below and update the code to test withdrawAllRewards
        //instance.withdrawAllRewards(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('withdrawAllValidatorRewards', function() {
      it('should call withdrawAllValidatorRewards successfully', function(done) {
        //uncomment below and update the code to test withdrawAllValidatorRewards
        //instance.withdrawAllValidatorRewards(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('withdrawRewardsByValidator', function() {
      it('should call withdrawRewardsByValidator successfully', function(done) {
        //uncomment below and update the code to test withdrawRewardsByValidator
        //instance.withdrawRewardsByValidator(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
