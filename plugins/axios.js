/**
 * 用于koa服务器内部请求
 */

import Axios from 'axios'
import md5 from '~/libs/md5'
import { Message } from 'iview'

// 环境变量
const env = process.env.NODE_ENV || 'development'

let baseUrl = {
  development: 'http://localhost:8086',
  test: 'https://test.domain.com',
  production: 'http://blog.houlahoula.com:8086'
}

// axios 配置
let options = {
  baseURL: baseUrl[env],
  timeout: 5000,
  responseType: 'json',

}
// 创建实例
let axios = Axios.create(options)

/**
 * 签名加密
 * @param  {Object} params 加密参数
 * @return string        加密结果
 */
const doSign = (data, signkey) => {
  let keys = Object.keys(data)
  // 这里写所需要的规则
  keys = keys.sort()
  let signstr = ''
  for (let i = 0; i < keys.length; i++) {
    signstr += keys[i] + '=' + data[keys[i]]
  }
  return md5(signstr + signkey)
}

/**
 * 获取url中的参数
 * @param  {String} url url地址
 * @return {Object}
 */
const getUrlParam = url => {
  if (typeof url === 'undefined') return false
  let params = {}
  let name, value
  let pos = url.indexOf('?')
  // 取得所有参数   stringvar.substr(start [, length ]
  url = url.substr(pos + 1)
  // 各个参数放到数组里
  let arr = url.split('&')
  for (let i = 0; i < arr.length; i++) {
    pos = arr[i].indexOf('=')
    if (pos > 0) {
      name = arr[i].substring(0, pos)
      value = arr[i].substr(pos + 1)
      params[name] = value
    }
  }
  let keys = Object.keys(params)
  return keys.length > 0 ? params : false
}

// 请求拦截器
axios.interceptors.request.use(function (config) {

  // config.data = qs.stringify(config.data)
  // console.log(config.data)
  return config
}, function (error) {
  return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use(
  res => {
    if (res.status && res.status === 200 && res.data.status === 'error') {
      return
    }
    return res
  },
  err => {
    try {
      // console.log('axios.interceptors.response.', err)
      if (err.response.status !== 200) {
        if (process.client) {
          Message.error(err.response.data.msg || '')
        }
      }
      /* if (process.client) {
          console.log('error by client')
        } else {
          console.log('error by server')
        } */
      return Promise.resolve(err.response)
    } catch (e) {
      if (process.client) {
        Message.error('系统性错误')
        console.info(e)
      }
    }
  }
)

export default axios
