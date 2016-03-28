webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(2);
	var Router = __webpack_require__(5);
	var router = new Router();
	var app = Vue.extend({});

	// require('../css/common.less');
	// require('../css/core.less');

	router.map({
		// 首页
		'/': __webpack_require__(20),
		'/wallet': __webpack_require__(31)
	});

	router.start(app, '#app');









/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 19 */,
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(21);

	var Vue = __webpack_require__(2);

	var component = Vue.extend({
		data: function() {
			return {
			};
		},
		template: __webpack_require__(29),
	});



	module.exports = {component: component};
















/***/ },
/* 21 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div id=\"page-finance\" v-cloak>\n\n\t<div class=\"plr30 pt20 pb40\">\n\n\t\t<div class=\"clearfix\">\n\t\t\t<a onClick=\"ga('send', 'event', 'button', 'click', 'zichanribao')\" class=\"assets-news card\">\n\t\t\t\t<h4 class=\"title\">资产日报</h4>\n\t\t\t\t<p class=\"text\">你的钱给了谁？</p>\n\t\t\t</a>\n\t\t\t<a v-on:click=\"canGo('invite')\" class=\"invite-friend card\">\n\t\t\t\t<h4 class=\"title\">邀请好友</h4>\n\t\t\t\t<p class=\"text\">佣金收益1%</p>\n\t\t\t</a>\n\t\t</div>\n\t\t<div class=\"product-detail-box card\">\n\t\t\t<div class=\"tac pt30 pb28\">\n\t\t\t\t<div class=\"dib vam\">\n\t\t\t\t\t<h3 class=\"period-title\">{{title}}</h3>\n\t\t\t\t\t<div class=\"mr80\">\n\t\t\t\t\t\t<span class=\"mr10\">已投{{rateSales * 100}}%</span>\n\t\t\t\t\t\t<div class=\"line-e3e3e3 dib\"><div class=\"line-ff6160\"></div></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"dib period-link\">详情</div>\n\t\t\t</div>\n\t\t\t<div class=\"invest-part invest-box tac\">\n\t\t\t\t<div class=\"border-top\">\n\t\t\t\t\t<div class=\"invest-rate\">{{rate}}<span class=\"fs156\">%</span></div>\n\t\t\t\t\t<div class=\"invest-tip\"></div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"invest-button-box\">\n\t\t\t\t\t<div class=\"invest-text dib\">\n\t\t\t\t\t\t<span class=\"pr20\">100元起投</span>\n\t\t\t\t\t\t<span class=\"center-text\">总金额{{quota}}</span>\n\t\t\t\t\t\t<span class=\"pl30\">{{total_invest_num}}人已投</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div v-on:click=\"canGo('/invest')\" class=\"invest-button tac dib\">立即投资</div>\n\t\t\t\t\t<div class=\"tac c-585858 pt28 pb28 dib\">本标提供全额本息担保 <a class=\"link\">详情</a></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<div class=\"card mt20\">\n\t\t\t<div class=\"tac\">\n\t\t\t\t<h4 class=\"pt40 fs12 c-585858\">钱隆来了已累计为投资者提供理财金额(元)</h4>\n\t\t\t\t<div class=\"pb32 pt26 fs36 c-d3a241\">{{totalSales}}</div>\n\t\t\t</div>\n\t\t\t<div class=\"goto-history\">\n\t\t\t\t<span>查看往期</span>\n\t\t\t</div>\n\t\t\t<a v-on:click=\"canGo('/wallet')\" class=\"btn-wallet\"><img src=\"" + __webpack_require__(30) + "\" alt=\"我的钱包\"></a>\n\t\t</div>\n\t</div>\n</div>\n\n\n\n";

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF0AAABiCAYAAAAyXd+7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODlCNDI0NkZENTU1MTFFNUE1MjlCQkFEOUU5RDMxNDQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODlCNDI0NzBENTU1MTFFNUE1MjlCQkFEOUU5RDMxNDQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4OUI0MjQ2REQ1NTUxMUU1QTUyOUJCQUQ5RTlEMzE0NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4OUI0MjQ2RUQ1NTUxMUU1QTUyOUJCQUQ5RTlEMzE0NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhY4rZoAABDDSURBVHja7F0LkFPVGf6TbMhudtll3bAs4OKKWnF0BVRwfFB8tNpateOjtSIoHcBWq4OorfU11lqpzhTUEd86RcRXFdpKrY7jAyqOUuWlIFjwBS6vfWezj2x2k/7fzT13T25OkptsQiLef+ZMNveec+453/nP9//nP2dvHJFIhPImzRNVV12cfsZpBqdJnIZzauH0X04vcHqeU6/IHP5ig5M/fq7nn8zJx6mV01o971I5vyzOSfnpu6PAQD+C00ucxicptZnTJfhkwA/TB+KEJPk/1Qdlsw16POgA8F1OIy2UbIr4my6PNH2zmP+utpC/jdP3OX1igz4AehGnDzgdb7lsKNgV/marl6y3fwunYzn15Rt0JxWGXJgW4BC3x+soq0ynxFE67+ddCgX0zMAoHZZuiUtt0AfkxIy40eNNt8gJNugD4suolKso3RKVNuiSSc2oVH9fuiWabNAHZG0mhSLBrnSLfGSDPiAvZFSqoyXdEksLobOF4qe7Oa3jdIzlsr097Kd/xpbUcvvX62EC208XSx1Ov0iD2/dFuvznM+CtFvPv1kMBfYXQ2UIBHYLYyOkUjZWkku2RQCvsgN9C3jUUDZxtL5SOOgowyjiE02UUDWpNTuTmRTpaNkcadxxtuhzWFWmvbjTB4X/Tr8drXMHFXtSA5EuUjYzs+YKYZuRLm5xjJ9TnvbVV67819JK+xlQfwiZ4iJm7C7/dGWg6evlrPY4Bb6OMvlsSwIyi6AbJo6TaIEmh6emCPprTvzhNIFsgGzidy6khLdAbL7hAHQx54kuVhq+xAY+TjRQN2AWNWMOcQxNm9i1fnhan/8oGXCnYWrwyV376NBvf7GCTTmz0uEQ3+ve5qXNZJYW2lFCk23lAoekoCZP7qG4qvaiVXNWhRNkm5gr0IUrA97ip7c+j2F92HpAqDCXqXVdKoa0lNOzmXeSqUQLv2a9hgM6/Vx6wgMeAz31EXwsi9gJK+a5IaHNJYYB+oHF40r4GnYUBui026Dbottig26DboNtig26DbosN+oEg6QS8cJzqoJgVWmf2x2zI0d1UNrORHEUR6nq1krrfLB9UfSU/8JP33FaKhBwUWDycege5lEefHaVhFTY50fRnzBd63h2addABuHNYPznKwlR6STOVTW/KbD5yGZRFHQAJdZZdMfjzoz0fKLeEn8wV6L/rfqtci7Yh4e/Of+bg5LEr9mvx1A4q/81ecnisn1FBXpRB2di6B3/OpfPlg8iMQ8tNtS+lU4flPdKmOYdO5Y+Vuea74ikdVDaDNdIRe73vKw/5F42gcLsruRZV9FP5NXupqC5o4gWiwBIf9awemotm4/DNTxmzlTpWCTNa3iPlSnDc7d/7w8iAsjoer9Y4OMb4MIgVv0+4iRBVZL6HPGbAUVfHY9W5AhwCw/Mq43RGVuiFK8JO9wpOXtpPEvyolPz31cQZapevj4YxqO4jeuLK4BruIY/Z8PkX1lBwbWmumw18Vuh4ZQ46V1CrA15K+1lC24qp7Z5R1N8U62DBKJbP20OeEzqNa/gb18xeRX9jkbaVGNpevL+a7dXxqs2I0ym6J/o+JdmQ3i8LiSQcHemJ6oyjOBxvA77UbYDflY9m46z9ySSdhbHK6ffkG3AIDGf7X0ZS78cmdnNEd+qRzID3bvRS+4KR+QKcdNzuTZdeMEpzC2UFFwk6yP/QCOpZldoQ9qwsJ//DI7QyeZZrOZ1iFXRce6jgQgSs0IGlPup8sYrCgXgN1nbrX6iiwLNVCU6j5yXE8lD8ykMN7HQq4ONzCAu0zBsTd7157iHaQqXAZLyOZ1JDikHAiwu+l69WDjkmGnuBAc3qRGlzUeAZX7xtyL38j6LvJQgnMqQ/yifgRuwly4Br2pSl2EsGAjzPSEYvs+hAlvz9e9XliUBH+OzH+cYl8LQvZXwlY3r56/B8detCeYEpL/emcMr7GbneT7zUcuOYlPkUAblCnmMAHG9Wes2s6VPIllzKFBW9jLdxyakcq6KXsYXQskxdRsX/SMVz+hKfRl95ksNUmj6iEEA/AF3GOHxl0MttBsiplKtA7y2EluXMZeQ6cRqgEETmdBwjGG27jDkTv0rTm2wGyKnsVYHeYOOSU/lcBfpGG5ecyscq0N+1ccmprE4EereNTU4ERxdWqUDHe0xes/HJiSzXgY8DHfLUt6UXsi+fC78+y7JE/uLYetppxpeqysq8b9dZlSH1XdFlvX5GMY8xlVSyjdO45tbWsBJ0HXjscjxtM0LWZCYDHoOn6jTA0kTuY384TMHeXurrjwakQqEQdXV3a5/piKgHCX/HrUr5emdXl/ZZyAIceoJBAw+FbCTFq2bjNF3XdhyS+Y8YlF4doN4k4DqdTipyuaioqIiKPR5yONSHfTBI3T2xB0BdXK7M69XK+js6KNQXewi0lO+hTpVgwM35zeLmesORSBQgziva6BkS+zaVMCsA+pESbK4jwErRL4Ht4frQB7k6TlNZy1dbAh3iLSlZwZWeC6DTfWGmixteVlqqdc6s4W3t7eoyDHxJcTEFOjuV91kRYmcDtwuzIRzO/GSRGEy5LoCO60Pc7oTl2vz+GMCFQOkqyo1g4gMM+HXKvl5TVyd/n83pj5weY+05RlVxxbRp5OAG9e3eTV4esIoLLqBQYyOFWwdee4tBwswA6ABTSJA1TWgl6imur6e+XbsowtqPMrLGjrjtNoowAKGvvjIGUh5EfyAwKMDFLMEM6NKfL9qOmY2Z6i6K/5cs9CGo056rqooqp0+n7nXroqrNZZF4wHDhUp7RSt4RteI1d49wOliVqfi446jinHOo/JRTyMnaGGxooK/4Yd6JE6nq/POpa330lXjV115Le+66i/qbo+8p7mBgoPFiGvdJoJZNnkxl48fT11u3GvlFx/G8YWeeSU7WuK6VK6MAcVmnNIACcPdhh1EFtyGZNN13n/bpmzdPa+/OO+806gWIBg1xXaHPPzdoEO3u0RWlT0Fh1TfcQOUnnUSeQw+l3bfcMjAowSAOkPaYVqPA9zkZ9DjABdClDKz7oIF/qvO//z61v/FG/AzgzgDE2gceoIY77jAaL+hC8KlBX0ceSWHm9h5dS6BZAnTv8dEfgunatGlAw3S7EsfXtbUakFZATyYHzZlDVRdeSHsefpg6VqwwaCQZtba+/DKVMT4APsjlW554IlHWU/UEIBcB9DoBOEbaN2uWVhE0OmZasXbvnDvX0EpVx9zDh2sNqFu0iHbeeqsBqJmnh553nlY/BlCmJGMWTJoUBX3NGstUoVKG6tmzyTM69RYBFAyAa8rx6afKNqkE/Wu4916qZSVD+SSgC3mQ06MAHaT5DYCHdrp9Pg2QwMaN1L15M3W8/TaNffJJCsNaNyd/vbk2xebP14CvvfvuGOBlKeP72mBIoBtGhnmy5IgjKNTSomkxkpKPd+40ZpP2ne2KoAyDgqalfnMfnjeK24k+71q40KgTBlVQ2JjHH9falExQ/sh33lHek+kMGi/oBc77rRpwPHLhtraUAFsB3s1aJkCH0YVGyDLq+uuJkBBp27aNdlx5JZWdfXaUNpjSzPllaX7lFSVtoOOiLiuAgw7xrLa33jJoRRhus6FGvelIEdcvU7NsSIsE4JrGSNpj2UUcOjQO+HYG2ax5gqYwa2SRtQgGFgKt6+/oiKcCzjt8WnbeywlDCPoBmHv/9CfZXVYu+KwMpCzCcKtAP9V4mEIbZWASTR9ZY2OE6zJr3T6mKvNgiHphU2CMQS2y1uVC4LJqBpCVoOHmm2MWUrl+kT9AbzM4kK21agoBcHgaQebRGB5jlw6aApD6EtBRcMcO60DoWtH2+us5X8K3P/ccFY8dS02PPBJDpXAPU61wswH6Bj2WXgb+VU0haCIAN9+DZsLI4l7DddcNujHlp0YnHYz3/hCZUlJxc7ZBh1yl++qWXkAPsL0nnqhpi/bd54tzCT2HH06tS5ZYNsiC1+H6wZDXLV1KzS++mBWawerWM2aMAR5cyWSeTTvTn+ibMOqCftMRuNDJQF+qB2iukjlexYMV/GDh0qFh4ESzLzx85kytoYFVq+JArzjrLG0laxbQF9wu+Nqe+nqtzpqrr9b85kyMuywAXDbWqXz3ri1blNeTeVOZaDqG/dlECwehiaLhALx52TKDs9EJr+6twGJrgLOfr/LRy3UfPY77maL2PfqoUaZZDzGMZh8XIYc4P33vXsudFLRoDgOMvv9+zXBvv/jilDMSffavXp0WuN6jjlL69zK9xNADFjAlvFRXhQBk7wNLdQAJVw6GGJ2C1u578EFlQxp5dvSYjLXQIHmQ4IOLRoMezPwb2rVr0BqHxR9A9558ckIac+mUBEfBSjjB7DKqQHdKsQHDaMIF1BY3DLjwZvAJ/9vs7omlevnUqVSju43Ny5cnpAQAjjrklHChhYUaDyCCX4JPVdRkBsiqdK1dG7NCNgWoolRUX5+2F2bYBl7AYVYFP4n5aesNRdIOx3h58RL48EPNiwB4CfxzhC1duI+pJ3gStGIhBpFURPALdSMABSUYfdNNtC3JAGUCEGYW2o5YEwZMophVQhHFIJvo7M4UVc8SYRWT8iGC11YkjawGuoo/EymWzMeYFegAQrsyTYV4EFXcngL0rQz6OM195GnfxhTQYYFPi4XNYYDgYVmRzvXrtZmE8IPksVwh87I8K3TBL+Ak+5nNjxSR202Cxp1SaDftk/jQDrh24EXhWjmHDfzus5evH7JggWGMrUo4HIZavSr704KGhBsmvuPzs9NP1/gWFKflGTFCWz+08oDhXjJpef75qBs5Y4ZMT0bUVSwMJcUJ8MxP9bumGBRE6nCUGA3Atle9oC0B+mZd0x/SF0opBVo8lgEHrYCSEDASGxmyq6Zp3tdfx2gj+FlOCgF6P1H6vj5fwni4iKMIIOFyWuF5tB3uas3ttytXyIH1Mb9btCoN/UEEd6W86pe9FwH8FakWSBj9kcyvwiqjwcKzKBk3TtP6kfPna0YXixFQjuyODSZYhWd7amu1Os3rB1FvE1MEeBRRSHhSANK8WkaADmUqzzlHs1+IvWCzBm2Hx4FZo23F8ZpCM4ixcfp/ZMtPh0wQgItdo/7OzphVFVw38J/wWxsXL45xtfYsXKjF0eH5lLAfD7rxm2Lm+I7YtyyqSBw6j07DXmCx4iotNbYL/e+9FwN4DWu59nw24IJ2sBpGWAE7VMJIluk7UqOk4BwGB/d2cbvRdtEWPA/P6ta9LUkWZxN0g4yd5eUGuAaRsTcjN1S1xAfvYeOi6vLLjWghtrRi3CiTn59osRMOBLROy4sysXJFkEoohwy4vHRH2/bwWgHumminW6casdCBSye8C7R93zPPaPWJHTAxcyS5m/l80NEw+QgGQG8VBhILBsRPBCBGnEXavJUEZHiXmQoGsxkih5vlKKjZE6rQaaU9FpyEdkh4RAk9IB5IPEOzN0w5pgXRwQy69s8TqQy0VdAh8OKPSaO8cINglaenEzTTfV086yLT9adocC+GWKAbsAct5sdW5YucbkiRDx7ComzEXszHma7SgUzWQPF5mewG6UGzGk6/lfKJgblMyrda//4HThdz+qE+AL/kBB6ZbcpvloDuTi5IAPiNOjhuyV27XZH3Wf3ZtXqZGUk8t2XZAlyl6YYd01dkEyTXByDgd5rr9O+ppE53ldoGaXPkqGebHv8Xcrh0X7QvYSjElDfRP7ZN0BXlND0/8r6ZzXj6/wUYALEHjImecxVOAAAAAElFTkSuQmCC"

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(2);

	var component = Vue.extend({
		data: function() {
			return {
				currentView: 'wallet'
			};
		},

		template: '<component is="{{currentView}}"></component>',

		components: {
			wallet: __webpack_require__(32)
		}
	});

	module.exports = {component: component};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(6);
	__webpack_require__(18);
	__webpack_require__(33);

	var Vue = __webpack_require__(2);

	var component = Vue.extend({
		data: function() {
			return {
			};
		},
		template: __webpack_require__(38)
	});



	module.exports = {component: component};
















/***/ },
/* 33 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page-wallet\">\n\t\n\t<div class=\"header\">\n\t\t<h4 class=\"fs14 pb50\">昨日收益(元)</h4>\n\t\t<p class=\"pb50 {{incomeOfYesterday > 0 ? 'income-110' : 'income-60'}}\">{{incomeOfYesterday || '暂无收益'}}</p>\t\n\t\t\n\t\t<div v-link=\"/setting\" class=\"user-setting\"></div>\n\t</div>\n\n\t<div class=\"plr30 ptb30 clearfix bg-white bb-e5e5e5\">\n\t\t<div>\n\t\t\t<div v-on=\"click: openTakePage\" class=\"s201510151822 fl\">\n\t\t\t\t<div class=\"icon_201509071514_up\">提现</div>\n\t\t\t</div>\n\t\t\t<div v-link=\"/\" class=\"s201510151822 fr\">\n\t\t\t\t<div class=\"icon_201509071514_down c-fff\">投资</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div>\n\t\t<div v-on=\"click: openIncomePage\" class=\"tap-normal-state bar bar-h118\" v-response-tap>\n\t\t\t<div class=\"bar-bd\">\n\t\t\t\t<div class=\"bar-title\">总收益(元)</div>\n\t\t\t\t<div class=\"bar-content\">{{income}}</div>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<div v-on=\"click: openAssetsPage\" class=\"tap-normal-state bar bar-h118\" v-response-tap>\n\t\t\t<div class=\"bar-bd\">\n\t\t\t\t<div class=\"bar-title\">总资产(元)</div>\n\t\t\t\t<div class=\"bar-content\">{{assets}}</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div v-link=\"/record\" class=\"tap-normal-state bar bar-h88 mt20\" v-response-tap>\n\t\t\t<div class=\"bar-bd\">\n\t\t\t\t<div class=\"bar-title\">交易记录</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div style=\"position: relative\" v-on=\"click: openInvitePage\" class=\"bar bar-h88 mt20 tap-normal-state\" v-response-tap>\n\t\t\t<div class=\"bar-bd\">\n\t\t\t\t<div class=\"bar-title\">邀请好友</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- <a href=\"http://qianlong.hrbbwx.com/web/activity/share#!/redpacket\" class=\"btn-flower\"><img src=\"../../static/images/btn_flower.png\" alt=\"天天加息\"></a> -->\n\t</div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n";

/***/ }
]);