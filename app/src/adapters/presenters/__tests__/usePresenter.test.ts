import { renderHook, act } from '@testing-library/react-hooks'
import { usePresenter } from '../usePresenter'
import { CounterUseCaseIn } from '../../../domain/usecases'

describe('usePresenter', () => {
  const COUNTER_VALUE = 99

  class CounterUseCaseInMock implements CounterUseCaseIn {
    private _count = COUNTER_VALUE

    getCounter(): Promise<number> {
      return Promise.resolve(this._count)
    }

    increment(): Promise<number> {
      this._count++
      return Promise.resolve(this._count)
    }
  }

  it('should have state.counter and increment function', async () => {
    let _result: any = {}
    await act(async () => {
      const { result } = await renderHook(() =>
        usePresenter(new CounterUseCaseInMock())
      )
      _result = result
    })
    expect(_result.current.state.counter).toBe(COUNTER_VALUE)
    expect(typeof _result.current.functions.increment).toBe(
      'function'
    )
  })

  it('should increment...', async () => {
    console.log('usePresenter.test BEFORE const { result } = renderHook(() =>')
    const { result } = renderHook(() =>
      usePresenter(new CounterUseCaseInMock())
    )

    let _result: any = {}
    await act(async () => {
      await result.current.functions.increment()
      _result = result
    })
    expect(_result.current.state.counter).toBe(COUNTER_VALUE + 1)
  })
})
