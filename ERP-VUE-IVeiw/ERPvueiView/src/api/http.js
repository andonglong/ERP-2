'use strict'

import axios from 'axios'
import qs from 'qs'
import iView from 'iview'

// axios 配置
axios.defaults.baseURL = process.env.BASE_URL
// axios.defaults.baseURL = 'http://192.168.1.65:8080';
// axios.defaults.baseURL = 'http://192.168.18.201:8080';
// axios.defaults.baseURL = 'http://192.168.18.207:8080';

axios.defaults.timeout = 5000

// 请求拦截器
axios.interceptors.request.use(config => {
  console.log('请求拦截器 正常')
  console.log(config)
  // loading
  if (sessionStorage.getItem('token') !== undefined) { // 判断是否存在token，如果存在的话，则每个http header都加上token
    config.headers.sessid_id = sessionStorage.getItem('token')
  }
  return config
}, error => {
  console.log('请求拦截器 错误')
  return Promise.reject(error)
})

//  返回状态判断(添加响应拦截器)     拦截器的Promise.reject 会使 axios的catch函数接收的到
axios.interceptors.response.use(res => {
  console.log('响应拦截器 正常')
  console.log(res)
  // 对响应数据做些事
  if (res.data.code != 200) {
    //  服务器端返回错误
    return Promise.reject(res)
  }
  return res
}, error => {
  console.log('响应拦截器 错误')
  console.log(error)
  // if (error.response.status === 401) {
  //   // 401 说明 token 验证失败
  //   // 可以直接跳转到登录页面，重新登录获取 token
  //   location.href = '/login'
  // } else {
  //   // do something
  // }
  // 返回 response 里的错误信息
  error = {
    status: -404,
    msg: '网络异常'
  }
  return Promise.reject(error)
})

// function setCookie(name, value, expiredays) {
//   var exdate = new Date()
//   exdate.setDate(exdate.getDate() + expiredays)
//   document.cookie = name + '=' + escape(value) + ((expiredays == null) ? '' : ';expires=' + exdate.toGMTString())
// }

export default {
  post(url, params) {
    return axios({
      method: 'post',
      url,
      data: qs.stringify(params),
      timeout: 10000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).then(response => {
      return response
    }).catch(error => {
      iView.Message.error(error.msg)
    })
  },
  get(url, params) {
    return axios({
      method: 'get',
      url,
      params, // get 请求时带的参数
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(response => {
      return response
    }).catch(error => {
      // console.log('接口错误')
      iView.Message.error(error.msg)
    })
  }
}
