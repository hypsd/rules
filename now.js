/******************************
⚠️如果放远程，请把now.js替换成运程链接⚠️
  🧚🏻‍♂️作者：🍡魔法师、木木🍡
  wx交流群：1077223830
🫧脚本名称:Now冥想 A+
🫧建议配合working copy一起食用
✈️working copy下载地址https://apps.apple.com/app/id896694807✈️
*******************************

[rewrite_local]
^https?:\/\/nowapi\.navoinfo\.cn\/user|https?:\/\/nowapi\.navoinfo\.cn\/get_sections_list_*|https?:\/\/nowapi\.navoinfo\.cn\/my_vip*? url script-response-body https://raw.githubusercontent.com/hypsd/rules/main/now.js


[mitm]
hostname = nowapi.navoinfo.cn,nowapi.navoinfo.cn,nowapi.navoinfo.cn

*******************************/
var body=$response.body;
body = body.replace(/"vip_forever\":"false/g,'"vip_forever":"true');
body = body.replace(/free\":"false/g,'free":"true');
body = body.replace(/end_at\":""/g,'end_at":"2025-03-01 15:29:41"');
body = body.replace(/"vip_over_days\":\d/g,'"vip_over_days":999');
body = body.replace(/vip_over_time\":""/g,'vip_over_time":"2025-03-01 15:29:41"');
body = body.replace(/"vip_type\":""/g,'"vip_type":"forever"');
body = body.replace(/"vip_status_text\":"\w+"/g,'"vip_status_text":"永久会员"');
$done(body);
