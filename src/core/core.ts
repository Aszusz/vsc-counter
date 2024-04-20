import { State } from '@/core/state'

export const increment =
  (by: number) =>
  (state: State): State => {
    return {
      ...state,
      count: state.count + by
    }
  }

export const decrement =
  (by: number) =>
  (state: State): State => {
    return {
      ...state,
      count: state.count - by
    }
  }
