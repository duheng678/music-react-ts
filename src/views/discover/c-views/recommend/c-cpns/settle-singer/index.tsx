import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SingerWrapper } from './style'
import { useAppSelector } from '@/store'
import { getImageSize } from '@/utils/handle-img-url'
import SectionHeaderV2 from '@/components/section-header-v2'

interface IProps {
  children?: ReactNode
}

const SettleSinger: FC<IProps> = () => {
  const { settleSingers } = useAppSelector((state) => ({
    settleSingers: state.recommend.settleSingers
  }))
  return (
    <SingerWrapper>
      <SectionHeaderV2 title="入驻歌手" more="查看全部" morePath="/discover/artist/" />
      <div className="singer-list">
        {settleSingers.map((item) => {
          return (
            <a href="/singer" key={item.id} className="item">
              <img src={getImageSize(item.img1v1Url, 62)} alt="" />
              <div className="info">
                <div className="singer">{item.name}</div>
                <div className="desc">{item.alias.join('') || item.name}</div>
              </div>
            </a>
          )
        })}
      </div>
      <div className="apply-for">
        <a href="">申请成为网易音乐人</a>
      </div>
    </SingerWrapper>
  )
}

export default memo(SettleSinger)
