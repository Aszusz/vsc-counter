import { State } from '@/core/state'

export const increment =
  (by: number) =>
  (state: State): State => {
    console.log(`core/increment: ${by}`)
    return {
      ...state,
      count: state.count + by
    }
  }

export const decrement =
  (by: number) =>
  (state: State): State => {
    console.log(`core/decrement: ${by}`)
    return {
      ...state,
      count: state.count - by
    }
  }
