'use strict';

var util = require('util');

var models = require('./index');

/**
 * @class
 * Initializes a new instance of the CheckNameAvailabilityResult class.
 * @constructor
 */
function CheckNameAvailabilityResult(parameters) {
  if (parameters) {
    if (parameters['nameAvailable'] !== null && parameters['nameAvailable'] !== undefined) {
      this.nameAvailable = parameters['nameAvailable'];
    }
    
    if (parameters['reason'] !== null && parameters['reason'] !== undefined) {
      this.reason = parameters['reason'];
    }

    if (parameters['message'] !== null && parameters['message'] !== undefined) {
      this.message = parameters['message'];
    }
  }
}

/**
 * Validate the payload against the CheckNameAvailabilityResult schema
 *
 * @param {JSON} payload
 *
 */
CheckNameAvailabilityResult.prototype.serialize = function () {
  var payload = {};
  if (this.nameAvailable !== null && this.nameAvailable !== undefined && typeof this.nameAvailable !== 'boolean') {
    throw new Error('this.nameAvailable must be of type boolean.');
  } else {
    payload.nameAvailable = this.nameAvailable;
  }

  if (this.reason) {
    var allowedValues = [ 'AccountNameInvalid', 'AlreadyExists' ];
    if (!allowedValues.some( function(item) { return item === this.reason; })) {
      throw new Error('this.reason is not a valid value. The valid values are: ' + allowedValues);
    }
    payload.reason = this.reason;
  }

  if (this.message !== null && this.message !== undefined && typeof this.message.valueOf() !== 'string') {
    throw new Error('this.message must be of type string.');
  } else {
    payload.message = this.message;
  }
  return payload;
};

/**
 * Deserialize the instance to CheckNameAvailabilityResult schema
 *
 * @param {JSON} instance
 *
 */
CheckNameAvailabilityResult.prototype.deserialize = function (instance) {
  if (instance) {
    if (instance['nameAvailable'] !== null && instance['nameAvailable'] !== undefined) {
      this.nameAvailable = instance['nameAvailable'];
    }
    
    if (instance['reason'] !== null && instance['reason'] !== undefined) {
      this.reason = instance['reason'];
    }
    
    if (instance['message'] !== null && instance['message'] !== undefined) {
      this.message = instance['message'];
    }
  }
};

module.exports = CheckNameAvailabilityResult;
