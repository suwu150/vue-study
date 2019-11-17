<template>
    <div class="flex KFormItem">
        <!-- label -->
        <label v-if="label">{{label}}</label>
        <div class="content">
            <slot></slot>
            <!-- 错误信息 -->
            <p class="error" v-if="error">{{error}}</p>
        </div>
    </div>
</template>

<script>
  import Schema from 'async-validator';

  export default {
    inject: ['form'],
    provide() {
      return {
        KFormItem: this
      }
    },
    props: {
      label: {
        type: String,
        default: ''
      },
      prop: {
        type: String
      }
    },
    data() {
      return {
        error: ''
      }
    },
    mounted() {
        this.$on('validate', () => {
            this.validate();
        })
    },
    methods: {
      validate() {
        // 获取对应FormItem校验规则
        const rules = this.form.rules[this.prop];
        // 获取校验值
        const value = this.form.model[this.prop];
        // 校验描述对象
        const descriptor = { [this.prop]: rules };
        // 创建校验器
        const schema = new Schema(descriptor);
        // 返回Promise，没有触发catch就说明验证通过
        return schema.validate({ [this.prop]: value }, errors => {
        if (errors) {
          // 将错误信息显示
          this.error = errors[0].message;
         } else {
          // 校验通过
          this.error = "";
         }
      });
      }
    },
  }
</script>

<style scoped>
    .error{
        color: #f00;
        font-size: 12px;
    }
    .flex {
        display: flex;
        flex-direction: row;
    }
    label {
        width: 200px;
        text-align: right;
    }
    .KFormItem {
      height: 40px;
    }
    .content {
      height: 100%;
    }
</style>
