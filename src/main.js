import Vue from "vue";
import App from "./App.vue";
import emitter from "./mixins/emitter";
import mixinslog from "./mixins/mixinslog";
import Bus from './utils/bus';
import create from './utils/create';

// 引入插件并使用
import WToast from './plugin/wtoast';
Vue.use(WToast);

//引入插件配置
import router from './router';
import store from './store';
import pluginLog from './pluginlog';


// import 'icons/index';


Vue.config.productionTip = false;
Vue.mixin(emitter);  // 全局混入
Vue.mixin(mixinslog);  // 全局混入日志打印方式
// main.js
// 事件总线方式，挂载到Vue中
Vue.prototype.$bus = new Bus();
Vue.prototype.$create = create;

new Vue({
  data: {
    bar: 'bar'
  },

  router,
  store,
  pluginLog,
  render: h => h(App)
}).$mount("#app");
