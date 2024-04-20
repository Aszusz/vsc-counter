import { renderHook } from '@testing-library/react-hooks'

export function useHookValue<T, U>(hookFunction: () => U): U {
  const { result } = renderHook<T, U>(hookFunction)
  if (result.current === undefined || result.current === null) {
    throw new Error(
      'Hook returned undefined or null, which is not expected in this testing context.'
    )
  }
  return result.current
}
