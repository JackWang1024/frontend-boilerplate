var express = require('express');
var app     = express();

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

// 机构列表
app.all('/ddtalk/channel/organlist', function(req, res) {
    res.send({"retcode":2000000,"msg":"成功","data":[{"code":"201507101010101050","inst_code":"201507070707071033","name":"北京唐城信息技术有限公司","office_addr":"北京市丰台区南三环中路自然美大厦4层","contact_name":"宋冬立","contact_tel":"13426077168"},{"code":"201507101010101072","inst_code":"201507070707071035","name":"翡翠教育（重庆校区）","office_addr":"重庆市沙坪坝区天陈路2号世源大厦A栋7楼","contact_name":"向京京","contact_tel":"18580346831"},{"code":"201508101010101001","inst_code":"201507070707071002","name":"蓝鸥科技有限公司","office_addr":"陕西省西安市高新区高新路与科技二路十字水晶城B2座7层","contact_name":"杨老师","contact_tel":"15202459436"},{"code":"201512021108360001","inst_code":"201507070707071005","name":"北京魔乐互动科技有限公司","office_addr":"北京市海淀区清河公交党校1号楼4楼","contact_name":"董鸣楠","contact_tel":"13621384455"}]});
});

// 机构信息
app.all('/ddtalk/channel/organinfo', function(req, res) {
    res.send({"retcode":2000000,"msg":"\u6210\u529f","data":{"org":{"id":"412","code":"201507070707071033","name":"\u5317\u4eac\u5510\u57ce\u4fe1\u606f\u6280\u672f\u6709\u9650\u516c\u53f8","nick":"\u5510\u57ce\u4fe1\u606f","cn":"\u5510\u57ce\u4fe1\u606f","reg_addr":"\u5317\u4eac\u5e02\u4e1c\u57ce\u533a\u4e1c\u82b1\u5e02\u5357\u91cc\u4e1c\u533a8\u53f7\u697c6\u5c422\u5355\u5143602-001\u5ba4","office_addr":"\u5317\u4eac\u5e02\u671d\u9633\u533a\u6f58\u5bb6\u56ed\u6865\u677e\u6986\u897f\u91cc43\u53f7\u697c","teach_province":"110000","teach_city":"110100","teach_area":"110105","bank_account":"\u5317\u4eac\u5510\u57ce\u4fe1\u606f\u6280\u672f\u6709\u9650\u516c\u53f8","bank_name":"\u4e2d\u56fd\u5de5\u5546\u94f6\u884c\u80a1\u4efd\u6709\u9650\u516c\u53f8\u5317\u4eac\u4e1c\u56db\u5357\u652f\u884c","bank_card":"0200001019067134356","debit_account":"","debit_name":"","debit_card":"","is_branch":"1","is_entrust":"0","loan_type":"2","daily_bill_emails":"","month_bill_emails":"","repay_bill_emails":"","confirm_bill_emails":"","contact_name":"\u5f20\u79cb\u7ea2","contact_tel":"18610368046","contact_email":"zhangqiuhong@tangcco.com","contact_pos":"\u6821\u533a\u7ecf\u7406","finance_name":"\u5f20\u79cb\u7ea2","finance_tel":"18610368046","finance_email":"sheng.liu@beebank.com","finance_pos":"\u6821\u533a\u7ecf\u7406","is_getphone":"0","remark":"","is_del":"0","creater":"","utime":"2016-06-07 23:53:11","ctime":"2016-06-07 23:53:11"},"branch":{"id":"130","code":"201507101010101050","inst_code":"201507070707071033","name":"\u5317\u4eac\u5510\u57ce\u4fe1\u606f\u6280\u672f\u6709\u9650\u516c\u53f8","nick":"","cn":"\u5317\u5927\u9752\u9e1f\u5510\u57ce\uff08\u6728\u6a28\u56ed\uff09","reg_addr":"","office_addr":"\u5317\u4eac\u5e02\u4e30\u53f0\u533a\u5357\u4e09\u73af\u4e2d\u8def\u81ea\u7136\u7f8e\u5927\u53a64\u5c42","province_code":"","city_code":"","bank_account":"\u5317\u4eac\u5510\u57ce\u4fe1\u606f\u6280\u672f\u6709\u9650\u516c\u53f8","bank_name":"\u4e2d\u56fd\u5de5\u5546\u94f6\u884c\u80a1\u4efd\u6709\u9650\u516c\u53f8\u5317\u4eac\u4e1c\u56db\u5357\u652f\u884c","bank_card":"0200001019067134356","debit_account":"","debit_name":"","debit_card":"","is_advance":"0","advance_way":"0","advance_periods":"0","bond_gradu_rate":"0.00","bond_settle_rate":"0.00","bond_risk_rate":"0.00","bond_rate":"0.00","is_bond":"0","is_service":"0","is_getphone":"0","map_coord":"","map_remark":"","daily_bill_emails":"","month_bill_emails":"","repay_bill_emails":"","confirm_bill_emails":"min.wang@beebank.com","contact_name":"\u5b8b\u51ac\u7acb","contact_tel":"13426077168","contact_email":"56744201@qq.com","contact_pos":"","finance_name":"","finance_tel":"","finance_email":"","finance_pos":"","is_del":"0","stop_audit":"0","remark":"","creater":"","utime":"2016-06-04 15:08:04","ctime":"2016-06-04 15:08:04"}}});
});


