<template>
    <div class="hello">
        测试兄弟节点
        <p>{{provideFoo}}</p>
    </div>
</template>

<script>
    export default {
      name: 'HelloWorldEmit',
      props: {
        msg: String
      },
      data: () => {
        return {
          age: '30'
        }
      },
      inject: ['provideFoo'],
      created() {
        // 创建事件总线
        this.$bus.$on('fromHelloWorld', (value) => {
          alert('监听到由hello world组件传递来的数据：' + value);
        });
        // 监听事件
        this.$parent.$on('hiBrother', () => {
          console.log('来自兄弟的问候', 'HelloWorldEmit');
        });
      }
    }
</script>

<style scoped>
    h3 {
        margin: 40px 0 0;
    }
</style>
