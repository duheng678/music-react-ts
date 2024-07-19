import React, { memo, useEffect, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { BarControl, BarOperator, BarPlayInfo, PlayerBarWrapper } from './style'
import { NavLink } from 'react-router-dom'
import { Slider } from 'antd'
// import { useSelector } from 'react-redux'
import { shallowEqualApp, useAppSelector } from '@/store'

interface IProps {
  children?: ReactNode
}

const PlayerBar: FC<IProps> = () => {
  const audioRef = useRef<HTMLAudioElement>(null)
  //组件内副作用操作
  useEffect(() => {
    // audioRef.current!.src = currentSong?.url
  }, [])
  const { currentSong } = useAppSelector(
    (state) => ({
      currentSong: state.player.currentSong
    }),
    shallowEqualApp
  )
  const [isPlaying, setIsPlaying] = useState('false')
  const handleChangeBtnClick = (flag?: boolean) => {
    console.log(flag)
  }
  const handlePlayBtnClick = () => {
    setIsPlaying(isPlaying === 'true' ? 'false' : 'true')
  }

  const handlePlayModeClick = () => {}
  return (
    <PlayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <BarControl isplaying={isPlaying}>
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
        <BarPlayInfo>
          <NavLink to="/discover/player">
            <img className="image" src={currentSong?.al?.picUrl} alt="" />
          </NavLink>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong?.name}</span>
              <span className="singer-name">{currentSong?.ar[0]?.name}</span>
            </div>
            <div className="progress">
              <Slider />
              <div className="time">
                <span className="current">{'00:52'}</span>
                <span className="divider">/</span>
                <span className="duration">{'04:00'}</span>
              </div>
            </div>
          </div>
        </BarPlayInfo>
        <BarOperator playmode={1}>
          <div className="left">
            <button className="btn pip"></button>
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="btn sprite_playbar volume"></button>
            <button className="btn sprite_playbar loop" onClick={handlePlayModeClick}></button>
            <button className="btn sprite_playbar playlist"></button>
          </div>
        </BarOperator>
      </div>
      <audio ref={audioRef} />
    </PlayerBarWrapper>
  )
}

export default memo(PlayerBar)
