import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
  keywords: string[]
  title: string
  morePath: string
}

const SectionHeaderV1: FC<IProps> = () => {
  return <div>SectionHeaderV1</div>
}

export default memo(SectionHeaderV1)
