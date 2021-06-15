import { act, renderHook } from '@testing-library/react-hooks'
import { useCustomHook } from './useCustomHook'

test('custom hook return state', () => {
  const { result } = renderHook(() => useCustomHook())

  expect(result.current[0]).toEqual('Initial')
})

test('custom hook with custom initial value', () => {
  const { result } = renderHook(() => useCustomHook('newInitial'))

  expect(result.current[0]).toEqual('newInitial')
})

test('custom hook with updater', () => {
  const { result } = renderHook(() => useCustomHook())

  act(() => {
    result.current[1]('newInitial')
  })

  expect(result.current[0]).toEqual('newInitial')
})
