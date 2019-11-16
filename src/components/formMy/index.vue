<template>
  <div>
    <k-form :model="model" :rules="rules" ref="loginForm">
      <k-form-item label="用户名:" prop="username">
        <k-input v-model="model.username" placeholder="请输入用户名..."></k-input>
      </k-form-item>
      <k-form-item label="密码:" prop="password">
        <k-input v-model="model.password" type="password" placeholder="请输入密码..."></k-input>
      </k-form-item>
      <k-form-item>
        <button @click="onLogin">提交</button>
      </k-form-item>
    </k-form>
    输入的结果：{{model}}
  </div>
</template>

<script>
import KInput from "@/components/formMy/KInput.vue";
import KFormItem from "@/components/formMy/KFormItem.vue";
import KForm from "@/components/formMy/KForm.vue";

export default {
  data() {
    return {
      model: { username: "tom", password: "" },
      rules: {
        username: [{ required: true, message: "必填项" }],
        password: [{ required: true, message: "必填项" }]
      }
    };
  },
  components: {
    KInput,
    KFormItem,
    KForm
  },
  methods: {
    onLogin() {
      this.$refs['loginForm'].validate((isValid) => {
        // if (isValid) {
        //   alert('请求登陆');
        // } else {
        //   alert('校验失败，请检查...');
        // }

        this.$create(Notice, {
          title: '登陆校验',
          message: isValid ? '校验成功' : '校验失败',
          duration: 2000
        }).show();
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
