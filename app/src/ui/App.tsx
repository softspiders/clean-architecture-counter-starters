import React, { useContext } from 'react'
import { AppContext } from '../index'
import Counter from './Counter'
import { AdapterFactory } from '../adapters/AdapterFactory'

const App = (): JSX.Element => {
  const { counterUseCaseIn } = useContext(AppContext)
  const counterPresenter = AdapterFactory.getReactPresenter()
  const { state, functions } = counterPresenter(counterUseCaseIn)

  return (
    <Counter counter={state.counter} onClick={functions.handleIncrementClick} />
  )
}

export default App
