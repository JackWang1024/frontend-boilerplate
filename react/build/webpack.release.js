// webpack
//      --config build/webpack.release.js
//      --watch         实时发布
//      --p             压缩 
//      --deploy=test   发布到测试环境，默认选项
//      --deploy=online 发布到生产环境

var config          = require('./webpack.config.js');
var DeployPlugin    = require('./deployPlugin');
//  测试机资源存放路径
var REMOTE_PUBLIC_PATH = require('./config.json').path;

// 测试环境静态资源 domain
var testPublicPath      = 'http://dd.hrbbwx.com/';
// 生产环境静态资源 domain
var onlinePublicPath    = 'http://dd.hrbbwx.com/';

var args = process.argv;
var online = args.indexOf('--deploy=online') > -1;

// 设置静态资源 domain
config.output.publicPath = online ? onlinePublicPath : testPublicPath; 

config.plugins.push(new DeployPlugin([
    {
        reg: /html$/,
        to: REMOTE_PUBLIC_PATH + '/app/views/Ddtalk/Index.phtml'
    },
    {
        reg: /(css|js)$/,
        to: REMOTE_PUBLIC_PATH + '/public'
    }
]));

module.exports = config;

