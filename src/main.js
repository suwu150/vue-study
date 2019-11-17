import Vue from "vue";
import App from "./App.vue";
import emitter from "./mixins/emitter";
import mixinslog from "./mixins/mixinslog";
import Bus from './utils/bus';
import create from './utils/create';
import router from './router'

// import 'icons/index';

import PluginLog from './pluginlog'

import store from './store'

Vue.config.productionTip = false;
Vue.mixin(emitter);  // 全局混入
Vue.mixin(mixinslog);  // 全局混入日志打印方式
// main.js
// 事件总线方式，挂载到Vue中
Vue.prototype.$bus = new Bus();
Vue.prototype.$create = create;


Vue.use(PluginLog);
// new PluginLog();

new Vue({
  data: {
    bar: 'bar'
  },

  router,
  store,
  render: h => h(App)
}).$mount("#app");
