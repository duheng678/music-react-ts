import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 1,
    message: 'hello world'
  },
  reducers: {
    changeMessage(state, { payload }) {
      state.message = payload
    }
  }
})
export default counterSlice.reducer
export const { changeMessage } = counterSlice.actions
