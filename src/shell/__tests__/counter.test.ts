import { useHookValue } from './utils'
import { initialState } from '@/core/state'
import { ShellType, createShell } from '@/shell/shell'
import { describe, it, expect, vi, beforeEach } from 'vitest'

describe('createShell', () => {
  let shell: ShellType

  beforeEach(() => {
    shell = createShell(initialState)
    vi.spyOn(console, 'log')
  })

  it('shell/increment', () => {
    shell.thunks.increment()
    const count = useHookValue(() => shell.hooks.useCount())
    expect(count).toBe(1)
  })

  it('shell/decrement', () => {
    shell.thunks.decrement()
    const count = useHookValue(() => shell.hooks.useCount())
    expect(count).toBe(-1)
  })

  it('shell/incrementRandom', async () => {
    await shell.thunks.incrementRandom()
    const count = useHookValue(() => shell.hooks.useCount())
    expect(count).toBeGreaterThanOrEqual(5)
  })

  it('shell/decrementRandom', async () => {
    await shell.thunks.decrementRandom()
    const count = useHookValue(() => shell.hooks.useCount())
    expect(count).toBeLessThanOrEqual(5)
  })
})
