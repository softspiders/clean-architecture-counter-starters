import React, { useContext } from 'react'
import Counter from './Counter'
import CounterUseCaseInReactPresenter from '../adapters/presenters/CounterUseCaseInReactPresenter'
import { AppContext } from '../Root'

const App = (): JSX.Element => {
  const { factory } = useContext(AppContext)
  const counterUseCaseIn = factory.getCounterUseCase()
  const { state, functions } = CounterUseCaseInReactPresenter(counterUseCaseIn)

  return (
    <Counter counter={state.counter} onClick={functions.handleIncrementClick} />
  )
}

export default App
