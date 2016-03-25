# front-end-seed



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
package.json 					# 项目配置
READNE.md 						# 项目说明
```