// 套餐列表
app.all('/ddtalk/channel/planlist', function(req, res) {
    res.send({"retcode":2000000,"msg":"\u6210\u529f","data":[{"name":"\u5317\u5927\u9752\u9e1f\u5510\u57ce\uff089+15\uff09","code":"201507070707071054","repay_cn":"\u524d\u4f4e\u540e\u9ad8","is_service_cn":"\u4ee5\u673a\u6784\u914d\u7f6e\u4e3a\u51c6","is_advance_cn":"\u4ee5\u5206\u652f\u673a\u6784\u4e3a\u51c6","grace_periods":"9","ungrace_periods":"16"},{"name":"\u5317\u5927\u9752\u9e1f\u5510\u57ce\uff088+12\uff09","code":"201507070707071053","repay_cn":"\u524d\u4f4e\u540e\u9ad8","is_service_cn":"\u4ee5\u673a\u6784\u914d\u7f6e\u4e3a\u51c6","is_advance_cn":"\u4ee5\u5206\u652f\u673a\u6784\u4e3a\u51c6","grace_periods":"8","ungrace_periods":"13"},{"name":"\u5317\u5927\u9752\u9e1f\u5510\u57ce\uff086+12\uff09","code":"201507070707071052","repay_cn":"\u524d\u4f4e\u540e\u9ad8","is_service_cn":"\u4ee5\u673a\u6784\u914d\u7f6e\u4e3a\u51c6","is_advance_cn":"\u4ee5\u5206\u652f\u673a\u6784\u4e3a\u51c6","grace_periods":"6","ungrace_periods":"14"}]});
});

// 套餐详情
app.all('/ddtalk/channel/planinfo', function(req, res) {
    res.send({"retcode":2000000,"msg":"\u6210\u529f","data":{"id":"136","code":"201507070707071054","inst_code":"201507070707071033","name":"\u5317\u5927\u9752\u9e1f\u5510\u57ce\uff089+15\uff09","is_service":"2","is_advance":"0","advance_way":"0","advance_periods":"0","repay_way":"1","grace_periods":"9","ungrace_periods":"16","grace_rate":"23.70","ungrace_rate":"16.38","loan_rate":"12.00","loan_amt":"0.00","is_del":"0","creater":"","utime":"2016-06-04 15:08:52","ctime":"2016-06-04 15:08:52","repay_cn":"\u524d\u4f4e\u540e\u9ad8","is_service_cn":"\u4ee5\u673a\u6784\u914d\u7f6e\u4e3a\u51c6","is_advance_cn":"\u4ee5\u5206\u652f\u673a\u6784\u4e3a\u51c6"}});
});


