import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import filters from './util/filters'
import * as tool from './util/tool'
Vue.config.productionTip = false
import components from './components'
// 注册全局过滤器
Object.keys(filters).forEach(key => {  
  Vue.filter(key, filters[key])  
}) 
// 注册全局组件
Vue.use(components);
// tool工具添加
Vue.prototype._ = tool;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
