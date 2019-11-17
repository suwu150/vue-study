let Vue;

class Store {

    // 插件挂载
    // 持有state，解析vuex配置，并使其响应化
    // 
    constructor(options) {
        this.state = new Vue({ data: options.state });
        this.mutations = options.mutations;
        this.actions = options.actions;
    }
}

function install(_Vue) {
    Vue = _Vue;
    Vue.mixin({
        beforeCreate() {
            // this指的是组件实例
            if (this.$option.store) {
                Vue.prototype.$store = this.$option.store;
            }
        }
    });
}


export default { Store, install };