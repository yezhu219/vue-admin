import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import qs from 'qs'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

// 配置公共路由
axios.defaults.baseURL = 'http://127.0.0.11:5000'
// 配置post格式数据转换
axios.defaults.transformRequest = [function (data) {
  return qs.stringify(data)
}]
Vue.prototype.$axios = axios

Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
