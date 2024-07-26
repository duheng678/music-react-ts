import React, { memo, useEffect, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { BarControl, BarOperator, BarPlayInfo, PlayerBarWrapper } from './style'
import { NavLink } from 'react-router-dom'
import { Slider } from 'antd'
// import { useSelector } from 'react-redux'
import { shallowEqualApp, useAppSelector } from '@/store'
import { getSongUrl } from '../service'
import { formatTime } from '@/utils/handle-player'
interface IProps {
  children?: ReactNode
}

const PlayerBar: FC<IProps> = () => {
  const audioRef = useRef<HTMLAudioElement>(null)

  const { currentSong } = useAppSelector(
    (state) => ({
      currentSong: state.player.currentSong
    }),
    shallowEqualApp
  )
  console.log(currentSong)

  //组件内副作用操作
  useEffect(() => {
    if (!audioRef.current) return

    getSongUrl(currentSong.id).then((res) => {
      console.log(res)
      audioRef.current!.src = res.data[0].url
    })
    audioRef.current?.play().then(
      (res) => {
        console.log(res)
      },
      (error) => {
        console.log(error)
      }
    )
    setDuration(currentSong?.dt)
  }, [currentSong])

  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)

  const handleChangeBtnClick = (flag?: boolean) => {
    console.log(flag, setProgress, audioRef.current?.currentTime)
  }
  //音乐播放进度处理
  const handleTimeUpdate = () => {
    console.log('???', setProgress, audioRef.current?.currentTime)
    // setDuration(audioRef.current?.currentTime)
    const currentTime: number = audioRef.current?.currentTime || 0
    const progress = (((currentTime as number) * 1000) / duration) * 100
    setProgress(progress)
  }
  //组建内的事件处理
  const handlePlayBtnClick = () => {
    !isPlaying
      ? audioRef.current?.play().catch(() => setIsPlaying(false))
      : audioRef.current?.pause()
    setIsPlaying(!isPlaying)
  }

  const handlePlayModeClick = () => {}
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
              <Slider value={progress} step={0.1} tooltip={{ formatter: null }} />
              <div className="time">
                <span className="current">{formatTime(audioRef.current?.currentTime || 0)}</span>
                <span className="divider">/</span>
                <span className="duration">{formatTime(duration)}</span>
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
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} />
    </PlayerBarWrapper>
  )
}

export default memo(PlayerBar)
