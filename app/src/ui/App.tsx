import React, { useContext } from 'react'
import counterPresenter from '../adapters/presenters/CounterUseCaseInReactPresenter'
import { AppContext } from '../index'
import Counter from './Counter'

const App = (): JSX.Element => {
  const { counterUseCaseIn } = useContext(AppContext)
  const { state, functions } = counterPresenter({ counterUseCaseIn: counterUseCaseIn })

  return (
    <Counter
      counter={state.counter}
      onClick={functions.handleIncrementClick}
    />
  )
}

export default App