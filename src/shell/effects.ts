// delay ms
export const delay = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms))

// random min max
export const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min)

// random delay
export const randomDelay = async (
  min: number,
  max: number
): Promise<number> => {
  const r = random(min, max)
  const d = r * 200
  await delay(d)
  return r
}
