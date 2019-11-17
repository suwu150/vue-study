import Vue from "vue";
import App from "./App.vue";
import emitter from "./mixins/emitter";
import Bus from './utils/bus';
import create from './utils/create';
import router from './router'
// import 'icons/index';


Vue.config.productionTip = false;
Vue.mixin(emitter);  // 全局混入
// main.js
// 事件总线方式，挂载到Vue中
Vue.prototype.$bus = new Bus();
Vue.prototype.$create = create;

new Vue({
  data: {
    bar: 'bar'
  },

  router,

  // router,
  render: h => h(App)
}).$mount("#app");
