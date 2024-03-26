import DHRequest from './request'
import { BASE_URL, TIME_OUT } from './config'
const dhRequest = new DHRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // console.log('config', config)

      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      console.log('res', res)

      return res
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})
export default dhRequest
