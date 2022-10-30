/******************************
⚠️如果放远程，请把zxsy.js替换成运程链接⚠️
  🧚🏻‍♂️作者：🍡魔法师、木木🍡
  wx交流群：1077223830
🫧脚本名称:中信书院 用知识抵抗平庸 解锁会员 A+
🫧建议配合working copy一起食用
✈️working copy下载地址<a href='https://apps.apple.com/app/id896694807' target='_blank'>https://apps.apple.com/app/id896694807</a>✈️
*******************************

[rewrite_local]
^https?:\/\/book\.yunpub\.cn\/api\/v4_1_0\/getColumnHome|https?:\/\/book\.yunpub\.cn\/api\/v4_1_0\/getGoodsHome|https?:\/\/book\.yunpub\.cn\/api\/v4_1_0\/getHomeMore|https?:\/\/book\.yunpub\.cn\/api\/v4_1_0\/getGoodsHome|https?:\/\/book\.yunpub\.cn\/api\/v4_1_0\/getGoodsHomeNew|https?:\/\/v\.yunpub\.cn\/api\/graphql*? url script-response-body https://raw.githubusercontent.com/hypsd/rules/main/zxsy.js


[mitm]
hostname = book.yunpub.cn,book.yunpub.cn,book.yunpub.cn,book.yunpub.cn,book.yunpub.cn,v.yunpub.cn

*******************************/
var body=$response.body;
body = body.replace(/timeInfo\":".*?"/g,'timeInfo":"vip权益,将于999天后过期"');
body = body.replace(/state\":0/g,'state":1');
body = body.replace(/packageRightEndTime\":\d+/g,'packageRightEndTime": 1800000000');
body = body.replace(/hasPackageRight\":\w+/g,'hasPackageRight": true');
$done(body);
