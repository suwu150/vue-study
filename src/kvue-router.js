
let Vue;
class KVueRouter {
    constructor(options) {
        this.$options = options;
        this.routeMap = {};
        // url-响应式
        this.app  = new Vue({
            data : {
                current: '/'
            }
        });
    }

    // 初始化代码
    init () {
        this.bindEvent(); //监听事件
        this.createRouteMap(); // 解析routers
        this.initComponent(); // 初始化组件
    }

    bindEvent() {
        window.addEventListener('hashchange', this.onHashChange.bind(this));
    }

    onHashChange() {
        // console.log(window.location.hash);
        this.app.current = window.location.hash.slice(1) || '/';
    }

    createRouteMap() {
        this.$options.routes.forEach(route => {
            this.routeMap[route.path] = route;
        });
    }

    initComponent () {
        Vue.component('router-link', {
            props: {
                to: String
            },
            render(h) {
                // h(tag, data, children)
                return h ('a', { attrs: { href: `#${this.to}` }}, [this.$slots.default]) // this.$s默认插槽
            //   return <a href={`#${this.to}`}>{this.$slots.default}</a>
            }
        });

        Vue.component('router-view', {
            render: (h) => {
                const componentRouter = this.routeMap[this.app.current].component;
                return h(componentRouter);
            }
        });
    }
} 


KVueRouter.install = function (_Vue) {
    Vue = _Vue;

    Vue.mixin({
        beforeCreate() {
            if (this.$options.router) {
                Vue.prototype.$router = this.$options.router;

                // 路由器初始化
                this.$options.router.init();
            }
           
        }
    });
};

export default KVueRouter;