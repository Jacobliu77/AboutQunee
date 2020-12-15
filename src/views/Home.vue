<!--
 * @Author: jacob
 * @Date: 2020-10-13 10:38:42
 * @LastEditTime: 2020-12-14 15:35:32
 * @LastEditors: jacob
 * @Description: another
-->
<template>
  <div class="home">
      <el-alert
     
      type="success"
      :closable="false" 
      :description="oneword"
      class="aleart11"> 
    </el-alert>
    <weather></weather>
    <img alt="qunee logo" src="../assets/qunee-logo.png">
   
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import weather from '@/components/weather.vue'
import{ oneSay } from '@/api/home.js'

export default {
  name: 'Home',
  components: {
    HelloWorld, weather
  },
   data() {
     return {
       oneword:'',
      
     }
   },
   computed:{
    
   },
   methods:{
     async loadOneWord () {
      const { data } = await oneSay()
      // console.log(data);
      this.oneword ="一句温暖♥：" + data.content
    },
    anotherOne () {
      this.loadOneWord()
      console.log(111);
    }
   },
   created(){
     this.loadOneWord()
   }
}
</script>
<style lang="less" scoped> 
.aleart11 {
  margin-bottom: 10px;
  float: left;
  width: 70%;
  min-height: 43px;
  text-align: left;
}
</style>
