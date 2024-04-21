import { useHookValue } from '../../lib/useHookValue'
import { initialState } from '@/core/state'
import { createShell } from '@/shell/shell'
import { describe, it, expect } from 'vitest'

describe.concurrent('createShell', () => {
  it('shell/increment', () => {
    const shell = createShell(initialState)
    shell.thunks.increment()
    const count = useHookValue(() => shell.hooks.useCount())
    expect(count).toBe(1)
  })

  it('shell/decrement', () => {
    const shell = createShell(initialState)
    shell.thunks.decrement()
    const count = useHookValue(() => shell.hooks.useCount())
    expect(count).toBe(-1)
  })

  it('shell/incrementRandom', async () => {
    const shell = createShell(initialState)
    await shell.thunks.incrementRandom()
    const count = useHookValue(() => shell.hooks.useCount())
    expect(count).toBeGreaterThanOrEqual(5)
  })

  it('shell/decrementRandom', async () => {
    const shell = createShell(initialState)
    await shell.thunks.decrementRandom()
    const count = useHookValue(() => shell.hooks.useCount())
    expect(count).toBeLessThanOrEqual(5)
  })
})
