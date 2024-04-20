import { decrement, increment } from '@/core/core'
import { State } from '@/core/state'
import { randomDelay } from '@/shell/effects'
import { create } from 'zustand'

export const createShell = (initialState: State) => {
  const useStore = create<State>()(() => initialState)

  const hooks = {
    useCount: () => useStore(state => state.count)
  }

  const thunks = {
    increment: () => {
      console.log(`shell/increment`)
      useStore.setState(increment(1))
    },

    decrement: () => {
      console.log(`shell/decrement`)
      useStore.setState(decrement(1))
    },

    incrementRandom: async () => {
      console.log(`shell/incrementRandom`)
      const number = await randomDelay(5, 10)

      useStore.setState(increment(number))
    },

    decrementRandom: async () => {
      console.log(`shell/decrementRandom`)
      const number = await randomDelay(5, 10)
      useStore.setState(decrement(number))
    }
  }

  return { hooks, thunks }
}

export type ShellType = ReturnType<typeof createShell>
