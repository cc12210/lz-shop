/**
* @file 统一功能型代码
* @author zhangjie
*/

// import regexp from '@/constants/regexp';

// 类型判断函数
export const getType = v => Object.prototype.toString.call(v);

export const isArray = v => getType(v) === '[object Array]';

export const isObject = v => getType(v) === '[object Object]';

// 睡眠函数
export const sleep = time => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time);
    });

// 拷贝函数
export const merge = (...rest) => {
    let target = rest[0] || {};
    let src;
    let copy;
    let clone;
    let i = 1;
    let deep = false;
    if (typeof target === 'boolean') {
        deep = target;
        target = rest[1] || {};
        i++;
    }
    for (; i < rest.length; i++) {
        let option = rest[i];
        for (let name in option) {
            src = target[name];
            copy = option[name];
            if (deep && copy && typeof copy === 'object') {
                if (isArray(copy)) {
                    clone = src && isArray(src) ? src : [];
                } else {
                    clone = src && isObject(src) ? src : {};
                }
                target[name] = merge(clone, copy);
            } else if (copy !== undefined) {
                target[name] = copy;
            }
        }
    }
    return target;
};

// 对象解析为请求字符串
export const parseToUrl = param => {
    let ret = '';
    Object.keys(param).forEach(item => {
        if (item) {
            let val = typeof param[item] === 'object' ? JSON.stringify(param[item]) : param[item];
            ret += encodeURIComponent(item) + '=' + encodeURIComponent(val) + '&';
        }
    });
    return ret.slice(0, ret.length - 1);
};

// 节流函数
export const throttle = (fn, delay) => {
    let timer = null;
    return () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn();
        }, delay);
    };
};

// 设备判断
export const isMobile = () => {
    let userAgentInfo = navigator.userAgent;
    let Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
    let flag = false;
    for (let v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = true;
            break;
        }
    }
    return flag;
};

// 获取 cookie
export const getCookie = name => {
    let arr = document.cookie.split(';');
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i].split('=');
        if (temp[0].trim() === name) {
            return unescape(temp[1]);
        }
    }
};

// 验证
// export const validate = (val, name) => regexp[name].test(val);

// 将一个类数组对象转换成数组
export const toArray = (list, start) => {
    start = start || 0;
    let i = list.length - start;
    let ret = new Array(i);
    while (i--) {
        ret[i] = list[i + start];
    }
    return ret;
};