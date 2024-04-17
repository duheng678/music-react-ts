import styled from 'styled-components'
interface BannerProps {
  bgimage?: string
}
export const BannerWrapper = styled.div<BannerProps>`
  background: url(${(props) => props.bgimage}) center center/6000px;
  .banner {
    height: 285px;

    display: flex;
    position: relative;
  }
`

export const LeftWrapper = styled.div`
  position: relative;
  width: 730px;

  /* .banner-list {
    position: relative;
  } */

  .banner-item {
    /* position: absolute;
    left: 0;
    top: 0;
    overflow: hidden;
    height: 270px; */
    height: 285px;
    .image {
      width: 100%;
    }
  }
  .fade-exit {
    opacity: 1;
  }

  .fade-exit-active {
    opacity: 0.2;
    transition: opacity 0.1s ease-out;
  }
  .dots {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: flex;
    justify-content: center;

    > li {
      margin: 0 2px;

      .item {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url(${require('@/assets/img/banner_sprite.png')}) 3px -343px;
        cursor: pointer;

        &:hover,
        &.active {
          background-position: -16px -343px;
        }
      }
    }
  }
`

export const RightWrapper = styled.div`
  position: absolute;
  top: 0;
  right: -1px;
  width: 254px;
  height: 285px;
  background: url(${require('@/assets/img/download.png')}) no-repeat 0 0;
  z-index: 20;

  .btn {
    display: block;
    width: 215px;
    height: 56px;
    margin: 186px 0 0 19px;
    background: url(${require('@/assets/img/download.png')}) no-repeat 0 0;
    background-position: 0 -9999px;
    text-indent: -9999px;
    cursor: pointer;
    &:hover {
      background-position: 0 -290px;

      text-decoration: none;
    }
  }
  p {
    margin: 10px auto;
    text-align: center;
    color: #8d8d8d;
  }
`
export const ControlWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${require('@/assets/img/banner_sprite.png')});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  .left {
    left: -68px;
    background-position: 0 -360px;
  }

  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`
