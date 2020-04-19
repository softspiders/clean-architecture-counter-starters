import { renderHook } from '@testing-library/react-hooks'
import { usePresenter } from '../usePresenter'
import { CounterUseCaseIn } from '../../../domain/usecases'

describe('usePresenter', () => {
  it('should use counter', () => {
    class CounterUseCaseInImpl implements CounterUseCaseIn {
      getCounter(): Promise<number> {
        return Promise.resolve(0)
      }

      increment(): Promise<number> {
        return Promise.resolve(0)
      }
    }

    const counterUseCaseInImpl = new CounterUseCaseInImpl()

    const { result } = renderHook(() => usePresenter(counterUseCaseInImpl))

    expect(result.current.state.counter).toBeUndefined()
    expect(typeof result.current.functions.handleIncrementClick).toBe(
      'function'
    )
  })
})
