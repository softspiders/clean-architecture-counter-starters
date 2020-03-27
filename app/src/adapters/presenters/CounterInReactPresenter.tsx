import { useState, useCallback, useEffect } from 'react'
import {CounterInteractorIn} from '../../domain/usecase'

interface CounterContainerProps {
  counterInteractorIn: CounterInteractorIn
}

const CounterInReactPresenter = ({ counterInteractorIn }: CounterContainerProps) => {
  const [counter, setCounter] = useState<number>(1)

  useEffect(() => {
    ;(async (): Promise<void> => {
      try {
        const newCounter: number = await counterInteractorIn.getCounter()
        setCounter(newCounter)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [counterInteractorIn])

  const handleIncrement = useCallback(async (): Promise<void> => {
    try {
      const newCounter: number = await counterInteractorIn.increment()
      setCounter(newCounter)
    } catch (error) {
      console.log(error)
    }
  }, [counterInteractorIn])

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
