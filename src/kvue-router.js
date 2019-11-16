
let Vue;
class KVueRouter {

    constructor(options) {
        this.$options = options;
        this.routeMap = {};

        // url-响应式
        this.app  = new Vue({
            current: '/'
        });
    }

    init () {
        this.bindEvent();
        this.createRouteMap();
        this.initComponent();
    }

    bindEvent() {
        window.addEventListener('hashchange', this.onHashChange.bind(this));
    }

    onHashChange() {
        console.log(window.location.hash);
        this.app.current = window.location.hash.slice(1) || '/';
    }

    createRouteMap() {
        this.$options.router.forEach(route => {
            this.routeMap[route.path] = route;
        });
    }


    initComponent () {
        Vue.component('router-link', {
            props: {
                to: String
            },
            render(h) {
                return h ('a', {
                    attrs: { href: `#${this.to}` }
                }, [this.$s])
            }
        });

        Vue.component('router-view', {
            render: (h) => {
                const componentRouter = this.routeMap[this.app.current].component;
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
            }
           
        }
    });
};

export default KVueRouter;