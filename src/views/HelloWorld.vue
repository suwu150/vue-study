<template>
    <div class="hello" @click="$emit('clickDiv')">
        <!--<h3>{{ msg }}</h3>-->
        <!--<p>{{$attrs.foo }}</p>-->
        <!--<p>{{ age }}</p>-->
        <p @click="sayHello">点击该节点，问候兄弟节点</p>
        <slot name="content" :age="age"></slot>
        <p>{{provideFoo}}hello world</p>
        <slot></slot>
    </div>
</template>

<script>
    export default {
      name: 'HelloWorld',
      props: {
        msg: String
      },
      inject: {
        provideFoo: { default: 'foo-----' }
      },
      data: () => {
        return {
          age: '30'
        }
      },
      created() {
        // 监听事件
        this.$parent.$on('hiBrother', () => {
          console.log('来自兄弟的问候', 'HelloWorld'); // eslint-disable-line
        });
      },
      mounted(){
        this.mixinslog('HelloWorld Vue is Mounted!');
        setTimeout(() => {
          // 派发事件,在HelloWorldEmit.vue组件中监听
          this.$bus.$emit('fromHelloWorld', '传递给HelloWorldEmit.vue的数据');
        }, 5000);
      },
      methods: {
        sayHello() {
          this.$parent.$emit('hiBrother');
        }
      }
    }
</script>

<style scoped>
    h3 {
        margin: 40px 0 0;
    }
</style>
