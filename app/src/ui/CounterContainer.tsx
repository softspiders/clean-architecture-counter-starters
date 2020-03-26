import { useState, useCallback, useEffect } from 'react'
import { CounterInteractor } from '../domain/usecases'
import { Counter } from '../domain/entities'

interface CounterContainerProps {
  useCase: CounterInteractor
}

const CounterContainer = ({ useCase }: CounterContainerProps) => {
  const [counter, setCounter] = useState<number>(1)

  const loadCounter = () => {
    (async (): Promise<void> => {
      try {
        const newCounter: Counter = await useCase.getCounter()
        setCounter(newCounter.count)
      } catch (error) {
        console.log(error)
      }
    })()
  }

  useEffect(loadCounter, [useCase])

  const handleIncrement = useCallback(async (): Promise<void> => {
    try {
      const newCounter: Counter = await useCase.increment()
      setCounter(newCounter.count)
    } catch (error) {
      console.log(error)
    }
  }, [useCase])

  return {
    state: {
      counter
    },
    functions: {
      handleIncrementClick: handleIncrement
    }
  }
}

export default CounterContainer
