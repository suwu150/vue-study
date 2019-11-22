let Vue;

class Store {
    // 插件挂载
    // 持有state，解析vuex配置，并使其响应化
    constructor(options) {
        this.state = new Vue({ data: options.state });
        this.mutations = options.mutations;
        this.actions = options.actions;

        options.getters && this.handleGetters(options.getters);

        this.commit = this.commit.bind(this);
        this.dispatch = this.dispatch.bind(this);
    }

    //实现commit：修改state中的数据
    commit(type, arg) {
        this.mutations[type](this.state, arg);
    }

    dispatch(type, arg) {
        return this.actions[type](this, arg);
    }

    handleGetters(getters) {
        this.getters = {}; // 定义this.getters
        // 遍历getters选项，为this.getters定义property
        // 属性名就是选项中的key，只需定义get函数保证其只读性
        Object.keys(getters).forEach(key => {
            Object.defineProperty(this.getters, key, {
                get: () => {
                    return getters[key](this.state);
                }
            })
        })
    }
}


// 声明插件install
function install(_Vue) {
    Vue = _Vue;
    // 这样store执行的时候，就有了Vue，不用import
    // 这也是为啥Vue.use必须在新建store之前
    Vue.mixin({
        beforeCreate() {
            // this指的是组件实例
            // // 这样才能获取到传递进来的store
            // // 只有root元素才有store，所以判断一下
            if (this.$options.store) {
                Vue.prototype.$store = this.$options.store;
            }
        }
    });
}


export default { Store, install };
