import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { BarControl, BarOperator, BarPlayInfo, PlayerBarWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const PlayerBar: FC<IProps> = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const handleChangeBtnClick = (flag?: boolean) => {
    console.log(flag)
  }
  const handlePlayBtnClick = () => {
    setIsPlaying(!isPlaying)
  }
  return (
    <PlayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <BarControl isPlaying={isPlaying}>
          <button
            className="btn sprite_playbar prev"
            onClick={() => handleChangeBtnClick(false)}
          ></button>
          <button className="btn sprite_playbar play" onClick={handlePlayBtnClick}></button>
          <button
            className="btn sprite_playbar next"
            onClick={() => handleChangeBtnClick()}
          ></button>
        </BarControl>
        <BarPlayInfo></BarPlayInfo>
        <BarOperator playMode={1}></BarOperator>
      </div>
    </PlayerBarWrapper>
  )
}

export default memo(PlayerBar)
