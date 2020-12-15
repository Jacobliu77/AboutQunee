<!--
 * @Author: jacob
 * @Date: 2020-11-26 10:30:02
 * @LastEditTime: 2020-12-10 11:16:57
 * @LastEditors: jacob
 * @Description:辅助应用场景vue文件
-->
<template>
<div>
    <el-alert
      title="辅助应用场景vue文件"
      type="success"
      :closable="false" >
    </el-alert>
    <echartsCompones></echartsCompones>
  </div>
</template>

<script>
import echartsCompones from '@/components/echarts_forAll.vue'
export default {
  components: {
    echartsCompones
  }
}
</script>

<style>

</style>