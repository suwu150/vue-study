<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    provide() {
        return {
            form: this // 指的是表单组件的实例
        }
    },
    props: {
        model: {
            type: Object, required: true
        },
        rules: {
            type: Object
        }
    },
    methods: {
        validate(cb) { //这里的cb是index.vue调用该方法时传递的参数方法
            // 调用所有FormItem的validate
            // Promise数组
            const tasks = this.$children
            .filter(item => !!item.prop)
            .map(item => item.validate());
            Promise.all(tasks)
            .then(() => cb(true))
            .catch(() => cb(false))
        }
    }
}
</script>