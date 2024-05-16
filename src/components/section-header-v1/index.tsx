import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HeaderV1Wrapper } from './style'
import { Link } from 'react-router-dom'

interface IProps {
  children?: ReactNode
  keywords: string[]
  title: string
  morePath: string
  goOtherPage: (param?: string) => void
}

const SectionHeaderV1: FC<IProps> = (props: IProps) => {
  const { keywords, title, morePath, goOtherPage } = props

  const goPage = (item?: string) => {
    goOtherPage(item)
  }
  return (
    <HeaderV1Wrapper>
      <div className="left">
        <div className="title" onClick={() => goPage()}>
          {title}
        </div>
        <div className="keyword">
          {keywords.map((item) => {
            return (
              <div className="item" key={item}>
                <a onClick={() => goPage(item)} className="link">
                  {item}
                </a>
                <span className="divider"> | </span>
              </div>
            )
          })}
        </div>
      </div>
      <div className="right">
        <Link to={morePath}>更多</Link>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderV1Wrapper>
  )
}

export default memo(SectionHeaderV1)
