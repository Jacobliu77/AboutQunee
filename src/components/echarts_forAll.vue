<!--
 * @Author: jacob
 * @Date: 2020-12-10 11:02:20
 * @LastEditTime: 2020-12-10 11:25:41
 * @LastEditors: jacob
 * @Description: echarts通用组件
-->
<template>
    <div id="chart_example" ></div>
</template>

<script>
import echarts from 'echarts'
export default {
     name: 'echartsCompones',
     data(){
         return {
         }
     },
     methods:{
         drawEcharts () {
              var echarts = require('echarts');
              let myChart = echarts.init(document.getElementById('chart_example'));
              let option = {
                color: ['#f44'],
                tooltip : {
                  trigger: 'axis',
                  axisPointer : {
                    type : 'shadow'
                  }
                },
                xAxis : [
                  {
                    type : 'category',
                    data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月',],
                    axisTick: {
                      alignWithLabel: true
                    }
                  }
                ],
                yAxis : [
                  {
                    type : 'value'
                  }
                ],
                series : [
                  {
                    name:'每月投入',
                    type:'bar',
                    barWidth: '60%',
                    data:[995,666,444,858,654,236,645,546,846,225,547,356]
                  }
                ]
              };
              myChart.setOption(option);
         }
     },
     mounted() {
         this.drawEcharts()
     }
}
</script>

<style lang='less' >
    #chart_example {
        height: 60vh;
        width: 100%;
    }
</style>