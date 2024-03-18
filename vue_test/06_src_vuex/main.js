import Vue from 'vue'
import App from './App.vue'
import store from './store'

/* 支持全局事件 */
const bus = new Vue()
Vue.prototype.$bus = bus

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
