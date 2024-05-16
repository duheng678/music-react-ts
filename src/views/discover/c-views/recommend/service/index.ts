import request from '@/service'
export function getBanners() {
  return request.get({ url: '/banner' })
}

export function getHotRecommend() {
  return request.get({
    url: '/personalized'
  })
}
