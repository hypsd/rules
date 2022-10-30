/******************************
⚠️如果放远程，请把piano.js替换成运程链接⚠️
  🧚🏻‍♂️作者：🍡魔法师、木木🍡
  wx交流群：1077223830
🫧脚本名称:Simply Piano 快速学习钢琴 解锁限制 A+
🫧建议配合working copy一起食用
✈️working copy下载地址<a href='https://apps.apple.com/app/id896694807' target='_blank'>https://apps.apple.com/app/id896694807</a>✈️
*******************************

[rewrite_local]
^https?:\/\/asla\.joytunes\.com\/server\/asla\/accounts\/**? url script-response-body https://raw.githubusercontent.com/hypsd/rules/main/simplypiano.js


[mitm]
hostname = asla.joytunes.com

*******************************/
var body=$response.body;
body = body.replace(/membershipInfo\":\{[^}]+\}/g,'membershipInfo":{"familyIapID":"com.joytunes.asla.subscriptiononeyear_trial_family","membershipTier":"premium_home","planDuration":"oneyear","membershipType":"SPONLY","daysRemaining":737,"autoRenewable":1,"dateStarted":"2020-02-23","isTrialPeriod":1,"currentIapID":"com.joytunes.asla.subscriptiononeyear_trial_individual","dateExpire":"2099-03-01","membershipDescription":"高级会员","isAutoRenew":null}');
$done(body);
