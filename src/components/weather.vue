<!--
 * @Author: jacob
 * @Date: 2020-11-26 11:02:47
 * @LastEditTime: 2020-11-26 14:40:19
 * @LastEditors: jacob
 * @Description:天气控件
-->
<template>
 <div class="watherBox">
    <!-- <div id="weather-v2-plugin-standard"></div> -->
    <div id="weather-v2-plugin-simple"></div>
 </div>
</template>

<script>


export default {
    created() {
        window.WIDGET = {
             CONFIG: {
                "modules": "01234",
                "background": 1,
                "tmpColor": "FFFFFF",
                "tmpSize": 16,
                "cityColor": "FFFFFF",
                "citySize": 16,
                "aqiSize": 16,
                "weatherIconSize": 24,
                "alertIconSize": 18,
                "padding": "10px 10px 10px 10px",
                "shadow": "1",
                "language": "auto",
                "borderRadius": 5,
                "fixed": "false",
                "vertical": "middle",
                "horizontal": "center",
                "key": "ydknvreB00"
            }
        };   // 将WIDGET前边加上window 否则读取不到此变量
        (function (d) {
            var c = d.createElement('link')
            c.rel = 'stylesheet'
            c.href = 'https://apip.weatherdt.com/simple/static/css/weather-simple.css?v=2.0'
            var s = d.createElement('script')
            s.src = 'https://apip.weatherdt.com/simple/static/js/weather-simple.js?v=2.0'
            var sn = d.getElementsByTagName('script')[0]
            sn.parentNode.insertBefore(c, sn)
            sn.parentNode.insertBefore(s, sn)
            })(document)
    }
}
</script>

<style lang ="less">
    .watherBox {
        width: 28%;
        float: left;
        margin-left: 1%;
    }
</style>