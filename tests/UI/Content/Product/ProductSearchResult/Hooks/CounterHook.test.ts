import { renderHook, act } from '@testing-library/react-hooks'
import useCounter from './Counter'

test('c.1.1 should increment counter', () => {
    const { result } = renderHook(() => useCounter())

    act(() => {
        result.current.increment()
    })

    expect(result.current.count).toBe(1)
})