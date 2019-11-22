import Vue from "vue";
import KPluginLog from "./Kpluginlog";

Vue.use(KPluginLog);

export default new KPluginLog({
    start: '[-开始记录信息-]',
    prefix: '[vue日志记录]',
    suffix: '[end]',
    end: '[-结束记录信息-]',
});

