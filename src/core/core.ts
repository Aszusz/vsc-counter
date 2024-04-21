import { State } from '@/core/state'
import { log } from '@/lib/log'

export function increment(state: State, by: number): State {
  log('core', 'increment', by)
  return {
    ...state,
    count: state.count + by
  }
}

export function decrement(state: State, by: number): State {
  log('core', 'decrement', by)
  return {
    ...state,
    count: state.count - by
  }
}
