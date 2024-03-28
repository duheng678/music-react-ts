import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface IState {
  count: number
  message: string
  direction: 'left' | 'right' | 'up' | 'down'
}
const initialState: IState = {
  count: 1,
  message: 'hello world',
  direction: 'left'
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeMessage(state, { payload }: PayloadAction<string>) {
      state.message = payload
    }
  }
})
export default counterSlice.reducer
export const { changeMessage } = counterSlice.actions
