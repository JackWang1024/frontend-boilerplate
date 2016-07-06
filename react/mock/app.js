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

// 机构信息
app.all('/ddtalk/channel/organinfo', function(req, res) {
    res.send({"retcode":2000000,"msg":"\u6210\u529f","data":{"org":[],"branch":[]}});
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
    res.send({"retcode":2000000,"msg":"\u6210\u529f","data":[{"type": "loan","name": "王宇庭","phone": "15537160391","cardcode": "110221199107024010","loan_id": "889021","money": "23456.00","desc": "已撤销","org_name": "蓝鸥科技","loan_date": "0000-00-00"},{"code":"201507101010101053","inst_code":"201507070707071035","name":"\u7fe1\u7fe0\u6559\u80b2\uff08\u4e0a\u6d77\u5b8c\u7f8e\u6821\u533a\uff09","cn":"\u7fe1\u7fe0\u6559\u80b2\uff08\u4e0a\u6d77\u5b8c\u7f8e\u6821\u533a\uff09","office_addr":"\u4e0a\u6d77\u8679\u53e3\u4e1c\u6c5f\u6e7e\u8def188\u53f7B\u680b1\u697c","contact_name":"\u674e\u519b","contact_tel":"18910323253","ctime":"2016-06-04 15:08:04","type":"organ"},{"code":"201507101010101052","inst_code":"201507070707071035","name":"\u7fe1\u7fe0\u6559\u80b2\uff08\u4e0a\u6d77\u5b89\u5353\u6821\u533a\uff09","cn":"\u7fe1\u7fe0\u6559\u80b2\uff08\u4e0a\u6d77\u5353\u65b0\u6821\u533a\uff09","office_addr":"\u4e0a\u6d77\u8679\u53e3\u4e1c\u6c5f\u6e7e\u8def188\u53f7A3\u680b1\u697c","contact_name":"\u674e\u519b","contact_tel":"18910323253","ctime":"2016-06-04 15:08:04","type":"organ"},{"code":"201507101010101049","inst_code":"201507070707071033","name":"\u5317\u4eac\u5510\u57ce\u4fe1\u606f\u6280\u672f\u6709\u9650\u516c\u53f8","cn":"\u5317\u5927\u9752\u9e1f\u5510\u57ce\uff08\u6f58\u5bb6\u56ed\uff09","office_addr":"\u5317\u4eac\u5e02\u671d\u9633\u533a\u6f58\u5bb6\u56ed\u6865\u677e\u6986\u897f\u91cc43\u53f7","contact_name":"\u674e\u7ea2\u971e","contact_tel":"13716105475","ctime":"2016-06-04 15:08:04","type":"organ"},{"id":"23","name":"\u674e\u540d\u8000","cardcode":"222401199012090616","phone":"15201246949","rel_branch_code":"201508101010101001","level":"1","type":"teacher","org_name":"\u84dd\u9e25\uff08\u897f\u5b89\uff09"}]});
});

