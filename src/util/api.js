import {
  post,
  get
} from './url.js'
// import { PassThrough } from 'stream';

export default {
  //用户注册
  verificationCodes(params){
    return post('/api/api/member/verificationCodes',params)
  },
  // // 短信码注册用户
  users(params){
    return post('/api/api/member/users',params)
  },
  // // 登录
  authorizations(params){
    return post('/api/api/member/authorizations',params)
  },
  //找回密码短信
  retrievepassword(params){
    return post('/api/api/member/retrievepassword',params)
  },
  // 用户找回密码短信验证  /api/member/checkpasswordsms
  checkpasswordsms(params){
    return post ('api//api/member/checkpasswordsms',params)
  },
  // 确认修改密码 
  changepassword(params){
    return post('api/api/member/changepassword',params)
  },
  // token拉取用户信息 /api/user/
  tokenUser(params){
    return get('api/api/user/',params)
  },
  //基本信息 /api/user/upinfodata
  upinfodata(params){
    return post('api/api/user/upinfodata',params)
  },
  upimg(params){
    return post('api/admin/upimg',params)
  }

}
