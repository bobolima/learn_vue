import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
Vue.use(ElementUI);

/* 支持全局事件 */
const bus = new Vue()
Vue.prototype.$bus = bus

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
