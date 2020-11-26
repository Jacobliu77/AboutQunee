<!--
 * @Author: jacob
 * @Date: 2020-10-13 10:38:42
 * @LastEditTime: 2020-11-26 10:11:57
 * @LastEditors: jacob
 * @Description: 
-->
<template>
  <div class="home">
      <el-alert
      :title="oneword"
      type="success"
      :closable="false" class="aleart11">
    </el-alert>
    <img alt="qunee logo" src="../assets/qunee-logo.png">
    <HelloWorld msg="欢迎使用Qunee相关教程"/>
    <br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import{ oneSay } from '@/api/home.js'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
   data() {
     return {
       oneword:''
     }
   },
   methods:{
     async loadOneWord () {
      const { data } = await oneSay()
      // console.log(data);
      this.oneword = data.content
    },
   },
   created(){
     this.loadOneWord()
   }
}
</script>
<style lang="less" scoped> 
.aleart11 {
  margin-bottom: 10px;
}
</style>
