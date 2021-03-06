// This file has been autogenerated.

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115?api-version=2014-04-01-preview')
  .reply(200, {"id":"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115","subscriptionId":"3ca49042-782a-4cc9-89b5-ee1b487fe115","displayName":"AzSdkCore1","state":"Enabled","subscriptionPolicies":{"locationPlacementId":"Public_2014-09-01","quotaId":"PayAsYouGo_2014-09-01"}}, { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-request-id': '51973cfd-fbaa-456b-9e50-c78d4ec4d695',
  'x-ms-correlation-request-id': '51973cfd-fbaa-456b-9e50-c78d4ec4d695',
  'x-ms-routing-request-id': 'WESTUS:20150804T212925Z:51973cfd-fbaa-456b-9e50-c78d4ec4d695',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 04 Aug 2015 21:29:24 GMT',
  connection: 'close',
  'content-length': '262' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115?api-version=2014-04-01-preview')
  .reply(200, {"id":"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115","subscriptionId":"3ca49042-782a-4cc9-89b5-ee1b487fe115","displayName":"AzSdkCore1","state":"Enabled","subscriptionPolicies":{"locationPlacementId":"Public_2014-09-01","quotaId":"PayAsYouGo_2014-09-01"}}, { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-request-id': '51973cfd-fbaa-456b-9e50-c78d4ec4d695',
  'x-ms-correlation-request-id': '51973cfd-fbaa-456b-9e50-c78d4ec4d695',
  'x-ms-routing-request-id': 'WESTUS:20150804T212925Z:51973cfd-fbaa-456b-9e50-c78d4ec4d695',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 04 Aug 2015 21:29:24 GMT',
  connection: 'close',
  'content-length': '262' });
 return result; }],
[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions?api-version=2014-04-01-preview')
  .reply(200, {"value":[{"id":"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115","subscriptionId":"3ca49042-782a-4cc9-89b5-ee1b487fe115","displayName":"AzSdkCore1","state":"Enabled","subscriptionPolicies":{"locationPlacementId":"Public_2014-09-01","quotaId":"PayAsYouGo_2014-09-01"}}]}, { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '274',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-tenant-reads': '14999',
  'x-ms-request-id': 'ec263265-bbfc-429b-a85a-24036365481d',
  'x-ms-correlation-request-id': 'ec263265-bbfc-429b-a85a-24036365481d',
  'x-ms-routing-request-id': 'WESTUS:20150804T212925Z:ec263265-bbfc-429b-a85a-24036365481d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 04 Aug 2015 21:29:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions?api-version=2014-04-01-preview')
  .reply(200, {"value":[{"id":"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115","subscriptionId":"3ca49042-782a-4cc9-89b5-ee1b487fe115","displayName":"AzSdkCore1","state":"Enabled","subscriptionPolicies":{"locationPlacementId":"Public_2014-09-01","quotaId":"PayAsYouGo_2014-09-01"}}]}, { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '274',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-tenant-reads': '14999',
  'x-ms-request-id': 'ec263265-bbfc-429b-a85a-24036365481d',
  'x-ms-correlation-request-id': 'ec263265-bbfc-429b-a85a-24036365481d',
  'x-ms-routing-request-id': 'WESTUS:20150804T212925Z:ec263265-bbfc-429b-a85a-24036365481d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 04 Aug 2015 21:29:24 GMT',
  connection: 'close' });
 return result; }],
[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/tenants?api-version=2014-04-01-preview')
  .reply(200, {"value":[{"id":"/tenants/1449d5b7-8a83-47db-ae4c-9b03e888bad0","tenantId":"1449d5b7-8a83-47db-ae4c-9b03e888bad0"}]}, { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '116',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-tenant-reads': '14999',
  'x-ms-request-id': '13e4fa88-8a4e-4b53-90f4-e5e62979e664',
  'x-ms-correlation-request-id': '13e4fa88-8a4e-4b53-90f4-e5e62979e664',
  'x-ms-routing-request-id': 'WESTUS:20150804T212926Z:13e4fa88-8a4e-4b53-90f4-e5e62979e664',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 04 Aug 2015 21:29:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/tenants?api-version=2014-04-01-preview')
  .reply(200, {"value":[{"id":"/tenants/1449d5b7-8a83-47db-ae4c-9b03e888bad0","tenantId":"1449d5b7-8a83-47db-ae4c-9b03e888bad0"}]}, { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '116',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-tenant-reads': '14999',
  'x-ms-request-id': '13e4fa88-8a4e-4b53-90f4-e5e62979e664',
  'x-ms-correlation-request-id': '13e4fa88-8a4e-4b53-90f4-e5e62979e664',
  'x-ms-routing-request-id': 'WESTUS:20150804T212926Z:13e4fa88-8a4e-4b53-90f4-e5e62979e664',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 04 Aug 2015 21:29:25 GMT',
  connection: 'close' });
 return result; }]];