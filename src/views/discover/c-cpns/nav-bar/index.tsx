import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { BarWrapper } from './style'
import { discoverMenu } from '@/assets/data/local_data'
import { NavLink } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const NavBar: FC<IProps> = () => {
  return (
    <BarWrapper>
      <div className="nav wrap-v1">
        {discoverMenu.map((item) => {
          return (
            <div className="item" key={item.title}>
              <NavLink end to={item.link} className={({ isActive }) => (isActive ? 'active' : '')}>
                {item.title}
              </NavLink>
            </div>
          )
        })}
      </div>
    </BarWrapper>
  )
}

export default memo(NavBar)
