import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const SectionHeaderV2: FC<IProps> = () => {
  return <div>SectionHeaderV2</div>
}

export default memo(SectionHeaderV2)
