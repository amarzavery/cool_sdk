'use strict';

var util = require('util');

var models = require('./index');

/**
 * @class
 * Initializes a new instance of the StorageAccountCheckNameAvailabilityParameters class.
 * @constructor
 */
function StorageAccountCheckNameAvailabilityParameters(parameters) {
  if (parameters) {
    if (parameters['name'] !== null && parameters['name'] !== undefined) {
      this.name = parameters['name'];
    }

    if (parameters['type'] !== null && parameters['type'] !== undefined) {
      this.type = parameters['type'];
    }
  }
}

/**
 * Validate the payload against the StorageAccountCheckNameAvailabilityParameters schema
 *
 * @param {JSON} payload
 *
 */
StorageAccountCheckNameAvailabilityParameters.prototype.serialize = function () {
  var payload = {};
  if (this.name !== null && this.name !== undefined && typeof this.name.valueOf() !== 'string') {
    throw new Error('this.name must be of type string.');
  } else {
    payload.name = this.name;
  }

  if (this.type !== null && this.type !== undefined && typeof this.type.valueOf() !== 'string') {
    throw new Error('this.type must be of type string.');
  } else {
    payload.type = this.type
  }

  return payload;
};

/**
 * Deserialize the instance to StorageAccountCheckNameAvailabilityParameters schema
 *
 * @param {JSON} instance
 *
 */
StorageAccountCheckNameAvailabilityParameters.prototype.deserialize = function (instance) {
  if (instance.name !== null && instance.name !== undefined) {
    this.name = instance.name;
  }

  if (instance.type !== null && instance.type !== undefined) {
    this.type = instance.type;
  }
};

module.exports = StorageAccountCheckNameAvailabilityParameters;
