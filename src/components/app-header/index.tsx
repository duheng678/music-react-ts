import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HeaderWrapper } from './style'
import headerTitles from '@/assets/data/header_titles.json'

interface IProps {
  children?: ReactNode
}

const AppHeader: FC<IProps> = () => {
  return <HeaderWrapper>AppHeader</HeaderWrapper>
}

export default memo(AppHeader)
