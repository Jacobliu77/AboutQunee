<!--
 * @Author: jacob
 * @Date: 2020-10-13 10:38:42
 * @LastEditTime: 2020-11-30 10:55:51
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
    <el-header class="header" style="height:120px">
        <el-menu
          :default-active="activeIndex"
          class="el-menu"
          mode="horizontal"
          :router = "true"
          active-text-color="#409EFF">
          <img src="@/assets/puppy1.png" alt="" style="float:left;height:60px" >
           <img src="./assets/qunee.png" alt="" style="float:left;height:60px">
          <el-menu-item index="/use">应用场景分析</el-menu-item>
          <el-menu-item index="/assets">辅助图元</el-menu-item>
          <el-menu-item index="/line">线结构</el-menu-item>
          <el-menu-item index="/group">组结构</el-menu-item>
          <el-menu-item index="/point">点结构</el-menu-item>
          <el-menu-item index="/">qunee概述</el-menu-item>
        </el-menu>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical "
         >
         <el-menu-item index="1">
            <i class="el-icon-s-marketing"></i>
            <span slot="title">导航一</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-s-open"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <vue-scroll :ops="ops" style="height:68vh">
          <router-view/>
        </vue-scroll> 
      </el-main>
    </el-container>
     <el-footer class="footer">
        <el-divider style="margin:0"></el-divider>
        <span></span>
     </el-footer>
  </el-container>
  </div>
</template>
<script>
//第一次渴望要给一个人一个家，第一次渴望把一个人当作自己的瞳仁来时刻带在自己身上又能日日守护。
//第一次渴望成为一个人最得力的帮助，第一次渴望成为一个人心上的印记，臂上的戳记
// 
  export default {
    data() {
      return {
        activeIndex: '/',
        ops: {
          vuescroll: {},
          scrollPanel: {},
          rail: {
            keepShow:true
          },
          bar: {
            hoverStyle: true,
            onlyShowBarOnScroll: false, //是否只有滚动的时候才显示滚动条
            background: '#409EFF',
          }
        },
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
  .el-menu {
    padding: 24px 10px;
  }
  .el-menu-item {
    font-size: 16px;
    float: right;
  }
  .el-menu-vertical {
    height: 68vh;
    .el-menu-item {
       float: left;
    }
  }
  .header {
    z-index: 999;
    background-color: #ffffff;
    position:  sticky;
    top:0;
    
  }
  .footer {
    .el-divider--horizontal {
      margin: 0;
      border: 0.5px;
    }
  }
}

</style>
