import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getBanners, getHotRecommend, getNewAlbum } from '../service'
export const fetchRecommendDataAction = createAsyncThunk('recommend', (arg, { dispatch }) => {
  // 1 轮播图数据
  getBanners().then((res) => {
    dispatch(changeBannersAction(res.banners))
  })
  // 2 热门推荐数据
  getHotRecommend().then((res) => {
    dispatch(changeHotRecommendAction(res.result))
  })
  // 3 新碟上架
  getNewAlbum().then((res) => {
    dispatch(changeNewAlbumAction(res.albums))
  })
})

interface IInitialState {
  banners: any[]
  hotRecommend: any[]
  newAlbum: any[]
}
const initialState: IInitialState = {
  banners: [],
  hotRecommend: [],
  newAlbum: []
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
    },
    changeNewAlbumAction(state, { payload }) {
      state.newAlbum = payload
    }
  }
  // extraReducers: (builder) => {
  //   builder.addCase(fetchBannerDataAction.fulfilled, (state, { payload }) => {
  //     state.banners = payload
  //   })
  // }
})
export const { changeBannersAction, changeHotRecommendAction, changeNewAlbumAction } =
  recommendSlice.actions
export default recommendSlice.reducer
