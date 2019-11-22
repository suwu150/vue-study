<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">主页</router-link> |
      <router-link to="/about">关于</router-link> |
      <router-link to="/my">我的</router-link> |
      <router-link to="/appDemo">演示代码</router-link> |
      <router-link to="/kvuex">kvuex</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

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