// 贷款信息搜索
app.all('/ddtalk/loan/searchloan', function(req, res) {
    res.send({"retcode":2000000,"msg":"\u6210\u529f","data":[{"userinfo":{"id":"3","name":"\u5e38\u5929\u6021","phone":"11111111111","cardcode":"34082619930303333","email":"guangda.liu@beebank.com","qq":"1339105177","bank_name":"\u5de5\u5546\u94f6\u884c","bank_account":"\u5e38\u5929\u6021","bank_card":"6212260200068936877","eduname":"\u5927\u4e13","school_unit":"\u5317\u4eac\u4fe1\u606f\u6280\u672f\u804c\u4e1a\u5b66\u9662","school_major":"\u4fe1\u606f\u5de5\u7a0b","school_time":"2009-07-28","school_graduation_time":"0000-00-00"},"loaninfo":[{"loan_id":"16895","money":"15800.00","auditstate":"500","auditstate_cn":"\u5df2\u653e\u6b3e","loan_date":"0000-00-00","org_inst_cn":"\u534e\u6e05\u8fdc\u89c1","org_inst_code":"201507070707071034","org_branch_cn":"\u673a\u6784\u4e00\u6b21\u6027\u4ee3\u507fhy3","org_branch_code":"201507101010101095"},{"loan_id":"16854","money":"15800.00","auditstate":"500","auditstate_cn":"\u5df2\u653e\u6b3e","loan_date":"0000-00-00","org_inst_cn":"\u534e\u6e05\u8fdc\u89c1","org_inst_code":"201507070707071034","org_branch_cn":"\u673a\u6784\u4e00\u6b21\u6027\u4ee3\u507fhy3","org_branch_code":"201507101010101095"},{"loan_id":"16853","money":"15800.00","auditstate":"500","auditstate_cn":"\u5df2\u653e\u6b3e","loan_date":"0000-00-00","org_inst_cn":"\u534e\u6e05\u8fdc\u89c1","org_inst_code":"201507070707071034","org_branch_cn":"\u673a\u6784\u4e00\u6b21\u6027\u4ee3\u507fhy3","org_branch_code":"201507101010101095"},{"loan_id":"3653","money":"14800.00","auditstate":"50","auditstate_cn":"\u62d2\u7b7e","loan_date":"2015-11-08","org_inst_cn":null,"org_inst_code":"201510271904160001","org_branch_cn":null,"org_branch_code":"201508122301330005"}]},{"userinfo":{"id":"3","name":"\u5e38\u5929\u6021","phone":"11111111111","cardcode":"34082619930303333","email":"guangda.liu@beebank.com","qq":"1339105177","bank_name":"\u5de5\u5546\u94f6\u884c","bank_account":"\u5e38\u5929\u6021","bank_card":"6212260200068936877","eduname":"\u5927\u4e13","school_unit":"\u5317\u4eac\u4fe1\u606f\u6280\u672f\u804c\u4e1a\u5b66\u9662","school_major":"\u4fe1\u606f\u5de5\u7a0b","school_time":"2009-07-28","school_graduation_time":"0000-00-00"},"loaninfo":[{"loan_id":"16895","money":"15800.00","auditstate":"500","auditstate_cn":"\u5df2\u653e\u6b3e","loan_date":"0000-00-00","org_inst_cn":"\u534e\u6e05\u8fdc\u89c1","org_inst_code":"201507070707071034","org_branch_cn":"\u673a\u6784\u4e00\u6b21\u6027\u4ee3\u507fhy3","org_branch_code":"201507101010101095"},{"loan_id":"16854","money":"15800.00","auditstate":"500","auditstate_cn":"\u5df2\u653e\u6b3e","loan_date":"0000-00-00","org_inst_cn":"\u534e\u6e05\u8fdc\u89c1","org_inst_code":"201507070707071034","org_branch_cn":"\u673a\u6784\u4e00\u6b21\u6027\u4ee3\u507fhy3","org_branch_code":"201507101010101095"},{"loan_id":"16853","money":"15800.00","auditstate":"500","auditstate_cn":"\u5df2\u653e\u6b3e","loan_date":"0000-00-00","org_inst_cn":"\u534e\u6e05\u8fdc\u89c1","org_inst_code":"201507070707071034","org_branch_cn":"\u673a\u6784\u4e00\u6b21\u6027\u4ee3\u507fhy3","org_branch_code":"201507101010101095"},{"loan_id":"3653","money":"14800.00","auditstate":"50","auditstate_cn":"\u62d2\u7b7e","loan_date":"2015-11-08","org_inst_cn":null,"org_inst_code":"201510271904160001","org_branch_cn":null,"org_branch_code":"201508122301330005"}]}]});
});

