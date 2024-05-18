import React, { memo, useRef } from 'react'
import type { FC, ReactNode, ElementRef } from 'react'
import { AlbumWrapper } from './style'
import SectionHeaderV1 from '@/components/section-header-v1'
import { shallowEqualApp, useAppSelector } from '@/store'
import { Carousel } from 'antd'
import AlbumItemV1 from '@/components/album-item-v1'

interface IProps {
  children?: ReactNode
}

const NewAlbum: FC<IProps> = () => {
  const albumRef = useRef<ElementRef<typeof Carousel>>(null)
  const { newAlbum } = useAppSelector(
    (state) => ({
      newAlbum: state.recommend.newAlbum
    }),
    shallowEqualApp
  )
  const headerInfo = {
    title: '新碟上架',
    morePath: '/discover/album'
  }

  return (
    <AlbumWrapper>
      <SectionHeaderV1 {...headerInfo}></SectionHeaderV1>
      <div className="content">
        <div className="arrow arrow-left sprite_02" onClick={() => albumRef.current?.prev()}></div>
        <div className="album">
          <Carousel ref={albumRef} speed={1500}>
            {[0, 1].map((item) => {
              return (
                <div className="page" key={item}>
                  {newAlbum.slice(item * 5, (item + 1) * 5).map((item) => {
                    return <AlbumItemV1 key={item.id} itemData={item} />
                  })}
                </div>
              )
            })}
          </Carousel>
        </div>
        <div className="arrow arrow-right sprite_02" onClick={() => albumRef.current?.next()}></div>
      </div>
    </AlbumWrapper>
  )
}

export default memo(NewAlbum)
