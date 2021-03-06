// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = '3ca49042-782a-4cc9-89b5-ee1b487fe115';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourcegroups/testg102?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/testg102\",\"name\":\"testg102\",\"location\":\"westus\",\"tags\":{\"tag1\":\"val1\",\"tag2\":\"val2\"},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '206',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-request-id': '15e59447-2ae0-4999-83bd-868c1bdd6f34',
  'x-ms-correlation-request-id': '15e59447-2ae0-4999-83bd-868c1bdd6f34',
  'x-ms-routing-request-id': 'WESTUS:20150819T002502Z:15e59447-2ae0-4999-83bd-868c1bdd6f34',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 19 Aug 2015 00:25:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourcegroups/testg102?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/testg102\",\"name\":\"testg102\",\"location\":\"westus\",\"tags\":{\"tag1\":\"val1\",\"tag2\":\"val2\"},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '206',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-request-id': '15e59447-2ae0-4999-83bd-868c1bdd6f34',
  'x-ms-correlation-request-id': '15e59447-2ae0-4999-83bd-868c1bdd6f34',
  'x-ms-routing-request-id': 'WESTUS:20150819T002502Z:15e59447-2ae0-4999-83bd-868c1bdd6f34',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 19 Aug 2015 00:25:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourcegroups/testg102?api-version=2014-04-01-preview')
  .reply(200, "{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/testg102\",\"name\":\"testg102\",\"location\":\"westus\",\"tags\":{\"tag1\":\"val1\",\"tag2\":\"val2\"},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': '581f1985-652d-45d3-a24d-4e8d328ab63c',
  'x-ms-correlation-request-id': '581f1985-652d-45d3-a24d-4e8d328ab63c',
  'x-ms-routing-request-id': 'WESTUS:20150819T002502Z:581f1985-652d-45d3-a24d-4e8d328ab63c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 19 Aug 2015 00:25:02 GMT',
  connection: 'close',
  'content-length': '206' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourcegroups/testg102?api-version=2014-04-01-preview')
  .reply(200, "{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/testg102\",\"name\":\"testg102\",\"location\":\"westus\",\"tags\":{\"tag1\":\"val1\",\"tag2\":\"val2\"},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': '581f1985-652d-45d3-a24d-4e8d328ab63c',
  'x-ms-correlation-request-id': '581f1985-652d-45d3-a24d-4e8d328ab63c',
  'x-ms-routing-request-id': 'WESTUS:20150819T002502Z:581f1985-652d-45d3-a24d-4e8d328ab63c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 19 Aug 2015 00:25:02 GMT',
  connection: 'close',
  'content-length': '206' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourcegroups?api-version=2014-04-01-preview')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/Default-Storage-WestUS\",\"name\":\"Default-Storage-WestUS\",\"location\":\"westus\",\"properties\":{\"provisioningState\":\"Succeeded\"}},{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/nodeTestGroup9399\",\"name\":\"nodeTestGroup9399\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}},{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/testg101\",\"name\":\"testg101\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}},{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/testg102\",\"name\":\"testg102\",\"location\":\"westus\",\"tags\":{\"tag1\":\"val1\",\"tag2\":\"val2\"},\"properties\":{\"provisioningState\":\"Succeeded\"}},{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/testg303\",\"name\":\"testg303\",\"location\":\"westus\",\"tags\":{\"tag1\":\"val1\",\"tag2\":\"val2\"},\"properties\":{\"provisioningState\":\"Succeeded\"}}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': 'a6092c9d-d5d4-4341-8330-c8d4b8e60726',
  'x-ms-correlation-request-id': 'a6092c9d-d5d4-4341-8330-c8d4b8e60726',
  'x-ms-routing-request-id': 'WESTUS:20150819T002503Z:a6092c9d-d5d4-4341-8330-c8d4b8e60726',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 19 Aug 2015 00:25:02 GMT',
  connection: 'close',
  'content-length': '1001' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourcegroups?api-version=2014-04-01-preview')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/Default-Storage-WestUS\",\"name\":\"Default-Storage-WestUS\",\"location\":\"westus\",\"properties\":{\"provisioningState\":\"Succeeded\"}},{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/nodeTestGroup9399\",\"name\":\"nodeTestGroup9399\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}},{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/testg101\",\"name\":\"testg101\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}},{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/testg102\",\"name\":\"testg102\",\"location\":\"westus\",\"tags\":{\"tag1\":\"val1\",\"tag2\":\"val2\"},\"properties\":{\"provisioningState\":\"Succeeded\"}},{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/testg303\",\"name\":\"testg303\",\"location\":\"westus\",\"tags\":{\"tag1\":\"val1\",\"tag2\":\"val2\"},\"properties\":{\"provisioningState\":\"Succeeded\"}}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': 'a6092c9d-d5d4-4341-8330-c8d4b8e60726',
  'x-ms-correlation-request-id': 'a6092c9d-d5d4-4341-8330-c8d4b8e60726',
  'x-ms-routing-request-id': 'WESTUS:20150819T002503Z:a6092c9d-d5d4-4341-8330-c8d4b8e60726',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 19 Aug 2015 00:25:02 GMT',
  connection: 'close',
  'content-length': '1001' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourcegroups/testg102?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1URVNURzEwMi1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '8742ebe5-ff5c-4d51-82b4-bed651501275',
  'x-ms-correlation-request-id': '8742ebe5-ff5c-4d51-82b4-bed651501275',
  'x-ms-routing-request-id': 'WESTUS:20150819T002503Z:8742ebe5-ff5c-4d51-82b4-bed651501275',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 19 Aug 2015 00:25:03 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourcegroups/testg102?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1URVNURzEwMi1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '8742ebe5-ff5c-4d51-82b4-bed651501275',
  'x-ms-correlation-request-id': '8742ebe5-ff5c-4d51-82b4-bed651501275',
  'x-ms-routing-request-id': 'WESTUS:20150819T002503Z:8742ebe5-ff5c-4d51-82b4-bed651501275',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 19 Aug 2015 00:25:03 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1URVNURzEwMi1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1URVNURzEwMi1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': '0e3c0258-c3c9-4f0c-a37a-f2d45bd98ef3',
  'x-ms-correlation-request-id': '0e3c0258-c3c9-4f0c-a37a-f2d45bd98ef3',
  'x-ms-routing-request-id': 'WESTUS:20150819T002518Z:0e3c0258-c3c9-4f0c-a37a-f2d45bd98ef3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 19 Aug 2015 00:25:18 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1URVNURzEwMi1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1URVNURzEwMi1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': '0e3c0258-c3c9-4f0c-a37a-f2d45bd98ef3',
  'x-ms-correlation-request-id': '0e3c0258-c3c9-4f0c-a37a-f2d45bd98ef3',
  'x-ms-routing-request-id': 'WESTUS:20150819T002518Z:0e3c0258-c3c9-4f0c-a37a-f2d45bd98ef3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 19 Aug 2015 00:25:18 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1URVNURzEwMi1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-request-id': '48c1005f-3cff-44cc-8f12-572bcb4460ef',
  'x-ms-correlation-request-id': '48c1005f-3cff-44cc-8f12-572bcb4460ef',
  'x-ms-routing-request-id': 'WESTUS:20150819T002533Z:48c1005f-3cff-44cc-8f12-572bcb4460ef',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 19 Aug 2015 00:25:33 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1URVNURzEwMi1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-request-id': '48c1005f-3cff-44cc-8f12-572bcb4460ef',
  'x-ms-correlation-request-id': '48c1005f-3cff-44cc-8f12-572bcb4460ef',
  'x-ms-routing-request-id': 'WESTUS:20150819T002533Z:48c1005f-3cff-44cc-8f12-572bcb4460ef',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 19 Aug 2015 00:25:33 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; }]];