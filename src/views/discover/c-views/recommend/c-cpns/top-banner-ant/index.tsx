import React, { memo, useRef, useState } from 'react'
import type { FC, ReactNode, ElementRef } from 'react'
import { RightWrapper, BannerWrapper, LeftWrapper, ControlWrapper } from './style'
import { shallowEqualApp, useAppSelector } from '@/store'
import { Carousel } from 'antd'
import classNames from 'classnames'
interface IProps {
  children?: ReactNode
}

const TopBanner: FC<IProps> = () => {
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowEqualApp
  )
  // 事件处理函数
  function handleBeforeChange() {
    // setCurrentIndex(-1)
  }
  function handelAfterChange(current: number) {
    setCurrentIndex(current)
  }

  function handlePrevClick() {
    bannerRef.current?.prev()
  }
  function handleNextClick() {
    bannerRef.current?.next()
  }
  function handleGoDot(index: number) {
    setCurrentIndex(index)
    bannerRef.current?.goTo(index, true)
  }

  // 获取背景图片
  let bgImageUrl = ''
  if (currentIndex >= 0 && banners.length > 0) {
    bgImageUrl = banners[currentIndex]?.imageUrl + '?imageView&blur=40x20'
  }

  return (
    <BannerWrapper bgimage={bgImageUrl}>
      <div className="banner wrap-v2">
        <LeftWrapper>
          <Carousel
            ref={bannerRef}
            dots={false}
            effect="fade"
            autoplay
            speed={0}
            beforeChange={handleBeforeChange}
            afterChange={handelAfterChange}
          >
            {banners?.map((item: any) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img
                    className="image"
                    src={item.imageUrl + '?param=730y285'}
                    alt={item.typeTitle}
                  />
                </div>
              )
            })}
          </Carousel>
          <ul className="dots">
            {banners.map((item, index) => {
              return (
                <li key={item.imageUrl} onClick={() => handleGoDot(index)}>
                  <span className={classNames('item', { active: index === currentIndex })}></span>
                </li>
              )
            })}
          </ul>
        </LeftWrapper>
        <RightWrapper>
          <a className="btn">下载客户端</a>
          <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
        </RightWrapper>
        <ControlWrapper>
          <button className="btn left" onClick={() => handlePrevClick()}></button>
          <button className="btn right" onClick={() => handleNextClick()}>
            {' '}
          </button>
        </ControlWrapper>
      </div>
    </BannerWrapper>
  )
}

export default memo(TopBanner)
