<template>
    <option :name="name" :value="value" v-bind="$attrs">{{ name }}</option>
</template>>

<script>
export default {
    inheritAttrs: false,
    props: {
        name: {
            type: String,
            default: ''
        },
        value: {
            type: [String, Number],
            default: ''
        }
    }
}
</script>>