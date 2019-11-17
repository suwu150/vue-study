<template>
    <option name="name" :value="value">{{ name }}</option>
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