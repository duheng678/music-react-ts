import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { DHRequestInterceptors, DHRequestConfig } from './type'

class DHRequest {
  instance: AxiosInstance
  interceptors?: DHRequestInterceptors
  constructor(config: DHRequestInterceptors) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.setupInterceptors()
    // 针对特定的hyRequest实例添加拦截器
    this.setupCustomInterceptors()
  }
  //所有实例都有的拦截器
  setupInterceptors() {
    this.instance.interceptors.request.use(
      (config) => {
        // loading/token
        console.log('all', config)

        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        return res.data
      },
      (err) => {
        return err
      }
    )
  }
  //特定实例的拦截器
  setupCustomInterceptors() {
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
  }

  request<T>(config: DHRequestConfig<T>) {
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config as any)
    }
    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
  get<T = any>(config: DHRequestConfig<T>) {
    return this.request({ ...config, method: 'GET' })
  }
  post<T = any>(config: DHRequestConfig<T>) {
    return this.request({ ...config, method: 'POST' })
  }
  delete<T = any>(config: DHRequestConfig<T>) {
    return this.request({ ...config, method: 'DELETE' })
  }
  patch<T = any>(config: DHRequestConfig<T>) {
    return this.request({ ...config, method: 'PATCH' })
  }
}

export default DHRequest
