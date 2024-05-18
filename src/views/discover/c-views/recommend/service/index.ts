import request from '@/service'
export function getBanners() {
  return request.get({ url: '/banner' })
}
// 热门推荐
export function getHotRecommend() {
  return request.get({
    url: '/personalized'
  })
}
//新碟上架
export function getNewAlbum(offset = 0, limit = 10) {
  return request.get({
    url: '/album/new',
    params: {
      offset,
      limit
    }
  })
}
