<template>
    <div>
        <select @input="onInput" :value="value">
            <slot></slot>
        </select>
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    inject: ['KFormItem'],
    props: {
        value: {
            type: String,
            default: ''
        }
    },
    methods: {
        onInput(e) {
                // 转发change事件即可
                // this.$emit('change', e.target.value);
                // console.log('change', e.target.value);

                this.$emit('input', e.target.value);
                // 通知校验
                // this.$parent.$emit('validate')
                this.KFormItem.$emit('validate');
        }
    }
}
</script>
<style>
  select {
      min-width: 100px;
      width: 100%;
      outline: none
  }
</style>