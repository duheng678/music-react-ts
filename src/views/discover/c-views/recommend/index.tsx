import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppDispatch } from '@/store'
import { fetchBannerDataAction } from './store'
import TopBanner from './c-cpns/top-banner'
import { RecommendWrapper, RecommendSection, RecommendLeft, RecommendRight } from './style'
interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerDataAction())
  }, [])

  return (
    <RecommendWrapper>
      <TopBanner />
      <RecommendSection>
        <RecommendLeft></RecommendLeft>
        <RecommendRight></RecommendRight>
      </RecommendSection>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
