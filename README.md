# front-end-seed
总结适合自己的、舒适的前端项目结构。此项目结构并不是一成不变的，应该根据实际项目需求做出合理的变动。


## 项目结构

```js
src								# 项目源码
|--	Pages					    # 项目页面目录
|	|-- Home					# Home页面
|	|   |-- index.tpl			# 页面模板
|	|   |-- index.js 			# 页面逻辑
|	|   |-- index.less          # 页面样式
|	|   |-- img 				# 页面图片目录
|	|   |   |-- xx.png  		
|	|-- index.html				# 入口页
|	|-- app.js 					# 入口JS
|	Components					# 组件目录
|	|-- Loading
|	|   |-- index.js
|	|   |-- index.tpl
|	|   |-- index.less
|--	Lib							# 第三方开源库，不需要进行语法检查
|	|-- vue    					
|	|   |-- vue.js
|	Js 							# 公共JS目录，可直接引用，不需要模块化
|	|-- mod.js
|	|-- watch.js 				
|	Css 						# 公共CSS目录
|	|-- common.less
|	Img  						# 公共图片目录
|	|-- logo.png
|   Utils 						# 工具目录
server 							# 本地server
|-- app.js
mock 							# 模拟数据
|docs 							# 项目文档
package.json 					# 项目配置
READNE.md 						# 项目说明
```

* 除了`src/Js`中的js文件，其他的JS文件都需要被模块化
* 每个模块相关的css、img、js都放在一起，比较直观，删除模块时非常方便，直接删除目录就行


###### 项目构建

* 对文件进行MD5重命名，做强缓存
* 打包JS,CSS
* 压缩JS,CSS,HTML,PNG图片
* CssSprite图片合并
* 编译less,es6,jsx等资源
* 指定字符替换
* 指定资源域名
* 语法检查
* 按指定模块化规范自动包装define
* 自动引入依赖资源到相应HTML页面
* 实时编译和刷新浏览器
* 本地模拟服务
* 发布

* [使用FIS3完成以上功能](./docs/build-by-fis3.md)
* [使用Gulp完成以上功能](./docs/build-by-gulp.md)




