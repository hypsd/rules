/******************************
⚠️如果放远程，请把endel.js替换成运程链接⚠️
  🧚🏻‍♂️作者：🍡魔法师、木木🍡
  wx交流群：1077223830
🫧脚本名称:Endel 专业放松睡眠 解锁订阅 A+
🫧建议配合working copy一起食用
✈️working copy下载地址https://apps.apple.com/app/id896694807✈️
*******************************

[rewrite_local]
^https?:\/\/api-production\.endel\.io\/v1\/user*? url script-response-body https://github.com/hypsd/rules/blob/main/endel.js


[mitm]
hostname = api-production.endel.io

*******************************/
var body=$response.body;
body = body.replace(/subscription_info\":\{[^\}]+\}/g,'subscription_info":{"type":"IOS","valid_until":1787191299.0716028}');
$done(body);
