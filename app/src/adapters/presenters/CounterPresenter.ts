import { useState, useCallback, useEffect } from 'react'
import { CounterUseCaseIn } from '../../domain/usecases'

export const CounterPresenter = (counterUseCaseIn: CounterUseCaseIn) => {
  const [counter, setCounter] = useState<number>()

  useEffect(() => {
    ;(async (): Promise<void> => {
      try {
        const newCounter: number = await counterUseCaseIn.getCounter()
        setCounter(newCounter)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [counterUseCaseIn])

  // TODO Вынести в Controller
  const handleIncrement = useCallback(async (): Promise<void> => {
    try {
      const newCounter: number = await counterUseCaseIn.increment()
      setCounter(newCounter)
    } catch (error) {
      console.log(error)
    }
  }, [counterUseCaseIn])

  return {
    state: {
      counter
    },
    functions: {
      handleIncrementClick: handleIncrement
    }
  }
}

export default CounterPresenter
