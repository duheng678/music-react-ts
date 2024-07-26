export function getSongUrl(songId: number) {
  return `https://music.163.com/song/media/outer/url?id=${songId}`
}

const padLeft = (time: number) => {
  return time < 10 ? '0' + time : time
}
export function formatTime(time: number) {
  // 0.将毫秒转成秒
  const timer = time / 1000
  const minus = timer / 60
  const second = timer % 60

  return `${padLeft(Math.floor(minus))}:${padLeft(Math.floor(second))}`
}
