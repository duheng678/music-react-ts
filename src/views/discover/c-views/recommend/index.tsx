import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import dhRequest from '@/service'

interface IProps {
  children?: ReactNode
}
interface IBanner {
  imageUrl: string
  targetId: number
  adid: any
  targetType: number
  titleColor: string
  typeTitle: string
  url: any
  exclusive: boolean
  monitorImpress: any
  monitorClick: any
  monitorType: any
  monitorImpressList: any
  monitorClickList: any
  monitorBlackList: any
  extMonitor: any
  extMonitorInfo: any
  adSource: any
  adLocation: any
  adDispatchJson: any
  encodeId: string
  program: any
  event: any
  video: any
  song: any
  scm: string
  bannerBizType: string
}

const Recommend: FC<IProps> = () => {
  const [banners, setBanners] = useState<IBanner[]>([])
  useEffect(() => {
    dhRequest
      .request({
        url: '/banner',
        method: 'GET'
      })
      .then((res: any) => {
        console.log(res)
        setBanners(res.banners)
      })
  }, [])

  return (
    <div>
      {banners.map((item, index) => {
        return <div key={index}>{item?.imageUrl}</div>
      })}
    </div>
  )
}

export default memo(Recommend)
