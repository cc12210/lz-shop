import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '../store'
import filters from './util/filters'
import * as tool from './util/tool'
Vue.config.productionTip = false
import components from './components'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/iconfont/iconfont.css'
import './assets/iconfont/iconfont.js'
import axios from 'axios'

import VueAxios from 'vue-axios' 
import { post, get, patch, put, del } from './util/url.js'
import { baseURL} from './util/url.js'
// import api from '@/util/ureApi'
// import api from '@/js/API'
Vue.use(VueAxios, axios)
import api from './util/api.js'

// Vue.prototype.$post = post;
// Vue.prototype.$ajax = axios
// Vue.prototype.ajaxUrl = baseURL


// Vue.prototype.$api = api
// 注册全局过滤器
Object.keys(filters).forEach(key => {  
  Vue.filter(key, filters[key])  
})
Vue.prototype.$post = post;
Vue.prototype.$get = get;
Vue.prototype.$patch = patch;
Vue.prototype.$put = put;
Vue.prototype.$delete = del;
Vue.prototype.$ajax = axios
Vue.prototype.$api = api;
Vue.prototype.ajaxUrl = baseURL


// axios.defaults.baseURL='http://47.106.240.143/api/member/users'
// axios.defaults.headers['Content-Type'] = 'application/form-data'

// 注册全局组件
Vue.use(components);
Vue.use(ElementUI);
// tool工具添加
Vue.prototype._ = tool;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
