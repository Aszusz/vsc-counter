import { renderHook } from '@testing-library/react'

export function useHookValue<T, U>(hookFunction: (initialProps: T) => U): U {
  const { result } = renderHook<U, T>(hookFunction)
  if (result.current === undefined || result.current === null) {
    throw new Error(
      'Hook returned undefined or null, which is not expected in this testing context.'
    )
  }
  return result.current
}
