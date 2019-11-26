// Compiler: 遍历模板，分析其中哪些地方用到了data中的key以及事件等指令
// 这时认为是一个依赖，创建一个Watcher实例，使界面中的dom更新函数和那个key
// 挂钩，如果更新了key，则执行这个更新函数
class Compiler {
    // el: 宿主元素选择器
    // vm: KVue实例
    constructor(el, vm) {
        this.$vm = vm;

        this.$el = document.querySelector(el);
        // 执行生命周期函数
        // 在挂载开始之前被调用：相关的 render 函数首次被调用。
        this.$vm.$options.beforeMount && this.$vm.$options.beforeMount.call(this.$vm);
        // 执行编译
        this.compile(this.$el);

        // 执行生命周期函数
        // el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。
        this.$vm.$options.mounted && this.$vm.$options.mounted.call(this.$vm);
    }

    compile(el) {
        const childNodes = el.childNodes;
        Array.from(childNodes).forEach(node => {
            // 判断节点类型
            if (this.isElement(node)) {
                // 元素 <div></div>
                // console.log('编译元素：'+node.nodeName);
                this.compileElement(node);
            } else if(this.isInter(node)) {
                // 插值文本 {{xx}}
                // console.log('编译插值文本:' +node.textContent);
                this.compileText(node);
            }

            // 递归可能存在的子元素
            this.compile(node);
        })
    }

    // 编译插值文本
    compileText(node) {
        // {{xx}}
        // node.textContent = this.$vm[RegExp.$1];
        console.log(RegExp.$1);
        this.update(node, RegExp.$1, 'text')
    }

    // update函数：负责更新dom，同时创建watcher实例在两者之间挂钩
    update(node, exp, dir) {
        // 首次初始化
        const updaterFn = this[dir + 'Updater'];
        updaterFn && updaterFn(node, this.$vm[exp]);

        // 更新
        new Watcher(this.$vm, exp, function(value) {
            updaterFn && updaterFn(node, value)
        })
    }

    textUpdater(node, value) {
        node.textContent = value;
    }

    htmlUpdater(node, value) {
        node.innerHTML = value;
    }

    modelUpdater(node, value) {
        node.value = value;
    }

    compileElement(node) {
        // 获取属性
        const nodeAttrs = node.attributes;

        Array.from(nodeAttrs).forEach(attr => {
            // k-text="exp"
            console.log(attr);
            const attrName = attr.name; // k-text
            const exp = attr.value; // exp

            if (this.isDirective(attrName)) {
                // 截取指令名字
                const dir = attrName.substring(2); // text
                // 执行相应更新函数
                console.log(this[dir]);
                this[dir] && this[dir](node, exp);
            } else if (this.isEvent(attrName)) {
                console.log(RegExp.$1);
                this.event(node, RegExp.$1, exp);
            }
        })
    }

    isDirective(attr) {
        return attr.indexOf('k-') == 0;
    }

    isEvent(attr) {
        return attr.indexOf('@') == 0 && /^@(\w+)$/.test(attr);
    }

    isElement(node) {
        return node.nodeType === 1;
    }

    isInter(node) { // 是否是插值表达式：是文本节点并且复合正则
        return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent)
    }

    text(node, exp) {
        this.update(node, exp, 'text')
    }

    model(node, exp) {
        // 赋值
        this.update(node, exp, 'model');
        // 事件的监听
        node.addEventListener('input', e => {
            this.$vm[exp] = e.target.value;
        })
    }

    html(node, exp) {
        this.update(node, exp, 'html')
    }

    event(node, eventName, value) {
        const methods = this.$vm.$options.methods;
        node[`on${eventName}`] = methods[value].bind(this.$vm);
    }
}
