import Vue from 'vue'
// import Router from 'vue-router'
import KVueRouter from './kvue-router'
import Home from './views/Home.vue'

Vue.use(KVueRouter); // 应用插件，如何成为一个插件，具体做了什么东西
// 其中的use会执行插件的install方法

export default new KVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: '主页',
      component: Home
    },
    {
      path: '/about',
      name: '关于',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/my',
      name: '我的',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/My.vue')
    },
    {
      path: '/appDemo',
      name: 'AppDemo',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/AppDemo.vue')
    },
    {
      path: '/kvuex',
      name: 'KVuex',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/KVuex.vue')
    }
  ]
})
