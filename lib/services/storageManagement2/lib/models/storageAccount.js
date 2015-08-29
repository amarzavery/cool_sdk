'use strict';

var util = require('util');
var msRestAzure = require('ms-rest-azure');
var Resource = msRestAzure.Resource;
var models = require('./index');

/**
 * @class
 * Initializes a new instance of the StorageAccount class.
 * @constructor
 */
function StorageAccount(parameters) {
  StorageAccount['super_'].call(this, parameters);
  if (parameters !== null && parameters !== undefined) {
    if (parameters['provisioningState'] !== null && parameters['provisioningState'] !== undefined) {
      this.provisioningState = parameters['provisioningState'];
    }
    if (parameters['accountType'] !== null && parameters['accountType'] !== undefined) {
      this.accountType = parameters['accountType'];
    }
    if (parameters['primaryLocation'] !== null && parameters['primaryLocation'] !== undefined) {
      this.primaryLocation = parameters['primaryLocation'];
    }
    if (parameters['statusOfPrimary'] !== null && parameters['statusOfPrimary'] !== undefined) {
      this.statusOfPrimary = parameters['statusOfPrimary'];
    }
    if (parameters['lastGeoFailoverTime'] !== null && parameters['lastGeoFailoverTime'] !== undefined) {
      this.lastGeoFailoverTime = parameters['lastGeoFailoverTime'];
    }
    if (parameters['secondaryLocation'] !== null && parameters['secondaryLocation'] !== undefined) {
      this.secondaryLocation = parameters['secondaryLocation'];
    }
    if (parameters['statusOfSecondary'] !== null && parameters['statusOfSecondary'] !== undefined) {
      this.statusOfSecondary = parameters['statusOfSecondary'];
    }
    if (parameters['creationTime'] !== null && parameters['creationTime'] !== undefined) {
      this.creationTime = parameters['creationTime'];
    }
    if (parameters['customDomain'] !== null && parameters['customDomain'] !== undefined) {
      this.customDomain = new models['CustomDomain'](parameters['customDomain']);
    }
    if (parameters['primaryEndpoints'] !== null && parameters['primaryEndpoints'] !== undefined) {
      this.primaryEndpoints = new models['Endpoints'](parameters['primaryEndpoints']);
    }
    if (parameters['secondaryEndpoints'] !== null && parameters['secondaryEndpoints'] !== undefined) {
      this.secondaryEndpoints = new models['Endpoints'](parameters['secondaryEndpoints']);
    }
  }
}

util.inherits(StorageAccount, Resource);

/**
 * Validates and serializes the payload against the StorageAccount schema
 *
 * @param {JSON} payload
 *
 */
StorageAccount.prototype.serialize = function () {
  var payload = StorageAccount['super_'].prototype.serialize.call(this);
  
  if (this.provisioningState !== null && this.provisioningState !== undefined) {
    var allowedValues = ['Creating', 'ResolvingDNS', 'Succeeded'];
    if (!allowedValues.some(function (item) { return item === this.provisioningState; })) {
      throw new Error(this.provisioningState + ' is not a valid value. The valid values are: ' + allowedValues);
    }
    payload.properties.provisioningState = this.provisioningState;
  }
  
  if (this.accountType !== null && this.accountType !== undefined) {
    var allowedValues1 = ['Standard_LRS', 'Standard_ZRS', 'Standard_GRS', 'Standard_RAGRS', 'Premium_LRS'];
    if (!allowedValues1.some(function (item) { return item === this.accountType; })) {
      throw new Error(this.accountType + ' is not a valid value. The valid values are: ' + allowedValues1);
    }
    payload.properties.accountType = this.accountType;
  }

  if (this.primaryLocation !== null && this.primaryLocation !== undefined) {
    if (typeof this.primaryLocation.valueOf() !== 'string') {
      throw new Error('this.primaryLocation must be of type string.');
    }
    payload.properties.primaryLocation = this.primaryLocation;
  }

  if (this.secondaryLocation !== null && this.secondaryLocation !== undefined) {
    if (typeof this.secondaryLocation.valueOf() !== 'string') {
      throw new Error('this.secondaryLocation must be of type string.');
    }
    payload.properties.secondaryLocation = this.secondaryLocation;
  }
  
  if (this.statusOfPrimary !== null && this.statusOfPrimary !== undefined) {
    var allowedValues2 = ['Available', 'Unavailable'];
    if (!allowedValues2.some(function (item) { return item === this.statusOfPrimary; })) {
      throw new Error(this.statusOfPrimary + ' is not a valid value. The valid values are: ' + allowedValues2);
    }
    payload.properties.statusOfPrimary = this.statusOfPrimary;
  }

  if (this.statusOfSecondary !== null && this.statusOfSecondary !== undefined) {
    var allowedValues3 = ['Available', 'Unavailable'];
    if (!allowedValues3.some(function (item) { return item === this.statusOfSecondary; })) {
      throw new Error(this.statusOfSecondary + ' is not a valid value. The valid values are: ' + allowedValues3);
    }
    payload.properties.statusOfSecondary = this.statusOfSecondary;
  }
  
  if (this.lastGeoFailoverTime !== null && this.lastGeoFailoverTime !== undefined) {
    if (!(this.lastGeoFailoverTime instanceof Date || (typeof this.lastGeoFailoverTime.valueOf() === 'string' && !isNaN(Date.parse(this.lastGeoFailoverTime))))) {
      throw new Error('this.lastGeoFailoverTime must be of type date.');
    }
    payload.properties.lastGeoFailoverTime = this.lastGeoFailoverTime.toISOString();
  }

  if (this.creationTime !== null && this.creationTime !== undefined) {
    if (!(this.creationTime instanceof Date || (typeof this.creationTime.valueOf() === 'string' && !isNaN(Date.parse(this.creationTime))))) {
      throw new Error('this.creationTime must be of type date.');
    }
    payload.properties.creationTime = this.creationTime.toISOString();
  }
  
  if (this.customDomain !== null && this.customDomain !== undefined) {
    payload.properties.customDomain = this.customDomain.serialize();
  }

  if (this.primaryEndpoints !== null && this.primaryEndpoints !== undefined) {
    payload.properties.primaryEndpoints = this.primaryEndpoints.serialize();
  }
  
  if (this.secondaryEndpoints !== null && this.secondaryEndpoints !== undefined) {
    payload.properties.secondaryEndpoints = this.secondaryEndpoints.serialize();
  }
  return payload;
};

