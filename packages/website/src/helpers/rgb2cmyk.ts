export function rgb2cmyk(
  r: number,
  g: number,
  b: number
): {
  c: number
  m: number
  y: number
  k: number
} {
  var computedC = 0
  var computedM = 0
  var computedY = 0
  var computedK = 0

  //remove spaces from input RGB values, convert to int
  var r = parseInt(('' + r).replace(/\s/g, ''), 10)
  var g = parseInt(('' + g).replace(/\s/g, ''), 10)
  var b = parseInt(('' + b).replace(/\s/g, ''), 10)

  if (r == null || g == null || b == null || isNaN(r) || isNaN(g) || isNaN(b)) {
    console.log('Please enter numeric RGB values!')
    return
  }
  if (r < 0 || g < 0 || b < 0 || r > 255 || g > 255 || b > 255) {
    console.log('RGB values must be in the range 0 to 255.')
    return
  }

  // BLACK
  if (r == 0 && g == 0 && b == 0) {
    computedK = 1
    return [0, 0, 0, 1]
  }

  computedC = 1 - r / 255
  computedM = 1 - g / 255
  computedY = 1 - b / 255

  var minCMY = Math.min(computedC, Math.min(computedM, computedY))
  computedC = Math.round(((computedC - minCMY) / (1 - minCMY)) * 100)
  computedM = Math.round(((computedM - minCMY) / (1 - minCMY)) * 100)
  computedY = Math.round(((computedY - minCMY) / (1 - minCMY)) * 100)
  computedK = Math.round(minCMY * 100)

  return { c: computedC, m: computedM, y: computedY, k: computedK }
}
