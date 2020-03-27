import { useState, useCallback, useEffect } from 'react'
import { CounterInteractor } from '../../domain/usecase'

interface CounterContainerProps {
  counterInteractor: CounterInteractor
}

const CounterInReactPresenter = ({ counterInteractor }: CounterContainerProps) => {
  const [counter, setCounter] = useState<number>(1)

  useEffect(() => {
    ;(async (): Promise<void> => {
      try {
        const newCounter: number = await counterInteractor.getCounter()
        setCounter(newCounter)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [counterInteractor])

  const handleIncrement = useCallback(async (): Promise<void> => {
    try {
      const newCounter: number = await counterInteractor.increment()
      setCounter(newCounter)
    } catch (error) {
      console.log(error)
    }
  }, [counterInteractor])

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
