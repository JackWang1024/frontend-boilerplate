// 生成 API 配置文件

var fs = require('fs');
var path = require('path');
var utils = require('./utils');

// 本机内网 IP 
var IP = utils.getIP();
var args = process.argv.slice(2);
var type = args[0] || 'normal';
var dist = path.resolve(__dirname, '../src/base/api.js');

// 各个环境域名设置
var domains = {};
// 默认不加具体域名
domains.normal  = '/';
// 本地模拟接口域名
domains.local   = 'http://' + IP + ':3000';
// 测试环境域名
domains.test    = 'http://dd.hrbbwx.com';
// 线上环境域名
domains.online  = 'http://dd.hrbbwx.com';
// 接口前缀
var prefix = 'ddtalk';

// API 配置
var apis = {
    // 机构列表
    organizationList:   '/channel/organlist',
    // 机构信息
    organization:       '/channel/organinfo',
    // 计划列表
    planList:           '/channel/planlist',
    // 计划详情
    plan:               '/channel/planinfo',
    // 课程列表
    courseList:         '/channel/courselist',
    // 课程详情
    course:             '/channel/courseinfo',
    // 课程列表
    teacherList:        '/teacher/teacherlist',
    // 课程详情
    teacher:            '/teacher/teacherinfo',
    // 熊口令
    inviteCode:         '/teacher/teacherapplykey',
    // 全局搜索
    globalSearch:       '/advisor/search'
};

if (!domains[type]) {
    console.log('\nerror: unknown type ', '`'+type+'`', '\n');
    console.log('Please pass one of: ', Object.keys(domains).join(', '), '\n');
    process.exit(1);
}

var list = ['// API配置'];
var domain = domains[type];
for (var name in apis) {
    var url = join(domain, prefix, apis[name]);
    list.push(template(name, url));
}
fs.writeFileSync(dist, list.join('\n'));
console.log(list.join('\n'));

function join() {
    return [].slice.call(arguments, 0).map(function(item) {
        return '/' + item.replace(/^\/+|\/+$/g, '');
    }).join('').slice(1);
}

function template(name, url) {
    return "export const " + name + " = '" + url + "';";
}

