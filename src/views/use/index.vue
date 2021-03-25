<!--
 * @Author: jacob
 * @Date: 2020-11-26 10:30:02
 * @LastEditTime: 2021-03-25 16:32:08
 * @LastEditors: jacob
 * @Description:应用示例vue文件
-->
<template>
<div>
    <el-alert
      title="应用示例vue文件"
      type="success"
      :closable="false" >
    </el-alert>
    <el-select v-model="value" placeholder="请选择">
       <el-option
         v-for="item in options"
         :key="item.value"
         :label="item.label"
         :value="item.value">
       </el-option>
     </el-select>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    TOTAL:{{total}}
</div>
</template>

<script>
export default {
   data() {
      return {
         input: '',
         options: [{
          value: 1,
          label: '黄金糕X1'
        }, {
          value: 2,
          label: '双皮奶X2'
        }, {
          value: 3,
          label: '蚵仔煎X3'
        }, {
          value: 4,
          label: '龙须面X4'
        }],
        value: '',
        obj : {
          1:"",
          2:"",
          3:"",
          4:""
        }
      }
    },
    methods: {
     
    },
    computed:{
      total:function(){
        this.obj[this.value] = this.input
        return this.obj
      }
    }
}
</script>

<style lang="less" scoped>
  
  
</style>