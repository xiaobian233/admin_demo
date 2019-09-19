import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import axios from "axios"
//element 
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import DonMessage from "./static/modification"
Vue.use(ElementUI);
//取消多次弹框
Vue.prototype.$message = new DonMessage()

//使用axios
Vue.prototype.$axios = axios

//vue-echarts
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'
Vue.component('chart', ECharts)

//echarts
import myCharts from "./static/echarts"
Vue.use(myCharts)

Vue.config.productionTip = false   //取消生产提示
const bus = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export {bus}