// 贷款订单详情
app.all('/ddtalk/loan/loandetail', function(req, res) {
    res.send({"retcode":2000000,"msg":"\u6210\u529f","data":{"userinfo":{"name":"\u738b\u4e8c\u5c0f","cardcode":"340826199909099090","phone":"13581928491","sex":"\u7537","age":22,"email":"313131311@qq.com","qq":"313131311","address":"\u516b\u91cc\u5e84","eduname":"\u7855\u58eb\u53ca\u4ee5\u4e0a","schoolenrollname":"\u666e\u901a","school_unit":"\u5317\u4eac\u4ea4\u901a\u5927\u5b66","school_major":"\u8ba1\u7b97\u673a","school_time":"2011-09-01","school_graduation_time":"2015-07-01"},"loaninfo":{"loan_id":"888999","loancode":"JKX201604050003","auditstate":"500","aduitstatename":"\u5df2\u653e\u6b3e","status":1,"money":"18000","loan_date":"2016-01-05","is_free_cn":"\u662f","org_inst_code":"201606031418180005","org_branch_code":"201606031418180001","org_inst_name":"\u8d37\u8d37\u718a","org_inst_cn":"\u8d37\u8d37\u718a","org_branch_name":"\u8d37\u8d37\u718a\uff08\u5317\u4eac\uff09","org_branch_cn":"\u8d37\u8d37\u718a\uff08\u5317\u4eac\uff09","iscontract_name":"\u5408\u540c1","product_prototype_name":"\u5148\u606f\u540e\u672c","inst_behalf_way_name":"\u4e00\u6b21\u6027\u57ab\u4ed8","organ_repayment_periods":4,"student_repayment_periods":8,"grace_period_repay_name":"\u673a\u6784\u4ee3\u8fd8","ctime":"2016-06-01 00:00:00","bank_loan":{"bank_card":"110061699018010016775","bank_name":"\u4ea4\u884c\u5317\u4eac\u897f\u4e09\u65d7\u652f\u884c","bank_account":"\u5317\u4eac\u534e\u6e05\u8fdc\u89c1\u79d1\u6280\u4fe1\u606f\u6709\u9650\u516c\u53f8"},"course_info":{"course_id":"10001","code":"201606031440330001","name":"PHP","amount":"15000","cycle":4},"plan_info":{"plan_id":"10001","code":"201606031440330001","name":"\u8d37\u8d37\u718a6+12","grace_periods":"4","ungrace_periods":8,"grace_rate":10,"ungrace_rate":10,"loan_rate":10},"loan_extend":{"graduate_bond":"10","graduate_bond_amount":"10000","settle_bond":"10","settle_bond_amount":"1000","graduate_bond_status_cn":"\u662f","settle_bond_status_cn":"\u662f"}},"history_loan":[{"loan_id":"888888","loancode":"JKX201604050002","auditstate":"500","aduitstatename":"\u5df2\u653e\u6b3e","status":1,"comments":"\u8d37\u6b3e\u7684\u72b6\u6001\u53d8\u66f4\u4e3a\u653e\u6b3e\u4e2d","audituser":"\u7ba1\u7406\u5458","ctime":"2015-01-01 10:00:00","utime":"2015-01-01 10:00:00"}],"risk_info":{"edu_risk_info":{"status":0,"reason":"\u5ba1\u6838\u5931\u8d25","person_status":1,"person_reason":"\u4e0d\u901a\u8fc7","type_name":"\u5b66\u4fe1\u7f51\u68c0\u6d4b","status_name":"\u672a\u901a\u8fc7","person_status_name":"\u901a\u8fc7","ext":{"school":"\u5317\u4eac\u5316\u5de5\u5927\u5b66","degree":"\u672c\u79d1","enroll_year":"2005","major":"\u6d4b\u63a7\u6280\u672f\u4e0e\u4eea\u5668","graduate_year":"2009","result":"\u6bd5\u4e1a","degree_type":"\u666e\u901a"}},"cert_risk_info":{"status":1,"reason":"\u5ba1\u6838\u5931\u8d25","person_status":1,"person_reason":"\u4e0d\u901a\u8fc7","type_name":"\u8eab\u4efd\u8bc1\u68c0\u6d4b","status_name":"\u901a\u8fc7","person_status_name":"\u901a\u8fc7"},"bank_risk_info":{"status":0,"reason":"\u5ba1\u6838\u5931\u8d25","person_status":1,"person_reason":"\u4e0d\u901a\u8fc7","type_name":"\u8eab\u4efd\u8bc1\u68c0\u6d4b","status_name":"\u672a\u901a\u8fc7","person_status_name":"\u901a\u8fc7"},"age_risk_info":{"status":0,"reason":"\u5ba1\u6838\u5931\u8d25","person_status":1,"person_reason":"\u4e0d\u901a\u8fc7","type_name":"\u8eab\u4efd\u8bc1\u68c0\u6d4b","status_name":"\u672a\u901a\u8fc7","person_status_name":"\u901a\u8fc7"},"area_risk_info":{"status":0,"reason":"\u5ba1\u6838\u5931\u8d25","person_status":1,"person_reason":"\u4e0d\u901a\u8fc7","type_name":"\u8eab\u4efd\u8bc1\u68c0\u6d4b","status_name":"\u672a\u901a\u8fc7","person_status_name":"\u901a\u8fc7"},"bank_code_risk_info":{"status":0,"reason":"\u5ba1\u6838\u5931\u8d25","person_status":1,"person_reason":"\u4e0d\u901a\u8fc7","type_name":"\u8eab\u4efd\u8bc1\u68c0\u6d4b","status_name":"\u672a\u901a\u8fc7","person_status_name":"\u901a\u8fc7"},"school_risk_info":{"status":0,"reason":"\u5ba1\u6838\u5931\u8d25","person_status":1,"person_reason":"\u4e0d\u901a\u8fc7","type_name":"\u8eab\u4efd\u8bc1\u68c0\u6d4b","status_name":"\u672a\u901a\u8fc7","person_status_name":"\u901a\u8fc7"},"black_risk_inf":{"status":0,"reason":"\u5ba1\u6838\u5931\u8d25","person_status":1,"person_reason":"\u4e0d\u901a\u8fc7","type_name":"\u8eab\u4efd\u8bc1\u68c0\u6d4b","status_name":"\u672a\u901a\u8fc7","person_status_name":"\u901a\u8fc7"}},"audit_log":[{"audituser":"\u7ba1\u7406\u5458","comments":"\u8d37\u6b3e\u7684\u72b6\u6001\u53d8\u66f4\u4e3a\u5df2\u653e\u6b3e","auditstatename":"\u5df2\u653e\u6b3e","ctime":"2016-04-05 11:47:01"}]}});
});

