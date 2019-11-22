
let Vue;
class PluginLog {
    constructor(option) {
        this.app  = new Vue({
            data : {
                ...option
            }
        });

        this.log = this.log.bind(this);
    }

    log(type, message) {
        const showMessage = `
        ${this.app.start}
        [${new Date()}]
        ${this.app.prefix}:${message}:${this.app.suffix}
        ${this.app.end}
        `;
        console[type](showMessage); // eslint-disable-line
    }
}


PluginLog.install = function (_Vue) {
    Vue = _Vue;
    Vue.mixin({
        beforeCreate() {
            if (this.$options.pluginLog) {
                Vue.prototype.$pluginLog = this.$options.pluginLog;
            }
        },
        mounted() {
            if (this.$options.pluginLog) {
                this.$options.pluginLog.log('info', '加载成功...')
            }
        }
    });
};

export default PluginLog;
