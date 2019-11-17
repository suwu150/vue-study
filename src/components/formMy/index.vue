<template>
  <div>
    <k-form :model="model" :rules="rules" ref="loginForm">
      <k-form-item label="用户名:" prop="username">
        <k-input v-model="model.username" placeholder="请输入用户名..."></k-input>
      </k-form-item>
      <k-form-item label="密码:" prop="password">
        <k-input v-model="model.password" type="password" placeholder="请输入密码..."></k-input>
      </k-form-item>
      <k-form-item label="性别:" prop="gender">
        <k-select v-model="model.gender">
          <k-option name="请选择" value=""></k-option>
          <k-option name='男' value="male"></k-option>
          <k-option name='女' value="female"></k-option>
        </k-select>
      </k-form-item>
      <k-form-item label="备注信息:" prop="remark">
        <k-textarea v-model="model.remark" placeholder="请输入备注信息..."></k-textarea>
      </k-form-item>
      <k-form-item label="爱好:" prop="hobby">
        <k-input v-model="model.hobby" type="checkbox" name="打篮球" value="basket" placeholder="请选择爱好..."></k-input>
        <k-input v-model="model.hobby" type="checkbox" name="踢足球" value="football" placeholder="请选择爱好..."></k-input>
        <k-input v-model="model.hobby" type="checkbox" name="跑步" value="runner" placeholder="请选择爱好..."></k-input>
        <k-input v-model="model.hobby" type="checkbox" name="打羽毛球" value="playCh" placeholder="请选择爱好..."></k-input>
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
import Notice from "@/components/Notice.vue";
import KSelect from "@/components/select/index.vue";
import KOption from "@/components/select/option.vue";
import KTextarea from "@/components/textArea/index.vue";

export default {
  data() {
    return {
      model: { username: "tom", password: "", gender: 'female' },
      rules: {
        username: [{ required: true, message: "必填项" }],
        password: [{ required: true, message: "必填项" }],
        gender: [{ required: true, message: "必填项" }],
        remark: [{ required: false, message: "必填项" }],
      }
    };
  },
  components: {
    KInput,
    KFormItem,
    KForm,
    KSelect,
    KOption,
    KTextarea,
  },
  methods: {
    onLogin() {
      this.$refs["loginForm"].validate(isValid => {
        this.$create(Notice, {
          title: "登陆校验",
          message: isValid ? "校验成功" : "校验失败",
          duration: 2000
        }).show();
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
