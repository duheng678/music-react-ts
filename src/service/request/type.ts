import type {
  CreateAxiosDefaults,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
  AxiosResponse
} from 'axios'
export interface DHRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (err: any) => any
}
export interface DHRequestInterceptors<T = AxiosResponse> extends CreateAxiosDefaults {
  interceptors?: DHRequestInterceptors<T>
}
export interface DHRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: DHRequestInterceptors<T>
}
