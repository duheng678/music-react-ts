import React, { memo, Suspense, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import routes from '@/router'
import { useRoutes } from 'react-router-dom'
import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'
import PlayerBar from './views/player/player-bar'
import { fetchCurrentSongAction } from './views/player/store/player'
import { useAppDispatch } from './store'
interface IProps {
  children?: ReactNode
}

const App: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchCurrentSongAction(347230))
  }, [])
  return (
    <div>
      <AppHeader />
      <Suspense fallback="">{useRoutes(routes)}</Suspense>
      <AppFooter />
      <PlayerBar />
    </div>
  )
}

export default memo(App)
