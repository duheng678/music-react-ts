import request from '@/service'

export const getSongUrl = (id: number) => {
  return request.get({
    url: '/song/url/v1',
    params: {
      id
    }
  })
}
// 获取歌曲详情
export const getSongDetail = (ids: number) => {
  return request.get({
    url: '/song/detail',
    params: {
      ids
    }
  })
}
// 获取歌词
export const getSongLyric = (id: number) => {
  return request.get({
    url: '/lyric',
    params: {
      id
    }
  })
}
