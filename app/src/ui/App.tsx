import React, { useContext } from 'react'
import { AppContext } from '../index'
import Counter from './Counter'
import CounterUseCaseInReactPresenter from '../adapters/presenters/CounterUseCaseInReactPresenter'

const App = (): JSX.Element => {
  const { counterUseCaseIn } = useContext(AppContext)
  const { state, functions } = CounterUseCaseInReactPresenter(counterUseCaseIn)

  return (
    <Counter counter={state.counter} onClick={functions.handleIncrementClick} />
  )
}

export default App
