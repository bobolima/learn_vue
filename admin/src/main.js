import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入element ui组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 引入axios请求组件
import axios from './axios/axios'
Vue.prototype.$axios = axios

Vue.config.productionTip = false

Vue.use(ElementUI)

// 导入mock.js
import './mock/mock.js'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
