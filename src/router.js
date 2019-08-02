import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// import login from './views/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/loginLayout',
      name: 'loginLayout',
      redirect: '/loginLayout/login',
      component: () => import('./views/layout/loginLayout.vue'),
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('./views/login.vue')
        },
      ]
    },
  ]
})
