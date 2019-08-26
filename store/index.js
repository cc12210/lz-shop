import Vue from 'vue'
import Vuex from 'vuex'
// import VuexPersistence from 'vuex-persist'
Vue.use(Vuex);
// 创建一个vuex持久化对象
// const vuexLocal = new VuexPersistence({
//     storage: window.localStorage,
//     // 对那些模块进行持久化,若不设置,则对所有模块进行持久化
//     // modules: ['index']
// })

//创建一个store仓库
const store = new Vuex.Store({
    //state用来存放数据的对象
    state: {
        //初始值、存放的东西
        // title: '',
        // //资金密码的页面
        // showAside: false,
        // // 登录状态
        // isLogin: false,
        // Token: 'null',
        // refreshToken: 'null',
        // // address资金钱包地址
        // address:'',
        // //用户手机号
        // userPhone:'',
        // // 搜索组件
        // searchCom:false,
        // carInfo:'',
        // showPPW:false,
        // shopNickName:'', //商城昵称
        // userIDCard:{
        //     userName:'',
        //     IDCardNumber:''
        // },//用户身份信息
    },
    //定义取数据
    getters: {
        // title: state => state.title,
        // showAside: state => state.showAside,
        // isLogin: state => state.isLogin,
        // Token: state => state.Token,
        // refreshToken: state => state.refreshToken,
        // address: state => state.address,
        // userPhone: state => state.userPhone,
        // searchCom: state => state.searchCom,
        // showPPW: state => state.showPPW,
        // appId:state=>state.appId,
        // shopNickName:state=>state.shopNickName
    },
    //存数据
    mutations: {
    //     updateTitle: (state, payload) => {
    //         //state.title='新值'
    //         state.title = payload
    //     },

    //     //资金密码
    //     updateShowAside(state) {
    //         state.showAside = !state.showAside;
    //     },
    //     // 登录状态
    //     updateIsLogin: (state, payload) => {
    //         state.isLogin = payload;
    //     },

    //     //登陆token
    //     updateToken: (state, payload) => {
    //         state.Token = payload;
    //     },
    //     // refresh_token
    //     updaterefreshToken: (state, payload) => {
    //         state.refreshToken = payload;
    //     },
    //      // address资金钱包地址
    //     updateAddress: (state, payload) => {
    //         //state.title='新值'
    //         state.address = payload
    //     },
    //     //用户手机
    //     updateIsPhone: (state, payload) => {
    //         //state.title='新值'
    //         state.userPhone = payload
    //     },
    //     //搜索组件
    //     updateSearchCom: (state,payload) => {
    //         //state.title='新值'
    //         state.searchCom = payload
    //     },
    //     updateShowPPW:  (state,payload) => {
    //         state.showPPW = payload
    //     },
    //     updateAppId: (state, appId) => {
    //         //state.title='新值'
    //         state.appId = appId
    //     },
    //     updateShopNickName: (state, shopNickName) => {
    //         //state.title='新值'
    //         state.shopNickName = shopNickName
    //     }
    },

    // 提交mutation
    actions: {
    //     // 可以进行异步操作
    //     updateShowAside({
    //         commit
    //     }, payload) {
    //         commit('updateShowAside',payload);
    //     },
    //     updateIsLogin({
    //         commit
    //     }, payload) {
    //         commit('updateIsLogin', payload);
    //     },
    //     updateToken({
    //         commit
    //     }, payload) {
    //         commit('updateToken', payload);
    //     },
    //     updaterefreshToken({
    //         commit
    //     }, payload) {
    //         commit('updaterefreshToken', payload);
    //     },
    //     updateAddress({
    //         commit
    //     }, payload) {
    //         commit('updateAddress', payload);
    //     },
    //     updateIsPhone({
    //         commit
    //     }, payload) {
    //         commit('updateIsPhone', payload);
    //     },
    //     updateSearchCom({
    //         commit
    //     }, payload) {
    //         commit('updateSearchCom', payload);
    //     },updateShowPPW({
    //         commit
    //     }, payload) {
    //         commit('updateShowPPW', payload);
    //     }
    },
    // 添加持久化对象
    // plugins: [vuexLocal.plugin]
})

export default store;