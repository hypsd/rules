[mitm] 
hostname = *.joytunes.*

[rewrite_local]

^https:\/\/asla\.joytunes\.com\/443\/server\/asla\/accounts\/* $ url script-response-body 


var body=$response.body;
body=body.replace(/membershipInfo":\{[^}]+\}/g,'membershipInfo":{"familyIapID":"com.joytunes.asla.subscriptiononeyear_trial_family","membershipTier":"premium_home","planDuration":"oneyear","membershipType":"SPONLY","daysRemaining":737,"autoRenewable":1,"dateStarted":"2020-02-23","isTrialPeriod":1,"currentIapID":"com.joytunes.asla.subscriptiononeyear_trial_individual","dateExpire":"2099-03-01","membershipDescription":"高级会员","isAutoRenew":null}');
$done(body);
