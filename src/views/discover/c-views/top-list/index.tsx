import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const TopList: FC<IProps> = () => {
  return <div>TopList</div>
}

export default memo(TopList)
