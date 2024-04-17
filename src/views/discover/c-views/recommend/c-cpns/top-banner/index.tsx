import React, { memo, useEffect, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { RightWrapper, BannerWrapper, LeftWrapper, ControlWrapper } from './style'
import { shallowEqualApp, useAppSelector } from '@/store'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
// import 'react-transition-group'

import classNames from 'classnames'
interface IProps {
  children?: ReactNode
}
console.log('banner')

const TopBanner: FC<IProps> = () => {
  // const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [bgImage, setBgImage] = useState<string>()
  const indexRef = useRef(currentIndex)

  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowEqualApp
  )
  // 事件处理函数

  function handleChangeClick(flag: boolean) {
    let newIndex = flag ? currentIndex - 1 : currentIndex + 1
    if (newIndex >= banners.length) newIndex = 0
    if (newIndex < 0) newIndex = banners.length - 1
    // bannerRef.current?.next()
    setCurrentIndex(newIndex)
    console.log('1', currentIndex)
    indexRef.current = newIndex
  }

  function handleAfterChange() {
    console.log('2', currentIndex, indexRef.current)

    setBgImage(banners[indexRef.current]?.imageUrl + '?imageView&blur=40x20')

    console.log('??')
    // setBgImage(banners[currentIndex].imageUrl + '?imageView&blur=40x20')
    // setDotIndex(indexRef.current)
  }
  console.log('3', currentIndex, indexRef.current)

  function handleGoDot(index: number) {
    setCurrentIndex(index)
    indexRef.current = index
    // bannerRef.current?.goTo(index, true)
    setBgImage(banners[indexRef.current]?.imageUrl + '?imageView&blur=40x20')
  }

  useEffect(() => {
    if (banners?.length) setBgImage(banners[0]?.imageUrl + '?imageView&blur=40x20')
  }, [banners])

  let imageUrl = ''
  if (banners.length) {
    imageUrl = banners[currentIndex].imageUrl + '?param=730y285'
  }
  // 获取背景图片
  // let bgImageUrl = ''
  // if (currentIndex >= 0 && banners.length > 0) {
  //   bgImageUrl = banners[currentIndex]?.imageUrl + '?imageView&blur=40x20'
  // }

  return (
    <BannerWrapper bgimage={bgImage}>
      <div className="banner wrap-v2">
        <LeftWrapper>
          {/* <div>
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
          </div> */}
          <div className="banner-list">
            <SwitchTransition mode="out-in">
              <CSSTransition
                classNames="fade"
                timeout={100}
                key={currentIndex}
                onExited={() => handleAfterChange()}
              >
                <div className="banner-item">
                  <img className="image" src={imageUrl} />
                </div>
              </CSSTransition>
            </SwitchTransition>
          </div>
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
          <button className="btn left" onClick={() => handleChangeClick(true)}></button>
          <button className="btn right" onClick={() => handleChangeClick(false)}></button>
        </ControlWrapper>
      </div>
    </BannerWrapper>
  )
}

export default memo(TopBanner)
