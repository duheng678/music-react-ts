import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getBanners } from '../service'
export const fetchBannerDataAction = createAsyncThunk('banners', async (arg, { dispatch }) => {
  try {
    const res = await getBanners()
    console.log(res)
    dispatch(changeBannersAction(res.banners))
  } catch (error) {
    console.log(error)
  }
})

interface IInitialState {
  banners: any[]
}
const initialState: IInitialState = {
  banners: []
}
const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
    }
  }
  // extraReducers: (builder) => {
  //   builder.addCase(fetchBannerDataAction.fulfilled, (state, { payload }) => {
  //     state.banners = payload
  //   })
  // }
})
export const { changeBannersAction } = recommendSlice.actions
export default recommendSlice.reducer
