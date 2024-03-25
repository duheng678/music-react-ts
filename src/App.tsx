import React, { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import routes from '@/router'
import { useRoutes } from 'react-router-dom'
import { useAppSelector, useAppDispatch, shallowEqualApp } from './store'
import { changeMessage } from '@/store/modules/counter'
interface IProps {
  children?: ReactNode
}

const App: FC<IProps> = () => {
  const { count, message } = useAppSelector(
    (state) => ({
      count: state.counter.count,
      message: state.counter.message
    }),
    shallowEqualApp
  )

  const dispatch = useAppDispatch()
  function handleMessage() {
    dispatch(changeMessage('hello dh'))
  }
  return (
    <div>
      {count}-{message}12<button onClick={handleMessage}>修改message</button>
      <Suspense fallback="">{useRoutes(routes)}</Suspense>
    </div>
  )
}

export default memo(App)
