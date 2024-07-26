import request from '@/service'

export const getSongUrl = (id: number) => {
  return request.get({
    url: '/song/url/v1',
    params: {
      id
    }
  })
}
