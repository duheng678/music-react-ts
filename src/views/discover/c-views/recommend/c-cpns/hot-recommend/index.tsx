import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RecommendWrapper } from './style'
import SectionHeaderV1 from '@/components/section-header-v1'

interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = () => {
  // const keywords = ['华语', '流行', '摇滚', '民谣', '电子']
  // const title = '热门推荐'
  // const morePath = '/discover/playlist'
  const headerInfo = {
    keywords: ['华语', '流行', '摇滚', '民谣', '电子'],
    title: '热门推荐',
    morePath: '/discover/playlist'
  }
  return (
    <RecommendWrapper>
      <SectionHeaderV1 {...headerInfo} />
    </RecommendWrapper>
  )
}

export default memo(HotRecommend)
