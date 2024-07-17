import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { AnchorWrapper } from './style'
import SectionHeaderV2 from '@/components/section-header-v2'

interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = () => {
  return (
    <AnchorWrapper>
      <SectionHeaderV2 title="热门主播" />
    </AnchorWrapper>
  )
}

export default memo(HotRecommend)
