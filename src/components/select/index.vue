<template>
    <div>
        <select @change="onChange" :value="value" v-bind="$attrs">
            <option value="">请选择</option>
            <slot></slot>
        </select>
       value: {{this.value}}
        {{$attrs}}
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
        onChange(e) {
                // 转发change事件即可
                this.$emit('change', e.target.value);
                console.log('change', e.target.value);
                this.value = e.target.value;
                // 通知校验
                // this.$parent.$emit('validate')
                this.KFormItem.$emit('validate')
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