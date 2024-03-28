import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './modules/counter'
import { shallowEqual } from 'react-redux'

import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux'
const store = configureStore({
  reducer: {
    counter: counterReducer
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
