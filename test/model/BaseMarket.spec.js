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
    instance = new DexApiNodejs.BaseMarket();
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

  describe('BaseMarket', function() {
    it('should create an instance of BaseMarket', function() {
      // uncomment below and update the code to test BaseMarket
      //var instane = new DexApiNodejs.BaseMarket();
      //expect(instance).to.be.a(DexApiNodejs.BaseMarket);
    });

    it('should have the property stock (base name: "stock")', function() {
      // uncomment below and update the code to test the property stock
      //var instane = new DexApiNodejs.BaseMarket();
      //expect(instance).to.be();
    });

    it('should have the property money (base name: "money")', function() {
      // uncomment below and update the code to test the property money
      //var instane = new DexApiNodejs.BaseMarket();
      //expect(instance).to.be();
    });

    it('should have the property pricePrecision (base name: "price_precision")', function() {
      // uncomment below and update the code to test the property pricePrecision
      //var instane = new DexApiNodejs.BaseMarket();
      //expect(instance).to.be();
    });

    it('should have the property orderPrecision (base name: "order_precision")', function() {
      // uncomment below and update the code to test the property orderPrecision
      //var instane = new DexApiNodejs.BaseMarket();
      //expect(instance).to.be();
    });

  });

}));
