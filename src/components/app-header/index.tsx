import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HeaderLeft, HeaderRight, HeaderWrapper } from './style'
import HeaderTitles from '@/assets/data/header_titles.json'
import { NavLink } from 'react-router-dom'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
interface IProps {
  children?: ReactNode
}
interface TitleType {
  type: string
  title: string
  link: string
}

const AppHeader: FC<IProps> = () => {
  function showItem(item: TitleType) {
    if (item.type === 'path') {
      return (
        <NavLink to={item.link} className={({ isActive }) => (isActive ? 'active' : '')}>
          {item.title}
          <i className="icon sprite_01"></i>
        </NavLink>
      )
    } else if (item.type === 'link') {
      return (
        <a href={item.link} target="_blank" rel="noreferrer">
          {item.title}
        </a>
      )
    }
  }
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a className="logo sprite_01" href="#/">
            网易云音乐
          </a>
          <div className="select-list">
            {HeaderTitles.map((item) => {
              return (
                <div className="select-item" key={item.title}>
                  {showItem(item)}
                </div>
              )
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input className="search" prefix={<SearchOutlined />} placeholder="音乐/视频/电台/用户" />
          <div className="center">创作者中心</div>
          <div className="login">登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
}

export default memo(AppHeader)
