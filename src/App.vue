<!--
 * @Author: jacob
 * @Date: 2020-10-13 10:38:42
 * @LastEditTime: 2020-10-16 16:08:35
 * @LastEditors: jacob
 * @Description: vue的入口文件
-->
<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
   <el-container>
    <el-header class="header">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          active-text-color="#409EFF">
          <img src="./assets/puppy1.png" alt="" style="float:left;height:60px" >
           <img src="./assets/qunee.png" alt="" style="float:left;height:60px">
          <el-menu-item index="6">应用场景分析</el-menu-item>
          <el-menu-item index="5">辅助图元</el-menu-item>
          <el-menu-item index="4">线结构</el-menu-item>
          <el-menu-item index="3">组结构</el-menu-item>
          <el-menu-item index="2">点结构</el-menu-item>
          <el-menu-item index="1">qunee概述</el-menu-item>
        </el-menu>
    </el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>
          <router-view/>
      </el-main>
    </el-container>
  </el-container>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
  width: 80%;
  margin: 0 auto;
  background-color: #ffffff;
  padding: 0;
  .el-menu-item {
    font-size: 16px;
    float: right;
  }
}

</style>
