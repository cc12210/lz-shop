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
      children:[
        {
          path: 'businessCenter',
          name: 'businessCenter',
          redirect: '/businessCenter/businessHome',
          component: () => import('./views/businessCenter/index.vue'),
          children: [
            {
              path: 'businessHome',
              name: 'businessHome',
              component: () => import('./views/businessCenter/businessHome.vue')
            },
            {
              path: 'businessInfo',
              name: 'businessInfo',
              component: () => import('./views/businessCenter/businessInfo.vue')
            },
            {
              path: 'businessSkill',
              name: 'businessSkill',
              component: () => import('./views/businessCenter/businessSkill.vue')
            },
            {
              path: 'authenticationName',
              name: 'authenticationName',
              component: () => import('./views/businessCenter/authenticationName.vue')
            },
          ]
        }
      ]
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
          component: () => import('./views/login.vue'),
          meta: {title: '欢迎登录'}
        },
        {
          path: 'bindAccount',
          name: 'bindAccount',
          component: () => import('./views/bindAccount.vue'),
          meta: {title: '欢迎登录'}
        },
        {
          path: 'retrievePsd',
          name: 'retrievePsd',
          component: () => import('./views/retrievePassword.vue'),
          meta: {title: '找回密码'}
        },
      ]
    },
    // 雇主中心展示页
    {
      path: '/userCenter',
      name: 'userCenter',
      component: () => import('./views/user_center/userCenter.vue'),     
      children: [
        {
          // 雇主中心首页
          path: '/',
          name: '/homePage',
          component: () => import('./views/user_center/homePage.vue'),
        
  
        },
        // 账户余额
        {
          path: 'myDeposit',
          name: 'myDeposit',
          component: () => import('./views/user_center/myDeposit.vue'),
        },
                // 我的订单
        {
          path: 'myOrder',
          name: 'myOrder',
          component: () => import('./views/user_center/myOrder.vue'),
        },
        // 我的评价
        {
          path: 'myEvaluate',
          name: 'myEvaluate',
          component: () => import('./views/user_center/myEvaluate.vue'),
        },
        // 我的发票
        {
          path: 'myInvoice',
          name: 'myInvoice',
          component: () => import('./views/user_center/myInvoice.vue'),
        },
         // 我的退款
         {
          path: 'myRefund',
          name: 'myRefund',
          component: () => import('./views/user_center/myRefund.vue'),
        },
        // 基本资料
        {
          path: 'myData',
          name: 'myData',
          component: () => import('./views/user_center/myData.vue'),
        },
         // 银行卡管理
         {
          path: 'myBank',
          name: 'myBank',
          component: () => import('./views/user_center/myBank.vue'),
        },
         // 实名认证
         {
          path: 'realName',
          name: 'realName',
          component: () => import('./views/user_center/realName.vue'),
        },
          // 修改绑定手机
          {
            path: 'revisionPhone',
            name: 'revisionPhone',
            component: () => import('./views/user_center/revisionPhone.vue'),
          },
           // 修改登录密码
           {
            path: 'revisionPass',
            name: 'revisionPass',
            component: () => import('./views/user_center/revisionPass.vue'),
          },
           // 我发布的线索
           {
            path: 'myThread',
            name: 'myThread',
            component: () => import('./views/user_center/myThread.vue'),
          },
           // 交易消息
           {
            path: 'tradeNews',
            name: 'tradeNews',
            component: () => import('./views/user_center/tradeNews.vue'),
          },
           // 系统消息
           {
            path: 'systemNews',
            name: 'systemNews',
            component: () => import('./views/user_center/systemNews.vue'),
          },
    ]
    }
  ]
})