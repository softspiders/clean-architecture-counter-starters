import { useState, useCallback, useEffect } from 'react'
import { CounterUseCaseIn } from '../../domain/usecases'

export const usePresenter = (counterUseCaseIn: CounterUseCaseIn) => {
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

  // TODO Extract to Controller
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
      increment: handleIncrement
    }
  }
}

export default usePresenter
