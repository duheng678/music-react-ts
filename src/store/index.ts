import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './modules/counter'
import RecommendReducer from '@/views/discover/c-views/recommend/store'
import { shallowEqual } from 'react-redux'

import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux'
const store = configureStore({
  reducer: {
    counter: counterReducer,
    recommend: RecommendReducer //发现音乐->推荐
  }
})
// const state = store.getState()
// type StateType = typeof state

type GetStateFnType = typeof store.getState
export type IRootState = ReturnType<GetStateFnType>
type DispatchType = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => DispatchType = useDispatch
export const shallowEqualApp = shallowEqual
export default store
