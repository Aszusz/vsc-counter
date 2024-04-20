import { create } from 'zustand'
import { State } from './state'
import { randomDelay } from './effects'

export const createShell = (initialState: State) => {
  const useStore = create<State>()(() => initialState)

  const hooks = {
    useCount: () => useStore(state => state.count)
  }

  const thunks = {
    increment: () => {
      console.log(`view/increment`)
      useStore.setState(state => ({ count: state.count + 1 }))
    },

    decrement: () => {
      console.log(`view/decrement`)
      useStore.setState(state => ({ count: state.count - 1 }))
    },

    incrementAsync: async () => {
      console.log(`view/incrementAsync`)
      const number = await randomDelay(5, 10)
      console.log(`shell/incrementAsync: ${number}`)
      useStore.setState(state => ({ count: state.count + number }))
    },

    decrementAsync: async () => {
      console.log(`view/decrementAsync`)
      const number = await randomDelay(5, 10)
      console.log(`shell/decrementAsync: ${number}`)
      useStore.setState(state => ({ count: state.count - number }))
    }
  }

  return { hooks, thunks }
}
