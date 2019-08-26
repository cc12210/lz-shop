import axios from 'axios'; 
  // 设置公共请求头
 const init = function () {
    let url = "http://47.106.240.143/api/api/member/users" 
    let arr = []
    let obj = {} // 预封装集合
   arr = url.split('&') // 对参数切割处理  在封装
    arr.forEach(l => {
      l = l.split('=')
     obj[l[0]] = l[1]
   })
   // 具体有哪些参数看你们后台定义了哪些  下面的参数有 osType、deviceId、deviceChannel、language .....
  axios.defaults.headers.common['deviceChannel'] = 'gclife_bmp_pc';
   axios.defaults.headers.common['language'] = window.localStorage.defaultLanguage;
   if (obj.osType) {  // 有则赋值  
     axios.defaults.headers.common['osType'] = obj.osType
  } else {  // 没有则为空   或者默认看后台需求
     axios.defaults.headers.common['osType'] = ''
   }
  if (obj.deviceId) {
    axios.defaults.headers.common['deviceId'] = obj.deviceId
  } else {
    axios.defaults.headers.common['deviceId'] = ''
  }
 }
export default {
   init
}