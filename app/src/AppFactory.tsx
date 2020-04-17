import React, { createContext } from 'react'
import CounterPresenter from './adapters/presenters/CounterPresenter'
import App from './ui/App'
import { UseCaseFactory } from './adapters'

interface ContextProps {
  counterPresenter: any
}

export const AppContext = createContext({} as ContextProps)

const useCaseFactory = new UseCaseFactory('http://localhost:3001')
const counterUseCaseIn = useCaseFactory.getCounterUseCaseIn()

export const AppFactory = (): JSX.Element => {
  const counterPresenter = CounterPresenter(counterUseCaseIn)
  return (
    <AppContext.Provider value={{ counterPresenter }}>
      <App />
    </AppContext.Provider>
  )
}
