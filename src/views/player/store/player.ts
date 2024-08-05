import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getSongDetail, getSongLyric } from '../service'
import { IRootState } from '@/store'
import { ILyric, parseLyric } from '@/utils/parse-lyric'
export const fetchCurrentSongAction = createAsyncThunk<void, number, { state: IRootState }>(
  'currentSong',
  (id: number, { dispatch }) => {
    // dispatch(changeCurrentSongAction(initialState.currentSong))
    getSongDetail(id).then((res) => {
      if (!res?.songs?.length) return
      dispatch(changeCurrentSongAction(res?.songs?.[0]))
    })
    //获取歌词
    getSongLyric(id).then((res) => {
      // 1获取歌词
      const lyricString = res?.lrc?.lyric
      // 2 解析歌词
      const lyrics = parseLyric(lyricString)
      console.log(lyrics)
      dispatch(changeLyricAction(lyrics))
    })
  }
)
interface IPlayerState {
  currentSong: any
  lyrics: ILyric[]
  lyricIndex: number
}
const initialState: IPlayerState = {
  currentSong: {
    name: '温柔',
    id: 386538,
    pst: 0,
    t: 0,
    ar: [
      {
        id: 13193,
        name: '五月天',
        tns: [],
        alias: []
      }
    ],
    alia: [],
    pop: 100,
    st: 0,
    rt: '600902000000534560',
    fee: 1,
    v: 80,
    crbt: null,
    cf: '',
    al: {
      id: 38285,
      name: '我们是五月天',
      picUrl: 'https://p1.music.126.net/XlMYABTsvXGxOn0h9F61VQ==/109951168750902183.jpg',
      tns: [],
      pic_str: '109951168750902183',
      pic: 109951168750902180
    },
    dt: 269800,
    h: {
      br: 320000,
      fid: 0,
      size: 10794885,
      vd: -63966,
      sr: 44100
    },
    m: {
      br: 192000,
      fid: 0,
      size: 6476948,
      vd: -61383,
      sr: 44100
    },
    l: {
      br: 128000,
      fid: 0,
      size: 4317980,
      vd: -59695,
      sr: 44100
    },
    sq: {
      br: 1053726,
      fid: 0,
      size: 35536923,
      vd: -64088,
      sr: 44100
    },
    hr: null,
    a: null,
    cd: '1',
    no: 2,
    rtUrl: null,
    ftype: 0,
    rtUrls: [],
    djId: 0,
    copyright: 0,
    s_id: 0,
    mark: 17179877888,
    originCoverType: 1,
    originSongSimpleData: null,
    tagPicList: null,
    resourceState: true,
    version: 80,
    songJumpInfo: null,
    entertainmentTags: null,
    awardTags: null,
    single: 0,
    noCopyrightRcmd: null,
    mv: 10929721,
    rtype: 0,
    rurl: null,
    mst: 9,
    cp: 684010,
    publishTime: 1049126400000
  },
  lyrics: [],
  lyricIndex: -1
}
const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    changeCurrentSongAction(state, { payload }) {
      state.currentSong = payload
    },
    changeLyricAction(state, { payload }) {
      state.lyrics = payload
    },
    changeLyricIndexAction(state, { payload }) {
      state.lyricIndex = payload
    }
  }
})

export default playerSlice.reducer
export const { changeCurrentSongAction, changeLyricAction, changeLyricIndexAction } =
  playerSlice.actions
// export const {} = playerSlice.actions
