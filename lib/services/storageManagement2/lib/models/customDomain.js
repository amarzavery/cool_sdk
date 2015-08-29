'use strict';

var util = require('util');

var models = require('./index');

/**
 * @class
 * Initializes a new instance of the CustomDomain class.
 * @constructor
 */
function CustomDomain(parameters) {
  if (parameters !== null && parameters !== undefined) {
    if (parameters['name'] !== null && parameters['name'] !== undefined) {
      this.name = parameters['name'];
    }

    if (parameters['useSubDomain'] !== null && parameters['useSubDomain'] !== undefined) {
      this.useSubDomain = parameters['useSubDomain'];
    }
  }
}

/**
 * Validates and serializes the payload against the CustomDomain schema
 *
 * @param {JSON} payload
 *
 */
CustomDomain.prototype.serialize = function () {
  var payload = {};
  if (this.name !== null && this.name !== undefined) {
    if (typeof this.name.valueOf() !== 'string') {
      throw new Error('this.name must be of type string.');
    }
    payload.name = this.name;
  }

  if (this.useSubDomain !== null && this.useSubDomain !== undefined) {
    if (typeof this.useSubDomain !== 'boolean') {
      throw new Error('this.useSubDomain must be of type boolean.');
    }
    payload.useSubDomain = this.useSubDomain;
  }
};

/**
 * Deserialize the instance to CustomDomain schema
 *
 * @param {JSON} instance
 *
 */
CustomDomain.prototype.deserialize = function (instance) {
  if (instance !== null && instance !== undefined) {
    if (instance['name'] !== null && instance['name'] !== undefined) {
      this.name = instance['name'];
    }

    if (instance['useSubDomain'] !== null && instance['useSubDomain'] !== undefined) {
      this.useSubDomain = instance['useSubDomain'];
    }
  }
};

module.exports = CustomDomain;
