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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CetLiteForCoinExChain);
  }
}(this, function(expect, CetLiteForCoinExChain) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CetLiteForCoinExChain.CommentRef();
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

  describe('CommentRef', function() {
    it('should create an instance of CommentRef', function() {
      // uncomment below and update the code to test CommentRef
      //var instane = new CetLiteForCoinExChain.CommentRef();
      //expect(instance).to.be.a(CetLiteForCoinExChain.CommentRef);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new CetLiteForCoinExChain.CommentRef();
      //expect(instance).to.be();
    });

    it('should have the property rewardTarget (base name: "reward_target")', function() {
      // uncomment below and update the code to test the property rewardTarget
      //var instane = new CetLiteForCoinExChain.CommentRef();
      //expect(instance).to.be();
    });

    it('should have the property rewardToken (base name: "reward_token")', function() {
      // uncomment below and update the code to test the property rewardToken
      //var instane = new CetLiteForCoinExChain.CommentRef();
      //expect(instance).to.be();
    });

    it('should have the property rewardAmount (base name: "reward_amount")', function() {
      // uncomment below and update the code to test the property rewardAmount
      //var instane = new CetLiteForCoinExChain.CommentRef();
      //expect(instance).to.be();
    });

    it('should have the property attitudes (base name: "attitudes")', function() {
      // uncomment below and update the code to test the property attitudes
      //var instane = new CetLiteForCoinExChain.CommentRef();
      //expect(instance).to.be();
    });

  });

}));
