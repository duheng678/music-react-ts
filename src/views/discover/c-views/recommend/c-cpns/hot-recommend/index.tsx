import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RecommendWrapper } from './style'
import SectionHeaderV1 from '@/components/section-header-v1'
import SectionItemV1 from '@/components/section-item-v1'
import { useNavigate } from 'react-router-dom'
import { useAppSelector, shallowEqualApp } from '@/store'

interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = () => {
  const navigate = useNavigate()

  const { hotRecommend } = useAppSelector(
    (state) => ({
      hotRecommend: state.recommend.hotRecommend
    }),
    shallowEqualApp
  )
  //歌单header数据
  const headerInfo = {
    keywords: ['华语', '流行', '摇滚', '民谣', '电子'],
    title: '热门推荐',
    morePath: '/discover/playlist'
  }
  const goOtherPage = (cat?: string) => {
    const param = cat ? `?cat=${cat}` : ''
    navigate(`/discover/playlist${param}`)
  }
  return (
    <RecommendWrapper>
      <SectionHeaderV1 goOtherPage={goOtherPage} {...headerInfo} />
      <div className="recommend-list">
        {hotRecommend.slice(0, 8).map((item) => {
          return <SectionItemV1 info={item} key={item.id} />
        })}
      </div>
    </RecommendWrapper>
  )
}

export default memo(HotRecommend)