// 待录入的机构
app.all('/ddtalk/advisor/organlist', function(req, res) {
    res.send({"retcode":2000000,"msg":"\u6210\u529f","data":{"inst_list":[{"name":"changsho","office_addr":"ss","code":"201606160004"}]}});
});

// 待录入的分支机构列表
app.all('/ddtalk/advisor/organbranchlist', function(req, res) {
    res.send({"retcode":2000000,"msg":"\u6210\u529f","data":{"inst_info":{"name":"changsho111111","office_addr":"ss","code":"201606160004","advisor_id":"6"},"branch_list":[{"name":"changsho111","office_addr":"\u53d1\u9001","code":"201606160001","advisor_id":"6","readonly":0},{"name":"","office_addr":"","code":"201606210008","advisor_id":"2","readonly":1},{"name":"","office_addr":"","code":"201606210011","advisor_id":"2","readonly":1},{"name":"\u65b0\u589e\u673a\u6784","office_addr":"","code":"201606210012","advisor_id":"2","readonly":1},{"name":"\u65b0\u589e\u673a\u6784","office_addr":"","code":"201606210013","advisor_id":"2","readonly":1},{"name":"\u65b0\u589e\u673a\u6784","office_addr":"","code":"201606210014","advisor_id":"2","readonly":1},{"name":"\u65b0\u589e\u673a\u6784","office_addr":"","code":"201606210015","advisor_id":"2","readonly":1},{"name":"\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8","office_addr":"","code":"201606210040","advisor_id":"2","readonly":1},{"name":"\u65b0\u589e\u673a\u6784","office_addr":"","code":"201606210041","advisor_id":"2","readonly":1}]}});
});

