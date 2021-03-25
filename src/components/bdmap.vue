<!--
 * @Author: jacob
 * @Date: 2020-12-17 10:12:23
 * @LastEditTime: 2020-12-17 16:57:41
 * @LastEditors: jacob
 * @Description: 百度地图开发控件
-->
<template>
    <div>
        <div id="bmap_example"  ref="bmaps" style="width:100%;height:60vh;margin-top: 5px;"></div>
    </div>
</template>
 
<script>
    // import {echarts} from '@/lib/echarts.min.js'
    import '@/lib/bmap.min.js' 
    import 'echarts-bmap'
    export default {
        name: 'bmapCompones',
        data(){
            return {
               terminaldata:[
                    { name: "青岛", value: 2, test: 'aaa' },
                    { name: "上海", value: 1, test: 'aaa' },
                    { name: "厦门", value: 2, test: 'aaa' },
                    { name: "广州", value: 1, test: 'aaa' },
                    { name: "太原", value: 1, test: 'aaa' },
                    { name: "昆明", value: 1, test: 'aaa' },
                    { name: "深圳", value: 1, test: 'aaa' },
                    { name: "南昌", value: 1, test: 'aaa' },
                    { name: "吉林", value: 1, test: 'aaa' },
                    { name: "成都", value: 1, test: 'aaa' },
                    { name: "南京", value: 1, test: 'aaa' },
                    { name: "北京", value: 3, test: 'aaa' },
                    { name: "杭州", value: 1, test: 'aaa' },
                    { name: "济南", value: 1, test: 'aaa' },
                    { name: "天津", value: 2, test: 'aaa' },
                    { name: "郑州", value: 1, test: 'aaa' },
                    { name: "哈尔滨", value: 1, test: '编码：aaa' },
                    { name: "长沙", value: 1, test: 'aaa' },
                    { name: "武汉", value: 2, test: 'aaa' },
                    { name: "香港", value: 2, test: 'aaa' }
                ]
            }
        },
        mounted () {
           this.drawmap(this.terminaldata); 
        },
        methods: {
           drawmap(terminaldata) {
             var echarts = require('echarts');
            //  require("echarts/lib/chart/map/MapSeries.js");
            //  let map =new BMap.Map(this.$refs.allmap); // 创建Map实例
            //  var echarts = require('@/lib/echarts.min.js');
             let myChart = echarts.init(this.$refs.bmaps);
            //  var myChart = echarts.init(document.getElementById('main'));
             // 绘制图表
             var data = terminaldata;
             //预备相应城市地理坐标，若果没有需要手动添加哦！！
             var geoCoordMap = {
                 东京: [138.45, 34.8],
                 香港: [114.5, 22.15],
                 台北: [120.5, 22.45],
                 新加坡: [103.45, 1.18],
                 青岛: [120.33, 36.07],
                 上海: [121.48, 31.22],
                 厦门: [118.1, 24.46],
                 福州: [119.3, 26.08],
                 南宁: [108.33, 22.84],
                 广州: [113.23, 23.16],
                 太原: [112.53, 37.87],
                 昆明: [102.73, 25.04],
                 深圳: [114.07, 22.62],
                 海口: [110.35, 20.02],
                 沈阳: [123.38, 41.8],
                 长春: [125.35, 43.88],
                 银川: [106.27, 38.47],
                 南昌: [115.89, 28.68],
                 西宁: [101.74, 36.56],
                 呼和浩特: [111.65, 40.82],
                 成都: [104.06, 30.67],
                 西安: [108.95, 34.27],
                 重庆: [106.54, 29.59],
                 南京: [118.78, 32.04],
                 贵阳: [106.71, 26.57],
                 北京: [116.46, 39.92],
                 杭州: [120.19, 30.26],
                 济南: [117, 36.65],
                 兰州: [103.73, 36.03],
                 天津: [117.2, 39.13],
                 郑州: [113.65, 34.76],
                 哈尔滨: [126.63, 45.75],
                 石家庄: [114.48, 38.03],
                 长沙: [113, 28.21],
                 合肥: [117.27, 31.86],
                 武汉: [114.31, 30.52]
             };
             var convertData = function (data) {
                 var res = [];
                 for (var i = 0; i < data.length; i++) {
                     var geoCoord = geoCoordMap[data[i].name];
                     if (geoCoord) {
                         res.push({
                             name: data[i].name,
                             value: geoCoord.concat(data[i].value, data[i].test)
                         });
                     }
                 }
                 return res;
             };

             function renderItem(params, api) {
                 var coords = [
                     // [116.7,39.53],
                     // [103.73,36.03],
                     // [112.91,27.87],
                     // [120.65,28.01],
                     // [119.57,39.95]
                 ];
                 var points = [];
                 for (var i = 0; i < coords.length; i++) {
                     points.push(api.coord(coords[i]));
                 }
                 var color = api.visual("color");

                 return {
                     type: "polygon",
                     shape: {
                         points: echarts.graphic.clipPointsByRect(points, {
                             x: params.coordSys.x,
                             y: params.coordSys.y,
                             width: params.coordSys.width,
                             height: params.coordSys.height
                         })
                     },
                     style: api.style({
                         fill: color,
                         stroke: echarts.color.lift(color)
                     })
                 };
             }

             myChart.setOption({
             
                 backgroundColor: "transparent",
                 title: {
                     left: "center",
                     textStyle: {
                         color: "#fff"
                     }
                 },
                 tooltip: {
                     trigger: "item"
                 },
                 bmap: {
                     center: [104.114129, 37.550339],
                    //  center: [116.671604,-5.787646],
                     zoom: 5,
                     roam: true,
                     mapStyle: {
                         styleJson: [
                             {
                                 featureType: "water",
                                 elementType: "all",
                                 stylers: {
                                     color: "#f0f8ff"
                                 }
                             },
                             {
                                 featureType: "land",
                                 elementType: "all",
                                 stylers: {
                                     color: "#DCDCDC"
                                 }
                             },
                             {
                                 featureType: "boundary",
                                 elementType: "geometry",
                                 stylers: {
                                     color: "#DCDCDC" //国家边缘色[隐藏主要国家时的颜色，这个颜色只是针对于中国]
                                 }
                             },
                             {
                                 featureType: "railway",
                                 elementType: "all",
                                 stylers: {
                                     visibility: "off"
                                 }
                             },
                             {
                                 featureType: "highway",
                                 elementType: "geometry",
                                 stylers: {
                                     color: "#FFF5EE",
                                     visibility: "off"
                                 }
                             },
                             {
                                 featureType: "highway",
                                 elementType: "geometry.fill",
                                 stylers: {
                                     color: "#cccccc",
                                     lightness: 1,
                                     visibility: "off"
                                 }
                             },
                             {
                                 featureType: "highway",
                                 elementType: "labels",
                                 stylers: {
                                     visibility: "off"
                                 }
                             },
                             {
                                 featureType: "arterial",
                                 elementType: "geometry",
                                 stylers: {
                                     color: "#fff",
                                     visibility: "off"
                                 }
                             },
                             {
                                 featureType: "arterial",
                                 elementType: "geometry.fill",
                                 stylers: {
                                     color: "#000000"
                                 }
                             },
                             {
                                 featureType: "poi",
                                 elementType: "all",
                                 stylers: {
                                     visibility: "off"
                                 }
                             },
                             {
                                 featureType: "green",
                                 elementType: "all",
                                 stylers: {
                                     color: "#056197",
                                     visibility: "off"
                                 }
                             },
                             {
                                 featureType: "subway",
                                 elementType: "all",
                                 stylers: {
                                     visibility: "off"
                                 }
                             },
                             {
                                 featureType: "manmade",
                                 elementType: "all",
                                 stylers: {
                                     visibility: "off"
                                 }
                             },
                             {
                                 featureType: "local",
                                 elementType: "all",
                                 stylers: {
                                     visibility: "off"
                                 }
                             },
                             {
                                 featureType: "arterial",
                                 elementType: "labels",
                                 stylers: {
                                     // visibility: "off"
                                 }
                             },
                             {
                                 featureType: "boundary",
                                 elementType: "geometry.fill",
                                 stylers: {
                                     color: "#696969"
                                 }
                             },
                             {
                                 featureType: "building",
                                 elementType: "all",
                                 stylers: {
                                     color: "#FFFAF0"
                                 }
                             },
                             {
                                 featureType: "label",
                                 elementType: "all",
                                 stylers: {
                                     visibility: "off"
                                 }
                             }
                         ]
                     }
                 },
                 series: [
                     {
                         // name: "terminal count",
                         type: "scatter",
                         coordinateSystem: "bmap",
                         data: convertData(data),
                         encode: {
                             // value: 2
                             tooltip: [2, 3]
                         },
                         symbolSize: function (val) {
                             if (val[2] < 2) {
                                 return val[2] * 9;
                             } else if (2 == val[2]) {
                                 return val[2] * 5.5;
                             } else if (2 < val[2] < 10) {
                                 return val[2] * 4;
                             } else if (val[2] >= 10) {
                                 return val[2] * 0.6;
                             }
                         },
                         label: {
                             formatter: "{b}",
                             position: "right"
                         },
                         itemStyle: {
                             color: "#0f9eff" //球的颜色
                         },
                         emphasis: {
                             label: {
                                 show: true
                             }
                         }
                     },
                     {
                         type: "custom",
                         coordinateSystem: "bmap",
                         // renderItem: renderItem,
                         itemStyle: {
                             opacity: 0.5
                         },
                         animation: false,
                         silent: true,
                         data: [0],
                         z: -10
                     }
                 ]

             });
             var bmap = myChart.getModel().getComponent('bmap').getBMap();
            }
        },
        created () {
            
        }

    }
</script>

<style lang= "less">

</style>
