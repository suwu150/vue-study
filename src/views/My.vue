<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <test-wtoast ref="wToast"></test-wtoast>
    <div @click="showMessage">点击弹窗</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from './HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  mounted() {
      this.mixinslog('My Vue is Mounted!');
  },
  methods: {
    showMessage(){
      console.log(this.$refs.wToast);
      this.$nextTick(() => {
        this.$refs.wToast.toastPlugin('调用插件toast', 5000);
      });
    }
  }
}
</script>
