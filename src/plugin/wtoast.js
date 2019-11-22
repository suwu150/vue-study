import wToast from './wtoast.vue'
let wtoast = {};
wtoast.install = function (Vue, options) {
  Vue.component(wToast.name, wToast) // wToast.name 组件的name属性
}
export default wtoast;
