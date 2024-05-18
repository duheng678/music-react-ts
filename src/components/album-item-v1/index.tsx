import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { ItemV1Wrapper } from './style'
import { getImageSize } from '@/utils/handle-img-url'

interface IProps {
  children?: ReactNode
  itemData: any
}

const AlbumItemV1: FC<IProps> = (props) => {
  const { itemData } = props

  return (
    <ItemV1Wrapper>
      <div className="album-image">
        <img src={getImageSize(itemData.picUrl, 120)} alt="" />
        <a className="cover sprite_cover">{itemData.name}</a>
      </div>
      <div className="album-info">
        <div className="name">{itemData.name}</div>
        <div className="artist">{itemData.artist.name}</div>
      </div>
    </ItemV1Wrapper>
  )
}

export default memo(AlbumItemV1)
