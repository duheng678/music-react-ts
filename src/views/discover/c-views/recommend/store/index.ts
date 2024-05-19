import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  getBanners,
  getHotRecommend,
  getNewAlbum,
  getPlayListDetail,
  getArtistList
} from '../service'

export const fetchRecommendDataAction = createAsyncThunk('recommend', (_, { dispatch }) => {
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

export const rankingMap = {
  upRanking: 19723756,
  newRanking: 3779629,
  originRanking: 2884035
}
// 榜单数据
export const fetchRankingDataAction = createAsyncThunk('ranking', (arg, { dispatch }) => {
  const promises: Promise<any>[] = []
  let key: keyof typeof rankingMap
  for (key in rankingMap) {
    const id = rankingMap[key]
    promises.push(getPlayListDetail(id))
  }
  Promise.all(promises).then((res) => {
    const rankings = res.map((item) => item.playlist)
    dispatch(changeRankingsAction(rankings))
  })
})
//歌手数据
export const fetchSettleSinger = createAsyncThunk('settlesinger', async (_, { dispatch }) => {
  const res = await getArtistList(5001, 5)
  // dispatch()
  console.log(res)

  dispatch(changeSettleSingerAction(res.artists))
})

interface IInitialState {
  banners: any[]
  hotRecommend: any[]
  newAlbum: any[]
  rankings: any[]
  settleSingers: any[]
}
const initialState: IInitialState = {
  banners: [],
  hotRecommend: [],
  newAlbum: [],
  rankings: [],
  settleSingers: []
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
    },
    changeRankingsAction(state, { payload }) {
      state.rankings = payload
    },
    changeSettleSingerAction(state, { payload }) {
      state.settleSingers = payload
    }
  }
  // extraReducers: (builder) => {
  //   builder.addCase(fetchBannerDataAction.fulfilled, (state, { payload }) => {
  //     state.banners = payload
  //   })
  // }
})
export const {
  changeBannersAction,
  changeHotRecommendAction,
  changeNewAlbumAction,
  changeRankingsAction,
  changeSettleSingerAction
} = recommendSlice.actions
export default recommendSlice.reducer
