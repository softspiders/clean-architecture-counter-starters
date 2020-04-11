import React, { createContext } from 'react'
import CounterUseCaseInReactPresenter from './adapters/presenters/CounterUseCaseInReactPresenter'
import App from './ui/App'
import { UseCaseFactory } from './adapters'

interface ContextProps {
  counterPresenter: any
}

export const AppContext = createContext({} as ContextProps)

const useCaseFactory = new UseCaseFactory('http://localhost:3001')
const counterUseCaseIn = useCaseFactory.getCounterUseCaseIn()

export const AppFactory = (): JSX.Element => {
  const counterReactPresenter = CounterUseCaseInReactPresenter(counterUseCaseIn)
  return (
    <AppContext.Provider value={{ counterPresenter: counterReactPresenter }}>
      <App />
    </AppContext.Provider>
  )
}
