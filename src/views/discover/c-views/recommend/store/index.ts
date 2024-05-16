import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getBanners, getHotRecommend } from '../service'
export const fetchRecommendDataAction = createAsyncThunk('recommend', (arg, { dispatch }) => {
  // 1 轮播图数据
  getBanners().then((res) => {
    dispatch(changeBannersAction(res.banners))
  })
  // 2 热门推荐数据
  getHotRecommend().then((res) => {
    console.log(res)
    dispatch(changeHotRecommendAction(res.result))
  })
})

interface IInitialState {
  banners: any[]
  hotRecommend: any[]
}
const initialState: IInitialState = {
  banners: [],
  hotRecommend: []
}
const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
    },
    changeHotRecommendAction(state, { payload }) {
      state.hotRecommend = payload
    }
  }
  // extraReducers: (builder) => {
  //   builder.addCase(fetchBannerDataAction.fulfilled, (state, { payload }) => {
  //     state.banners = payload
  //   })
  // }
})
export const { changeBannersAction, changeHotRecommendAction } = recommendSlice.actions
export default recommendSlice.reducer
