import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { ItemV1Wrapper } from './style'
import { Link } from 'react-router-dom'

interface IProps {
  children?: ReactNode
  info: any
}

const SectionItemV1: FC<IProps> = (props) => {
  const { info } = props
  return (
    <ItemV1Wrapper>
      <div className="cover-top">
        <img src={info.picUrl} alt="" />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="sprite_icon headset"></i>
              {info.playCount}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom">
        <Link to={`/discover/playlist?id=${info.id}`}>{info.name}</Link>
      </div>
    </ItemV1Wrapper>
  )
}

export default memo(SectionItemV1)
