<!--
 * @Author: jacob
 * @Date: 2020-11-26 10:30:02
 * @LastEditTime: 2020-12-14 15:43:49
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
     <!-- <el-input v-model="Bank" placeholder="支付银行"  :disabled="true" ></el-input> -->
      <!-- <el-input v-model="row.payBank" placeholder="银行代码"  ></el-input> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      // row : {
      //  payBank:'11'
      // }
    }
  },
  computed:{
    //  Bank: {
    //   get: function () {
    //     if(this.row.payBank === '11' ){
    //       return "建设银行"
    //     }else if (this.row.payBank === '22') {
    //       return '工商银行'
    //     }else {
    //       return "未知银行"
    //     }
    //   }
    // }
  }
}
</script>

<style>

</style>