<!--
 * @Author: jacob
 * @Date: 2020-11-26 10:30:02
 * @LastEditTime: 2020-12-17 11:08:51
 * @LastEditors: jacob
 * @Description:组场景vue文件
-->
<template>
  <div>
    <el-alert
      title="组场景vue文件"
      type="success"
      :closable="false" >
    </el-alert>
    <bmapCompones></bmapCompones>
  </div>
</template>

<script>
import bmapCompones from '@/components/bdmap.vue'
export default {
  components: {
    bmapCompones
  },
  data() {
    return {
    
    }
  },
  computed:{
    
  }
}
</script>

<style>

</style>