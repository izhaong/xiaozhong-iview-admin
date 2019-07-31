import axios from 'axios'
import {
  baseURL
} from '@/config'
import { getToken } from '@/lib/util'
class HttpRequest {
  constructor (baseURL = baseURL) {
    this.baseURL = baseURL
    this.queue = {} // 队列中有请求时 显示loadong界面, 反之同理
  }
  getInsideConfig () {
    const config = {
      baseURL: this.baseURL,
      header: {
        //
      }
    }
    return config
  }
  // 全局响应拦截器
  interceptors (instance, url) {
    instance.interceptors.request.use(config => { // 请求拦截器
      // 添加全局的loading...
      // Spin.show() ---遮罩组件
      // 队列中有请求时 显示loadong界面, 反之同理
      if (!Object.keys(this.queue).length) {
        // Spin.show()
      }
      this.queue[url] = true
      config.headers['Authorization'] = getToken()
      return config
    }, error => {
      return Promise.reject(error)
    })

    instance.interceptors.response.use(res => { // 响应拦截器, res为服务端返回数据
      delete this.queue[url]
      const {
        data
      } = res
      return data
    }, error => {
      delete this.queue[url]
      return Promise.reject(error)
    })
  }
  request (options) {
    // console.log(options) // {url: "/userinfo", method: "get"}
    const instance = axios.create()

    // 合并为一个对象, 如果有相同的key值 后者覆盖前者
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}

export default HttpRequest