/**
 * Deserialize the instance to StorageAccount schema
 *
 * @param {JSON} instance
 *
 */
StorageAccount.prototype.deserialize = function (instance) {
  StorageAccount['super_'].prototype.deserialize.call(this, instance);
  if (instance !== null && instance !== undefined) {
    if (instance['properties'] !== null && instance['properties'] !== undefined) {
      if (instance['properties']['provisioningState'] !== null && instance['properties'] !== undefined) {
        this.provisioningState = instance['properties']['provisioningState'];
      }
      if (instance['properties']['accountType'] !== null && instance['properties']['accountType'] !== undefined) {
        this.accountType = instance['properties']['accountType'];
      }
      if (instance['properties']['primaryLocation'] !== null && instance['properties']['primaryLocation'] !== undefined) {
        this.primaryLocation = instance['properties']['primaryLocation'];
      }
      if (instance['properties']['statusOfPrimary'] !== null && instance['properties']['statusOfPrimary'] !== undefined) {
        this.statusOfPrimary = instance['properties']['statusOfPrimary'];
      }
      if (instance['properties']['lastGeoFailoverTime'] !== null && instance['properties']['lastGeoFailoverTime'] !== undefined) {
        this.lastGeoFailoverTime = new Date(instance['properties']['lastGeoFailoverTime']);
      }
      if (instance['properties']['secondaryLocation'] !== null && instance['properties']['secondaryLocation'] !== undefined) {
        this.secondaryLocation = instance['properties']['secondaryLocation'];
      }
      if (instance['properties']['statusOfSecondary'] !== null && instance['properties']['statusOfSecondary'] !== undefined) {
        this.statusOfSecondary = instance['properties']['statusOfSecondary'];
      }
      if (instance['properties']['creationTime'] !== null && instance['properties']['creationTime'] !== undefined) {
        this.creationTime = new Date(instance['properties']['creationTime']);
      }
      if (instance['properties']['customDomain'] !== null && instance['properties']['customDomain'] !== undefined) {
        this.customDomain = new models['CustomDomain']().deserialize(instance['properties']['customDomain']);
      }
      if (instance['properties']['primaryEndpoints'] !== null && instance['properties']['primaryEndpoints'] !== undefined) {
        this.primaryEndpoints = new models['Endpoints']().deserialize(instance['properties']['primaryEndpoints']);
      }
      if (instance['properties']['secondaryEndpoints'] !== null && instance['properties']['secondaryEndpoints'] !== undefined) {
        this.secondaryEndpoints = new models['Endpoints']().deserialize(instance['properties']['secondaryEndpoints']);
      }
    }
  }
  return this;
};

module.exports = StorageAccount;
