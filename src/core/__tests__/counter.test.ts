import { decrement, increment } from '../core'
import { initialState } from '@/core/state'
import { describe, it, expect, beforeEach } from 'vitest'

describe('core', () => {
  beforeEach(() => {})

  it('core/increment', () => {
    const state = increment(initialState, 1)
    const count = state.count
    expect(count).toBe(1)
  })

  it('core/decrement', () => {
    const state = decrement(initialState, 1)
    const count = state.count
    expect(count).toBe(-1)
  })
})
