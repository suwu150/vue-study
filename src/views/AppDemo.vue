<template>
  <div id="app">
    <!--<HelloWorld-->
            <!--msg="用于prop传递参数给子组件"-->
            <!--foo="测试$attrs.foo"-->
            <!--ref="hw"-->
            <!--@clickDiv="onMyClick"-->
    <!--/>-->
    <!--<HelloWorld >-->
      <!--&lt;!&ndash; 默认插槽用default做参数 &ndash;&gt;-->
      <!--<template v-slot:default>具名插槽</template> &lt;!&ndash; 具名插槽用插槽名做参数 &ndash;&gt;-->
      <!--<template v-slot:content="value">内容...{{value.age}}</template>-->
    <!--</HelloWorld>-->
    <!--<HelloWorldEmit />-->

    <!--<k-input></k-input>-->
    <!--<k-input></k-input>-->

    <form-my></form-my>
    <tree></tree>


    <!-- form测试 -->
    <!--<form-test></form-test>-->

    <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld>
      <template>abc</template> -->
      <!-- 作用域插槽：显示数据来自子组件 -->
      <!-- <template v-slot:content="{foo}">content...{{foo}}</template>
    </HelloWorld>
    <HelloWorld msg="Welcome to Your Vue.js App"
      foo="foo" ref="hw" @myclick="onMyClick"/> -->

    <!-- 组件通信 -->
    <!-- <Communicate></Communicate> -->
    <!-- 插槽 -->
    <!-- <SlotTest></SlotTest> -->
    <!-- 递归 -->
    <!-- <Recursion></Recursion> -->
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import Communicate from "@/components/communicate";
import SlotTest from "@/components/slots";
import Recursion from "@/components/recursion";
import FormTest from '@/components/form'


import HelloWorld from "./HelloWorld";
import HelloWorldEmit from "./HelloWorldEmit";
import KInput from '@/components/form/KInput';
import FormMy from '@/components/formMy/index';
import Tree from '@/components/tree/index';

export default {
  name: "AppDemo",
  provide(){
    return {
      provideFoo: '测试provide/inject传递信息'
    }
  },
  components: {
    HelloWorld,
    HelloWorldEmit,
    KInput,
    FormMy,
    Tree,
    // HelloWorld,
    // Communicate,
    SlotTest,
    Recursion,
    FormTest
  },
  mounted() {
    setTimeout(() => {
      console.log(this.$refs);
      // this.$refs.hw.age = '18';
      this.$children[0].age = '20';
    }, 5000)
    // 子组件实例的顺序不保证的
    // this.$children[0].xx = 'oo'
  },
  methods: {
    onMyClick() {
      console.log('myclick');
    }
  },
};
</script>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
