import type { RouteObject } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import React, { lazy } from 'react'

const Discover = lazy(() => import('@/views/discover'))
const Focus = lazy(() => import('@/views/focus'))
const Download = lazy(() => import('@/views/download'))
const Mine = lazy(() => import('@/views/mine'))
const Demo = lazy(() => import('@/views/demo'))

// 发现音乐模块
const Recommend = lazy(() => import('@/views/discover/c-views/recommend'))
const Ranking = lazy(() => import('@/views/discover/c-views/ranking'))
const Songs = lazy(() => import('@/views/discover/c-views/songs'))
const DjRadio = lazy(() => import('@/views/discover/c-views/djradio'))
const Artist = lazy(() => import('@/views/discover/c-views/artist'))
const Album = lazy(() => import('@/views/discover/c-views/album'))

const routes: RouteObject[] = [
  { path: '/', element: <Navigate to="/discover" /> },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      { path: '/discover/', element: <Navigate to="/discover/recommend" /> },
      { path: '/discover/recommend', element: <Recommend /> },
      { path: '/discover/ranking', element: <Ranking /> },
      { path: '/discover/songs', element: <Songs /> },
      { path: '/discover/djradio', element: <DjRadio /> },
      { path: '/discover/artist', element: <Artist /> },
      { path: '/discover/album', element: <Album /> }
    ]
  },
  {
    path: '/focus',
    element: <Focus />
  },
  {
    path: '/download',
    element: <Download />
  },
  {
    path: '/mine',
    element: <Mine />
  },
  {
    path: '/demo',
    element: <Demo />
  }
]

export default routes
