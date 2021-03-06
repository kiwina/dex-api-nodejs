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
    instance = new DexApiNodejs.InlineObject34();
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

  describe('InlineObject34', function() {
    it('should create an instance of InlineObject34', function() {
      // uncomment below and update the code to test InlineObject34
      //var instane = new DexApiNodejs.InlineObject34();
      //expect(instance).to.be.a(DexApiNodejs.InlineObject34);
    });

    it('should have the property baseReq (base name: "base_req")', function() {
      // uncomment below and update the code to test the property baseReq
      //var instane = new DexApiNodejs.InlineObject34();
      //expect(instance).to.be();
    });

    it('should have the property stock (base name: "stock")', function() {
      // uncomment below and update the code to test the property stock
      //var instane = new DexApiNodejs.InlineObject34();
      //expect(instance).to.be();
    });

    it('should have the property money (base name: "money")', function() {
      // uncomment below and update the code to test the property money
      //var instane = new DexApiNodejs.InlineObject34();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instane = new DexApiNodejs.InlineObject34();
      //expect(instance).to.be();
    });

    it('should have the property isBuy (base name: "is_buy")', function() {
      // uncomment below and update the code to test the property isBuy
      //var instane = new DexApiNodejs.InlineObject34();
      //expect(instance).to.be();
    });

    it('should have the property moneyLimit (base name: "money_limit")', function() {
      // uncomment below and update the code to test the property moneyLimit
      //var instane = new DexApiNodejs.InlineObject34();
      //expect(instance).to.be();
    });

  });

}));