// 课程列表
app.all('/ddtalk/channel/courselist', function(req, res) {
    res.send({"retcode":2000000,"msg":"成功","data":[{"id":"8","code":"2015081106061003","inst_code":"201507070707071033","name":"学士后网络","cycle":"4","amount":"15800.00","remark":"","is_del":"0","creater":"","utime":"2016-06-04 15:08:26","ctime":"2016-06-04 15:08:26"},{"id":"16","code":"2015081006061003","inst_code":"201507070707071033","name":"学士后JAVA+安卓","cycle":"4","amount":"15800.00","remark":"","is_del":"0","creater":"","utime":"2016-06-04 15:08:26","ctime":"2016-06-04 15:08:26"},{"id":"52","code":"2015080306061005","inst_code":"201507070707071033","name":"网络营销+学士后JAVA","cycle":"4","amount":"15800.00","remark":"","is_del":"0","creater":"","utime":"2016-06-04 15:08:26","ctime":"2016-06-04 15:08:26"},{"id":"145","code":"2015060606061160","inst_code":"201507070707071033","name":"ACCP Y2+Android","cycle":"4","amount":"15800.00","remark":"","is_del":"0","creater":"","utime":"2016-06-04 15:08:26","ctime":"2016-06-04 15:08:26"},{"id":"194","code":"2015060606061111","inst_code":"201507070707071033","name":"网络营销师","cycle":"4","amount":"15800.00","remark":"","is_del":"0","creater":"","utime":"2016-06-04 15:08:27","ctime":"2016-06-04 15:08:27"},{"id":"195","code":"2015060606061110","inst_code":"201507070707071033","name":"软件工程师","cycle":"4","amount":"15800.00","remark":"","is_del":"0","creater":"","utime":"2016-06-04 15:08:27","ctime":"2016-06-04 15:08:27"},{"id":"196","code":"2015060606061109","inst_code":"201507070707071033","name":"JAVA","cycle":"4","amount":"15800.00","remark":"","is_del":"0","creater":"","utime":"2016-06-04 15:08:27","ctime":"2016-06-04 15:08:27"},{"id":"197","code":"2015060606061108","inst_code":"201507070707071033","name":"JAVA+ANDROID","cycle":"4","amount":"15800.00","remark":"","is_del":"0","creater":"","utime":"2016-06-04 15:08:27","ctime":"2016-06-04 15:08:27"},{"id":"198","code":"2015060606061107","inst_code":"201507070707071033","name":"安卓","cycle":"4","amount":"15800.00","remark":"","is_del":"0","creater":"","utime":"2016-06-04 15:08:27","ctime":"2016-06-04 15:08:27"},{"id":"199","code":"2015060606061106","inst_code":"201507070707071033","name":"BENET网络工程","cycle":"4","amount":"15800.00","remark":"","is_del":"0","creater":"","utime":"2016-06-04 15:08:27","ctime":"2016-06-04 15:08:27"},{"id":"200","code":"2015060606061105","inst_code":"201507070707071033","name":"ACCP7.0S1","cycle":"4","amount":"15800.00","remark":"","is_del":"0","creater":"","utime":"2016-06-04 15:08:27","ctime":"2016-06-04 15:08:27"},{"id":"201","code":"2015060606061104","inst_code":"201507070707071033","name":"学士后JAVA","cycle":"4","amount":"15800.00","remark":"","is_del":"0","creater":"","utime":"2016-06-04 15:08:27","ctime":"2016-06-04 15:08:27"},{"id":"202","code":"2015060606061103","inst_code":"201507070707071033","name":"网络营销","cycle":"4","amount":"15800.00","remark":"","is_del":"0","creater":"","utime":"2016-06-04 15:08:27","ctime":"2016-06-04 15:08:27"},{"id":"203","code":"2015060606061102","inst_code":"201507070707071033","name":"学士后安卓","cycle":"4","amount":"15800.00","remark":"","is_del":"0","creater":"","utime":"2016-06-04 15:08:27","ctime":"2016-06-04 15:08:27"},{"id":"204","code":"2015060606061101","inst_code":"201507070707071033","name":"ACCP7.0","cycle":"4","amount":"15800.00","remark":"","is_del":"0","creater":"","utime":"2016-06-04 15:08:27","ctime":"2016-06-04 15:08:27"}]});
});

// 课程详情
app.all('/ddtalk/channel/Courseinfo', function(req, res) {
    res.send({"retcode":2000000,"msg":"成功","data":{"id":"267","code":"2015060606061038","inst_code":"201507070707071021","name":"程序开发","cycle":"4","amount":"15800.00","remark":"","is_del":"0","creater":"","utime":"2016-06-04 15:08:27","ctime":"2016-06-04 15:08:27","inst_name":"北京汇众益智科技有限公司"}});
});

