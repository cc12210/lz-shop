import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// import userCenter from './views/userCenter.vue'
// import header from '/components/header.vue'
// import login from './views/login.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home,
      // children:{
      //   path:'/header.vue',
      //   name:'header.vue',
      //   component: () => import('./components/header.vue')
      // }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login.vue')
    },
    {
      path: '/userCenter',
      name: 'userCenter',
      component: () => import('./views/user_center/userCenter.vue'),
      children: [
        {
          path: '/',
          name: 'homePage',
          component: () => import('./views/user_center/homePage.vue')
  
  
        },
        {
        path: 'myOrder',
        name: 'myOrder',
        component: () => import('./views/user_center/myOrder.vue')


      },
    ]
    }
  ]
})