import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppDispatch } from '@/store'
import { fetchRecommendDataAction } from './store'
import TopBanner from './c-cpns/top-banner'
import { RecommendWrapper, RecommendSection, RecommendLeft, RecommendRight } from './style'
import UserLogin from './c-cpns/user-login'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'
interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchRecommendDataAction())
  }, [])

  return (
    <RecommendWrapper>
      <TopBanner />
      <RecommendSection className="wrap-v2">
        <RecommendLeft>
          <HotRecommend />
          <NewAlbum />
        </RecommendLeft>
        <RecommendRight>
          <UserLogin />
        </RecommendRight>
      </RecommendSection>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
