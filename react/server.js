//******************************************
// 热替换要点
// 1. config.entry.app.unshift('webpack-dev-server/client?http://172.16.156.87:8080');
// 2. config.output.publicPath = 'http://172.16.156.87:8080/';
// 3. config.devServer.hot = true;
// 4. config.devServer.publicPath = '/';
//******************************************

// node server.js 
//      --hot           使用热替换
//      --deploy        发布到测试机
//      --uglify        压缩资源
//      --remote        远程测试环境
// 当使用了 --remote 时，会忽略 --hot 和 --deploy
// 
// 例子：
// node server.js --remote  
//   使用远程测试环境，所有静态资源都要发布，不能使用热替换功能
//   
// node server.js --hot
//   使用本地环境，并开启热替换
//   
// node server.js --hot --deploy 
//   使用本地环境，并将 html 模板发布到远程测试环境。
//   这样即可以同步本地和测试环境，并使用热替换功能。因为静态资源都是访问的本地环境的。
//   
// webpack-dev-server --config build/webpack.config.js --watch --deploy
    

var path = require('path');
var MemoryFS = require("memory-fs");
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var DeployPlugin = require('./build/deployPlugin');
var config = require('./build/webpack.config.js');
var utils = require('./build/utils');
var deployWithFtp = require('./build/deploy');

var port = 8080;
var host = utils.getIP();
var url = 'http://' + host + ':' + port;

// 本地环境静态资源 domain
var localPublicPath = url + '/';
// 测试环境静态资源 domain
var testPublicPath = 'http://dd.hrbbwx.com/';
//  测试机资源存放路径
var REMOTE_PUBLIC_PATH = '/data1/htdocs/dd.hrbbwx.com/public';

var args = process.argv;
var deploy = args.indexOf('--deploy') > -1;
var uglify = args.indexOf('--uglify') > -1;
var remote = args.indexOf('--remote') > -1;
var hot = args.indexOf('--hot') > -1 && !remote;

var mfs = new MemoryFS();

// 开启热替换相关设置
if (hot === true) {
    config.output.publicPath = localPublicPath; 
    config.entry.app.unshift('webpack-dev-server/client?' + url); // 这里的 url 一定不要以 / 结尾
    config.entry.app.unshift('webpack/hot/only-dev-server');
    config.module.loaders[0].loaders.unshift('react-hot');
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
}

// 压缩
if (uglify === true) {
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

// 是否发布到测试环境
if (!remote && deploy === true) {
    config.plugins.push(new DeployPlugin([{
        reg: /html$/,
        to: '/data1/htdocs/dd.hrbbwx.com/app/views/Ddtalk/Index.phtml'
    }]));
}

// 远程测试环境
if (remote === true) {
    config.output.publicPath = testPublicPath;
    // 记录每次发布过的文件，避免重复发送相同的文件
    var tmp = [];
    var compiler = webpack(config);
    compiler.outputFileSystem = mfs;
    compiler.watch({}, function(err, stats) {
        if (!err) {
            console.log(stats.toString({
                chunks: false,
                children: false,
                colors: true
            }));
            // 需要发布的资源
            var assets = [];
            stats.toJson().assets.forEach(function(file) {
                var fileName = file.name;
                var remotePath = '';
                var localPath = path.join(config.output.path, fileName);
                // 避免重复发送相同的文件
                if (tmp.indexOf(fileName) === -1) {
                    if (fileName === 'index.html') {
                        remotePath = path.join(REMOTE_PUBLIC_PATH, '../app/views/Ddtalk/Index.phtml');
                    } else {
                        tmp.push(fileName);
                        remotePath = path.join(REMOTE_PUBLIC_PATH, fileName);
                    }
                    assets.push({
                        localPath: localPath,
                        remotePath: remotePath,
                        source: mfs.readFileSync(localPath)
                    });
                }
            });
            // 发布
            deployWithFtp(assets);
        }
    });
} 
else {
    var compiler = webpack(config);
    // 使用本地服务
    var server = new WebpackDevServer(compiler, {
        host: host,
        hot: hot,
        stats: {
            chunks: false,
            children: false,
            color: true
        },
        proxy: {
            '/ddtalk/*': {
                target: 'http://localhost:3000'
            }
        },
        inline: true,
        publicPath: '/',
        compress: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
    });

    server.listen(port, host, function() {
        console.log(url, '\n');
    });
}


