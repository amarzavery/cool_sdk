'use strict';

var util = require('util');

var models = require('./index');

/**
 * @class
 * Initializes a new instance of the StorageAccountListResult class.
 * @constructor
 */
function StorageAccountListResult(parameters) {
  if (parameters !== null && parameters !== undefined) {
    Array.prototype.push.apply(this, parameters);
  }
}

util.inherits(StorageAccountListResult, Array);

/**
 * Validate the payload against the StorageAccountListResult schema
 *
 * @param {JSON} payload
 *
 */
StorageAccountListResult.prototype.serialize = function () {
  var payload = {};
  if (!util.isArray(this)) {
    throw new Error('this must be of type Array');
  }
  for (var i = 0; i < this.length; i++) {
    if (this[i] !== null && this[i] !== undefined) {
      payload['value'] = new models['StorageAccount'].serialize(this[i]);
    }
  }
  return payload;
};

/**
 * Deserialize the instance to StorageAccountListResult schema
 *
 * @param {JSON} instance
 *
 */
StorageAccountListResult.prototype.deserialize = function (instance) {
  if (instance !== null && instance !== undefined) {
    if (instance.value !== null && instance.value !== undefined) {
      var deserializedArray = [];
      instance.value.forEach(function(element) {
        if (element !== null && element !== undefined) {
          element = new models['StorageAccount']().deserialize(element);
        }
        deserializedArray.push(element);
      });
      Array.prototype.push.apply(this, deserializedArray);
    }
  }
  //return this;
};

module.exports = StorageAccountListResult;
