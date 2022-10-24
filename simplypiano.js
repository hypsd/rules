/*
 *
 *
脚本功能：拦截100解锁超级会员
软件版本：3.0.2【最高支持版本】
下载地址：http://t.cn/A6MLFAJf
脚本作者：Hausd0rff
更新时间：2022-02-15
电报频道：https://t.me/yqc_123
问题反馈：https://t.me/yqc_777
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************

[rewrite_local]

^https?:\/\/asla\.joytunes\.com\/443\/server\/asla\/accounts\/* url script-response-body https://raw.githubusercontent.com/hypsd/rules/main/simplypiano.js
[mitm] 

hostname = *.joytunes.*
*
*
*/


var body=$response.body;
body=body.replace(/membershipInfo":\{[^}]+\}/g,'membershipInfo":{"familyIapID":"com.joytunes.asla.subscriptiononeyear_trial_family","membershipTier":"premium_home","planDuration":"oneyear","membershipType":"SPONLY","daysRemaining":737,"autoRenewable":1,"dateStarted":"2020-02-23","isTrialPeriod":1,"currentIapID":"com.joytunes.asla.subscriptiononeyear_trial_individual","dateExpire":"2099-03-01","membershipDescription":"高级会员","isAutoRenew":null}');
$done(body);
