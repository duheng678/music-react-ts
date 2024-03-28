import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import ClassTemplate from './01-class-template'
interface IProps {
  children?: ReactNode
}

const Demo: FC<IProps> = () => {
  return (
    <div>
      <ClassTemplate age={18}></ClassTemplate>
    </div>
  )
}

export default memo(Demo)