// 教师列表
app.all('/ddtalk/teacher/teacherlist', function(req, res) {
    res.send({"retcode":2000000,"msg":"\u6210\u529f","data":[{"id":"23","name":"\u674e\u540d\u8000","cardcode":"222401199012090616","phone":"15201246949","invite_code":"j6nh","status":"1","level":"1","rel_inst_code":"201507070707071002","rel_branch_code":"201508101010101001"},{"id":"14","name":"\u5f20\u7ef4\u4f73","cardcode":"11010319940106156X","phone":"18610927894","invite_code":"qr6b","status":"1","level":"0","rel_inst_code":"201507070707071002","rel_branch_code":"201508101010101001"}]});
});

// 教师信息
app.all('/ddtalk/teacher/teacherinfo', function(req, res) {
    res.send({"retcode":2000000,"msg":"\u6210\u529f","data":{"id":"23","name":"\u674e\u540d\u8000","cardcode":"222401199012090616","phone":"15201246949","mail":"5774477@qq.com","rel_inst_code":"201507070707071002","rel_branch_code":"201508101010101001","status":"1","invite_code":"j6nh","level":"1","ctime":"2016-05-24 13:57:39"}});
});

// 申请熊口令
app.all('/ddtalk/teacher/teacherapplykey', function(req, res) {
    res.send({"retcode":2000000,"msg":"成功","data":["sdfssds","12313","sdfsdfs"]});
});

// 全局搜索
app.all('/ddtalk/advisor/search', function(req, res) {
    res.send({"retcode":2000000,"msg":"\u6210\u529f","data":[{"code":"201507101010101053","inst_code":"201507070707071035","name":"\u7fe1\u7fe0\u6559\u80b2\uff08\u4e0a\u6d77\u5b8c\u7f8e\u6821\u533a\uff09","cn":"\u7fe1\u7fe0\u6559\u80b2\uff08\u4e0a\u6d77\u5b8c\u7f8e\u6821\u533a\uff09","office_addr":"\u4e0a\u6d77\u8679\u53e3\u4e1c\u6c5f\u6e7e\u8def188\u53f7B\u680b1\u697c","contact_name":"\u674e\u519b","contact_tel":"18910323253","ctime":"2016-06-04 15:08:04","type":"organ"},{"code":"201507101010101052","inst_code":"201507070707071035","name":"\u7fe1\u7fe0\u6559\u80b2\uff08\u4e0a\u6d77\u5b89\u5353\u6821\u533a\uff09","cn":"\u7fe1\u7fe0\u6559\u80b2\uff08\u4e0a\u6d77\u5353\u65b0\u6821\u533a\uff09","office_addr":"\u4e0a\u6d77\u8679\u53e3\u4e1c\u6c5f\u6e7e\u8def188\u53f7A3\u680b1\u697c","contact_name":"\u674e\u519b","contact_tel":"18910323253","ctime":"2016-06-04 15:08:04","type":"organ"},{"code":"201507101010101049","inst_code":"201507070707071033","name":"\u5317\u4eac\u5510\u57ce\u4fe1\u606f\u6280\u672f\u6709\u9650\u516c\u53f8","cn":"\u5317\u5927\u9752\u9e1f\u5510\u57ce\uff08\u6f58\u5bb6\u56ed\uff09","office_addr":"\u5317\u4eac\u5e02\u671d\u9633\u533a\u6f58\u5bb6\u56ed\u6865\u677e\u6986\u897f\u91cc43\u53f7","contact_name":"\u674e\u7ea2\u971e","contact_tel":"13716105475","ctime":"2016-06-04 15:08:04","type":"organ"},{"id":"23","name":"\u674e\u540d\u8000","cardcode":"222401199012090616","phone":"15201246949","rel_branch_code":"201508101010101001","level":"1","type":"teacher","org_name":"\u84dd\u9e25\uff08\u897f\u5b89\uff09"}]});
});


// // 机构信息
// app.all('/ddtalk/organinfo', function(req, res) {
// });


var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
































