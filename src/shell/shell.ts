import { decrement, increment } from '@/core/core'
import { State } from '@/core/state'
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
        console.log(`shell/increment`)
        useStore.setState(state => increment(state, 1))
      },

      async decrement() {
        console.log(`shell/decrement`)
        useStore.setState(state => decrement(state, 1))
      },

      async incrementRandom() {
        console.log(`shell/incrementRandom`)
        const number = await randomDelay(5, 10)
        useStore.setState(state => increment(state, number))
      },

      async decrementRandom() {
        console.log(`shell/decrementRandom`)
        const number = await randomDelay(5, 10)
        useStore.setState(state => decrement(state, number))
      }
    }
  }
}
