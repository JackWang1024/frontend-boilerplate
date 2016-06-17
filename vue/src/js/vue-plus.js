var Vue = require('vue');

Vue.use(require('vue-router'));
// Vue.use(require('extends/ajax/index'));
// Vue.use(require('extends/loading/index'));
// Vue.use(require('extends/modal/index'));
// Vue.use(require('extends/toast/index'));
// Vue.use(require('extends/response-tap/index'));

/**
 * 全局组件
 */
// input 删除按钮
// Vue.component('delBtn', require('del-btn/index'));

// 开启调试模式
Vue.config.debug = true;


module.exports = Vue;
