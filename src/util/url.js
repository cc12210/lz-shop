import axios from 'axios';
import { Toast } from 'vant';
import store from '@/store';//仓库
import router from '@/router'
axios.defaults.timeout = 10000;
//开始loading，export导出去
export const loadingBegin = () => {
    Toast.loading({
        duration: 0, // 持续展示 toast
        forbidClick: true, // 禁用背景点击
        loadingType: 'spinner',
        message: '努力加载中'
    });

}
//关闭loading
export const loadingFinish = () => {
    Toast.clear();
}
//http request 拦截器 请求拦截（配置发送请求的信息）
axios.interceptors.request.use(config => {
    // 处理请求之前的配置
    let Token = window.localStorage.getItem('Token');
    // let localAppId = window.localStorage.getItem('appId');
    if (Token) {
        config.headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + Token,
        
        }
    } else {
        config.headers = {
            'Content-Type': 'application/json',
        }
    }
    return config;
}, error => {
    Toast.clear();
    // console.log('请求拦截器err',Promise.reject(error))
    return Promise.reject(error);
}
);


//http response 拦截器 响应拦截（配置请求回来的信息）
axios.interceptors.response.use(response => {
    // console.log('res拦截器success',Promise.resolve(response))
    Toast.clear();
    // 处理响应数据
    if (response.data.code == 3426) {
        Toast.fail(response.data.message);
    } else if (response.data.code == 1000 || response.data.code == 1001) {
        window.localStorage.setItem("Token", "");
        store.dispatch("updateIsLogin", false);
        store.dispatch("updateIsPhone", "");
        store.dispatch("updateToken", "");
        // store.dispatch("updaterefreshToken", "");
        store.dispatch("updateAddress", "");
        router.push('/');

    }
    return response;
}, error => {
    // 处理响应失败
    // console.log('res拦截器error',Promise.reject(error))
    if (error.response.code == 1000 || error.response.code == 1001) {
        window.localStorage.setItem("Token", "");
        // store.dispatch("updateIsLogin", false);
        // store.dispatch("updateIsPhone", "");
        // store.dispatch("updateToken", "");
        // // store.dispatch("updaterefreshToken", "");
        // store.dispatch("updateAddress", "");
        router.push('/');
    } else if (error.response.status == 401) {
        window.localStorage.setItem("Token", "");
        // store.dispatch("updateIsLogin", false);
        // store.dispatch("updateIsPhone", "");
        // store.dispatch("updateToken", "");
        // // store.dispatch("updaterefreshToken", "");
        // store.dispatch("updateAddress", "");
        router.push('/');
    }

    
    return Promise.reject(error)
}
)


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        })
            .then(response => {

                resolve(response.data);
            })
            .catch(err => {
                reject(err)
            })
    })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, data)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err)
            })
    })
}

/**
* 封装patch请求
* @param url
* @param data
* @returns {Promise}
*/

export function patch(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.patch(url, data)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err)
            })
    })
}

/**
* 封装put请求
* @param url
* @param data
* @returns {Promise}
*/

export function put(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.put(url, data)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err)
            })
    })
}

/**
* 封装delete请求
* @param url
* @param data
* @returns {Promise}
*/
export function del(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.delete(url, {
            params: params
        })
            .then(response => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err)
            })
    })
}

export const AppId = window.localStorage.getItem('appId');
export const baseURL = axios.defaults.baseURL
export const payUrl = {
    alipay: `${axios.defaults.baseURL}/mall/user/order/pay/alipay/trade/wap/pay`,
    wxPay: `${location.origin + location.pathname}wxPay.html`
}