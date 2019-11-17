
let Vue;
class PluginLog {
    constructor() {
        this.app  = new Vue({
            data : {
                message: 'PluginLog constructor success!'
            }
        });
    }
} 


PluginLog.install = function (_Vue) {
    Vue = _Vue;
    Vue.mixin({
        beforeCreate() {
            // console.log(this.app.message, _Vue.name);  // eslint-disable-line
        //    this.mixinslog(`$:插件PluginLog在组件${_Vue.name}中使用`);
        console.log('==插件混入在生命周期===beforeCreate');
        },
        mounted() {
            // this.mixinslog(`$:组件${_Vue.name}加载成功`);
            console.log('==插件混入在生命周期===mounted', this.$el);
        }
    });
};

export default PluginLog;