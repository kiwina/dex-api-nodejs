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
    instance = new CetLiteForCoinExChain.Deposit();
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

  describe('Deposit', function() {
    it('should create an instance of Deposit', function() {
      // uncomment below and update the code to test Deposit
      //var instane = new CetLiteForCoinExChain.Deposit();
      //expect(instance).to.be.a(CetLiteForCoinExChain.Deposit);
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instane = new CetLiteForCoinExChain.Deposit();
      //expect(instance).to.be();
    });

    it('should have the property proposalId (base name: "proposal_id")', function() {
      // uncomment below and update the code to test the property proposalId
      //var instane = new CetLiteForCoinExChain.Deposit();
      //expect(instance).to.be();
    });

    it('should have the property depositor (base name: "depositor")', function() {
      // uncomment below and update the code to test the property depositor
      //var instane = new CetLiteForCoinExChain.Deposit();
      //expect(instance).to.be();
    });

  });

}));
