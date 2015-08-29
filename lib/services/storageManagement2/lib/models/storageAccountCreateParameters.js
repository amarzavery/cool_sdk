'use strict';

var util = require('util');
var msRestAzure = require('ms-rest-azure');
var Resource = msRestAzure.Resource;
var models = require('./index');

/**
 * @class
 * Initializes a new instance of the StorageAccountCreateParameters class.
 * @constructor
 */
function StorageAccountCreateParameters(parameters) {
  StorageAccountCreateParameters['super_'].call(this, parameters);
  if (parameters['accountType']) {
    this.accountType = parameters['accountType'];
  }
}

util.inherits(StorageAccountCreateParameters, Resource);

/**
 * Validate the payload against the StorageAccountCreateParameters schema
 *
 * @param {JSON} payload
 *
 */
StorageAccountCreateParameters.prototype.serialize = function () {
  var payload = StorageAccountCreateParameters['super_'].prototype.serialize.call(this);
  if (this.accountType) {
    var allowedValues = ['Standard_LRS', 'Standard_ZRS', 'Standard_GRS', 'Standard_RAGRS', 'Premium_LRS'];
    var self = this;
    if (!allowedValues.some(function (item) { return item === self.accountType; })) {
      throw new Error('this.accountType'+ ' is not a valid value. The valid values are: ' + allowedValues);
    }
    payload.properties = {};
    payload.properties.accountType = this.accountType;
  }
  return payload;
};

/**
 * Deserialize the instance to StorageAccountCreateParameters schema
 *
 * @param {JSON} instance
 *
 */
StorageAccountCreateParameters.prototype.deserialize = function (instance) {
  StorageAccountCreateParameters['super_'].prototype.deserialize.call(this, instance);
  if (instance !== null && instance !== undefined) {
    if (instance['properties'] !== null && instance['properties'] !== undefined) {
      if (instance['properties']['accountType'] !== null && instance['properties']['accountType'] !== undefined) {
        this.accountType = instance['properties']['accountType'];
      }
    }
  }
  return instance;
};

module.exports = StorageAccountCreateParameters;
