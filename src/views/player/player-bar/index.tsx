import React, { memo, useEffect, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { BarControl, BarOperator, BarPlayInfo, PlayerBarWrapper } from './style'
import { NavLink } from 'react-router-dom'
import { Slider } from 'antd'
// import { useSelector } from 'react-redux'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { getSongUrl } from '../service'
import { formatTime } from '@/utils/handle-player'
import { changeLyricIndexAction } from '../store/player'
interface IProps {
  children?: ReactNode
}

const PlayerBar: FC<IProps> = () => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const dispatch = useAppDispatch()

  const { currentSong, lyrics, lyricIndex } = useAppSelector(
    (state) => ({
      currentSong: state.player.currentSong,
      lyrics: state.player.lyrics,
      lyricIndex: state.player.lyricIndex
    }),
    shallowEqualApp
  )

  //组件内副作用操作
  useEffect(() => {
    if (!audioRef.current) return

    getSongUrl(currentSong?.id).then((res) => {
      console.log(res)
      if (res.data && res.data.length > 0) {
        const { time, url } = res.data[0]

        setDuration(time)
        audioRef.current!.src = url
      }
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

  const [isPlaying, setIsPlaying] = useState('pause') //暂停开始
  const [progress, setProgress] = useState(0) //进度条
  const [duration, setDuration] = useState(0) //总时长
  const [currentTime, setCurrentTime] = useState(0) //歌曲当前播放s时间
  const [isSliding, setSliding] = useState(false)

  //音乐播放进度处理
  const handleTimeUpdate = () => {
    // setDuration(audioRef.current?.currentTime)
    // 1 获取当前播放时间
    const currentTime: number = audioRef.current!.currentTime * 1000 || 0

    //2 计算当前歌曲进度

    if (!isSliding) {
      const progress = ((currentTime as number) / duration) * 100
      setCurrentTime(currentTime)
      setProgress(progress)
    }
    //3 根据当前事件匹配对应的歌词

    // const index = lyrics.findIndex((item) => item.time - currentTime > 0)
    let index = lyrics.length - 1
    for (let i = 0; i < lyrics.length; i++) {
      const lyric = lyrics[i]
      if (lyric.time > currentTime) {
        index = i - 1
        break
      }
    }
    if (lyricIndex === index || index === -1) return
    dispatch(changeLyricIndexAction(index))
    console.log(lyrics[index].text)
  }
  //组建内的事件处理
  const handlePlayBtnClick = () => {
    isPlaying === 'pause'
      ? audioRef.current?.play().catch(() => setIsPlaying('pause'))
      : audioRef.current?.pause()
    setIsPlaying(isPlaying === 'play' ? 'pause' : 'play')
  }
  //滑块相关
  const handleSliderChange = (value: number) => {
    setSliding(true)
    setProgress(value)
    setCurrentTime((value * duration) / 100)
  }
  const handleSliderCompleteChange = (value: number) => {
    setSliding(false)

    setProgress(value)
    audioRef.current!.currentTime = (value * duration) / 100 / 1000
    setCurrentTime((value * duration) / 100)
  }
  const handlePlayModeClick = () => {}
  const handleChangeBtnClick = (flag?: boolean) => {
    console.log(flag)
  }
  return (
    <PlayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <BarControl is-playing={isPlaying}>
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
              <span className="singer-name">{currentSong?.ar?.[0]?.name}</span>
            </div>
            <div className="progress">
              <Slider
                value={progress}
                step={0.1}
                tooltip={{ formatter: null }}
                onChange={handleSliderChange}
                onChangeComplete={handleSliderCompleteChange}
              />
              <div className="time">
                <span className="current">{formatTime(currentTime)}</span>
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

      <audio onTimeUpdate={handleTimeUpdate} ref={audioRef} />
    </PlayerBarWrapper>
  )
}

export default memo(PlayerBar)
