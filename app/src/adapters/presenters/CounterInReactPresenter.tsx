import { useState, useCallback, useEffect } from 'react'
import {CounterUseCaseIn} from '../../domain/usecase'

interface CounterContainerProps {
  counterUseCaseIn: CounterUseCaseIn
}

const CounterInReactPresenter = ({ counterUseCaseIn }: CounterContainerProps) => {
  const [counter, setCounter] = useState<number>(1)

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

export default CounterInReactPresenter
