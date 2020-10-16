/*
 * @Author: jacob
 * @Date: 2020-10-13 10:38:42
 * @LastEditTime: 2020-10-16 17:17:53
 * @LastEditors: jacob
 * @Description: 项目打包文件入口
 */
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import vuescroll from 'vuescroll';
import 'vuescroll/dist/vuescroll.css';
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(vuescroll);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
