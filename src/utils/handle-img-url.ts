export function getImageSize(imgUrl: string, width = 40, height = width) {
  return `${imgUrl}?param=${width}x${height}`
}
