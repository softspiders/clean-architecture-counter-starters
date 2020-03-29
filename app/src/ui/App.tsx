import React, { useContext } from 'react'
import Counter from './Counter'
import { AppContext } from '../index'

const App = (): JSX.Element => {
  const { counterPresenter } = useContext(AppContext)
  const { state, functions } = counterPresenter

  return (
    <Counter counter={state.counter} onClick={functions.handleIncrementClick} />
  )
}

export default App
