<template>
    <div>
        <!-- input事件处理，值赋值 -->
        <textarea @input="onInput" :value="value" v-bind="$attrs"></textarea>
    </div>
</template>

<script>
    export default {
        inheritAttrs: false, // 不继承$attrs属性到跟节点
        inject: ['KFormItem'],
        props: {
            value: {
                type: String,
                default: ''
            },
        },
        methods: {
            onInput(e) {
                // 转发input事件即可
                this.$emit('input', e.target.value);

                // 通知校验
                // this.$parent.$emit('validate')
                this.KFormItem.$emit('validate')
            }
        },
    }
</script>
<style scoped>

  textarea:focus{
      border: 1px solid #555;
      outline: transparent
  }
</style>
