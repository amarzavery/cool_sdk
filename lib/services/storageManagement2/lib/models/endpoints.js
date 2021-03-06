'use strict';

var util = require('util');

var models = require('./index');

/**
 * @class
 * Initializes a new instance of the Endpoints class.
 * @constructor
 */
function Endpoints(parameters) {
  if (parameters !== null && parameters !== undefined) {
    if (parameters['blob'] !== null && parameters['blob'] !== undefined) {
      this.blob = parameters['blob'];
    }
    if (parameters['queue'] !== null && parameters['queue'] !== undefined) {
      this.queue = parameters['queue'];
    }
    if (parameters['table'] !== null && parameters['table'] !== undefined) {
      this.table = parameters['table'];
    }
  }
}

/**
 * Validates and serilaizes the payload against the Endpoints schema
 *
 * @param {JSON} payload
 *
 */
Endpoints.prototype.serialize = function () {
  var payload = {};
  if (this.blob !== null && this.blob !== undefined) {
    if (typeof this.blob.valueOf() !== 'string') {
      throw new Error('this.blob must be of type string.');
    }
    payload.blob = this.blob;
  }

  if (this.queue !== null && this.queue !== undefined) {
    if (typeof this.queue.valueOf() !== 'string') {
      throw new Error('this.queue must be of type string.');
    }
    payload.queue = this.queue;
  }

  if (this.table !== null && this.table !== undefined) {
    if (typeof this.table.valueOf() !== 'string') {
      throw new Error('this.table must be of type string.');
    }
    payload.table = this.table;
  }

  return payload;
};

/**
 * Deserialize the instance to Endpoints schema
 *
 * @param {JSON} instance
 *
 */
Endpoints.prototype.deserialize = function (instance) {
  if (instance !== null && instance !== undefined) {
    if (instance['blob'] !== null && instance['blob'] !== undefined) {
      this.blob = instance['blob'];
    }
    if (instance['queue'] !== null && instance['queue'] !== undefined) {
      this.queue = instance['queue'];
    }
    if (instance['table'] !== null && instance['table'] !== undefined) {
      this.table = instance['table'];
    }
  }
};

module.exports = Endpoints;
