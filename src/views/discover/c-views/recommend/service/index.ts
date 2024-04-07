import request from '@/service'
export function getBanners() {
  return request.get({ url: '/banner' })
}