// 待录入的主机构信息
app.all('/ddtalk/advisor/organinstinfo', function(req, res) {
    res.send({"retcode":2000000,"msg":"\u6210\u529f","data":{"id":"1","advisor_id":"2","code":"201606160004","name":"changsho","nick":"","cn":"sdfas","reg_addr":"bb","office_addr":"ss","teach_province":"130000","teach_city":"130100","teach_area":"130102","bank_account":"","bank_name":"asfda","bank_card":"","debit_account":"","debit_name":"","debit_card":"340232","is_branch":"1","is_entrust":"0","loan_type":"1","daily_bill_emails":"2232@qq.com","month_bill_emails":"","repay_bill_emails":"","confirm_bill_emails":"","contact_name":"dsfs","contact_tel":"18800123639","contact_email":"","contact_pos":"\u603b\u88c1\u529e","finance_name":"","finance_tel":"","finance_email":"","finance_pos":"","is_getphone":"0","remark":"","is_del":"0","creater":"","utime":"2016-06-17 16:27:34","ctime":"2016-06-16 21:02:09"}});
});

// 保存修改主机构信息
app.all('/ddtalk/advisor/organinstup', function(req, res) {
    res.send({"retcode":2000000,"msg":"\u4fee\u6539\u6210\u529f!"});
});

// 待录入的分支机构信息
app.all('/ddtalk/advisor/organbranchinfo', function(req, res) {
    res.send({"retcode":2000000,"msg":"\u6210\u529f","data":{"id":"1","advisor_id":"2","code":"201606160001","inst_code":"201606160004","name":"changsho","nick":"ss","cn":"chang","reg_addr":"aa","office_addr":"\u53d1\u9001","province_code":"130000","city_code":"130300","bank_account":"","bank_name":"","bank_card":"","debit_account":"","debit_name":"","debit_card":"","is_advance":"1","advance_way":"1","advance_periods":"0","bond_gradu_rate":"0.00","bond_settle_rate":"1.23","bond_risk_rate":"2.34","bond_rate":"3.57","is_bond":"1","is_service":"1","is_getphone":"0","map_coord":"","map_remark":"","daily_bill_emails":"","month_bill_emails":"2993@qq.com","repay_bill_emails":"","confirm_bill_emails":"","contact_name":"aaa","contact_tel":"","contact_email":"33@qq.com","contact_pos":"","finance_name":"","finance_tel":"","finance_email":"","finance_pos":"","is_del":"0","is_audit":"2","stop_audit":"1","remark":"","creater":"","utime":"2016-06-17 19:57:11","ctime":"2016-06-16 21:06:45"}});
});

// 保存修改分支机构信息
app.all('/ddtalk/advisor/organbranchup', function(req, res) {
    res.send({"retcode":2000000,"msg":"\u4fee\u6539\u6210\u529f!"});
});

// 新增分支机构
app.all('/ddtalk/advisor/organbranchadd', function(req, res) {
    res.send({"retcode":2000000,"msg":"\u6210\u529f","data":{"code":"201606210039","name":"\u65b0\u589e\u673a\u6784"}});
});

// 提交审核
app.all('/ddtalk/advisor/organaudit', function(req, res) {
    res.send({"retcode":2000000,"msg":"\u4fee\u6539\u6210\u529f!"});
});

// 垫付码
app.all('/ddtalk/advisor/applykey', function(req, res) {
    res.send({"retcode":2000000,"msg":"\u6210\u529f","data":"sdfsdfs"});
});

// // 机构信息
// app.all('/ddtalk/organinfo', function(req, res) {
// });

// // 机构信息
// app.all('/ddtalk/organinfo', function(req, res) {
// });


var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
































