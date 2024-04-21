import * as core from '@/core/core'
import { State } from '@/core/state'
import { log } from '@/lib/log'
import { randomDelay } from '@/shell/effects'
import { create } from 'zustand'

export const createShell = (initialState: State) => {
  const useStore = create<State>()(() => initialState)

  return {
    hooks: {
      useCount: () => useStore(state => state.count)
    },

    thunks: {
      async increment() {
        log('shell', 'increment')
        useStore.setState(state => core.increment(state, 1))
      },

      async decrement() {
        log('shell', 'decrement')
        useStore.setState(state => core.decrement(state, 1))
      },

      async incrementRandom() {
        log('shell', 'incrementRandom')
        const number = await randomDelay(5, 10)
        useStore.setState(state => core.increment(state, number))
      },

      async decrementRandom() {
        log('shell', 'decrementRandom')
        const number = await randomDelay(5, 10)
        useStore.setState(state => core.decrement(state, number))
      }
    }
  }
}
