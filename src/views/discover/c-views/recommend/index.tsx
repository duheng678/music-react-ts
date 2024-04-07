import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppSelector, useAppDispatch } from '@/store'
import { fetchBannerDataAction } from './store'
interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerDataAction())
  }, [])
  const { banners } = useAppSelector((state) => ({
    banners: state.recommend.banners
  }))
  console.log(banners)

  return <div>fgd</div>
}

export default memo(Recommend)
