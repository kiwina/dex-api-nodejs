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
    instance = new DexApiNodejs.Block();
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

  describe('Block', function() {
    it('should create an instance of Block', function() {
      // uncomment below and update the code to test Block
      //var instane = new DexApiNodejs.Block();
      //expect(instance).to.be.a(DexApiNodejs.Block);
    });

    it('should have the property header (base name: "header")', function() {
      // uncomment below and update the code to test the property header
      //var instane = new DexApiNodejs.Block();
      //expect(instance).to.be();
    });

    it('should have the property txs (base name: "txs")', function() {
      // uncomment below and update the code to test the property txs
      //var instane = new DexApiNodejs.Block();
      //expect(instance).to.be();
    });

    it('should have the property evidence (base name: "evidence")', function() {
      // uncomment below and update the code to test the property evidence
      //var instane = new DexApiNodejs.Block();
      //expect(instance).to.be();
    });

    it('should have the property lastCommit (base name: "last_commit")', function() {
      // uncomment below and update the code to test the property lastCommit
      //var instane = new DexApiNodejs.Block();
      //expect(instance).to.be();
    });

  });

}));
