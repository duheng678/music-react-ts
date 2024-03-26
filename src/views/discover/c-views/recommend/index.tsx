import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import dhRequest from '@/service'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  useEffect(() => {
    dhRequest
      .request({
        url: '/banner',
        method: 'GET',
        interceptors: {
          requestInterceptor: (config) => {
            console.log('self', config)
            return config
          }
        }
      })
      .then((res: any) => {
        console.log(res)
      })
  }, [])

  return <div>Recommend</div>
}

export default memo(Recommend)
