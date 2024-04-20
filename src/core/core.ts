import { State } from '@/core/state'

export function increment(state: State, by: number): State {
  console.log(`core/increment: ${by}`)
  return {
    ...state,
    count: state.count + by
  }
}

export function decrement(state: State, by: number): State {
  console.log(`core/decrement: ${by}`)
  return {
    ...state,
    count: state.count - by
  }
}
