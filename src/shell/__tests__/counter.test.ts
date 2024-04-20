import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ShellType, createShell } from '@/shell/shell'
import { State } from '@/shell/state'
import { renderHook } from '@testing-library/react-hooks'

describe('createShell', () => {
  let shell: ShellType
  let initialState: State

  beforeEach(() => {
    initialState = { count: 0 }
    shell = createShell(initialState)
    vi.spyOn(console, 'log')
  })

  it('should increment the count', () => {
    shell.thunks.increment()
    const count = renderHook(() => shell.hooks.useCount()).result.current
    expect(count).toBe(1)
  })

  it('should decrement the count', () => {
    shell.thunks.decrement()
    const count = renderHook(() => shell.hooks.useCount()).result.current
    expect(count).toBe(-1)
  })

  it('should increment the count asynchronously', async () => {
    await shell.thunks.incrementAsync()
    const count = renderHook(() => shell.hooks.useCount()).result.current
    expect(count).toBeGreaterThanOrEqual(5)
  })

  it('should decrement the count asynchronously', async () => {
    await shell.thunks.decrementAsync()
    const count = renderHook(() => shell.hooks.useCount()).result.current
    expect(count).toBeLessThanOrEqual(5)
  })
})
