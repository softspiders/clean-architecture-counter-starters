import React, { useContext } from 'react'
import counterContainer from './CounterContainer'
import { AppContext } from '../index'
import Counter from './Counter'

const App = (): JSX.Element => {
  const { useCase } = useContext(AppContext)
  const { state, functions } = counterContainer({ useCase })

  return (
    <Counter counter={state.counter} onClick={functions.handleIncrementClick} />
  )
}

export default App
