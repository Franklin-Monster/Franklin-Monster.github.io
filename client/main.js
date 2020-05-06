import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'default-passive-events';
import store from './store'
import fun from './global/fun'
import Axios from './global/httpConfig'
Vue.prototype.$axios = Axios

Vue.use(ElementUI);
//使用自定义函数
Vue.use(fun)
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
