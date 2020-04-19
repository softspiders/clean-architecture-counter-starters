import { renderHook, act } from '@testing-library/react-hooks'
import { usePresenter } from '../usePresenter'
import { CounterUseCaseIn } from '../../../domain/usecases'

describe('usePresenter', () => {
  it('should have state.counter and handleIncrementClick function', async () => {
    const COUNTER_VALUE = 99
    class CounterUseCaseInImpl implements CounterUseCaseIn {
      getCounter(): Promise<number> {
        return Promise.resolve(COUNTER_VALUE)
      }
      increment(): Promise<number> {
        return Promise.resolve(COUNTER_VALUE + 1)
      }
    }

    let _result: any = {}
    await act(async () => {
      const { result } = await renderHook(() =>
        usePresenter(new CounterUseCaseInImpl())
      )
      _result = result
    })
    expect(_result.current.state.counter).toBe(COUNTER_VALUE)
    expect(typeof _result.current.functions.handleIncrementClick).toBe(
      'function'
    )
  })
})
