import React, { useContext } from 'react'
import counterPresenter from '../adapters/presenters/CounterInReactPresenter'
import { AppContext } from '../index'
import Counter from './Counter'

const App = (): JSX.Element => {
  const { counterInteractorIn } = useContext(AppContext)
  const { state, functions } = counterPresenter({ counterInteractorIn })

  return (
    <Counter
      counter={state.counter}
      onClick={functions.handleIncrementClick}
    />
  )
}

export default App