

[rewrite_local]
^https?:\/\/api-production\.endel\.io\/v1\/user*? url https://raw.githubusercontent.com/hypsd/rules/main/endel.js

[mitm]
hostname = api-production.endel.io

*******************************/
var body=$response.body;
body = body.replace(/subscription_info\":\{[^\}]+\}/g,'subscription_info":{"type":"IOS","valid_until":1787191299.0716028}');
$done(body);
